import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{ background: "transparent", boxShadow: "none", zIndex: 3 }}
    >
      <StyledToolbar>
        <Button href="#about" sx={{ color: "white", textTransform: "none" }}>
          About
        </Button>
        <Button href="#skills" sx={{ color: "white", textTransform: "none" }}>
          Skills
        </Button>
        <Button href="#projects" sx={{ color: "white", textTransform: "none" }}>
          Projects
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;