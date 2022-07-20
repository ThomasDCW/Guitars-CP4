import { Create, SimpleForm, TextInput } from "react-admin";

export default function GuitarCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="picture" />
        <TextInput source="label" />
        <TextInput source="brand" />
        <TextInput source="price" />
        <TextInput source="style" />
      </SimpleForm>
    </Create>
  );
}
