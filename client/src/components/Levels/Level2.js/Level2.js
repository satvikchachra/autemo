import React from 'react';
import Level from '../../../containers/Level/Level';

const API_URL = 'http://localhost:5000/levelTwo';

const LEVEL = 2;

const level1 = props => {
    return (
        <Level level={LEVEL} url={API_URL} />
    )
}

export default level1;
