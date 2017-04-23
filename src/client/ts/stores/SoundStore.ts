/**
 * SoundStore
 *
 * In charge of loading and playing sounds. Uses the Howler library for its underlying implementation.
 */

import { AbstractStoreModel, alt } from "../alt";

import SettingsActions from "../actions/SettingsActions";
import SoundActions from "../actions/SoundActions";

interface ISoundStoreState {
  sounds: {[name: string]: Howl};

  masterVolume: number;
  soundVolume: number;
  volume: number;
}

class AltSoundStore extends AbstractStoreModel<ISoundStoreState> implements ISoundStoreState {

  public sounds: {[name: string]: Howl};
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  public masterVolume: number;
  public soundVolume: number;
  public volume: number;

  constructor() {
    super();
    this.sounds = {};

    this.masterVolume = 1;
    this.soundVolume = 1;
    this.volume = this.masterVolume * this.soundVolume;

    this.bindAction(SoundActions.loadSound, this.onLoadSound);
    this.bindAction(SoundActions.playSound, this.onPlaySound);
    this.bindAction(SettingsActions.changeMasterVolume, this.onChangeMasterVolume);
    this.bindAction(SettingsActions.changeSoundVolume, this.onChangeSoundVolume);
  }

  public onLoadSound(s: {name: string, path: string, volume?: number}) {
    let sound = new Howl({
      src: s.path,
      volume: s.volume || 1,
    });
    (<any> sound).defaultVolume = sound.volume();
    this.sounds[s.name] = sound;
  }

  public onPlaySound(name: string) {
    let sound = this.sounds[name];
    sound.volume((<any> sound).defaultVolume * this.volume);
    this.sounds[name].play();
  }

  public onChangeMasterVolume(volume: number) {
    this.masterVolume = volume;
    this.volume = this.masterVolume * this.soundVolume;
  }

  public onChangeSoundVolume(volume: number) {
    this.soundVolume = volume;
    this.volume = this.masterVolume * this.soundVolume;
  }

}
let SoundStore = alt.createStore(AltSoundStore, "SoundStore");
export { ISoundStoreState, SoundStore }
