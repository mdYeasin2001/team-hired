import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    // console.log(props.player);
    const { name, img, age, club, nationality, best_foot, caps, first_cap, salary } = props.player;
    return (
        <div>
            <div className="card h-100 shadow">
                <img className="player-img" src={img} alt={name} />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>Age: {age}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Current club: {club}</p>
                    <p>Number of international caps: {caps}</p>
                    <p>Salary: ${salary}</p>
                    <button onClick={() => props.handleHirePlayers(props.player)} className="btn btn-secondary"><FontAwesomeIcon icon={faPlus} className="me-1" />Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Player;

/*

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
                            <p>Current club: {club}</p>
                            <p>Number of international caps: {caps}</p>
                            <p>Salary: ${salary}</p>
                            <button onClick={() => props.handleHirePlayers(props.player)} className="btn btn-secondary"><FontAwesomeIcon icon={faPlus} className="me-1" />Hire Now</button>
                        </div>
                    </div>
                </div>
            </div>



*/