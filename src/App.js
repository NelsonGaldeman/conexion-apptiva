import './App.css';
import 'bulma/css/bulma.min.css';
import './components/Colors.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import SpeakersList from './components/SpeakersList';
import Temario from './components/Temario';
import BannerRegister from './components/BannerRegister';
import TopBottom from './components/TopBottom';

import headerBackground from './images/background/top.jpg'
import footerBackground from './images/background/bottom.jpg'
import agustin from './images/speakers/agustin.png';
import eduardo from './images/speakers/eduardo.png';
import joan from './images/speakers/joan.png';
import julian from './images/speakers/julian.png';
import pablo from './images/speakers/pablo.png';
import radagast from './images/speakers/radagast.png';
import rodolfo from './images/speakers/rodolfo.png';
import ximena from './images/speakers/ximena.png';

const speakers = [
  {
    name: "Agustín Roberi",
    position: "Managing Director de ALADIO",
    avatar: agustin,
  }, 
  {
    name: "Pablo Feresini",
    position: "CEO Rotoplas y Com. Dir. de CAFAGAS",
    avatar: pablo,
  },
  {
    name: "Ximena Díaz",
    position: "Consultora en Consumer Trends y Founder YOUNIVERSAL",
    avatar: ximena,
  },
  {
    name: "Eduardo Echeverría",
    position: "Sr. Market Insights Project Manager GFK",
    avatar: eduardo,
  }, 
  {
    name: "Joan Cwaik",
    position: "Tecnólogo, Inlfuencer, Escritor MKT LATAM Maytronics",
    avatar: joan,
  }, 
  {
    name: "Radagast",
    position: "Influencer, Mago, Comediante y Carpintero",
    avatar: radagast,
  },
  {
    name: "Julián Villanueva",
    position: "Ex CMO Whirlpool MKT y RRII Apptivalo",
    avatar: julian,
  }, 
  {
    name: "Rodolfo Andragnes",
    position: "Tecnólogo, CEO Apptivalo",
    avatar: rodolfo,
  }
];

function App() {
  return (
    <div className="App main">
      <TopBottom background={headerBackground} content={<Header />} />
      <Banner color="is-black" desktop="is-size-3" mobile="is-size-5" text="Un evento que explora el vínculo de las personas con los productos de su hogar"/>
      <Banner color="is-primary" classes="is-size-1 has-text-weight-bold" text="DISERTANTES"/>
      <SpeakersList speakers={speakers}/>
      <Banner color="is-black" classes="is-size-1 has-text-weight-bold" text="TEMARIO"/>
      <Temario />
      <BannerRegister color="is-primary" text="EVENTO ONLINE Y GRATUITO"/>
      <TopBottom background={footerBackground} content={<Footer />} />
    </div>
  );
}

export default App;
