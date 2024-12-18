import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.redirect} className="btn btn-primary">{this.props.btntxt}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
