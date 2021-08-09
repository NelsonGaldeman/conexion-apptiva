import React from 'react'

class Banner extends React.Component {
    render() {
        const { color, text, classes, mobile, desktop } = this.props;
        return (
            <section>
                <div className={`hero is-hidden-mobile ${color}`}>
                    <div className="hero-body">
                        <p className={`mb-0 title ${classes} ${desktop}`}>{text}</p>
                    </div>
                </div>
                <div className={`hero is-hidden-tablet is-small ${color}`}>
                    <div className="hero-body">
                        <p className={`mb-0 title ${classes} ${mobile}`}>{text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;