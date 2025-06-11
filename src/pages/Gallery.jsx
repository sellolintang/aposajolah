import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import "../css/Gallery.css";

import glasshouse from '../assets/images/glassHouse.jpg';
import gallerydepan from '../assets/images/gallerydepan.jpg';
import gallery1 from '../assets/images/gallery1.jpg';
import galleryn from '../assets/images/gallery_n.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery8 from '../assets/images/gallery8.jpg';
import gallery6 from '../assets/images/gallery6.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery7 from '../assets/images/gallery7.jpg';
import gallery9 from '../assets/images/gallery9.jpg';
import gallery11 from '../assets/images/gallery11.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
import gallery12 from '../assets/images/gallery12.jpg';

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
                      <img src={glasshouse} alt="Gallery Image 1" />
                    </div>

                    <div className="gallery-item-main">
                        <img src={gallerydepan} alt="Gallery Image 2" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-2" id="cont-2">
                    <div className="gallery-item">
                        <img src={gallery1} alt="Gallery Image 3" />
                    </div>

                    <div className="gallery-item">
                        <img src={galleryn} alt="Gallery Image 4" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery13} alt="Gallery Image 5" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-3" id="cont-3">
                    <div className="gallery-item">
                        <img src={gallery8} alt="Gallery Image 6" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery6} alt="Gallery Image 7" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-4" id="cont-4">
                    <div className="gallery-item">
                        <img src={gallery5} alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery7} alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery9} alt="Gallery Image 8" />
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="container container-4" id="cont-4">
                    <div className="gallery-item">
                        <img src={gallery11} alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery10} alt="Gallery Image 8" />
                    </div>

                    <div className="gallery-item">
                        <img src={gallery12} alt="Gallery Image 8" />
                    </div>
                </div>
            </section>
            <Footer />
  </div>
);

export default GalleryPage;
