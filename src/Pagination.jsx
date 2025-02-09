export default function Pagination({ page_no, handlePage }) {
  return (
    <button className="page-no" onClick={() => handlePage(page_no)}>
      {page_no + 1}
    </button>
  );
}
