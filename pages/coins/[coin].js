import CoinDetails from "../../components/CoinDetails";

const Coin=({coinId})=>{
    console.log(coinId)
    const coin=coinId.coin;
    return(
    <>
    <CoinDetails 
        name={coin.name} 
        img={coin.icon} 
        price={coin.price} 
        rank={coin.rank}
        symbol={coin.symbol}
        web={coin.websiteUrl}
        volume={coin.volume}
    />
    </>
    )
}

export const getServerSideProps=async(context)=>{
    const { coin } = context.query;
    const res = await fetch(`https://api.coinstats.app/public/v1/coins/${coin}`)
    const data = await res.json()
    return {
        props:{
            coinId:data,
        },
    }
}


export default Coin;