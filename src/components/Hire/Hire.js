import React from 'react';

const Hire = (props) => {
    // console.log(props.player);
    const players = props.players;
    const totalBudget = players.reduce((sum, player) => sum + player.salary, 0)
    return (
        <div className="card mb-3 shadow sticky-top" style={{top: "1rem"}}>
            <div className="card-body">
                <h4 className="card-title">Total Hired: {players.length}</h4>
                <h5>Players-name: </h5>
                <ol>
                    {players.map((player, i) => <li key={i}>{player.name}</li>)}
                </ol>
                <h5>Total Budget: ${totalBudget}</h5>
            </div>
        </div>
    );
};

export default Hire;