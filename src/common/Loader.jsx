import "./loader.css";
const Loader = ({ loading, children }) => {
  return <>{loading ? <div className="loader"></div> : children}</>;
};
export default Loader;
