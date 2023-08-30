import { useSelector } from "react-redux";
import { NotificationState } from "../reducers/notificationReducer";

const Notification = () => {
    const notification = useSelector((state: NotificationState): NotificationState => state)
  
    if (!notification.notification) {
      return null; // Não renderiza nada se não houver notificação
    }
  
    return (
      <div>
        Notificação: {notification.notification}
      </div>
    );
  };
  
  export default Notification;