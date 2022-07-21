import { Create, SimpleForm, TextInput } from "react-admin";

export default function LogoCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="picture" />
      </SimpleForm>
    </Create>
  );
}
