import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ customersPerPage, totalCustomers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center object-bottom  gap-2 ">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              href="/home/:id"
              className="page-link border-2 rounded-3xl text-base p-1 font-bold text-yellow-900 bg-yellow-200"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
