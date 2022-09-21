import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import AddContactForm from "./form.addContact";
import DeleteContactForm from "./form.deleteContact";
import UpdateContactForm from "./form.updateContact";

export default function BasicSelect() {
  const [action, setAction] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAction(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <div className="p-10">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ minWidth: 120, maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Action</InputLabel>
            <Select
              labelId="action-selector"
              id="action-selector"
              value={action}
              label="Action"
              onChange={handleChange}
            >
              <MenuItem value={"add"}>Add</MenuItem>
              <MenuItem value={"update"}>Update</MenuItem>
              <MenuItem value={"delete"}>Delete</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {action === "add" && <AddContactForm />}
      {action === "update" && <UpdateContactForm />}
      {action === "delete" && <DeleteContactForm />}
    </div>
  );
}
