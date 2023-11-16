import React, { useState } from "react"
import { Link } from "react-router-dom"
import accounts from "../data"

const Home = () => {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0])
  // so after a mulitple hour session, we finally found the way to render the widths of the divs dynamically. AI tried so many ways to make it happen and finally we were able to do it. I knew that using state might be helpful. And in the end it was. But so painful. We tried to create good widths array using .map. But it didn't work. Then AI suggested using the reducer. And FINALLY it worked. This was all brought on by a refactoring of code since last commit. BUT the cost was a few hours of trying to get the dynamic widths back.
  const widths = selectedAccount.spendings.reduce((acc, item, index) => {
    const width = index === 0 ? 100 : acc[index - 1] * 0.85
    return [...acc, width]
  }, [])
  const [divWidths, setDivWidths] = useState(widths)

  console.log(divWidths)
  console.log(widths)

  const handleAccountClick = (account) => {
    setSelectedAccount(account)
  }
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
            // Dynamically set the class name based on whether it's the selected account
            const isSelected = account === selectedAccount
            return (
              <div
                className={`account-div ${isSelected ? "selected" : ""}`}
                key={id}
                onClick={() => handleAccountClick(account)}
              >
                <span>{title}</span>
                <span>$ {balance}</span>
              </div>
            )
          })}
        </div>
        <div className="spendings-div">
          <h2>Spendings</h2>

          {selectedAccount.spendings.map((item, index) => {
            console.log(index)
            const { category, spent } = item
            const divCategory = category.toLowerCase()

            return (
              <div
                className={`${divCategory}-div`}
                key={category}
                style={{ width: `${divWidths[index]}%` }}
              >
                <span>{category}</span>
                <span>${spent}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
