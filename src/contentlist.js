import React from "react";
import "./contentcard.css";
import Contentcard from "./contentcard";

const ContentList=(props)=>{
    // console.log(props.apprecs);
    // const clrecs=props.apprecs;
    const clWatch1=(vId)=>{
        props.appWatch(vId);
   // alert(vId) ;
    }
    const renderlist=props.apprecs.map((item)=>{
     return <Contentcard clrecs={item} clWatch={clWatch1} />
    });


  return(
      <div>
      <div className="filters">
          <button className="filter-options active">all</button>
          <button className="filter-options">CSS</button>
          <button className="filter-options">web development</button>
          <button className="filter-options">python</button>
          <button className="filter-options">entertainment</button>
          <button className="filter-options">marvel</button>
          <button className="filter-options">javascript</button>
          <button className="filter-options">artificial intelligence</button>
          <button className="filter-options">machine learning</button>
          <button className="filter-options">trending</button>
      </div>
          <br/><br/><br/>
      <div className="videos"  >
          {renderlist}
      </div>
      </div>
  )
}
export default ContentList;