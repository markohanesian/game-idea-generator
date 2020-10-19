// game idea gen function
function generateIdea() {
  let genre = ["Platform","Shooter","Fighting","Beat 'em up","Stealth","Survival","Battle Royale","Rhythm","Survival horror","Metroidvania","Text adventures","Graphic adventures","Visual novels","Interactive movie","Real-time 3D adventures","Action RPG","MMORPG","Roguelikes","Tactical RPG","Sandbox RPG","First-person party-based RPG","JRPG","Monster Collection","Construction and management simulation","Life simulation","Vehicle simulation","Artillery","Auto battler (Auto chess)","Multiplayer online battle arena (MOBA)","Real-time strategy (RTS)","Real-time tactics (RTT)","Tower defense","Turn-based strategy (TBS)","Turn-based tactics (TBT)","Wargame","Grand strategy wargame","Racing","Sports","Competitive","Sports-based fighting","Board/card","Casual","Digital collectible card","Horror","Idle","Logic","Party","Programming","Trivia","Typing","Art","Educational","Esports","Exergame","Survival-Action-Adventure","Cross-Genre","Narrative-Adventure","Sandbox","Creative","Open world"];
  let format = ["2d", "3d"]
  let mechanic = ["fight", "solve puzzles", "collect items", "defend your base", "drive cars", "kill zombies", "avoid obstacles", "build things", "fight the clock", "compete in challenges"]
  let para=document.querySelector('p');
  para.innerHTML='A' + ' ' + (format[Math.floor(Math.random()*format.length)]) + ' ' + (genre[Math.floor(Math.random()*genre.length)]) + ' ' + 'game' + ' ' + 'where you' + ' ' + (mechanic[Math.floor(Math.random()*mechanic.length)]);
}

  
  console.log(generateIdea());
