// add function to create a doc from firebase
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export const addData = (collectionName, payload, successCallback) => {
  const collection_ = collection(firestore, collectionName);
  const dateTimeStamp = new Date(Date.now());
  console.log(dateTimeStamp);
  return new Promise((resolve, reject) => {
    addDoc(collection_, { ...payload, dateCreated: dateTimeStamp })
      .then((docRef) => {
        console.log(docRef);
        if (successCallback) successCallback(docRef);
        resolve(docRef);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
