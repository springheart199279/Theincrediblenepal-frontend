import React from 'react'
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="Dwarika Hotel"
                    className='fpImage'
                />
                <span className="fpName">Dwarika Hotel</span>
                <span className="fpCity">Kathmandu</span>
                <span className="fpPrice">Starting from $300</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="Lalitpur Comfort Villa"
                    className='fpImage'
                />
                <span className="fpName">Lalitpur Comfort Villa</span>
                <span className="fpCity">Lalitpur</span>
                <span className="fpPrice">Starting from $180</span>
                <div className="fpRating">
                    <button>7.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="Nagarkot Mountain Resort"
                    className='fpImage'
                />
                <span className="fpName">Nagarkot Mountain Resort</span>
                <span className="fpCity">Nagarkot</span>
                <span className="fpPrice">Starting from $450</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="Kakani Fresh Resort"
                    className='fpImage'
                />
                <span className="fpName">Kakani Fresh Resort</span>
                <span className="fpCity">Kathmandu</span>
                <span className="fpPrice">Starting from $2500</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties