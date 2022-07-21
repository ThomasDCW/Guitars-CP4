import { Edit, SimpleForm, TextInput } from "react-admin";

export default function LogoEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="picture" />
        <TextInput source="link" />
      </SimpleForm>
    </Edit>
  );
}
