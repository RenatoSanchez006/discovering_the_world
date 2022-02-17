import { Box, ButtonGroup, Button } from "@mui/material";

const Filter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        sx={{ flexWrap: "wrap" }}
        variant="outlined"
        size="small"
        aria-label="outlined small button group"
      >
        <Button>All</Button>
        <Button>Travel</Button>
        <Button>LifeStyle</Button>
        <Button>Business</Button>
        <Button>Food</Button>
        <Button>Work</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Filter;
