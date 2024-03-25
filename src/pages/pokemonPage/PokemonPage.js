import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import styles from './Pokemon.module.css';

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.log('Error fetching Pokemon list:', error);
            }
        };

        getApi();
    }, []);

    return (
        <div className={styles['pokemon-wrapper']}>
            <h1 className={styles['pokemon-h1']}>Pokemon</h1>
            <div className={styles['pokemon-block']}>
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonPage;
