import React from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('G-QB85RMZNMJ');

class Analytics extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render () {
        return (
            <div></div>
        );
    }
}

export default Analytics;
