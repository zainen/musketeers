import React, {useState} from 'react'

const sendMail = require('sendmail')()

const Email: React.FC = () => {
  let [signUp, setSignUp] = useState<IEmail>({
    name: '',
    email: '',
    body: ''
  })
  const handleChange = (event: any, spot: string) => {
    return setSignUp(prevState => ({...prevState, [spot]: event}))
  }
  const send = (event: any) => {
    event.preventDefault()
    return sendMail({
      from: signUp.email,
      to: 'zainensuzuki@gmail.com',
      subject: 'Website inquery ' + signUp.name,
      html: signUp.body
    }, (err: any, reply: any) => {
      console.log(err && err.stack)
      console.dir(reply)
    })
  }
  return (
    <>
      <form action="mailto:">

      <label htmlFor="Name">Please enter your name:</label>
      <input 
      type="text" 
      name="name" 
      value={signUp.name ? signUp.name : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value, e.target.name)}
      />
      <label htmlFor="Email">Please Enter your Email:</label>
      <input 
      type="text"
      name="email" 
      value={signUp.email ? signUp.email : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value, e.target.name)}
      />
      <label htmlFor="body">Body:</label>
      <textarea 
      name="body" 
      value={signUp.body ? signUp.body : '' }
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => handleChange(e.target.value, e.target.name)} 
      />
      <button onClick={(event: React.MouseEvent) => send(event)}>Submit</button>
      </form>
    </>
  )
}

export default Email