// Create an array of Words
var words = ["AL MICHAELS", "ANGELS", "ARNOLD PALMER", "ASTROS", "ATHLETICS", "AUTO RACING", "AVALANCHE", "BABE DIDRIKSON", "BABE RUTH",
"BADMINTON", "BARRY SANDERS", "BASEBALL", "BASKETBALL", "BEARS", "BEN HOGAN", "BENGALS", "BILL RUSSELL", "BLACKHAWKS", "BLUE JACKETS",
 "BLUE JAYS", "BLUES", "BO JACKSON", "BOB COSTAS", "BOBBY ORR", "BOBSLEIGH", "BOWLING", "BOXING", "BRAVES", "BRETT FAVRE", "BREWERS", 
 "BRONCOS", "BROWNS", "BRUINS", "BUCCANEERS", "BUFFALO BILLS", "BULLS", "CANADIENS", "CANUCKS", "CAPITALS", "CARDINALS", "CARL LEWIS",
  "CATCHER", "CAVALIERS", "CELTICS", "CHARGERS", "CHEERLEADING", "CHIEFS", "CHRIS EVERT", "CLIPPERS", "COACH", "COLTS", "COWBOYS",
   "COYOTES", "CREW", "CRICKET", "CUBS", "CURLING", "CY YOUNG", "DEION SANDERS", "DEREK JETER", "DEVILS", "DIAMONDBACKS", "DIEGO MARADONA", 
   "DODGERS", "DOLPHINS", "DUCKS", "EAGLES", "ENDURANCE RUNNING", "FALCONS", "FENCING", "FIELD HOCKEY", "FIELD OF DREAMS", "FISHING", "FLAMES", 
   "FLOYD", "FLYERS", "FOOTBALL", "GIANTS", "GOALIE", "GOLD GLOVE", "GOLD MEDAL", "GOLDEN STATE", "GOLF", "GREEN BAY", "GREEN JACKET", "GRIZZLIES", 
   "GYNASTICS", "HANK AARON", "HAWKS", "HEAT", "HEISMAN", "HOMERUN", "HORNETS", "HOWARD COSELL", "HURRICANES", "ICE HOCKEY", "INDIANS", "ISLANDERS", 
   "JACK NICKLAUS", "JACKIE JOYNER", "JACKIE ROBINSON", "JAGUARS", "JAZZ", "JERRY RICE", "JESSE OWENS", "JETS", "JIM BROWN", "JIM THORPE", "JOE BUCK", 
   "JOE DIMAGGIO", "JOE MONTANA", "JOHNNY UNITAS", "KINGS", "KNICKS", "KOBE BRYANT", "LACROSSE", "LAKERS", "LANCE ARMSTRONG", "LARRY BIRD", 
   "LAWRENCE TAYLOR", "LEBRON JAMES", "LIGHTNING", "LIONEL MESSI", "LIONS", "LOU GEHRIG", "MAGIC", "MAGIC JOHNSON", "MANAGER", "MANNY PACQUIAO", 
   "MAPLE LEAFS", "MARINERS", "MARIO LEMIEUX", "MARK SPITZ", "MARLINS", "MARTINA", "MARV ALBERT", "MAVERICKS", "METS", "MICHAEL JOHNSON", 
   "MICHAEL JORDAN", "MICHAEL PHELPS", "MICHAEL VICK", "MICKEY MANTLE", "MIXED MARTIAL ARTS", "MOST VALUABLE PLAYER", "MUHAMMAD ALI", "NATIONALS", 
   "NETS", "NUGGETS", "OILERS", "OLYMPICS", "ORIOLES", "OSCAR ROBERTSON", "PACERS", "PACKERS", "PADRES", "PANTHERS", "PATRIOTS", "PELICANS", 
   "PENGUINS", "PERFECT GAME", "PETE SAMPRAS", "PEYTON MANNING", "PHILLIES", "PIRATES", "PISTONS", "POINT GUARD", "POKER", "POLO", "PREDATORS", 
   "PUNT", "QUARTERBACK", "RAIDERS", "RAMS", "RANGERS", "RAPTORS", "RAVENS", "RAYS", "REBOUND", "RED GRANGE", "RED SOX", "RED WINGS", "REDS", 
   "REDSKINS", "ROBERTO CLEMENTE", "ROCKETS", "ROCKIES", "ROCKY", "ROGER FEDERER", "ROLLER DERBY", "ROWING", "ROYALS", "RUDY", "RUGBY", "SABRES", 
   "SAINTS", "SANDY KOUFAX", "SEAHAWKS", "SECRETARIAT", "SENATORS", "SERENA WILLIAMS", "SHARKS", "SHUTOUT", "SILVER SLUGGER", "SKATEBOARDING", 
   "SKIING", "SNOWBOARDING", "SOCCER", "SPURS", "STANLEY CUP", "STARS", "STEELERS", "STRIKEOUT", "SUNS", "SURFING", "SWEEP", "SWIMMING", 
   "TED WILLIAMS", "TENNIS", "TEXANS", "THUNDER", "TIGER WOODS", "TIGERS", "TIMBERWOLVES", "TITANS", "TOM BRADY", "TOUCHDOWN", "TRACK", 
   "TRAIL BLAZERS", "TWINS", "TY COBB", "ULTIMATE", "USAIN BOLT", "VIKINGS", "VIN SCULLY", "VINCE LOMBARDI", "VOLLEYBALL", "WALTER PAYTON", 
   "WARRIORS", "WAYNE GRETZKY", "WEIGHTLIFTING", "WHITE SOX", "WIFFLEBALL", "WILD", "WILLIE MAYS", "WILT CHAMBERLAIN", "WIZARDS", "WRESTLING", 
   "YANKEES"];


// Choose words randomly
var randomNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randomNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// Dom Manipulation

var domUnderScore = document.getElementsByClassName('underscore');



console.log(choosenWord);
// Create _ on lenth of words
var createUnderScore = () => {
     for(var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        domUnderScore[0].innerHTML = underScore.join(' ')
     }
     return underScore;

}         

console.log(createUnderScore());
// Get users guess
document.addEventListener('keyup', (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    console.log(choosenWord.indexOf(keyWord));
// add to rightWord array
    if(choosenWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
        underScore[choosenWord.indexOf(keyWord)] = keyWord;
        if(underScore.join(' ') === choosenWord) {
            alert('You Win!!!')
        } 
            console.log(underScore);
        }
        else{
        wrongWord.push(keyWord);
        console.log(wrongWord);
    }
    console.log(keyWord);
});
// Check if guess is right
// If right, push to right array

//  If wrong, push to wrong array

