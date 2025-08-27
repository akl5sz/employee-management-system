import './App.css'
import EmployeeComponent from './components/EmployeeComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* //localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent></ListEmployeeComponent>}></Route>
          {/* //localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent></ListEmployeeComponent>}></Route>
          {/* //localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent></EmployeeComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
