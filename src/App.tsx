import './App.css'
import Navbar from './Navbar'
import AboutPage from './site-body/AboutPage'
import Menu from './site-body/MenuPage'
import Review from './site-body/ReviewPage'
import Order from './site-body/OrderPage'
import Footer from './Footer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/menu/" element={<Menu />}></Route>
          <Route path="/review/" element={<Review />}></Route>
          <Route path="/order/" element={<Order />}></Route>
        </Routes>
        <Footer />
    </ShoppingCartProvider>
    </>
  )
}

export default App
