import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import { Movie, AvTimer, TrendingUp } from "@mui/icons-material";

export const Lists = ({ movieList, searched }) => {
  return (
    <>
      {movieList &&
        movieList
          .filter((value) =>
            value.movies.movie.toLowerCase().includes(searched.toLowerCase())
          )
          .map((data) => (
            <List sx={{ background: "#bebebe" }} key={data.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Movie />
                  </ListItemIcon>
                  <ListItemText primary={data.movies.movie} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TrendingUp />
                  </ListItemIcon>
                  <ListItemText primary={data.movies.rating} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AvTimer />
                  </ListItemIcon>
                  <ListItemText primary={data.movies.duration} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <Divider />
            </List>
          ))}
    </>
  );
};
