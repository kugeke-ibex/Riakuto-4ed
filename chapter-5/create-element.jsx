import { React } from "react";

React.createElement(
    "button",
    { type: "submit", autoFocus: true },
    "Click Here!"
);

// 戻り値
// {
//   type: 'button',
//   props: {
//   type: 'submit',
//   autoFocus: true,
//   children: 'Click Here',
//   },
//   key: null,
// };

/* <MyComponent foo="bar">baz</MyComponent>
↓
React.createElement('MyComponent', { foo: 'bar' }, 'baz');
↓
{
type: 'MyComponent',
props: {
foo: 'bar',
children: 'baz'
},
key: null,
} */
