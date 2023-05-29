const updatePostForm = (event) => {
  event.preventDefault();
  const updateForm = document.querySelector(".update-form");
  const postTitle = document.querySelector(".post-title");
  const postContent = document.querySelector(".post-content");
  const showUpdateFormBtn = document.querySelector(".show-update-form");
  const updatedTitle = document.querySelector(".updated-title");
  const updatedContent = document.querySelector(".updated-content");
  const commentsSection = document.querySelector(".comment-form");
  if (updateForm.classList.contains("hidden")) {
    updateForm.classList.remove("hidden");
    showUpdateFormBtn.classList.add("hidden");
    commentsSection.classList.add("hidden");
    updatedTitle.value = postTitle.innerHTML;
    updatedContent.value = postContent.innerHTML;
  }
};

const updatePost = async (event) => {
  event.preventDefault();
  const title = document.querySelector(".updated-title").value.trim();
  const content = document.querySelector(".updated-content").value.trim();
  const id = document.querySelector(".update-post").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
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

const deletePost = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".show-update-form")
  .addEventListener("click", updatePostForm);

document.querySelector(".update-post").addEventListener("click", updatePost);

document.querySelector(".delete-post").addEventListener("click", deletePost);
