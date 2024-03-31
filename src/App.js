import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <h1>CRUD REACT-REDUX Example 1</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
