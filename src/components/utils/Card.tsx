export type CardProps = {
  img: string;
  logo: string;
  game: string;
};

export default function Card(props: CardProps) {
  const { img, logo, game = "game" } = props;

  return (
      <div className="card">
        <img src={img} alt="ciao" />
        <img className="filter" alt="ciao" />
        <img className={`cover ${game}`} src={`${logo}`} alt="ciao" />
        <h4>Sito Ufficiale</h4>
      </div>
  );
}
