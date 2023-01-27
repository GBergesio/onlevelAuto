import { Grid, TextField } from "@mui/material";
import React from "react";

export default function CarForm() {
  return (
    <Grid component="form" noValidate >
      <Grid
        container
        spacing={1}
        display="flex"
        flexDirection="row"
        sx={{ mt: 3, mb: 3 }}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="modelo"
            id="modelo"
            name="modelo"
            size="small"
            placeholder="Modelo"
            // required
            // value={values.name}
            // onChange={handleChange}
            // placeholder={placeH}
            // onBlur={(e) => {
            //   const val = (e.target.value || "").replace(/\s+/gi, " ");
            //   setFieldValue(e.target.name, val.trim());
            //   handleBlur(e);
            // }}
            // error={touched.name && Boolean(errors.name)}
            // helperText={
            //   touched.name && Boolean(errors.name) ? errors.name : " "
            // }
            // disabled={isSubmitting}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
// onSubmit={handleSubmit}