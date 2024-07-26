

const Card = (props)=>{

    return(
        <div className="card">
                    <span className="cardTitle">{props.name}</span>
                    <span className="cardStatus">5 bài </span>
                    <button className="deletCard">Delete</button>
        </div>
    )
}

export default Card