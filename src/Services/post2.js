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

export const postPost = async (data, token) => {
  const response = await fetch(`http://localhost:8080/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.user;
};

export const updatePost = async (id, data, token) => {
  const response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.post2Modify;
};

export const erasePost = async (id, token) => {
  const response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await response.json();
  return responseData;
};
