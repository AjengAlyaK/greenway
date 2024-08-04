import React from 'react';
import { Grid } from '@mui/material';
import DetailInformation from '../elements/sharing/DetailInformation';
import ImageInDetail from '../elements/sharing/ImageInDetail';

const temporary = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/hutan-lestari.jpg?alt=media&token=efb83375-f29a-46c7-925e-46a223f39bb0"
const content = [
    { index: 0, title: 'ID Campaign', value: 'hlGjpJbBAnr1JQlEgdT3' },
    { index: 1, title: 'Time Periode', value: '08 Juli 2024' },
    { index: 2, title: 'Link Enrollment', value: 'Link' },
    { index: 3, title: 'Description', value: 'Untuk meningkatkan kesadaran masyarakat dan wisatawan agar mengurangi penggunaan plastik sekali pakai di tempat wisata. Ikuti champaign ini dengan mengikuti post kegiatan anda saat berlibur di Candi Borobudur pada media sosial dengan #ChallangeTanpaPlastik. Pastikan anda menggunakan reusable bag, menggunakan botol air yang dibawa dari rumah dan tidak menggunakan sedotan plastik. Ditunggu postingannya!' }
];

const DetailCampaignPage = () => {
    return (
        <Grid container spacing={2} sx={{ py: 13, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12}>
                <ImageInDetail img={temporary} location="Candi Borobudur" title="Zero Waste" />
                {
                    content.map((detail, index) => (
                        <DetailInformation index={index} subtitle={detail.title} value={detail.value} />
                    ))
                }
            </Grid>
        </Grid >
    );
};

export default DetailCampaignPage;