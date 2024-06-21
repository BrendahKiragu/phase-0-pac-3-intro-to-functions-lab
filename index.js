function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
//console.log(whisper("I AM COMING for YOU"))

function logShout (string) {
  console.log (string.toUpperCase())
}
//logShout("hello")

function logWhisper(string) {
  console.log (string.toLowerCase());
}
//logWhisper("COMO ESTAS, MI AmIGO")

function sayHiToHeadphonedRoommate (string) {
    if (
        string === string.toLowerCase()
    ){
        return ("I can't hear you!")
    } else if (
        string === string.toUpperCase()
    ){
        return ("YES INDEED!");
    } else (
        string == "Let's have dinner together!"
    )
        return ("I would love to!")
    }


  
