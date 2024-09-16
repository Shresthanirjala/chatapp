import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avtar">
        <div className="w-10 rounded-full">
          <img src={"https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?size=626&ext=jpg&ga=GA1.1.158431014.1719224599&semt=ais_hybrid"} alt="tailnd css chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hii whats upp</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
    </div>
  );
};

export default Message;
