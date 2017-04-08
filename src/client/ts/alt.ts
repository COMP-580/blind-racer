/* tslint:disable:no-empty */
/* tslint:disable:max-classes-per-file */

import * as Alt from "alt";

// Initialize alt
let alt = new Alt();

export { alt }

class AbstractActions implements AltJS.ActionsClass {
  public actions: any;
  public dispatch: ( ...payload: any[]) => void;
  public generateActions: ( ...actions: string[]) => void;
  constructor(config: AltJS.Alt) {}
}

export { AbstractActions }

class AbstractStoreModel<S> implements AltJS.StoreModel<S> {
  public bindActions: ( ...actions: Object[]) => void;
  public bindAction: ( ...args: any[]) => void;
  public bindListeners: (obj: any) => void;
  public exportPublicMethods: (config: {[key: string]: (...args: any[]) => any}) => any;
  public exportAsync: (source: any) => void;
  public waitFor: any;
  public exportConfig: any;
  public getState: () => S;
}

export { AbstractStoreModel }
