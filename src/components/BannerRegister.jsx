import React from 'react'
import { Link } from "react-router-dom";

class BannerRegister extends React.Component {
    render() {
        const { color, text } = this.props;
        return (
            <section>
                <div className={`hero ${color}`}>
                    <div className="hero-body">
                        <p className="title has-text-weight-bold is-size-1 has-text-black is-hidden-mobile">{text}</p>
                        <p className="title has-text-weight-bold is-size-4 has-text-black is-hidden-tablet">{text}</p>
                        <a href="https://www.youtube.com/watch?v=fPImA-JDMMk" target="_blank" rel="noreferrer">
                            <button className="button is-black is-size-1 is-hidden-mobile">
                                <p className="has-text-white has-text-weight-bold">¡ ACCEDE AL EVENTO !</p>
                            </button>
                            <button className="button is-black is-size-4 is-hidden-tablet">
                                <p className="has-text-white has-text-weight-bold">¡ ACCEDE AL EVENTO !</p>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default BannerRegister;