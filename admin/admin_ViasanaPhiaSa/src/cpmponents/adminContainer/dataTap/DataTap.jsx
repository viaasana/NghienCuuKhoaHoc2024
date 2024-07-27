import "./DataTap.css"
import "./GetNameForm.css"
import Card from "../../Card/Card"
import Loading from "../../Loading/Loading"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { db } from "../../../lib/firebase"
import {getDocs, collection, doc, getDoc} from 'firebase/firestore'
import Chapter from "../../../collection/Chapter"

import addingCardIamge from "../../../assets/addingCard.png"



const DataTap = () =>{
    const [adding, setAdding] = useState(false)
    const [ChapterList, setChapterList] = useState([])
    const [loading, setLoading] = useState(true)
    
    const chapterColectionRef = collection(db, "chapters")
    useEffect(()=>{
        const getChapterList = async()=>{
            try {
                const _chapterList = await getDocs(chapterColectionRef)
                const newChapterList = await Promise.all(_chapterList.docs.map(async (doc)=>{
                    const chapter = new Chapter(doc)
                    await chapter.initialize()
                    return chapter
                }))
                setChapterList(newChapterList)
                setLoading(false)
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


    
/////main render

    if(loading){
        return(
            <Loading/>
        )
    }
    return(
        <div className="dataTap">
            <div className="TapTitle">Data</div>
            <span>Total {ChapterList.length}</span>
            <div className="list">
                <div className="cardsList">
                    {
                        ChapterList.map((chapter) => (
                            <div className="row">
                                <div className="column">
                                    <Card key={chapter.id} id={chapter.id} name={chapter.name}  lessonCount={chapter.lessonId.length} />
                                </div>
                            </div>
                        ))
                    }
                    
                    <div className="row">
                        <div className="column">
                            <img src={addingCardIamge} alt="" className="addBar" onClick={()=>handleAdding()}/>   
                        </div>
                    </div>
                    
                </div>
            </div>
            {adding&&<GetNameForm name="phan" rect={getNameFormPos}/>}
        </div>
    )
}

export default DataTap