const Spending = ({ category, spent, width, renderType, date }) => {
  if (renderType === "home") {
    return (
      <div className={`${category.toLowerCase()}-div`} style={{ width: `${width}%` }}>
        <span>{category}</span>
        <span>${spent}</span>
      </div>
    );
  } else if (renderType === "payments") {
    return (
      <div className="payment-item">
        <span>{category}</span>
        <span className="amount">${spent}</span>
      </div>
    );
  }
};

export default Spending;
