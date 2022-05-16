import Axios from "axios"
import Link from "next/link"
const CoinList=({coinData})=>{
    console.log(coinData)
return(
    <div>
        {coinData.coins.map((coin)=>(
            <a key={coin.id} href={`coins/${coin.id}`}> 
                <h2>{coin.name}</h2>
                <img src={coin.icon} width={100}/>
                <p>{coin.price}</p>
            </a>
        ))}
    </div>
)}

export const getStaticProps=async()=>{
    const res=await Axios.get("https://api.coinstats.app/public/v1/coins");
    const data=res.data;
    return {
        props:{
            coinData:data,
        },
        revalidate:10,
    }
}

export default CoinList;

  