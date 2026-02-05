// 1. DATA DEFINITION (Must be at the top!)
const allLists = {
    hr: {
        title: "Home Runs",
        data: [
            {rank: "1", name: "Barry Bonds"}, {rank: "2", name: "Henry Aaron"}, {rank: "3", name: "Babe Ruth"}, 
            {rank: "4", name: "Albert Pujols"}, {rank: "5", name: "Alex Rodriguez"}, {rank: "6", name: "Willie Mays"}, 
            {rank: "7", name: "Ken Griffey Jr."}, {rank: "8", name: "Jim Thome"}, {rank: "9", name: "Sammy Sosa"}, 
            {rank: "10", name: "Frank Robinson"}, {rank: "11", name: "Mark McGwire"}, {rank: "12", name: "Harmon Killebrew"}, 
            {rank: "13", name: "Rafael Palmeiro"}, {rank: "14", name: "Reggie Jackson"}, {rank: "15", name: "Manny Ramirez"}
        ]
    },
    hits: {
        title: "Hits",
        data: [
           [{"rank": "1", "name": "Ozzie Smith"}, {"rank": "2", "name": "Mark Belanger"}, {"rank": "3", "name": "Brooks Robinson"}, {"rank": "4", "name": "Cal Ripken Jr."}, {"rank": "5", "name": "Joe Tinker"}, {"rank": "6", "name": "Luis Aparicio"}, {"rank": "7", "name": "Rabbit Maranville"}, {"rank": "8", "name": "Iván Rodríguez"}, {"rank": "9", "name": "Omar Vizquel"}, {"rank": "10", "name": "Bobby Wallace"}, {"rank": "11", "name": "Bill Dahlen"}, {"rank": "12", "name": "Art Fletcher"}, {"rank": "13", "name": "Andrelton Simmons"}, {"rank": "14", "name": "Yadier Molina"}, {"rank": "15", "name": "Adrian Beltré"}, {"rank": "16", "name": "Gary Carter"}, {"rank": "17", "name": "Bob Boone"}, {"rank": "18", "name": "Pee Wee Reese"}, {"rank": "19", "name": "Jim Sundberg"}, {"rank": "20", "name": "Marty Marion"}, {"rank": "20", "name": "Roger Peckinpaugh"}, {"max": "22", "name": "Andruw Jones"}, {"rank": "23", "name": "George Davis"}, {"rank": "23", "name": "Bill Mazeroski"}, {"rank": "25", "name": "Buddy Bell"}, {"rank": "26", "name": "Dave Bancroft"}, {"rank": "27", "name": "Lou Boudreau"}, {"rank": "27", "name": "George McBride"}, {"rank": "29", "name": "Ozzie Guillén"}, {"rank": "30", "name": "Travis Jackson"}, {"rank": "30", "name": "Phil Rizzuto"}, {"rank": "32", "name": "Germany Smith"}, {"rank": "33", "name": "Alan Trammell"}, {"rank": "34", "name": "Billy Jurges"}, {"rank": "35", "name": "Joe Gordon"}, {"rank": "36", "name": "Jack Glasscock"}, {"rank": "37", "name": "Frank White"}, {"rank": "38", "name": "Everett Scott"}, {"rank": "39", "name": "Roy McMillan"}, {"rank": "40", "name": "Clete Boyer"}, {"rank": "40", "name": "Frankie Frisch"}, {"rank": "42", "name": "Dave Concepción"}, {"rank": "42", "name": "Graig Nettles"}, {"rank": "44", "name": "Honus Wagner"}, {"rank": "45", "name": "Scott Rolen"}, {"rank": "46", "name": "Bert Campaneris"}, {"rank": "47", "name": "Nellie Fox"}, {"rank": "47", "name": "Kevin Kiermaier"}, {"rank": "47", "name": "Jack Wilson"}, {"rank": "50", "name": "Nolan Arenado"}, {"rank": "51", "name": "Rey Sánchez"}, {"rank": "52", "name": "Ed Brinkman"}, {"rank": "53", "name": "Willie Randolph"}, {"rank": "54", "name": "Terry Turner"}, {"rank": "55", "name": "Tommy Corcoran"}, {"rank": "56", "name": "Johnny Bench"}, {"rank": "57", "name": "Bill Russell"}, {"rank": "58", "name": "Luke Appling"}, {"rank": "58", "name": "Larry Bowa"}, {"rank": "58", "name": "Greg Gagne"}, {"rank": "61", "name": "Eddie Miller"}, {"rank": "61", "name": "Plácido Polanco"}, {"rank": "63", "name": "Paul Blair"}, {"rank": "63", "name": "Craig Counsell"}, {"rank": "65", "name": "Brad Ausmus"}, {"rank": "66", "name": "Lee Tannehill"}, {"rank": "67", "name": "Mike Schmidt"}, {"rank": "68", "name": "Ray Schalk"}, {"rank": "69", "name": "Scott Fletcher"}, {"rank": "69", "name": "Willie Mays"}, {"rank": "71", "name": "Hughie Critz"}, {"rank": "72", "name": "Mickey Doolin"}, {"rank": "72", "name": "Mark Ellis"}, {"rank": "72", "name": "Robin Ventura"}, {"rank": "75", "name": "Tony Peña"}, {"rank": "75", "name": "Chris Speier"}, {"rank": "77", "name": "Mookie Betts"}, {"rank": "77", "name": "J.J. Hardy"}, {"rank": "79", "name": "Charlie Bennett"}, {"rank": "80", "name": "Rick Dempsey"}, {"rank": "80", "name": "Troy Tulowitzki"}, {"rank": "80", "name": "Chase Utley"}, {"rank": "83", "name": "Dick Groat"}, {"rank": "84", "name": "Charles Zimmer"}, {"rank": "85", "name": "Carlton Fisk"}, {"rank": "86", "name": "Jimmy Collins"}, {"rank": "86", "name": "Bobby Grich"}, {"rank": "86", "name": "Herman Long"}, {"rank": "89", "name": "Garry Templeton"}, {"rank": "89", "name": "Devon White"}, {"rank": "91", "name": "Mike Bordick"}, {"rank": "91", "name": "Lorenzo Cain"}, {"rank": "93", "name": "Bucky Dent"}, {"rank": "93", "name": "Tim Foli"}, {"rank": "95", "name": "Leo Cárdenas"}, {"rank": "95", "name": "Russell Martin"}, {"rank": "97", "name": "Royce Clayton"}, {"rank": "97", "name": "Ron Hansen"}, {"rank": "97", "name": "Jimmy Rollins"}, {"rank": "97", "name": "Lou Whitaker"}]
        ]
    },
    dwar: {
        title: "Defensive WAR",
        data: [
            {rank: "1", name: "Ozzie Smith"}, {rank: "2", name: "Mark Belanger"}, {rank: "3", name: "Brooks Robinson"}, 
            {rank: "4", name: "Cal Ripken Jr."}, {rank: "5", name: "Joe Tinker"}, {rank: "6", name: "Luis Aparicio"}, 
            {rank: "7", name: "Rabbit Maranville"}, {rank: "8", name: "Ivan Rodriguez"}, {rank: "9", name: "Omar Vizquel"}, 
            {rank: "10", name: "Bobby Wallace"}, {rank: "11", name: "Bill Dahlen"}, {rank: "12", name: "Art Fletcher"}, 
            {rank: "13", name: "Andrelton Simmons"}, {rank: "14", name: "Yadier Molina"}, {rank: "15", name: "Adrian Beltre"}
        ]
    },
    wins: {
        title: "Wins",
        data: [
            {rank: "1", name: "Cy Young"}, {rank: "2", name: "Walter Johnson"}, {rank: "3", name: "Grover Alexander"}, 
            {rank: "3", name: "Christy Mathewson"}, {rank: "5", name: "Pud Galvin"}, {rank: "6", name: "Warren Spahn"}, 
            {rank: "7", name: "Kid Nichols"}, {rank: "8", name: "Greg Maddux"}, {rank: "9", name: "Roger Clemens"}, 
            {rank: "10", name: "Tim Keefe"}, {rank: "11", name: "Steve Carlton"}, {rank: "12", name: "John Clarkson"}, 
            {rank: "13", name: "Eddie Plank"}, {rank: "14", name: "Nolan Ryan"}, {rank: "15", name: "Don Young"}
        ]
    }
};
// 2. FIREBASE INITIALIZATION
// (Your firebase.initializeApp code goes here)

// 3. LOGIC (This is where your error was happening)
database.ref('players').on('value', (snapshot) => {
    // Because allLists is defined at the top, this will no longer error out
    const category = document.getElementById('category-select').value;
    const currentData = allLists[category].data; 
    console.log("Data loaded for:", allLists[category].title);
}); // <-- CHECK THIS CLOSING BRACKET! If it's missing, you get "Unexpected end of input"

// This tells the browser: "Wait until the HTML is finished drawing"
document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('category-select');

    picker.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        console.log("New selection:", selectedCategory);
        
        // This is where you call your function to restart the game/logic
        // Example: loadNewQuestion(selectedCategory);
    });
});
