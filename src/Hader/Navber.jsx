import { NavLink } from "react-router-dom";

import './navber.css';
const Navbar = () => {
    return (
        <div className="flex  lg:justify-between items-center w-[1300px] mx-auto">
            <div>
              <img className="w-52" src="https://i.ibb.co/8ztsG2Y/Logo.png" alt="" />
            </div>
            <div>
               <NavLink className="mr-12 " to="/" >Home</NavLink>
               <NavLink className="mr-12" to="/donation" >Donation</NavLink>
               <NavLink to="/statistics" >Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;