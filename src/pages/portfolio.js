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
                <p>My group consisted of three people: me, Alen Villaluz, and Dale Zheng. We decided to go with Dale's design since it was cleanest design. To favourite movies, we made a button component that, when clicked, adds or removes a movie from the list. This is achieved by storing a list of favourite movies in state and when the user clicks the star button, it checks if the movie is already in the list of favourites.  </p>

                <a className="single-page-button" href="https://github.com/jasperalen07/movie-squirrel/blob/main/src/components/FavoriteFunction.js">View Code</a>

                <h2>Reflection</h2>
                <p>Since this was my first React group project I learned many skills. Progressing through the project helped me practice with styling with SASS, implementing a carousel, and use React hooks. My team mates were easy to work with and everyone completed their tasks on time.</p>
             
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