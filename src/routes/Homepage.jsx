import "../App.css";
import FeelingsCard from "../components/FeelingsCard.jsx";
import Header from "../components/Header.jsx";

function Homepage() {
  return (
    <div className="homepage-content">
      <Header name={"feelings."} />
      <div className="horizontal_line"></div>
      <div className="feelings-selection">
        <FeelingsCard
          image={"/images/iconsad.jpg"}
          name={"sad"}
          definition={"feeling or showing sorrow; unhappy."}
          link="moviespage/1"
        />

        <FeelingsCard
          image={"/images/iconangry.jpg"}
          name={"anger"}
          definition={
            "a strong feeling of annoyance, displeasure, or hostility."
          }
          link="moviespage/2"
        />
        <FeelingsCard
          image={"/images/iconanxious.jpg"}
          name={"anxious"}
          definition={
            "feeling or showing worry, nervousness, or unease about something with an uncertain outcome."
          }
          link="moviespage/3"
        />
        <FeelingsCard
          image={"/images/iconhappy.jpg"}
          name={"joy"}
          definition={"a feeling of great pleasure and happiness."}
          link="moviespage/4"
        />
        <FeelingsCard
          image={"/images/iconcalm.jpg"}
          name={"calm"}
          definition={"make (someone) tranquil and quiet; soothe."}
          link="moviespage/5"
        />
      </div>
    </div>
  );
}

export default Homepage;
