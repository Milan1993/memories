import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons/VisibilityOff";

const Input = ({ half, name, handleChange, label, autofocus, handleShowPassword, type }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autofocus={autofocus}
        type={type}
        InputProps={
          name === "password" && {
            endAndornment: (
              <InputAdornment position="end">
                <IconButton click={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
