import {useState} from 'react'
const sendMail = require('sendmail')()

const Email: React.FC = () => {
  let [signUp, setSignUp] = useState<IEmail>({
    name: '',
    email: '',
    body: ''
  })
  const handleChange = (event: any) => {
    event.preventDefault()
    const target: any = event.target
    const name: string = target.name
    const email: string = target.email
    const body: string = target.body
    return setSignUp(prevState => ({...prevState, name, email, body}))
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
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value)}
      />
      <label htmlFor="Email">Please Enter your Email:</label>
      <input 
      type="text"
      name="email" 
      value={signUp.email? signUp.email : '' } 
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value)}
      />
      <label htmlFor="body">Body:</label>
      <textarea 
      name="body" 
      value={signUp.body? signUp.body : '' } 
      />
      </form>
    </>
  )
}

export default Email