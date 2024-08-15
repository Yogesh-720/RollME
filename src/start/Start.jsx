import React from 'react'
import "../../src/App.css"
import { Button } from '../btn'
const Start = (props) => {
  return (
    <div className='Start_container' >
      <div className='Start_logo'>
        <img src="/images/dices 1.png" alt="" />
      </div>
      <div className='Start_content'>
        <h1>RollMe</h1>
        <Button onClick={props.press} >Play Now</Button>
      </div>
    </div>
  )
}

export default Start
