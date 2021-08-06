import React from 'react'
import '../assets/css/TopBottom.css';

class TopBottom extends React.Component {

    constructor() {
        super();
        this.state = {
            height: {height: "0px"},
            resizeListener: () => {
                let elHeight = document.getElementById('background-image').clientHeight;
                this.setState({height: {height: elHeight + "px"}});
            },
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.state.resizeListener);
        setTimeout(() => {this.state.resizeListener()}, 1000);

        // just in case
        setTimeout(() => {this.state.resizeListener()}, 2000);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.state.resizeListener);
    }

    render() {
        return (
            <section className="TopBottom" style={this.state.height}>
                <div className="Background-container">
                    <figure id="background-image" className="image is-fullwidth Background">
                        <img src={this.props.background} alt="Main background"/>
                    </figure>

                    <div className="TopBottom-content is-flex-mobile">
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-1 is-hidden-mobile"></div>
                            <div className="Image-banner column is-6 pl-6">
                                <div className="spacer mt-6 is-hidden-mobile"></div>
                                {this.props.content}
                            </div>
                            <div className="column"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopBottom;
