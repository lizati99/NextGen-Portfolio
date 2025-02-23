import classes from './PortfolioContent.module.css';
import { useState } from 'react'

export default function PortfolioContent() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    

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
                        onClick={() => {}}
                    >
                        {category.label}
                    </li>
                ))}
            </ul>

            
        </div>
    );
}
