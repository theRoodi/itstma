import React, { useEffect } from "react";

function TelegramMiniApp() {
  useEffect(() => {
    if (window.TelegramWebApp) {
      window.TelegramWebApp.ready();
      // Можно получить информацию о пользователе
      const user = window.TelegramWebApp.initDataUnsafe;
      console.log(user);
    }
  }, []);

  const sendDataToTelegram = () => {
    if (window.TelegramWebApp) {
      window.TelegramWebApp.sendData("Hello, Telegram!");
    }
  };

  return (
    <div>
      <h1>Welcome to my Telegram Mini App!</h1>
      <button onClick={sendDataToTelegram}>Send Data to Telegram</button>
    </div>
  );
}

export default TelegramMiniApp;
