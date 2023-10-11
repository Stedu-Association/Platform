import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { FiHome, FiCalendar, FiBookOpen, FiBriefcase, FiUsers, FiInfo, FiLogOut, FiMoon, FiSun, FiPlus } from 'react-icons/fi';
import ReactConfetti from 'react-confetti';
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSteduDropdown, setShowSteduDropdown] = useState(false);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowSteduDropdown(false); 
  };

  // Streak Popup
  const showStreakPopup = () => {
    PopupboxManager.open({
      content: (
        <div className="streak-popup-container">
          <div className="streak-popup">
            <h4>Congratulations!</h4>
            <p>You've logged in for 5 days in a row.</p>
            <button
              onClick={() => {
                PopupboxManager.close();
              }}
              className="bg-blue-500 text-white font-medium py-4 px-4 rounded-md hover:bg-blue-600 mt-4"
            >
              OK
            </button>
          </div>
        </div>
      ),
      config: {
        titleBar: { enable: false },
        fadeIn: true,
        fadeInSpeed: 500,
        overlayOpacity: 0.8,
      },
    });
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg text-gray-900`}
        style={{
          backdropFilter: 'blur(30px)',
          backgroundColor: (showDropdown || showSteduDropdown) ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
        }}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className='text-white'>
              <Link to="/">
                Stedu Platform
              </Link>
            </div>
            <motion.div className="md:flex space-x-4 hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Link to="/" className="flex items-center hover:text-blue-500 text-white  font-medium whitespace-nowrap">
                <FiHome size={18} className="mr-1 inline" />
                Home
              </Link>
              <Link to="/about" className="flex items-center hover:text-blue-500 text-white font-medium whitespace-nowrap">
                <FiInfo size={18} className="mr-1 inline" />
                About
              </Link>
              <Link to="/meet_the_team" className="flex items-center hover:text-blue-500 text-white font-medium whitespace-nowrap">
                <FiUsers size={18} className="mr-1 inline" />
                Meet the Team
              </Link>
              <Link to="/community" className="flex items-center text-white hover:text-blue-500 font-medium whitespace-nowrap">
                <FiUsers size={18} className="mr-1 inline" />
                Community
              </Link>
            </motion.div>

            <motion.div className="md:flex space-x-4 items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              {isAuthenticated ? (
                <div className="relative flex items-center space-x-4">
                  <motion.button
                    onClick={handleToggleDropdown}
                    className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full" />
                    <p className="font-medium text-white">{user.name}</p>
                    <motion.svg
                      className={`w-4 h-4 ${showDropdown ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 44 44"
                      stroke="currentColor"
                      whileHover={{ rotate: 90 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d={showDropdown ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                      />
                    </motion.svg>
                  </motion.button>

                  {/* User Profile Dropdown */}
                  {showDropdown && (
                    <motion.div className='py-5'
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className={`absolute right-0 mt-4 py-4  bg-white border border-gray-300 rounded-md shadow-lg z-10`}>
                        <Link
                          to="/profile"
                          className={`block px-4 py-4 text-sm text-black`}
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/settings"
                          className={`block px-4 py-4 text-sm text-black`}
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className={`block w-full text-left px-4 py-4 text-sm text-red-600`}
                        >
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  className={`bg-blue-500 text-white font-medium py-4 px-4 rounded-md hover:bg-blue-600 hover:bg-blue-400`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.4 } }}
                >
                  Sign up / Log in
                </motion.button>
              )}
            </motion.div>
            <motion.div className="md:hidden flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <button
                type="button"
                onClick={handleToggleDropdown}
                className={`text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 text-white`}
                aria-label="Toggle menu"
              >
                <svg className='h-2 w-6 fill-current viewBox="0 0 44 44'>
                  <path
                    className="heroicon-ui"
                    d="M4 6h16M4 14h16m-7 6h7"
                  />
                </svg>
              </button>
            </motion.div>
            {isAuthenticated && <ReactConfetti recycle={false} />}
          </div>
        </div>
      </nav>
      <PopupboxContainer />
      {isAuthenticated && showStreakPopup()}
    </div>
  );
};

export default NavBar;