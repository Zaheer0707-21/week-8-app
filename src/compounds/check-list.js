import { useState } from "react"
import Listitem from "./clist-props"
const List = () => {


   
    const  litem = ["Present in school","Homework completed ","Classwork conpleted","Lesson completed","Assigiment completed"]
    
       
    return (
      <>
        
        <h1> List  of School Activities</h1>

        {
             litem.map(function(item){
                return(
                    <Listitem activities = {item}/>
     
                )
           })
        }
        
  
       
      </>
    )
  }
  export default List