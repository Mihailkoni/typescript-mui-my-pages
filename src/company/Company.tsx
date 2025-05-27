import { Box, Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import company from "../data";
import Footer from "../components/Footer";


const Company = () => {
  const { id } = useParams();

  const structure = company[Number(id)];

  return (
    <div>
      <NavBar active="" />
      <Typography
        variant="h5"
        sx={{
          justifyContent: "center",
          display: "flex",
          marginTop: 5,
          fontFamily:"Montserrat"
        }}
      >
        {structure.titleLogo}
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          fontFamily:"Montserrat"
        }}
      >
        <img
          src={structure.imgLogo}
          alt=""
          style={{
            width: "24%",
            height: "24%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
      <Typography
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
          justifyContent: "center",
          margin: 5,
          alignItems: "flex-start",
          fontFamily:"Montserrat"
        }}
      >
        <Box 
            sx={{
                border: '1px solid ',
                borderColor: "lightgrey",
                borderRadius:"16px",
                padding:"12px",
                color:"#262626"
            }}
          >
            {structure.description[0]}
        </Box>
        <Box 
            sx={{
                border: '1px solid ',
                borderColor: "lightgrey",
                borderRadius:"16px",
                padding:"12px",
                color:"#262626"
            }}
          >{structure.description[1]}
        </Box>
        <Box 
            sx={{
                border: '1px solid ',
                borderColor: "lightgrey",
                borderRadius:"16px",
                padding:"12px",
                color:"#262626"
            }}
          >{structure.description[2]}
        </Box>
        <Box 
            sx={{
                border: '1px solid ',
                borderColor: "lightgrey",
                borderRadius:"16px",
                padding:"12px",
                color:"#262626"
            }}
          >{structure.description[3]}
        </Box>
      </Typography>{" "}
    <Footer/>
    </div>
  );
};

export default Company;