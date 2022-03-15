import React, { useContext } from "react";
import MyContext from "../state/MyContext";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router-dom";

export default function AutoCompleted() {
  const context = useContext(MyContext);
  const history = useHistory();

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.name,
  });

  return (
    <div>
      <Autocomplete
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.defaultMuiPrevented = true;
          }
        }}
        disablePortal
        id="combo-box-demo"
        disableClearable
        options={context.materials}
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.name}
        onChange={(event, newValue) => {
          history.push(`/material/${newValue.id}`);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(option) => {
          return (
            <div
              dangerouslySetInnerHTML={{
                __html: option.name,
              }}
            ></div>
          ); //display value
        }}
      />
    </div>
  );
}
