// Create an array of Words
var words = ["Al Michaels", "Angels", "Arnold Palmer", "Astros", "Athletics", "auto racing", "Avalanche", "Babe Didrikson", "Babe Ruth",
 "badminton", "Barry Sanders", "baseball", "basketball", "Bears", "Ben Hogan", "Bengals", "Bill Russell", "Blackhawks", "Blue Jackets",
  "Blue Jays", "Blues", "Bo Jackson", "Bob Costas", "Bobby Orr", "bobsleigh", "bowling", "boxing", "Braves", "Brett Favre", "Brewers", 
  "Broncos", "Browns", "Bruins", "Buccaneers", "Buffalo Bills", "Bulls", "Canadiens", "Canucks", "Capitals", "Cardinals", "Carl Lewis",
   "catcher", "Cavaliers", "Celtics", "Chargers", "cheerleading", "Chiefs", "Chris Evert", "Clippers", "coach", "Colts", "Cowboys",
    "Coyotes", "crew", "cricket", "Cubs", "curling", "Cy Young", "Deion Sanders", "Derek Jeter", "Devils", "Diamondbacks", "Diego Maradona", 
    "Dodgers", "Dolphins", "Ducks", "Eagles", "endurance running", "Falcons", "fencing", "field hockey", "Field of Dreams", "fishing", "Flames", 
    "Floyd", "Flyers", "football", "Giants", "goalie", "Gold Glove", "gold medal", "Golden State", "golf", "Green Bay", "Green Jacket", "Grizzlies", 
    "gynastics", "Hank Aaron", "Hawks", "Heat", "Heisman", "homerun", "Hornets", "Howard Cosell", "Hurricanes", "ice hockey", "Indians", "Islanders", 
    "Jack Nicklaus", "Jackie Joyner", "Jackie Robinson", "Jaguars", "Jazz", "Jerry Rice", "Jesse Owens", "Jets", "Jim Brown", "Jim Thorpe", "Joe Buck", 
    "Joe DiMaggio", "Joe Montana", "Johnny Unitas", "Kings", "Knicks", "Kobe Bryant", "lacrosse", "Lakers", "Lance Armstrong", "Larry Bird", 
    "Lawrence Taylor", "LeBron James", "Lightning", "Lionel Messi", "Lions", "Lou Gehrig", "Magic", "Magic Johnson", "manager", "Manny Pacquiao", 
    "Maple Leafs", "Mariners", "Mario Lemieux", "Mark Spitz", "Marlins", "Martina", "Marv Albert", "Mavericks", "Mets", "Michael Johnson", 
    "Michael Jordan", "Michael Phelps", "Michael Vick", "Mickey Mantle", "mixed martial arts", "most valuable player", "Muhammad Ali", "Nationals", 
    "Nets", "Nuggets", "Oilers", "Olympics", "Orioles", "Oscar Robertson", "Pacers", "Packers", "Padres", "Panthers", "Patriots", "Pelicans", 
    "Penguins", "perfect game", "Pete Sampras", "Peyton Manning", "Phillies", "Pirates", "Pistons", "point guard", "poker", "polo", "Predators", 
    "punt", "quarterback", "Raiders", "Rams", "Rangers", "Raptors", "Ravens", "Rays", "rebound", "Red Grange", "Red Sox", "Red Wings", "Reds", 
    "Redskins", "Roberto Clemente", "Rockets", "Rockies", "Rocky", "Roger Federer", "roller derby", "rowing", "Royals", "Rudy", "rugby", "Sabres", 
    "Saints", "Sandy Koufax", "Seahawks", "Secretariat", "Senators", "Serena Williams", "Sharks", "shutout", "Silver Slugger", "skateboarding", 
    "skiing", "snowboarding", "soccer", "Spurs", "Stanley Cup", "Stars", "Steelers", "strikeout", "Suns", "surfing", "sweep", "swimming", 
    "Ted Williams", "tennis", "Texans", "Thunder", "Tiger Woods", "Tigers", "Timberwolves", "Titans", "Tom Brady", "touchdown", "track", 
    "Trail Blazers", "Twins", "Ty Cobb", "ultimate", "Usain Bolt", "Vikings", "Vin Scully", "Vince Lombardi", "volleyball", "Walter Payton", 
    "Warriors", "Wayne Gretzky", "weightlifting", "White Sox", "wiffleball", "Wild", "Willie Mays", "Wilt Chamberlain", "Wizards", "wrestling", 
    "Yankees"];


// Choose words randomly
var randomNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randomNum];
var underScore = [];
choosenWord.toLowerCase();
console.log(choosenWord);
// Create _ on lenth of words
var createUnderScore = () => {
     for(var i = 0; i < choosenWord.length; i++) {
         underScore.push('_');
     }
     return underScore;
}

console.log(createUnderScore());
// Get users guess
document.addEventListener('keyup', (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    keyWord.toLowerCase()
    console.log(choosenWord.indexOf(keyWord));
    if(choosenWord.indexOf(keyWord) > -1) {
        console.log(true);
    }
    console.log(keyWord);
});
// Check if guess is right
// If right, push to right array
//  If wrong, push to wrong array

