import Header from "../components/Header";
import Footer from "../components/Footer";
import movieProject from "../images/movie-squirral.JPG";
import portfolio from "../images/portfolio.JPG";
import capstone from "../images/capstone.JPG";
import { Link } from "react-router-dom";

function Projects() {

    return (
        <main>
            <Header></Header>
            <section className="project-single-section">
                <h1>Portfolio
                </h1>

                <div className="project-single-img">

                <img className="portfolio" src={portfolio} alt="Portfolio Website" />

                </div>

                <h2>Tools Used:</h2>
                <ul>
                    <li>React</li>
                    <li>CSS3</li>
                </ul>
                <a className="single-page-button" href="https://winsonyu.ca/">Live Site</a>

            </section>

            <section className="project-details">
                
                <h2>Process</h2>
                <p>I first looked at past intakes' portfolio to get an idea of what kind of site I want to design. At the beginning I was thinking of doing a clean, minimalistic design, but instead went with a Cyberpunk aesthetic. One of the highlights of the project is fetching data using an API from RAWG API. I fetched the data from the API using the built-in React hook useEffect. Fetching the actual game data, I made an HTTP GET request to the RAWG API endpoint. </p>

                <a className="single-page-button" href="https://github.com/wyu52/my-portfolio/blob/main/src/components/FavouriteGame.js">View Code</a>

                <h2>Reflection</h2>
                <p>As this was my second major React project, I was more familiar with React which made the process easier while also learning new techniques. I learned how to use the GSAP plugin to create animations and had more practice with APIs. Overall, I'm satisfied with the work I've done on this project and hope to learn more.</p>
             
            </section>

            <section className="other-projects">
                <h2>Other Projects</h2>
                <div className="other-projects-section">
                    <div className="movie-db">
                        <Link to="../pages/moviesquirrel"><img src={movieProject} alt="Movie database website" /></Link>
                        <Link to="../pages/moviesquirrel"><div className="project-caption">Movie Squirrel</div></Link>
                    </div>

                    <div className="capstone">
                        <Link to="../pages/capstone"><img src={capstone} alt="Bubble tea store website" /></Link>
                        <Link to="../pages/capstone"><div className="project-caption">BubbleLab</div></Link>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            
        </main>
    )

}

export default Projects;