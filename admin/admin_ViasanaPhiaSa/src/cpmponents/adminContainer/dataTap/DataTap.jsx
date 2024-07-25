import "./DataTap.css"
import "./GetNameForm.css"
import Card from "./Card"
import { useState } from "react"


const DataTap = () =>{
    const [adding, setAdding] = useState(false)
    
    const GetNameForm = (props)=>{
        const handleCancel = (event) => {
            event.preventDefault();
            setAdding(adding=>adding=!adding)
        }
    
        const handleOk = (event) => {
            event.preventDefault();
            setAdding(adding=>adding=!adding)
        }
        return(
            <form action="" method="get" id="getName" className="getNameForm">
                <div>{props.name + " name?"}</div>
                <input type="text" name="nameInput" placeholder="Type here"/>
                <div className="buttons">
                    <button type="reset" id="CacelButton" onClick={handleCancel}>Cancel</button>
                    <button type="submit" id="OkButton" onClick={handleOk}>Ok</button>
                </div>
            </form>
        )
    }

    return(
        <div className="dataTap">
            <div className="TapTitle">Data</div>
            <span>Total 1</span>
            <div className="list">
                <div className="cardsList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <button className="addBar" onClick={()=>setAdding(adding=>!adding)}>+</button>
                </div>
            </div>
            {adding&&<GetNameForm name="phan"/>}
        </div>
    )
}

export default DataTap