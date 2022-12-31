import React from "react"
import Card from "./Card"
import Trending from "./Trending"
import Footer from "./Footer"

export default function Top20Page(){
  
    const [coinList, setCoinList] = React.useState([])
    const [trendingCoins, setTrendingCoins] = React.useState([])
    
    React.useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => response.json())
    .then((data) => {
        setCoinList(data) 
        } )
        }, []) 
    
    React.useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
    .then((response) => response.json())
    .then((data) => {
        setTrendingCoins(data.coins)
        } )
        }, [])
        
    const dollarUSLocale = Intl.NumberFormat('en-US');
         
    const cards = coinList.slice(0,20).map( item => {
        return (
            <Card 
                key= {item.id}
                name= {item.name} 
                ticker= {item.symbol}
                currentPrice= {item.id === "shiba-inu" ? item.current_price : dollarUSLocale.format(item.current_price)}  
                marketCap= {dollarUSLocale.format(item.market_cap)}
                marketCapRank= {item.market_cap_rank}
                priceChange24Hours= {dollarUSLocale.format(item.price_change_24h)}
                priceChangePercent24Hours= {item.price_change_percentage_24h.toFixed(2)}
                logo= {item.image}
            />
        )
    })
    
    const trenders = trendingCoins.map (coin => {
        return (
            <Trending 
               key= {coin.item.coin_id}
               name= {coin.item.name}
               ticker= {coin.item.symbol}
               logo= {coin.item.small}
            />
        )
    })
    
    return (
        <div className="main--container">
          <h1>Current Top 20 Cryptos</h1>
          <div className="cards--mainContainer">
            {cards}
          </div>
          <h1 className="trending--title">Trending Coins</h1>
          {trenders}
          <Footer />
        </div>
    )
} 

