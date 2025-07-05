import { Toaster } from "react-hot-toast";
import AboutPage from "./components/AboutPage";
import Dashboardlayout from "./components/Dashboard/Dashboardlayout";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import RegisterPage from "./components/RegisterPage";
import ShortenUrlPage from "./components/ShortenUrlPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/ErrorPage";

const AppRouter = () =>{
    return(
        <>
            <Navbar/>
                <Toaster position='bottom-center'/>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/about' element={<AboutPage/>} />
                    

                    <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage/></PrivateRoute> } />
                    <Route path='/login' element={<PrivateRoute publicPage={true}><Login/></PrivateRoute>} />

                    <Route path='/dashboard' element={<PrivateRoute publicPage={false}><Dashboardlayout/></PrivateRoute>} />
                    <Route path='/error' element={<ErrorPage message="ERROR OCCURED !!!"/>} />
                    <Route path='*' element={<ErrorPage message="We can't seem to find the page you are looking for"/>} />
                </Routes>
            <Footer/>
        </>
    
    )
}

export default AppRouter;

export const SubDomainROuter = () =>{
    return(
        <Routes>
          <Route path='/:url' element={<ShortenUrlPage/>} />
        </Routes>
    )
}