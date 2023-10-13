import { useNavigate } from "react-router-dom";

export type TabProps = {
  id?: number;
  source: string;
  tag: string;
  date: string;
  title: string;
  content: string;
};
export default function Tab(props: TabProps) {
  const { source, tag, date, title, content, id } = props;
  const navigate = useNavigate();

  return (
    <div
      className="card-content"
      onClick={() =>
        navigate("/create", {
          state: { id, title, content, tag, source, date },
        })
      }
    >
      <img className={`img-content`} src={source} alt="" />

      <div className="info-card-content-container">
        <div className="mark-date-content">
          <h3 className="mark">{tag}</h3>
          <div>{date}</div>
        </div>

        <div className="title-card-content">
          <h3>{title}</h3>
        </div>
        <div className="text-card-content">
          <h4>{content}</h4>
        </div>
      </div>
    </div>
  );
}
