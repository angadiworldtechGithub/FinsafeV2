// read document from firebase
import {
  collection,
  collectionGroup,
  query,
  getDocs as getDocs_,
  getDoc,
  where,
  doc,
} from "firebase/firestore";
import { firestore } from "../firebase";

// add rate limiters!

export const getAllDocs = (
  collectionName,
  limit,
  isCollectionGroup = false
) => {
  const queryArgs = [];
  if (limit) {
    queryArgs.push(limit(limit));
  }
  const collection_ = isCollectionGroup
    ? collectionGroup(firestore, collectionName)
    : collection(firestore, collectionName);
  return new Promise((resolve, reject) => {
    getDocs_(query(collection_, ...queryArgs))
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

export const getDocById = (collectionName, id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(collection(firestore, collectionName), id))
      .then((docSnapshot) => {
        resolve({ ...docSnapshot.data(), id: docSnapshot.id });
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
