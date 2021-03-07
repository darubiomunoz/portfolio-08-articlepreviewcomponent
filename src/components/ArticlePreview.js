import React, { useState } from 'react';
import './styles/ArticlePreview.css';

import drawersImage from '../assets/images/drawers.jpg';
import profileImage from '../assets/images/avatar-michelle.jpg';
import iconShare from '../assets/images/icon-share.svg';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';

const ComponentLogic = () => {
    const [ clicked, setClicked ] = useState(false);

    const screen = window.screen.width;

    const handleClick = event => {
        event.preventDefault();

        const cardInfo = document.querySelector('.card-info');
        const cardShare = document.querySelector('.card-share');
        const cardBox = document.querySelector('.card-box');
        const cardButton = document.querySelector('.card-button');
        const cardIcon = document.querySelector('.card-icon');

        const mobileClickActive = () => {
            setClicked(true);
            cardInfo.classList.add('invisible');
            cardShare.classList.remove('invisible');
        }
        const mobileClickInactive = () => {
            setClicked(false);
            cardInfo.classList.remove('invisible');
            cardShare.classList.add('invisible');
        }
        const desktopClickActive = () => {
            setClicked(true);
            cardBox.classList.remove('invisible');
            cardButton.classList.add('change-color-option1');
            cardIcon.classList.add('card-icon-active');
        }
        const desktopClickInactive = () => {
            setClicked(false);
            cardBox.classList.add('invisible');
            cardButton.classList.remove('change-color-option1');
            cardIcon.classList.remove('card-icon-active');
        }
        
        if(screen < 1024 && !clicked) mobileClickActive();
        if(screen < 1024 && clicked) mobileClickInactive();
        if(screen >= 1024 && !clicked) desktopClickActive();
        if(screen >= 1024 && clicked) desktopClickInactive();
    }

    const handleBlur = () => {
        const cardBox = document.querySelector('.card-box');
        const cardButton = document.querySelector('.card-button');
        const cardIcon = document.querySelector('.card-icon');

        cardBox.classList.add('invisible');
        cardButton.classList.remove('change-color-option1');
        cardIcon.classList.remove('card-icon-active');
    }

    return { handleClick, handleBlur };

}

const ArticlePreview = ({ name, date }) => {
    const { handleClick, handleBlur } = ComponentLogic();

    return (
        <div className="card">
            <img src={drawersImage} className="card-img-top" tabindex="0" alt="Photograph of the article representing green drawers" />
            <div className="card-body">
                <h5 className="card-title" tabindex="0">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h5>
                <p className="card-text" tabindex="0">Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            </div>
            <div className="card-info">
                <img src={profileImage}className="card-img-profile" tabindex="0" alt="Profile photograph of the article's writer" />
                <div className="card-profile">
                    <h5 className="card-name" tabindex="0">{name}</h5>
                    <time className="card-date" tabindex="0">{date}</time>
                </div>
                <button className="card-button" onClick={event => handleClick(event)}>
                    <img src={iconShare} className="card-icon" tabindex="0" alt="Share icon - Press to check or close sharing options" />
                </button>
                <div className="card-box invisible" aria-live="polite">
                    <p className="card-legend" tabindex="0">SHARE</p>
                    <img src={iconFacebook} className="card-icon-facebook" tabindex="0" alt="Share in Facebook" />
                    <img src={iconTwitter} className="card-icon-twitter" tabindex="0" alt="Share in Twitter" />
                    <img src={iconPinterest} className="card-icon-pinterest" tabindex="0" alt="Share in Pinterest" onBlur={() => handleBlur()} />
                    <span className="triangle-down" aria-hidden="true"></span>
            </div>
            </div>
            <div className="card-share invisible" aria-live="polite">
                <p className="card-legend" tabindex="0">SHARE</p>
                <img src={iconFacebook} className="card-icon-facebook" tabindex="0" alt="Share in Facebook" />
                <img src={iconTwitter} className="card-icon-twitter" tabindex="0" alt="Share in Twitter" />
                <img src={iconPinterest} className="card-icon-pinterest" tabindex="0" alt="Share in Pinterest" />
                <button className="card-button-active change-color-option2" onClick={event => handleClick(event)}>
                    <img src={iconShare} className="card-icon-active" tabindex="0" alt="Share icon - Press to close sharing options" />
                </button>
            </div>
        </div>
    );
}

export default ArticlePreview;