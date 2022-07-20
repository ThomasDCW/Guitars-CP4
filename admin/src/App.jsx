import { Admin, Resource } from "react-admin";
import GuitarList from "@components/GuitarList";
import GuitarEdit from "@components/GuitarEdit";
import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="guitars" list={GuitarList} edit={GuitarEdit} />
      </Admin>
    </div>
  );
}

export default App;
