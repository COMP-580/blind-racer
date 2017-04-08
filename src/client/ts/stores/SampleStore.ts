import { AbstractStoreModel, alt } from "../alt";

import SampleActions from "../actions/SampleActions";

// create an interface to model the "state" in this store
interface ISampleStoreState {
   lastClick: number;
}

/** class both extends a model using our state interface and implements the interface it's self
 * this way we ensure that state based methods only deal with our declared state model and that
 * we remember to declare our state in the store model its self
 */
class AltSampleStore extends AbstractStoreModel<ISampleStoreState> implements ISampleStoreState {
   public lastClick: number;

   constructor() {
     super();
     /** binding to automatically attach methods to
      * Actions for example the action developerActions#addDeveloper
      * would automatically call and pass its args to the onAddDeveloperMethod
      * when a dispatch is called
      * Alt stores a automatically "emit-change" and inform listening ui components of the update after
      * State is set
      */
    //  this.bindActions(developerActions);

     /** different than the above - this takes a single action from an "actions" instance and binds it
      * to whatever method you specify - really useful when a store has an actions class bound but maybe
      * needs one or two actions from another as well
      */
     this.lastClick = 0;
     this.bindAction(SampleActions.updateLastClick, this.handleUpdateLastClick);
   }

   public handleUpdateLastClick(time: number) {
     this.lastClick = time;
   }

}

let SampleStore = alt.createStore(AltSampleStore);

export { ISampleStoreState, SampleStore }
