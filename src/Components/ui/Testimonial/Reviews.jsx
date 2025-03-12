import React, { useEffect, useState } from "react";
import classes from "./Reviews.module.css";
import { Rating } from "@mui/material";
import MainHeading from "../../Common/MainHeading/MainHeading";
import SelectArrow from "../../../assets/icons/Testimonial/SelectArrow.svg";
import cardIcon from "../../../assets/icons/Testimonial/Vector.svg";
import avatarMohammedImg from "../../../assets/images/Testimonial/1027322.jpg"
import PopupAvis from "./PopupAvis";

const reviews = [
    { name: "Amina El Fadil", job: "UX Designer", text: "Amazing work! Highly recommended.", rating: 5, avatar: avatarMohammedImg, createdAt: "2025-05-10"},
    { name: "Youssef Benali", job: "Backend Developer", text: "Great technical skills and communication.", rating: 4, avatar: avatarMohammedImg, createdAt:"2025-02-10"},
    { name: "Sara Mouhajir", job: "Project Manager", text: "Reliable and efficient. Would work with them again.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-03-10"},
    { name: "Omar Chaouki", job: "Data Scientist", text: "Strong problem-solving skills.", rating: 4, avatar: avatarMohammedImg, createdAt:"2025-08-10"},
    { name: "Nadia Khalil", job: "Frontend Developer", text: "Excellent UI/UX understanding.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-03-10"},
    { name: "Karim Lamine", job: "Mobile Developer", text: "Fast and efficient. Delivered before the deadline.", rating: 4, avatar: avatarMohammedImg, createdAt:"2025-09-10"},
    { name: "Hicham Oubaha", job: "Software Engineer", text: "They write clean and scalable code.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-10-10"},
    { name: "Laila Idrissi", job: "QA Tester", text: "Attention to detail is impressive.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-11-10"},
    { name: "Anwar Tahiri", job: "DevOps Engineer", text: "Their deployment strategies are well-optimized.", rating: 4, avatar: avatarMohammedImg, createdAt:"2025-12-10"},
    { name: "Fatima Zahra", job: "Graphic Designer", text: "Creative and responsive team.", rating: 5, avatar: avatarMohammedImg , createdAt:"2025-04-10"},
    { name: "Khalid Amrani", job: "Cybersecurity Expert", text: "They implement strong security measures.", rating: 5, avatar: avatarMohammedImg , createdAt:"2025-01-10"},
    { name: "Sofia Bennani", job: "Business Analyst", text: "Very analytical and insightful.", rating: 4, avatar: avatarMohammedImg , createdAt:"2025-03-10"},
    { name: "Rachid Mouline", job: "Tech Lead", text: "Highly skilled and professional.", rating: 5, avatar: avatarMohammedImg , createdAt:"2025-08-10"},
    { name: "Meriem Saadi", job: "Marketing Specialist", text: "Great collaboration and creative mindset.", rating: 4, avatar: avatarMohammedImg, createdAt:"2025-07-10"},
    { name: "Hamza El Majdoubi", job: "Product Manager", text: "Understands client needs very well.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-03-11"},
    { name: "Mohammed Lizati", job: "Backend Developer", text: "Understands client needs very well.", rating: 5, avatar: avatarMohammedImg, createdAt:"2025-04-22"}
];

const sortingMethods = {
    "plus récents": (reviews) =>
        [...(reviews || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    "plus anciens": (reviews) =>
        [...(reviews || [])].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    "mieux notés": (reviews) => [...(reviews || [])].sort((a, b) => b.rating - a.rating),
    "moins notés": (reviews) => [...(reviews || [])].sort((a, b) => a.rating - b.rating),
};


const Reviews = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("mieux notés");
    const [sortedReviews, setSortedReviews] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(3);
    const isReviews = reviews && reviews.length > 0;

    useEffect(() => {
        if (reviews) {
            setSortedReviews(sortingMethods["mieux notés"](reviews));
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

    const loadMoreOrLess  = () => {
        if (visibleReviews >= reviews.length) {
            setVisibleReviews(3);
        } else {
            setVisibleReviews((prev) => prev + 3);
        }
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
                                        <p onClick={() => selectOption("plus récents")} className={classes.option}>
                                            plus récents
                                        </p>
                                        <p onClick={() => selectOption("plus anciens")} className={classes.option}>
                                            plus anciens
                                        </p>
                                        <p onClick={() => selectOption("mieux notés")} className={classes.option}>
                                            mieux notés
                                        </p>
                                        <p onClick={() => selectOption("moins notés")} className={classes.option}>
                                            moins notés
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
                { (isPopupOpen) ? (
                    <PopupAvis setIsPopupOpen={setIsPopupOpen} />
                ):(
                    <></>
                )}
                <div className={classes.grid_container}>
                    {sortedReviews.slice(0, visibleReviews).map((review, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.card_content}>
                                <div className={classes.card_icon}>
                                    <img src={cardIcon} alt="review icon" />
                                </div>
                                <div className={classes.stars}>
                                    <Rating name="read-only" value={review.rating} readOnly />
                                </div>

                                <p className={classes.review_text}>
                                    {review.text}
                                </p>

                                <div className={classes.user_info}>
                                    <img src={review.avatar} alt={review.name} className={classes.avatar} />
                                    <div className={classes.user_details}>
                                        <p className={classes.user_name}>{review.name}</p>
                                        <p className={classes.user_job}>{review.job}</p>
                                        <p className={classes.time}>{review.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={classes.load}>
                    <button className={classes.load_more} onClick={loadMoreOrLess}>
                        {visibleReviews >= reviews.length ? "Show Less" : "Load More"}
                    </button>
                </div>
            </div>
        </div>
    </>
};

export default Reviews;
