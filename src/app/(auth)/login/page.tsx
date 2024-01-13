import Link from 'next/link'
import * as S from '../style'

export default function Login() {
  return (
    <S.Container>
      <S.AuthForm action='/'>
        <S.Title>
          <h1>Login</h1>
          <S.TextError $err={false}>
            <p>incorrect email or password,</p>
            <p>try again</p>
          </S.TextError>
        </S.Title>
        <S.Credentials>
          <input type="text" id='email' placeholder="email" />
          <S.PassSettings>
            <input type="password" id='password' placeholder="password" />
            <label htmlFor='forget-me'>
              <input type="checkbox" id='forget-me' />
              <span>dont&#39;t forget me</span>
            </label>
          </S.PassSettings>
        </S.Credentials>
        <S.AuthSubmit>
          <input type="submit" value="Login" />
          <Link href="/signup">Sign Up</Link>
        </S.AuthSubmit>
      </S.AuthForm>
    </S.Container>
  )
}
