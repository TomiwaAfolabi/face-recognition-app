import { useNavigate } from "react-router-dom";

function DirectoryItem({ directory }) {
  const { title, imageUrl, routeName } = directory;
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(routeName);
  };
  return (
    <div className="directory-item-container" onClick={navigationHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <p>{title}</p>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
