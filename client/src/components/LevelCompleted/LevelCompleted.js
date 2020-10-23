import React from 'react';
import classes from './LevelCompleted.module.css';
import GoldStar from '../../assets/icons/level-complete/star.svg';
import EmptyStar from '../../assets/icons/level-complete/empty-star.svg';
import Whale from '../../assets/icons/level-complete/whale-animation.svg';
import LevelNoButton from '../UI/Button/LevelNoButton/LevelNoButton';
import { Link } from 'react-router-dom';

const levelCompleted = props => {

    const goldStar = (<img src={GoldStar} alt="Gold Star" />);
    const emptyStar = (<img src={EmptyStar} alt="Empty Star" />);
    const whale = (<img src={Whale} alt="Whale" />);
    const currLevel = '/levels';
    const nextLevel = props.level === 3 ? '/' : `/level${props.level + 1}`;

    return (
        <div className={classes.LevelCompleted}>
            <div className={classes.LevelCompleteHeader}>
                Level {props.level} Completed!
            </div>
            <div className={classes.StarsContainer}>
                <div className={classes.Star1}>{props.score > 0 ? goldStar : emptyStar}</div>
                <div className={classes.Star2}>{props.score > 30 ? goldStar : emptyStar}</div>
                <div className={classes.Star3}>{props.score > 60 ? goldStar : emptyStar}</div>
            </div>
            <div className={classes.ScoreContainer}>
                Your Score : {props.score}
            </div>
            <div className={classes.ButtonsContainer}>
                <Link to={currLevel}>
                    <LevelNoButton url={currLevel}>Replay</LevelNoButton>
                </Link>
                <Link to={nextLevel}>
                    <LevelNoButton url={nextLevel}>Next</LevelNoButton>
                </Link>
            </div>
            <div className={classes.ImageContainer}>
                {whale}
            </div>
        </div>)
};

export default levelCompleted;