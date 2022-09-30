import Link from "next/link";

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6 flex item-center justify-center p-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-900 text-gray-800 mr-1 hover:bg-gray-200 curosr-pointer">
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-900 text-gray-800 mr-1 hover:bg-gray-200 curosr-pointer">
              {i + 1}
            </li>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-900 text-gray-800 mr-1 hover:bg-gray-200 curosr-pointer">
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
