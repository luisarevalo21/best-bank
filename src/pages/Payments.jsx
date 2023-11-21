// Payments.jsx
import React from "react"
import data from "../data.js"
import Spending from "../components/Spending.jsx"

const Payments = () => {
  // Function to generate dates based on index
  const getDate = (index) => {
    const currentDate = new Date()
    let dayOfMonth

    if (index % 2 === 0) {
      // Even index, set to the 1st of the month
      dayOfMonth = 1
    } else {
      // Odd index, set to the 15th of the month
      dayOfMonth = 15
    }

    currentDate.setDate(dayOfMonth)
    return currentDate.toDateString()
  }

  // Create a flat array of all spending items
  const allSpendings = data.reduce((acc, account) => {
    return acc.concat(
      account.spendings.map((spendingItem, index) => ({
        ...spendingItem,
        accountId: account.id,
        date: getDate(index),
      }))
    )
  }, [])

  // Sort all spendings based on generated date
  const sortedSpendings = allSpendings.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  // Group spendings by date
  const groupedSpendings = sortedSpendings.reduce((acc, spendingItem) => {
    if (!acc[spendingItem.date]) {
      acc[spendingItem.date] = []
    }
    acc[spendingItem.date].push(spendingItem)
    return acc
  }, {})

  // Function to determine the class based on the date
  const getDateClass = (date) => {
    const dayOfMonth = new Date(date).getDate()
    return dayOfMonth === 1 ? "payment-1st" : "payment-15th"
  }
  // Function to calculate the total for bills due on a specific day
  const calculateTotalForDay = (day) => {
    const filteredEntries = Object.entries(groupedSpendings).filter(
      ([date]) => {
        const dayOfMonth = new Date(date).getDate()
        return dayOfMonth === parseInt(day, 10)
      }
    )

    console.log("Filtered Entries:", filteredEntries)

    const total = filteredEntries.reduce((acc, [, spendings]) => {
      return (
        acc +
        spendings.reduce(
          (sum, spendingItem) => sum + parseFloat(spendingItem.spent),
          0
        )
      )
    }, 0)

    console.log("Total:", total)

    return total
  }

  return (
    <div>
      {/* Render spendings based on groupedSpendings */}
      {Object.entries(groupedSpendings).map(([date, spendings], index) => (
        <div key={date} className={`payment-group ${getDateClass(date)}`}>
          <h3>{date}</h3>
          {spendings.map((spendingItem) => (
            <Spending
              key={`${spendingItem.accountId}-${spendingItem.category}`}
              category={spendingItem.category}
              spent={spendingItem.spent}
              renderType="payments"
              date={spendingItem.date}
            />
          ))}
          {/* Display total for 1st at the end of the div if it's the 1st */}
          {/* Display total for 1st at the end of the div if it's the 1st */}
          {date.includes("1") && !date.includes("15") && (
            <div className="total-div">
              <span>Total: </span>
              <span className="total-amount-span">
                ${calculateTotalForDay("1")}
              </span>
            </div>
          )}

          {/* Display total for 15th at the end of the div if it's the 15th */}
          {date.includes("15") && date.includes("1") && (
            <div className="total-div">
              <span>Total: </span>
              <span className="total-amount-span">
                ${calculateTotalForDay("15")}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Payments
