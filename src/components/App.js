import '../styles/App.css';
import {useState} from 'react';
import CipherKey from './CipherKey';
import EncryptContainer from './EncryptContainer';
import ResultContainer from './ResultContainer';
import Header from './Header';

function App() {
  const [inputText, setInputText] = useState("");
  const [cipherKey, setCipherKey] = useState(1);
  const [convertedText, setConvertedText] = useState("");

  const charTable = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'];

  const handleDecrypt = () => {
    let returnText = "";
    [...inputText].forEach(c => {
        if (c !== " ")  {
            const theDifference = charTable.indexOf(c.toLowerCase()) - parseInt(cipherKey);
            returnText += charTable[theDifference < 0 ? charTable.length + theDifference - 1 : theDifference];
        }
        else returnText += c;
    });
    setConvertedText(returnText);
  };

  const handleEncrypt = () => {
    let returnText = "";
    [...inputText].forEach(c => {
        if (c !== " ") returnText += charTable[(charTable.indexOf(c.toLowerCase()) + parseInt(cipherKey)) % 34];
        else returnText += c;
    });
    setConvertedText(returnText)
  }

  return (
      <div className="App">
          <Header />
          <div className="gridContainer">
              <EncryptContainer inputText={inputText} setInputText={setInputText} />
              <ResultContainer convertedText={convertedText} />
              <CipherKey cipherKey={cipherKey} setCipherKey={setCipherKey} />
              <div className="Dummy"></div>
              <div className="Encrypt">
                  <button type="submit" className="encryptButton" onClick={handleEncrypt}>Encrypt</button>
              </div>
              <div className="Decrypt">
                  <button type="submit" className="decryptButton" onClick={handleDecrypt}>Decrypt</button>
              </div>
          </div>
      </div>
  );
}

export default App;
