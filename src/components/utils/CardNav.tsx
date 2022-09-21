import { Link } from "react-router-dom";

export type CardProps = {
    midia: {
        source: string;
        name: string;
    }
};

export default function CardNav(props: CardProps) {
    const { midia: { source, name } } = props;

    return (
        <div className="aside-card-conteiner">
            <Link to="#">
                <img src={source} alt={name} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <img className="filter" alt=""/>
                <h4>{name}</h4>
            </Link>
        </div>
    );
}