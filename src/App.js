// <<<<<<< HEAD
// import Body from "./components/Body";
// import appStore from "./utils/appStore";
// import { Provider } from "react-redux";

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Body />
//     </Provider>
// =======
// import "./App.css";

// function App() {
//   return (
//     <div className="font-4xl font-serif">
//       NetflixGpt
//     </div>
// >>>>>>> 9fcdac7 (cra and tailwind)
//   );
// }

// export default App;

import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

