"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),shallowEqual=_interopDefault(require("fbjs/lib/shallowEqual"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var err=function(){return console.error("Provider is not rendered yet")},Prevent=function(e){function t(){var e,r,n;_classCallCheck(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return _possibleConstructorReturn(n,(r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(_assertThisInitialized(n),"shouldComponentUpdate",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.state;return e.select.some(function(e){return!shallowEqual(n.props.state[e],t[e])})}}),r))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.actions,r=e.select,n=e.state;return(0,e.children)({state:r.reduce(function(e,t){return _extends({},e,_defineProperty({},t,n[t]))},{}),actions:t})}}]),t}(),initStore=function(e){var t,r=React.createContext(),n=Object.keys(e.actions).reduce(function(r,n){return _extends({},r,_defineProperty({},n,function(){if(t){var r=e.actions[n](t.state);r.then?r.then(function(e){return t.setState(e)}):t.setState(r)}else err()}))},{});return{Provider:function(o){function i(){var t,r,n;_classCallCheck(this,i);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return _possibleConstructorReturn(n,(r=n=_possibleConstructorReturn(this,(t=i.__proto__||Object.getPrototypeOf(i)).call.apply(t,[this].concat(a))),Object.defineProperty(_assertThisInitialized(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:e.initialState}),r))}return _inherits(i,React.Component),_createClass(i,[{key:"componentDidMount",value:function(){t=this}},{key:"render",value:function(){return React__default.createElement(r.Provider,{value:{state:this.state,actions:n}},this.props.children)}}]),i}(),Consumer:function(e){var t=e.children,n=e.select;return React__default.createElement(r.Consumer,null,function(e){var r=e.state,o=e.actions;return React__default.createElement(Prevent,{select:n,state:r,actions:o},t)})},actions:n,getState:function(){return t?t.state:err()}}};exports.initStore=initStore;
//# sourceMappingURL=react-stateful.js.map
