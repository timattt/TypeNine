import {createRef} from 'react';
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './scss/style.scss';

import Menu from "./components/header";
import Footer from "./components/footer";
import Home from "./views/Home";
import Products from "./views/Products";

import ZhidkostiGidrofobiziruyushie from "./info/ZhidkostiGidrofobiziruyushie";
import Rutesiltu157 from "./info/Rutesiltu157";
import _11k from "./info/11k";
import Rutesil from "./info/Rutesil";
import SilikonovyeReziny from "./info/SilikonovyeReziny";
import RezinaObshegoNaznacheniya from "./info/RezinaObshegoNaznacheniya";
import RezinaFormovaya from "./info/RezinaFormovaya";
import RezinaIzolyatornaya from "./info/RezinaIzolyatornaya";
import RezinaVysokoprochnaya from "./info/RezinaVysokoprochnaya";

import EmulsiiGidrofobiziruyushie from "./info/EmulsiiGidrofobiziruyushie";
import RutesilOe from "./info/RutesilOe";
import Rutesil_5094 from "./info/Rutesil-5094";

import PyrogenicSiliconDioxide from "./info/PyrogenicSiliconDioxide";

import MethylSilicaGel from "./info/MethylSilicaGel";
import Methylsilicagel2 from "./info/Methylsilicagel2";

import Other from "./info/Other";
import TartaricAcid from "./info/TartaricAcid";

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: 'products', name: 'Products', element: <Products />, nodeRef: createRef() },
  { path: 'products/zhidkosti-gidrofobiziruyushie', name: 'ZhidkostiGidrofobiziruyushie', element: <ZhidkostiGidrofobiziruyushie />, nodeRef: createRef() },
  { path: 'products/zhidkosti-gidrofobiziruyushie/rutesil-tu-157', name: 'Rutesiltu157', element: <Rutesiltu157 />, nodeRef: createRef() },
  { path: 'products/zhidkosti-gidrofobiziruyushie/11k', name: '_11k', element: <_11k />, nodeRef: createRef() },
  { path: 'products/zhidkosti-gidrofobiziruyushie/rutesil-n', name: 'Rutesil', element: <Rutesil />, nodeRef: createRef() },
  { path: 'products/silikonovye-reziny', name: 'SilikonovyeReziny', element: <SilikonovyeReziny />, nodeRef: createRef() },
  { path: 'products/silikonovye-reziny/rezina-obshego-naznacheniya', name: 'RezinaObshegoNaznacheniya', element: <RezinaObshegoNaznacheniya />, nodeRef: createRef() },
  { path: 'products/silikonovye-reziny/rezina-formovaya', name: 'RezinaFormovaya', element: <RezinaFormovaya />, nodeRef: createRef() },
  { path: 'products/silikonovye-reziny/rezina-izolyatornaya', name: 'RezinaIzolyatornaya', element: <RezinaIzolyatornaya />, nodeRef: createRef() },
  { path: 'products/silikonovye-reziny/rezina-vysokoprochnaya', name: 'RezinaVysokoprochnaya', element: <RezinaVysokoprochnaya />, nodeRef: createRef() },
  { path: 'products/emulsii-gidrofobiziruyushie', name: 'EmulsiiGidrofobiziruyushie', element: <EmulsiiGidrofobiziruyushie />, nodeRef: createRef() },
  { path: 'products/emulsii-gidrofobiziruyushie/rutesil-oe', name: 'RutesilOe', element: <RutesilOe />, nodeRef: createRef() },
  { path: 'products/emulsii-gidrofobiziruyushie/rutesil-5094', name: 'Rutesil_5094', element: <Rutesil_5094 />, nodeRef: createRef() },
  { path: 'products/pyrogenic-silicon-dioxide', name: 'PyrogenicSiliconDioxide', element: <PyrogenicSiliconDioxide />, nodeRef: createRef() },
  { path: 'products/methylsilicagel', name: 'MethylSilicaGel', element: <MethylSilicaGel />, nodeRef: createRef() },
  { path: 'products/methylsilicagel/methylsilicagel-2', name: 'Methylsilicagel2', element: <Methylsilicagel2 />, nodeRef: createRef() },
  { path: 'products/other', name: 'Other', element: <Other />, nodeRef: createRef() },
  { path: 'products/other/tartaric-acid', name: 'TartaricAcid', element: <TartaricAcid />, nodeRef: createRef() },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function Example() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <div className="wrapper-def">
      <Menu />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      <Footer />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)