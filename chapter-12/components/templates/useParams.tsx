import type { FC, SyntheticEvent } from "react";
import React from "react";
import { useParams, useMatch } from "react-router-dom";

const User: FC = () => {
  const params = useParams();
  const match = useMatch("/users/:id");
  const unmatch = useMatch("foo/bar/baz");
  console.log(params);
  console.log(match);
  console.log(unmatch);

  // /users/jerid だった時は、コンソールには次にように表示される
  /**
   * {user: "jerid"}
   * {params: {id: "jerid"}, pathname: "/users/jerid", pathnameBase: "/users/jerid", pattern: {path: "/users/:id", end: true, caseSensitive: false}}
   * null
   *
   */

  return (
    //...
  )
}

export default User;
