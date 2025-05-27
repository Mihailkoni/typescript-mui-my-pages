import company from '../../data';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";


const imgData=company;

function Gallery() {
  return ( 
    <Container maxWidth="lg" >
        <Box sx={{m: '20px auto'}}>
            <ImageList variant="masonry" 
                sx={{
                    columnCount: {
                    xs: '1 !important',
                    sm: '2 !important',
                    md: '3 !important',
                    lg: '3 !important',
                    },
                }} 
                gap={8}>
            {imgData.map((item,index) => (
                <Link key={ index } to={ "/company/" + index }>
                  <ImageListItem key={item.img}>
                  <img
                      srcSet={ item.img }
                      src={ item.img }
                      alt={ item.title}
                      loading="lazy"
                      style={{
                        borderRadius: "16px",
                      }}
                  />
                <ImageListItemBar position="bottom" title={ item.title} style={{borderRadius: "16px", fontFamily:"Montserrat"}} />
              </ImageListItem>
              </Link>
            ))}
            </ImageList>
        </Box>
    </Container>
  );
}

export default Gallery;