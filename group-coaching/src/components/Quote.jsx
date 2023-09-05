import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import BasicCard from "./BasicCard";

export default function Quote() {
  const [quote, setQuote] = useState("");
 

    const apiFetch = useData("/quoteapi");

    if (apiFetch && apiFetch.data) {
        
        console.log('hello')
        const randomIndex = Math.floor(Math.random() * apiFetch.data.length);
        setQuote(apiFetch.data[randomIndex]?.q || "No quotes available");
      } else {
        setQuote("No quotes available");
      }
   
  
    // if (!apiFetch || apiFetch.data) {
    //   return "Loading...";
    // }

  return (
    <>
        <BasicCard main={quote}></BasicCard>

    </>
  );
}
