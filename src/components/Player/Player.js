import React from 'react';
import './Player.css';

const Player = (props) => {
    // console.log(props.player);
    const {name, img, age, club, nationality, best_foot, caps, first_cap} = props.player;
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img className="player-img" src={img} alt={name} />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p>Age: {age}</p>
                            <p>Nationality: {nationality}</p>
                            <p>Best foot: {best_foot}</p>
                            <p>Current club: {club}</p>
                            <p>Number of international caps: {caps}</p>
                            <p>First cap: {first_cap}</p>
                            <button className="btn btn-secondary">Hire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;