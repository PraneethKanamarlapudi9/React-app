import InputField from "../input/InputField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const FormArea = () => {
  const fields = [
    {
      id: "Name",
      label: "name",
    },
    {
      id: "Email",
      label: "email",
    },
    {
      id: "Age",
      label: "age",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {fields.map((fields) => (
          <InputField key={fields.id} id={fields.id} label={fields.label} />
        ))}
        <Stack spacing={2} direction="row">
          <Button variant="contained">Submit</Button>
        </Stack>
      </div>
    </>
  );
};

export default FormArea;
