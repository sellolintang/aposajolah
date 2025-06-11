import React from 'react';
import Header from '../components/Header/Header';
import "../css/Gallery.css";

const GalleryPage = () => (
  <div>
    <Header/>
    <section className="heading-section">
                <h1 className="heading-with-line">
                    <span>Glass House</span>
                </h1>
            </section>

            <section className="gallery-section">
                <div className="container container-1" id="cont-1">
                    <div className="gallery-item-main">
                        <img src="./gallery-img/glassHouse.jpg" alt="Gallery Image 1" />
                    </div>

                    <div className="gallery-item-main">
                        <img src="./gallery-img/gallery depan.jpg" alt="Gallery Image 2" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-2" id="cont-2">
                    <div className="gallery-item">
                        <img src="./gallery-img/gallery1.jpg" alt="Gallery Image 3" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery_n.jpg" alt="Gallery Image 4" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery13.jpg" alt="Gallery Image 5" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-3" id="cont-3">
                    <div className="gallery-item">
                        <img src="./gallery-img/gallery8.jpg" alt="Gallery Image 6" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery6.jpg" alt="Gallery Image 7" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-4" id="cont-4">
                    <div className="gallery-item">
                        <img src="./gallery-img/gallery5.jpg" alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery7.jpg" alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery9.jpg" alt="Gallery Image 8" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-4" id="cont-4">
                    <div className="gallery-item">
                        <img src="./gallery-img/gallery11.jpg" alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery10.jpg" alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src="./gallery-img/gallery12.jpg" alt="Gallery Image 8" />
                    </div>
                </div>
            </section>
  </div>
);

export default GalleryPage;
