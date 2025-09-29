import React from 'react';
import AboutImage from '../assets/about.jpeg';
import FeaturesSection from '../components/FeaturesSection';
const About = () => {
  return (

    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mt-5 mb-5">
        
        {/* Image */}
        <div className="lg:w-1/2 w-full ">
          <img 
            src={AboutImage} 
            alt="About Foodie" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 w-full space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Foodie</h2>
          <p className="text-gray-600 text-lg">
            At Foodie, we are passionate about delivering delicious meals right to your doorstep. 
            Our platform connects you with top-rated restaurants, ensuring freshness, quality, and convenience in every order.
          </p>
          <p className="text-gray-600 text-lg">
            Our mission is to bring happiness through food. We focus on quick delivery, safe payment, and excellent customer support.
          </p>
          <p className="text-gray-600 text-lg">
            Join millions of satisfied customers and experience the best food delivery service in your city.
          </p>
        </div>
      </div>
      <FeaturesSection/>
    </section>
  );
};

export default About;
