import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import Logo from '../assets/Logos/sign.png';
import app from '../db/Firebase';
import { getDatabase, ref, push } from 'firebase/database';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const db = getDatabase(app);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = async (e) => {
    e.preventDefault();

    try {
      await push(ref(db, "subscriptions"), {
        email,
        timestamp: new Date().toISOString(),
      });

      setSubscriptionSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <footer className='bg-gray-900 text-white p-12 relative'>
      <div className="absolute inset-0 backdrop-blur-lg"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-lg font-bold">Stedu Association</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <FiMail />
              <span>info@steduassociation.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMapPin />
              <span>South Korea</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMapPin />
              <span>California</span>
            </div>
          </div>
        </div>
        <motion.div className="flex justify-center space-x-4 mt-6">
          <motion.a
            href="https://www.facebook.com/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.twitter.com/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/steduassociation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="text-white text-2xl" />
          </motion.a>
        </motion.div>
        <hr className='my-6 border-gray-600' />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p>Sign Up for Our Monthly Newsletter!</p>
            <p className="text-blue-500 cursor-pointer hover:underline">We will not spam you, really.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <form className="flex items-center" onSubmit={handleSubscription}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                className="rounded-l-md bg-gray-800 px-3 py-2 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 rounded-r-md px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
              >
                <IoMdPaperPlane className="text-xl" />
              </button>
            </form>
            {subscriptionSuccess && (
              <p className="mt-2 text-green-500">Thanks for subscribing!</p>
            )}
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Stedu Association. All rights reserved.</p>
        </div>
        <div className="mt-6 text-center">
          <ul className="flex flex-wrap justify-center">
            <li className="mx-2">
              <a href="#">Sponsor Us</a>
            </li>
            <li className="mx-2">
              <a href="#">Volunteer with Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;