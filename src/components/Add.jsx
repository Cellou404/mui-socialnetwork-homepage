import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, EmojiEmotions, Image, PersonAdd, Send, VideoCameraBack } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled('div')({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add new post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { md: 20, xs: "calc(50% - 25px)", mb: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
            width={400}
            height={280}
            p={3}
            bgcolor={"background.default"} 
            color={"text.primary"}
            borderRadius={5}
        >
            <Typography variant="h6" color="gray" textAlign="center">
                Create Post
            </Typography>

            <UserBox>
            <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KwTZAk6YWKS139hHr8vaXv_SpAU-N_pxyOVn2AdO4YdvLkA4XXPmj4lI3dCkic4gMgQ&usqp=CAU"
              />
              <Typography variant="span" fontWeight={500}>Remy Sharp</Typography>
            </UserBox>
            <TextField
                sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                <Image color="secondary"/>
                <VideoCameraBack color="success"/>
                <PersonAdd color="error"/>
            </Stack>
            <ButtonGroup 
                fullWidth
                variant="contained" 
                aria-label="outlined primary button group"
            >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}><Send/></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
