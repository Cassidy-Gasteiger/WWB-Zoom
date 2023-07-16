// import React, { useState, useEffect } from 'react';
// const TextDisplay = () => {
//   const [text, setText] = useState('');
//   const [currentWord, setCurrentWord] = useState('');
//   // Your text content to be displayed
//   const content = 'Hola cómo estás';
//   // Set the delay between words (in milliseconds)
//   const delay = 200;
//   // Function to update the current word
//   const updateCurrentWord = () => {
//     const words = content.split(' ');
//     const nextWord = words.shift();
//     setText(words.join(' '));
//     setCurrentWord(prevWord => prevWord + ' ' + nextWord);
//   };
//   // Effect to start the word display
//   useEffect(() => {
//     const interval = setInterval(updateCurrentWord, delay);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <h1>{currentWord}</h1>
//       <p>{text}</p>
//     </div>
//   );
// };
// export default TextDisplay;




import React, { useState, useEffect } from 'react';

export default function TextDisplay() {
  const [words, setWords] = useState([]);
 
  useEffect(() => {
    const delayedWords = ['Hola cómo estás'];
    let timeout;
   
    const displayWords = (index) => {
      setTimeout(() => {}, 10000);
      if (index < delayedWords.length) {
        timeout = setTimeout(() => {
          setWords(prevWords => [...prevWords, delayedWords[index]]);
          displayWords(index + 1);
        }, 20000); // Delay of 1 second (adjust as needed)
      }
    };

    displayWords(0);

    return () => {
      clearTimeout(timeout); // Clean up the timeout when the component is unmounted
    };
  }, []);

  return (
    <div>
      {words.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
}