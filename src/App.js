import './App.css';
import Dashboard from './Component/Dashboard/DashBoard';
import Navbar from './Component/Navbar/Navbar';
function App() {
  document.body.style.backgroundColor = "#80808052"
  document.body.style.fontFamily = "font-family: sans-serif;";
  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  );
}

export default App;
