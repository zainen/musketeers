import {useState} from 'react'
const sendMail = require('sendmail')()

const Email: React.FC = () => {
  let [signUp, setSignUp] = useState<IEmail>({
    name: '',
    email: '',
    body: ''
  })
  const handleChange = (a: input, b: input) => {
    setSignUp(prevState => ({...prevState, [b]: a}))
    return
  }
  const send = () => {
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
      value={signUp.name? signUp.name : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value, 'name')}
      />
      <label htmlFor="Email">Please Enter your Email:</label>
      <input 
      type="text"
      name="email" 
      value={signUp.email? signUp.email : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value, 'email')}
      />
      <label htmlFor="body">Body:</label>
      <input 
      type="text"
      name="body" 
      value={signUp.body? signUp.body : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value, 'body')}
      />
      <button formAction='Submit' onClick={() => send()}>Submit</button>
      </form>
    </>
  )
}

export default Email