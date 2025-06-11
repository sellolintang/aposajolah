import React from 'react';
import Header from '../components/Header/Header';
import "../css/Contact.css";

const ContactPage = () => (
  <div>
    <Header/>
    <section className="heading-section">
                <h1 className="heading-with-line">
                    <span>Contact Us</span>
                </h1>
            </section>

            <section className="heading-section-main">
                <div className="heading-container">
                    <div className="maps" id="maps-messege">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.279183499108!2d106.81157997499382!3d-6.612192593381864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c56792ebc9a7%3A0xb36d6bd3ac6add61!2sThe%20Glass%20House%20Resto!5e0!3m2!1sid!2sid!4v1749213508382!5m2!1sid!2sid"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="form-messege" id="maps-messege">
                        <form action="/submit-form" method="POST">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Masukkan Nama Anda"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Masukkan Email Anda"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tulis Pesan Anda"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="social-section">
                <div className="social-container">
                    <div className="social-icons">
                        <a
                            href="https://wa.me/+628111116923"
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            {/* <FaWhatsapp />  */}
                        </a>
                        <a
                            href="https://www.instagram.com/theglasshouseresto"
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            {/* <FaInstagram />  */}
                        </a>
                        <a
                            href="https://maps.app.goo.gl/Z6GF59kwZn7YX52Q7"
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            {/* <FaMapMarkerAlt /> */}
                        </a>
                        <a
                            href="https://www.facebook.com/theglasshouseresto/"
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            {/* <FaFacebookF /> */}
                        </a>
                    </div>
                </div>
            </section>
  </div>
);

export default ContactPage;
