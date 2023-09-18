// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300

const bill = 275;

const tip = bill * (15 / 100);
const tip2 = bill * (20 / 100);

bill >= 50 && bill <= 300
    ? console.log(`tip is ${tip}`)
    : console.log(`tip is ${tip2}`);

const bill1 = 40;

const tip3 = bill1 * (15 / 100);
const tip4 = bill1 * (20 / 100);
  
bill1 >= 50 && bill1 <= 300
    ? console.log(`tip is ${tip3}`)
    : console.log(`tip is ${tip4}`);

const bill2 = 430;

const tip5 = bill2 * (15 / 100);
const tip6 = bill2 * (20 / 100);
      
bill2 >= 50 && bill2 <= 300
    ? console.log(`tip is ${tip5}`)
    : console.log(`tip is ${tip6}`);