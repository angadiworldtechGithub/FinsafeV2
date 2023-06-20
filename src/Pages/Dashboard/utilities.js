import { uploadDocuments } from "../../API/uploadFiles";

export const addDownloadUrlToDocuments = async (documents) => {
  const documentsToSave = documents.filter(
    (doc) => Boolean(doc.file) || Boolean(doc.fileDownloadUrl)
  );

  const documentsToUpload = documentsToSave
    .map((item, index) => [item.file, index])
    .filter((o) => Boolean(o[0]));

  if (documentsToUpload.length) {
    const downloadUrls = await uploadDocuments(
      documentsToUpload.map((item) => item[0])
    );

    documentsToUpload.forEach((item, index) => {
      delete documentsToSave[item[1]].file;
      documentsToSave[item[1]] = {
        ...documentsToSave[index],
        fileDownloadUrl: downloadUrls[index],
        dateCreated: new Date(Date.now()),
      };
    });
    return [...documentsToSave];
  } else {
    return documentsToSave;
  }
};

export const getAuthFilter = (auth) => {
  if (auth.email) {
    return { "email.value": auth.email };
  } else if (auth.mobilenumber) {
    return { "mobilnumber.value": auth.mobilenumber };
  }
};
