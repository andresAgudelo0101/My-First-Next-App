import Axios from "axios";
import Link from "next/link";
import CoinCard from "../components/CoinCard";
import styles from "../styles/Home.module.css";

const CoinList=({coinData})=>{
return(
    <div>
      <ul className={styles.containerCoinGrid}>
        {coinData.coins.map((coin)=>(
          <Link key={coin.id} href={`/coins/${coin.id}`}>
            <a> 
               <CoinCard name={coin.name} icon={coin.icon} price={coin.price}/>
            </a>
          </Link>
        ))}
      </ul>
    </div>
)}

const Tostring=(name)=>{

const formated=name.toString()

return formated
}

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

  