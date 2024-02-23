import {useState} from 'react'
import {
  MainContainer,
  Card,
  Head,
  Para,
  Para2,
  InputPW,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const changePassword = event => setPassword(event.target.value)

  const res = password.length < 7

  return (
    <MainContainer>
      <Card>
        <Head>Password Validator</Head>
        <Para>Check how strong and secure is your password</Para>
        <InputPW type="password" onChange={changePassword} value={password} />
        {res && <Para2>Your password must be at least 8 characters</Para2>}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
