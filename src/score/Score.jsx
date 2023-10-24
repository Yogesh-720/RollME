import React from 'react'

const Score = ({score}) => {
  return (
    <div className='Score_container'>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  )
}

export default Score
