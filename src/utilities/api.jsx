const list = ["APPL", "AMZN"];

// import { key } from "../key";
const stocks = [
  "AAPL",
  "MSFT",
  "GOOG",
  "GOOGL",
  "AMZN",
  "NVDA",
  "META",
  "BRK/A",
  "BRK/B",
  "HSBC",
  "TSLA",
  "LLY",
  "TSM",
  "UNH",
  "V",
  "NVO",
  "JPM",
  "SHEL",
  "WMT",
  "XOM",
  "AVGO",
  "MA",
  "JNJ",
  "PG",
  "ORCL",
];

//fetch both stocks isntead of one

export async function fetchStockData() {
  const stocks = createStrings();

  // console.log("stocks inside fetch stock data", stocks);
  const returnData = [];
  for (let stock of stocks) {
    const res = await fetch(stock);
    const data = await res.json();
    if (!res.ok) {
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status,
        error: data.error,
      };
    }

    returnData.push(...data.results);
  }
  return returnData;
}

const randomStocks = () => {
  return stocks[Math.floor(Math.random() * stocks.length)];
};
const createStrings = () => {
  const stocks = [];

  for (let i = 0; i < 2; i++) {
    const stockName = randomStocks();
    stocks.push(
      `https://api.polygon.io/v2/aggs/ticker/${stockName}/prev?adjusted=true&apiKey=${import.meta.env.VITE_API_KEY}`
    );
  }
  return stocks;
};
