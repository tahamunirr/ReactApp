import React from "react";
import { Pagination } from "react-bootstrap";
import "../css/page.css";
function Page() {
  return (
    <Pagination id="pgNum">
      <Pagination.Item>
        <span aria-hidden="true" className="pn">
          &laquo;
        </span>
        PREV
      </Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{49}</Pagination.Item>
      <Pagination.Item>{50}</Pagination.Item>
      <Pagination.Item>
        NEXT
        <span aria-hidden="true" className="pn">
          &raquo;
        </span>
      </Pagination.Item>
    </Pagination>
  );
}

export default Page;
