import "./Podcast.css";

const Podcast = ({ title, embed, desc }) => {
  return (
    <div className="podcast">
      <h3 className="podcast-title">{title}</h3>
      {desc && <p className="podcast-desc">{desc}</p>}
      <div className="video-wrapper">
        {embed}
      </div>
    </div>
  );
};

export default Podcast;
