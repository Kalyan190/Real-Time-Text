import React, { useState, useEffect } from 'react';
import realtime from './assets/realtime.png'

const App = () => {
   const [text, setText] = useState('');
   const [searchString, setSearchString] = useState('');
   const [replaceString, setReplaceString] = useState('');
   const [message, setMessage] = useState('');

   useEffect(() => {
      const savedText = localStorage.getItem('savedText');
      if (savedText) {
         setText(savedText);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('savedText', text);
   }, [text]);

   const handleTextChange = (e) => {
      setText(e.target.value);
      setMessage('');
   };

   const uniqueWordsCount = () => {
      const words = text.toLowerCase().match(/\b(\w+)\b/g);
      const uniqueWords = new Set(words);
      return uniqueWords.size;
   };

   const charCount = () => {
      const lettersAndNumbers = text.replace(/[^a-zA-Z0-9]/g, '');
      return lettersAndNumbers.length;
   };

   const handleReplace = () => {
      const regex = new RegExp(searchString, 'gi');
      if (!regex.test(text)) {
         setMessage('String is Not Found');
         setSearchString('');
         setReplaceString('');
      } else {
         const updatedText = text.replace(regex, replaceString);
         setText(updatedText);
         setMessage('');
         setSearchString('');
         setReplaceString('');
      }
   };

   const handleClear = () => {
      setText('');
      localStorage.removeItem('savedText');
      setMessage('');
   };

   return (
      <div className="container p-4 mx-auto max-w-lg md:my-10">
         <img src={realtime} alt="error" />
         <div className="mt-4 gap-2 flex flex-wrap items-center justify-center">
            <p className='md:p-3 max-sm:p-2 bg-black text-white rounded-md max-sm:text-xs'><strong >Unique Words :</strong> {uniqueWordsCount()}</p>
            <p className='md:p-3 max-sm:p-2 bg-black text-white rounded-md max-sm:text-xs'><strong >Character Count :</strong> {charCount()}</p>
         </div>

         <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none font-medium mt-3"
            value={text}
            onChange={handleTextChange}
            placeholder="Type here..."
         />



         <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <input
               type="text"
               className="border p-2 mr-2 rounded-md"
               placeholder="Search String"
               value={searchString}
               onChange={(e) => setSearchString(e.target.value)}
               disabled={!text}
            />

            <input
               type="text"
               className="border p-2 mr-2 rounded-md"
               placeholder="Replace With"
               value={replaceString}
               onChange={(e) => setReplaceString(e.target.value)}
               disabled={!text}
            />

            <button
               className={`p-2 rounded-md ${text ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'} w-full font-medium`}
               onClick={handleReplace}
               disabled={!text}
            >
               Replace All
            </button>

            <button
               className={`p-2 rounded-md ${text ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'} w-full font-medium`}
               onClick={handleClear}
               disabled={!text}
            >
               Clear Text
            </button>


            {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
         </div>
      </div>
   );
};

export default App;
