export type CardProps = {
  source: string;
  logo: string;
  game: string;
};

export default function Card(props: CardProps) {
  const { source, logo, game } = props;

  return (
      <div className="card">
        <img src={source} alt="" />
        <img className="filter" alt=""/>
        <img className={`cover ${game}`} src={logo} alt="" />
        <h4>Sito Ufficiale</h4>
      </div>
  );
}
