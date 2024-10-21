import axios from 'axios';
import React, { useState } from 'react';

const Base64EncodeDecode = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };

  const handleChange = async (e) => {
    try {
      const csv = e.target.value;
      setInput(e.target.value)
      console.log(e.target.value);
      console.log(input);
      console.log(csv)
      if(selectedOption == 'encode'){
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/utils/encodeToBase64`, {
          params: {
            input: csv
          }
        
        });
        setOutput(response.data);
      }else{
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/utils/decodeBase64`, {
          params: {
            input: csv
          }
        
        });
        setOutput(response.data);
      }


    } catch (err) {

    } finally {

    }
  };  

  const handleDecodeChange = async (e) => {
    try {
      const csv = e.target.value;
      setInput(e.target.value)
      console.log(e.target.value);
      console.log(input);
      console.log(csv)
      const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/utils/decodeBase64`, {
        params: {
          input: csv
        }
      
      });
      console.log(JSON.stringify(response.data))
      console.log(response.data);
      setOutput(response.data);
    } catch (err) {

    } finally {

    }
  };  





  return (
    <div >
        <div className='flex justify-center content-normal'>
        <div>hi</div>
        </div>
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="bordered-radio-1" type="radio" value="encode" checked={selectedOption === 'encode'} onChange={handleOptionChange} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
        </div>
      <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input  id="bordered-radio-2" type="radio" value="decode" checked={selectedOption === 'decode'} onChange={handleOptionChange} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
      </div>


        <div className='flex justify-center content-normal border bg-card text-card-foreground flex-1 transition  flex-col p-6 hover:shadow-none shadow-none rounded-xl'>
            <div>Hello</div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
           onChange={handleChange}></textarea>
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

export default Base64EncodeDecode;
