import React, { FunctionComponent } from "react";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};
export default async function PostPage({ params }) {
  const posts = await fetchPosts();
  const { id } = params;

  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
