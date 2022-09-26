import BodyCreate from "../components/CreatePost/BodyCreate";
import NavbarCreate from "../components/CreatePost/NavbarCreate";
import { postPost } from "../Services/post2";

const CreatePost = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <NavbarCreate />
      <BodyCreate token={token} />
    </div>
  );
};

export default CreatePost;
