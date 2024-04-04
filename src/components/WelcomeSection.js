import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin)


function WelcomeSection() {
    const welcomemsgRef = useRef(null);
  
    useEffect(() => {
        gsap.to(welcomemsgRef.current, { 
            duration: 3, 
            text: "Web developer",
            repeat: -1,
            yoyo: true,
            ease: "none" 
        });
    }, []);
    
    return(

    <section className="welcome-section">
                    <h1 ref={welcomemsgRef} className="welcome-msg" >Winson Yu
                    </h1>
    </section>
    );

}

export default WelcomeSection;