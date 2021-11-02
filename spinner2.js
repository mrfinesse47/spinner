const spinChar = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];

for (let i = 0; i <= 8; i++) {
  setTimeout(() => {
    process.stdout.write(spinChar[i]);
  }, 100 + i * 200);
}
