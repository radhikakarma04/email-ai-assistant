
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import * as Mui from '@mui/material';
import './App.css'
import { Box, CircularProgress, Container, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply ]= useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const handleSubmit= async ()=>{
    setLoading(true);
    setError('');
    try{
      const response=await axios.post("http://localhost:8080/api/email/generate",{emailContent,
      tone});
      setGeneratedReply(typeof response.data == 'string' ? response.data : JSON.stringify(response.data));
    }catch{
      setError('Failed to generate response.Please try again');
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h3' component='h1' gutterBottom>
        Email Reply Generator
      </Typography>
      <Box sx={{mx:3}}>
        <TextField
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{mb:2}}
        />
        <FormControl fullWidth sx={{mb:2}}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone || ''}
            label={"Tone (Optional)"}
            onChange={(e) => setTone(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained'
        onClick={handleSubmit}
        disabled={!emailContent || loading}//if email content is empty then button should be disabled to avoid unnnecessary submission
        fullWidth>
          {loading ? <CircularProgress size={24}/> : "Generate Reply"}
        </Button>
      </Box>
      
      {error && (
        <Typography color='error' sx={{ mb:2}}>
          {error}
        </Typography>
      )}
      {generatedReply && (
        <Box sx={{mt:3}}>
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          value={generatedReply || ''}
          inputProps={{readOnly: true}}
          />
          <Button
          variant='outlined'
          sx={{mt:2}}
          onClick={()=>navigator.clipboard.writeText(generatedReply)}>
            Copy to ClipBoard
          </Button>
        </Box>
      )}

    </Container>
  )
}

export default App
