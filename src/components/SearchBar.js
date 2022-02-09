import React, { useContext } from 'react'
import MyContext from '../state/MyContext'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import { useHistory } from 'react-router-dom'
//import banner_img from '../assets/banner.jpg'
//let test_banner_img = 'https://solid-waste-search.web.app/'

export default function SearchBar() {
  const context = useContext(MyContext)
  const history = useHistory()

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
  })

  return (
    <div className="searchContainer">
      {/* <img alt={'What Goes Where?'} className="searchImage" src={banner_img} /> */}
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={context.materials}
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.name}
        onChange={(event, newValue) => {
          history.push(`/material/${newValue.id}`)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            placeholder="Example: Battery"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  )
}
