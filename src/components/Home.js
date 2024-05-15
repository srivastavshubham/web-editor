import Code from "./Code";
import Result from "./Result";
function Home(){
    return (
        <>
        <div style={{background:'#060606',color:'rgb(170, 174, 188)',height:'9vh',textAlign:'center',fontSize:'30px',fontWeight:'bolder',paddingTop:'10px'}}>
            Editor
        </div>
        <Code/>
        <Result/>
        
        </>
    );
}

export default Home;