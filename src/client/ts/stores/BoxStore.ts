import { AbstractStoreModel, alt } from "../alt";
import TypingActions from "../actions/TypingActions"
import SpeechActions from "../actions/SpeechActions"

interface IBoxStoreState {
  words: string;
  finishedWords: string[];
  currentWord: string;
  unfinishedWords: string[];
}

class AltBoxStore extends AbstractStoreModel<IBoxStoreState> implements IBoxStoreState {
  public words: string;
  public finishedWords: string[];
  public currentWord: string;
  public unfinishedWords: string[];
  constructor() {
    super();
    this.words = "My giant fat cat Died Last weak. Fuck me";
    this.finishedWords= [];
    this.unfinishedWords= this.words.split(" ");
    this.currentWord= this.unfinishedWords[0];
    this.unfinishedWords.shift();

    this.bindAction(TypingActions.typeWord, this.onTypeWord);
  }

  public onTypeWord(word: string) {
    if (word === this.currentWord){
      this.finishedWords.push(word);
      this.currentWord=this.unfinishedWords[0];
      this.unfinishedWords.shift();
      (<any>SpeechActions).sayText.defer(this.currentWord);

    }
    if (this.unfinishedWords.length==0){
      console.log("fin");
    }
  }

}
let BoxStore = alt.createStore(AltBoxStore);
export { IBoxStoreState, BoxStore }
