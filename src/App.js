import {useState, useEffect} from 'react'
import './Styles/App.css'
import Frame from './Components/Frame';

function App() {

  const dateObj = new Date()
  const date = {day: dateObj.getDate(), month: dateObj.getMonth() + 1}
  const [quote, setQuote] = useState({})
  const [phraseSize, setPhraseSize] = useState(0)

  const dayQuote = (month, day) => {
    return (month * 30) + day
  } 

  useEffect(() => {
    async function getQuote(){
      await fetch(`https://dummyjson.com/quotes?skip=${dayQuote(date.month, date.day)}&limit=1`)
        .then(res => res.json())
          .then(res => {
              let quote = res.quotes[0]
              setQuote(quote)
              setPhraseSize(quote.quote.length)
            });
    }

    getQuote()
  }, [])

  return (
    <div className="App">
      <Frame phrase = {quote.quote} author = {quote.author}/>
    </div>
  );
}

export default App;
