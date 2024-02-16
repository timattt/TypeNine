import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="sec-content">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="home-info">
            <div className="home-info__text">
              <h1 className="home-info__title title-def title-def_sec">О компании:</h1>
              <div className="wrap-article text-info">
                <p>Компания "РУТЕСИЛ" была основана в 2005 году для разработки и производства высокотехнологичных силиконовых материалов, применяемых в машиностроении, строительстве, нефтедобыче, пищевой, косметической и электротехнической отраслях.</p>
              </div>
              <Link href="#" className="btn-def home-info__btn"><span>Далее</span></Link>
            </div>
            <div className="home-info__products">
              <div className="products">
                <div className="products__el">
                  <Link to="products/zhidkosti-gidrofobiziruyushie" className="products-el">
                    <img src={window.location.origin+"/img/pr/1.webp"} alt="" className="products-el__bg" />
                    <div className="products-el__content">
                      <div className="products-el__title">Жидкости гидрофоби-зирующие</div>
                    </div>
                  </Link>
                </div>
                <div className="products__el">
                  <Link to="products/pyrogenic-silicon-dioxide" className="products-el">
                    <img src={window.location.origin+"/img/pr/2.webp"} alt="" className="products-el__bg" />
                    <div className="products-el__content">
                      <div className="products-el__title">Пирогенный диоксид кремния</div>
                    </div>
                  </Link>
                </div>
                <div className="products__el">
                  <Link to="products/emulsii-gidrofobiziruyushie" className="products-el">
                    <img src={window.location.origin+"/img/pr/3.webp"} alt="" className="products-el__bg" />
                    <div className="products-el__content">
                      <div className="products-el__title">Эмульсии гидрофоби-зирующие</div>
                    </div>
                  </Link>
                </div>
                <div className="products__el">
                  <Link to="products/silikonovye-reziny" className="products-el">
                    <img src={window.location.origin+"/img/pr/4.webp"} alt="" className="products-el__bg" />
                    <div className="products-el__content">
                      <div className="products-el__title">Силиконовые резины</div>
                    </div>
                  </Link>
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
  );
}

export default Home;