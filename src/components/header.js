import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus,faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Header = () => {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

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
            <header className='header-area'>
                <nav className='navbar'>
                    <div className='navbar-left'>
                        <h1>PENTAZON</h1>
                    </div>
                    <div className='navbar-right'>
                        <ul className='nav-links'>
                            <li className='nav-link'>
                                 <a href="/">HOME</a>
                            </li>
                            <li className='nav-link'>
                                <a href='/'>SHOP</a>
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
                <div className='search-input-box' style={
                    (searchButtonClicked)? {display: 'block'} : {display: 'none'}
                }>
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
            </header>
        </div>
    )
}

export default Header;