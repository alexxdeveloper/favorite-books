import React from 'react'
import ListComponent from './List.Component';

const FavoritesComponent = ({ books }) => {
    return (
        <>
            <h5 className='text-primary'>Meus Favoritos</h5>
            <ListComponent items={books} />
        </>
    );
}

export default FavoritesComponent;