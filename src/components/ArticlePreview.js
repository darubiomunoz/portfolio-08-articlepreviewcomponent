import React, { useState } from 'react';
import './styles/ArticlePreview.css';

import drawersImage from '../assets/images/drawers.jpg';
import profileImage from '../assets/images/avatar-michelle.jpg';
import iconShare from '../assets/images/icon-share.svg';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';

const ArticlePreview = ({ name, date }) => {
    const [ clicked, setClicked ] = useState(false);
    const [ desktop, setDesktop ] = useState(false);

    const handleClick = event => {
        event.preventDefault();

        const cardInfo = document.querySelector('.card-info');
        const cardShare = document.querySelector('.card-share');

        if(!clicked) {
            setClicked(true);
            cardInfo.classList.add('invisible');
            cardShare.classList.remove('invisible');
        } else {
            setClicked(false);
            cardShare.classList.add('invisible');
            cardInfo.classList.remove('invisible');
        }
    }

    return (
        <div className="card">
            <img src={drawersImage} className="card-img-top" alt="Photograph of the article representing green drawers" />
            <div className="card-body">
                <h5 className="card-title">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h5>
                <p className="card-text">Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            </div>
            <div className="card-info ">
                <img src={profileImage}className="card-img-profile" alt="Photograph of the article's writer" />
                <div className="card-profile">
                    <h5 className="card-name">{name}</h5>
                    <time className="card-date">{date}</time>
                </div>
                <button className="card-button" onClick={event => handleClick(event)}>
                    <img src={iconShare} className="card-icon" alt="Share icon" />
                </button>
            </div>
            <div className="card-share invisible">
                <p className="card-legend">S H A R E</p>
                <img src={iconFacebook} className="card-icon-facebook" alt="Photograph of the article's writer" />
                <img src={iconTwitter} className="card-icon-twitter" alt="Photograph of the article's writer" />
                <img src={iconPinterest} className="card-icon-pinterest" alt="Photograph of the article's writer" />
                <button className="card-button change-color" onClick={event => handleClick(event)}>
                    <img src={iconShare} className="card-icon-active" alt="Share icon" />
                </button>
            </div>
        </div>
    );
}

export default ArticlePreview;