import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logos/sign.png';
import { useAuth0 } from '@auth0/auth0-react';
import { FiBookOpen, FiBriefcase, FiCalendar, FiGlobe, FiPlus, FiUsers } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Landing = () => {
  const [typingText, setTypingText] = useState('');
  const [glowAnimation, setGlowAnimation] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const websiteName = 'Stedu Association';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypingText((prevText) => websiteName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === websiteName.length) {
        clearInterval(typingInterval);
        setGlowAnimation(true);
      }
    }, 100);
  }, []);

  const testimonials = [
    {
      text: "I loved this course !! I was also able to get involved in helping and I really enjoyed that. The lecturers were all interesting and really wanted to be there. I’d be open to taking another course with STEDU in the future. I also love that there were no fees to participate.",
      author: "Introduction to Astronomy Course Student",
    },
    {
      text: "Astronomy Course- Taking this course was one of the best decisions of my life! I’ve learned so much ranging from topics like comets to phases of the moon to the observable/un-observable universe, etc. I knew I wanted to major in astronomy in college and this course strengthened my passion even more!",
      author: "Introduction to Astronomy Course Student",
    },
    {
      text: "Introduction to Cancer Biology Fall Course 2021 was one of the best online courses I have taken! The topics and speakers were very in-depth yet comprehensible for learners in the field and the beginners. I would love to take other courses offered by Stedu Association.",
      author: "Introduction to Cancer Biology Course Student",
    },
    {
      text: "This course was amazing! I was astonished to see the diversity of lecturers! They were all so good and well-versed in cancer biology. I enjoyed this course and will surely attend all future courses too.",
      author: "Introduction to Cancer Biology Course Student",
    },
  ];

  const impactStats = [
    { label: 'students', value: '480+' },
    { label: 'lectures', value: '45+' },
    { label: 'countries', value: '14+' },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="hero-section bg-gradient-to-r from-black to-blue-900 text-white py-10 px-10 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <img src={Logo} alt="Logo" className="w-60 mb-4 mx-auto" />
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`hero-title text-4xl md:text-6xl font-bold ${glowAnimation ? 'glow-animation' : ''}`}
            >
              {typingText}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-description text-lg mt-4"
            >
              Providing STEM Education and Opportunities for All
            </motion.p>
          </div>
        </div>
      </div>


      <section className="bg-black text-white py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="rounded-lg overflow-hidden hover:shadow-md hover:glow">
              <h2 className="text-3xl font-bold mb-6 p-4">What is Stedu Platform?</h2>
              <p className="text-lg p-4">
                Some info about Stedu Platform
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Impact Stats Section */}
      <section className="bg-gradient-to-t from-black via-blue-900 to-black text-white p-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-50 rounded-lg p-6 text-center shadow-md"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white p-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
          <Slider
            dots={true}
            infinite={true}
            autoplay={true}
            autoplaySpeed={4000}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-black text-gray-200 rounded-lg shadow-md p-6">
                <p className="testimonial-text text-lg mb-4">{testimonial.text}</p>
                <p className="testimonial-author font-bold text-blue-500">{testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div >
  );
};

export default Landing;
