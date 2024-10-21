import axios from 'axios';
import React, { useState } from 'react';

const JsonFormatter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
  
  
  
    const handleChange = async (e) => {
      try {
        const csv = e.target.value;
        setInput(e.target.value)
        console.log(e.target.value);
        console.log(input);
        console.log(csv)
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/utils/formatjson`, {
          params: {
            json: csv
          }
        
        });
        setOutput(response.data);
      } catch (err) {
  
      } finally {
  
      }
    };
  
  
    return (
  
  
      
      <div className='flex justify-center content-center '> Hi
         <div className='flex justify-center content-center'>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
          onChange={handleChange} ></textarea>
          </div>
          <div className='flex justify-center content-center'>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
          value={output} readOnly></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
          </button>
          </div>
      </div>
    );
}

export default JsonFormatter;
