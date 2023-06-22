import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { NOTIF_COLL_NAME, USER_NOTIF_COLL_NAME } from "../../constants";
import { addData } from "../../API/createDoc";
import { getAllDocs } from "../../API/readDoc";
import { showLoading } from "react-global-loading";
import { sortDateList } from "../utilities";

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
        <div>Add Notification</div>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div>
          <button onClick={sendHandler}>
            {sending ? (
              <AiOutlineLoading className="loading" />
            ) : (
              "Send Notification"
            )}
          </button>
        </div>
      </div>
      <div>
        <div>Notification History</div>
        <table>
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
