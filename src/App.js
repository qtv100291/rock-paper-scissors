import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import rock from './image/rock.png';
import paper from './image/paper.png';
import scissors from './image/scissors.png';
import './App.css';

const game = [
  {
    id : 1,
    link: rock
  },
  {
    id : 2,
    link: paper
  },
  {
    id : 3,
    link: scissors
  }
]

const getResult = ( user, computer ) => {
  let result;
  switch (user.id){
    case 1: 
      if (computer.id === 2) return "Thua"
      if (computer.id === 3) return "Thắng"
      if (computer.id === 1) return "Hòa"
    case 2: 
      if (computer.id === 1) return "Thắng"
      if (computer.id === 3) return "Thua"
      if (computer.id === 2) return "Hòa"
    case 3: 
      if (computer.id === 1) return "Thua"
      if (computer.id === 2) return "Thắng"
      if (computer.id === 3) return "Hòa"
  }
}

function App() {
  const [image, setImage] = useState();
  const [computerImage, setcomputerImage] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isRunning,setIsRunning] = useState(false);
  // const [result , setResult] = useState("");

  const getImage = newImage => {
    setImage(newImage);
    console.log("ehe")
    let randomNumber = Math.floor(Math.random()*3);
    let newComputerImage;
    let i = 0;
    const myInterval = setInterval (() => {
      i++;
      randomNumber = randomNumber < 2 ? randomNumber + 1 : 0; 
      newComputerImage = {...game[randomNumber]};
      setcomputerImage(newComputerImage);
      if (i === 10){
        clearInterval(myInterval);
      }
    },125);
    
    setTimeout(() =>{
      const result = getResult(newImage,newComputerImage);
      if (result === "Thắng") setUserScore(userScore + 1)
      if (result === "Thua") setComputerScore(computerScore + 1)
      if (result === "Hòa") return
    },1500)
  }
  

  useEffect(() => {
    if (userScore === 5) {
      alert("bạn thắng")
      setUserScore(0);
      setComputerScore(0);
    }
  
    if (computerScore === 5) {
      alert("bạn thua")
      setUserScore(0);
      setComputerScore(0);
    }    
  },[userScore,computerScore])
  
  return (
    <React.Fragment>
      <Header />
      <Body 
        user = {image} 
        computer = {computerImage} 
        userScore = {userScore} 
        computerScore = {computerScore}
      />
      <Footer onGetImage = {getImage} game = {game}/>
    </React.Fragment>
  );
}

export default App;
