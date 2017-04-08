import { AbstractActions, alt } from "../alt";

interface ISampleActions {
  updateLastClick(time: number): void;
}

class SampleActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "updateLastClick",
    );
  }
}

export default alt.createActions<ISampleActions>(SampleActions);
