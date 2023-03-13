import ErroIcon from "../../assets/404-error.png";
const NouserError = () => {
  return (
    <div className="user-not-found-error-message">
      <h2>Sorry, User Currently Offline </h2>
      <img src={ErroIcon} alt="404-Error" />
    </div>
  );
};

export default NouserError;
