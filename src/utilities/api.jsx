const list = ["APPL", "AMZN"]

import { key } from "../key"
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
]

//fetch both stocks isntead of one

export async function fetchStockData() {
  const stocks = createStrings()

  console.log("stocks inside fetch stock data", stocks)
  const returnData = []
  for (let stock of stocks) {
    const res = await fetch(stock)
    const data = await res.json()
    if (!res.ok) {
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status,
        error: data.error,
      }
    }

    returnData.push(...data.results)
  }
  // console.log(returnData);
  return returnData

  // const stocks = createStrings(list);
  // const res = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${key}`);
  // const data = await res.json();
  // if (!res.ok) {
  //   throw {
  //     message: data.message,
  //     statusText: res.statusText,
  //     status: res.status,
  //     error: data.error,
  //   };
  // }
  // return data.results;
  // console.log(data);
  // const obj = {
  //   adjusted: true,
  //   queryCount: 1,
  //   results: [
  //     {
  //       T: "AAPL",
  //       c: 115.97,
  //       h: 117.59,
  //       l: 114.13,
  //       o: 115.55,
  //       t: 1605042000000,
  //       v: 131704427,
  //       vw: 116.3058,
  //     },
  //   ],
  //   resultsCount: 1,
  //   status: "OK",
  //   ticker: "AAPL",
  // };
  // return obj.result;
  // try {
  //   const stockData = [];
  // stocks.forEach(async stock => {
  //   const res = await fetch(stock);
  //   const data = await res.json();
  //   stockData.push(data);
  // });
  //   return stockData;
  // } catch (err) {
  //   console.log(err);
  // }
  // console.log(stocks);
  // const data = await res.json();
  // try {
  //   const values = await allPromise;
  //   console.log(values); // [resolvedValue1, resolvedValue2]
  // } catch (error) {
  //   console.log(error); // rejectReason of any first rejected promise
  // }
  // const res = await fetch(
  // );
  // const data = await res.json();
  // return data;
}

const randomStocks = () => {
  return stocks[Math.floor(Math.random() * stocks.length)]
}
const createStrings = () => {
  const stocks = []

  for (let i = 0; i < 2; i++) {
    const stockName = randomStocks()
    stocks.push(
      `https://api.polygon.io/v2/aggs/ticker/${stockName}/prev?adjusted=true&apiKey=${key}`
    )
  }
  return stocks

  // return list.map(stock => `https://api.polygon.io/v2/aggs/ticker/${stock}/prev?adjusted=true&apiKey=${key}`);
}

//APPL
//CSCO
//AMZN
//GOOGL
