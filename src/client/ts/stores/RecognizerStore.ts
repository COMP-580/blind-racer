import { AbstractStoreModel, alt } from "../alt";

interface IRecognizerStore {

}

class RecognizerStore extends AbstractStoreModel<IRecognizerStore> implements IRecognizerStore {

   constructor() {
     super();
    //  this.bindAction(SampleActions.updateLastClick, this.handleUpdateLastClick);
   }

}

export default alt.createStore(RecognizerStore);
