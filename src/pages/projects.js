import Header from "../components/Header";
import movieProject from "../images/movie-squirral.JPG";
import portfolio from "../images/portfolio-mobile.JPG";
import capstone from "../images/capstone.JPG";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Projects() {

    return (
        <main>
            <Header></Header>
            <section>
                <h1>Learn more about my thinking process when developing.
                </h1>

                <div className="projects-container">
                    <div className="movie-db">
                        <Link to="../pages/moviesquirrel"><img src={movieProject} alt="Movie database" /></Link>
                        <Link to="../pages/moviesquirrel"><div className="project-caption">01 Movie Squirrel</div></Link>
                    </div>
                    <div className="portfolio">
                        <Link to="../pages/portfolio"><img src={portfolio} alt="Portfolio Website" /></Link>
                        <Link to="../pages/portfolio"><div className="project-caption">02 Portfolio</div></Link>
                    </div>
                    <div className="capstone">
                        <Link to="../pages/capstone"><img src={capstone} alt="Bubble tea store website" /></Link>
                        <Link to="../pages/capstone"><div className="project-caption">03 BubbleLab</div></Link>
                    </div>
                </div>

            </section>

            <Footer></Footer>
            
        </main>
    )

}

export default Projects;