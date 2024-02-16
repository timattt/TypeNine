import { Link } from "react-router-dom";
function Info() {
  return (
    <main className="sec-content sec-content_2">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="products-info">
            <div className="products-info__top">
              <div className="products-info__title title-def title-def_sec2">Прочее</div>
              <div className="products-imgs products-info__imgs">
                <div className="products-imgs__el">
                  <Link to="tartaric-acid" className="products-imgs-el">
                    <img src={window.location.origin+"/img/15.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="products-info__links links-products">
              <div className="links-products__el">
                <Link to='tartaric-acid' className="links-products-el">
                  <div className="links-products-el__text">Винная Кислота Rutesil LTA</div>
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