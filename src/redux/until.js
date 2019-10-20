export const extractDateandTime = dateTime => {
  const dateFromSystem = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [date, time] = dateTime.split("T");
  const [hour, min, sec] = time.split(":");
  const [year, month, day] = date.split("-");
  if (day === dateFromSystem.getDate().toString()) {
    return "Today";
  } else {
    return `${months[month - 1]} ${day}, ${year}`;
  }
};
