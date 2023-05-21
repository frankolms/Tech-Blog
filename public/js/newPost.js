const createPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const showPostForm = (event) => {
  event.preventDefault();
  const newPostBtn = document.getElementById("new-post");
  const postForm = document.getElementById("post-form");
  if (postForm.classList.contains("hidden")) {
    postForm.classList.remove("hidden");
    newPostBtn.classList.add("hidden");
  }
};

document.getElementById("submit-post").addEventListener("click", createPost);

document.getElementById("new-post").addEventListener("click", showPostForm);
