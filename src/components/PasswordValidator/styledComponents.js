import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: #edeeff;
  border-radius: 9px;
  padding: 22px;
  display: flex;
  flex-direction: column;

  align-items: center;
`
export const Head = styled.h1`
  color: #000000;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: #000000;
`

export const InputPW = styled.input`
  height: 40px;
  border-radius: 3px;
  margin-top: 15px;
  background-color: #ffffff;
  color: #000000;
`

export const Para2 = styled(Para)`
  color: red;
`
