import React from "react";
import "./breadcrumb.css";
function Breadcrumb({ data }) {
  return (
    <section className="row brd" wrap-container="true">
      <section className="bg-white d-none d-md-block col-md-16">
        <div className="brdcrm brdcrm--inbox">
          <ul>
            <li className="brdcrm__item">
              <span>
                <a
                  href="/ae/en/"
                  className="brdcrm__item__lnk router-link-active"
                  target="_self"
                >
                  Home
                </a>
                <span className="brdcrm__item__arw">›</span>
              </span>
            </li>
            <li className="brdcrm__item" />
            <li className="brdcrm__item">
              <a className="brdcrm__item__lnk">{data}</a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Breadcrumb;
