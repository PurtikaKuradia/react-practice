const Header = ({ title = "Header", as = "h1" }) => {
  const Comp = as;
  return <Comp as={as}>{title}</Comp>;
};
export default Header;
