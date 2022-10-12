import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Typography, Box } from '@mui/material';
import WordsTranslations from '../../utils/WordsTranslations';

export default function WordsTranslationsList() {
  return (
    <List sx={{ width: '100%', bgcolor: '#D4F1F4' }}>
      {WordsTranslations.map((value) => (
        <>
          <ListItem
            key={value}
            disableGutters
            style={{ padding: '1rem', marginBottom: '1rem' }}
            secondaryAction={(
              <Typography
                aria-label="comment"
                style={{ padding: '1rem' }}
              >
                {value.farsi}
              </Typography>
          )}
          >
            <Box style={{ width: '50%' }}>
              <ListItemText primary={value.german} />
              <Typography paragraph variant="caption">
                {value.sentence[0].german}
              </Typography>
            </Box>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}
