diaboxes = document.querySelectorAll(".diabox")
lines = []

// loop through ll the diaboxes on the page
diaboxes.forEach(function(e, i){
  npcName = "NPC";
  
  // get the previous sibling - it might have a link to the NPC
  npcSpeaker = e.previousSibling.previousSibling;
  
  if (npcSpeaker) {
    	// does it have an a tag - its normally the NPC
    	aTag = npcSpeaker.querySelector("a");
    
      if (aTag) {
        npcName = aTag.title;
      }
  }
  
  // push first dialogue i
  PushLine(npcName, e.querySelector("i").innerText);
  
  // does the current dialogue have any lines
  subLines = e.querySelector("dl")
  
  if (subLines) {
 		GetLines(subLines, npcName)
  }
});

// recursive function to get each line 
function GetLines(dl, npcName) {
  dds = dl.querySelectorAll("dd")
  
  dds.forEach(function(e, i)
  {
    // push player option
    playerOption = e.querySelector("b")
    
    if (playerOption) {
    	PushLine("Player", playerOption.innerText);
    }
    
    // push npc option
    PushLine(npcName, e.querySelector("i").innerText);
    
    // does it have sublines? 
    subLines = e.querySelector("dl")
    
    if (subLines) {
      GetLines(subLines, npcName);
    }
  });  
}

// add to the line array
function PushLine(character, line) {
  lines.push({
    Character: character,
    Line: line.replace(/"/g, '') // remove speechmarks
  });
}

// combine all the lines into pipe seperated
function CombineLines() {
  stringLines = "";
  
  lines.forEach(function(e, i){
    characterName = e.Character.replace(/ /g, "_");
    stringLines += `game|name|${e.Line}|hifi|skyrim/${characterName}|1\n`;
  });
  
  console.log(stringLines);
}



console.log(lines)
CombineLines();
