import './App.css';
import logo from './assets/images/logo.jpg';
import steak from './assets/images/Steak.webp';
import cheese from './assets/images/CheeseSauce.webp';
import cheesychicken from './assets/images/CheesyChicken.jpg';
import cordonbleu from './assets/images/CordonBleu.jpg';
import chickenkatsu from './assets/images/ChickenKatsu.jpg';
import brownies from './assets/images/Brownies.webp';
import Header from './components/Header/Header';


const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Glass House</h1>
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  return (
    <section className="menu">
      <div className="category">
        <h2 className="ctg"><div>Breakfast</div></h2>
        <h2 className="ctg"><div>Lunch</div></h2>
        <h2 className="ctg"><div>Dessert</div></h2>
      </div>

      <div className="container">
        <div className="menu1">
          <div className="menu-item">
            <img src={steak} alt="Menu Item 1" />
            <div className="desc">
              <h3>Sirloin Meltique Steak</h3>
            </div>
          </div>

          <div className="menu-item">
            <img src={brownies} alt="Menu Item 1" />
            <div className="desc">
              <h3>Brownies</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container" id="about-section">
        <div className="about-box large-box">
          <div className="small-item">
            <p>
              The Glass House Resto Bogor menyediakan makanan yang lezat dan
              terjangkau, dengan menu yang bervariasi...
            </p>
          </div>

          <div className="small-item">
            <p>
              Restoran ini terbagi ke dalam beberapa area dengan nuansa
              berbeda: ada Main Hall yang mewah...
            </p>
          </div>

          <div className="small-item">
            <p>
              Restoran ini terbagi ke dalam beberapa area dengan nuansa
              berbeda: ada Main Hall yang mewah...
            </p>
          </div>
        </div>
        <div className="about-box small-box">
          <div className="small-item">
            <h2>Menu Kami</h2>
            <ul className="dynamic-text">
              <li>Sirloin Meltique Steak</li>
              <li>Chicken Katsu Cheese Sauce</li>
              <li>The Glass Houses Brownies</li>
              <li>Cheesy Chicken Fried Rice</li>
              <li>Autumn Beef Bowl</li>
              <li>Chicken Chili Wings</li>
              <li>Nasi Ayam Cabai Hijau</li>
              <li>Dori Sambal Bongkot</li>
              <li>Crusted John Dory Fish</li>
              <li>Rustic Egg Benedict</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ image, title, description }) => {
  return (
    <div className="menu-row">
      <img src={image} alt="Foto menu" className="menu-photo" />
      <div className="menu-text">{description}</div>
    </div>
  );
};

const MenuContent = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">
        <span className="line"></span>
        Top 3 Menu
        <span className="line"></span>
      </h2>

      <MenuItem
        image={cheesychicken}
        title="Cheesy Chicken Fried Rice"
        description="Cheesy Chicken Fried Rice"
      />

      <div className="divider"></div>

      <MenuItem
        image={cordonbleu}
        title="Chicken Cordon Bleu"
        description="Chicken Cordon Bleu"
      />

            <div className="divider"></div>

      <MenuItem
        image={chickenkatsu}
        title="Fettucine Carbonara with Chicken Katsu.jpg"
        description="Fettucine Carbonara with Chicken Katsu"
      />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Glass House. By Naqib & Sello.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <MenuContent />
      <Footer />
    </div>
  );
};

export default App;