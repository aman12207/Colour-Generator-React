import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colour,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));

  const handleSubmit=(e) =>{
    e.preventDefault();
    try {
      const colors = new Values(colour).all(10);
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return <>
  <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='#f15025'
        value={colour}
        onChange={(e)=>setColor(e.target.value)}
        className={`${error && 'error'}`}
      />
      <button className='btn' type='submit'>
        submit
      </button>
    </form>
  </section>
  <section className='colors'>
    {list.map((colour,index)=>{
      console.log(list)
      return <SingleColor key={index} {...colour} index={index}/>
    })}
  </section>
</>
}

export default App
