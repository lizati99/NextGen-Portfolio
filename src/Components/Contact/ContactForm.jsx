import { useReducer } from "react";
import { formReducer, INITIAL_VALUES, FORM_ACTIONS } from "../../utils/validation/formReducer";
import { storeMessageMail } from "../../utils/http/contactService";
import classes from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./../../i18n";

export default function ContactForm() {
    const { t } = useTranslation();
    const [state, dispatch] = useReducer(formReducer, INITIAL_VALUES);

    const handleChange = (e) => {
        dispatch({
            type: FORM_ACTIONS.SET_INPUT,
            payload: { id: e.target.name, value: e.target.value },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!state.name || !state.email || !state.message) {
            dispatch({
                type: FORM_ACTIONS.SET_ERROR,
                message: "Please fill in all fields!",
            });
            return;
        }

        try {
            const response = await storeMessageMail({
                name: state.name,
                email: state.email,
                message: state.message,
                subject: state.subject,
            });

            dispatch({
                type: FORM_ACTIONS.SET_SUCCESS,
                message: "Message sent successfully!",
            });

            dispatch({ type: FORM_ACTIONS.RESET });
        } catch (error) {
            dispatch({
                type: FORM_ACTIONS.SET_ERROR,
                message: "An error occurred while sending the message!",
            });
        }
    };

    return (
        <form className={classes.contact_form} onSubmit={handleSubmit}>
            <div className={classes.form_group}>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder={t("contactPage.contactForm.name")}
                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder={t("contactPage.contactForm.email")}
                />
            </div>

            <input
                type="text"
                name="subject"
                value={state.subject}
                onChange={handleChange}
                placeholder={t("contactPage.contactForm.subject")}
            />
            <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
                cols="30"
                rows="5"
                placeholder={t("contactPage.contactForm.message")}
            ></textarea>

            {state.errorMessage && (
                <p className={classes.error_message}>{state.errorMessage}</p>
            )}
            {state.successMessage && (
                <p className={classes.success_message}>{state.successMessage}</p>
            )}

            <div className={classes.button_group}>
                <button type="submit" className={classes.send_button}>
                    {t("contactPage.contactForm.submit")}{" "}
                    <FontAwesomeIcon icon={faPaperPlane} size="md" />
                </button>
            </div>
        </form>
    );
}
