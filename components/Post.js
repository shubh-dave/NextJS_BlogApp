import Link from "next/link";
import Image from "next/image";

function Post({ post }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      {console.log(post)}
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={420}
        width={600}
      />
    </div>
  );
}

export default Post;
