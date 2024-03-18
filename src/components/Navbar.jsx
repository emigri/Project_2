import { Link } from "react-router-dom";
import "../App.css";
import { CodeBracketIcon , ShoppingCartIcon ,Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'
import {  } from '@heroicons/react/24/solid'
import { useState } from "react";

// import "./styles/style.css";

function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/ProductCatalogue" },
    { title: "About", path: "/About" },
    { title: "Contact", path: "/Contact" },
  ];

  const [isOpen, setisOpen]=useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10  py-4 px-7 md:flex justify-between items-center bg-blue-100">

       {/* logo  */}
        <div className="flex text-2xl cursor-pointer items-center text-blue-800 gap-2">
          <CodeBracketIcon className="w-7 h-7  text-blue-500"/>
          <span className="font-bold">codeKrafters</span>
        </div>

        {/* menu icon */}
        <div onClick={() => setisOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
            {isOpen ? <XMarkIcon/> : <Bars3Icon/>}
        
        </div>


         {/* Basket Icon */}
         <div className="flex cursor-pointer items-center ml-auto">
          <Link to="/Basket">
            <ShoppingCartIcon className="w-7 h-7 text-blue-500"/>
         </Link>
      
        </div>

       {/* Navigation Links */}
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all bg-blue-100 duration-500 ease-in ${isOpen ? 'top-13' : 'top-[-490px]'}`}>
          {navLinks.map((link, index) => (
            <li className=" font-semibold my-7 md:my-0 md:ml-8 text-blue-800" key={index}>
              <Link className="font-semibold" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
          
        </ul>
        


      </div>
    </div>   
  );
}

export default Navbar;
