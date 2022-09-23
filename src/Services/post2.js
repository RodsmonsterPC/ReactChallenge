export const getPost = async () => {
  const response = await fetch("http://localhost:8080/post/");
  const data = await response.json();
  return data.posts;
};

export const getPostId = async (id) => {
  const response = await fetch(`http://localhost:8080/post/${id}`);
  const data = await response.json();
  return data.post;
};

export const postPost = async (data) => {
  const response = await fetch(`http://localhost:8080/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.user;
};
