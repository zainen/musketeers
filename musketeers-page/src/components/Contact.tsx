import contact from '../images/contact.png'
import './contact.css'
// import Email from './Email'

const Contact: React.FC = () => {
  return (
    <>
      <div className='body'>
        <img src={contact} alt="contact" />
        <div className="spacing">

          <div className="card">
            <h2>To Contact Us</h2>
            <div className='email-link'>
              <p>Email us: <a href="mailto:info@musketeers.ca?subject=Website inquery">Click Here!</a><br/>
              If that doesnt work! <br/> Copy and paste <b>info@musketeers.ca</b> into your mail client.
              </p>
            </div>
            <h4>WE'D LOVE TO HELP AND TEACH YOU ABOUT THE SPORT!</h4>
            <p className='indent'>
              For more information, please email us or use the form below
              You can also visit us during one of our scheduled sessions
              to talk with our administrators and coaches!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact