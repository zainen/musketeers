import './footer.css'

const Footer: React.FC = () => {
  return (
    <>
      <div>
        <div className='footer'>
          <h3>Find Us</h3>
          <div className='double'>
            <div className='email-column'>
              <b className='space-bottom'>Email: </b>
              <a className='a-link' href='mailto: info@musketeers.ca'>info@musketeers.ca</a>
            </div>
            <div>
              <b>Hours:</b>
              <p>Monday: 5:30PM - 7:30PM</p>
              <p>Saturday 12:00PM-2:00PM</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer