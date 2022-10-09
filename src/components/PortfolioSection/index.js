import React from "react";
import "./Portfolio.css";
import Car from "../../Images/car.jpg";
import Netflix from "../../Images/netflix.jpg";
import Ecomreact from "../../Images/ecommerce.jpg";
import Booking from "../../Images/booking.jpg";
import Recipe from "../../Images/recipe.jpg";
import Weather from "../../Images/weather.jpg";
import Blog from "../../Images/blog.jpg";
import Movie from "../../Images/movie.jpg";
function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={Car} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Car App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Car Website</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/car-website-using-HTML-CSS-JAVASCRIPT"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://neon-chebakia-9af97b.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Booking} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Booking App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Resort Booking</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/Reservation-site-using-react"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://reliable-daifuku-0afb4a.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Ecomreact} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-commerce</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Digital Shopping</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/E-commerce-website"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fascinating-profiterole-df1ee9.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={Weather} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Weather App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Weather</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/weather-app-using-react-jsp"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://lustrous-tartufo-0525f1.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Netflix} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Netflix</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Netflix Ui</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/Netflix-using-Reactjs"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://friendly-toffee-49be7d.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={Blog} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Blog App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Blog app</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/Blog-website-using-react"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://animated-tanuki-b5c141.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={Movie} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Movie App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Movie app</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/Movie-app-using-API"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://resonant-boba-7e0ed1.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Recipe} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Food Recipe App</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Recipe app</div>
            <div className="img-description">
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/karthikgpi1/food-recipe-app-using-HTML-CSS-JAVASCRIPT"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://friendly-cuchufli-c65764.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
