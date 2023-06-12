import "./Adminv2.css"
export default function Adminv2() {

    return (
      <div>
        <h1>User Profile</h1>
        <ul class="flex-container">
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
        </ul>
      </div>
    );
}