import clockImg from '../assets/clock.png'
import clickImg from '../assets/click.png'
import quotes from '../assets/quotes.png'
import title from '../assets/title.png'

import '../css/10000hours.css'

function Home () {

  return(
    <section id="contents">
      <div className="wrapper">
        <div className="title">
          <img src={clockImg} alt="" />
          <div className="title_img">
            <img src={title} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;