import contact from '../images/contact.png'
import Email from './Email'

const Contact: React.FC = () => {
  return (
    <>
      <img src={contact} alt="contact" />
      <h3>To Contact Us</h3>
      <p>WE'D LOVE TO HELP AND TEACH YOU ABOUT THE SPORT! <br/>
        For more information, please email us or use the form below
        You can also visit us during one of our scheduled sessions
        to talk with our administrators and coaches!
      </p>
      <p>Email us at info@musketeers.ca or click:</p>
      <a href="mailto:info@musketeers.ca?subject=Website inquery">Here!</a>
    </>
  )
}

export default Contact