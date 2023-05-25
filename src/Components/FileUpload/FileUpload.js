import React from "react";
import { FileDrop } from "react-file-drop";
import "./FileUpload.css";
import shortid from "shortid";

export default function FileUpload({ onDrop, onUpload, filePreviews }) {
  return (
    <div className="file_drop_box">
      <FileDrop
        // onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
        // onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
        // onFrameDrop={(event) => console.log("onFrameDrop", event)}
        // onDragOver={(event) => console.log("onDragOver", event)}
        // onDragLeave={(event) => console.log("onDragLeave", event)}
        onDrop={onDrop}
      >
        Upload documents here.
        <ul>
          {Boolean(filePreviews.length) ? (
            filePreviews.map((filePrev) => (
              <li key={shortid.generate()}>
                Name - {filePrev.name}, Size - {filePrev.size}
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </FileDrop>
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}
