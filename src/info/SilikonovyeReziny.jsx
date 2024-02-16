import { Link } from "react-router-dom";
function Info() {
  return (
    <main className="sec-content sec-content_2">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="products-info">
            <div className="products-info__top">
              <div className="products-info__title title-def title-def_sec2">Силиконовые резины</div>
              <div className="products-imgs products-info__imgs">
                <div className="products-imgs__el">
                  <Link to="rezina-obshego-naznacheniya" className="products-imgs-el">
                    <img src={window.location.origin+"/img/8.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="rezina-formovaya" className="products-imgs-el">
                    <img src={window.location.origin+"/img/9.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="rezina-izolyatornaya" className="products-imgs-el">
                    <img src={window.location.origin+"/img/10.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="rezina-vysokoprochnaya" className="products-imgs-el">
                    <img src={window.location.origin+"/img/4.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="products-info__links links-products">
              <div className="links-products__side">
                <div className="links-products__title title-def title-def_med">Резина общего назначения​:</div>
                <Link to="rezina-obshego-naznacheniya" className="links-products-el">
                  <div className="links-products-el__text">Резина универсальная формование/экструзия</div>
                </Link>
                <Link to="rezina-formovaya" className="links-products-el">
                  <div className="links-products-el__text">Резина формовая</div>
                </Link>
              </div>
              <div className="links-products__side">
                <div className="links-products__title title-def title-def_med">Резина специального назначения​:</div>
                <Link to="rezina-izolyatornaya" className="links-products-el">
                  <div className="links-products-el__text">Резина изоляторная</div>
                </Link>
                <Link to="rezina-vysokoprochnaya" className="links-products-el">
                  <div className="links-products-el__text">Резина высокопрочная</div>
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