import Link from "next/link";

function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "orange",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };
  return (
    <div
      className={`px-2 py-1 text-gray-100 font-bold rounded`}
      style={{ background: `${colorKey[children]}` }}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}

export default CategoryLabel;
