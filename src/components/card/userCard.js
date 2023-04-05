import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customMargin: {
    marginTop: "40px",
  },
  customMarginbox: {
    margin: "8px",
    width: "100%",
  },
});
const UserCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.customMarginbox}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {user?.name}
        </Typography>
        <Typography color="textSecondary">Email:{user?.email}</Typography>
        <Typography variant="body2" component="p">
          Address: {user?.address?.city}, {user?.address?.street},{" "}
          {user?.address?.suite}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
