import React, {useState} from 'react';
import Header from './Header';
import Input from '../Components/Input';
import Date from '../Components/Date';
import Aufgaben from '../Components/Aufgaben';
import Aufgabe from './Aufgabe';
import Todos from '../Components/Todos';
import UnorderedList from '../Components/UnorderedList';
import DeleteAllButton from '../Components/DeleteAllButton';


function App() {
  const [input, setInput] = useState( [] )
  


  return (
    <div className="App">
     <Header/>
     <Date />
     <Input>
     </Input>
     <Aufgaben />
     <Aufgabe  />
     <UnorderedList>
       <Todos />    
     </UnorderedList>
     <DeleteAllButton />
    </div>
  );
}

export default App;
