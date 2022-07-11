import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App() {

  const [users, setUsers] = useState([
    {mail: "user@user", pass: "123"},
    {mail: "user2@user", pass: "1234"},
    {mail: "user3@user", pass: "12345"},
    {mail: "user4@user", pass: "123456"}
])

  const [isNotLogged,setIsNotLogged] = useState(true)
  const [isNotSigned,setIsNotSigned] = useState(false)

  const [logsin, setLogsin] = useState({mail: "", pass: ""})
  const [sign, setSign] = useState({mail: "", pass: ""})
  
  const unlog=()=>{
    setIsNotLogged(prevState => !prevState);
  }

  const unSign=()=>{
    setIsNotSigned(prevState => !prevState);
  }

  const signS=(mm,pp)=>{
    var controlUser={mail: mm, pass: pp};
    for(var i=0; i< users.length; i++){
      if(users[i].mail == mm){
        alert("User already exists! Please Log in!");
        return
      }
    }
    // if(mm ){
    // setUsers({...users, controlUser});
    // alert("Succesfully signed up!");
    // }
    if(isNotLogged){
      unlog();
    }
    unSign();
    console.log(isNotSigned);
  }

const logg=(m,p)=>{
  for(var i=0; i< users.length; i++){
    if(users[i].mail == m && users[i].pass == p){
      setLogsin({mail: users[i].mail, pass: users[i].pass})
      alert("Succesfully logged in!");
      if(isNotSigned){
        unSign();
      }
      unlog();
      console.log(isNotLogged);
      
      return
    }
    
  }
  alert("This user is not found! Please sign up!");
  setLogsin({mail: "",pass: "" });
}
  

  return (
    <>
      <Login isNotLogged={isNotLogged} unlog={unlog} logg={logg} unSign ={unSign} />
      <Signup signS = {signS} unSign={unSign} unlog={unlog} isNotSigned={isNotSigned}/>
    </>
  );
}

export default App;
