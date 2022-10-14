import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
  return isTablet ? children : null;
};
const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};

const SlideQuery = () => (
  <div className="herop-img">
    <Desktop>
      <img
        src="https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-vinicus-1920x1033-b34edb1f8674.jpg"
        alt=""
        className="fifa-hero"
      />
      <img
        src="https://xboxplay.games/uploadStream/29117.jpg"
        alt=""
        className="battlefield-hero"
      />
      <img
        src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_ApexLegends_S13_image1600w.jpg"
        alt=""
        className="apex-slide-hero"
      />
      <img
        src="https://www.nerdpool.it/wp-content/uploads/2022/05/f1-22-696x392.jpeg"
        alt=""
        className="f1-hero"
      />
      <img
        src="https://sm.ign.com/t/ign_it/screenshot/default/cav_nx9f.1280.jpg"
        alt=""
        className="thesims-hero"
      />
    </Desktop>
    <Tablet>
      <img
        src="https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-vinicus-1920x1033-b34edb1f8674.jpg"
        alt=""
        className="fifa-hero"
      />
      <img
        src="https://xboxplay.games/uploadStream/29117.jpg"
        alt=""
        className="battlefield-hero"
      />
      <img
        src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_ApexLegends_S13_image1600w.jpg"
        alt=""
        className="apex-slide-hero"
      />
      <img
        src="https://www.vr-italia.org/wp-content/uploads/2022/06/f1-2022-copertina.jpg"
        alt=""
        className="f1-hero"
      />
      <img
        src="https://sm.ign.com/t/ign_it/screenshot/default/cav_nx9f.1280.jpg"
        alt=""
        className="thesims-hero"
      />
    </Tablet>
    <Mobile>
      <img
        src="https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075"
        alt=""
        className="fifa-hero"
      />
      <img
        src="./assets/cards/battlefield.jpg"
        alt=""
        className="battlefield-hero"
      />

      <img
        src="https://images.everyeye.it/img-cover/apex-legends-v17-41457.jpg"
        alt=""
        className="apex-slide-hero"
      />

      <img
        src="https://www.thegamesmachine.it/wp-content/uploads/2022/06/F1-22-hub.jpg"
        alt=""
        className="f1-hero"
      />

      <img src="./assets/cards/the-sims.jpg" alt="" className="thesims-hero" />
    </Mobile>
  </div>
);
export default SlideQuery;
