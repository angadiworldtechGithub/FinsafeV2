// read document from firebase
import {
  collection,
  query,
  getDocs as getDocs_,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase";

export const getAllDocs = (collectionName) => {
  return new Promise((resolve, reject) => {
    getDocs_(query(collection(firestore, collectionName)))
      .then((querySnapshot) => {
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data() });
        });
        resolve(dataList);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const getDocs = (collectionName, filter) => {
  const whereList = Object.keys(filter).map((key) => {
    return where(key, "==", filter[key]);
  });
  return new Promise((resolve, reject) => {
    getDocs_(query(collection(firestore, collectionName), ...whereList))
      .then((querySnapshot) => {
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data() });
        });
        resolve(dataList);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const docExist = (collectionName, filter) => {
  const whereList = Object.keys(filter).map((key) => {
    return where(key, "==", filter[key]);
  });
  console.log("Check if document exists");
  return new Promise((resolve, reject) => {
    getDocs_(query(collection(firestore, collectionName), ...whereList))
      .then((querySnapshot) => {
        console.log(querySnapshot);
        resolve(Boolean(querySnapshot.length));
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
