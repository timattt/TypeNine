import './scss/style.scss';
import {useState, useEffect} from "react";
function App() {
  const [btnVisible, setBtnVisible] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  function checkWidth() {
    if( window.innerWidth <= 600 ){
      setBtnVisible(true);
    }else{
      setBtnVisible(false);
    }
    return btnVisible;
  }
  window.addEventListener('resize', function() {
    checkWidth();
  });
  useEffect(() => {
    checkWidth();
  }, []);

  function Btn(){
    if( btnVisible ){
      return <div onClick={()=>setMenuShow(!menuShow)} className="btn-burger top-menu__btn"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="15" width="20" height="2" fill="black"/><rect width="20" height="2" fill="black"/><rect y="7" width="20" height="2" fill="black"/></svg></div>;
    }
  }
  function BtnClose(){
    if( btnVisible ){
      return <div onClick={()=>setMenuShow(!menuShow)} className="btn-burger top-menu__links-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7279 -1.65701e-05L0 12.7279L1.24784 13.9757L13.9758 1.24782L12.7279 -1.65701e-05Z" fill="black"/><path d="M13.9757 12.7279L1.2478 0L-3.27504e-05 1.24784L12.7279 13.9758L13.9757 12.7279Z" fill="black"/></svg></div>;
    }
  }




  return (
    <div className="wrapper-def">
      {menuShow?<div onClick={()=>setMenuShow(!menuShow)} className="overlay-menu"></div>:null}
      <header className="top-menu">
        <div className="container-def">
          <div className="top-menu__wrap">
            <div className="top-menu__content">
              <div className="top-menu__imgs imgs-def">
                <img src="./img/1.webp" alt="" className="imgs-def__img" />
                <img src="./img/2.webp" alt="" className="imgs-def__img" />
                <img src="./img/3.webp" alt="" className="imgs-def__img" />
                <img src="./img/4.webp" alt="" className="imgs-def__img" />
              </div>
              <div className="top-menu__logo logo-def">
                <img className='logo-def__img' src="./img/logo.png" alt="" />
              </div>
              <nav className={'top-menu__links ' + (menuShow?'active':'')}>
                <BtnClose/>
                <ul className="links-def">
                  <li className="links-def__el active"><a href="#" className="links-def__link">Главная</a></li>
                  <li className="links-def__el"><a href="#" className="links-def__link">О нас</a></li>
                  <li className="links-def__el"><a href="#" className="links-def__link">Продукты</a></li>
                  <li className="links-def__el"><a href="#" className="links-def__link">Контакты</a></li>
                </ul>
              </nav>
              <Btn/>
            </div>
          </div>
        </div>
      </header>
      <main className="sec-content">
        <div className="container-def">
          <div className="sec-content__wrap">
            <div className="home-info">
              <div className="home-info__text">
                <h1 className="home-info__title title-def title-def_sec">О компании:</h1>
                <div className="wrap-article text-info">
                  <p>Компания "РУТЕСИЛ" была основана в 2005 году для разработки и производства высокотехнологичных силиконовых материалов, применяемых в машиностроении, строительстве, нефтедобыче, пищевой, косметической и электротехнической отраслях.</p>
                </div>
                <a href="#" className="btn-def home-info__btn"><span>Далее</span></a>
              </div>
              <div className="home-info__products">
                <div className="products">
                  <div className="products__el">
                    <a href="#" className="products-el">
                      <img src="./img/pr/1.webp" alt="" className="products-el__bg" />
                      <div className="products-el__content">
                        <div className="products-el__title">Жидкости гидрофоби-зирующие</div>
                      </div>
                    </a>
                  </div>
                  <div className="products__el">
                    <a href="#" className="products-el">
                      <img src="./img/pr/2.webp" alt="" className="products-el__bg" />
                      <div className="products-el__content">
                        <div className="products-el__title">Пирогенный диоксид кремния</div>
                      </div>
                    </a>
                  </div>
                  <div className="products__el">
                    <a href="#" className="products-el">
                      <img src="./img/pr/3.webp" alt="" className="products-el__bg" />
                      <div className="products-el__content">
                        <div className="products-el__title">Эмульсии гидрофоби-зирующие</div>
                      </div>
                    </a>
                  </div>
                  <div className="products__el">
                    <a href="#" className="products-el">
                      <img src="./img/pr/4.webp" alt="" className="products-el__bg" />
                      <div className="products-el__content">
                        <div className="products-el__title">Силиконовые резины</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-info__contact">
                <div className="contact-block">
                  <div className="contact-block__title">Адрес:</div>
                  <div className="contact-block__text">Москва, 117574<br></br> проезд Одоевского д.3, корп.7</div>
                </div>
                <div className="contact-block">
                  <div className="contact-block__title">Телефон:</div>
                  <a href="tel:+74996382624" className="contact-block__text">+7 499 638-26-24</a>
                </div>
                <div className="contact-block">
                  <div className="contact-block__title">Электронный адрес:</div>
                  <a href="mailto:it@rutesil.com" className="contact-block__text">it@rutesil.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="sec-footer">
        <div className="container-def">
          <div className="sec-footer__wrap">
            <div className="sec-footer__content">
              <div className="sec-footer__text text-info-2">© 2018 Rutesil.ru</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;