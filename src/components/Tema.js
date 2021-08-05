import React from 'react'
import './Tema.css';

class Tema extends React.Component {

    render() {
        let style = {
            border: `2px solid ${this.props.color}`,
        };

        return (
            <div className="column is-flex is-6 Tema mt-3 mb-3 ml-5 mr-5 is-vcentered" style={style}>
                <div className="Tema-content is-hidden-mobile">
                    <p className="subtitle has-text-weight-bold has-text-white is-size-3">{this.props.title}</p>
                    <p className="text has-text-white is-size-5">{this.props.speakers}</p>
                </div>
                <div className="Tema-content is-hidden-tablet">
                    <p className="subtitle has-text-weight-bold has-text-white is-size-5">{this.props.title}</p>
                    <p className="text has-text-white is-size-8">{this.props.speakers}</p>
                </div>
            </div>
        )
    }
}

export default Tema;
