import { Link } from "react-router-dom";
function Products() {
  return (
    <main className="sec-content sec-content_2">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="products-info">
            <div className="products-info__top">
              <div className="products-info__title title-def title-def_sec2">Продукты</div>
              <div className="products-imgs products-info__imgs">
                <div className="products-imgs__el">
                  <Link to="zhidkosti-gidrofobiziruyushie" className="products-imgs-el">
                    <img src={window.location.origin+"/img/pr/1.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="methylsilicagel" className="products-imgs-el">
                    <img src={window.location.origin+"/img/pr/3.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="silikonovye-reziny" className="products-imgs-el">
                    <img src={window.location.origin+"/img/pr/4.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="pyrogenic-silicon-dioxide" className="products-imgs-el">
                    <img src={window.location.origin+"/img/pr/2.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
                <div className="products-imgs__el">
                  <Link to="methylsilicagel/methylsilicagel-2" className="products-imgs-el">
                    <img src={window.location.origin+"/img/pr/5.webp"} alt="" className="products-imgs-el__img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="products-info__links links-products">
              <div className="links-products__el">
                <Link to='zhidkosti-gidrofobiziruyushie' className="links-products-el">
                  <div className="links-products-el__text">Жидкости гидрофобизирующие</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to='silikonovye-reziny' className="links-products-el">
                  <div className="links-products-el__text">Силиконовые резины</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="emulsii-gidrofobiziruyushie" className="links-products-el">
                  <div className="links-products-el__text">Эмульсии гидрофобизирующие</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="pyrogenic-silicon-dioxide" className="links-products-el">
                  <div className="links-products-el__text">Пирогенный диоксид кремния</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="methylsilicagel" className="links-products-el">
                  <div className="links-products-el__text">Метилкремнегель</div>
                </Link>
              </div>
              <div className="links-products__el">
                <Link to="other" className="links-products-el">
                  <div className="links-products-el__text">Прочее</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;