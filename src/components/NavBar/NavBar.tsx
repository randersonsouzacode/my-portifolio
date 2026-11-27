import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavButton = styled(Button)(() => ({
  color: "white",
  textTransform: "none",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
}));

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{ background: "transparent", boxShadow: "none", zIndex: 3 }}
    >
      <StyledToolbar>
        <NavButton href="#about">About</NavButton>
        <NavButton href="#skills">Skills</NavButton>
        <NavButton href="#projects">Projects</NavButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;