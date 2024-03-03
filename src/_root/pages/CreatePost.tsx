import PostForm from "@/components/forms/PostForm"

const CreatePost = () => {
  return (
    <div className=" flex flex-1">
      {/* Tittle session */}
      <div className=" common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/add-post.svg" alt="add"
            width={36} height={36} />
            <h2 className="h3-bold md:h2-blod text-left w-full">Create Post</h2>
        </div>
            {/* Post Form section */}
          <PostForm action="Create"/>
      </div>
    </div>
  )
}

export default CreatePost