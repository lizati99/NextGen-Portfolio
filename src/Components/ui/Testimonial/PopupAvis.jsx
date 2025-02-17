import { useState, useEffect } from "react";
import classes from "./PopupAvis.module.css";
import { Rating, Box } from "@mui/material";
import closeSvg from "./../../../assets/icons/close.png";

export default function PopupAvis({ isOpen, setIsPopupOpen }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Reset fields when the popup opens
  useEffect(() => {
    if (isOpen) {
      setRating(0);
      setComment("");
      setErrorMessage("");
      setSuccessMessage("");
    }
  }, [isOpen]);

  const handleRatingChange = (_, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!rating || rating < 1 || rating > 5) {
        setErrorMessage("La note doit être entre 1 et 5.");
        return;
        }
        if (!comment || comment.trim().length === 0) {
        setErrorMessage("Le commentaire ne peut pas être vide.");
        return;
        }
    }
  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return <>
        <div>
          <div className={classes.overlay} onClick={handleClose}></div>
          <div className={classes.popup}>
            <button className={classes.close_button} onClick={handleClose}>
              <img src={closeSvg} alt="close icon" loading="lazy"/>
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
              <textarea
                placeholder="Écrire un avis..."
                className={classes.textarea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit" className={classes.submit_button}>
                Soumettre l'avis
              </button>
            </form>
            {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            {successMessage && (
              <p className={classes.success}>{successMessage}</p>
            )}
          </div>
        </div>
    </>
}