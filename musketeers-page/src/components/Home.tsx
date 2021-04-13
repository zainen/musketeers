import main from '../images/main.png'
import entry from '../images/entry-higher.png'
import './home.css'

const Home: React.FC = () => {
  return (
    <>
      <div className='body'>
        <img src={main} alt="Musketeers" />
        <div className="spacing">
          <div className='card'>
            <h1>Welcome To Burnaby's Fencing Club</h1>
            <div>
              <p>We welcome all skill levels - From Beginners & first-timers to experienced & professionals - to the <b>Musketeers Fenching Club</b></p>
              <p>If you are interested, Please contact us or drop in for a visit!</p>
            </div>
            <br/>
            <h2>Announcements</h2>
            <h3>UPDATE: We will be entering Spring Break. We will return on March 22nd</h3>
            <ul>
              <li>We are open for sessions. There are changes from our usual time and room location.</li>
              <li>Time: Mondays = 5:30-7:30PM; Saturdays = N/A (currently we are not holding Saturday sessions due to the pandemic)</li>
              <li>Room: Banquest Hall on the third floor</li>
              <li>Please bring your own towel, water, masks and hand sanitizer. Washrooms are available but there will no water fountains. We ask that when you go to the washrooms, please wear your mask at all times.</li>
              <li>Entrance & Exit: Please look at the map below on how to enter. YOU ARE NOT ALLOWED TO ENTER FROM THE MAIN ENTRANCE @ BONSOR</li>
            </ul>

            <img src={entry} alt="Entry Map"/>
            <h2>Registration Form</h2>
            <p>If you are interested in joining MFS, please first contact us about your interest for more information. We will email the registration form afterward.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home