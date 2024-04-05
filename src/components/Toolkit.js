import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { useEffect } from "react";

const Toolkit = () => {
    const skills = [
        { name: 'JavaScript', category: 'Development' }, 
        { name: 'CSS3', category: 'Development' }, 
        { name: 'HTML5', category: 'Development' }, 
        { name: 'React', category: 'Development' }, 
        { name: 'PHP', category: 'Development' }, 
        { name: 'Tailwind', category: 'Development' }, 
        { name: 'SASS', category: 'Development' }, 
        { name: 'mySQL', category: 'Development' },
        { name: 'Adobe Figma', category: 'Design' }, 
        { name: 'Adobe XD', category: 'Design' }, 
        { name: 'Photoshop', category: 'Design' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const skillsRef = useRef(null);

    useEffect(() => {
        if (skillsRef.current) {
            gsap.fromTo(skillsRef.current.children, {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    }, [selectedCategory]);

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

    return (
        <div className='toolkit'>
            <div className='filter-buttons'>
                <button 
                    className={selectedCategory === 'All' ? 'selected' : ''}
                    onClick={() => handleFilterClick('All')}
                >
                    All
                </button>
                <button 
                    className={selectedCategory === 'Development' ? 'selected' : ''}
                    onClick={() => handleFilterClick('Development')}
                >
                    Development
                </button>
                <button 
                    className={selectedCategory === 'Design' ? 'selected' : ''}
                    onClick={() => handleFilterClick('Design')}
                >
                    Design
                </button>
            </div>
            <ul ref={skillsRef}>
                {filteredSkills.map((skill, index) => (
                    <li key={index} className='skill'>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Toolkit;
