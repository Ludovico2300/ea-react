export type HeroProps = {
    source: string;
    logo: string;
    game: string;
  };
  
  export default function Herop(props: HeroProps) {
    const { source, logo, game } = props;
  
    return (
        <div>
          <img src={source} alt="cover" />
          <img className={`cover ${game}`} src={logo} alt="" />     
        </div>
    );
  }
  