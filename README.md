# Elder Scrolls Fandom Dialogue Ripper
A small little JS file that I wrote to help speed up some work I was doing.

I was working on a tutorial and needed all the dialogue from a quest from the Fandom or Elder Scrolls.

Instead of manually doing it (I got board after 8 lines!)

This tool is pasted into the console window of your browser while on the fandom page and it runs.

## 🧐 Features

- Easy to modify (its only 79 lines)
- Customisable output with 1 line modification
- Will try to get the NPC's name when running through

## Limitations

- Sadly the Fandom doesn't store the NPC's name per line. It only briefly mentions it in some text above it. 

## 🛠️ Installation Steps - development

1) Clone the repo / download the run.js file.

```bash
git clone https://github.com/d3kryption/elderscrolls_fandom_dialogue_ripper
```

2. Open the js file and copy all the code within it.

3. Open the browser and find the quest page you want to get the dialogue from.

```bash
https://elderscrolls.fandom.com/wiki/Blood_on_the_Ice
```

4. Open the inspector (F12 or right click -> inspect) and go to the console tab.

5. Paste the code into the inspector and hit return for it to run.

note, you may get an error about pasting random code from the internet and yes...this does count as random code from the internet.

BUT

If you have any programming knowlegde at all, I do advise you looking over the code just to feel safer. 

6. By default, the page will output in 2 methods;
- Pipe seperated list
- Array object print out.

## How it works
The fandom page for quests typically lists the dialogue for all quests (typically, I'm not 100% if its every time.

They use a div with a class of `diabox` to list when dialogue starts.
```html 
<div class="diabox">
  
</div>
```

Within this, it brances between 4 nodes. 

```html
<b>This is the players option!</b>
```

```html
<i>This is what the NPC will say</i>  
```

```html
<dl>This is the start for a dialogue list. Basically, when the player has multiple dialogue options. It will have a <b> within it</dl>
```

```html
<dd>This is the final node which stands for dialogue...dialogue? I'm not sure but this is basically the option and its reply. 
```

Using the abbove, the code will first find all dialogue options via the `diabox` class, then loop through it. If it finds a `<b>` for the player option then it'll log it as a line with the name of `Player`. If it finds a `<i>` it'll log it as an NPC line. before it logs it, it'll try to go back up the chain and search the `<p>` to hopefully find the name of the NPC. If it finds a `<dl>` then it will restart the search process. Finally, it exports it.
