import React, { useEffect, useState } from 'react';
import playersData from '../../playersData/data.json';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([]);
    // console.log(players);
    useEffect(() => {
        setPlayers(playersData);
    },[])
    return (
        <section>
            <h1 className="text-center display-6 fw-bold py-5">Hire Your Favorite Player</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-md-8">
                        {players.map((player, i) => <Player key={i} player={player}/>)}
                    </div>
                    <div className="hired"></div>
                </div>
            </div>
        </section>
    );
};

export default Players;