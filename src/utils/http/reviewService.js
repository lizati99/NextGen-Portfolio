import axios from "axios";
import { API_BASE_URL, ApiRoutes } from "../../apis/apiRoutes";

const apiClient = axios.create({
    baseURL: ApiRoutes.baseURL,
    headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
    }
});

console.log(API_BASE_URL);

export const fetchReviews = async () => {
    try {
        const response = await apiClient.get(ApiRoutes.reviews());
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(
                error.response.data.message ||
                "Erreur lors de la récupération des reviews"
            );
        } else if (error.request) {
            throw new Error("Aucune réponse du serveur");
        } else {
            throw new Error("Erreur dans la configuration de la requête");
        }
    }
};

export const storeReview = async (data) => {
    try {
        const response = await apiClient.post(ApiRoutes.reviews(), data);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(
                error.response.data.message || "Error while creating the review."
            );
        } else if (error.request) {
            throw new Error(
                "No response from the server. Please try again later."
            );
        } else {
            throw new Error("Error in the request configuration.");
        }
    }
}