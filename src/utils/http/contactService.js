import axios from "axios";
import { ApiRoutes } from "../../apis/apiRoutes";

const apiClient = axios.create({
    baseURL: ApiRoutes.baseURL,
    headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
    }
});

export const storeMessageMail = async (data) => {
    try {
        const response = await apiClient.post(ApiRoutes.contactMail(), data);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(
                error.response.data.message || "Error while creating the message."
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