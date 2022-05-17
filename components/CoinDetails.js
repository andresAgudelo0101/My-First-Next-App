function CoinDetails(props) {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <div>
                    <img src={props.img}/>
                </div>
            </div>
            <div>
                <ul>
                    <li>Precio: {props.price}</li>
                    <li>Simbolo: {props.symbol}</li>
                    <li>Posicion: {props.rank}</li>
                    <li>Volumen: {props.volume}</li>
                    <li>Sitio Web: <a href={props.web} target="_blank"  rel="noreferrer">{props.web}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CoinDetails;
