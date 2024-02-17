import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
function Menu() {
  const location = useLocation();
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
  useEffect(() => {
    setMenuShow(false);
  }, [location['pathname']]);

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
    <>
      {menuShow?<div onClick={()=>setMenuShow(!menuShow)} className="overlay-menu"></div>:null}
      <header className="top-menu">
        <div className="container-def">
          <div className="top-menu__wrap">
            <div className="top-menu__content">
              <div className="top-menu__imgs imgs-def">
                <img src={window.location.origin+ '/img/1.webp'} alt="" className="imgs-def__img" />
                <img src={window.location.origin+ '/img/2.webp'} alt="" className="imgs-def__img" />
                <img src={window.location.origin+ '/img/3.webp'} alt="" className="imgs-def__img" />
                <img src={window.location.origin+ '/img/4.webp'} alt="" className="imgs-def__img" />
              </div>
              <Link to="/" className="top-menu__logo logo-def">
                <img className='logo-def__img' src={window.location.origin + '/img/logo.png'} alt="" />
              </Link>
              <nav className={'top-menu__links ' + (menuShow?'active':'')}>
                <BtnClose/>
                <ul className="links-def">
                  <li className={"links-def__el " + (location['pathname'] == '/' ?'active':'')}><Link to="/" className="links-def__link">Главная</Link></li>
                  <li className={"links-def__el " + (location['pathname'] == '/about' ?'active':'')}><Link to="about" className="links-def__link">О нас</Link></li>
                  <li className={"links-def__el " + (location['pathname'] == '/products' ?'active':'')}><Link to="products" className="links-def__link">Продукты</Link></li>
                  <li className={"links-def__el " + (location['pathname'] == '/contacts' ?'active':'')}><Link to="contacts" className="links-def__link">Контакты</Link></li>
                </ul>
              </nav>
              <Btn/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;