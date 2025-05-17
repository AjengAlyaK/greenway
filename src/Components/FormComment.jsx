import PropTypes from 'prop-types';
import { Button, Grid, Stack, TextField } from '@mui/material';
import useInput from '../hooks/useInput';
import { useParams } from 'react-router';

const FormComment = ({ visibility, addComment }) => {
    const [comment, onCommentChange, setComment] = useInput('');
    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment({ comment, id });
        setComment('');
    };

    return (
        <Grid
            container
            item
            direction="column"
            display={visibility}
        >
            <Stack spacing={2}>
                <TextField
                    id="outlined-basic"
                    label="What's on your mind ?"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                    value={comment}
                    onChange={onCommentChange}
                />
                <Button variant="contained" sx={{ bgcolor: "#006E6F" }} onClick={handleSubmit}>Add Comment</Button>
            </Stack>
        </Grid>
    );
};

FormComment.propTypes = {
    addComment: PropTypes.func.isRequired,
};

FormComment.defaultProps = {
    visibility: 'flex',
};

export default FormComment;