import styles from "../styles/CoinCard.module.css";

function CoinCard(props) {
    return (
        <div className={styles.container}>
            <h2>{props.name}</h2>
            <div className={styles.containerImg}>
                <img src={props.icon} width={100}/>
            </div>
            <p>{props.price}</p>
        </div>
    )
}

export default CoinCard;
