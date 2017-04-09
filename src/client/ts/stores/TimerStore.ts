import { AbstractStoreModel, alt } from "../alt";

import TypingActions from "../actions/TypingActions";

// Declare global variables
let window = (<any> global).window;

interface ITimerStoreState {
  wpm: number;
  typedWords: number;
  elapsedTime: number;
  startTime: number;
  updatesPerSecond: number;
  timerInterval: NodeJS.Timer;
}

class AltTimerStore extends AbstractStoreModel<ITimerStoreState> implements ITimerStoreState {

  public wpm: number;
  public typedWords: number;
  public elapsedTime: number;
  public startTime: number;
  public updatesPerSecond: number;
  public timerInterval: NodeJS.Timer;

  constructor() {
    super();

    this.wpm = 0;
    this.typedWords = 0;
    this.elapsedTime = 0;
    this.startTime = window ? window.performance.now() : null;
    this.updatesPerSecond = 10;
    this.timerInterval = null;

    this.bindAction(TypingActions.typedWord, this.onTypedWord);
    this.bindAction(TypingActions.startTyping, this.onStartTyping);
    this.bindAction(TypingActions.updateTimer, this.onUpdateTimer);
    this.bindAction(TypingActions.stopTyping, this.onStopTyping);
  }

  public onTypedWord(word: string) {
    this.typedWords++;
  }

  public onStartTyping() {
    // console.log("start typing");
    this.wpm = 0;
    this.typedWords = 0;
    this.elapsedTime = 0;
    this.startTime = window ? window.performance.now() : null;

    this.timerInterval = setInterval(() => {
      TypingActions.updateTimer();
    }, 1000 / this.updatesPerSecond);
  }

  public onUpdateTimer() {
    let endTime = window ? window.performance.now() : null;
    this.elapsedTime = endTime - this.startTime;
    this.wpm = Math.floor(this.typedWords / (this.elapsedTime / (60 * 1000)));
  }

  public onStopTyping() {
    // console.log("stop typing");
    clearTimeout(this.timerInterval);
  }

}
let TimerStore = alt.createStore(AltTimerStore);
export { ITimerStoreState, TimerStore }
