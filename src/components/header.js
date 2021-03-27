import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus,faTimes } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const searchAnimation = keyframes`${fadeInDown}`;

const SearchDiv = styled.div` animation: 1.5s ${searchAnimation}`;

const Header = () => {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);
    const [windowScrolled, setWindowSrolled] = useState(false);
    window.onscroll = function (e) {
        if (window.scrollY) {
            if (window.pageYOffset > 50) {
                setWindowSrolled(true)
            } else {
                setWindowSrolled(false)
            }
            
        }

    }
    const onSearchIconClick = () => {
        if (searchButtonClicked) {
            setSearchButtonClicked(false)
        } else {
            setSearchButtonClicked(true)
        }     
    }
    const closeSearchBar = () => {
        setSearchButtonClicked(false)
    }
    return (
        <div className='header-div'>
            <header className={(windowScrolled)? 'header-area-large': 'header-area'}>
                <nav className={ (windowScrolled)? 'navbar-large': 'navbar'}>
                    <div className='navbar-left'>
                        <h1>PENTAZON</h1>
                    </div>
                    <div className='navbar-right'>
                        <ul className='nav-links'>
                            <li className='nav-link'>
                                 <a href="/">HOME</a>
                            </li>
                            <li className='nav-link'>
                                <a href='/shop'>SHOP</a>
                            </li>
                            <li className='nav-link'>
                                <a href='/'>CONTACT</a>
                            </li>
                        </ul>
                        <div className='nav-icons'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faCartPlus}/>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faSearch} onClick={
                                    onSearchIconClick
                                } />
                            </div>
                        </div>
                    </div>
                </nav>
                <SearchDiv  style={
                        (searchButtonClicked)? {display: 'block'} : {display: 'none'}
                    }>
                    <div className={ (windowScrolled)? 'search-input-box-large': 'search-input-box'}>
                        <div className='search-container'>
                            <form className='search-form'>
                                <input type='text' className='search-input' placeholder='search here' />
                                <button type='submit' className='btn-search'></button>
                                <span className='close_search'>
                                    <FontAwesomeIcon icon={faTimes} onClick={closeSearchBar }/>
                                </span>
                            </form>
                        </div>
                    </div>
                </SearchDiv>
            </header>
        </div>
    )
}

export default Header;