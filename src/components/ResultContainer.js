import React from 'react'
import '../styles/ResultContainer.css'

const DecryptContainer = ({convertedText}) => {

  return (
    <div className="ResultContainer">
      <input type="text" className="ResultContainer__input" placeholder="The result after encrypting/decrypting" value={convertedText}/>
    </div>
  )
}

export default DecryptContainer