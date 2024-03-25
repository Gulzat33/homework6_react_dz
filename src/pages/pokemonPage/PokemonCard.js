import React, { useState, useEffect } from 'react';
import styles from './Pokemon.module.css'; // Импортируем стили

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.log('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, [pokemon.url]);

    return (
        <div className={styles['pokemon-card']}> {/* Используем класс из стилей */}
            {pokemonData && (
                <div>
                    {pokemonData.sprites && (
                        <img
                            className={styles['pokemon-img']}
                            src={pokemonData.sprites.other.dream_world.front_default}
                            alt={pokemonData.name}
                        />
                    )}
                    <h2 className={styles['pokemon-name']}>{pokemonData.name}</h2>
                    <button className={styles['pokemon-btn']}>Подробнее</button>
                </div>
            )}
        </div>
    );
};

export default PokemonCard;
