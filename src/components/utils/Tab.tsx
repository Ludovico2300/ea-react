export type TabProps = {
  source: string;
  tag: string;
  
  date: string;
  title: string;
  content: string;
};
export default function Tab(props: TabProps) {
  const { source, tag,  date, title, content } = props;

  return (

    <div className="card-content">
      <img
        className={`img-content`}
        src={source}
        alt=""
      />

      <div className="info-card-content-container">
        <div className="mark-date-content">
          <h3 className="mark">{tag}</h3>
          <div>{date}</div>
        </div>

        <div className="title-card-content">
          <h3>{title}</h3>
        </div>
        <div className="text-card-content">
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}
