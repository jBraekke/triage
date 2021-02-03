import React from 'react';
import SirenImg from './siren.gif';
const Siren = (): JSX.Element => {
    return (
        <div>
            <img src={SirenImg} height={50} alt="siren animation"/>
        </div>
    );
};

export default Siren;