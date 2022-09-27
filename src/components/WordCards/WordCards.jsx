import * as React from 'react';
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
import classes from './WordCards.style.js'

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

const WordCards = (props) => {
  const { item } = props
  const [expanded, setExpanded] = React.useState(false);

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
            {item?.verbtensewords.map((verb, index) => {
              return (
                <Typography ml={index!==0 && 3} className={classes.translationItem} key={index} variant="body2">
                  {verb}
                </Typography>)}
              )}
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
              <Typography paragraph color={'#cc0000'}>Translation =  </Typography>
              {item.translation.map((word, index) => {
                return <Typography className={classes.translationItem} ml={1} key={index} paragraph>{word}</Typography>
              }
              )}
            </Box>
            <Box className={classes.additionalContentContainer}>
              <Typography align='center'>{item.examplesentence}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default WordCards