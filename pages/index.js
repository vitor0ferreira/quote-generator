import Quote from "@/public/components/Quote";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {

  const [quoteResponse, setQuoteResponse] = useState({});

  useEffect(()=>{

    async function CallQuote() {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=', {
        headers:{
          'X-Api-Key': 'p+1UonYp3he379lGNG6akA==Ug9FpTFDQqg3PcUF'
        }
      })

      setQuoteResponse(response);
    }

    CallQuote();
    console.log(quoteResponse);

  }, []);



  return (
    <div>  
      quoteResponse.quote ?
        <Quote quoteResponse={quoteResponse} />
      :
        <div>Loading...</div>
    </div>
  );
}
