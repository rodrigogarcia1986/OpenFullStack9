import axios from "axios";
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";
//import { setNotification } from "../reducers/notificationReducer";

const baseURL: string = 'http://localhost:3001/api/diaries'

export const getAll = async () => {
    const { data } = await axios.get<NonSensitiveDiaryEntry[]>(baseURL);
    return data;
}

export const addEntry = async (object: NewDiaryEntry) => {

    try {
    const { data } = await axios.post<DiaryEntry>(baseURL, object);
    const { comment: hiddenComment, ...formattedData} = data;
    return formattedData as NonSensitiveDiaryEntry;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log(error.status)
            console.error(error.response?.data)

        } else {
            console.error(error);
        }
    }
}