
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';


function App() {
 

  return ( <div className="App">
    <AddUser/>
   <UserList/>
      
    </div>
  );
}

export default App;
