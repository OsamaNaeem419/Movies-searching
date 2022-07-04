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
            <List   sx={{ width: '75%' }} key={data.id} >
              <ListItem  disablePadding>
                <ListItemButton sx={{ background: "#87ceeb" }}>
                  <ListItemIcon>
                    <Movie />
                  </ListItemIcon>
                  <ListItemText  primary={data.movies.movie} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ background: "#1e90ff" }}>
                  <ListItemIcon>
                    <TrendingUp />
                  </ListItemIcon>
                  <ListItemText primary={data.movies.rating} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ background: "#73c2fb" }}>
                  <ListItemIcon>
                    <AvTimer />
                  </ListItemIcon>
                  <ListItemText primary={data.movies.duration} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <br/>
            </List>
          ))}
    </>
  );
};
