import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterBox = styled(Box)(({ theme }) => ({
    color: "#262626",
    padding: theme.spacing(2),
    marginTop: 'auto',
    borderTopLeftRadius:'16px',
    borderTopRightRadius:'16px',
    borderTop:"1px solid lightgrey",
    borderLeft:"1px solid lightgrey",
    borderRight:"1px solid lightgrey"
}));

function Footer() {
    return (
        <Box component="footer" marginTop={5}>
            <FooterBox>
                <Container maxWidth="lg">
                    <Typography variant="body1" align="center">
                        <span>Кориков М.Е.</span>
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        <a style={{color:"#262626"}} href='https://github.com/Mihailkoni'>Github</a>
                    </Typography>
                </Container>
            </FooterBox>
        </Box>
    );
}

export default Footer;