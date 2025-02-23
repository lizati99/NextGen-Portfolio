import classes from './PortfolioContent.module.css';
import { useState } from 'react'
import Work from './Work';
import projectImg from './../../assets/images/Portfolio/projet_1.jpg'

export default function PortfolioContent() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const works = [
        { category: 'frontend', image: projectImg, title: 'Quiz', description: 'Topic', role: 'Front-end' },
        { category: 'frontend', image: projectImg, title: 'Toolkit', description: 'Portfolio', role: 'Front-end' },
        { category: 'frontend', image: projectImg, title: 'TicTacToe', description: 'Game', role: 'Front-end' },
        { category: 'backend', image: projectImg, title: 'Movie', description: 'Vault', role: 'Back-end' },
        { category: 'backend', image: projectImg, title: 'Stock', description: 'Track', role: 'Back-end' },
        { category: 'backend', image: projectImg, title: 'E Learning', description: 'Learning', role: 'Back-end' },
        { category: 'backend', image: projectImg, title: 'InvestMarrakech', description: 'Sphere', role: 'Back-end' },
        { category: 'backend', image: projectImg, title: 'Supply', description: 'Sphere', role: 'Back-end' },
    ];

    const filteredWorks = selectedCategory === 'all'
        ? works
        : works.filter(work => work.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const categories = [
        { name: 'all', label: 'All' },
        { name: 'desktop', label: 'Desktop' },
        { name: 'web', label: 'Web' },
        { name: 'landingPage', label: 'LandingPage' },
        { name: 'commerce', label: 'Commerce' },
        { name: 'frontend', label: 'Front-end' },
        { name: 'backend', label: 'Back-end' },
    ];

    return (
        <div className={classes.portfolio_content}>
            <ul className={classes.pagination}>
                {categories.map((category) => (
                    <li
                        key={category.name}
                        className={`${selectedCategory === category.name ? classes.active : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {category.label}
                    </li>
                ))}
            </ul>

            <div className={classes.works}>
                <div className={classes.first_work}>
                    <h1>{selectedCategory === 'all' ? 'All' : selectedCategory}</h1>
                </div>

                {filteredWorks.map((work, index) => (
                    <Work key={index} {...work}/>
                ))}
            </div>
        </div>
    );
}
