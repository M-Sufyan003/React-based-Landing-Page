import AntennaIMG from "../../assets/images/antenna.png";
import GearIMG from "../../assets/images/gear.png";
import MicIMG from "../../assets/images/Mic.png";
import PlaneIMG from "../../assets/images/plane.png";
import "./ServiceSection.css";

function ServiceSection() {
  return (
    <section className="serviceSection">
      <div className="sectionName">
        CATEGORY
      </div>
      <div className="serviceHeading">
        We Offer Best Services
        </div>
      <div className="serveOverlay"></div>
      <div className="serviceCards">

        <div className="card">
          <div className="cardOverlay1"></div>
          <div className="cardImage">
            <img src={AntennaIMG} className="cardIMG" alt="" />
          </div>
          <div className="cardTitle">
            Calculated Weather
            </div>
          <div className="cardDesc">
            Built Wicket longer admire do barton vanity itself do in it.
          </div>
        </div>

        <div className="card">
          <div className="cardOverlay1"></div>
          <div className="cardImage">
            <img src={PlaneIMG} className="cardIMG" alt="" />
          </div>
          <div className="cardTitle">
            Best Flights
            </div>
          <div className="cardDesc">
            Engrossed listening. Park gate sell they west hard for the.
          </div>
        </div>

        <div className="card">
          <div className="cardOverlay1"></div>
          <div className="cardImage">
            <img src={MicIMG} className="cardIMG" alt="" />
          </div>
          <div className="cardTitle">
            Local Events
            </div>
          <div className="cardDesc">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </div>
        </div>

        <div className="card">
          <div className="cardOverlay1"></div>
          <div className="cardImage">
            <img src={GearIMG} className="cardIMG" alt="" />
          </div>
          <div className="cardTitle">
            Customization
            </div>
          <div className="cardDesc">
            We deliver outsourced aviation services for military customers
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
