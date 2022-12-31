import React from "react";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import OverviewPage from "./components/OverviewPage"
import DetailedResultsPage from "./components/DetailedResultsPage"
import Top20Page from "./components/Top20Page"
import bitcoinLogo from "./images/Bitcoin-logo.jpg"
import ethLogo from "./images/Eth-logo.jpg"

function Layout() {
  return (
    <div>
      <div className="header">
        <div className="header--wrapper">
            <img className="bitcoin-logo" src={bitcoinLogo} />
            <h3 className="header--title">Crypto Insights Survey</h3>
            <img className="eth-logo" src={ethLogo} />
        </div>
        <nav>
            <Link className="link" to="/"> Overview </Link> | 
            <Link className="link" to="/detailedResults"> Detailed Results </Link> | 
            <Link className="link" to="/top20"> Top 20 Cryptos </Link>
        </nav>
      </div>  
      <Outlet />
    </div>
  )
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="detailedResults" element={<DetailedResultsPage />} />
          <Route path="top20" element={<Top20Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


