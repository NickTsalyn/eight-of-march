
import {Routes, Route} from 'react-router-dom'
import { HomePage } from './HomePage';
import { WelcomePage } from './WelcomePage';


export const App = () => {
  return (
   <Routes>
    <Route path='/' element={<WelcomePage/>}/> 
    <Route path='/home' element={<HomePage/>}/>
   </Routes>
  );
};
