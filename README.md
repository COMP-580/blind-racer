# blind-racer

## Planned Features
* Leaderboard
* Keyboard
* Sidebar

## Components
* Keyboard component?
* Leaderboard
  * Username
  * Score
* Sidebar
  * About
  * Help
  * Home
  * Settings
* Settings
  * Mode  - radio button
  * Color Theme - radio button
  * Volume - slider

## Actions
* SettingsActions
  * changeMode(mode)
  * changeColorTheme(theme)
  * changeVolume(volume)
* ModalActions
  * openHelp()
  * openAbout()
  * openSettings()
* LeaderboardActions
  * submitLeaderboard(username, score)
  * refreshLeaderboard()
* SoundActions
  * loadSound(name, path)
  * playSound(name)
* SpeechActions
  * sayText(text)
* TypingActions
  * typeChar(c)
  * charSuccess(c)
  * charFail(c, e)
  * typeWord(w)
  * wordSuccess(w)
  * wordFail(w, e)
* TimingActions
  * startTyping()
  * stopTyping()
  * updateTimer()
* GameActions
  * fetchGameText()
  * startGame()
  * endGame()

## Stores
* SettingsStore
  * Keeps track of all of our settings
* ModalStore
  * Opens and closes modals
* SoundStore
  * Loads and plays sounds
* SpeechStore
  * Speech synthesizer
* TimerStore
  * Handles calculating wpm
* StatStore
  * Tracks correctly/incorrectly typed words
* TypingModeStore
  * Handles the different typing modes
* UserInputStore
  * Updates the input from the user into the text box
* GameTextStore
  * Handles the game text (unfinished, current, and finished)

## Util
* RestUtil
