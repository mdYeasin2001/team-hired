import React, { useEffect, useState } from 'react';
import playersData from '../../playersData/data.json';
import Hire from '../Hire/Hire';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [hiredPlayers, setHiredPlayers] = useState([])
    // console.log(players);
    useEffect(() => {
        setPlayers(playersData);
    }, []);
    const handleHirePlayers = (player) => {
        if (hiredPlayers.indexOf(player) === -1) {
            setHiredPlayers([...hiredPlayers, player]);
        } else {
            // played will not hire again
            alert('This player is already hired!');
        }
    }
    return (
        <section className="pb-5 bg-light">
            <h1 className="text-center display-6 fw-bold py-5">Hire Your Favorite Player</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-md-8">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {players.map((player, i) => <Player handleHirePlayers={handleHirePlayers} key={i} player={player} />)}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Hire players={hiredPlayers} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Players;