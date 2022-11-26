import {useState} from 'react'

function App() {
  const [value, setvalue] = useState(0)
  let style1 = { color: "blue" };
  let style2 = { color: "red" };
  let style3 = { color: "purple" };
  let style4 = { color: "white" };

    return(
        <>
            <div className='main'>
                <div className='center'>
                    <h1 
                      style={
                        value % 3 === 0 && value % 5 === 0 && value != 0 ? style3 :
                        value % 3 === 0 && value != 0 ? style1 :
                        value % 5 === 0 && value != 0 ? style2 :
                        style4
                      }> {value} </h1>
                    <div className='button'>
                        <button onClick={() => setvalue(value+1)}>
                          Increment </button>
                        <button onClick={() => {
                          if (value > 0) {
                          setvalue(value-1)}
                          if(value==0){
                          alert("Sorry!!!, Zero Limit Reached")
                          }
                          }
                        }>
                          Decrement </button>
                        <button onClick={() => setvalue(0)}>
                          Reset </button>
                    </div>
                    <h2 
                      style={
                        value % 3 === 0 && value % 5 === 0 && value != 0 ? style3 :
                        value % 3 === 0 && value != 0 ? style1 :
                        value % 5 === 0 && value != 0 ? style2 :
                        style4
                      }>
                      {
                        value % 3 === 0 && value % 5 === 0 && value != 0 ? "Fizz Buzz":
                        value % 3 === 0 && value != 0 ? "Fizz" :
                        value % 5 === 0 && value != 0 ? "Buzz" :   
                        "."                     
                      }
                    </h2>
                </div>
            </div>
        </>
    )
}
export default App;

