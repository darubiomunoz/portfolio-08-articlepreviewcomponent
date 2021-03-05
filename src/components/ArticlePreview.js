import React from 'react';
import './styles/ArticlePreview.css';

import drawersImage from '../assets/images/drawers.jpg';

const ArticlePreview = () => {
    return (
        <div className="card">
            <img src={drawersImage} className="card-img-top" alt="Photograph of the article representing green drawers" />
            <div className="card-body">
                <h5 className="card-title">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h5>
                <p className="card-text">Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            </div>
        </div>
    );
}

export default ArticlePreview;