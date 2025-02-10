import PropTypes from 'prop-types';
import { Paper, Skeleton, Stack, Typography } from '@mui/material';

const defaultSubtitle = "Lorem.";
const defaultValue = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui aperiam corrupti quis perspiciatis deleniti nobis consequatur distinctio id possimus ullam officia dolore asperiores maiores, quo expedita libero, eveniet culpa! Magni quo minus expedita distinctio provident fuga sapiente vero. Animi, ipsam! Ipsam delectus et voluptas dicta fuga! Illo quia minima ad voluptatum hic reprehenderit earum. Voluptate est explicabo repudiandae doloremque placeat incidunt labore iure, deleniti eius nesciunt ab perferendis pariatur temporibus sequi quo nulla, vero aspernatur obcaecati totam quis porro repellat voluptas ipsa maxime. Consequatur minus, animi quidem dignissimos in nesciunt reiciendis vitae distinctio quam sint repellendus, cumque vel libero?"

function LoadingDetailInformation({ subtitle, value }) {
    return (
        <Paper elevation={0} sx={{ py: 2, background: '#F8FFF8' }}>
            <Stack spacing={1}>
                <Skeleton>
                    <Typography sx={{ typography: { xs: 'body1', md: 'h5' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
                        {subtitle}
                    </Typography>
                </Skeleton>
                <Skeleton>
                    <Typography sx={{ typography: { xs: 'body1', md: 'body1' } }}>
                        {value}
                    </Typography>
                </Skeleton>
            </Stack>
        </Paper >
    )
};

LoadingDetailInformation.propTypes = {
    subtitle: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

LoadingDetailInformation.defaultProps = {
    subtitle: defaultSubtitle,
    value: defaultValue,
}

export default LoadingDetailInformation;
