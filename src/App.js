import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      {/* Props to move from Parent to Child
      App.js -> ProfileCard.js */}
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is created by Amazon"
                useless="child doesn't use this"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is made by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@AppleSiri"
                image={SiriImage}
                description="Apple made Siri."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
