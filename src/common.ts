export const getRandomElement = (elements: any[]) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomElement = elements[randomIndex];
  console.log({ elements, randomIndex, randomElement });
  console.log(elements.slice(0, randomIndex));
  console.log(elements.slice(randomIndex + 1));
  return [
    randomElement,
    [...elements.slice(0, randomIndex), ...elements.slice(randomIndex + 1)],
  ];
};
