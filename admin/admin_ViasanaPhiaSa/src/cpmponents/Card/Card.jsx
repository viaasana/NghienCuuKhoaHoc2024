import "./Card.css"

const Card = ({id, name, lessonCount})=>{

    return(
        <div className="card">
            <div className="card-content">
                <h2 className="cardTitle">{name}</h2>
                <p className="cardStatus">{lessonCount}</p>
            </div>
            <button className="card-delete-button" >
                Delete
            </button>
        </div>
    )
}

export default Card