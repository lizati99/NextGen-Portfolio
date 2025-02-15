import React from "react";
import classes from "./Testimonial.module.css";
import profilePic from "../../../assets/images/Testimonial/1027322.jpg";
import MainHeading from "../../Common/MainHeading/MainHeading";

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
];

const Testimonial = () => {
  const displayTestimonials = () => {
    return testimonials.map((testimonial) => (
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
      <div className={classes.testimonialContainer}>
        {displayTestimonials()}
      </div>
    </div>
  );
};

export default Testimonial;
