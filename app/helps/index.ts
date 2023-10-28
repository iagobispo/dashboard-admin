export function getLast12MonthNamesInPortuguese() {
  const monthNamesInPortuguese = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const monthsInPortuguese = [];

  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    monthsInPortuguese.push(monthNamesInPortuguese[monthIndex]);
  }

  return monthsInPortuguese;
}
