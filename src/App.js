import React from "react";
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Route, Routes, useHistory } from 'react-router-dom';


function App() {
  return (
    <div className="App">


      <Header />
      <NavBar />

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        
        
        <Route path="/post" element={<NewPost/>}/>
                
        <Route path="/post/:id" element={<PostPage/>}/>
          
        

        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
