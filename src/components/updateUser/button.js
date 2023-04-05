import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@material-ui/core/Button";
import { axiosInstance } from "../../api/api";
import { ToastContainer } from "react-toastify";

const handlePutRequest = () => {
  axiosInstance
    .put("/users_error")
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error("Error occurred while updating user.");
    });
};

const ButtonComponent = () => {
  return (
    <>
      <ToastContainer />
      <Button variant="contained" color="primary" onClick={handlePutRequest}>
        Update User
      </Button>
    </>
  );
};

export default ButtonComponent;
