import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { NOTIF_COLL_NAME, USER_NOTIF_COLL_NAME } from "../../constants";
import { addData } from "../../API/createDoc";
import { getAllDocs } from "../../API/readDoc";
import { showLoading } from "react-global-loading";
import { sortDateList } from "../utilities";
import "./AdminNotification.css";

export default function AdminNotification() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  useState(() => {
    (async () => {
      showLoading(true);
      const notifications = await getAllDocs(NOTIF_COLL_NAME);
      notifications.sort(sortDateList);
      setNotifications(
        notifications.map((notification) => {
          return { ...notification, readBy: [] };
        })
      );
      showLoading(false);
    })();
  }, []);
  const sendHandler = async () => {
    setSending(true);
    await addData(NOTIF_COLL_NAME, { message });
    notifications.push({ message, dateCreated: "Right Now...", readBy: [] });
    alert("Notification Sent");
    setMessage("");
    setSending(false);
  };
  return (
    <div>
      <div
        style={{ margin: "0 auto", width: "fit-content", textAlign: "center" }}
      >
        <div style={{fontSize:"30px",fontWeight:"700",padding:"10px 10px 10px 10px", color:"#923300"}}>Add Notification</div>
        <textarea  style={{fontSize:"20px",fontWeight:"400",height:"120px",width:"350px",border:"3px solid #160057"}}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div  className="notifications" >
          <button  style={{fontSize:"20px",fontWeight:"700",color:"#fff",margin:"10px 10px 10px 10px",padding:"5px 5px 5px 5px",borderRadius:"10px",backgroundColor:"#072f5f"}} onClick={sendHandler}>
            {sending ? (
              <AiOutlineLoading className="loading" />
            ) : (
              "Send Notification"
            )}
          </button>
        </div>
      </div>
      <div>
        <div style={{fontSize:"30px",fontWeight:"700",padding:"10px 10px 10px 10px", color:"#923300"}}>Notification History</div>
        <table style={{fontSize:"20px",fontWeight:"700",border:"3px solid #000"}} >
          <thead>
            <tr>
              <th>Date Posted</th>
              <th>Message</th>
              <th>Read By</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => {
              return (
                <tr>
                  <td>{notification.dateCreated.toDate().toString()}</td>
                  <td>{notification.message}</td>
                  <td>
                    <ul>
                      {notification.readBy.length
                        ? notification.readBy.map((user) => <li>{user}</li>)
                        : "No One"}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
