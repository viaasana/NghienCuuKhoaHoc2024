import "./DataTap.css"
import "./GetNameForm.css"
import Card from "./Card"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { db } from "../../../lib/firebase"
import {getDocs, collection, doc, getDoc} from 'firebase/firestore'
import Chapter from "../../../collection/Chapter"



const DataTap = () =>{
    const [adding, setAdding] = useState(false)
    const [ChapterList, setChapterList] = useState([])
    
    const chapterColectionRef = collection(db, "chapters")
    useEffect(()=>{
        const getChapterList = async()=>{
            try {
                const _chapterList = await getDocs(chapterColectionRef)
                const ChapterList = _chapterList.docs.map((doc)=>(new Chapter(doc)))
                setChapterList(ChapterList)
                
            } catch (error) {
                console.error(error)
            }
        }
        getChapterList()
    }, [])
    //function
    var getNameFormPos
    const handleAdding = ()=>{
        const card = document.getElementById("getName")
        if(card){
            getNameFormPos = card.getBoundingClientRect(); 
        }
        setAdding(adding=>!adding)
    }
    
    const GetNameForm = (props)=>{
        const handleCancel = (event) => {
            event.preventDefault();
            setAdding(adding=>adding=!adding)
        }
    
        const handleOk = (event) => {
            event.preventDefault();
            setAdding(adding=>adding=!adding)
            toast.success("Added")
        }
        return(
            <form action="" method="get" id="getName" className="getNameForm" >
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
                    {
                        ChapterList.map((chapter)=>{
                            <Card name={chapter.name} />
                        })
                    }
                    <button className="addBar" onClick={()=>handleAdding()}>+</button>
                </div>
            </div>
            {adding&&<GetNameForm name="phan" rect={getNameFormPos}/>}
        </div>
    )
}

export default DataTap