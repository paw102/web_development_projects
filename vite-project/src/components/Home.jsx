import clockImg from '../assets/clock.png'
import clickImg from '../assets/click.png'
import quotes from '../assets/quotes.png'

import '../css/10000hours.css'

function Home () {

  return(
    <section id="contents">
      {/* wrapper */}
      <div id="wrapper">
        <div className="title">
          <img src= {clockImg} alt="logo" className='clock_img' />
        </div>
      </div>
      <div className="intro">
        <div className="intro_satying">연습은 어제의 당신보다 당신을 더 낫게 만든다.</div>
      </div>
      <div className="explain">
        <div className="quotes">
          <img src={quotes} alt="따옴표" />
        </div>
        <p>
          <span>1만 시간의 법칙</span>은<br />어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법이다.
        </p>
      </div>
      <div className="inputs">
        <div className="field">
          <p>나는</p>
          <input type="text" id='field_value' placeholder='ex) 프로그래밍' />
          <p>전문가가 될 것이다.</p>
        </div>
        <div className="time">
          <p>그래서 앞으로 매일 하루에</p>
          <div>
            <input type="text" id='time_value' placeholder='ex) 5' />
          </div>
          <p>시간씩 훈련 할 것이다.</p>
        </div>
      </div>
      <div className="start">
        <div className="btn_wrap">
          <button className="start_btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
          <div className="click_img">
            <img src= {clickImg} alt="click" />
          </div>
        </div>
      </div>
      <div className="result">
          <div className="result_wrap">
            <div>
              당신은 <span className="field_result"></span>전문가가 되기 위해서
            </div>
            <div>
              대략 <span className="time_result"></span>일 이상 훈련하셔야 합니다! :)
            </div>
          </div>
          <div className="buttons">
            <div className="go">
              <button className="modal_btn">훈련하러 가기 GO!GO!</button>
            </div>
            <div className="share">
              <button className="share_btn">공유하기</button>              
            </div>
          </div>
      </div>
    </section>
  );
}

export default Home;