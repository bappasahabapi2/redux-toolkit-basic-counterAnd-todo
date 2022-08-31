import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/posts/Posts';
import { UserView } from './features/users/UserView';

function App() {
  return (
    <>
    <UserView/>
    <hr/>
    <hr/>
    <br></br>
    <Posts/>
    <Counter/>
    
    </>
  );
}

export default App;
