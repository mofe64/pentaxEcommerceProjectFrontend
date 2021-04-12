// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faCartPlus,  } from '@fortawesome/free-solid-svg-icons'
// import { Link, useHistory } from 'react-router-dom';
// import React, { useState } from 'react';


// const NavBarRight = () => {
//     const history = useHistory();
//     const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//     const onSearchIconClick = () => {
//         if (searchButtonClicked) {
//             setSearchButtonClicked(false)
//         } else {
//             setSearchButtonClicked(true)
//         }     
//     }

//     const goToCart = () => {
//         history.push('/cart')
//     }
//     return (
//         <>
//         <div className='navbar-right'>
//             <ul className='nav-links'>
//                 <li className='nav-link'>
//                     <Link to='/'>
//                         HOME
//                     </Link>
//                 </li>
//                 <li className='nav-link'>
//                     <Link to='/shop'>
//                         SHOP
//                     </Link>
//                 </li>
//                 <li className='nav-link'>
//                     <Link to='/'>
//                          CONTACT
//                     </Link>
//                 </li>
//                 </ul>
//                 <div className='nav-icons'>
//                     <div className='icon' onClick={goToCart}>
//                         <FontAwesomeIcon icon={faCartPlus}/>
//                     </div>
//                 <div className="icon">
//                 <FontAwesomeIcon icon={faSearch} onClick={
//                     onSearchIconClick
//                 } />
//                 </div>
                           
//             </div>
//         </div>
//         </>
//     )
// }

// export default NavBarRight;