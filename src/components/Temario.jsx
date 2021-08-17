import React from 'react';
import Tema from './Tema';
import '../assets/css/Temario.css';

class Temario extends React.Component {
    render() {
        return (
            <section className="Temario pb-6">
                <div className="Temario-container">
                    <p className="mb-5 pt-5 is-size-3 has-text-weight-bold is-black is-hidden-mobile">Una mirada al consumidor argentino y a la industria de electrodomésticos durante la pandemia</p>
                    <p className="mb-5 pt-5 is-size-6 has-text-weight-bold is-black is-hidden-tablet">Una mirada al consumidor argentino y a la industria de electrodomésticos durante la pandemia</p>
                    <div className="columns is-centered is-vcentered">
                        <Tema 
                            color="#FF0018" 
                            title="Nuevas tendencias entre los consumidores. El rol de la tecnología" 
                            speakers="Ximena Diaz Alarcón - Youniversal"/>
                            

                        <Tema 
                            color="#008018"
                            title="Un hogar más conectado: El IOT y la Robótica al servicio del usuario" 
                            speakers="Joan Cwaik - Maytronics"/>
                    </div>

                    <div className="columns is-centered is-vcentered mt-3">
                        <Tema 
                            color="#FFA52C" 
                            title="El rol de los influencers durante la pandemia y el disfrute del hogar" 
                            speakers="Joan Cwaik - Sergio Teubal"/>

                        <Tema 
                            color="#0000F9"
                            title="Todos para uno, y una para todos" 
                            speakers="Rodolfo Andragnes - Apptivalo"/>
                    </div>

                    <div className="columns is-centered is-vcentered mt-3">
                        <Tema 
                            color="#FFFF41" 
                            title="Evolución del Mercado de Consumo de Hogar 21/22" 
                            speakers="Eduardo Echeverria - GFK"/>

                        <Tema 
                            color="#86007D"
                            title="Desafiós y estrategias del mercado de productos para el hogar 20/21/22" 
                            speakers="Pablo Feresini - Rotoplas , Agustín Roberi - Alladio José M. Alladio e Hijos S.A."/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Temario;
