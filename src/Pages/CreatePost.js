import BodyCreate from "../components/CreatePost/BodyCreate";
import NavbarCreate from "../components/CreatePost/NavbarCreate";
import { postPost } from "../Services/post2";

const CreatePost = () => {
  return (
    <div>
      <NavbarCreate />
      <BodyCreate />
    </div>
  );
};

export default CreatePost;
