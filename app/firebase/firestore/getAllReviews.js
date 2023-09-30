import firebase_app from "../config";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getAllDouments(CollectionName) {

    let qry = query(collection(db, CollectionName));

    let result = null;
    let error = null;

    try {
        result = await getDocs(qry);
    } catch (e) {
        error = e;
    }

    return { result, error };
}