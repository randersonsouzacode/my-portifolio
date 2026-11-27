import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  color: "white",
  borderColor: "white",
  borderRadius: "8px",
  padding: "8px 20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textTransform: "none",
  width: "180px",

  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(8, 136, 221, 0.1)",
  },
}));

export default StyledButton;
