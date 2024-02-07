import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>


      {/* <img src={AlexaImage} />
      <img src={SiriImage} /> */}

      {/* <img src='https://thispersondoesnotexist.com' /> */}

      {/* Props to move from Parent to Child
      App.js -> ProfileCard.js */}
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} useless="child doesn't use this"/>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
      <ProfileCard title="Siri" handle="@AppleSiri" image={SiriImage}/>
    </div>
  );
}

export default App;