const postComment = async (event) => {
  event.preventDefault();
  const content = document.querySelector(".comment").value.trim();
  const id = document.querySelector(".post-btn").value.trim();

  if (content) {
    console.log(content);
    console.log(id);
    const response = await fetch(`/api/comment/${id}`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "applicaton/json" },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".post-btn").addEventListener("click", postComment);
