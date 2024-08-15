import styled from "styled-components"



const RollDice = ({dicenum,randomnum}) => {


return (
    <Dicecontainer>
      <div className='diceimg'>
        <img onClick={randomnum} src= {`/images/dice_${dicenum}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to Roll</p>
    </Dicecontainer>
  )
}

export default RollDice

const Dicecontainer = styled.div`
width: 900px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
.diceimg img{
    height: 200px;
    width: 200px;
    cursor: pointer;
}
p{
    font-size: 20px;
    font-weight: 500;
}
`;