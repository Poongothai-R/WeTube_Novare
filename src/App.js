import React, {useState} from "react";
import './App.css';
import Header from "./header";
import Sidebar from "./sidebar";
import data from "./data.json";
import ContentList from "./contentlist";
import WatchScreen from "./watchscreen";


function App() {
    const [records,setRecords]=useState(data);
    // console.log(records);
    const [searchrslt,setSearchRslt]=useState("");
    const [searchkey,setSearchkey]=useState("");

    function handleSearch(searchkey){
        setSearchkey(searchkey);
        if(searchkey!=="") {
            const newrecs = records.filter((item) => {
                const s1 = searchkey.toLowerCase();
                const r1 = item.videoName.toLowerCase();
                return (s1 && r1.includes(s1));
            });
    setSearchRslt(newrecs);
        }
    else{
        setSearchRslt(data);
        }
    }

    const [playrecs, setPlayRecs] = useState("");

function playVideo(vId){
      const vfile = records.filter((item)=>{
       return item.id === vId ;
             }) ;
      // console.log(vfile);
      setPlayRecs(vfile);


}



  return (

    <div className="App">

          <Header sKey={searchkey} searchfunc={handleSearch}/>
        {
            (playrecs.length<1) ?
                ( <main>
                <div className="side-bar"><Sidebar/></div>
                <div className="content"><ContentList apprecs={searchkey.length < 1 ? records : searchrslt}
                                                      appWatch={playVideo}/></div>
            </main> ) : (<main>
                    <WatchScreen vdata={playrecs} />
            </main>)
        }
    </div>
  );
}

export default App;
