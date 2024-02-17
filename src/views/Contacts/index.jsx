function Contacts() {
  return (
    <main className="sec-content">
      <div className="container-def">
        <div className="sec-content__wrap">
          <div className="contacts-block">
            <h1 className="contacts-block__title title-def title-def_sec2 color-g">Контакты</h1>
            <div className="wrap-article-2 contacts-block__text">
              <p>Телефон: <a href="tel+74996382624">+7 (499) 638-26-24</a></p>
              <p>Адрес: проезд Одоевского, д.3, корп.7<br/>117574, Москва</p>
              <p>Email: <a href="mailto:it@rutesil.com">it@rutesil.com</a></p>
            </div>
            <form className="contacts-block__form">  
              <div className="form-el form-el_m">
                <input type="text" name="name" placeholder="Имя *" className="inp-def form-el__inp" required />
              </div>
              <div className="form-el form-el_m">
                <input type="text" name="email" placeholder="Email *" className="inp-def form-el__inp" required />
              </div>
              <div className="form-el form-el_m">
                <input type="text" name="tema" placeholder="Тема" className="inp-def form-el__inp" />
              </div>
              <div className="form-el form-el_m">
                <textarea placeholder="Сообщение" class="form-el__inp textarea-def" name="message" ></textarea>
              </div>
              <button className="contacts-block__form-btn btn-def-3"><span>Отправить</span></button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;