import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';

export default function OutlinedCard({ children, minWidth, maxWidth }) {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      minWidth,
      maxWidth,
      borderRadius: theme.shape.borderRadius,
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  );
}
