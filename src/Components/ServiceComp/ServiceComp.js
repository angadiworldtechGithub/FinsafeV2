import "./ServiceComp.css";

export default function ServiceComp({
  title,
  description,
  bulletPoints,
  inputList,
}) {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-child">
          <h3 className="color_white" style={{ fontWeight: "600" }}>
            <center>
              <b>{title}</b>
            </center>
          </h3>

          <p className="color_white">{description}</p>

          <p className="color_white">
            <ul className="service_list">
              {bulletPoints.map((point) => {
                return (
                  <li>
                    <i className="fa-solid fa-circle-check"></i> &nbsp;{" "}
                    {point.text}
                  </li>
                );
              })}
            </ul>
          </p>
        </div>

        <div className="flex-child1">
          <h1>{title}</h1>
          <form action="/">
            {inputList.map((inputObj) => {
              if (inputObj.elementType === "select") {
                return (
                  <select
                    className="service_input"
                    type={inputObj.type}
                    id={inputObj.id}
                    name={inputObj.name}
                    placeholder={inputObj.placeholder}
                  >
                    <option value={inputObj.placeholder}>
                      {inputObj.placeholder}
                    </option>
                    {inputObj.optionList.map((option) => (
                      <option value={option.value}>{option.text}</option>
                    ))}
                  </select>
                );
              } else {
                return (
                  <input
                    className="service_input"
                    type={inputObj.type}
                    id={inputObj.id}
                    name={inputObj.name}
                    placeholder={inputObj.placeholder}
                  ></input>
                );
              }
            })}
            <label class="service_label">
              <input type="checkbox" className="checkbox" required />I authorize
              Finsafe and its representative to contact me with updates and
              notifications via Email, SMS, WhatsApp,and call.
            </label>
            <input
              className="service_submit"
              type="submit"
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
