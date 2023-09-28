import React from 'react';
//import Header from './Header';
//import Footer from './Footer';

const ServicePage = () => {
  return (
    <div className="service-page">
    {/* <Header /> */}

      <section className="service-section">
        <h1>Our Services</h1>
        <p>Welcome to our book services page! We are dedicated to providing a range of services to book lovers and enthusiasts. Whether you're looking to explore new books, improve your reading experience, or engage with fellow readers, we have something for you.</p>

        <div className="service-card">
          <h2>Book Recommendations</h2>
          <p>Our team of avid readers handpicks personalized book recommendations based on your preferences. Discover your next favorite book!</p>
        </div>

        <div className="service-card">
          <h2>Reading Challenges</h2>
          <p>Join our reading challenges to set and achieve your reading goals. Challenge yourself, expand your reading horizons, and earn rewards!</p>
        </div>

        <div className="service-card">
          <h2>Book Club</h2>
          <p>Participate in our online book club discussions. Connect with fellow readers, share insights, and engage in thought-provoking conversations about books.</p>
        </div>
        
        <div className="service-card">
          <h2>Author Events</h2>
          <p>Stay updated about upcoming author events, book signings, and virtual meetups. Get a chance to interact with your favorite authors!</p>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ServicePage;
