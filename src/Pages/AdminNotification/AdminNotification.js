import { useContext, useEffect, useState } from "react";
import {
  NOTIF_COLL_NAME,
  ADMIN_EMAILS,
  USER_NOTIF_COLL_NAME,
} from "../../constants";
import { addData } from "../../API/createDoc";
import { getAllDocs } from "../../API/readDoc";
import { showLoading } from "react-global-loading";
import { sortDateList } from "../utilities";
import { AuthContext } from "../../Context/AuthContext";
import "./AdminNotification.css";
import LoadingButton from "../../Components/LoadingButton/LoadingButton";

export default function AdminNotification() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      (async () => {
        showLoading(true);
        const notifications = await getAllDocs(NOTIF_COLL_NAME);
        const readNotificationsMap = (
          await getAllDocs(USER_NOTIF_COLL_NAME)
        ).reduce((map, readNotification) => {
          if (map[readNotification.notifId]) {
            map[readNotification.notifId].push(readNotification.identifier);
          } else {
            map[readNotification.notifId] = [];
          }
          return map;
        }, {});
        notifications.sort(sortDateList);
        setNotifications(
          notifications.map((notification) => {
            return {
              ...notification,
              readBy: readNotificationsMap[notification.id] ?? [],
            };
          })
        );
        showLoading(false);
      })();
    }
  }, [auth]);

  const sendHandler = async () => {
    if (message !== "") {
      setSending(true);
      await addData(NOTIF_COLL_NAME, { message });
      notifications.push({ message, dateCreated: "Right Now...", readBy: [] });
      alert("Notification Sent");
      setMessage("");
      setSending(false);
    } else {
      alert("No message");
    }
  };

  if (!auth || (auth && !ADMIN_EMAILS.includes(auth.email))) {
    return (
      <div className="dashboard_container">
        <h1>Admin Services</h1>
        <h1>Please login with a admin account to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ margin: "0 auto", width: "fit-content", textAlign: "center" }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: "700",
            padding: "10px 10px 10px 10px",
            color: "#923300",
          }}
        >
          Add Notification
        </div>
        <textarea
          style={{
            fontSize: "20px",
            fontWeight: "400",
            height: "120px",
            width: "350px",
            border: "2px solid #160057",
          }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="notifications">
          <LoadingButton
            style={{
              fontSize: "20px",
              fontWeight: "600",
              margin: "10px",
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: "#072f5f",
              color: "#fff",
            }}
            loading={sending}
            onClick={sendHandler}
          >
            Send Notification
          </LoadingButton>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "700",
            padding: "10px 10px 10px 10px",
            color: "#923300",
          }}
        >
          Notification History
        </div>
        <table
          style={{
            fontSize: "20px",
            fontWeight: "700",
            border: "3px solid #000",
          }}
        >
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
