import { Link } from "react-router-dom";
function Info() {
  return (
    <main className="sec-content sec-content_2">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="products-info">
            <div className="products-info__top">
              <div className="products-info__title title-def title-def_sec2">Жидкости гидрофобизирующие</div>
              <div className="products-imgs products-info__imgs">
                <div className="products-imgs__el">
                  <Link to="rutesil-tu-157" className="products-imgs-el">
                    <img src={window.location.origin+"/img/7.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="11k" className="products-imgs-el">
                    <img src={window.location.origin+"/img/5.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="rutesil-n" className="products-imgs-el">
                    <img src={window.location.origin+"/img/6.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="products-info__links links-products links-products_2">
              <div className="links-products__el">
                <Link to="rutesil-tu-157" className="links-products-el">
                  <div className="links-products-el__text">Метилгидросиликоновая жидкость Rutesil TU 157</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="11k" className="links-products-el">
                  <div className="links-products-el__text">Жидкость Rutesil 11K</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="rutesil-n" className="links-products-el">
                  <div className="links-products-el__text">Жидкость Rutesil N</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Info;