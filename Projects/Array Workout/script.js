const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// Inventors born in 1500's
let inventorsBornIn1500s = console.log(inventors.filter(element => {
   return element.year <= 1599 && element.year >= 1500;
}));

// Names of all inventors.
let inventorsNames = console.log(inventors.map(element => {
    let newObj = {};
    newObj.first = element.first;
    newObj.last = element.last;
    return newObj;
}));

// Sort by oldest to youngest.
let sortedByBirthdate = console.log(inventors.sort((a,b) => {return (a.year - b.year);}));

// Inventors sorted by the years they lived (on earth!).
let sortedByYearsLived = console.log(inventors.sort((a,b) => {return ((a.passed-a.year) - (b.passed-b.year));}));

// Total of all inventors lives?
let allInventorsLived = console.log(inventors.reduce((total, element) => {return total + element.passed - element.year;}, 0));

// Sort the people alphabetically by last name
let peopleSortAlphabeticallyByLastName = console.log(people.map((element) => element.split(`, `).reverse()).sort().map((element) => element.reverse()[0].concat(", ").concat(element.reverse()[0])));

// Sum up the instances of data.
let sumUp = console.log(data.reduce((total, element) => {total[element] = (total[element] || 0) + 1; return total;}, {}));
