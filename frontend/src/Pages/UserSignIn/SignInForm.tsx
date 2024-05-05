import { useState } from 'react'

const SignInForm = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    // const [errors, setErrors] = useState<string []>([])
    // const [dirty, setDirty] = useState<boolean>(false)

  return (
    <form>
      <h1>Sign In</h1>
      <div>
        <label><h2>Email</h2></label>
        <input value={email} onChange={e => setEmail(e.target.value)} type='email'/>
      </div>
      <div>
        <label><h2>Password</h2></label>
        <input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
      </div>
    </form>
  )
}

export default SignInForm
