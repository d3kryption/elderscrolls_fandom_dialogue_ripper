diaboxes = document.querySelectorAll(".diabox")
lines = []
allowDuplicates = true

// loop through ll the diaboxes on the page
diaboxes.forEach(function(e, i){
  children = e.querySelectorAll("i, b");
  
  for (let i = 0; i < children.length; i++) {
    let child = children[i],
    		tagName = child.tagName;
    
    if (tagName === "I" && child.innerText !== '"') {
    	PushLine("NPC", child.innerText);
    }
    
    // push line if B exists
    else if (tagName === "B") {
    	PushLine("Player", child.innerText);
    }
  }
});

// add to the line array
function PushLine(character, line) {
  newLine = {
    Character: character,
    Line: line.replace(/"/g, '') // remove speechmarks
  }
  
  if (!allowDuplicates && lines.some(e => e.Line === newLine.Line && e.Character === newLine.Character)) {
    console.log("Duplicate!", newLine)
    return;
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
