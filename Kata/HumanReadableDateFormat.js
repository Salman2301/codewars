function formatDuration(sec) {
  if (!sec) return "now";
  let secs, mins, hours, days, years;
  secs = sec % 60;
  if (sec >= 60) mins = Math.floor(sec / 60) % 60;
  if (sec >= 60 * 60) hours = Math.floor(sec / (60 * 60)) % 24;
  if (sec >= 60 * 60 * 24) days = Math.floor(sec / (60 * 60 * 24)) % 365;
  if (sec >= 60 * 60 * 24 * 365) years = Math.floor(sec / (60 * 60 * 24 * 365));

  secs = plural("second", secs);
  mins = plural("minute", mins);
  hours = plural("hour", hours);
  days = plural("day", days);
  years = plural("year", years);

  let format = [years, days, hours, mins, secs]; // create an array
  format = format.filter(el => el); // remove empty string from array
  return format.length > 1 ? sentence(format) : format[0];
}

sentence = array => {
  lastArr = array.pop();
  return array.join(", ") + " and " + lastArr;
};

plural = (word, num) => (num ? num + " " + (num > 1 ? word + "s" : word) : "");

console.log(formatDuration(123421354));
