//Task 1.1
const myNumbers = [1, 2, 3, 4];
const newNumbers= myNumbers.filter( num => (num % 2 != 0) ).map (num => num * 2);
console.log(newNumbers);
//1.2
const monday = [{
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [{
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const durationsHours = monday.concat(tuesday).map(duration => duration.duration / 60);
const filterDurations = durationsHours.filter(duration => duration > 2);
const money = filterDurations.reduce((prev, curr) => prev + curr, 0) * 20;
const salary='€' + money;
console.log(salary);