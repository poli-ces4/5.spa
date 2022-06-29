import Section from "../components/Section";
import { series, tv } from "../data/Data";

const Home = () => {
  return (
    <>
      <Section {...tv} />
      <Section {...series} />
    </>
  );
};

export default Home;
