import { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import UserCard from "../card/userCard";
import ButtonComponent from "../updateUser/button";
import Navbar from "../navbar/navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customMargin: {
    marginTop: "40px",
    gap: "20px",
  },
  customMarginbox: {
    margin: "0 auto",
    maxWidth: "1200px",
    width: "100%",
  },
  customMarginbutton: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const UserList = ({ posts }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = posts?.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  const classes = useStyles();

  return (
    <>
      <Navbar setSearch={setSearch} search={search} />
      <Grid container className={classes.customMarginbox}>
        {filteredUsers?.map((user) => (
          <Grid
            key={user.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className={classes.customMargin}
          >
            <UserCard user={user} />
          </Grid>
        ))}{" "}
        <Box mb={3} className={classes.customMarginbutton}>
          <ButtonComponent />
        </Box>
      </Grid>{" "}
    </>
  );
};

export default UserList;
