import React from 'react';




import './Dice.css';



import D1 from '../assets/svg/dice-six-faces-one.svg?react';

// import D1 from '../assets/svg/dice-six-faces-one.svg?react';
// import { ReactComponent as D1 } from '../assets/svg/dice-six-faces-one.svg?react'
// import D2 from '../assets/svg/dice-six-faces-two.svg?react';
// import D3 from '../assets/svg/dice-six-faces-three.svg?react';
// import D4 from '../assets/svg/dice-six-faces-four.svg?react';
// import D5 from '../assets/svg/dice-six-faces-five.svg?react';
// import D6 from '../assets/svg/dice-six-faces-six.svg?react';

interface DiceProps {
    onChangeStyle: () => void;
    count: number;
}

export default function Dice({ onChangeStyle, count }: DiceProps) {
    // const diceImages = [D1, D2, D3, D4, D5, D6]; // Array of components

    // Make sure 'count' is within the array bounds
    // const imageIndex = Math.max(0, Math.min(count, diceImages.length - 1));

    return (
        <div className='dice__container'>
            <button onClick={onChangeStyle}>
                <D1 fill="red" width={50} height={50}/>
                {/* Render the SVG component, not an <img> tag */}
                {/* <img src={D1} alt="D1" /> */}
                {/* {count} - No need to display count separately as the SVG shows it */}
            </button>
        </div>
    );
}