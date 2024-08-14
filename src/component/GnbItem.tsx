import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

type GnbItemProps = {
  children?: React.ReactNode;
  name: string;
  href: string;
};

export default function GnbItem({ name, href, children }: GnbItemProps) {
  const pathname = useLocation().pathname;
  const open = pathname.includes(href);

  if (children) {
    const length = React.Children.count(children);
    return (
      <li className={classNames("parent", `items-${length}`, { open })}>
        <Link to={href}>{name}</Link>
        <ul className="subRoutes">{children}</ul>
      </li>
    );
  }

  return (
    <li className={classNames({ active: href === pathname })}>
      <Link to={href}>{name}</Link>
    </li>
  );
}
