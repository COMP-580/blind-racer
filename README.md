# blind-racer

## Flux

## Actions

**GameActions**
- `fetchGameText` - get the text to type
- `startGame` - start the game
- `endGame` - end the game
- `sayCurrentWord` - repeat the current word to type
- `spellCurrentWord` - spell the current word
- `spellInput` - spell what the user has typed so far
- `disableButtons` - disable certain game buttons (like saying/spelling the current word)
- `enableButtons` - enable those game buttons
- `checkCharsSoFar` - check if the characters typed so far match the current word (hamming distance check)

**LeaderboardActions**
- `refreshLeaderboard` - retrieve top leaderboard scores from the server
- `updateLeaderboard` - update the leaderboard component with scores
- `submitLeaderboard` - submit a score to the leaderboard

**ModalActions**
- `openModal` - open a certain modal (about, info, submitScore)

**SettingsActions**
- `changeColorTheme` - change the color theme (currently unused)
- `changeTypingMode` - change the typing mode (standard or playback)
- `changeGameMode` - change the game mode (beginner or intermediate)
- `changeMasterVolume` - change the master volume setting
- `changeSoundVolume` - change the volume of audio feedback sounds
- `changeSpeechVolume` - change the volume of the speech synthesizer
- `changeCheckPunctuation` - change the check punctuation settings

**SoundActions**
- `loadSound` - load a sound with Howler from the server
- `playSound` - play a sound clip that has previously been loaded

**SpeechActions**
- `sayText` - vocally say a phrase
- `spellWord` - spell the letters of a word (removes punctuation)

**TimingActions**
- `startTyping` - start the timer
- `stopTyping` - stop the timer
- `updateTimer` - tick the timer (based off `performance.now()`)

**TypingActions**
- `typeChar` - type a character into the input
- `charSuccess` - typed the correct character
- `charFail` - typed the wrong character
- `typeWord` - typed a word (submitted by pressing spacebar)
- `wordSuccess` - typed a word correctly
- `wordFail` - typed a word incorreclty

**VirtualKeyboardActions**
- `colorKey` - colors a key in given a css class
- `uncolorKey` - removes a key's css class
- `uncolorAllKeys` - removes the css from all keys
- `toggleKeyboard` - toggles whether to show the keyboard or not

## Components
* Game
  * StartButton - button to start the game
* GameText
  * GameText - text to type
  * SayCurrent - button to say the current word
  * SpellCurrent - button to spell the current word
* Instructions
  * Instructions - instructions
* Leaderboard
  * Leaderboard - leaderboard table
  * RefreshLB - button to refresh the leaderboard
* Logo
  * Logo - site logo
* Modals
  * About
    * AboutButton - opens the about modal
    * AboutModal - about modal content
  * Help
    * HelpButton - opens the help modal
    * HelpModal - help modal content
  * SubmitScore
    * SubmitScoreModal - submit the score modal
* Settings
  * TBF
  
## Stores
TBF

## Planned Features
* Repeat a sentence
* Hover over objects and have them say what it is (screen-reader compatibility)
* Choose how fast people speak
* Choose the type of voice
* Fix tabbing indices

## TODO
* Something should go hee

## Getting Started
Make sure you have [nodejs](https://nodejs.org/en/download/) installed. It should also install `npm`. Make sure you update `npm` by running `npm install -g npm` on the command line. Also, install [git](https://git-scm.com/downloads).

Clone the repo
`git clone https://github.com/COMP-580/blind-racer.git`

Cd into the blind-racer directory and install the global packages:
* `npm install -g gulp`
* `npm install -g bower`

Install bower packages:
`bower install`

Install node packages:
`npm install`

Run the program with:
`gulp watch`
