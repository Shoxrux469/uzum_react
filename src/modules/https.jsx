import { useMutation } from "react-query";
import axios from "axios";

const base_url = "http://localhost:3001";

export function useGetData() {
    return useMutation(async (path) => {
        try {
            const res = await axios.get(base_url + path);
            return res.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    });
}

export function usePostData() {
    return useMutation(async ({ path, body }) => {
        try {
            const res = await axios.post(base_url + path, body);
            return res.data;
        } catch (error) {
            console.error("Error posting data:", error);
            throw error;
        }
    });
}

export function useDeleteData() {
    return useMutation(async (path) => {
        try {
            const res = await axios.delete(base_url + path);
            return res.data;
        } catch (error) {
            console.error("Error deleting data:", error);
            throw error;
        }
    });
}

export function useEditData() {
    return useMutation(async ({ path, body }) => {
        try {
            const res = await axios.patch(base_url + path, body);
            return res.data;
        } catch (error) {
            console.error("Error editing data:", error);
            throw error;
        }
    });
}
