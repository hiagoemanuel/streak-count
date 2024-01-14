import Link from 'next/link'
import * as S from '../style'

export default function Signup() {
  return (
    <S.Container>
      <S.AuthForm action="/">
        <S.Title>
          <h1>Sign Up</h1>
          <S.TextError $err={true}>
            <p>this email is already in use,</p>
            <p>try again</p>
          </S.TextError>
        </S.Title>
        <S.Credentials>
          <input type="text" id="email" placeholder="email" />
          <S.PassSettings>
            <input type="password" id="password" placeholder="password" />
            <label htmlFor="forget-me">
              <input type="checkbox" id="forget-me" />
              <span>dont&#39;t forget me</span>
            </label>
            <Link href="/login">I have an account!</Link>
          </S.PassSettings>
        </S.Credentials>
        <S.AuthSubmit>
          <input type="submit" value="Sign Up" />
        </S.AuthSubmit>
      </S.AuthForm>
    </S.Container>
  )
}
