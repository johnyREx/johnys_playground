import MainPage from "./pages/MainPage"
import JobInfoPage from "./pages/JobInfoPage"; 
import { Route, Routes } from 'react-router-dom'; 
  
function App() { 
  return ( 
      <Routes> 
        <Route exact path="/" Component={MainPage}/> 
        <Route path="/job-info" Component={JobInfoPage}/> 
      </Routes>   
  ) 
} 
  
export default App