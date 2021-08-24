import './assets/css/App.css';
import 'bulma/css/bulma.min.css';
import './assets/css/Colors.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import SpeakersList from './components/SpeakersList';
import Temario from './components/Temario';
import BannerRegister from './components/BannerRegister';
import TopBottom from './components/TopBottom';
import Register from './components/Register';
import Analytics from './components/Analytics';

import headerBackground from './assets/images/background/top.jpg'
import footerBackground from './assets/images/background/bottom.jpg'
import agustin from './assets/images/speakers/agustin.png';
import eduardo from './assets/images/speakers/eduardo.png';
import joan from './assets/images/speakers/joan.png';
import julian from './assets/images/speakers/julian.png';
import pablo from './assets/images/speakers/pablo.png';
import radagast from './assets/images/speakers/radagast.png';
import rodolfo from './assets/images/speakers/rodolfo.png';
import ximena from './assets/images/speakers/ximena.png';
import sergio from './assets/images/speakers/sergio.jpg';
import cecicarena from './assets/images/speakers/cecicarena.jpg';
import itbabyeat from './assets/images/speakers/itbabyeat.jpg';
import lacasaestaenordenok from './assets/images/speakers/lacasaestaenordenok.png';

const speakers = [
  /*{
    name: "Radagast",
    position: "Influencer, Mago, Comediante y Carpintero",
    avatar: radagast,
  },*/
  {
    name: "Joan Cwaik",
    position: "Tecnólogo, Influencer, Escritor MKT LATAM Maytronics",
    avatar: joan,
  }, 
  {
    name: "Ximena Díaz",
    position: "Consultora en Consumer Trends y Founder YOUNIVERSAL",
    avatar: ximena,
  },
  {
    name: "Agustín Roberi",
    position: "Managing Director de ALLADIO - José M. Alladio e Hijos S.A.",
    avatar: agustin,
  }, 
  {
    name: "Pablo Feresini",
    position: "CEO Rotoplas<br />Dir. de CAFAGAS",
    avatar: pablo,
  },
  {
    name: "Eduardo Echeverría",
    position: "Sr. Market Insights Project Manager GFK",
    avatar: eduardo,
  }, 
  {
    name: "Julián Villanueva",
    position: "CMO & RRII Apptivalo<br />Ex CMO Whirlpool",
    avatar: julian,
  }, 
  {
    name: "Rodolfo Andragnes",
    position: "Tecnólogo, CEO Apptivalo",
    avatar: rodolfo,
  }, 
  {
    name: "Sergio Teubal",
    position: "CEO Orishinal<br />Director de cine",
    avatar: sergio,
  }, 
  {
    name: "@Cecicarena",
    position: "COMUNICADORA<br />Llama Violeta + Coaching",
    avatar: cecicarena,
  }, 
  {
    name: "Ximena Bruno",
    position: "Owner de @ItBabyEat<br />Recetas sanas para bebes y familia",
    avatar: itbabyeat,
  }, 
  {
    name: "Candelaria Negri",
    position: "Owner de @lacasaestaenordenok<br />Consultora certificada Marie Kondo",
    avatar: lacasaestaenordenok,
  }
];

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
          <div className="App main">
            <TopBottom background={headerBackground} content={<Header />} />
            <Banner color="is-black" desktop="is-size-3" mobile="is-size-5" text="Un evento que explora el vínculo de las personas con los productos de su hogar"/>
            <Banner color="is-primary" classes="has-text-weight-bold" desktop="is-size-1" mobile="is-size-3" text="ORADORES"/>
            <SpeakersList speakers={speakers}/>
            <Banner color="is-black" classes="is-size-1 has-text-weight-bold" text="TEMARIO"/>
            <Temario />
            <BannerRegister color="is-primary" text="EVENTO ONLINE Y GRATUITO"/>
            <TopBottom background={footerBackground} content={<Footer />} />
            <Analytics />
          </div>
          </Route>
          <Route path="/register">
            <Register />
            <Analytics />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
