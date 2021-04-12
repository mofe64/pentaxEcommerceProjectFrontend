// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faSearch, faCartPlus,} from '@fortawesome/free-solid-svg-icons'
// import { Link, useHistory } from 'react-router-dom';
// import { useState } from 'react';
// import '../css/hamburger.css';

// const HamNav = () => {
//     const history = useHistory();
//      const [searchButtonClicked, setSearchButtonClicked] = useState(false);
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
           
//                 <div className='hamburger-icon'>
//                     <FontAwesomeIcon icon={faBars}/>
//                 </div>
                
//                 {/* <div className='nav-drawer'>
//                     <ul className='ham-nav-links'>
//                     <li className='ham-nav-link'>
//                         <Link to='/'>
//                             HOME
//                         </Link>
//                     </li>
//                     <li className='ham-nav-link'>
//                         <Link to='/shop'>
//                             SHOP
//                         </Link>
//                     </li>
//                     <li className='ham-nav-link'>
//                         <Link to='/'>
//                             CONTACT
//                         </Link>
//                     </li>
//                     </ul>
//                     <div className='ham-nav-icons'>
//                         <div className='ham-icon' onClick={goToCart}>
//                             <FontAwesomeIcon icon={faCartPlus}/>
//                         </div>
//                     <div className="hamicon">
//                     <FontAwesomeIcon icon={faSearch} onClick={
//                         onSearchIconClick
//                     } />
//                         </div>
//                     </div>
//                 </div> */}
          
//         </>
//     )

// }

// export default HamNav;