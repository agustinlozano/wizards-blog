const BlogField = ({ fild, content }) =>
  <>
    {
      (fild !== false)
        ? <p>{`${fild}: `} {content}</p>
        : <b>{content}</b>
    }
  </>

export default BlogField
