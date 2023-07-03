import useAuthHelper from "./useAuthHelper";
import "./assets/style.css";

function Header(props) {
  var { isLoggedIn } = useAuthHelper();

  const showLogout = () => {
    var isUserLoggedIn = isLoggedIn();
    if (isUserLoggedIn) {
      return <button onClick={props.signout}>Logout</button>;
    }
  };

  return (
    <div className="HeadStyle">
      {showLogout()}
      <h1>KVAS BANK</h1>
      <h5>Hello, {props.userName}</h5>
    </div>
  );
}

export default Header;
