// if we plan to use state for all the App we can create a namespace and export the state
export namespace App {
  export class ThemeState {
    constructor(public theme: string) {} // construct theme string
    static readonly type = '[App] Theme State'; // initiate type for the state see app.state.ts
  }
}
