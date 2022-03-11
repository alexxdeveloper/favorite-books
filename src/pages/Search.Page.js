import React, { useState, useEffect } from 'react';
import ListItemComponent from '../components/ListItem.Component';
import MenuComponent from '../components/Menu.Component';
import SearchComponent from '../components/Search.Component';
import { searchBooks, reduceText } from '../services/Search.Service';
import { FaImage } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/Favorites/Favorites.Actions'

import HeaderComponent from './../components/Header.Component';
import MainLayout from './../layouts/MainLayout';
import PaginationComponent from '../components/Pagination.Component';

const SearchPage = () => {

    // states
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [index, setIndex] = useState(0);

    // redux
    const listener = useDispatch();

    // retrieve search value
    const getSearchValue = (e) => {
        setSearch(e.target.value);
    }

    // change the index value
    const addIndexValue = () => {
        setIndex(index + 20);
        getBooks();
    }

    const removeIndexValue = () => {
        setIndex(index - 20);
        getBooks();
    }

    // retireve books
    const getBooks = () => {
        const response = searchBooks(search, index);
        response.then((value) => setBooks(value.items)).catch((e) => console.log(e));
    }

    useEffect(() => {
        console.log(books);
        console.log(index);
    }, [books, index]);

    return (
        <>
            <HeaderComponent />
            <MainLayout
                columnRight={
                    <SearchComponent
                        value={search}
                        onChange={(text) => getSearchValue(text)}
                        onSubmit={() => getBooks()}
                        searchResult={
                            books.length > 0
                                ? books.map((book, index) => {
                                    var image = book.volumeInfo.imageLinks === undefined
                                        ? <FaImage />
                                        : book.volumeInfo.imageLinks.smallThumbnail;

                                    var description = book.volumeInfo.description === undefined
                                        ? ""
                                        : reduceText(book.volumeInfo.description);

                                    return <ListItemComponent
                                        key={`${book.id}-${index}`
                                        }
                                        title={book.volumeInfo.title}
                                        img={image}
                                        description={description}
                                        onAdd={() => {
                                            listener(addFavorite(book.id, image, book.volumeInfo.title, description))
                                        }}
                                    />
                                })
                                : <></>
                        }
                    />
                }
                columnLeft={
                    <div>
                        <MenuComponent />
                        {
                            books.length > 0
                                ?
                                <PaginationComponent
                                    onRemove={() => removeIndexValue()}
                                    onAdd={() => addIndexValue()}
                                />
                                : <></>

                        }
                    </div>
                }
            />
        </>
    );
}

export default SearchPage;