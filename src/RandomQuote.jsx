import { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[0].content);
      });
  }, []);

  return <div>{quote}</div>;
};

export default RandomQuote;
