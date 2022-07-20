import { Edit, SimpleForm, TextInput } from "react-admin";

export default function GuitarEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="picture" />
        <TextInput source="label" />
        <TextInput source="brand" />
        <TextInput source="price" />
        <TextInput source="style" />
      </SimpleForm>
    </Edit>
  );
}
