import React from 'react'
import '../styles/CipherKey.css'

const CipherKey = ({cipherKey, setCipherKey}) => {
    const handleChange = e => {
        if (e.target.value < 0 || e.target.value > 34) alert("Nie możesz podać klucza spoza zakresu [0-34]");
        else setCipherKey(e.target.value);
    }

    return (
        <div className="CipherKey">
          <p>Enter the key: </p>
          <input min="1" max="34" type="number" onChange={handleChange} value={cipherKey}/>
        </div>
    )
}

export default CipherKey