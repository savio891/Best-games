import "../Card/Card.css"

export default function Card(props) {
    const item = props.item
    return(
        <>
            <div className="card">
                <h1>{item.name}</h1>
                <img src={item.image} />
            </div>
        </>
    )
}