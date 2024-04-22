import { Card } from "@tremor/react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';
import { CreateNewUser } from './components/CreateNewUser';
import { ListOfUsers } from './components/ListOfUsers';
import { Menu } from './components/Menu';
import { SignIn } from './components/SignIn';

function App() {


  return (
    <Router>
      <Card style={{ marginTop: "16px" }}>
        <Menu />
        <Routes>
          <Route path='/' element={<ListOfUsers />} />
          <Route path='/new' element={<CreateNewUser />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
        <Toaster richColors />
      </Card>
    </Router>
  )
}

export default App
