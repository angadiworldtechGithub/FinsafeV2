// const createOneTimeSelectHandler = (e) => {
//   if (e.target.value !== "") {
//     console.log(e.target.value);
//     setDocumentOptions([
//       ...documentOptions.filter((option) => {
//         return (
//           !companyDetails.documents.map((doc) => doc.name).includes(option) &&
//           option !== e.target.value
//         );
//       }),
//     ]);
//     companyDetails.documents.push({ name: e.target.value });
//     setCompanyDetails((companyDetails) => ({
//       ...companyDetails,
//       documents: [...companyDetails.documents],
//     }));
//   }
// };
