import { useState } from "react";

// Icons
import { RiMenuLine, RiUserLine, RiShoppingCart2Line, RiCloseFill, RiSearchLine } from "react-icons/ri";

// Components
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import Cart from "./components/shared/Cart";
import LastReleases from "./components/shared/LastReleases";
import Tees from "./components/shared/Tees";
import Pants from "./components/shared/Pants";
import Hoodies from "./components/shared/Hoodies";
import Accessories from "./components/shared/Accessories";

import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';


function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowCart(false);
  }

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Router>
        <Sidebar showMenu={showMenu} />
        <Cart showCart={showCart} setShowCart={setShowCart} />
        {/* Mobile menu */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">

          <button onClick={toggleCart} className="p-2">
            <RiShoppingCart2Line />
            <div className="absolute bg-[#8739F9] rounded-full pl-2 pr-2 text-[#F2F5F5] font-bold bottom-10 left-[60px] text-sm">
              1
            </div>
          </button>

          <button className="p-2">
            <RiUserLine />
          </button>

          <button className="text-white p-2" onClick={toggleMenu}>
            {showMenu ? <RiCloseFill /> : <RiMenuLine />}
          </button>


        </nav>

        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header />

            {/* Content */}
            {/* <LastReleases img="/src/img/camiseta-1.png" clothes_name="God Loves You Tee" price="30.00" /> */}
            {/* Si estas en la ruta raiz que salga last releases */}
            {/* <LastReleases /> */}
        

            <Switch>
              <Route path='/' element={<LastReleases />} />
              <Route path='/Tees' element={<Tees />} />
              <Route path='/Pants' element={<Pants />} />
              <Route path='/Hoodies' element={<Hoodies />} />
              <Route path='/Accessories' element={<Accessories />} />
            </Switch>

          </div>
        </main>
      </Router>

    </div>
  )
}

export default App
