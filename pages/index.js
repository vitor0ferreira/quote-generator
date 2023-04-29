import Quote from "@/public/components/Quote";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

  const [quoteData, setQuoteData] = useState(null);

  useEffect(()=>{

    async function getQuotesByCategory() {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=`, {
          headers: {
            'X-Api-Key': 'p+1UonYp3he379lGNG6akA==Ug9FpTFDQqg3PcUF'
          },
          contentType: 'application/json'
        });
        console.log(response.data);
        setQuoteData(response.data[0]);
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    }

    getQuotesByCategory();

  }, []);



  return (
    <>
        {quoteData && <Quote quotes={quoteData.quote} authors={quoteData.author}/>}
    </>
  );
}
