diaboxes = document.querySelectorAll(".diabox")
lines = []

// loop through ll the diaboxes on the page
diaboxes.forEach(function(e, i){
  npcName = "NPC";
  
  // push first dialogue i if it exists
  children = e.children;
  
  for (let i = 0; i < children.length; i++) {
    let child = children[i],
    		tagName = child.tagName;
    
  	// push first dialogue i if it exists
    if (tagName === "I") {
    	PushLine(npcName, child.innerText);
    }
    
    // push line if B exists
    else if (tagName === "B") {
    	PushLine(npcName, child.innerText);
    }
    
    // push line if DL exists
    else if (tagName === "DL") {
    	GetLines(child, npcName)
    }
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
  newLine = {
    Character: character,
    Line: line.replace(/"/g, '') // remove speechmarks
  }
  
  lines.push(newLine);
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
