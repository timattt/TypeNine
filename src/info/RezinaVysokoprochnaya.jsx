function Product() {
  return (
    <main className="sec-content sec-content_3">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="product-info">
            <div className="product-info__top">
              <div className="product-info__top-left">
                <div className="product-info__title title-def title-def_sec2">Силиконовая резина специального назначения</div>
                <div className="product-info__title title-def title-def_sec3">Высокопрочная</div>
              </div>
              <div className="img-dec">
                <img src={window.location.origin+"/img/4.webp"} alt="" className="img-dec__img" />
              </div>
            </div>
            <div className="product-info__content wrap-article-2">
              <h4>Описание</h4>
              <p>Силиконовая резиновая смесь общего назначения с высокими прочностными свойствами.<br/>Применяется для изготовления изделий методами формования и экструзии. Рекомендуется для производства изделий с повышенными требованиями к прочностным характеристикам.</p>
              <p></p>
              <h4>Основные характеристики</h4>
              <a target="_blank" href="https://www.rutesil.ru/_files/ugd/eecfe8_ccda089d23f44874acafdfe06d847c88.pdf">Rutesil® S 36/2</a>
              <p></p>
              <h4>Упаковка</h4>
              <p>Гофрокартон, 20 кг.</p>
              <p></p>
              <h4>Хранение</h4>
              <p>Хранить в защищенном от атмосферных воздействий, сухом месте. Гарантийный срок хранения – 12 месяцев с даты производства (информация дана на этикетке или в сертификате качества для каждой партии). По истечении периода продукт может быть использован после повторной проверки свойств.</p>
              <p></p>
              <h4>Указания по безопасности</h4>
              <p>Продукт стабилен и не опасен при нормальных условиях.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Product;