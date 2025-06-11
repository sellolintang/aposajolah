import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../css/About.css';
import CEO from '../assets/images/CEO.jpeg';
import steak from '../assets/images/Steak.webp';
import cheese from '../assets/images/CheeseSauce.webp';
import cheesychicken from '../assets/images/CheesyChicken.jpg';
import cordonbleu from '../assets/images/CordonBleu.jpg';
import chickenkatsu from '../assets/images/ChickenKatsu.jpg';
import brownies from '../assets/images/Brownies.webp';
import burger from '../assets/images/burger.jpg';
import autumn from '../assets/images/Autumn.jpg';
import nasibakar from '../assets/images/NasiBakar.jpg';

const AboutPage = () => (
  <div>
    <Header/>
    <section className="heading-section">
                <h1 className="heading-with-line">
                    <span>Glass House</span>
                </h1>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="text-info">
                        <h2 className="typewriter-text">History of the Glass House</h2>
                        <p className="typewriter-paragraph">
                            The Glass House Resto Bogor bermula dari sebuah family resto yang kemudian bertransformasi mengikuti tren tempat makan kekinian di Bogor. Perubahan konsep ini dilakukan agar restoran tetap relevan dan mampu menarik lebih banyak pengunjung, sehingga proses rebranding menjadi titik awal perubahan besar dalam perjalanan restoran. Sebelumnya, restoran ini dikenal dengan nama Kanama Resto sebelum akhirnya berganti nama menjadi The Glass House dan mengusung konsep bangunan kaca yang estetik serta instagramable. Sejak saat itu, The Glass House berhasil menjadi salah satu destinasi kuliner populer di Bogor, terkenal dengan desain mewah ala hotel bintang dan beragam menu Asia serta Western yang terjangkau.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src="../../public/logo.jpg" alt="Foto History" />
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="card-photo">
                        <img src={CEO} alt="Foto CEO" />
                    </div>
                    <div className="text-info">
                        <h2 className="typewriter-text text-center">
                            Muhammad Rizal Anshori
                        </h2>
                        <p className="typewriter-paragraph">
                            Transformasi besar terjadi di bawah kepemimpinan Muhammad Rizal Anshori sebagai CEO. Ia mengambil keputusan untuk mengusung konsep bangunan kaca yang modern dan estetik, sekaligus memperbarui menu serta pelayanan. Kepemimpinannya membawa The Glass House semakin dikenal luas di kalangan pecinta kuliner.
                        </p>
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="text-info">
                        <h2 className="typewriter-text">History of the Glass House</h2>
                        <p className="typewriter-paragraph">
                            Kini, The Glass House Resto Bogor dikenal sebagai salah satu destinasi kuliner populer di Bogor, sering dipilih untuk berbagai acara dan menjadi ikon tempat makan dengan suasana khas di kota tersebut. Popularitasnya terus meningkat seiring dengan inovasi yang konsisten dari tim manajemen.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src="../../public/logo.jpg" alt="Foto History" />
                    </div>
                </div>
            </section>

            <section className="heading-section">
                <h1 className="heading-with-line">
                    <span>Menu</span>
                </h1>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="text-info">
                        <h2>Fettucine Carbonara with Chicken Katsu</h2>
                        <p>
                            Menu ini merupakan perpaduan unik antara pasta Italia dan sentuhan Jepang. Fettuccine dimasak dengan saus carbonara yang creamy dan gurih, lalu disajikan bersama potongan chicken katsu yang renyah di luar dan lembut di dalam. Kombinasi saus carbonara yang kaya rasa dengan ayam katsu yang juicy membuat menu ini jadi favorit, terutama bagi pecinta fusion food.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src={chickenkatsu} alt="Fettucine Carbonara with Chicken Katsu" />
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="card-photo">
                        <img src={burger} alt="foto menu" />
                    </div>
                    <div className="text-info">
                        <h2>Cheese Burger with Fries</h2>
                        <p>
                            Cheese Burger di Glass House disajikan dengan patty daging sapi tebal, keju leleh, sayuran segar, dan saus spesial di dalam roti bun yang lembut. Menu klasik ini semakin lengkap dengan kentang goreng renyah sebagai pendamping. Rasanya yang juicy dan cheesy menjadikan burger ini pilihan utama untuk pengunjung yang ingin menu western yang memuaskan.
                        </p>
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="text-info">
                        <h2>Autumn Beef Bowl</h2>
                        <p>
                            Autumn Beef Bowl adalah rice bowl khas Glass House yang berisi nasi hangat, irisan daging sapi tumis dengan saus spesial, sayuran segar, dan telur mata sapi di atasnya. Menu ini menawarkan cita rasa gurih dan manis yang seimbang, cocok untuk makan siang atau malam. Penyajiannya yang cantik dan porsi yang pas membuatnya selalu jadi incaran.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src={autumn} alt="foto menu" />
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container" id="with-photo">
                    <div className="card-photo">
                        <img src={nasibakar} alt="foto menu" />
                    </div>
                    <div className="text-info">
                        <h2>Nasi Bakar Krengsengan Daging</h2>
                        <p>
                            Menu ini mengusung cita rasa nusantara dengan nasi yang dibungkus daun pisang dan dibakar hingga aromanya harum. Di dalamnya terdapat isian krengsengan daging sapi berbumbu khas Jawa yang gurih dan sedikit manis. Disajikan bersama lalapan dan kerupuk, nasi bakar ini menjadi pilihan tepat bagi pengunjung yang ingin menikmati masakan tradisional dengan sentuhan modern.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
  </div>
);

export default AboutPage;
