import React from 'react';
import Header from '../components/Header';

const Home = () => {
  // TODO: Connect to the backend API when ready.
  // const fetchHomeData = async () => {
  //   try {
  //     const response = await fetch('/api/home');
  //     const data = await response.json();
  //     setHomeData(data);
  //   } catch (error) {
  //     console.error('Error fetching home data:', error);
  //   }
  // };

  // Using mock data for now
  const mockHomeData = {
    title: "Welcome to YourApp",
    subtitle: "The best solution for your needs",
    description: "Discover amazing features and capabilities that will transform the way you work."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {mockHomeData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {mockHomeData.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            {mockHomeData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;