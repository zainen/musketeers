import about from '../images/about.png'
import want from '../images/we-want-you.png'
import fight from '../images/crab-fight.gif'
import fencing from '../images/fencing.png'
import engard from '../images/engard.gif'
import './info.css'

const Info: React.FC = () => {
  return (
    <>
      <div className='body'>
        <img src={about} alt="about_us" />
        <div className="card width center">
          <h1>
            Musketeers Fencing Society (MFS)
          </h1>
          <div className='width center'>

            <div className='center'>
              <h4>Location</h4>
              <p>Our club is located @ Bonsor Recreation Centre. The centre is a walking distance to Metrotown Station & Metrotown Mall (close to the The Bay) at the Bennett St. and Bonsor St. The closest bus stop is for #110 & 114.</p>
              <p>There are many parking spots at the recreation centre’s parking lot.</p>
            </div>
            <div className='double'>
              <h3>Date & Time</h3>
              <p>Our club operates on Mondays and Saturdays as follows:</p>
              <div className='double row'>
                <div className='double-width'>
                <p className='bold head'>Mondays</p>
                <p>Time: 5:30PM - 7:30PM</p>
                <p className='wrap'>Room: Upstairs Banquet Hall (Entrance from outside)</p>
                </div>
                <div className='double-width'>
                <p className='bold head'>Saturdays</p>
                <p>Time: 12:30PM - 2:PM</p>
                <p>Room: Upstairs Banquet Hall (Entrance from outside)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='card width'>
            <h2>FAQs</h2>
            <div className='card rev'>
              <p className='bold head'>Who can join?</p>
              <div className='answers'>
                <p>
                  <b className='bold'>You! </b>
                  MFS was created to help introduce fencing to the public and dispel the myth of it being an “elitist” sport. Young and old, from getting a workout to becoming a champion, <u>MFS caters to everyone.</u>
                </p>
                <a href="https://www.google.com/search?q=we+want+you+meme&sxsrf=ALeKk02yM17BmTRU8Y1a8jrTDbIOIkNrYg:1617830350873&tbm=isch&source=iu&ictx=1&fir=e-B4xl5PwL2c1M%252C8599SAYT-OFxJM%252C_&vet=1&usg=AI4_-kS4yQFl_gk3ER7nw4-saYWj5kVU5A&sa=X&ved=2ahUKEwir8vrah-3vAhXQJTQIHcdxASYQ9QF6BAgIEAE&biw=1528&bih=708#imgrc=72fWysIoslpI3M">
                  <img className='want-you' src={want} alt="We want you"/>
                </a>
              </div>
            </div>
            <div className="card rev">
              <p className='bold head'>Will I be the only beginner?</p>
              <div className='answers'>
                <p>
                  <b className='bold'>Absolutely not! </b> 
                  MFS fencers have a diverse range of skill level, from top Canadian fencers to first timers. You will be part of a club which pays attention to skill level, and helps you develop at your own pace.
                </p>
                <a className='crab' href="https://giphy.com/gifs/457HrZvJ5IIQSXweiO">
                  <img title='sword-fight' src={fight} alt='crab-fight'/>
                </a>
              </div>
            </div>
            <div className="card rev">
              <p className='bold head'>Why should I learn to fence</p>
              <div className='answers'>
                <p className='answers'>To build character. To become physically fit. Work on Flexibility. To entertain and be entertained! Need we go on?</p>

                  <img className='fencing' src={fencing} alt="Fencing"/>
              </div>
            </div>
            <div className="card rev">
                <p className='bold head'>Do I need any special equipment</p>
              <div className='answers'>
                <p>To begin with, you will only need comfortable soft-soled shoes and stretchy/sports pants that cover your entire leg. Eventually, more specialized equipment will be needed and our instructors will help you in selecting the right equipment for you.
                  It is preferable to bring your own water bottle <u className='underline'>(no pop or other drinks by Bonsor policy in the gym & studio)</u> and a towel for your sweat. There are water fountains at Bonsor or vending machine if you do not bring a bottle.</p>
                <a href="https://tenor.com/view/zorro-anthonyhopkins-antoniobanderas-fencing-sword-gif-18357829">
                  <img className='zoro' src={engard} alt='Engard'/>
                </a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Info