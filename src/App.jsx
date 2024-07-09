//Імпортуємо файли з папки components та data в Арр.jsx

import Description from "./components/Description/Description";
import "./App.css";
import { useEffect, useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

// Створюємо головний компонент App

const App = () => {
  // Використовуємо useState для створення стану збережених відгуків
  // Початкове значення зчитується з  або дорівнює нулям
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedbackKey"));
    return savedData || { good: 0, neutral: 0, bad: 0 };
  });

  // Використовуємо useEffect для збереження стану у localStorage при зміні
  useEffect(() => {
    window.localStorage.setItem("feedbackKey", JSON.stringify(feedback));
  }, [feedback]);

  // Функція для оновлення відгуків при натисканні на кнопоку
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Функція для скидання відгуків до початкового стану
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Обчислюємо загальну кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Обчислюємо відсоток позитивних відгуків
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  //Створюємо розмітку елементів
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
