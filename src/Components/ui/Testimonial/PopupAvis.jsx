import { useEffect, useReducer } from "react";
import classes from "./PopupAvis.module.css";
import { Rating, Box } from "@mui/material";
import closeSvg from "./../../../assets/icons/close.png";
import { formReducer, INITIAL_VALUES, FORM_ACTIONS } from "../../../utils/validation/formReducer";
import { storeReview } from "../../../utils/http/reviewService";

export default function PopupAvis({ setIsPopupOpen }) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_VALUES);

  useEffect(() => {
      dispatch({ type: FORM_ACTIONS.RESET });
  }, []);

  const handleRatingChange = (_, newValue) => {
    dispatch({ type: FORM_ACTIONS.SET_RATING, payload: { id: "rating", value: newValue } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.rating || state.rating < 1 || state.rating > 5) {
      dispatch({ type: FORM_ACTIONS.SET_ERROR, message: "La note doit être entre 1 et 5." });
      return;
    }
    if (!state.comment.trim()) {
      dispatch({ type: FORM_ACTIONS.SET_ERROR, message: "Le commentaire ne peut pas être vide." });
      return;
    }
    if (!state.location.trim()) {
      dispatch({ type: FORM_ACTIONS.SET_ERROR, message: "Veuillez entrer votre localisation." });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("role", state.role);
      formData.append("comment", state.comment);
      formData.append("rating", state.rating);
      formData.append("location", state.location);
      if (state.image) {
        formData.append("image_url", state.image);
      }

      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      await storeReview(formData);

      dispatch({ type: FORM_ACTIONS.SET_SUCCESS, message: "Votre avis a été soumis avec succès !" });
      dispatch({ type: FORM_ACTIONS.RESET });
    } catch (error) {
      dispatch({ type: FORM_ACTIONS.SET_ERROR, message: "Erreur lors de l'envoi de votre avis." });
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
          Laisser un avis
        </h3>
        <p className={classes.popup_question}>
          Comment évaluez-vous notre service ?
        </p>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ padding: 1, marginBottom: 2 }}>
          <Rating
            name="half-rating"
            value={state.rating}
            precision={0.25}
            onChange={handleRatingChange}
            size="large"
            className={classes.stars}
          />
          <Box fontSize="18px">
            <p>({state.rating})</p>
          </Box>
        </Box>
        <form className={classes.review_form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom..."
            className={classes.input}
            value={state.name}
            onChange={(e) => dispatch({ type: FORM_ACTIONS.SET_INPUT, payload: { id: "name", value: e.target.value } })}
          />
          <input
            type="text"
            placeholder="Votre rôle..."
            className={classes.input}
            value={state.role}
            onChange={(e) => dispatch({ type: FORM_ACTIONS.SET_INPUT, payload: { id: "role", value: e.target.value } })}
          />
          <textarea
            placeholder="Écrire un avis..."
            className={classes.textarea}
            value={state.comment}
            onChange={(e) => dispatch({ type: FORM_ACTIONS.SET_INPUT, payload: { id: "comment", value: e.target.value } })}
          ></textarea>
          <input
            type="file"
            accept="image/*"
            className={classes.file_input}
            onChange={(e) => dispatch({ type: FORM_ACTIONS.SET_IMAGE, payload: { id: "image", value: e.target.files[0] } })}
          />
          <input
            type="text"
            placeholder="Votre siteweb ou linkedin or portfolio..."
            className={classes.input}
            value={state.location}
            onChange={(e) => dispatch({ type: FORM_ACTIONS.SET_INPUT, payload: { id: "location", value: e.target.value } })}
          />
          <button type="submit" className={classes.submit_button}>
            Soumettre l'avis
          </button>
        </form>
        {state.errorMessage && <p className={classes.error}>{state.errorMessage}</p>}
        {state.successMessage && <p className={classes.success}>{state.successMessage}</p>}
      </div>
    </div>
  );
}
