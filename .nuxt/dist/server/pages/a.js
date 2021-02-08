exports.ids = [1];
exports.modules = {

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ed05cc6a", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_a_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_a_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_a_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_a_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_a_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "input[type=text]{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/a.vue?vue&type=template&id=948a8558&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"myapp"}},[_vm._ssrNode("<table border=\"1\" width=\"80%\" style=\"border-collapse: collapse;\"><tr><th>Username</th> <th>Name</th> <th>Email</th> <th></th></tr> <tr><td><input type=\"text\""+(_vm._ssrAttr("value",(_vm.username)))+"></td> <td><input type=\"text\""+(_vm._ssrAttr("value",(_vm.name)))+"></td> <td><input type=\"text\""+(_vm._ssrAttr("value",(_vm.email)))+"></td> <td><input type=\"button\" value=\"Add\"></td></tr> "+(_vm._ssrList((_vm.users),function(user,index){return ("<tr><td><input type=\"text\""+(_vm._ssrAttr("value",(user.username)))+"></td> <td><input type=\"text\""+(_vm._ssrAttr("value",(user.name)))+"></td> <td><input type=\"text\""+(_vm._ssrAttr("value",(user.email)))+"></td> <td><input type=\"button\" value=\"Update\"> \n        <input type=\"button\" value=\"Delete\"></td></tr>")}))+"</table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/a.vue?vue&type=template&id=948a8558&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(26);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/a.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var avue_type_script_lang_js_ = ({
  name: "dapp",
  data: {
    users: "",
    userid: 0,
    username: "",
    name: "",
    email: ""
  },
  methods: {
    allRecords: function () {
      external_axios_default.a.post('ajaxfile.php', {
        request: 1
      }).then(function (response) {
        app.users = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    addRecord: function () {
      if (this.username != '' && this.name != '' && this.email != '') {
        external_axios_default.a.post('ajaxfile.php', {
          request: 2,
          username: this.username,
          name: this.name,
          email: this.email
        }).then(function (response) {
          // Fetch records
          app.allRecords(); // Empty values

          app.username = '';
          app.name = '';
          app.email = '';
          alert(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        alert('Fill all fields.');
      }
    },
    updateRecord: function (index, id) {
      // Read value from Textbox
      var name = this.users[index].name;
      var email = this.users[index].email;

      if (name != '' && email != '') {
        external_axios_default.a.post('ajaxfile.php', {
          request: 3,
          id: id,
          name: name,
          email: email
        }).then(function (response) {
          alert(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    deleteRecord: function (index, id) {
      external_axios_default.a.post('ajaxfile.php', {
        request: 4,
        id: id
      }).then(function (response) {
        // Remove index from users
        app.users.splice(index, 1);
        alert(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created: function () {
    this.allRecords();
  }
});
// CONCATENATED MODULE: ./pages/a.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_avue_type_script_lang_js_ = (avue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./pages/a.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_avue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51bfb590"
  
)

/* harmony default export */ var a = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=a.js.map