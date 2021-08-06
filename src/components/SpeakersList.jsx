import React from 'react'
import Speaker from './Speaker'

class SpeakersList extends React.Component {

    render() {
        const { speakers } = this.props;

        let rows = [];
        for (let i = 0; i < Math.ceil(speakers.length / 4); i++) {
            let speakersGroup = [];
            for (let j = i * 4; j < 4 * (i + 1); j++) {
                if (!speakers.hasOwnProperty(j)) {
                    continue;
                }

                speakersGroup.push(
                    <Speaker 
                        key={j} 
                        name={speakers[j].name} 
                        position={speakers[j].position} 
                        avatar={speakers[j].avatar}
                        />
                )
            }

            rows.push(
                <div key={i} className="columns is-centered is-vcentered">
                    {speakersGroup}
                </div>
            )
        }

        return (
            <div className="mt-6 mb-6">
                {rows}
            </div>
        )
    }
}

export default SpeakersList;