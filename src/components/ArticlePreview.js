import React from 'react';
import './styles/ArticlePreview.css';

import drawersImage from '../assets/images/drawers.jpg';
import profileImage from '../assets/images/avatar-michelle.jpg';
import iconShare from '../assets/images/icon-share.svg';

const ArticlePreview = ({ name, date }) => {
    return (
        <div className="card">
            <img src={drawersImage} className="card-img-top" alt="Photograph of the article representing green drawers" />
            <div className="card-body">
                <h5 className="card-title">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h5>
                <p className="card-text">Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            </div>
            <div className="card-info">
                <img src={profileImage} className="card-img-profile" alt="Photograph of the article's writer" />
                <div className="card-profile">
                    <h5 className="card-name">{name}</h5>
                    <time className="card-date">{date}</time>
                </div>
                <button className="card-button"><img src={iconShare} className="card-icon" alt="Share icon" /></button>
            </div>
        </div>
    );
}

export default ArticlePreview;