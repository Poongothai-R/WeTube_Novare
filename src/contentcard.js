import './contentcard.css';

const Contentcard=(props)=>{
    // console.log(props.clrecs);
    const ccrecs=props.clrecs;

// const playVideo=()=>{
//     const vId= (ccrecs.videoId).substring(32,);
// props.clWatch(vId);
// }

    return(



            <div className="video"  onClick={()=>props.clWatch(ccrecs.id)}>

                <div className="thumbnail" >
                    <img src={"videos/" +ccrecs.videoThumbnail }  alt="" />

                </div>

                <div className="details">
                    <div className="author">
                        <img
                            src={"channels/" +ccrecs.channelThumbnail}
                            alt=""/>
                    </div>
                    <div className="title">
                        <h3>
                            {ccrecs.videoName}
                        </h3>
                        <a href="">
                            {ccrecs.channelName}
                        </a>
                        <span> {ccrecs.views +"  Views . 1 Month Ago"} </span>
                    </div>

                </div>

            </div>


    )
}
export default Contentcard;