import './App.css'
import ShowHidePasswordField from './components/ShowHidePasswordField';
import ShowMore from './components/ShowMore';
import Home from './components/Home';
import About from "./components/About";
import { Product } from './components/Product';
import  {NoMatchFound}  from './components/NoMatchFound';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { OrderPlaced } from './components/OrderPlaced';
import { Featured } from './components/Featured';
import { New } from './components/New';
import { User } from './components/User';
import { UserDetails } from './components/UserDetails';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="product" element={<Product/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>} />
          <Route path="new" element={<New/>} />
        </Route>
        <Route path="users" element={<User/>}>
          <Route path=":userid" element={<UserDetails/>}/>
        </Route>
        <Route path="/order-summary" element={<OrderPlaced/>}/>
        <Route path="*" element={<NoMatchFound/>} />
       
      </Routes>
    </div>
  )
}

export default App
