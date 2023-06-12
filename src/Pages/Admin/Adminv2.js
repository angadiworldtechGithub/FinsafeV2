import "./Adminv2.css"
export default function Adminv2() {

    return (
      <div>
        <h1>User Profile</h1>
        <ul class="flex-container">
          <li class="flex-item">
            <input
              style={{ background: "#e6e6e6" }}
              className="input-admin"
              type="text"
              placeholder="User Name"
            ></input>
          </li>
          <li class="flex-item">Email :</li>
        </ul>
      </div>
    );
}