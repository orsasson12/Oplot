import React, { useEffect, useState } from 'react'
import classes from './InfoSection.module.css'
import itum from '../../../assets/Images/itum.jpg'
import firstImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-06-02 at 13.13.55.jpeg'
import fivetImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-06-02 at 13.13.55 (1).jpeg'
import secondImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-06-02 at 13.13.54.jpeg'
import thirdImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-05-30 at 23.00.27.jpeg'
import sixImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-05-30 at 23.00.27 (1).jpeg'
import fourtImg from '../../../assets/GalleryImgs/WhatsApp Image 2022-05-30 at 23.00.27 (2).jpeg'
import { Link } from 'react-router-dom'
function InfoSection() {

  const [images] = useState([
    {
      id: 1, img: firstImg
    }, {
      id: 2, img: secondImg
    },
    {
      id: 3, img: thirdImg
    },
    {
      id: 4, img: fourtImg
    },
    {
      id: 5, img: itum
    },
    {
      id: 6, img: fivetImg
    },
    {
      id: 7, img: sixImg
    }

  ])

  const [imgNumber, setImgNumber] = useState(1)
  const [runGallery, setRunGallery] = useState(true)


  useEffect(() => {
    let interval;
    if (imgNumber >= 7) {
      setRunGallery(false)
    }
    if (imgNumber <= 1) {
      setRunGallery(true)
    }
    if (runGallery) {
      interval = setInterval(() => {
        setImgNumber((prevTime) => prevTime + 1);
      }, 3000)
    } else if (!runGallery) {
      interval = setInterval(() => {
        setImgNumber((prevTime) => prevTime - 1)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [imgNumber, runGallery])


  const singleImg = images.filter((img) => img.id === imgNumber).map((item) => item.img)

  return (
    <div className={classes.Info_Container}>
      <div>
        <h2>עבודות גמר ותחזוקת מבנים</h2>
        <p>
          אופלות - פתרונות חדשניים.
          מתמחה בעבודות גמר של מעטפת הבניין עם גמר
          הקמת השלד. לחברה ניסיון רב בתחום
          והינה בעלת יכולות ביצוע פרויקטים
          בכל סדר גודל. לחברה שיטות עבודה
          מתקדמות לשיפור רמת הגימור ונראות
          המבנה, כל זאת תוך מעקב צמוד והקפדה
          על ביצוע העבודה ברמה הגבוהה ביותר.
          צוותי העבודה של חברתנו כוללים מנהלי
          עבודה מנוסים אשר במידת הצורך מגובים
          ביועצים חיצוניים מהטובים בתחום.</p>
      </div>
      <div>
        <h2>תחזוקת מעטפת שיש או חיזוק חיפוי אבן</h2>
        <p>גולשי המעטפת של חברת "אופלות"
          מומחים בתחזוקת תשתית אריחי שיש, ניקיון,
          חיזוק, החלפה, טיפול בקורוזיה וסגריגציה.
          הניסיון והמיומנות שרכשנו עם השנים מאפשרים
          לנו לעשות את העבודה באיכות הגבוהה ביותר
          ובזמנים הקצרים ביותר, כל זאת תוך כפיפה לתקן
          הישראלי ותחת בקרת איכות של מנהל מקצועי.    <Link to='/service'> <span className={classes.readMore}>לעוד מידע  </span></Link>


        </p>
      </div>
      <div>
        <h2>איטום קירות חיצונים</h2>
        <img src={singleImg} alt='itum' style={{ width: '50%', height: '90%', borderRadius: '2px' }} />
        <p>איטום תפרים חיצוניים
          בשיטת בנייה "טרומית" או " ברנוביץ" הנו חלק
          נרחב מעבודתנו היום יומית. איכות האיטום התפרים
          למניעת חדירת מים והפן האסטטי בביצוע עבודה זו
          היא בעלת חשיבות רבה בשביעות רצונם של הדיירים.
          ב"אופלות -פתרונות חדשניים" מבינים כי יישום
          חומרי האטימה הוא שלב מהותי בגמר הבניין
          ואיננו מורחים ללא צורך סיקא! הצוותים
          שלנו דואגים לבצע את העבודה ברמת ניקיון
          גבוה ולפי הוראות יישום היצרן. אנו משתמשים
          בכל החומרים הנדרשים ומקפידים על כל שלבי
          היישום על מנת להגיע לתוצאות מצוינות.     <Link to='/sealingService'>  <span  className={classes.readMore}>לעוד מידע  </span>   </Link>    </p>
      </div>
    </div>
  )
}

export default InfoSection