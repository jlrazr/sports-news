function randomize(array, max) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, max);
}

export default randomize;
