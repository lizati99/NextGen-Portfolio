import classes from './PortfolioContent.module.css';
import { useState } from 'react'
import Work from './Work';
import projectImg from './../../assets/images/Portfolio/projet_1.jpg';
import MainHeading from '../Common/MainHeading/MainHeading'
import { useTranslation } from 'react-i18next'

export default function PortfolioContent() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleWorks, setVisibleWorks] = useState(3);
    const { t } = useTranslation();

    const works = [
        { category: 'frontend', title: 'projects.quiz.title', description: 'projects.quiz.description', role: 'projects.quiz.role', image: projectImg },
        { category: 'frontend', title: 'projects.toolkit.title', description: 'projects.toolkit.description', role: 'projects.toolkit.role', image: projectImg },
        { category: 'frontend', title: 'projects.tictactoe.title', description: 'projects.tictactoe.description', role: 'projects.tictactoe.role', image: projectImg },
        { category: 'backend', title: 'projects.movie.title', description: 'projects.movie.description', role: 'projects.movie.role', image: projectImg },
        { category: 'backend', title: 'projects.stock.title', description: 'projects.stock.description', role: 'projects.stock.role', image: projectImg },
        { category: 'backend', title: 'projects.elearning.title', description: 'projects.elearning.description', role: 'projects.elearning.role', image: projectImg },
        { category: 'backend', title: 'projects.investmarrakech.title', description: 'projects.investmarrakech.description', role: 'projects.investmarrakech.role', image: projectImg },
        { category: 'backend', title: 'projects.supply.title', description: 'projects.supply.description', role: 'projects.supply.role', image: projectImg },
      ];

    const translatedWorks = works.map(work => ({
        ...work,
        title: t("portfolioPage.portfolioContent.content."+work.title),
        description: t("portfolioPage.portfolioContent.content."+work.description),
        role: t("portfolioPage.portfolioContent.content."+work.role),
    }));

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    
    const categories = t('portfolioPage.portfolioContent.content.categories', {returnObjects:true} );
    
    const filteredWorks = selectedCategory === categories[0].name
        ? translatedWorks
        : translatedWorks.filter(work => work.category === selectedCategory);

    const loadMoreOrLess  = () => {
        if (visibleWorks >= filteredWorks.length) {
            setVisibleWorks(3);
        } else {
            setVisibleWorks((prev) => prev + 3);
        }
    };
    return <>
        <MainHeading 
            smallText={t('portfolioPage.portfolioContent.mainHeading.smallText')} 
            mainText={t('portfolioPage.portfolioContent.mainHeading.mainText')} 
            highlightedText={t('portfolioPage.portfolioContent.mainHeading.highlightedText')} 
        />
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
                    <h1>{selectedCategory === categories[0].name ? categories[0].label : selectedCategory}</h1>
                </div>

                {filteredWorks.slice(0, visibleWorks).map((work, index) => (
                    <Work key={index} {...work}/>
                ))}
            </div>
             <div className={classes.load}>
                <button className={classes.load_more} onClick={loadMoreOrLess}>
                    {visibleWorks >= filteredWorks.length ? "Show Less" : "Load More"}
                </button>
            </div>
        </div>
    </>;
}
