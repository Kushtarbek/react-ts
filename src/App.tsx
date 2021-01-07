import logo from "./logo.svg";
import "./App.css";
// import Message from "./Message";

// function App() {
//   //let aTuple: [string, number] = ["text ", 124];

//   // enum weekdays {
//   //   first = 1,
//   //   sec = 2,
//   // }

//   // //any
//   // let firstName: any = 123;

//   // //void
//   // const warning = (): void => {
//   //   console.log("Warning!");
//   // };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Message message="this is prop" />
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Message from "./Message";

const initialState = {
  name: "Manny2",
  message: "TypeScript is cool",
};

type State = Readonly<typeof initialState>;
class App extends Component<any, State> {
  readonly state: State = initialState;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
