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
  const [isNotSigned,setIsNotSigned] = useState(true)

  const [logsin, setLogsin] = useState({mail: "", pass: ""})
  
  const unlog=()=>{
    setIsNotLogged(prevState => !prevState);
  }

  const unSign=()=>{
    setIsNotSigned(prevState => !prevState);
  }

  // const signn=(mm,pp)>{
  //   var xam={mail: "", pass: ""};

  // }

const logg=(m,p)=>{
  for(var i=0; i< users.length; i++){
    if(users[i].mail == m && users[i].pass == p){
      setLogsin({mail: users[i].mail, pass: users[i].pass})
      alert("Succesfully logged in!");
      unlog();
      console.log(isNotLogged);
      
      return
    }
    
  }
  alert("This user is not found!");
  // setLogsin({mail: "",pass: "" });
}

  return (
    <>
      <Login isNotLogged={isNotLogged} logg={logg}/>
      <Signup isNotSigned={isNotSigned}/>
    </>
  );
}

export default App;
