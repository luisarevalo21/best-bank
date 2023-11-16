const list = ["APPL", "AMZN"];

import { key } from "../key";
//fetch both stocks isntead of one

export async function fetchStockData() {
  // const stocks = createStrings(list);

  const res = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${key}`);

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
      error: data.error,
    };
  }

  return data.results;

  // console.log(data);

  // const obj = {
  //   adjusted: true,
  //   queryCount: 1,
  //   request_id: "6a7e466379af0a71039d60cc78e72282",
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
  //   "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-11-13/2023-11-13?adjusted=true&sort=asc&limit=120&apiKey=D3a26QWq870tQOzIet7wPOcvLUeodPg9"
  // );

  // const data = await res.json();
  // return data;
}

const createStrings = list => {
  return list.map(
    stock => `https://api.polygon.io/v2/aggs/ticker/${stock}/prev?adjusted=true&apiKey=D3a26QWq870tQOzIet7wPOcvLUeodPg9`
  );
};

// https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=D3a26QWq870tQOzIet7wPOcvLUeodPg9
// TSLA

//APPL
//CSCO
//AMZN
//GOOGL
