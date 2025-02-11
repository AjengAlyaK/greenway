import PropTypes from 'prop-types';
import { Paper, Skeleton, Stack, Typography } from '@mui/material';

const defaultSubtitle = "Lorem.";
const defaultValue = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste odit cumque laudantium reiciendis? Ea, libero accusantium. Debitis harum reprehenderit esse inventore, fugiat earum rem nihil! Cumque repellat facere quos repellendus dicta vitae delectus commodi nisi soluta unde? Impedit quisquam tempore hic voluptatibus magnam ullam nobis dolore unde modi quos facere nesciunt cumque saepe, possimus nostrum non illum nisi atque officiis voluptatem! Magni non nulla sed culpa similique adipisci aut, ipsa modi velit ea nostrum sint in provident commodi quae veniam voluptatem fuga. Quos possimus illo hic voluptatum asperiores suscipit, modi excepturi, exercitationem perspiciatis officiis necessitatibus cumque fugit soluta mollitia explicabo ex optio eveniet tempore labore ratione sapiente minima saepe libero! Enim modi unde culpa. Repellendus dolor a cupiditate aliquam nobis eveniet ipsum omnis. Et fuga dolorem ipsum beatae ducimus eligendi sequi delectus nobis nemo inventore odit nulla modi minus non, dolore praesentium aut. Eveniet laboriosam perferendis exercitationem aliquid placeat, ullam magnam alias velit similique illum voluptas dolores molestiae recusandae dignissimos optio! Asperiores consectetur adipisci magni, iste deleniti laboriosam voluptate commodi suscipit aut, perspiciatis repellat dolore amet voluptatum temporibus soluta, tempora quo! Quibusdam, quisquam? Porro, itaque, laborum doloribus adipisci sequi tenetur odit quam qui pariatur ea impedit unde, eius ullam."

function LoadingDetailInformation({ subtitle, value }) {
    return (
        <Paper elevation={0} sx={{ py: 2, background: '#F8FFF8' }}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular">
                    <Typography sx={{ typography: { xs: 'body1', md: 'h5' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
                        {subtitle}
                    </Typography>
                </Skeleton>
                <Skeleton variant="rectangular"width="100%">
                    <Typography sx={{ typography: 'body1' }}>
                        {value}
                    </Typography>
                </Skeleton>
            </Stack>
        </Paper >
    )
};

LoadingDetailInformation.propTypes = {
    subtitle: PropTypes.string,
    value: PropTypes.string,
};

LoadingDetailInformation.defaultProps = {
    subtitle: defaultSubtitle,
    value: defaultValue,
}

export default LoadingDetailInformation;
