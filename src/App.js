import React, { useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context';
// import firebase from 'firebase';
import Post from './store/postContext';

function App() {
const {user,setUser}=useContext(AuthContext)
const {firebase}= useContext(FirebaseContext)
  useEffect(() => {
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })

  return (

    <div>
      <Post>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/view">
          <ViewPost/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
