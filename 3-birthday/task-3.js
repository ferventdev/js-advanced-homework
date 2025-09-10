const isOlderOrEqualThan = (age) => (birthday) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return (
    new Date(birthday).setHours(0, 0, 0, 0) >=
    now.setFullYear(now.getFullYear() - age)
  );
};

const isOlderOrEqualThan14 = isOlderOrEqualThan(14);

// usage examples (today is "2025-09-10"):
console.log(isOlderOrEqualThan14("2011-09-08"));
console.log(isOlderOrEqualThan14("2011-09-09"));
console.log(isOlderOrEqualThan14("2011-09-10"));
console.log(isOlderOrEqualThan14("2011-09-11"));
