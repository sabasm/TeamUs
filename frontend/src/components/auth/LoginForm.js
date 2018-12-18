import React from 'react'

const LoginForm = ({login, handleText}) => {
  return (
    <div>
      Login
      <form method="POST" onSubmit={login}>
        <p>
            Email:
            <input type="email" name="email" onChange={handleText}/>
        </p>
        <p>
            Password:
            <input type="password" name="password" onChange={handleText}/>
        </p>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginForm
