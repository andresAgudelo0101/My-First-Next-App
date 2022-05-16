import { useRouter } from "next/router"

const Coin=()=>{
    const router=useRouter();
    const {coin}=router.query;

    return<div>
        hello{coin}
    </div>
}

export default Coin;