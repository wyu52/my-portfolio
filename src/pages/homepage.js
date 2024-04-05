

import ScrollToPlugin from "gsap/ScrollToPlugin";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import Portrait from "../images/portfolio-picture1.png";
import Toolkit from "../components/Toolkit";
import capstone from "../images/capstone.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import arrowright from "../images/arrowright.svg";
import arrowdown from "../images/arrowdown.svg";
import FavouriteGame from "../components/FavouriteGame";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);



function HomePage() {
    useEffect(() => {
        const smoothScroll = () => {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    gsap.to(window, { duration: 0.8, scrollTo: { y: this.getAttribute('href'), offsetY: 70 } });
                });
            });
        };

        const animateElements = () => {
            gsap.to('.portrait, .contact-me, .single-page-button', {
                borderColor: '#FF00FF',
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            gsap.to('.arrowright', {
                x: 50,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            gsap.to('.arrowdown', {
                y: 100,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            
        };

        animateElements();

        smoothScroll();
    }, []);

    return (
        <main>
            <div id="header">
            <Header></Header>
            </div>
            <WelcomeSection></WelcomeSection>


            <div className="featured-project">
                <a href="#portrait"><img className="arrowdown" src={arrowdown} alt="Down arrow"/></a>
            </div>

            <section className="intro">

                <img className="portrait" id="portrait" src={Portrait} alt="Portrait" />
                <p>I’m a front-end web developer with an automotive background. I've always wanted to try coding since I love building things and fixing problems. It feels awesome to build something and seeing it in action!

                In my free time, I'm into gaming, working out, and building computers.</p>
                
            </section>

            <section className="my-toolkit">
                <h2>My Toolkit</h2>
                <Toolkit></Toolkit>
            </section>

            <FavouriteGame></FavouriteGame>
            
            <section id="featured-project">
                <h2>Featured Project</h2>

                <div className="home-capstone">
                    <Link to="../pages/capstone"><img src={capstone} alt="Bubble tea store website" /></Link>
                    <Link to="../pages/capstone"><div className="project-caption">BubbleLab</div></Link>
                </div>

                <div className="all-projects">
                <a><Link to="../pages/projects">All Projects</Link></a>
                <Link to="../pages/projects"><img className="arrowright" src={arrowright} alt="Right arrow"/></Link>
                </div>

            </section>

            <div className="contact-container">
                <a href="mailto:winsonyu0@gmail.com" className="contact-me">Contact me!</a>
            </div>

            
            <Footer></Footer>
        </main>
    )
   
}

export default HomePage;