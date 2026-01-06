import Podcast from "./Podcast.jsx";
import "./App.css";

/* ===================== DATA ===================== */

const podcasts_s3 = [
  {
    title: "Prof. Sudhir Kumar Jain | TEDxConversations | S3 Episode 1",
    desc: "",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/dVA6v9P-K5M"
        title="Prof. Sudhir Kumar Jain"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Dr. Aesha Bhansali | TEDxConversations | S3 Episode 2",
    desc: "",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/gatq5CeRp8k"
        title="Dr. Aesha Bhansali"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Prof. Madhura Swaminathan | TEDxConversations | S3 Episode 3",
    desc: "",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/4xvwgj5mnpg"
        title="Prof. Madhura Swaminathan"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
];

const podcasts_s2 = [
  {
    title: "Prof. Manish Kumar | TEDxConversations | S2 Episode 3",
    desc:
      "Professor Manish Kumar shares his thoughts on navigating change, staying motivated, and making an impact in today's world.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/tbIspyzhHWo"
        title="Prof. Manish Kumar"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Prof. Nipun Batra | TEDxConversations | S2 Episode 2",
    desc:
      "Prof. Batra leads the Sustainability Lab at IIT Gandhinagar, working on smart buildings, air quality, and wearable healthcare.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/-pyj8cTdUK4"
        title="Prof. Nipun Batra"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Prof. Joycee Mekie | TEDxConversations | S2 Episode 1",
    desc:
      "Associate Professor at IIT Gandhinagar with over 15 years of teaching and research experience in VLSI and semiconductors.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/zJ2tHXKgZ1k"
        title="Prof. Joycee Mekie"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
];

const podcasts_s1 = [
  {
    title: "Nivid Desai | TEDxConversations | S1 Episode 4",
    desc:
      "A conversation on storytelling, education, and learning design across print and digital media.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/bVWJp9Lvy5Q"
        title="Nivid Desai"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Mr. Akash Parekh | TEDxConversations | S1 Episode 3",
    desc:
      "Founder & CEO of Argyle Enigma Tech Labs, sharing his journey from Wall Street to fintech innovation.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/UEJyDJ3yB2Y"
        title="Akash Parekh"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Prof. Sivapriya Kirubakaran | TEDxConversations | S1 Episode 2",
    desc:
      "Associate Professor of Chemistry & Bioengineering, recipient of multiple academic awards.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/MmvSeb5uKbc"
        title="Prof. Sivapriya Kirubakaran"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
  {
    title: "Prof. Harish PM | TEDxConversations | S1 Episode 1",
    desc:
      "Associate Professor of Mechanical Engineering and Dean of General Administration at IIT Gandhinagar.",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/F6i3MrqKzN4"
        title="Prof. Harish PM"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
];

/* ===================== COMPONENT ===================== */

const App = () => {
  return (
    <div className="page">
      <div className="star-background">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      <div className="container">
        <header className="header">
          <h1 data-text="TEDxConversations">TEDxConversations</h1>
          <p>Insightful Podcasts, One Idea at a Time.</p>
        </header>

        {/* Season 3 */}
        <section className="season s3">
          <div className="season-overlay">
            <h2>Season 3</h2>
            
            {/* WRAPPER ADDED HERE */}
            <div className="podcast-row">
              {podcasts_s3.map((p, i) => (
                <Podcast key={i} {...p} />
              ))}
            </div>
            
          </div>
        </section>

        {/* Season 2 */}
        <section className="season s2">
          <div className="season-overlay">
            <h2>Season 2</h2>
            
            {/* WRAPPER ADDED HERE */}
            <div className="podcast-row">
              {podcasts_s2.map((p, i) => (
                <Podcast key={i} {...p} />
              ))}
            </div>

          </div>
        </section>

        {/* Season 1 */}
        <section className="season s1">
          <div className="season-overlay">
            <h2>Season 1</h2>
            
            {/* WRAPPER ADDED HERE */}
            <div className="podcast-row">
              {podcasts_s1.map((p, i) => (
                <Podcast key={i} {...p} />
              ))}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default App;