
import Header from "../components/Header";
import movieProject from "../images/movie-squirral.JPG";
import portfolio from "../images/portfolio.JPG";
import Footer from "../components/Footer";
import capstone from "../images/capstone.JPG";
import { Link } from "react-router-dom";

function Projects() {

    return (
        <main>
            <Header></Header>
            <section className="project-single-section">
                <h1>BubbleLab
                </h1>

                <div className="project-single-img">

                <img className="capstone" src={capstone} alt="Bubble tea store website" />

                </div>

                <h2>Tools Used:</h2>
                <ul>
                    <li>WordPress</li>
                    <li>Woocommerce</li>
                    <li>SASS</li>
                </ul>
                <a className="single-page-button" href="https://xyzbubbletea.bcitwebdeveloper.ca/">Live Site</a>

            </section>

            <section className="project-details">
                
                <h2>Process</h2>
                <p>We started the process by getting ideas of other bubble tea stores' website's design and noting down any interesting components. In the end, we decided to go for a clean rounded design corresponding to our bubble tea store's name, BubbleLab.</p>

                <a className="single-page-button" href="https://github.com/jasperalen07/movie-squirrel/blob/main/src/components/FavoriteFunction.js" >View Code</a>

                <h2>Reflection</h2>
                <p>Since this was my first React group project I learned many skills. Progressing through the project helped me practice with styling with SASS, implementing a carousel, and use React hooks. My team mates were easy to work with and everyone completed their tasks on time.</p>
             
            </section>

            <section className="other-projects">
                <h2>Other Projects</h2>
                <div className="other-projects-section">
                    <div className="portfolio">
                        <Link to="../pages/portfolio"><img src={portfolio} alt="Portfolio Website" /></Link>
                        <Link to="../pages/portfolio"><div className="project-caption">Portfolio</div></Link>
                    </div>

                    <div className="movie-db">
                        <Link to="../pages/moviesquirrel"><img src={movieProject} alt="Movie database website" /></Link>
                        <Link to="../pages/moviesquirrel"><div className="project-caption">Movie Squirrel</div></Link>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            
        </main>
    )

}

export default Projects;
