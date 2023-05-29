import React from "react";
import { FileDrop } from "react-file-drop";
import "./FileUpload.css";
import shortid from "shortid";
import { AiOutlineLoading } from "react-icons/ai";

export default function FileUpload({
  onDrop,
  onUpload,
  filePreviews,
  loading,
}) {
  return (
    <div className="file_drop_box">
      <FileDrop onDrop={onDrop}>
        {!filePreviews.length
          ? "Upload documents here"
          : "Check list before uploading docs."}
        <ul>
          {Boolean(filePreviews.length) ? (
            filePreviews.map((filePrev) => (
              <li key={shortid.generate()}>
                Name - {filePrev.name}, Size -{" "}
                {Math.round(filePrev.size / 1024)} KB
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </FileDrop>
      <button className="upload_button" onClick={onUpload}>
        {loading ? <AiOutlineLoading className="loading" /> : "Upload"}
      </button>
    </div>
  );
}
