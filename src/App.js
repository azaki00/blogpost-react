import "./App.css";
import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";


function App() {
  const [users, setUsers] = useState([
    { mail: "user@user", pass: "123" },
    { mail: "user2@user", pass: "1234" },
    { mail: "user3@user", pass: "12345" },
    { mail: "user4@user", pass: "123456" },
  ]);

  const [controlPost,setControlPost] = useState();
  const [posts, setPosts] = useState([
    {
      author: "x@x",
      topic: "qwerty",
      body: "Sint aliquip aliqua commodo occaecat enim consectetur nisi voluptate sunt nisi culpa. Adipisicing quis mollit proident fugiat irure eiusmod anim est laborum ut Lorem dolore Lorem proident. Magna in nostrud ipsum nostrud velit excepteur Lorem voluptate. Velit occaecat magna consectetur sit pariatur mollit tempor.",
      postID: "7242",
      likes: "24",
    },
    {
      author: "x@2",
      topic: "qrt",
      body: "Adipisicing aliqua sint deserunt dolor in pariatur. Quis aliqua consequat dolor non et nulla aliquip do Lorem consequat ut do qui pariatur. Nisi id ad deserunt incididunt cillum. Ex consectetur et adipisicing officia commodo magna. Lorem mollit ipsum velit cupidatat velit irure in est tempor ad occaecat commodo ut. Adipisicing et eu duis cillum commodo commodo culpa adipisicing aliquip aliqua eiusmod et. Sint do magna Lorem voluptate amet do nisi deserunt sunt consectetur aliqua.",
      postID: "1363",
      likes: "100",
    },
    {
      author: "x@3",
      topic: "zxb",
      body: "Laboris tempor pariatur magna aliqua esse enim labore minim. Reprehenderit excepteur in occaecat est ullamco. Proident ipsum elit magna qui qui sunt. Ea excepteur cillum aliqua et duis.",
      postID: "1361",
      likes: "541",
    },
    {
      author: "x@4",
      topic: "rha",
      body: "In velit duis est eiusmod deserunt pariatur id. Lorem veniam ipsum deserunt deserunt ea do deserunt excepteur dolor nulla dolore eu. Elit mollit elit ex pariatur eiusmod magna anim nisi.",
      postID: "3467",
      likes: "1361",
    },
    {
      author: "x@5",
      topic: "ar",
      body: "Sunt voluptate proident eu labore ad eu culpa elit. Ea commodo Lorem aliquip officia quis ad consectetur nisi eiusmod pariatur dolor. Dolore sit excepteur cupidatat minim aute commodo incididunt ut deserunt irure est anim. In voluptate amet sunt occaecat. Est minim dolore elit sunt in tempor ipsum ex laboris deserunt laboris.",
      postID: "7353",
      likes: "145",
    },
    {
      author: "x@6",
      topic: "awrwhar",
      body: "Ad aute in pariatur esse pariatur minim velit pariatur minim eu. Est nostrud fugiat veniam proident pariatur in. Elit duis dolore sunt quis id reprehenderit incididunt cupidatat sit magna et. Lorem velit cillum non minim incididunt. Dolor excepteur qui aliquip excepteur ea non sint aliquip.",
      postID: "8235",
      likes: "10",
    },
  ]);

  const [isNotLogged, setIsNotLogged] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  const [userIn, setUserIn] = useState({ mail: "", pass: "" });

  const [showCard, setShowCard] = useState(false);

  const [isNotAddPost, setIsNotAddPost] = useState(false);

  const unPost = () => {
    setIsNotAddPost((prevState) => !prevState);
  };

  const unCard = () => {
    setShowCard((prevState) => !prevState);
  };

  const unlog = () => {
    setIsNotLogged((prevState) => !prevState);
  };

  const unSign = () => {
    setIsNotSigned((prevState) => !prevState);
  };

  const signS = (mm, pp) => {
    var controlUser = { mail: mm, pass: pp };
    if (mm == "" || pp == "") {
      alert("Please type in a valid email and password!");
      return;
    }
    for (var i = 0; i < users.length; i++) {
      if (users[i].mail == mm) {
        alert("User already exists! Please Log in!");
        return;
      }
    }

    setUserIn({ mail: controlUser.mail, pass: controlUser.pass });
    setUsers([...users, controlUser]);
    alert("Succesfully signed up!");
    unSign();
    unCard();

    console.log(isNotSigned);
  };

  const logg = (m, p) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].mail == m && users[i].pass == p) {
        setUserIn({ mail: users[i].mail, pass: users[i].pass });
        alert("Succesfully logged in!");
        if (isNotSigned) {
          unSign();
        }

        unlog();
        console.log(isNotLogged);
        unCard();

        return;
      }
    }
    alert("This user is not found! Please sign up!");
  };

  const addP = (x,y) => {
    // console.log(x);
    // console.log(y);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newpost = {
      author: userIn.mail,
      topic: x,
      body: y,
      postID: id,
      likes: 0,
    };

    // console.log(newpost.author);
    // console.log(newpost.topic);
    // console.log(newpost.body);
    // console.log(newpost.postID);
    // console.log(newpost.likes);

    setPosts([newpost, ...posts]);
    unPost();
  };

  const filterID=() =>{
    const newfil = [...posts].sort((a,b) => b.postID-a.postID)
    setPosts(newfil);
  }

  const fl=() =>{
    const contt = [...posts].sort((a,b) => b.likes-a.likes)
    setPosts(contt);
  }

  const logOut = () => {
    const x = {mail: "", pass: ""};
    setUserIn(x);
    unCard();
    unlog();
  }

  const searchID=(id)=>{
    setControlPost(posts);
    setPosts(posts.filter(man => man.postID == id));
  }

  const refresh=()=>{
    if(controlPost != null){
      setControlPost(null);
      setPosts(controlPost);
    }
  }


  return (
    <>
      <Header />
      <Login
        isNotLogged={isNotLogged}
        unlog={unlog}
        logg={logg}
        unSign={unSign}
      />
      <Signup
        signS={signS}
        unSign={unSign}
        unlog={unlog}
        isNotSigned={isNotSigned}
      />

      <MainPage
        showCard={showCard}
        userIn={userIn}
        posts={posts}
        addP={addP}
        unPost={unPost}
        isNotAddPost={isNotAddPost}
        filterID={filterID}
        fl={fl}
        logOut={logOut}
        searchID={searchID}
        refresh={refresh}
      />
    </>
  );
}

export default App;
