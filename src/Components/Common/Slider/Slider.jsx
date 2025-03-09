import React, { useEffect, useRef, useState } from "react";
import classes from "./Slider.module.css";
import MainHeading from "../MainHeading/MainHeading";
import { useTranslation } from "react-i18next";
import projectImg from './../../../assets/images/Portfolio/projet_1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
    { id: 1, title: "E-commerce Platform", description: "A modern and scalable e-commerce platform built with Next.js and Laravel.", image: { src: projectImg, alt: "E-commerce dashboard" }},
    { id: 2, title: "Mobile Banking App", description: "A secure and user-friendly mobile banking app using React Native and Node.js.", image: { src: projectImg, alt: "E-commerce dashboard" }},
    { id: 3, title: "AI Chatbot", description: "An AI-powered chatbot using Python and TensorFlow.", image: { src: projectImg, alt: "AI chatbot interface" }},
    { id: 4, title: "Inventory System", description: "A complete inventory management system with a dashboard.", image: { src: projectImg, alt: "Inventory system UI" }},
    { id: 5, title: "Task Manager", description: "A productivity task manager with cloud synchronization.", image: { src: projectImg, alt: "Task manager app" }}
];

// إنشاء نسخة متكررة للعناصر بحيث تحتوي القائمة على عنصر أول وأخير وهمي
const duplicatedProjects = [
    projects[projects.length - 1],  // العنصر الأخير مكرر في البداية
    ...projects,
    projects[0]  // العنصر الأول مكرر في النهاية
];

const Slider = () => {
    const { t } = useTranslation();
    const [activeSlide, setActiveSlide] = useState(1);
    const [cardWidth, setCardWidth] = useState(0);
    const imagesRef = useRef(null);
    const cardRef = useRef(null);
    
    useEffect(() => {
        const getCardWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth + 20);
            }
        };
        getCardWidth();
        window.addEventListener("resize", getCardWidth);
        return () => window.removeEventListener("resize", getCardWidth);
    }, []);

    useEffect(() => {
        if (!imagesRef.current || cardWidth === 0) return;

        const handleScroll = () => {
            const scrollLeft = imagesRef.current.scrollLeft;
            const centerIndex = Math.round(scrollLeft / cardWidth);
            setActiveSlide(centerIndex);
        };

        imagesRef.current.addEventListener("scroll", handleScroll);
        return () => imagesRef.current.removeEventListener("scroll", handleScroll);
    }, [cardWidth]);

    useEffect(() => {
        if (!imagesRef.current || cardWidth === 0) return;

        if (activeSlide === 0) {
            setTimeout(() => {
                imagesRef.current.scrollTo({
                    left: projects.length * cardWidth,
                    behavior: "auto"
                });
                setActiveSlide(projects.length);
            }, 300);
        }

        if (activeSlide === duplicatedProjects.length - 1) {
            setTimeout(() => {
                imagesRef.current.scrollTo({
                    left: cardWidth,
                    behavior: "auto"
                });
                setActiveSlide(1);
            }, 300);
        }
    }, [activeSlide, cardWidth]);

    const handleNext = () => {
        if (imagesRef.current && cardWidth) {
            imagesRef.current.scrollTo({
                left: (activeSlide + 1) * cardWidth,
                behavior: "smooth",
            });
            setActiveSlide(activeSlide + 1);
        }
    };

    const handlePrevious = () => {
        if (imagesRef.current && cardWidth) {
            imagesRef.current.scrollTo({
                left: (activeSlide - 1) * cardWidth,
                behavior: "smooth",
            });
            setActiveSlide(activeSlide - 1);
        }
    };

    return (
        <div className={classes.slider_content}>
            <MainHeading
                smallText={t('portfolioPage.portfolioContent.mainHeading.smallText')}
                mainText={t('portfolioPage.portfolioContent.mainHeading.mainText')}
                highlightedText={t('portfolioPage.portfolioContent.mainHeading.highlightedText')}
            />
            <div className={classes.slide}>
                <div className={classes.slide_content}>
                    <div className={classes.step_number}>{((activeSlide - 1) % projects.length) + 1}</div>
                    <h2 className={classes.title}>Premier étage</h2>
                    <div className={classes.divider}></div>
                    <p className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className={classes.images} ref={imagesRef}>
                    {duplicatedProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`${classes.image_card} ${activeSlide % duplicatedProjects.length === index ? classes.active : ""}`}
                            ref={index === 1 ? cardRef : null}
                        >
                            <img src={project.image.src} alt={project.image.alt} className={classes.image} />
                            <a 
                                href="https://lizati99.github.io/Special-cv/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={classes.redirect}
                            >
                                <FontAwesomeIcon icon={faArrowRight} size="sm" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.navigation_container}>
                <div className={classes.navigation}>
                    <button className={classes.nav_button} onClick={handlePrevious}>←</button>
                    <button className={classes.nav_button} onClick={handleNext}>→</button>
                </div>

                <div className={classes.pagination}>
                    <span className={classes.page_number}>
                        {((activeSlide - 1) % projects.length) + 1}
                    </span>
                    <div className={classes.progress_bar}></div>
                    <span className={classes.page_number}>{projects.length}</span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
