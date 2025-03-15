import { useState, useEffect } from "react";
import classes from "./PopupAvis.module.css";
import { Rating, Box } from "@mui/material";
import closeSvg from "./../../../assets/icons/close.png";
import axios from "axios";

export default function PopupAvis({ isOpen, setIsPopupOpen }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Client");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setRole("Client");
      setRating(0);
      setComment("");
      setLocation("");
      setImage(null);
      setErrorMessage("");
      setSuccessMessage("");
    }
  }, [isOpen]);

  const handleRatingChange = (_, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!rating || rating < 1 || rating > 5) {
      setErrorMessage("La note doit être entre 1 et 5.");
      return;
    }
    if (!comment.trim()) {
      setErrorMessage("Le commentaire ne peut pas être vide.");
      return;
    }
    if (!location.trim()) {
      setErrorMessage("Veuillez entrer votre localisation.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("comment", comment);
      formData.append("rating", rating);
      formData.append("location", location);
      if (image) {
        formData.append("image_url", image);
      }
  
      const response = await axios.post("http://127.0.0.1:8000/api/reviews", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Success:", response.data);
      setSuccessMessage("Votre avis a été soumis avec succès !");
      setErrorMessage("");
      setName("");
      setRole("Client");
      setRating(0);
      setComment("");
      setLocation("");
      setImage(null);
    } catch (error) {
      console.error("API Error:", error);
      setErrorMessage("Erreur lors de l'envoi de votre avis.");
    }
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className={classes.overlay} onClick={handleClose}></div>
      <div className={classes.popup}>
        <button className={classes.close_button} onClick={handleClose}>
          <img src={closeSvg} alt="close icon" loading="lazy" />
        </button>
        <h3 className={classes.popup_title}>
          Laisser un avis pour Les chandelles
        </h3>
        <p className={classes.popup_question}>
          Comment évaluez-vous notre produit ?
        </p>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 1, marginBottom: 2 }}
        >
          <Rating
            name="half-rating"
            value={rating}
            precision={0.25}
            onChange={handleRatingChange}
            size="large"
            className={classes.stars}
          />
          <Box fontSize="18px">
            <p>({rating})</p>
          </Box>
        </Box>
        <form className={classes.review_form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom..."
            className={classes.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Votre rôle..."
            className={classes.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            type="text"
            placeholder="Votre localisation..."
            className={classes.input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <textarea
            placeholder="Écrire un avis..."
            className={classes.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <input
            type="file"
            accept="image/*"
            className={classes.file_input}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit" className={classes.submit_button}>
            Soumettre l'avis
          </button>
        </form>
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        {successMessage && <p className={classes.success}>{successMessage}</p>}
      </div>
    </div>
  );
}
