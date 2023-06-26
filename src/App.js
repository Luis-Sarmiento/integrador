import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from "axios"; 
 
 function App() {
   const [characters, setCharacters] = useState([]);
 
   function onSearch(id) {
     axios(`https://rickandmortyapi.com/api/character/${id}`)
       .then(({ data }) => {
         const newData = characters.filter(character => character.name == data.name);
         if (data.name && newData == false) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            console.log('no hay info');
         }
     });
 
   }

   function onClose(id) {
     const newCharacters = characters.filter(character => character.id !== Number(id));
 
     setCharacters(newCharacters);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>         
      </div>
   );
}

export default App;
