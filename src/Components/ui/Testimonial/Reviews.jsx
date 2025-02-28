import React, { useEffect, useState } from "react";
import classes from "./Reviews.module.css";
import { Rating } from "@mui/material";
import MainHeading from "../../Common/MainHeading/MainHeading";
import SelectArrow from "../../../assets/icons/Testimonial/SelectArrow.svg";
import cardIcon from "../../../assets/icons/Testimonial/Vector.svg";
import avatarMohammedImg from "../../../assets/images/Testimonial/1027322.jpg"

const reviews = Array(6).fill({
    name: "Mohammed Lizati",
    job: "Full-stack Developper",
    text: "I had the pleasure of working with Mohammed LIZATI on several projects...",
    stars: 4,
    avatar: avatarMohammedImg,
});

const sortingMethods = {
    "Les plus récents": (reviews) =>
        [...(reviews || [])].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    "Les plus anciens": (reviews) =>
        [...(reviews || [])].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
    "Les mieux notés": (reviews) => [...(reviews || [])].sort((a, b) => b.rating - a.rating),
    "Les moins bien notés": (reviews) => [...(reviews || [])].sort((a, b) => a.rating - b.rating),
};


const Reviews = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Les mieux notés");
    const [sortedReviews, setSortedReviews] = useState([]);
    const isReviews = reviews && reviews.length > 0;

    useEffect(() => {
        if (reviews) {
            setSortedReviews(sortingMethods["Les mieux notés"](reviews));
        }
    }, [reviews]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option) => {
        if (!sortingMethods[option]) return;
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setSortedReviews(sortingMethods[option](reviews));
    };
    return <>
        <div className={classes.reviews_box}>
            <MainHeading smallText="What" mainText="Clients" highlightedText="Say" />
            <div className={classes.reviews_content}>
                <div className={classes.reviews_header}>
                    <h2 className={classes.title}>
                        All Reviews <span className={classes.number}>({reviews ? reviews.length : 0})</span>
                    </h2>
                    <div className={classes.reviews_section}>
                        {isReviews && (
                            <div className={classes.dropdown}>
                                <button
                                    className={classes.dropdown_button}
                                    onClick={toggleDropdown}
                                >
                                    <p className={classes.option}>{selectedOption}</p>
                                    <div className={classes.arrow}>
                                        <img
                                            src={SelectArrow}
                                            className={classes.select_arrow_icon}
                                            alt="Select Arrow"
                                            loading="lazy"
                                        />
                                    </div>
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        className={`${classes.dropdown_content} ${isDropdownOpen ? classes.open : ""
                                            }`}
                                    >
                                        <p onClick={() => selectOption("Les plus récents")} className={classes.option}>
                                            Les plus récents
                                        </p>
                                        <p onClick={() => selectOption("Les plus anciens")} className={classes.option}>
                                            Les plus anciens
                                        </p>
                                        <p onClick={() => selectOption("Les mieux notés")} className={classes.option}>
                                            Les mieux notés
                                        </p>
                                        <p onClick={() => selectOption("Les moins bien notés")} className={classes.option}>
                                            Les moins bien notés
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                        <button
                            className={classes.write_review_button}
                            onClick={() => setIsPopupOpen((prevState) => !prevState)}
                        >
                            Écrire un avis
                        </button>
                    </div>

                </div>

                <div className={classes.grid_container}>
                    {reviews.map((review, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.card_content}>
                                <div className={classes.card_icon}>
                                    <img src={cardIcon} alt="review icon" />
                                </div>
                                <div className={classes.stars}>
                                    <Rating name="read-only" value={review.stars} readOnly />
                                </div>

                                <p className={classes.review_text}>
                                    {review.text}
                                </p>

                                <div className={classes.user_info}>
                                    <img src={review.avatar} alt={review.name} className={classes.avatar} />
                                    <div className={classes.user_details}>
                                        <p className={classes.user_name}>{review.name}</p>
                                        <p className={classes.user_job}>{review.job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={classes.load}>
                    <button className={classes.load_more}>LOAD MORE REVIEWS</button>
                </div>
            </div>
        </div>
    </>
};

export default Reviews;
