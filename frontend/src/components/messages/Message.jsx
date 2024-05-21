import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const forMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = forMe ? "chat-end" : "chat-start";
  const profilePic = forMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = forMe ? "bg-red-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="TAilwind css chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className={" chat-footer opacity-50 text-xs gap-1 items-center"}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

/* const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="TAilwind css chat bubble component"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>
        What kind of nonsense is this
      </div>
      <div className={" chat-footer opacity-50 text-xs gap-1 items-center"}>
        12:42
      </div>
    </div>
  );
};
 */
