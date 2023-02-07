import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { SignUserOut } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartdropDown, setCartdropDown } = useContext(CartContext);
  const signOutHandler = async () => {
    await SignUserOut();
  };
  const toggleCart = () => setCartdropDown(!cartdropDown);
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              LOGIN
            </Link>
          )}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <CartIcon onPress={toggleCart} />
        </div>
        {cartdropDown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
