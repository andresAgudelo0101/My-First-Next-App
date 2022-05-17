import styles from "../styles/CoinDetail.module.css";

function CoinDetails(props) {
    return (
        <div className={styles.container}>
            <div className={styles.containerGrid1}>
                <div className={styles.containerChildGrid1}>
                    <div className={styles.containerTitle}>
                        <h1>{props.name}</h1>
                    </div>
                    <div className={styles.containerImg}>
                        <img src={props.img} className={styles.img}/>
                    </div>
                </div>
            </div>
            <div className={styles.containerGrid2}>
                <ul className={styles.coinList}>
                    <li><b>Precio:</b> {props.price}</li>
                    <li><b>Simbolo:</b> {props.symbol}</li>
                    <li><b>Posicion:</b> {props.rank}</li>
                    <li><b>Volumen:</b> {props.volume}</li>
                    <li><b>Sitio Web:</b> <a href={props.web} target="_blank"  rel="noreferrer" className={styles.hyper}>{props.web}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CoinDetails;
