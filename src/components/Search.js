import { TextField } from "@mui/material"

export const Search = ({searches}) => {
  
  return (
    <TextField
            sx={{ mb: 1, mt: 1 }}
            fullWidth
            id="outlined-basic"
            label="Search Movie"
            variant="outlined"
            onChange={(e)=>searches(e.target.value)}
          />
  )
}
