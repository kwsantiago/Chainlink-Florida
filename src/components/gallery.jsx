import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Chainlink Resources</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://chain.link/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Official Chainlink Website</h4>
                      </div>
                      <img
                        src="img/gallery/01.png"
                        className="img-responsive"
                        alt="Chainlink Official Website"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://chainlinkecosystem.com/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Ecosystem</h4>
                      </div>
                      <img
                        src="img/gallery/02.png"
                        className="img-responsive"
                        alt="Chainlink Ecosystem"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://blog.chain.link/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Blog</h4>
                      </div>
                      <img
                        src="img/gallery/03.png"
                        className="img-responsive"
                        alt="Chainlink Blog"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://events.chain.link/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Offical Chainlink Events</h4>
                      </div>
                      <img
                        src="img/gallery/04.png"
                        className="img-responsive"
                        alt="Chainlink Events"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://www.chainlinklabs.com/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Labs</h4>
                      </div>
                      <img
                        src="img/gallery/05.png"
                        className="img-responsive"
                        alt="Chainlink Labs"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://chainlinkecosystem.com/videos/"
                      target="_blank"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Videos</h4>
                      </div>
                      <img
                        src="img/gallery/06.png"
                        className="img-responsive"
                        alt="Chainlink Videos"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://chainlinkecosystem.com/factsheet/"
                      target="_blank"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Factsheets</h4>
                      </div>
                      <img
                        src="img/gallery/07.png"
                        className="img-responsive"
                        alt="Chainlink Fact Sheet"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://docs.chain.link/docs"
                      target="_blank"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Official Chainlink Docs</h4>
                      </div>
                      <img
                        src="img/gallery/08.png"
                        className="img-responsive"
                        alt="Chainlink docs"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://www.reputation.link/"
                      target="_blank"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Chainlink Reputation</h4>
                      </div>
                      <img
                        src="img/gallery/09.png"
                        className="img-responsive"
                        alt="Chainlink Reputation"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
