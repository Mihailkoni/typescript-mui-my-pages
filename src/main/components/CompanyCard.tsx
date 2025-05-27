import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "justify",
  marginBottom: theme.spacing(2),
}));

interface ComponentProps {
  company: {
    img: string;
    imgLogo:string;
    title: string;
    titleLogo:string;
    description: string[];
  };
  index: number;
}

function CompanyCard({ company, index }: ComponentProps) {
  const isEven = index % 2 === 0;

  return (
    <Card
      sx={{ display: "flex", flexDirection: isEven ? "row-reverse" : "row", height:"100%", borderRadius:"16px" }}
    >
      <CardMedia
        component="img"
        alt={company.titleLogo}
        image={company.imgLogo}
        sx={{ width: "50%", objectFit: "cover" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <CardContent style={{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center"}}>
          <Typography gutterBottom variant="h5" style={{fontFamily: "Montserrat"}}>
            {company.titleLogo}
          </Typography>
          
          <StyledTypography variant="body2" style={{fontFamily: "Montserrat"}}>
            {company.description[0]}
          </StyledTypography>

        </CardContent>
        <CardActions
          sx={{ justifyContent: isEven ? "end" : "start", px: 2, pb: 2 }}
        >
          <Link key={ index } to={ "/company/" + index }><Button size="small" variant="contained" style={{borderRadius:"16px"}}><span>Подробнее</span></Button></Link>
        </CardActions>
      </Box>
    </Card>
  );
}

export default CompanyCard;