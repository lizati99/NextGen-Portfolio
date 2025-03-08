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
    { id: 3, title: "Mobile Banking App", description: "A secure and user-friendly mobile banking app using React Native and Node.js.", image: { src: projectImg, alt: "E-commerce dashboard" }},
    { id: 4, title: "Mobile Banking App", description: "A secure and user-friendly mobile banking app using React Native and Node.js.", image: { src: projectImg, alt: "E-commerce dashboard" }},
    { id: 5, title: "Mobile Banking App", description: "A secure and user-friendly mobile banking app using React Native and Node.js.", image: { src: projectImg, alt: "E-commerce dashboard" }}
];

const Slider = () => {
    const { t } = useTranslation();
    const [activeSlide, setActiveSlide] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const imagesRef = useRef(null);
    const cardRef = useRef(null);
    const duplicatedProjects = [...projects, ...projects, ...projects];

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
        if (imagesRef.current && cardWidth) {
            imagesRef.current.scrollLeft = cardWidth * projects.length;
        }
    }, [cardWidth]);

    useEffect(() => {
        if (!imagesRef.current || cardWidth === 0) return;

        const handleScroll = () => {
            if (imagesRef.current.scrollLeft >= cardWidth * (projects.length * 2)) {
                imagesRef.current.scrollLeft = cardWidth * projects.length;
            } else if (imagesRef.current.scrollLeft <= 0) {
                imagesRef.current.scrollLeft = cardWidth * projects.length;
            }
        };

        imagesRef.current.addEventListener("scroll", handleScroll);
        return () => imagesRef.current.removeEventListener("scroll", handleScroll);
    }, [cardWidth]);

    const handleNext = () => {
        if (imagesRef.current && cardWidth) {
            imagesRef.current.scrollLeft += cardWidth;
            setActiveSlide((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (imagesRef.current && cardWidth) {
            imagesRef.current.scrollLeft -= cardWidth;
            setActiveSlide((prev) => prev - 1);
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
                    <div className={classes.step_number}>{(activeSlide % projects.length) + 1}</div>
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
                            className={`${classes.image_card} ${(activeSlide % projects.length) + 1 === (index % projects.length) + 1 ? classes.active : ""}`}
                            ref={index === projects.length ? cardRef : null}
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
                    <span className={classes.page_number}>01</span>
                    <div className={classes.progress_bar}></div>
                    <span className={classes.page_number}>04</span>
                </div>
           </div>
        </div>
    );
};

export default Slider;
