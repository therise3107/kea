webpackJsonp([4],{198:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(925),o=(n.n(r),n(2)),u=n.n(o);n.d(t,"a",function(){return s});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"api-scene"},u.a.createElement("h1",null,"API"),u.a.createElement("code",null,"import { kea, connect, keaReducer, keaSaga } from 'kea'"),u.a.createElement("h2",null,u.a.createElement("code",null,"kea(options)")),u.a.createElement("p",null,"Create a new kea instance and connect it to redux."),u.a.createElement("h3",null,"Options"),u.a.createElement("h4",null,"path: ",u.a.createElement("code",null,"() => []")),u.a.createElement("h4",null,"constants: ",u.a.createElement("code",null,"() => []")),u.a.createElement("h4",null,"actions: ",u.a.createElement("code",null,"({ path, constants }) => ({})")),u.a.createElement("h4",null,"reducers: ",u.a.createElement("code",null,"({ path, constants, actions }) => ({})")),u.a.createElement("h4",null,"selectors: ",u.a.createElement("code",null,"({ path, constants, actions, selectors }) => ({})")),u.a.createElement("h4",null,"connect: ",u.a.createElement("code",null,"{}")),u.a.createElement("h4",null,"start: ",u.a.createElement("code",null,"function * () ","{}")),u.a.createElement("h4",null,"stop: ",u.a.createElement("code",null,"function * () ","{}")),u.a.createElement("h4",null,"takeEvery: ",u.a.createElement("code",null,"({ actions }) => ({})")),u.a.createElement("h4",null,"takeLatest: ",u.a.createElement("code",null,"({ actions }) => ({})")),u.a.createElement("h4",null,"workers: ",u.a.createElement("code",null,"{}")),u.a.createElement("h2",null,u.a.createElement("code",null,"kea(options)(Component)")),u.a.createElement("p",null,"Wrap a kea instance around a React component."),u.a.createElement("h3",null,"Options"),u.a.createElement("p",null,"Same as above, but in addition"),u.a.createElement("h4",null,"key: ",u.a.createElement("code",null,"(props) => 'key'")),u.a.createElement("h4",null,"path: ",u.a.createElement("code",null,"(key) => []")),u.a.createElement("h2",null,u.a.createElement("code",null,"connect(options)")),u.a.createElement("p",null,"Shorthand for ",u.a.createElement("code",null,"kea({ connect: options })")),u.a.createElement("h2",null,u.a.createElement("code",null,"keaReducer(reducerRoot)")),u.a.createElement("h2",null,u.a.createElement("code",null,"keaSaga")))}}]),t}(o.Component)},326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),l=(n.n(a),n(198));t.default=n.i(a.createScene)({name:"api",component:l.a})},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),l=(n.n(a),n(198));t.default=n.i(a.createScene)({name:"api",component:l.a})},557:function(e,t,n){t=e.exports=n(20)(),t.push([e.i,".api-scene {\n  margin: 20px;\n}\n",""])},925:function(e,t,n){var a=n(557);"string"==typeof a&&(a=[[e.i,a,""]]);n(22)(a,{});a.locals&&(e.exports=a.locals)},991:function(e,t,n){e.exports=n(326)}},[991]);