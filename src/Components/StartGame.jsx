import styled from "styled-components"
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="dice">
      <img src="/images/dice.png" alt="dice"/>
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1182px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content{
        h1{
            
            font-size: 80px;
            white-space: nowrap;
        }
    }
`

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    min-width: 200px;
    border: none;
    background: #000000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.5s background ease-in;
    }
`