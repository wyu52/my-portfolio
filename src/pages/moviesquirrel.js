
import Header from "../components/Header";
import Footer from "../components/Footer";
import movieProject from "../images/movie-squirral.JPG";
import portfolio from "../images/portfolio.png";
import capstone from "../images/capstone.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";

function Projects() {
    useEffect(() => {
        

        const animateElements = () => {
            gsap.to('.single-page-button', {
                borderColor: '#FF00FF',
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            
        };

        const smoothScroll = () => {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    gsap.to(window, { duration: 0.8, scrollTo: { y: this.getAttribute('href'), offsetY: 70 } });
                });
            });
        };

        
        smoothScroll();

        animateElements();

      
    }, []);

    return (
        <main>
            <Header></Header>
            <section className="project-single-section">
                <h1>Movie Squirrel
                </h1>

                <div className="project-single-img">

                <img className="movie-db" src={movieProject} alt="Movie database" />

                </div>

                <h2>Tools Used:</h2>
                <ul>
                    <li>React</li>
                    <li>SASS</li>
                </ul>
                <a className="single-page-button" href="https://hzhengweb.com/movie-squirrel/">Live Site</a>

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
                    <div className="portfolio">
                        <Link to="../pages/portfolio"><img src={portfolio} alt="Portfolio Website" /></Link>
                        <Link to="../pages/portfolio"><div className="project-caption">Portfolio</div></Link>
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


