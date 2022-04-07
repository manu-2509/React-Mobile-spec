import "./App.css"
function App() {

  const MobileOS = ["Android","Blckberry","iPhone","iPad","Windows"]
  const MobileM = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
        <h1>
          Mobile Operating System
          <ul className="MobileOS">
            {MobileOS.map((e)=>{
              return <li>{e}</li>
            })}
          </ul>
        </h1>
        <h1>
          Mobile Manufacturers
          <ul className="MobileOS">
            {MobileM.map((e)=>{
              return <li>{e}</li>
            })}
          </ul>
        </h1>
    </div>
  );
}

export default App;
