import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Podcast from "./Podcast.jsx";
import "./App.css";

const podcasts_s3 =  [
            {
                desc: "",
                title: "Prof. Sudhir Kumar Jain | TEDxConversations | S3 Episode 1",
                embed: (
                        <iframe
                          src="https://www.youtube.com/embed/dVA6v9P-K5M"
                          title="YouTube video player"
                          frameBorder="0"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ),
            },
            {
                desc: "",
                title: "Dr. Aesha Bhansali | TEDxConversations | S3 Episode 2",
                embed: (
                        <iframe
                          className="absolute w-full h-full top-0 left-0 rounded-2xl"
                          src="https://www.youtube.com/embed/gatq5CeRp8k?si=Rj7S3Y125Zxe2Sct"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ),
            },
            {
                desc: "",
                title: "Prof. Madhura Swaminathan | TEDxConversations | S3 Episode 3",
                embed: (
                        <iframe
                          className="absolute w-full h-full top-0 left-0 rounded-2xl"
                          src="https://www.youtube.com/embed/4xvwgj5mnpg?si=yzOfB4M2Acy64Uk2"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ),
            }
        ];

const podcasts_s2 = [
  {
    desc: "Professor Manish Kumar shares his thoughts on navigating change, staying motivated, and making an impact in today's world. Whether you're a student, professional, or someone looking for inspiration, this episode has something for everyone.",
    title: "Prof. Manish Kumar | TEDxConversations | S2 Episode 3",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/tbIspyzhHWo?si=LWnH4IhQ7O71jh4e"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },

  {
    desc: "Nipun Batra is an Assistant Professor in the Department of Computer Science at IIT Gandhinagar, bringing a unique perspective to machine learning and computational sustainability. Having completed his postdoc at the University of Virginia and his PhD from IIIT Delhi as a TCS PhD fellow, Prof. Batra leads the Sustainability Lab, focusing on transformative research in smart buildings, air quality, and wearable healthcare. His work has received significant accolades, including the Young Alumni Award from IIIT Delhi, Best PhD Presentation at ACM Sensys, Best Demo at ACM Buildsys, and a Best Video nomination at ACM KDD.",
    title: "Prof. Nipun Batra | TEDxConversations | S2 Episode 2",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/-pyj8cTdUK4?si=6tIbj7Jvnwzpl0_F"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },

  {
    desc: "Prof. Joycee Mekie is an Associate Professor in the Department of Electrical Engineering at IIT Gandhinagar, with over 15 years of teaching experience, passionately shaping the next generation of engineers. At the helm of the Cutting Edge Nano DC lab, she explores the fascinating realms of semiconductors and VLSI design, driving innovation and research. Her dedication to education and research has earned her prestigious accolades, including the Young Faculty Research Award and the Award for Excellence in Teaching.",
    title: "Prof. Joycee Mekie | TEDxConversations | S2 Episode 1",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/zJ2tHXKgZ1k?si=oeG0EueINyAHGwL6"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

const podcasts_s1 = [
  {
    desc: "Meet Nivid Desai, Program Executive at IIT Gandhinagar and a key member of the Board of Studies in the Department of English at St. Xavier's College, Ahmedabad. As a collaborator with The Learning Designers Community, Nivid is a multifaceted professional dedicated to the realms of writing, education, and research. He excels in storytelling, communication, and learning design, working across print and digital media to create impactful educational content. Join us as we delve into his journey and explore how he blends creativity and education, making significant contributions to the academic and professional landscape",
    title: "Nivid Desai | TEDxConversations | S1 Episode 4",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/bVWJp9Lvy5Q?si=SAkbF1etcK7iu_gV"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },

  {
    title: "Mr. Akash Parekh | TEDxConversations | S1 Episode 3",
    desc: "Meet Akash Parekh, Founder and CEO of Argyle Enigma Tech Labs, and a former Wall Street expert from Morgan Stanley. Today, he's on a mission to revolutionize financial education, making complex financial concepts accessible to all. Join us as we explore his journey from high finance to founding a groundbreaking fintech startup",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/UEJyDJ3yB2Y?si=oGfxG80et38SIDPu"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },

  {
    title: "Prof. Sivapriya Kirubakaran | TEDxConversations | S1 Episode 2",
    desc: "Professor Sivapriya Kirubakaran is Kankuben Bakshirambhai Gelot Chair Associate Professor in the Department of Chemistry and Bioengineering. She is not only an acclaimed researcher with a recent US patent in cancer research but also a recipient of the alumni excellence award from The Ethiraj College for Women, from where she completed her bachelors.",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/MmvSeb5uKbc?si=LYd4qzr9ZhF5-t0V"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },

  {
    title: "Prof. Harish PM | TEDxConversations | S1 Episode 1",
    desc: "Prof. Harish PM is an Associate Professor from the discipline of Mechanical Engineering at IIT Gandhinagar. He has been teaching here for more than a decade now and is currently the Dean of General Administration. He also runs a lab named ‘SysIDEA’ working on Robotics. And beyond all of that, he is a teacher known for his fun teaching style.",
    embed: (
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-2xl"
        src="https://www.youtube.com/embed/F6i3MrqKzN4?si=1ic-trbnOYNQbOde"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
];

const ConversationsRoute = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="page-container">
          <div className="page-header">
            <h1>TEDxConversations</h1>
            <p>Insightful Podcasts, One Idea at a Time.</p>
          </div>
        <div>
          <div className="season">
            <h2>Season 3</h2>
            {podcasts_s3.map((podcast, index) => (
              <Podcast key={index} title={podcast.title} embed={podcast.embed} desc={podcast.desc} />
            ))}
          </div>
        </div>
        <div>
          <div className="season">
            <h2>Season 2</h2>
            {podcasts_s2.map((podcast, index) => (
              <Podcast key={index} title={podcast.title} embed={podcast.embed} desc={podcast.desc} />
            ))}
          </div>
        </div>
        <div>
          <div className="season">
            <h2>Season 1</h2>
            {podcasts_s1.map((podcast, index) => (
              <Podcast key={index} title={podcast.title} embed={podcast.embed} desc={podcast.desc} />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ConversationsRoute;