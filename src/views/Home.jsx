import Layout from "./Layout";
import Hero from "../components/Hero";
import BannerTop from "../components/BannerTop";
import PeopleList from "../components/PeopleList";
import BannerBottom from "../components/BannerBottom";

const HomeView = () => {
  return (
    <Layout>
      <Hero />
      <BannerTop />
      <PeopleList />
      <BannerBottom />
    </Layout>
  )
}

export default HomeView;
