import React from "react";
import { Bookmark } from 'lucide-react';
const Cards = (props) => {
    return (
        <div>
            <div className="parent">
                <div className="card">
                    <div>
                        <div className="top">
                        <img src={props.brandLogo} alt= {props.brandName} />
                        <button>Save<Bookmark size={14} /></button>
                    </div>
                    <div className="center">
                        <h3>{props.brandName} <span> {props.datePosted}</span></h3>
                        
                        <h2>{props.position}</h2>
                        <div className="tag">
                            <h4>{props.tag1} </h4>
                            <h4>{props.tag2} </h4>
                        </div>
                    </div>
                    </div>

                    <div className="bottom">
                        <div>
                            <h3>{props.paymentPerHour}</h3>
                            <p>{props.location}</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
