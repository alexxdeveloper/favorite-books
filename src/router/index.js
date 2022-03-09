import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import SearchPage from '../pages/Search.Page';
import FavoritesPage from '../pages/Favorites.Page';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SearchPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;