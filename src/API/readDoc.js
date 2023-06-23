// read document from firebase
import {
  collection,
  query,
  getDocs as getDocs_,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase";

// add rate limiters!

export const getAllDocs = (collectionName, limit) => {
  const queryArgs = [];
  if (limit) {
    queryArgs.push(limit(limit));
  }
  return new Promise((resolve, reject) => {
    getDocs_(query(collection(firestore, collectionName), ...queryArgs))
      .then((querySnapshot) => {
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data(), id: doc.id });
        });
        resolve(dataList);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const getDocs = (collectionName, filter, limit) => {
  const queryArgs = [];
  Object.keys(filter).forEach((key) => {
    queryArgs.push(where(key, "==", filter[key]));
  });
  if (limit) {
    queryArgs.push(limit(limit));
  }
  return new Promise((resolve, reject) => {
    getDocs_(query(collection(firestore, collectionName), ...queryArgs))
      .then((querySnapshot) => {
        const dataList = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data(), id: doc.id });
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
