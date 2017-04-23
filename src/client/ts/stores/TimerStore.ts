/**
 * TimerStore
 *
 * In charge of calculating a user's wpm.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import TimingActions from "../actions/TimingActions";
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

    this.bindAction(TypingActions.wordSuccess, this.onWordSuccess);
    this.bindAction(TimingActions.startTyping, this.onStartTyping);
    this.bindAction(TimingActions.updateTimer, this.onUpdateTimer);
    this.bindAction(TimingActions.stopTyping, this.onStopTyping);
  }

  public onWordSuccess(word: string) {
    this.typedWords++;
  }

  public onStartTyping() {
    this.wpm = 0;
    this.typedWords = 0;
    this.elapsedTime = 0;
    this.startTime = window ? window.performance.now() : null;

    if (this.timerInterval) {
      clearTimeout(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      TimingActions.updateTimer();
    }, 1000 / this.updatesPerSecond);
  }

  public onUpdateTimer() {
    let endTime = window ? window.performance.now() : null;
    this.elapsedTime = endTime - this.startTime;
    this.wpm = Math.floor(this.typedWords / (this.elapsedTime / (60 * 1000)));
  }

  public onStopTyping() {
    this.onUpdateTimer();
    clearTimeout(this.timerInterval);
  }

}

let TimerStore = alt.createStore(AltTimerStore, "TimerStore");
export { ITimerStoreState, TimerStore }
