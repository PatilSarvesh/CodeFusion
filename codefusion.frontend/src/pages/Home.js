import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const conversions = [
    { name: 'CSV to JSON', path: 'csv-to-json' },
    { name: 'Base64 Encoder/Decoder', path: 'base64-encoder' },
    { name: 'JSON Formatter', path: 'json-formatter' },
    // Add more conversions as needed
  ];
  const [tools, setTools] = useState([]);
  
  useEffect(() => {
    const fetchAllUtils = async () => {
      try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/utils/GetUtils`);
          console.log(response);
          setTools(response.data)
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchAllUtils();
  }, []);


  return (
    <>
   <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">CodeFusion - Conversion Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((conversion) => (
            <Link key={conversion.id} to={conversion.link} className="hover:no-underline">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{conversion.title}</h3>
                <p className="text-gray-600">{conversion.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

    
  </>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '150px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default Home;
