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
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
