import React from 'react'

class Banner extends React.Component {
    render() {
        const { color, text, classes, mobile, desktop } = this.props;
        return (
            <section>
                <div className={`hero ${color}`}>
                    <div className="hero-body">
                        <p className={`is-hidden-tablet title ${classes} ${mobile}`}>{text}</p>
                        <p className={`is-hidden-mobile title ${classes} ${desktop}`}>{text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;