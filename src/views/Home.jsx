import Layout from "./Layout";
import Hero from "../components/Hero";
import BannerTop from "../components/BannerTop";
import PreviousRulings from "../components/PreviousRulings";
import BannerBottom from "../components/BannerBottom";

const HomeView = () => {
  return (
    <Layout>
      <Hero />
      <div className="max-centered">
        <BannerTop />
        <PreviousRulings />
        <BannerBottom />
      </div>
    </Layout>
  )
}

export default HomeView;
