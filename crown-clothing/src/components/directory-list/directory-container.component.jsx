import directories from "../categories.json";
import "../directory-item.styles.scss";
import DirectoryItem from "../directory-item/directory-body.component";
function Directory() {
  return (
    <div className="directories-container">
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </div>
  );
}
export default Directory;
