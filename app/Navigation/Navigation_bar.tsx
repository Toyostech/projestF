import Link from "next/link";
import React, { Fragment } from "react";
import { NAV_LINKS } from "../link/Link";

const Navigation_bar = () => {
  return (
    <Fragment>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",

            alignItems: "center",
            gap: 30,
            marginTop: 25,
          }}
        >
          <Link href="/">LoGe</Link>
          <ul
            style={{
              display: "flex",
              gap: 30,
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li>
                <Link key={link.key} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation_bar;
