import React, {useState} from 'react'

const Top5history = () => {
  const [history,setHistory] = useState(JSON.parse(localStorage.getItem('history')) || [])
  const clearHistory = () => {localStorage.clear(); setHistory([]) }
  const removeElement = (e) => {const newhistory = []; for (let i = 0;i<history.length;i++){if (i !== parseInt(e.target.id))
  newhistory.push(history[i]); }; setHistory(newhistory); localStorage.setItem('history',JSON.stringify(newhistory))} 
  const handleData = (e) => {const data = history[parseInt(e.target.id)] }
  const refreshData = () => {setHistory(JSON.parse(localStorage.getItem('history')) || [])}

  return <section>
  
    <div id='heading' onClick={() => {refreshData()}}>History</div>
    {history.length>0 ? (history.map((data,index) => {const{track,artist1,artist2,artist3} = data ;  
    return <div key={index}><button id={index} key={index} className='handledata' onClick = {(e) => {handleData(e)}}>Track : {track},  Artists : {artist1}, {artist2}, {artist3} </button>
    <button type='click' id={index} className='remove' onClick={(e) => {removeElement(e)}} >Remove</button></div>}) ) 
  : (<div id = 'error'>No track and artist to display </div>)}
    <button id= 'footer' type='click' onClick={() => {clearHistory()}}>Clear History</button>
    
  </section>
}

export default Top5history