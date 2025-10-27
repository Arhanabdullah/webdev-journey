import React from "react";
import { Bookmark } from 'lucide-react';
const Cards = () => {
    return (
        <div>
            <div className="parent">
                <div className="card">
                    <div className="top">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr_r3nj5XBwlhbKTIirZIKPmsMG6e7b7KFyTUxSfyNWX0jP7O2sHcTVo&s" alt="Amazon Logo Image" />
                        <button>Save<Bookmark size={14} /></button>
                    </div>
                    <div className="center">
                        <h3>Amazon <span> 6 days ago</span></h3>
                        
                        <h2>Senior UI/UX Designer</h2>
                        <div className="tag">
                            <h4>Part-Time </h4>
                            <h4>Senior Level </h4>
                        </div>
                    </div>

                    <div className="bottom">
                        <div>
                            <h3>$120/hr</h3>
                            <p>Mumbai, India</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
