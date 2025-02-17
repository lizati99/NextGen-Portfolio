import React, { useEffect, useState } from "react";
import classes from "./Testimonial.module.css";
import profilePic from "../../../assets/images/Testimonial/1027322.jpg";
import MainHeading from "../../Common/MainHeading/MainHeading";
import SelectArrow from "../../../assets/icons/Testimonial/SelectArrow.svg";
import PopupAvis from "./PopupAvis";

const testimonials = [
  {
    id: 1,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "We have collaborated closely with Saifad & Co for many years, and every time we work together, we always achieve mutual success. This is an example of solid and sustainable cooperation.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
  {
    id: 2,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "Great experience working with Saifad & Co, they are very professional and reliable.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
  {
    id: 3,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "Great experience working with Saifad & Co, they are very professional and reliable.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
  {
    id: 4,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "Great experience working with Saifad & Co, they are very professional and reliable.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
  {
    id: 5,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "Great experience working with Saifad & Co, they are very professional and reliable.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
  {
    id: 6,
    name: "Mohammed Lizati",
    role: "Backend Developer",
    message: "Great experience working with Saifad & Co, they are very professional and reliable.",
    website: "https://www.realignculture.com",
    rating: "⭐⭐⭐⭐⭐",
    image: profilePic,
  },
];

const sortingMethods = {
  "Les plus récents": (reviews) =>
    [...(reviews || [])].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
  "Les plus anciens": (reviews) =>
    [...(reviews || [])].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
  "Les mieux notés": (reviews) => [...(reviews || [])].sort((a, b) => b.rating - a.rating),
  "Les moins bien notés": (reviews) => [...(reviews || [])].sort((a, b) => a.rating - b.rating),
};

const Testimonial = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Les mieux notés");
  const [sortedReviews, setSortedReviews] = useState([]);
  const isReviews=testimonials && testimonials.length > 0;
  
  useEffect(() => {
    if (testimonials) {
      setSortedReviews(sortingMethods["Les mieux notés"](testimonials));
    }
  }, [testimonials]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    if (!sortingMethods[option]) return;
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setSortedReviews(sortingMethods[option](testimonials));
  };

  const displayTestimonials = () => {
    return sortedReviews.map((testimonial) => (
      <div key={testimonial.id} className={classes.testimonialCard}>
        <div className={classes.imageWrapper}>
          <div className={classes.imageTop}></div>
          <div className={classes.imageBottom}></div>
          <img src={testimonial.image} alt={testimonial.name} className={classes.profileImage} />
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.userName}>{testimonial.name}</div>
            <div className={classes.userRole}>{testimonial.role}</div>
          </div>
          <div className={classes.userMessage}>
            <p>{testimonial.message}</p>
          </div>
          <div className={classes.cardFooter}>
            <div className={classes.websiteLink}>
              <a href={testimonial.website} className={classes.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
            <div className={classes.rating}>{testimonial.rating}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={classes.testimonial_box}>
      <MainHeading smallText="What" mainText="Clients" highlightedText="Say" />
      <div className={classes.testimonial_header}>
        <h1>
          All Reviews <span className={classes.number}>({testimonials ? testimonials.length : 0})</span>
        </h1>
        <div className={classes.review_section}>
          {isReviews && (
            <div className={classes.dropdown}>
              <button
                className={classes.dropdown_button}
                onClick={toggleDropdown}
              >
                <p>{selectedOption}</p>
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
                  className={`${classes.dropdown_content} ${
                    isDropdownOpen ? classes.open : ""
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
      { (isPopupOpen) ? (
        <PopupAvis setIsPopupOpen={setIsPopupOpen} />
      ):(
        <></>
      )}
      <div className={classes.testimonialContainer}>
        {displayTestimonials()}
      </div>
    </div>
  );
};

export default Testimonial;
