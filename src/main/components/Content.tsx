import Container from "@mui/material/Container";
import company from "../../data";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

const cardData = company;

function Content() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {cardData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <CompanyCard company={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;