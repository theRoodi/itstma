import React, { useEffect, useState } from "react";

function TelegramMiniApp() {
  const [user, setUser] = useState(null); // Храним информацию о пользователе

  useEffect(() => {
    if (window.TelegramWebApp) {
      window.TelegramWebApp.ready();

      // Получаем и сохраняем информацию о пользователе
      const userData = window.TelegramWebApp.initDataUnsafe;
      console.log(userData);
      setUser(userData); // Настраиваем состояние пользователя
    }
  }, []);

  const sendDataToTelegram = () => {
    if (window.TelegramWebApp) {
      window.TelegramWebApp.sendData("Hello, Telegram!");
    }
  };

  const showAlert = () => {
    alert("This is an alert from your Mini App!");
  };

  const navigateToAnotherPage = () => {
    // Здесь можно добавить логику для навигации (например, использование React Router)
    console.log("Navigating to another page...");
  };

  const sendUserDataToTelegram = () => {
    if (user) {
      const userInfo = `User ID: ${user.user.id}, Username: ${user.user.username}`;
      window.TelegramWebApp.sendData(userInfo);
    } else {
      alert("User information is not available!");
    }
  };

  return (
    <div>
      <h1>Welcome to my Telegram Mini App!</h1>
      {user && (
        <div>
          <p>User ID: {user.user.id}</p>
          <p>Username: {user.user.username}</p>
        </div>
      )}
      <button onClick={sendDataToTelegram}>Send Data to Telegram</button>
      <button onClick={showAlert}>Show Alert</button>
      <button onClick={sendUserDataToTelegram}>Send User Data to Telegram</button>
      <button onClick={navigateToAnotherPage}>Go to Another Page</button>
    </div>
  );
}

export default TelegramMiniApp;