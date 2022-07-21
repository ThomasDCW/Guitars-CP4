import { Admin, ListGuesser, Resource } from "react-admin";
import GuitarList from "@components/GuitarList";
import GuitarEdit from "@components/GuitarEdit";
import GuitarCreate from "@components/GuitarCreate";
import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource
          name="guitars"
          list={GuitarList}
          edit={GuitarEdit}
          create={GuitarCreate}
        />
        <Resource name="logos" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
