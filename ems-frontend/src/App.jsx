import './App.css'
import FooterComponent from './components/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';

function App() {

  return (
    <>
        <HeaderComponent></HeaderComponent>
        <ListEmployeeComponent></ListEmployeeComponent>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default App
