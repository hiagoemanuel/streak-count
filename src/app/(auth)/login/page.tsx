import Link from 'next/link'
import * as S from './style'

export default function Login() {
  return (
    <S.Container>
      <S.AuthForm>
        <S.Title>
          <h1>Login</h1>
          <p>incorrect email or password,</p>
          <p>try again</p>
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
          <input id='auth-btn' type="submit" value="Login" />
          <Link id='auth-btn' href="/signin">Sign Up</Link>
        </S.AuthSubmit>
      </S.AuthForm>
    </S.Container>
  )
}
