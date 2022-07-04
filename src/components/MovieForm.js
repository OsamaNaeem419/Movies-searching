import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
export const MovieForm = ({ movies }) => {
  const [movie, setMovie] = useState();
  const [rating, setRating] = useState();
  const [duration, setDuration] = useState();
  const [falseDuration, setFalseDuration] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let min = duration.toLowerCase().includes("min");
    let hr = duration.toLowerCase().includes("hr");
    console.log(min, hr);
    
    if (min || hr) {
      setFalseDuration(false);

      movies({ movie, rating, duration });
    } else {
      setFalseDuration(true);
    }
  };

  return (
    <Grid item lg={6} xs={12}>
      <Card>
        <form onSubmit={onSubmit}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Movie Name"
                  variant="outlined"
                  onChange={(e) => setMovie(e.target.value)}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  id="outlined-basic"
                  label="Rating"
                  variant="outlined"
                  onChange={(e) => setRating(e.target.value)}
                />
              </Grid>

              <Grid item lg={12} xs={12}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  id="outlined-basic"
                  label="Duration"
                  variant="outlined"
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                {falseDuration && (
                  <Typography variant="string" color="error">
                    *Duration must be in Min or hours!
                  </Typography>
                )}
              </Grid>
              <Grid item lg={12} xs={12} sx={{ textAlign: "center" }}>
                <Button type="submit" variant="contained">
                  Add Movie
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
    </Grid>
  );
};
