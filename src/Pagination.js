import React from 'react'

export default function Pagination({next, prev}) {

  return (
    <>
    
      {next && <button onClick={next} >Next</button>}
    
    {
      prev && <button onClick={prev} >Previous</button>
    }
     
    </>
  )
}
