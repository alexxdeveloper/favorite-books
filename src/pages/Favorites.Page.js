import React, { useState } from 'react'
import FavoritesComponent from '../components/Favorites.Component';
import HeaderComponent from '../components/Header.Component';
import MenuComponent from '../components/Menu.Component';
import MainLayout from '../layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux'
import ListItemComponent from './../components/ListItem.Component';
import { reduceText } from '../services/Search.Service'
import { FaImage } from 'react-icons/fa'
import { removeFavorite } from '../store/Favorites/Favorites.Actions'
import ModalComponent from '../components/Modal.Component';

const FavoritesPage = () => {

    // states
    const [showModal, setShowModal] = useState(false);
    const [bookId, setBookId] = useState('');

    // redux
    const listener = useDispatch();
    const books = useSelector(state => state.favorites);

    const open = () => setShowModal(true);
    const close = () => setShowModal(false);

    return (
        <>
            <HeaderComponent />
            <MainLayout
                columnLeft={<MenuComponent />}
                columnRight={
                    <FavoritesComponent
                        books={
                            books.length > 0
                                ? books.map((book, index) => {
                                    var image = book.img === undefined ? <FaImage /> : book.img

                                    var description = book.description === undefined ? "" : reduceText(book.description);

                                    return <ListItemComponent
                                        key={`${book.id}-${index}`
                                        }
                                        title={book.title}
                                        img={image}
                                        description={description}
                                        onRemove={() => {
                                            open();
                                            setBookId(book.id);
                                        }}
                                    />
                                })
                                : <></>
                        }
                    />
                }
            />
            <ModalComponent
                show={showModal}
                hide={() => close()}
                onCancel={() => close()}
                onConfirm={() => {
                    listener(removeFavorite(bookId));
                    close();
                }}
            />
        </>
    );
}

export default FavoritesPage;