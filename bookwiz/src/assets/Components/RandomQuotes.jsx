import { useState, useEffect } from "react";
import quotes from "./quotes.json";


const getRandomQuotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};


const RandomQuotes = () => {
    const [quote, setQuote] = useState(getRandomQuotes());

    useEffect(() => {
        setQuote(getRandomQuotes());
    }, []); 
  return (
    <div>
        <p className=" text-gray-300 text-[40px] font-[Poppins] font-extralight w-[600px] ">{quote.Quote}</p>
        <p className=" text-gray-100 text-[25px] font-bold font-[poppins] w-[600px] text-right">-{quote.Author}</p>
    </div>
  );
};

export default RandomQuotes;
