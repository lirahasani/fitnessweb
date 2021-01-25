import React from 'react';
import "../../../assets/scss/components/home/section-one.styles.scss";
import SectionOneImage from '../../../assets/images/section-one.jpg';

function SectionOne() {
    return (
        <div className="flex justify-center">
            <div className="container">
                <img src={ SectionOneImage } className="picture"/>
                <div className="shadow"></div>
                <p className="main-text">Get the body of your dreams</p>
            </div>
        </div>
    );
}

export default SectionOne;
