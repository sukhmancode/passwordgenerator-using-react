import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/usepassword';

function App() {
  const [length,setlength]=useState(1);
  const [copytext,setcopytext]=useState(false)

  const [checkboxdata,setcheckboxdata]=useState([
    {title:'Include Uppercase Letters',state:false},
    {title:'Include Lowercase Letters',state:false},
    {title:'Include Numbers',state:false},
    {title:'Include Symbols',state:false}
  ]);

  const handlecheckbox=(e)=>{
    const updatecheckbox=[...checkboxdata];
    updatecheckbox[e].state=!updatecheckbox[e].state
    setcheckboxdata(updatecheckbox)
  }
 
const {password,generatePassword}=usePasswordGenerator();
const copypass=()=>{
  navigator.clipboard.writeText(password);
  setcopytext(true)
  setTimeout(()=>{
    setcopytext(false)
  },1000)
}
  return (
    <>
    <div className='main-root'>
      <div><h1>Password Generator</h1></div>
      <div className='output-box'>
        <div>
        <h1>{password}</h1>
        </div>
        <div className='copy-area'>
          <h1 className='copy-text'>{copytext ? "Copied" :""}</h1>
        <img src="https://randpass-fm.netlify.app/assets/images/icon-copy.svg" alt="copy-icon" width={22} height={25} onClick={copypass}  />
        </div>
      </div>
      <div className='main-box'>
        <div className='character-len'>
          <p>Character Length</p>
          <h1>{length}</h1>
        </div>

        <div className='input-range'>
          <input type="range" value={length} min={1} max={20} className='slider' onChange={(e)=>{setlength(e.target.value)}}/>
        </div>

        <div className='checkbox-area'>
         {
          checkboxdata.map((checkbox,index)=>(
            <div className='check'>
            <input type='checkbox' checked={checkbox.state} onChange={()=>handlecheckbox(index)}/>
            <p>{checkbox.title}</p>
            </div>
          ))
         }
          </div>

        

        <div className="strength-area">
          <div>
          <p>STRENGTH</p>
          </div>

          <div className="bars">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
          </div>

        </div>
        <div className="generate-btn">
          <button onClick={()=>generatePassword(checkboxdata,length)}>Generate</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
