import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App'
import Signup from './Signup'
import Register from './Register'
import Home from './Home'
import Profile from './Profile'
export default function Navigation(){


    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/Login" element={<Signup/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Profile" element={<Profile/>}></Route>
                
            </Routes>
        
        
        
        
        </BrowserRouter>







    )
}