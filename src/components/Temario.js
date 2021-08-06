import React from 'react'
import Tema from './Tema'
import './Temario.css'

class Temario extends React.Component {
    render() {
        return (
            <section className="Temario pb-6">
                <div className="Temario-container">
                    <p className="mb-5 pt-5 is-size-3 has-text-weight-bold is-black is-hidden-mobile">Una oportunidad para descubrir las estrategias que permitirán a las marcas conectarse y escuchar activamente a sus clientes y evaluar la evolución del mercado argentino en pandemia y después de ella</p>
                    <p className="mb-5 pt-5 is-size-6 has-text-weight-bold is-black is-hidden-tablet">Una oportunidad para descubrir las estrategias que permitirán a las marcas conectarse y escuchar activamente a sus clientes y evaluar la evolución del mercado argentino en pandemia y después de ella</p>
                    <div className="columns is-centered is-vcentered">
                        <Tema 
                            color="#FF0018" 
                            title="El IOT y la Robótica al servicio del usuario" 
                            speakers="Joan Cwaik - Maytronics"/>

                        <Tema 
                            color="#008018"
                            title="Desafíos y estrategias del sector durante y post pandemia" 
                            speakers="Pablo Feresini - Seõrial , Agustín Roberi - Alladio"/>
                    </div>

                    <div className="columns is-centered is-vcentered mt-3">
                        <Tema 
                            color="#FFA52C" 
                            title="Nuevas Tendencias entre los consumidores" 
                            speakers="Ximena Diaz Alarcón - Youniversal"/>

                        <Tema 
                            color="#0000F9"
                            title="Evolución del Mercado de Consumo del Hogar" 
                            speakers="Eduardo Echeverria - GFK"/>
                    </div>

                    <div className="columns is-centered is-vcentered mt-3">
                        <Tema 
                            color="#FFFF41" 
                            title="Todos para uno y una para todos" 
                            speakers="Rodolfo Andragnes - Apptivalo"/>

                        <Tema 
                            color="#86007D"
                            title="El rol de los influencers durante la pandemia" 
                            speakers="Radagast - Joan Cwaik - Rodolfo Andragnes"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Temario;
