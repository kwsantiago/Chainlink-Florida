import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Chainlink</h2>
                <p>{this.props.data ? this.props.data.paragraph1 : 'loading...'}</p>
                <h3>Why Chainlink?</h3>
                <p>{this.props.data ? this.props.data.paragraph2 : 'loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
