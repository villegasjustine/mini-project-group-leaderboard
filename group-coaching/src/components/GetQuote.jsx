import { useEffect, useState } from 'react';
import BasicCard from './BasicCard';
export default function GetQuote() {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] =useState('Loading...')
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/quoteapi');
        if (!response.ok) {
          throw new Error('err');
        }
        const data = await response.json();
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuote(data[randomIndex].q);
          setAuthor(data[randomIndex].a)
        } else {
          setQuote('No quotes available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setQuote('Error fetching data');
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {/* <BasicCard 
      main = {quote} 
      description={author}/> */}
      <br></br>
      <em>{quote}</em>
      <p>{author}</p>
    </>
  );
}