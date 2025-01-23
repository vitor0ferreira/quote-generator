import Quote from "@/public/components/Quote/Quote";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { BsTwitter } from "react-icons/bs";

export default function Home() {

  const [quoteData, setQuoteData] = useState(null);
  const [mainColor, setMainColor] = useState('000000');
  const [requested, setRequested] = useState(false);
  const [tweetURL, setTweetURL] = useState(null);

  const tweetIntentURL = 'https://twitter.com/intent/tweet?hashtags=quote&text=';


  async function getQuotesByCategory() {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=`, {
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_NINJA_API_KEY,
        },
        contentType: 'application/json'
      });
      console.log('0');
      setQuoteData(response.data[0]);
      setTweetURL(tweetIntentURL + response.data[0].quote + '%20%20' + response.data[0].author);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
    setRequested(true);
  }

  useEffect(()=>{

    if(!requested){
      getQuotesByCategory();
      setMainColor(Math.floor(Math.random()*16777215).toString(16));
      document.body.style.backgroundColor = "#" + mainColor;
      const elements = document.querySelectorAll("*");
      for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = mainColor;
      }
    };

  }, [requested]);

  const handleNewQuote = () => {
    setRequested(false);
  }

  return (
    <div className="wrapper_div">
        {quoteData && <Quote quotes={quoteData.quote} authors={quoteData.author} color={mainColor} />}
        <div className="buttons_div">
          <a
            href={tweetURL} className="twitter_button"
            target="_blank"
          ><BsTwitter/>
          </a>
          <button onClick={handleNewQuote}>New Quote</button>
        </div>
    </div>
  );
}
