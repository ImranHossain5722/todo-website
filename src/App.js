import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Home from "./Components/Home/Home"
import { Route, Routes } from 'react-router-dom';
import CompletedTask from './Components/CompletedTasks/CompletedTask';
import Todo from './Components/To-Do/Todo';
import Calender from './Components/Calendar/Calender';
import Login from './Components/Login/Login';
import SignUp from './Components/Register/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddToDo from './Components/AddTodo/AddToDo';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav>

        <Routes>
           <Route path='/' element={<Home></Home>}></Route> 
           <Route path='/addTodo' element={<RequireAuth> <AddToDo></AddToDo>   </RequireAuth>}> </Route>
           <Route path='/completedTask' element={<CompletedTask></CompletedTask>}></Route> 
           <Route path='/todo' element={<Todo></Todo>}></Route> 
           <Route path='/calender' element={<Calender></Calender>}></Route > 

          
           <Route path='/login' element={<Login></Login>}></Route > 
           <Route path='/signUp' element={<SignUp></SignUp>}></Route > 

           <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>

        <Footer></Footer>
      </Nav>
    </div>
  );
}

export default App;
