import { Card, CardContent, Typography } from "@material-ui/core";

const UserCard = ({ user }) => {
  return (
    <Card variant="outlined">
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
