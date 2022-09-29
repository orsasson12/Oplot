import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
 import './Services.css'
import InfoSection from './InfoSection';
function Services() {
  useEffect(()=> {
    Aos.init({duration:2500,})
  },[])
  return (
  <>
  <section className='service_Container' id='services' data-aos='fade-up'>
    <h2>שטיפת או ניקוי חלונות בגובה</h2>
    <p>תחום ניקוי החלונות הוא תחום רחב אשר מאגד בתוכו שיטות עבודה שונות, אנו ב"אופלות" מתגאים בעובדה כי אין אף חלון רחוק מידי בשבילנו. אנחנו עובדים במסירות ויעילות על מנת לתת ללקוחותינו תמורה יעילה ותחרותית.</p>
    <div className='service_list'>
      <ul>
        <li>סנפלינג</li>
        <li>במות הרמה</li>
        <li>סולמות</li>
        <li>פיגומים תלויים</li>
        <li>אוסמוזה הפוכה או מוטות טלסקופיים</li>
        <li>ניקוי באמצעות לחץ מים (גרניק)</li>
      </ul>
    </div>
    <p>
      תהליך הצעת המחיר כולל בתוכו אפיון הבניין וניהול סיכונים (כחלק מחוק עבודה בגובה). התהליך מאפשר ללקוח לעבוד עם מינימום הפרעה בזמן הניקוי. גולשים מהמובילים בענף, יבצעו את תהליך השטיפה משלב הניקוי הראשוני, ועד ניקיון השוטף השנתי של הבניין
    </p>
</section>

<section className='Info_Section' data-aos='fade-right'>
  <InfoSection/>
</section>
</>
  )
}

export default Services