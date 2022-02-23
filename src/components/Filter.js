import { useState } from "react";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";

const Filter = () => {
  const { category: headerCategory } = useParams();
  const [category, setCategoryState] = useState(headerCategory);
  const categories = require("../services/categories.json");

  const categoryHandler = (e, newCategory) => {
    if (newCategory !== null) {
      setCategoryState(newCategory);
    }
  };

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
      <ToggleButtonGroup
        value={category}
        exclusive
        onChange={categoryHandler}
        size="small"
      >
        <ToggleButton LinkComponent={RouterLink} to="/" value="">
          All
        </ToggleButton>
        {categories.map((cat) => {
          return (
            <ToggleButton
              LinkComponent={RouterLink}
              key={cat.value}
              to={`/${cat.label}`}
              value={cat.label}
            >
              {cat.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};

export default Filter;
