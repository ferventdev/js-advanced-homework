const initialArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const deduplicate = (arr) =>
  Array.from(new Map(arr.map(({ id, name }) => [id, { id, name }])).values());

console.log(deduplicate(initialArr));
