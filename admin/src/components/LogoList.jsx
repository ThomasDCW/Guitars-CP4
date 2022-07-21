import {
  Datagrid,
  List,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function LogoList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="label" />
        <ImageField source="picture" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
