import './App.css';
import Router from './Router';
import Header from "./component/feature/Header/Header";
import Footer from "./component/feature/Footer/Footer";
import {BrowserRouter} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
      

    </div>
 
  );
}

export default App;
