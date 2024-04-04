import React, { useState } from 'react';

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

      const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

    return (
        <div className='toolkit'>
            <div className='filter-buttons'>
            <button 
                    className={selectedCategory === 'All' ? 'selected' : ''}
                    onClick={() => setSelectedCategory('All')}
                >
                    All
                </button>
                <button 
                    className={selectedCategory === 'Development' ? 'selected' : ''}
                    onClick={() => setSelectedCategory('Development')}
                >
                    Development
                </button>
                <button 
                    className={selectedCategory === 'Design' ? 'selected' : ''}
                    onClick={() => setSelectedCategory('Design')}
                >
                    Design
                </button>
            </div>
            <ul>
                {filteredSkills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Toolkit;