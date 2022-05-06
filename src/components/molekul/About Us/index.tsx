import React from 'react'
import { BrianCircle, DanielCircle, LisaCircle } from '../../../assets';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className="about-us">
    <div className="container">
        <div className="about-us__wrapper">
            <div className="about-us__team-members">
                <img src={LisaCircle} alt="lisa gtd" />
                <img src={DanielCircle} alt="danielle gtd" />
                <img src={BrianCircle} alt="brian gtd" />
            </div>
            <h2 className="about-us__heading">How it started</h2>
            <p className="about-us__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="about-us__team-members-info">
                <div className="about-us__team-member">
                    <img src={LisaCircle} alt="lisa gtd" />
                    <div className="about-us__team-member__info">
                        <h4>Lisa</h4>
                        <p>lisa@gtd.co</p>
                    </div>
                </div>
                <div className="about-us__team-member">
                    <img src={DanielCircle} alt="danielle gtd" />
                    <div className="about-us__team-member__info">
                        <h4>Danielle</h4>
                        <p>danielle@gtd.co</p>
                        <p>(123) 456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs