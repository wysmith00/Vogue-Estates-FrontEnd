import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// const NavBar = ({ user, handleSignout }) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     return (
//         <>
//           <button className="dropdown" onClick={toggleDropdown}>Menu</button>
//           {user ?
//             <nav className={dropdownOpen ? " dropdown-menu show" : "dropdown-menu"}>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/team">Team</Link></li>
//                     <li><Link to="/location">Location</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/listing">Listing</Link></li>
//                     <li><Link to="" onClick={handleSignout}>Signout</Link></li>
//                 </ul>
//             </nav> 
//             :
//             <nav className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/team">Team</Link></li>
//                     <li><Link to="/location">Location</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/listing">Listing</Link></li>
//                     <li><Link to="" onClick={handleSignout}>Signout</Link></li>
//                 </ul>
//             </nav>
//         }
//     </>
//     );
// };

const NavBar = ({ user, handleSignout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <button className="dropdown" onClick={toggleDropdown}>Menu</button>
            {dropdownOpen && (
                <nav className="dropdown-menu show">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/listing">Listing</Link></li>
                        {user && <li><Link to="" onClick={handleSignout}>Signout</Link></li>}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default NavBar;