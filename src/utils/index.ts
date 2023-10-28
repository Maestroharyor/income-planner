export function getTimeOfDay(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 4 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    return "Evening";
  } else {
    return "Night";
  }
}

export function getRandomDateBetweenYears(
  startYear: number,
  endYear: number
): Date {
  const startDate = new Date(startYear, 0, 1); // January 1st of the start year
  const endDate = new Date(endYear, 11, 31); // December 31st of the end year

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  return randomDate;
}
