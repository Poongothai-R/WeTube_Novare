import React, { useState } from "react";
import "./sidebar.css";
import "./App.css";
import "./header.css";
import "./contentcard.css";



const WatchScreen = (props) => {

    const playdata = props.vdata;



    const renderlist =  playdata.map ((itm) => {

        return   (

            <iframe
                src={"https://www.youtube.com/embed/"+(itm.videoId).substring(32,)}
                frameBorder="0"
                title={itm.videoName}
                allowFullScreen
                width="1500"
                height="600">
            </iframe>
        );
    }    );

    return   (<div>  <br/> <br/> <br/> {renderlist}  </div>);

}

export default WatchScreen;
