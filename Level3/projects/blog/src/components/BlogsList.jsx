import BlogPost from "./BlogPost";

export default function BlogList(props) {

  return (
    <section className="blog-list">
      {props.blogs.map((blog) => (
        <BlogPost key={blog.title} blog={blog} />
      ))}
    </section>

    

  );
}
