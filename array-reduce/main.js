const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((a, b) => a + b);
console.log(sum);

const product = numbers.reduce((a, b) => a * b);
console.log(product);

const balance = account.reduce((a, b, c, account) => {
  if (account.length - 1 === c) {
    if (b.type === 'withdrawal') {
      return a.amount - b.amount;
    } else { return a.amount + b.amount; }
  } else if (b.type === 'withdrawal') {
    b.amount = a.amount - b.amount;
    return b;
  } else {
    b.amount += a.amount;
    return b;
  }
});
console.log(balance);
const composite = traits.reduce((a, b) => { return Object.assign(a, b); });
console.log(composite);
