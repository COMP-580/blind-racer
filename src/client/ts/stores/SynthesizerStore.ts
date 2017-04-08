import { AbstractStoreModel, alt } from "../alt";

interface ISynthesizerStore {

}

class SynthesizerStore extends AbstractStoreModel<ISynthesizerStore> implements ISynthesizerStore {

   constructor() {
     super();
    //  this.bindAction(SampleActions.updateLastClick, this.handleUpdateLastClick);
   }

}

export default alt.createStore(SynthesizerStore);
