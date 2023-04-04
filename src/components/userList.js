import { useState } from "react";
import { Grid, Box, TextField } from "@material-ui/core";
import UserCard from "./userCard";
import ButtonComponent from "./button";

const UserList = ({ posts }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredUsers = posts?.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Box mb={3}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredUsers?.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
      <Box mb={3}>
        <ButtonComponent />
      </Box>
    </>
  );
};

export default UserList;
