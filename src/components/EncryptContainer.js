import React from 'react'
import '../styles/EncryptContainer.css'

const EncryptContainer = ({inputText, setInputText}) => {

    return (
        <div className="EncryptContainer">
            <input type="text" className="EncryptContainer__input" placeholder="The text to be encrypted or decrypted" onChange={e => setInputText(e.target.value)} value={inputText} />
        </div>
    )
}

export default EncryptContainer