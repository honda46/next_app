webpackHotUpdate_N_E("pages/fire",{

/***/ "./components/QR_sample.js":
/*!*********************************!*\
  !*** ./components/QR_sample.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_home_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_home_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_home_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_hook_qrcode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-qrcode */ "./node_modules/react-hook-qrcode/dist/react-hook-qrcode.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\home\\next_app\\components\\QR_sample.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var QR_sample = /*#__PURE__*/function (_Component) {
  Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QR_sample, _Component);

  var _super = _createSuper(QR_sample);

  function QR_sample(props) {
    var _this;

    Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, QR_sample);

    _this = _super.call(this, props);
    _this.state = {
      data: "a"
    };
    return _this;
  }

  Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(QR_sample, [{
    key: "getFireData",
    value: function () {
      var _getFireData = Object(C_home_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_home_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var Result, db, doc;
        return C_home_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Result = "Test";
                db = firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore();
                _context.next = 4;
                return db.collection('users').doc('001').get();

              case 4:
                doc = _context.sent;
                Result = JSON.stringify(doc.data(), undefined, 1);
                console.log("Document data:", Result); //ここのResultにはちゃんと格納されている

                this.setState(function (state) {
                  return {
                    data: Result
                  };
                }); //return Result;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFireData() {
        return _getFireData.apply(this, arguments);
      }

      return getFireData;
    }() // getQr(){
    //   this.state.data = this.getFireData() + "aaa";
    //   console.log("Document data:",this.state.data);//dataの中身は[object Promise]ABCなのでResultがうまく反映されていない
    //   //aではないためstateの更新は出来ている？
    //   //コンソールの順番が getQr → getFireDataになっている
    // }

  }, {
    key: "render",
    value: function render() {
      while (this.state.data == "a") {
        this.getFireData();
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          children: "\u53D6\u5F97"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, {
            value: this.state.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/other",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this);
    }
  }]);

  return QR_sample;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QR_sample); // getFireData(){
//   let Result = "Test";
//   const db = firebase.firestore();
//   db.collection('users').doc('001').get().then((doc) =>{
//     Result = JSON.stringify(doc.data());//←これだけがうまくいってない？というより非同期のため記録出来てない(コンソールは遅れても問題ない)
//     console.log(JSON.stringify(doc.data()));//←これも動作してる
//   });
//   this.state.data = Result;//this.state.dataはTestと表示されるためこれも動作している
//   console.log("Document data:",this.state.data);
// }

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RUl9zYW1wbGUuanMiXSwibmFtZXMiOlsiUVJfc2FtcGxlIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJSZXN1bHQiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJnZXRGaXJlRGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFM7Ozs7O0FBRUoscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFO0FBREssS0FBYjtBQUZpQjtBQUtsQjs7Ozs7Ozs7Ozs7QUFHS0Msc0IsR0FBUyxNO0FBQ1BDLGtCLEdBQUtDLGdEQUFRLENBQUNDLFNBQVQsRTs7dUJBQ09GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCLEtBQTNCLEVBQWtDQyxHQUFsQyxFOzs7QUFBWkQsbUI7QUFDTkwsc0JBQU0sR0FBR08sSUFBSSxDQUFDQyxTQUFMLENBQWVILEdBQUcsQ0FBQ04sSUFBSixFQUFmLEVBQTBCVSxTQUExQixFQUFvQyxDQUFwQyxDQUFUO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QlgsTUFBN0IsRSxDQUFxQzs7QUFDckMscUJBQUtZLFFBQUwsQ0FBYyxVQUFBZCxLQUFLO0FBQUEseUJBQUs7QUFDdEJDLHdCQUFJLEVBQUVDO0FBRGdCLG1CQUFMO0FBQUEsaUJBQW5CLEUsQ0FHQTs7Ozs7Ozs7Ozs7Ozs7O1FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUdRO0FBQ0wsYUFBTSxLQUFLRixLQUFMLENBQVdDLElBQVgsSUFBbUIsR0FBekIsRUFBNkI7QUFDM0IsYUFBS2MsV0FBTDtBQUNEOztBQUNGLDBCQUNFO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLGlDQUNFLHFFQUFDLG9EQUFEO0FBQVEsaUJBQUssRUFBRyxLQUFLZixLQUFMLENBQVdDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBS0kscUVBQUMsaURBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVdEOzs7O0VBNUNxQmUsK0M7O0FBK0NUbEIsd0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpcmUuM2QzMTQ4MjUxOWFjYzg5MmU3NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VRUkNvZGUgfSBmcm9tICdyZWFjdC1ob29rLXFyY29kZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZS5yZWFjdFwiO1xyXG5cclxuY2xhc3MgUVJfc2FtcGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFwiYVwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRGaXJlRGF0YSgpe1xyXG4gICAgbGV0IFJlc3VsdCA9IFwiVGVzdFwiO1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKCcwMDEnKS5nZXQoKTtcclxuICAgIFJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCksdW5kZWZpbmVkLDEpO1xyXG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBkYXRhOlwiLFJlc3VsdCk7Ly/jgZPjgZPjga5SZXN1bHTjgavjga/jgaHjgoPjgpPjgajmoLzntI3jgZXjgozjgabjgYTjgotcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgZGF0YTogUmVzdWx0LFxyXG4gICAgfSkpO1xyXG4gICAgLy9yZXR1cm4gUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0UXIoKXtcclxuICAvLyAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuZ2V0RmlyZURhdGEoKSArIFwiYWFhXCI7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IGRhdGE6XCIsdGhpcy5zdGF0ZS5kYXRhKTsvL2RhdGHjga7kuK3ouqvjga9bb2JqZWN0IFByb21pc2VdQUJD44Gq44Gu44GnUmVzdWx044GM44GG44G+44GP5Y+N5pig44GV44KM44Gm44GE44Gq44GEXHJcbiAgLy8gICAvL2Hjgafjga/jgarjgYTjgZ/jgoFzdGF0ZeOBruabtOaWsOOBr+WHuuadpeOBpuOBhOOCi++8n1xyXG4gIC8vICAgLy/jgrPjg7Pjgr3jg7zjg6vjga7poIbnlarjgYwgZ2V0UXIg4oaSIGdldEZpcmVEYXRh44Gr44Gq44Gj44Gm44GE44KLXHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICAgd2hpbGUodGhpcy5zdGF0ZS5kYXRhID09IFwiYVwiKXtcclxuICAgICAgIHRoaXMuZ2V0RmlyZURhdGEoKTtcclxuICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbj7lj5blvpc8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9IHt0aGlzLnN0YXRlLmRhdGF9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3RoZXJcIj5cclxuICAgICAgICAgICAgPGE+QmFjayB0byBIb21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBRUl9zYW1wbGU7XHJcblxyXG4vLyBnZXRGaXJlRGF0YSgpe1xyXG4vLyAgIGxldCBSZXN1bHQgPSBcIlRlc3RcIjtcclxuLy8gICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4vLyAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKCcwMDEnKS5nZXQoKS50aGVuKChkb2MpID0+e1xyXG4vLyAgICAgUmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSk7Ly/ihpDjgZPjgozjgaDjgZHjgYzjgYbjgb7jgY/jgYTjgaPjgabjgarjgYTvvJ/jgajjgYTjgYbjgojjgorpnZ7lkIzmnJ/jga7jgZ/jgoHoqJjpjLLlh7rmnaXjgabjgarjgYQo44Kz44Oz44K944O844Or44Gv6YGF44KM44Gm44KC5ZWP6aGM44Gq44GEKVxyXG4vLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSkpOy8v4oaQ44GT44KM44KC5YuV5L2c44GX44Gm44KLXHJcbi8vICAgfSk7XHJcbi8vICAgdGhpcy5zdGF0ZS5kYXRhID0gUmVzdWx0Oy8vdGhpcy5zdGF0ZS5kYXRh44GvVGVzdOOBqOihqOekuuOBleOCjOOCi+OBn+OCgeOBk+OCjOOCguWLleS9nOOBl+OBpuOBhOOCi1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgZGF0YTpcIix0aGlzLnN0YXRlLmRhdGEpO1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=