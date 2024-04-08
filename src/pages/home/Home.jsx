import Articles from "../../components/articles/Articles";
import Banner from "../../components/banner/Banner";
import Screens from "../../components/screens/Screens";
import Templates from "../../components/templates/Templates";

const Home = () => {
  return (
    <div>
      <Banner />
      <Templates />
      <Articles />
      <Screens />
    </div>
  );
};

export default Home;
