import React from "react";
import './App.css'

import Home from './components/ReactRouterDOM/Home';
import { AuthProvider } from "./components/ReactRouterDOM/auth";
import { Product } from './components/ReactRouterDOM/Product';
import  {NoMatchFound}  from './components/ReactRouterDOM/NoMatchFound';
import { Navbar } from './components/ReactRouterDOM/Navbar';
import { Routes, Route } from 'react-router-dom';
import { OrderPlaced } from './components/ReactRouterDOM/OrderPlaced';
import { Featured } from './components/ReactRouterDOM/Featured';
import { New } from './components/ReactRouterDOM/New';
import { User } from './components/ReactRouterDOM/User';
import { UserDetails } from './components/ReactRouterDOM/UserDetails';
import Profile from "./components/ReactRouterDOM/Profile";
import { Login } from "./components/ReactRouterDOM/Login";
import { RequireAuth } from "./components/ReactRouterDOM/RequireAuth";

const LazyAbout = React.lazy(() => import("./components/ReactRouterDOM/About"))

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}/>
        <Route path="product" element={<Product/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>} />
          <Route path="new" element={<New/>} />
        </Route>
        <Route path="users" element={<User/>}>
          <Route path=":userid" element={<UserDetails/>}/>
        </Route>
        <Route path="/order-summary" element={<OrderPlaced/>}/>
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NoMatchFound/>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
