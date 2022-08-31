import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/posts/Posts';
import { UserView } from './features/users/UserView';
import TodoView from './features/todos/TodoView';

function App() {
  return (
    <>
    


    
        <TodoView/>
        <hr/>
        <hr/>
        <UserView/>
        <hr/>
        <hr/>
        <br></br>
        <Counter/>
        <Posts/>
    
    
    </>
  );
}

export default App;
