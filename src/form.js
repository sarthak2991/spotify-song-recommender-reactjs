import React,{useState} from 'react'

const Form = () => {
  const history = []
  const[track,setTrack] = useState('')
  const[artist1,setArtist1] = useState('')
  const[artist2,setArtist2] = useState('')
  const[artist3,setArtist3] = useState('')
    
    // this helper function that gets called on form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if (track && artist1 && artist2 && artist3)
        {const data =  {track:track,artist1:artist1,artist2:artist2,artist3:artist3}
        
        history.push(data)
        setTrack('')
        setArtist1('')
        setArtist2('')
        setArtist3('')
      
        if (localStorage.getItem('history')){const oldhistory = JSON.parse(localStorage.getItem('history'))
      if(!(data in oldhistory)){oldhistory.push(data); localStorage.setItem('history',JSON.stringify(oldhistory)); }}
        else{localStorage.setItem('history',JSON.stringify(history))}
    }
    else{alert('fill all the fields of form!!!')}
    }
    
  return <>
  <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" name="track" placeholder= "song name"  value={track} onChange={(e) => {setTrack(e.target.value)}} />
        <input type="text" name="artist1" placeholder="artist1" value={artist1} onChange={(e) => {setArtist1(e.target.value)}}/>
        <input type="text" name="artist2" placeholder="artist2" value={artist2} onChange={(e) => {setArtist2(e.target.value)}}/>
        <input type="text" name="artist3" placeholder="artist3" value={artist3} onChange={(e) => {setArtist3(e.target.value)}}/>
        <button type='submit'>Get Recomendations</button>
      </form>
  
    
</>

}

export default Form