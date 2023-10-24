import styled from "styled-components"
const NumberSelector = ({error,seterror,selectedNumber,setselectedNumber}) => {
const arr=[1,2,3,4,5,6];

function errorhandle(value){
  setselectedNumber(value)
  seterror("")
}

  return (
    <div className='diceContainer' >
    <p className="error" >{error}</p>
      <div className='diceSelector'>
        {arr.map((values,i)=>
        <Box isselected={values==selectedNumber} onClick={()=>errorhandle(values)} className='Box' key={i} >{values}</Box>)}
      </div>
      <p>Select Number</p>
    </div>
  )
}

export default NumberSelector

const Box = styled.button`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    background: #FFF;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isselected?"black":"white" };
    color: ${(props) => !props.isselected?"black":"white" };
`;