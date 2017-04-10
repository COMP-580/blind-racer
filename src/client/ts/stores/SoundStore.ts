/**
 * SoundStore
 *
 * In charge of loading and playing sounds.
 */

import { AbstractStoreModel, alt } from "../alt";

import SoundActions from "../actions/SoundActions";

interface ISoundStoreState {
  sounds: {[name: string]: Howl};
}

class AltSoundStore extends AbstractStoreModel<ISoundStoreState> implements ISoundStoreState {

  public sounds: {[name: string]: Howl};
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  constructor() {
    super();
    this.sounds = {};

    this.bindAction(SoundActions.loadSound, this.onLoadSound);
    this.bindAction(SoundActions.playSound, this.onPlaySound);
  }

  public onLoadSound(s: {name: string, path: string, volume?: number}) {
    let sound = new Howl({
      src: s.path,
      volume: s.volume || 1,
    });
    this.sounds[s.name] = sound;

  }

  public onPlaySound(name: string) {
    this.sounds[name].play();
  }

}
let SoundStore = alt.createStore(AltSoundStore, "SoundStore");
export { ISoundStoreState, SoundStore }
