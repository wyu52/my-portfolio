import React, { useEffect, useState } from 'react';

const API_KEY = 'bf27c3eb72b742f7a649deaf9ae88915'

function FavouriteGame() {
    const [gameDetails, setGameDetails] = useState(null);
    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const responseCyberpunk = await fetch(`https://api.rawg.io/api/games?search=Cyberpunk%202077&key=${API_KEY}`);
                const dataCyberpunk = await responseCyberpunk.json();
                const cyberpunkDetails = dataCyberpunk.results[0];

                const responseRedDead = await fetch(`https://api.rawg.io/api/games?search=Red%20Dead%20Redemption%202&key=${API_KEY}`);
                const dataRedDead = await responseRedDead.json();
                const redDeadDetails = dataRedDead.results[0];

                const responseHalfLife = await fetch(`https://api.rawg.io/api/games?search=Half-Life:%20Alyx&key=${API_KEY}`);
                const dataHalfLife = await responseHalfLife.json();
                const halfLifeDetails = dataHalfLife.results[0];

                setGameDetails([cyberpunkDetails, redDeadDetails, halfLifeDetails]);
            } catch (error) {
                console.error('Error fetching game details:', error);
            }
        };

        fetchGameDetails();

    }, []);

    return (
        <div className="game-details">
            <h2>My Top Games</h2>
            {gameDetails && gameDetails.map((game, index) => (
                <div className='top-games' gamekey={index}>
                    <img src={game.background_image} alt={game.name} />
                    <h3>{game.name}</h3>
                    <p>Release Date: {game.released}</p>
                    <p>Rating: {game.rating}/5</p>
                </div>
            ))}
        </div>
    );
    };

export default FavouriteGame;