import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/features/postSlice";
import UserList from "./components/userList/userList";

function App() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <UserList posts={posts} />
    </div>
  );
}

export default App;
