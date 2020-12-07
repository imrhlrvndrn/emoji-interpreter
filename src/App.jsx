import React, { useState } from 'react';

// styles
import './css/index.css';

let emojis = {
    '🐗': 'Boar',
    '🐺': 'Wolf',
    '🦚': 'Peacock',
    '🦥': 'Sloth',
    '🐨': 'Koala',
    '🦙': 'Llama',
};

const App = () => {
    const [meaning, setMeaning] = useState('');
    const emojisList = Object.keys(emojis);

    const emojiInputHandler = (event) => {
        const meaning = emojis[event.target.value];
        // if (!meaning && (event.target.value = '')) return setMeaning('');
        setMeaning(meaning);
    };

    const emojiHandler = (item) => {
        const meaning = emojis[item];
        setMeaning(meaning);
    };

    return (
        <div className='mainApp'>
            <h1>Emoji Interpreter</h1>{' '}
            <input
                onChange={emojiInputHandler}
                type='text'
                name='emojiInput'
                id='emojiInput'
                placeholder='Search for an emojis meaning'
            />
            {meaning !== '' && <p className='emojiMeaning'>{meaning}</p>}
            <div className='emojiContainer'>
                {emojisList.map((item) => {
                    return (
                        <div key={item} className='emoji' onClick={() => emojiHandler(item)}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// const App = () => {
//   const emojiDictionary = {

//   }

//     const emojiInputHandler = (event) => {
//       event.preventDefault();

//     };

//     return (
//         <div className='mainApp'>
//             <h1>Emoji Interpreter</h1>
//             <input onChange={emojiInputHandler} type='text' name='emojiInput' id='emojiInput' />
//             <p className='emojiMeaning'></p>
//             <div className='emojiContainer'></div>
//         </div>
//     );
// };

export default App;