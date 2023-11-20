const Spending = ({ category, spent, width, renderType, date }) => {
  console.log(renderType)

  if (renderType === "home") {
    return (
      <div
        className={`${category.toLowerCase()}-div`}
        style={{ width: `${width}%` }}
      >
        <span>{category}</span>
        <span>${spent}</span>
      </div>
    )
  } else if (renderType === "payments") {
    return (
      <div className="payment-item">
        {/* Your existing JSX for rendering spending */}
        <span>{category}</span>
        <div className="amount-div">
          <span className="amount">${spent}</span>
        </div>
      </div>
    )
  }
}

export default Spending
