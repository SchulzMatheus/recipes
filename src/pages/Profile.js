import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <div>
      <Header
        title="Profile"
        haveSearch={ false }
      />
      <Footer />
    </div>
  );
}

export default Profile;
