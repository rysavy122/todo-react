import Header from './Header';
import Input from '../Components/Input';
import Date from '../Components/Date';
import Aufgabe from '../Components/Aufgabe';
import Todo from '../Components/Todo';
import UnorderedList from '../Components/UnorderedList';
import DeleteAllButton from '../Components/DeleteAllButton';


function App() {
  return (
    <div className="App">
     <Header/>
     <Date />
     <Input />
     <Aufgabe />
     <UnorderedList>
        <Todo />    
     </UnorderedList>
     <DeleteAllButton />
    </div>
  );
}

export default App;
