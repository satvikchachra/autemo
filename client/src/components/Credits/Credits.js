import React from 'react';
import classes from './Credits.module.css';

const credits = props => {

    const dribbleLinkTree = () => {
        window.open('https://dribbble.com/shots/3997009-Robot-Emoji-Animation-WIP');
        window.open('https://dribbble.com/shots/2583480-Laboratory');
        window.open('https://dribbble.com/shots/12023319-');
        window.open('https://dribbble.com/shots/9554783-Say-Hello');
        window.open('https://dribbble.com/shots/5414967-Instant');
        window.open('https://dribbble.com/shots/14249024-Perfocal-com');
    };

    const publicationLinkTree = () => {
        window.open('https://www.sciencedaily.com/releases/2007/06/070622183516.htm');
        window.open('https://molecularautism.biomedcentral.com/articles/10.1186/s13229-016-0113-9')
    };

    return (
        <div className={classes.Credits}>
            <div className={classes.Wrapper}>
                <div className={classes.Header}>
                    Credits
                </div>
                <div className={classes.CreditsList}>
                    <ul>
                        <li className={classes.ListItem}>
                            Research obtained from various <a onClick={publicationLinkTree} href="https://www.researchgate.net/publication/339210193_Autism_Expression_and_Understanding_of_Emotions_Literature_Review">publications</a>.
                        </li>
                        <li className={classes.ListItem}>
                            Landing page GIFS obtained from <a onClick={dribbleLinkTree} href="http://www.dribbble.com">dribbble.com</a>
                        </li>
                        <li className={classes.ListItem}>
                            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>
                        </li >
                        <li className={classes.ListItem}>
                            Sound effects obtained from <a href="https://www.zapsplat.com">zasplat.com</a>
                        </li >
                        <li className={classes.ListItem}>
                            Stock videos by <a href="http://www.videezy.com">videezy.com</a>
                        </li>
                        <li className={classes.ListItem}>
                            SVGs obtained from <a href="http://undraw.co">undraw.co</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default credits;