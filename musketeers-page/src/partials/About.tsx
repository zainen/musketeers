import about_sport from '../images/about_sport.png'

const About: React.FC = () => {
  return (
    <>
      <div>
        <img src={about_sport} alt="about_sport" />
        <div>
          <h1>Fencing as a Sport</h1>
          <div>
            <h3>What is Fencing?</h3>
            <p className='answer'>Fencing is a <p className='bold'>fast-paced sport</p> that simulates sword duels. Bouts are between two fencers; they are restricted to a strip that is two meters wide and fourteen meters long, and all movement is forward or back. The target area for valid hits depends on the specific weapon used.
              Fencing has a blend of patience, competitiveness and discipline. However, the <p className='bold'>respect between fencers</p> is the primary characteristic to attain and understand.
            <br/>
              Fencing can attributed as the following:<br/>
              Physically, fencing is comparable to a game of squash. It involves speed, accuracy and endurance.<br/>
              Mentally, fencing is comparable to a game of chess. The central importance involves strategy-planning, patience and quick decisiveness.</p>
          </div>
        </div>
        <h3>Three Different Forms of Fencing</h3>
        <div>
          <p className='weapon'>Foil</p>
          <p className='description'>Evolved from the short court sword of the 17th and 18th centuries, the foil started as a light and flexible weapon for the practice of fencing. The blade is quadrangular in shape (cross-section is square). Since only the front and back of the torso is considered a target, the bell-shaped guard is much smaller than the épée. Hits are made only with the point of the blade. It has a button at the tip that registers the hit. The hit location in foil is the torso including the groin but not including the arms. Both fencers wear a lamé, a jacket that covers the hit location and is coated in wires. When the button on a foil is pressed down while touching the lamé of the other fencer it triggers the electric scoring machine to score the hit.</p>
          <iframe title='Foil' width='640' height='480' src="https://www.youtube.com/embed/g-P_q5gdvRM" allowFullScreen></iframe>
          <p className='source'>created by Eurosport; courtesy from FIE Youtube channel</p>
        </div>
        <div>
          <p className='weapon'>&Eacute;p&eacute;e</p>
          <p className='description'>Considered as the original dueling sword, it was developed in the middle of the 19th century to train individuals for duels. The weapon’s blade is somewhat triangular and quite stiff to bend. Since the whole body is considered a target, the guard is large and bell-shaped to protect the hand from hits. As with foil, hits are made with the point of the blade only, with a button on the tip to register hits. The hit location in épée is the whole body. Fencers do not need to wear a lamé for épée. The guard is larger to help protect the hand.</p>
          <iframe title='&Eacute;p&eacute;e' width='640' height='480' src="https://www.youtube.com/embed/88mBQ2u2Wb0" ></iframe>
          <p className='source'>created by Eurosport; courtesy from FIE Youtube channel</p>
        </div>
        <div>
          <p className='weapon'>Sabre</p>
          <p className='description'>Developed from the backsword of the Elizabethans and the heavy cavalry sabre, the blade is v-shaped with the point folded over to form a button. The weapon differs in that it is a cut-and-thrust type weapon. The hand is again a target, so the guard is wrapped to the hilt to protect the fingers. Points can be scored with the entire blade. The hit locations for sabre are the head, arms and the trunk to the waist. Sabre fencers wear a lamé covering the hit location, that connects to a mask that is covered in wire as well. The hits are scored when the blade touches the lamé or mask.</p>
          <iframe title='Saber' width='640' height='480' src="https://www.youtube.com/embed/4ipiJFlU_Dg" ></iframe>
          <p className='source'>created by Eurosport; courtesy from FIE Youtube channel</p>
        </div>
      </div>

    </>
  )
}

export default About