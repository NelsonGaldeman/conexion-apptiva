import React from 'react'

class Speaker extends React.Component {

    render() {
        const { name, position, avatar } = this.props;

        return (
            <div className="column is-3 pt-6 pl-6 pr-6">
                <img src={avatar} alt="Speaker" />
                <p className="subtitle has-text-weight-bold mt-3 mb-0 is-size-4">{name}</p>
                <p className="text is-size-5">{position}</p>
            </div>
        )
    }
}

export default Speaker;
