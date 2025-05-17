import { Grid, Typography } from '@mui/material';

const logo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Tak_berjudul63-hd__2_-removebg-preview.png?alt=media&token=eca5f180-7753-4567-94a5-6ed13f674861";

const TitleEntrance = () => {
    return (
        <Grid item container justifyContent="center" alignItems={"center"} >
            <img
                src={logo}
                alt="Logo"
                style={{
                    width: '100px',
                    height: '100px',
                }}
            />
            <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                <span style={{ color: '#5AC9A2' }}>Green</span>
                <span style={{ color: '#006E6F' }}>Way</span>
            </Typography>
        </Grid>
    );
};

export default TitleEntrance;