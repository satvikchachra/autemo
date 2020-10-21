import React from 'react';
import classes from './FooterSection.module.css';

const footerSection = props => {
    return (
        <div className={classes.FooterSection}>
            Built with {" "}
            <i className="fa fa-coffee" aria-hidden="true" />
            {" "} by <span><a href="https:github.com/satvikchachra">Satvik Chachra</a></span>
        </div>
    )
}

export default footerSection;