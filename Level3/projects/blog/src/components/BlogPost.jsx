export default function BlogPost(props) {
  const { title, subTitle, author, date } = props.blog;

  return (
    <div>
    <a className="title-link" href="x">
      <h1 className="title">{title}</h1>
      <p className="subTitle">{subTitle}</p>
    </a>
    
     <p className="author-date">Posted by <a className="author-link" href="#">{author}</a> on {date}</p>
     <hr></hr>
    </div>
  );
}
