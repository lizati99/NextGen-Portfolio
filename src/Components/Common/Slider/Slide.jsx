import { useEffect, useRef } from "react";
import classes from "./Slide.module.css";


export default function Slide({ activeSlide, cardWidth, getCardWidth }) {
    const imagesRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            getCardWidth(cardRef.current.offsetWidth + 20, imagesRef);
        }
    }, []);

    useEffect(() => {
        if (imagesRef.current && cardWidth !== undefined) {
            imagesRef.current.scrollLeft -= (activeSlide - 1) * cardWidth;
        }
    }, [activeSlide, cardWidth]);

    return (
        <div className={classes.slide}>
            <div className={classes.slide_content}>
                <div className={classes.step_number}>{activeSlide}</div>
                <h2 className={classes.title}>Premier étage</h2>
                <div className={classes.divider}></div>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className={classes.images} ref={imagesRef}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`${classes.image_card} ${activeSlide === project.id ? classes.active : ""}`}
                        ref={index === 0 ? cardRef : null} // استخدام `ref` فقط لأول عنصر
                    >
                        <img src={project.image.src} alt={project.image.alt} className={classes.image} />
                        <div className={classes.redirect_button}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
