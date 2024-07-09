const Panel = ({ title, isActive, children, onShow }) => {
  return (
    <>
      <h3> {title}</h3>
      {isActive ? <p> {children}</p> : <button onClick={onShow}>Show</button>}
    </>
  );
};
export default Panel;
