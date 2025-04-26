import React, { useState, useEffect, useRef } from 'react';
import './harshuCss/Dropdown.css'; // External stylesheet (see below)


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    
      // <div className="dropdown" ref={dropdownRef}>
      //   <button onClick={toggleDropdown} className="dropbtn">Dropdown</button>
      //   <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
      //     <a href="/explorenorhtindia" className='nav-link px-4 link-dark underline-on-hover'>North India</a>
      //     <a href="/exploresouthindia" className='nav-link px-4 link-dark underline-on-hover'>South India</a>
      //   </div>
      // </div>
    
      <div className='nav-link px-4 link-dark underline-on-hover' ref={dropdownRef}>
        <button onClick={toggleDropdown} className="dropbtn">Dropdown</button>
        <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <b><a href="/explorenorhtindia" className='nav-link px-4 link-dark underline-on-hover'>North India</a> </b>
        <b><a href="/exploresouthindia" className='nav-link px-4 link-dark underline-on-hover'>South India</a></b>
        </div>
      </div>
  );
};

export default Dropdown;
