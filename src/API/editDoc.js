import {
  collection,
  query,
  getDocs,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase";

export const editData = (collectionName, filter, newPayload) => {
  const whereList = Object.keys(filter).map((key) => {
    return where(key, "==", filter[key]);
  });
  return new Promise((resolve, reject) => {
    getDocs(query(collection(firestore, collectionName), ...whereList)).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          updateDoc(doc, newPayload).then(() => {
            console.log("Updated");
          });
        });
        resolve(true);
      }
    );
  });
};
