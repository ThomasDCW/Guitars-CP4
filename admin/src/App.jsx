import { Admin, Resource } from "react-admin";
import GuitarList from "@components/GuitarList";
import GuitarEdit from "@components/GuitarEdit";
import GuitarCreate from "@components/GuitarCreate";
import LogoList from "@components/LogoList";
import LogoEdit from "@components/LogoEdit";
import LogoCreate from "@components/LogoCreate";
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
        <Resource
          name="logos"
          list={LogoList}
          edit={LogoEdit}
          create={LogoCreate}
        />
      </Admin>
    </div>
  );
}

export default App;
