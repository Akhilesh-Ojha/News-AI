import React , { useState , useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '021fdc7a4f73d1a89f31d5d63e7c01c02e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles , setNewsArticles] = useState([]);
  

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand:({command , articles}) => {
        if(command === 'readHeadingCommand') {
          setNewsArticles(articles);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      }
    })
  } , [])
  return (
    <div className='main'>
      <h1>Welcome to AI News BOT</h1>
      <p>Or Just a have a casual chat with my bot :)</p>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
