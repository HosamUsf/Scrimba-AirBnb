import logo from "../assets/airbnb-logo.png";
export default function NavBar() {
  return (
    <nav className="navbar">
      <img className="nav--logo" src={logo} alt="logo img" />
    </nav>
  );
}
