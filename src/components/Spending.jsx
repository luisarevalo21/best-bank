const Spending = ({ category, spent, width }) => (
  <div
    className={`${category.toLowerCase()}-div`}
    style={{ width: `${width}%` }}
  >
    <span>{category}</span>
    <span>${spent}</span>
  </div>
)

export default Spending
