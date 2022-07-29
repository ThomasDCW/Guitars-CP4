import {
  Datagrid,
  List,
  NumberField,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function GuitarList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ImageField source="picture" />
        <TextField source="label" />
        <TextField source="brand" />
        <NumberField source="price" />
        <TextField source="style" />
        <TextField source="wood" />
        <TextField source="fret" />
        <TextField source="tunningfork" />
        <ImageField source="frontpicture" />
        <ImageField source="backpicture" />
        <ImageField source="botpicture" />
        <ImageField source="toppicture" />

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
