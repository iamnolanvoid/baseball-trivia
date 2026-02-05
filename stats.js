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
            {rank: "1", name: "Pete Rose"}, {rank: "2", name: "Ty Cobb"}, {rank: "3", name: "Henry Aaron"}, 
            {rank: "4", name: "Stan Musial"}, {rank: "5", name: "Tris Speaker"}, {rank: "6", name: "Derek Jeter"}, 
            {rank: "7", name: "Cap Anson"}, {rank: "8", name: "Honus Wagner"}, {rank: "9", name: "Carl Yastrzemski"}, 
            {rank: "10", name: "Albert Pujols"}, {rank: "11", name: "Paul Molitor"}, {rank: "12", name: "Eddie Collins"}, 
            {rank: "13", name: "Willie Mays"}, {rank: "14", name: "Eddie Murray"}, {rank: "15", name: "Nap Lajoie"}
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
