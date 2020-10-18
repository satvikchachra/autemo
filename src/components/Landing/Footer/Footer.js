import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const footer = props => <div className={classes.Footer}>
    <div className={classes.FooterWrapper}>
        <div className={classes.TextWrapper}>
            Built with {" "}
            <FontAwesomeIcon icon={faCoffee} />
            {/* <i className="fa fa-coffee" aria-hidden="true" /> */}
            {" "} by <span><a target="_blank" href="https:github.com/satvikchachra">Satvik Chachra</a></span>
            <br />
        </div>
        <div className={classes.IconsWrapper}>
            <a target="_blank" href='https:github.com/satvikchachra'>
                <FontAwesomeIcon className={classes.SocialIcons} icon={faGithub} size="2x" />
                {/* <i className="fa fa-github fa-2x" aria-hidden="true" /> */}
            </a>
            <a target="_blank" href='https://twitter.com/satvik_codes'>
                <FontAwesomeIcon className={classes.SocialIcons} icon={faLinkedin} size="2x" />
                {/* <i className="fa fa-twitter fa-2x" aria-hidden="true" /> */}
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/satvikchachra'>
                <FontAwesomeIcon className={classes.SocialIcons} icon={faTwitter} size="2x" />
                {/* <i className="fa fa-linkedin fa-2x" aria-hidden="true" /> */}
            </a>

            {/* <img src={githubLogo} className={classes.IconLogo} />
            <img src={linkedinLogo} className={classes.IconLogo} />
            <img src={twitterLogo} className={classes.IconLogo} /> */}
        </div>
    </div>
</div>;

export default footer;