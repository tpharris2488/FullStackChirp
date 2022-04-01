import React, { useState,  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const App = () => {
    const [newChirp, setNewChirp] = useState('')
    const [chirps, setChirps] = useState([
        {
            text: "Russell Westbrick sucks",
            date: 1647563565,
            id: 123
        },
        {
            text: "Twitter is a wasteland",
            date: 1647563566,
            id: 332
        },
        {
            text: "I love Fairfield",
            date: 1647563567,
            id: 392
        }
    ])
    
    const handleClick = function(){
        if(newChirp) {
            const chirp = {
                text: newChirp,
                date: Date.now(),
                id: uuidv4()
            }
            setChirps([chirp].concat(chirps))
        } else { 
            alert('chirp cannot be blank')
        }  
    }
    return (
        <div>
            <h1>Chirper</h1>
            <input onChange={(event) => {
                setNewChirp(event.target.value)
            }}></input>
            <button onClick={function(){
                handleClick();
            }}>chirp</button>
            {chirps.map(function(chirp){
                return (
                    <div className="chirp" key={chirp.id}>
                        <div> {moment(chirp.date).format('YYYY-MM-DD')} </div> 
                        <div> {chirp.text} </div>
                    </div> 
                )
            })}
        </div>
    );
};

export default App;