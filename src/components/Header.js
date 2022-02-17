import { Box, Link, Typography } from "@mui/material";
import { deepOrange as orange, grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        display: "inline",
        alineItems: "center",
      }}
    >
      <Link component={RouterLink} to="/" underline="none">
        <Typography color={orange[400]} align="center" variant="subtitle1">
          [Making your Life Easier]
        </Typography>
        <Typography color={grey[800]} align="center" variant="h4" sx={{fontWeight: 'bold'}}> 
          Discovering the World
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
