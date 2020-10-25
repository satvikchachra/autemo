import React, { Component } from 'react';

import * as faceapi from 'face-api.js';
import classes from './EmotionDetection.module.css';

const videoRef = React.createRef();
const canvasRef = React.createRef();
let requestInterval;
let stream;

class EmotionDetection extends Component {

    componentDidMount() {
        const loadModels = async () => {
            // Load models
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
            await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
            await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
            await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

            // WebCam
            // let stream;
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {}
                });
            } catch (err) {
                alert(
                    "Sorry - Your Browser isn't allowing access to your webcam.  Try a different browser for this device?"
                );
                console.log("getUserMedia Error", err);
            }

            videoRef.current.srcObject = stream;

            window.streamStorage = stream;

            return new Promise((resolve, _) => {
                videoRef.current.onloadedmetadata = () => {
                    requestInterval = setInterval(async () => {
                        this.detectExpression();
                        resolve();
                    }, 25);

                };
            });
        };

        loadModels();
    }

    componentWillUnmount() {
        // Stop requests for recognizong expressions
        clearInterval(requestInterval);

        // Stop using webcam
        stream.getTracks()
            .forEach((track) => track.stop());
    }

    detectExpression = async () => {
        const videoEl = videoRef.current;
        const canvas = canvasRef.current;

        const displaySize = {
            width: 300,
            height: 200
        };

        try {
            faceapi.matchDimensions(canvas, displaySize);
        }
        catch (err) {
            console.log(err);
        }

        try {

            const detections = await faceapi
                .detectAllFaces(videoEl,
                    new faceapi.TinyFaceDetectorOptions()
                )
                .withFaceLandmarks()
                .withFaceExpressions();

            const resizedDetections = faceapi.resizeResults(detections, displaySize);

            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

            faceapi.draw.drawDetections(canvas, resizedDetections);
            // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <div className={classes.Container}>
                    <div className={classes.CaptureContainer} >
                        <video
                            ref={videoRef}
                            id="inputVideo"
                            className="captureBox"
                            autoPlay
                            muted
                            playsInline
                        ></video>
                        <canvas id="overlay" ref={canvasRef} className="captureBox" />
                    </div>
                </div >
            </div>
        )
    }
}

export default EmotionDetection;