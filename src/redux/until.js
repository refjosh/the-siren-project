export const extractDate = dateTime => {
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
  const [date] = dateTime.split("T");
  const [year, month, day] = date.split("-");
  if (day === dateFromSystem.getDate().toString()) {
    return "Today";
  } else {
    return `${months[month - 1]} ${day}, ${year}`;
  }
};

export const extractTime = dateTime => {
  const time = dateTime.split("T")[1];
  const [hour, min] = time.split(":");
  if (hour > 12) {
    return `${hour - 12}:${min} PM`;
  } else if (hour === "00") {
    return `${hour}:${min} AM`;
  } else if (hour === 12) {
    return `${hour}:${min} PM`;
  } else {
    return `${hour}:${min} AM`;
  }
};
