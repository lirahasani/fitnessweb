import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import SectionOne from "./Section-1";
import SectionTwo from "./Section-2";
import SectionThree from "./Section-3";
import SectionFour from "./Section-4";
import SectionFive from "./Section-5";

import "../../../assets/scss/common-styles/properties.styles.scss"

function Home() {
    return (
        <div style={{ background: "black" }}>
            <div className="container">
                <Header/>

                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>

                <Footer/>
            </div>
        </div>
    );
}

export default Home;

if (document.getElementById('fitness')) {
    ReactDOM.render(<Home />, document.getElementById('fitness'));
}
