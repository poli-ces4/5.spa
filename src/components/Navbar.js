import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiNetflix } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const handleMobileMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "f00946" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <SiNetflix />
              Netflix
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/tv" className="nav-links">
                TV
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/series" className="nav-links">
                Series
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/peliculas" className="nav-links">
                Peliculas
              </Link>
            </li>
            <li className="nav-item" onClick={handleMobileMenu}>
              <Link to="/infantil" className="nav-links">
                Infantil
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/signup">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/signup" onClick={handleMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
