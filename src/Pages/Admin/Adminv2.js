import "./Adminv2.css";
export default function Adminv2() {
  return (
    <div>
      <h1>User Profile</h1>

      <ul class="admin-container">
        <li class="flex-item">
          <label>User Name:</label>
          <input
            className="input-admin"
            type="text"
            placeholder="User Name"
          ></input>
        </li>
        <li class="flex-item">
          <label>Email:</label>
          <input
            className="input-admin"
            type="Email"
            placeholder="User Email"
          ></input>
        </li>
        <li class="flex-item">
          <label>Phone Number:</label>
          <input
            className="input-admin"
            type="phonenumber"
            placeholder="Phone Number"
          ></input>
        </li>
        <li class="flex-item">
          <label>Date:</label>
          <br></br>
          <input className="input-admin" type="Date" placeholder="Date"></input>
        </li>
      </ul>

      <ul class="admin-container">
        <li class="flex-item">
          <label>Director 1</label>
          <form>
            <label>Director Name :</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Name"
              value=""
            ></input>
            <label>Director Email:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Email"
              value=""
            ></input>
            <label>PhoneNumber:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Phone Number"
              value=""
            ></input>
            <div>
              <label>Pan Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Aadhar Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Director Photo :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <label>Address</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Address"
              value=""
            ></input>
          </form>
        </li>

        <li class="flex-item">
          <label>Director 2</label>
          <form>
            <label>Director Name :</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Name"
              value=""
            ></input>
            <label>Director Email:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Email"
              value=""
            ></input>
            <label>PhoneNumber:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Phone Number"
              value=""
            ></input>
            <div>
              <label>Pan Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Aadhar Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Director Photo :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <label>Address</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Address"
              value=""
            ></input>
          </form>
        </li>

        <li class="flex-item">
          <label>Director 3</label>
          <form>
            <label>Director Name :</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Name"
              value=""
            ></input>
            <label>Director Email:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Director Email"
              value=""
            ></input>
            <label>PhoneNumber:</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Phone Number"
              value=""
            ></input>
            <div>
              <label>Pan Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Aadhar Card :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <div>
              <label>Director Photo :</label>
              <input
                className="input-admin"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              ></input>
            </div>
            <label>Address</label>
            <input
              className="input-admin"
              type="text"
              placeholder="Address"
              value=""
            ></input>
          </form>
        </li>
      </ul>
    </div>
  );
}
