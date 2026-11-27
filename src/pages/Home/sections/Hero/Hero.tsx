import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/Avatar.png";
import Galaxy from "../../../../assets/images/espaco.jpg";
import { Container, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import { keyframes } from "@mui/system";
import TypingText from "../../../../components/TypingText/TypingText";

const glow = keyframes`
  0%, 100% {
    box-shadow:
      0 0 10px 2px rgba(0, 200, 255, 0.6),
      0 0 30px 8px rgba(0, 200, 255, 0.3);
  }
  50% {
    box-shadow:
      0 0 20px 4px rgba(0, 220, 255, 0.9),
      0 0 50px 15px rgba(0, 200, 255, 0.4);
  }
`;

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${Galaxy})`,
    minHeight: "100vh", //altura
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  }));

  const StyledImg = styled("img")(() => ({
    display: "block",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    borderRadius: "50%",
    width: "75%",
    maxWidth: "350px",
    border: "5px solid hsl(197, 100%, 50%)",
    animation: `${glow} 8s ease-in-out infinite`,
  }));

  return (
    <>
      <StyledHero>
        <AnimatedBackground />

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h1"
                align="center"
                sx={{
                  color: "primary.contrastText",
                  fontSize: { xs: "3rem", md: "6rem" },
                }}
              >
                Randerson
              </Typography>

              <TypingText
                text="I'm a Software Engineer"
                speed={100}
                variant="h2"
                align="center"
                sx={{
                  color: "primary.contrastText",
                  fontSize: { xs: "1.8rem", md: "3.75rem" },
                }}
              />

              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center", mt: 8 }}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton
                  
                  href="/Randerson-Souza-Curriculo-Desenvolvedor.pdf"
                  {...{ download: "Randerson-Souza-Curriculo-Desenvolvedor.pdf" }}
                    onClick={() => console.log("download")}
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{ color: "white", borderColor: "white" }}
                  >
                    Download CV
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton
                  href="mailto:randerson.fsouza@gmail.com"
                    onClick={() => console.log("contact")}
                    variant="outlined"
                    startIcon={<EmailIcon />}
                  >
                    Contact me
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
