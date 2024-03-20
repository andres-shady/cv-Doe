import"./App.css"
import React, {useEffect} from "react";
import  './App';
import { Link, Route,Routes } from "react-router-dom";

import Acueille from "./page/pageAcueille";
import Blog from "./page/pageBlog";
import Contact from "./page/pageContact";
import Realisation from "./page/pageRealisation";
import Service from "./page/pageService";
import MentionLegal from "./page/pageMentionLegal";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NotFound from "./page/page404";

function App(){
    useEffect(() =>{
        console.log(" https://api.github.com/users/github-john-doe")
        },[])

     return(
    
    <div className="App">
       

       <header>
        <Header/>
        </header>
       
    <Link to="/"> <button className="b1">retour</button></Link>
       
   
    
        <Routes>

        <Route path="/" element={<Acueille/>}></Route>
         <Route path="/Blog" element={<Blog/>}></Route>
         <Route path="/Contact" element={<Contact/>}></Route>
         <Route path="/MentionLegal" element={<MentionLegal/>}></Route>
         <Route path="/Realisation" element={<Realisation/>}></Route>
         <Route path="/Service" element={<Service/>}> </Route>
         <Route path="*" element={<NotFound/>}> </Route>
        </Routes>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
    
}     
    
     
export default App