import React from 'react'
import './SearchItem.css'
import { Link } from 'react-router-dom';

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img
                src='http://hotelgreenvalley.com.np/wp-content/uploads/2019/10/kings-bed-hotel-green-valley-370x370.jpg'
                alt='hotel'
                className='siImage'
            />
            <div className="siDesc">
                <h1 className="siTitle">Nagarkot Hills Apartments</h1>
                <span className="siDistance">2.5km from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Excellent Apartment with mountain view.
                </span>
                <span className="siFeatures">
                    Mountain view • 1 bathroom • 25m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$152</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to='/hotels/nagarkot-apartment-hotel'>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem