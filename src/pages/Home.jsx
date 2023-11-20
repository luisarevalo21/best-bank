import React, { useState } from "react"
import { Link } from "react-router-dom"
import accounts from "../data"
import Account from "../components/Account.jsx"
import Spending from "../components/Spending.jsx"

const Home = () => {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0])
  // working with AI on the issue of dynamically styling the widths of our divs in the spending section. Definitely attempted more simplistic approaches that didn't achieve the desired result. So we create a divState
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
          {accounts.map((account) => (
            <Account
              key={account.id}
              {...account}
              isSelected={account === selectedAccount}
              onClick={() => handleAccountClick(account)}
            />
          ))}
        </div>
        <div className="spendings-div">
          <h2>Spendings</h2>

          {selectedAccount.spendings.map((item, index) => (
            <Spending
              key={item.category}
              {...item}
              index={index} // Pass index to Spending component and use it to create dynamic dates for payments
              renderType="home"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
