import React from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import useInput from '../hooks/useInput';
import { asyncAddDiscussion } from '../states/discussion/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const AddDiscussionPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, onChangeTitle, setTitle] = useInput('');
    const [category, onChangeCategory, setCategory] = useInput('');
    const [body, onBodyChange, setBody] = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(asyncAddDiscussion({ title, category, body }));
        setTitle('');
        setCategory('');
        setBody('');
        navigate('/discussion')
    };

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={5} sx={{ pt: { xs: 2, md: 0 } }}>
                    <OneLineTitle title="Create New Discussion" />
                    <Stack spacing={2}>
                        <TextField id="title" label="Title" variant="outlined" value={title} onChange={onChangeTitle} />
                        <TextField id="category" label="Category" variant="outlined" value={category} onChange={onChangeCategory} />
                        <TextField id="content" label="Content" variant="outlined" multiline rows={5} value={body} onChange={onBodyChange} />
                        <Button variant="contained" sx={{ bgcolor: "#006E6F" }} onClick={handleSubmit}>Create</Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AddDiscussionPage;