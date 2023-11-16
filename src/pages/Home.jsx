import React from "react"
import { Link } from "react-router-dom"

import accounts from "../data"
const Home = () => {
  console.log(accounts)
  return (
    <>
      <div className="pay-transfer-div">
        <Link to="payments" className="pay-link">
          Pay
        </Link>
        <Link to="#">Transfer</Link>
      </div>
      <div className="accounts-spending-div">
        <div className="accounts-div">
          <h2>Accounts</h2>
          {accounts.map((account) => {
            const { title, balance, id } = account
            const accountTitle = title.split(" ")[0].toLowerCase()
            return (
              <div className={`${accountTitle}-div`} key={id}>
                <span>{title}</span>
                <span>$ {balance}</span>
              </div>
            )
          })}
        </div>
        <div className="spendings-div">
          <h2>Spendings</h2>
          {accounts.map((account) => {
            const { title, id } = account
            // this will help with naming the title divs
            const accountTitle = title.split(" ")[0].toLowerCase()
            let width = 100 // we're going to use this so set the div widths as percentages
            return (
              <div key={id} className={`${accountTitle}-account-div`}>
                {account.spendings.map((item) => {
                  const { category, spent } = item
                  const divCategory = category.toLowerCase()
                  const style = { width: `${width}%` }
                  // Adjust width for the next iteration
                  width *= 0.85
                  return (
                    <div
                      className={`${divCategory}-div`}
                      key={category}
                      style={style}
                    >
                      <span>{category}</span>
                      <span>${spent}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
