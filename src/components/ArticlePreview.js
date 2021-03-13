import React, { useState, useEffect, useRef } from 'react';
import './styles/ArticlePreview.css';

import drawersImage from '../assets/images/drawers.jpg';
import profileImage from '../assets/images/avatar-michelle.jpg';
import iconShare from '../assets/images/icon-share.svg';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';

const ComponentLogic = () => {
    const [ clicked, setClicked ] = useState(false);
    let reference = useRef(null);
    let referenceButton = useRef(null);
    const screen = window.screen.width;

    const handleClick = event => {
        event.preventDefault();
        if(!clicked) setClicked(true);
        else setClicked(false);
    }

    /* const handleClickOutside = event => {
        if(reference.current && !reference.current.contains(event.target)) setClicked(false);
    } */

    const handleBlur = event => {
        event.preventDefault();
        setClicked(false);
    }

    useEffect(() => {

        let handleClickOutside = event => {
            if(!reference.current.contains(event.target) && !referenceButton.current.contains(event.target)) setClicked(false);
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return { handleClick, handleBlur, clicked, screen, reference, referenceButton };

}

const ArticlePreview = ({ name, date }) => {
    const { handleClick, handleBlur, clicked, screen, reference, referenceButton } = ComponentLogic();

    return (
        <div className="card">
            <img src={drawersImage} className="card-img-top" tabIndex="0" alt="Photograph of the article representing green drawers" />
            <div className="card-body">
                <h5 className="card-title" tabIndex="0">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h5>
                <p className="card-text" tabIndex="0">Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            </div>
            <div className={`card-info ${screen < 1024 && clicked ? 'invisible' : ''}`}>
                <img src={profileImage}className="card-img-profile" tabIndex="0" alt="Profile photograph of the article's writer" />
                <div className="card-profile">
                    <h5 className="card-name" tabIndex="0">{name}</h5>
                    <p className="card-date" tabIndex="0">{date}</p>
                </div>
                <button className={`card-button ${screen >= 1024 && clicked ? 'change-color-option1' : ''}`} ref={referenceButton} onClick={event => handleClick(event)}>
                   <img src={iconShare} className={`card-icon ${screen >= 1024 && clicked ?'card-icon-active' : ''}`} alt="Share icon - Press to check or close sharing options" />
                </button>
                <div className={`card-box ${screen >= 1024 && clicked ? '' : 'invisible'}`} ref={reference} aria-live="polite">
                    <p className="card-legend" tabIndex="0">SHARE</p>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={iconFacebook} className="card-icon-facebook" alt="Share in Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src={iconTwitter} className="card-icon-twitter" alt="Share in Twitter" />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" onBlur={event => handleBlur(event)}>
                        <img src={iconPinterest} className="card-icon-pinterest" alt="Share in Pinterest" />
                    </a>
                    <span className="triangle-down" aria-hidden="true"></span>
                </div>
            </div>
            <div className={`card-share ${screen < 1024 && clicked ? '' : 'invisible'}`} aria-live="polite">
                <p className="card-legend" tabIndex="0">SHARE</p>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={iconFacebook} className="card-icon-facebook" alt="Share in Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img src={iconTwitter} className="card-icon-twitter" alt="Share in Twitter" />
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                    <img src={iconPinterest} className="card-icon-pinterest" alt="Share in Pinterest" />
                </a>
                <button className="card-button-active change-color-option2" onClick={event => handleClick(event)}>
                    <img src={iconShare} className="card-icon-active" alt="Share icon - Press to close sharing options" />
                </button>
            </div>
        </div>
    );
}

export default ArticlePreview;