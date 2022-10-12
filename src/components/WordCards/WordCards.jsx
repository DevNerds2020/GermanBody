/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { memo, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import firebase from '../../service/firebase';

import classes from './WordCards.style.js';
// import updateDocument from '../../service/firebase-crud/update';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function WordCards(props) {
  const { item } = props;
  const [expanded, setExpanded] = useState(false);
  // useEffect(() => {
  //   firebase.firestore().collection('verbs').doc(item.id).onSnapshot((doc) => {
  //     setWord(doc.data());
  //   });
  // }, [item.id]);

  // const handleSelectFavoriteClick = () => {
  //   updateDocument('verbs', item.id, { favorite: !word.favorite });
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.container}>
      <CardContent>
        <Box className={classes.upsideContentContainer}>
          <Box>
            <Typography variant="h5" className={classes.word}>
              {item.name}
            </Typography>
          </Box>
          <Box mt={5} className={classes.verbsTenseContainer}>
            {item.verbtensewords.map((verb, index) => (
              <Typography ml={index !== 0 && 3} className={classes.translationItem} variant="body2">
                {verb}
              </Typography>
            ))}
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={item.favorite ? { color: '#C80815' } : { color: '#a7a7a7' }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box className={classes.cardContentContainer}>
            <Box className={classes.translationContainer}>
              <Typography paragraph color="#cc0000">Translation =  </Typography>
              {item.translation.map((t) => <Typography className={classes.translationItem} ml={1} paragraph>{t}</Typography>)}
            </Box>
            <Box className={classes.additionalContentContainer}>
              <Typography align="center">{item.examplesentence}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default memo(WordCards);
