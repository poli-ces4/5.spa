import { Link } from "react-router-dom";
import Button from "./Button";
import "./Section.css";

const Section = ({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  lighBackground,
  lighHeadText,
  lighDescription,
}) => {
  return (
    <>
      <div
        className={
          lighBackground ? "home__hero-section" : "home__hero-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lighHeadText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lighDescription
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
                <div className="col">
                  <div className="home__hero-img-wrapper">
                    <img className="home__hero-img" alt={alt} src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
