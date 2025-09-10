// Создаёт инстанс форматтера относительного времени с локалью "ru-RU"
const rtf = new Intl.RelativeTimeFormat("ru-RU", { numeric: "auto" });

// Форматирует число и единицу времени, убирает предлог "через", если он есть
// value - числовое значение времени (например, 3)
// unit - единица времени ("month", "day" и т.д.)
// Возвращает строку с корректным склонением без "через"
function formatWithoutPrefix(value, unit) {
  const parts = rtf.formatToParts(value, unit);
  if (parts[0] && parts[0].type === "literal" && parts[0].value === "через ") {
    return parts
      .slice(1)
      .map((part) => part.value)
      .join("");
  }
  return rtf.format(value, unit);
}

// Возвращает объект Date для следующего 1 января
// currentDate - текущая дата
function getNextNewYearDate(currentDate) {
  const year = currentDate.getFullYear();
  return new Date(year + 1, 0, 1);
}

// Вычисляет количество полных месяцев между fromDate и toDate
// fromDate, toDate - объекты Date
// Возвращает число месяцев (например, 3)
function calculateMonthsDifference(fromDate, toDate) {
  let months =
    toDate.getMonth() -
    fromDate.getMonth() +
    12 * (toDate.getFullYear() - fromDate.getFullYear());
  const tempDate = new Date(fromDate);
  tempDate.setMonth(tempDate.getMonth() + months);
  if (tempDate > toDate) {
    months--;
  }
  return months;
}

// Вычисляет дни, часы, минуты и секунды из разницы времени в миллисекундах
// diffMillis - число миллисекунд
// Возвращает объект { days, hours, minutes, seconds }
function calculateTimeComponents(diffMillis) {
  const days = Math.floor(diffMillis / (1000 * 60 * 60 * 24));
  diffMillis -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(diffMillis / (1000 * 60 * 60));
  diffMillis -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diffMillis / (1000 * 60));
  diffMillis -= minutes * 1000 * 60;

  const seconds = Math.floor(diffMillis / 1000);

  return { days, hours, minutes, seconds };
}

// Форматирует оставшееся время (месяцы, дни, часы, минуты, секунды)
// Возвращает строку с перечислением по-русски, без предлогов
function formatTimeRemaining(months, days, hours, minutes, seconds) {
  return [
    formatWithoutPrefix(months, "month"),
    formatWithoutPrefix(days, "day"),
    formatWithoutPrefix(hours, "hour"),
    formatWithoutPrefix(minutes, "minute"),
    formatWithoutPrefix(seconds, "second"),
  ].join(", ");
}

// Обновляет текстовое содержимое элемента с id "countdown"
function updateCountdownDisplay(text) {
  document.getElementById("countdown").textContent = text;
}

// Основная функция для обновления таймера обратного отсчёта
// Вычисляет сколько осталось до Нового Года и обновляет DOM
function updateCountdown() {
  const now = new Date();
  const newYear = getNextNewYearDate(now);
  let diff = newYear - now;

  if (diff <= 0) {
    updateCountdownDisplay("С Новым Годом!");
    clearInterval(timer);
    return;
  }

  const months = calculateMonthsDifference(now, newYear);
  const tempDate = new Date(now);
  tempDate.setMonth(tempDate.getMonth() + months);

  diff = newYear - tempDate;
  const { days, hours, minutes, seconds } = calculateTimeComponents(diff);

  const formatted = formatTimeRemaining(months, days, hours, minutes, seconds);
  updateCountdownDisplay(formatted);
}

// Запуск таймера при загрузке и установка интервала обновления каждую секунду
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
