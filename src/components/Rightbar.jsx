import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight="200">
          Online Freinds
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.hubspot.com/hubfs/Marketer%20learning%20how%20to%20write%20a%20blog%20post%20step%20by%20step%20to%20start%20a%20successful%20blog%20website.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wiqAgbSxVqfHbVv9ViaYIygdChD84-24ozkfCzDTjb79ux2f2ZWnWKpmnZzf0PJO20c&usqp=CAU"
          />
          <Avatar
            alt="Rrevor Henderson"
            src="https://www.hubspot.com/hubfs/Marketer%20learning%20how%20to%20write%20a%20blog%20post%20step%20by%20step%20to%20start%20a%20successful%20blog%20website.jpg"
          />
          <Avatar alt="Srevor Henderson" src="" />
          <Avatar
            alt="Lrevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wiqAgbSxVqfHbVv9ViaYIygdChD84-24ozkfCzDTjb79ux2f2ZWnWKpmnZzf0PJO20c&usqp=CAU"
          />
          <Avatar
            alt="Krevor Henderson"
            src="https://www.hubspot.com/hubfs/Marketer%20learning%20how%20to%20write%20a%20blog%20post%20step%20by%20step%20to%20start%20a%20successful%20blog%20website.jpg"
          />
          <Avatar
            alt="Hrevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight="200" mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={4}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=100&h=70&fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=70&fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=100&h=70&fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=100&h=70&fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=100&h=70&fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=100&h=70=fit=crop&auto=format&dpr=2"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight="200" mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, height: "220px", overflowX: "hidden", overflowY: "scroll", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://www.hubspot.com/hubfs/Marketer%20learning%20how%20to%20write%20a%20blog%20post%20step%20by%20step%20to%20start%20a%20successful%20blog%20website.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
