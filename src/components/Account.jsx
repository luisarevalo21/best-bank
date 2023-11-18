const Account = ({ title, balance, isSelected, onClick }) => (
  <div className={`account-div ${isSelected ? "selected" : ""}`} onClick={onClick}>
    <span>{title}</span>
    <span>$ {balance}</span>
  </div>
);
export default Account;
