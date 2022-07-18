import { Admin, ListGuesser, Resource } from "react-admin";
import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="guitars" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
