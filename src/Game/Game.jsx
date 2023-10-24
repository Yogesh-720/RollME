import React from 'react'
import { useState } from 'react'
import Score from '../score/Score'
import NumberSelector from '../numberSelector/NumberSelector'
import RollDice from '../rolldice/RollDice'
import { Button, OutlineButton } from "../btn";
import Rules from '../Rules'

const Game = () => {
  const [error,seterror]=useState("")
const [score,setscore]=useState(0)
  const [selectedNumber,setselectedNumber]=useState("");
  const [dicenum,setdicenum]=useState(1);
  const [showRules, setShowRules] = useState(false);

  const resetScore = () => {
    setscore(0);
  };

  function randomnum(){
    if(!selectedNumber){
      seterror("Please Select a number")
      return;
    }

    const randnum= Math.floor(Math.random()*6+1)
    setdicenum((prev)=>randnum)

    if(selectedNumber== randnum){
    setscore((prev)=>prev + randnum)
    }else{
      setscore((prev)=>prev-2)
    }

    setselectedNumber(undefined)
}


  return (
    <div className='gameplay'>
    <div className='Navbar'>
    <Score score={score}/>
    <NumberSelector error={error} seterror={seterror} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
  </div>
    <RollDice dicenum={dicenum} randomnum={randomnum} />
    <div className='buttons'>
      <OutlineButton onClick={resetScore} >Reset</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    { showRules &&<Rules/>}
    </div>
  )
}

export default Game
