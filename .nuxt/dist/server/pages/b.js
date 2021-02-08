exports.ids = [2];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass
var VProgressLinear = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
 // Components

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(positionable["b" /* factory */])(['absolute', 'fixed', 'top', 'bottom']), proxyable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VProgressLinear_VProgressLinear = (baseMixins.extend({
  name: 'v-progress-linear',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(helpers["f" /* convertToUnit */])(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(helpers["f" /* convertToUnit */])(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(helpers["f" /* convertToUnit */])(this.normalizedValue, '%'),
        width: Object(helpers["f" /* convertToUnit */])(this.normalizedBuffer - this.normalizedValue, '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? transitions["c" /* VFadeTransition */] : transitions["e" /* VSlideXTransition */];
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(helpers["f" /* convertToUnit */])(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = Object(helpers["m" /* getSlot */])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(helpers["f" /* convertToUnit */])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js


/* harmony default export */ var components_VProgressLinear = (VProgressLinear_VProgressLinear);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ var loadable = __webpack_exports__["a"] = (external_vue_default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(components_VProgressLinear, {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-application{font-family:\"Fira Sans\",sans-serif!important;line-height:1.5;margin-bottom:1em!important;margin-right:1em!important}.v-toolbar__title{font-size:2rem;line-height:2}.v-list-item__title{align-self:center;font-size:1.5rem}.nameDispSm{font-family:\"Fira Mono\",monospace!important}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("cf87dc84", content, true)

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-application{font-family:\"Fira Sans\",sans-serif!important;line-height:1.5;margin-bottom:1em!important;margin-right:1em!important}.v-toolbar__title{font-size:2rem;line-height:2}.v-list-item__title{align-self:center;font-size:1.5rem}.nameDispSm{font-family:\"Fira Mono\",monospace!important}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c1d8e262", content, true)

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-application{font-family:\"Fira Sans\",sans-serif!important;line-height:1.5;margin-bottom:1em!important;margin-right:1em!important}.v-toolbar__title{font-size:2rem;line-height:2}.v-list-item__title{align-self:center;font-size:1.5rem}.nameDispSm{font-family:\"Fira Mono\",monospace!important}.theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ea7cf7aa", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("22dd1e4b", content, true, context)
};

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-slider--vertical{min-height:420px;margin-top:12px;margin-bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_1_id_69311a41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_1_id_69311a41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_1_id_69311a41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_1_id_69311a41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_b_vue_vue_type_style_index_1_id_69311a41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "svg[data-v-69311a41]:not(:root){height:500px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "w"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "w"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "w"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_VInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_loadable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  },
  mixins: [_mixins_loadable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: () => []
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: () => ({
    app: null,
    oldValue: null,
    keyPressed: 0,
    isFocused: false,
    isActive: false,
    noClick: false
  }),
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      };
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        const value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }

    },

    trackTransition() {
      return this.keyPressed >= 2 ? 'none' : '';
    },

    minValue() {
      return parseFloat(this.min);
    },

    maxValue() {
      return parseFloat(this.max);
    },

    stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },

    inputWidth() {
      return (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
    },

    trackFillStyles() {
      const startDir = this.vertical ? 'bottom' : 'left';
      const endDir = this.vertical ? 'top' : 'right';
      const valueDir = this.vertical ? 'height' : 'width';
      const start = this.$vuetify.rtl ? 'auto' : '0';
      const end = this.$vuetify.rtl ? '0' : 'auto';
      const value = this.isDisabled ? `calc(${this.inputWidth}% - 10px)` : `${this.inputWidth}%`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end,
        [valueDir]: value
      };
    },

    trackStyles() {
      const startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      const endDir = this.vertical ? 'height' : 'width';
      const start = '0px';
      const end = this.isDisabled ? `calc(${100 - this.inputWidth}% - 10px)` : `calc(${100 - this.inputWidth}%)`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end
      };
    },

    showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },

    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },

    showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },

    computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },

    computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },

    computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }

  },
  watch: {
    min(val) {
      const parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },

    max(val) {
      const parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },

    value: {
      handler(v) {
        this.internalValue = v;
      }

    }
  },

  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount() {
    this.internalValue = this.value;
  },

  mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* consoleWarn */ "c"])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },

  methods: {
    genDefaultSlot() {
      const children = [this.genLabel()];
      const slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },

    genSlider() {
      return this.$createElement('div', {
        class: {
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly,
          ...this.themeClasses
        },
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown
        }
      }, this.genChildren());
    },

    genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onSliderMouseDown, this.onFocus, this.onBlur)];
    },

    genInput() {
      return this.$createElement('input', {
        attrs: {
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1,
          ...this.$attrs
        }
      });
    },

    genTrackContainer() {
      const children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },

    genSteps() {
      if (!this.step || !this.showTicks) return null;
      const tickSize = parseFloat(this.tickSize);
      const range = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* createRange */ "g"])(this.numTicks + 1);
      const direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      const offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      const ticks = range.map(index => {
        const children = [];

        if (this.tickLabels[index]) {
          children.push(this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, this.tickLabels[index]));
        }

        const width = index * (100 / this.numTicks);
        const filled = this.$vuetify.rtl ? 100 - this.inputWidth < width : width < this.inputWidth;
        return this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: {
            width: `${tickSize}px`,
            height: `${tickSize}px`,
            [direction]: `calc(${width}% - ${tickSize / 2}px)`,
            [offsetDirection]: `calc(50% - ${tickSize / 2}px)`
          }
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },

    genThumbContainer(value, valueWidth, isActive, isFocused, onDrag, onFocus, onBlur, ref = 'thumb') {
      const children = [this.genThumb()];
      const thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
          ...this.$attrs
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown,
          keyup: this.onKeyUp,
          touchstart: onDrag,
          mousedown: onDrag
        }
      }), children);
    },

    genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value
      }) : [this.$createElement('span', [String(value)])];
    },

    genThumbLabel(content) {
      const size = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.thumbSize);
      const transform = this.vertical ? `translateY(20%) translateY(${Number(this.thumbSize) / 3 - 1}px) translateX(55%) rotate(135deg)` : `translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)`;
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VScaleTransition */ "d"], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform
        }
      }), [this.$createElement('div', content)])])]);
    },

    genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },

    getThumbContainerStyles(width) {
      const direction = this.vertical ? 'top' : 'left';
      let value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return {
        transition: this.trackTransition,
        [direction]: `${value}%`
      };
    },

    onSliderMouseDown(e) {
      e.preventDefault();
      this.oldValue = this.internalValue;
      this.keyPressed = 2;
      this.isActive = true;
      const mouseUpOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* passiveSupported */ "u"] ? {
        passive: true,
        capture: true
      } : true;
      const mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* passiveSupported */ "u"] ? {
        passive: true
      } : false;

      if ('touches' in e) {
        this.app.addEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
        Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* addOnceEventListener */ "a"])(this.app, 'touchend', this.onSliderMouseUp, mouseUpOptions);
      } else {
        this.onMouseMove(e);
        this.app.addEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
        Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* addOnceEventListener */ "a"])(this.app, 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      }

      this.$emit('start', this.internalValue);
    },

    onSliderMouseUp(e) {
      e.stopPropagation();
      this.keyPressed = 0;
      const mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* passiveSupported */ "u"] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* deepEqual */ "i"])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },

    onMouseMove(e) {
      const {
        value
      } = this.parseMouseMove(e);
      this.internalValue = value;
    },

    onKeyDown(e) {
      if (!this.isInteractive) return;
      const value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },

    onKeyUp() {
      this.keyPressed = 0;
    },

    onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      const thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    parseMouseMove(e) {
      const start = this.vertical ? 'top' : 'left';
      const length = this.vertical ? 'height' : 'width';
      const click = this.vertical ? 'clientY' : 'clientX';
      const {
        [start]: trackStart,
        [length]: trackLength
      } = this.$refs.track.getBoundingClientRect();
      const clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // Can we get rid of any here?
      // It is possible for left to be NaN, force to number

      let clickPos = Math.min(Math.max((clickOffset - trackStart) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      const isInsideTrack = clickOffset >= trackStart && clickOffset <= trackStart + trackLength;
      const value = parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
      return {
        value,
        isInsideTrack
      };
    },

    parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      const {
        pageup,
        pagedown,
        end,
        home,
        left,
        right,
        down,
        up
      } = _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* keyCodes */ "q"];
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepNumeric || 1;
      const steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        this.keyPressed += 1;
        const increase = this.$vuetify.rtl ? [left, up] : [right, up];
        const direction = increase.includes(e.keyCode) ? 1 : -1;
        const multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        const direction = e.keyCode === pagedown ? 1 : -1;
        value = value - direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },

    roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      const offset = this.minValue % this.stepNumeric;
      const newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }

  }
}));

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/b.vue?vue&type=template&id=69311a41&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"d-inline-block mx-auto"},[_c('v-container',[_c('v-row',{attrs:{"justify":"space-between"}},[_c('v-col',{attrs:{"cols":"auto","align":"center"}},[_c('v-row',[_c('v-col',[_c('v-slider',{attrs:{"color":_vm.hexcolorR,"track-color":"grey","always-dirty":"","min":0,"max":15,"step":"1","ticks":"always","tick-size":"4","tick-label":"always","tick-labels":_vm.ticksLabels,"vertical":"","hide-details":""},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorR},on:{"click":_vm.decrement1}},[_vm._v("mdi-arrow-down-drop-circle")])]},proxy:true},{key:"append",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorR},on:{"click":_vm.increment1}},[_vm._v("mdi-arrow-up-drop-circle")])]},proxy:true}]),model:{value:(_vm.sliderInput1),callback:function ($$v) {_vm.sliderInput1=$$v},expression:"sliderInput1"}})],1),_vm._v(" "),_c('v-col',[_c('v-slider',{attrs:{"color":_vm.hexcolorG,"track-color":"grey","always-dirty":"","min":0,"max":15,"step":"1","ticks":"always","tick-size":"4","tick-label":"always","tick-labels":_vm.ticksLabels,"vertical":"","hide-details":""},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorG},on:{"click":_vm.decrement2}},[_vm._v("mdi-arrow-down-drop-circle")])]},proxy:true},{key:"append",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorG},on:{"click":_vm.increment2}},[_vm._v("mdi-arrow-up-drop-circle")])]},proxy:true}]),model:{value:(_vm.sliderInput2),callback:function ($$v) {_vm.sliderInput2=$$v},expression:"sliderInput2"}})],1),_vm._v(" "),_c('v-col',[_c('v-slider',{attrs:{"color":_vm.hexcolorB,"track-color":"grey","always-dirty":"","min":0,"max":15,"step":"1","ticks":"always","tick-size":"4","tick-label":"always","tick-labels":_vm.ticksLabels,"vertical":"","hide-details":""},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorB},on:{"click":_vm.decrement3}},[_vm._v("mdi-arrow-down-drop-circle")])]},proxy:true},{key:"append",fn:function(){return [_c('v-icon',{attrs:{"color":_vm.hexcolorB},on:{"click":_vm.increment3}},[_vm._v("mdi-arrow-up-drop-circle")])]},proxy:true}]),model:{value:(_vm.sliderInput3),callback:function ($$v) {_vm.sliderInput3=$$v},expression:"sliderInput3"}})],1)],1)],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"auto"}},[_c('a',{style:({
        '--base': _vm.canvas,
        '--ink': _vm.hexcolorRGB,
        '--hasMonocleL': _vm.visible1,
        '--hasMonocleR': _vm.visible2,
        '--hasMask': _vm.visible3,
        '--hasMonopod': _vm.visible4,
        '--hasMic': _vm.visible5,
        '--hasM16': _vm.visible6,
        '--hasMonohat': _vm.switch7,
        '--hasMoustache': _vm.switch8,
        '--hasMonoplane': _vm.switch9,
        '--hasMoon': _vm.switch10
        }),attrs:{"href":""}},[_c('monoLisaAvatar')],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"space-around"}})],1),_vm._v(" "),_c('v-col',{staticClass:"text-center pl-0",attrs:{"cols":"auto"}},[_c('v-row',{staticClass:"flex-column ma-0",attrs:{"justify":"center"}},[_c('v-col',{staticClass:"px-0"},[_c('v-switch',{attrs:{"color":"yellow","hide-details":""},model:{value:(_vm.switch1),callback:function ($$v) {_vm.switch1=$$v},expression:"switch1"}},[_vm._v("Fade Transition")]),_vm._v(" "),_c('v-switch',{attrs:{"color":"yellow","hide-details":""},model:{value:(_vm.switch2),callback:function ($$v) {_vm.switch2=$$v},expression:"switch2"}},[_vm._v("Fade Transition")]),_vm._v(" "),_c('v-switch',{attrs:{"color":"yellow","hide-details":""},model:{value:(_vm.switch3),callback:function ($$v) {_vm.switch3=$$v},expression:"switch3"}},[_vm._v("Fade Transition")])],1),_vm._v(" "),_c('v-col',{staticClass:"px-0"},[_c('v-switch',{attrs:{"color":"light-green","hide-details":""},model:{value:(_vm.switch4),callback:function ($$v) {_vm.switch4=$$v},expression:"switch4"}}),_vm._v(" "),_c('v-switch',{attrs:{"color":"light-green","hide-details":""},model:{value:(_vm.switch5),callback:function ($$v) {_vm.switch5=$$v},expression:"switch5"}}),_vm._v(" "),_c('v-switch',{attrs:{"color":"light-green","hide-details":""},model:{value:(_vm.switch6),callback:function ($$v) {_vm.switch6=$$v},expression:"switch6"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-0"},[_c('v-switch',{attrs:{"color":"orange","false-value":"none","true-value":"one","hide-details":""},model:{value:(_vm.switch7),callback:function ($$v) {_vm.switch7=$$v},expression:"switch7"}}),_vm._v(" "),_c('v-switch',{attrs:{"color":"lime","false-value":"none","true-value":"one","hide-details":""},model:{value:(_vm.switch8),callback:function ($$v) {_vm.switch8=$$v},expression:"switch8"}}),_vm._v(" "),_c('v-switch',{attrs:{"color":"cyan","false-value":"none","true-value":"one","hide-details":""},model:{value:(_vm.switch9),callback:function ($$v) {_vm.switch9=$$v},expression:"switch9"}}),_vm._v(" "),_c('v-switch',{attrs:{"color":"purple","false-value":"none","true-value":"one","hide-details":""},model:{value:(_vm.switch10),callback:function ($$v) {_vm.switch10=$$v},expression:"switch10"}})],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/b.vue?vue&type=template&id=69311a41&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./assets/mono7.svg?vue&type=template&id=cfd88f24&
var mono7vue_type_template_id_cfd88f24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 667 1000"}},_vm.$listeners),[_c("style",{tag:"component"},[_vm._v(".mono7_svg__base{fill:var(--base)}.mono7_svg__ink{fill:var(--ink)}")]),_vm._ssrNode("<path d=\"M0 0h667v1000H0V0z\" class=\"mono7_svg__back mono7_svg__ink\"></path><g class=\"mono7_svg__monoLisa mono7_svg__base\"><g id=\"mono7_svg__DV-logo\"><path id=\"mono7_svg__D\" d=\"M608.1 937.2c28-1.8 28.1 46.7 0 44.9v-44.9z\"></path><path id=\"mono7_svg__V\" d=\"M653.1 937.1c-14.9 59.9-8.9 60.1-23.9 0h23.9z\"></path></g><path d=\"M109.7 41.8C-66.6 13.6 696.2-24.7 618.8 65.7c48.8 8.8 41.7 72.7 40.9 134.1-29 19.2-86.4 134.3-123.4-10.1-11.2 39-22.1 30.6-19.6-11.1-40.9 84.6-.2-56.4-60 21.1-9.4-12.4-21.1-110.5-132.9-103.8-63.5 3.8-76.5 47.7-97.3 66.2-7.5 8.1-11 17.8-10.1 28.5-21.3 17.5-5.5 36.2-8.9 55-3.5 19.4-19.6-10.7-27.5-11.5-14.2-1.4-14.7 23-18.7 11.1-29.3-101.5-84.2.6-108-67.6-45.3 98.4-19.2-59-46.9 50C6.5 74.4-10.7 57.8 109.7 41.8z\" class=\"mono7_svg__sky\"></path><g class=\"mono7_svg__landscape\"><path id=\"mono7_svg__plain\" d=\"M109.3 594.2c13.2 55.8-75.3 37.6-98.8 36.9-10.6-.3-3.7-37.2 4.7-40.7 1-.4 91.6-6.7 94.1 3.8z\"></path><path id=\"mono7_svg__valley\" d=\"M20 547c-55.7-45.5 154.9-31.3 52.6-77.3 236.7 30.3-115.3 47.2 40 86.8 26.6 6.8-65.2 12.8-92.6-9.5z\"></path><path id=\"mono7_svg__river-R\" d=\"M659.4 533.9c-36.7-28.9-72.8-54.2-116-65.9-1.7-1 24.8-4.3 23-5-163.3-60.3 116.6-40.8-81.3-68.3-.1-18.3 234-30.8 97.5 36.9 82.4 22.9 77.7 35.2 76.8 102.3z\"></path><path id=\"mono7_svg__river-L\" d=\"M138.3 332.8c107.3-58.3 77.4 99 64.2 79.6-2.9-4.2-8.8-12.1-13.8-11-56.1 12.3-60.5-25.3-108.2 8.3-23.9 16.9-92.9 18.3-32.6-6.1 50.7-20.4 148.6-52.4 90.4-70.8z\"></path><path id=\"mono7_svg__upper-lake\" d=\"M493.3 272c-9.3 0-13.4 3.1-17.5 3.1-4.2 0-5.7-3.6-18.9-10.3 17.4 6.4 199.9 4.3 204.4 4.4-27.4 19.1-52.7 6.6-75.6 6.6-17.9 0-38.3 2.2-51.7 2.2-17.9.1-27.7-6-40.7-6z\"></path></g><path d=\"M249.8 161.7c6.5-19.9 19-9.4 37.5-18.4 7.5-3.7 9.5-17.7 11.6-17.7 0 28 37.6 19.4 50.5 30.1 18.9 15.7-23-15.1-99.6 6z\" class=\"mono7_svg__crown\"></path><path d=\"M381.6 229.7c-1.3 0-26.6 12-32.4 14.9-.4.2-9.7-3.7-10-3.9-2-1.1-9.2 11.8-15.2-4.1-1.1-2.8-8.2 3.4-9.2 4.3-7.2 5.9 30.4 5.6 23.4 9.2-20.4 10.6-28.8-10.1-33.7-10.1-6.5 0-2.8 12.9-6.3 11.9-6-1.7-.6-27.2 5.2-30.6 9.5-5.6 49.2 3.9 60.4 3.9 6.5 0 8.6-5.3 16.6-6.5 5.2-.8-18.7-55-24.5-56.6-54.9-14.7-105.8-1-106.6 1.8-20.5 100-14.7 57.8 13.7 57.8 22.7 0 19.7 23.5 15.5 20-4.1-3.5 1.9 9.6-11.2 9.6-5.7 0-3.5-2.6-2.9-2.8 20.9-6.4 4.7-11.4 4.3-8.6-.4 3.1-4.2 3.7-7.1 3.7-6.2 0-1.8-13.7-17.3-3.3-2.3 1.5-9.1-5.3-8.8-1 2.2 27.9 2.7 57.8 18.9 90.8 5.6 11.4 39.3 36.9 51.8 36 25.8-2 55.6-29.7 57.6-31.5 18.1-17 27.1-104.9 17.8-104.9zm-89.7 70.5c6.6.8 12.7-14.6 21.5-4.8 6.8 7.5-25.9 17.2-31.4-.8-.4-1.3 1.3-2.3 2.2-1.2 2.4 2.9 5.5 6.5 7.7 6.8zm.2 33.3c.6-.6 14-2.4 18-2.8.6-.1 1.2.3 1.4.9 2.5 8.6-20.1 2.6-19.4 1.9zM282 321.4c12.1-1.1 40.7-8.4 49.5-3.2 1 .6.7 2.2-.5 2.3-12.7 2-35.6 8.8-49.3 3.4-1.3-.5-1-2.3.3-2.5z\" class=\"mono7_svg__face\"></path><g class=\"mono7_svg__brows\"><path id=\"mono7_svg__browR\" d=\"M349.5 233.9c0 3.2-4-3.4-12.9-3.4-17.6 0-30.7 10.9-22 2.4 6.6-6.5 34.9-9.2 34.9 1z\"></path><path id=\"mono7_svg__browL\" d=\"M245.5 232.9c13.2-10.6 32.9-5 31.6 4-1-.2-8.5-6.1-14.1-6.7-7.3-.7-11.6 6.2-17.5 2.7z\"></path></g><path d=\"M291.8 538.4c-177.4-35.6 1.7-100.7 6.8-157.5 34.7 45.7 64.3-22.4 85.4-6.5 52 36.7-14.1 121.5 21.7 126.2 18.7 2.4 63.2-21 57.5-14.4-14.1 16.2 86.7-15-16.3 21.9-108 38.7-110.6 39.3-155.1 30.3z\" class=\"mono7_svg__neck\"></path><g class=\"mono7_svg__highlights\"><path id=\"mono7_svg__speck-bottom\" d=\"M481.6 599c1.4-8 24.5-8.5 24.5-8.5s-16.5 10-24.5 8.5z\"></path><path id=\"mono7_svg__speck-top\" d=\"M470.3 576.9s12.8-16.1 36.2-17.4c23.6-1.3-36.2 17.4-36.2 17.4z\"></path></g><g class=\"mono7_svg__armL\"><path id=\"mono7_svg__far\" d=\"M428.9 803.1c-38.3-21-96.3-22.1-42.8 5.9 58.3 30.5 74.2 34.5 17.3-.5-48.7-29.9 99.1 35 25.5-5.4z\"></path><path id=\"mono7_svg__near\" d=\"M478.6 818.2c-65.2-54.8 69.3-8.2 2.3-30.9-128.4-43.5 71.8 93.2-2.3 30.9z\"></path></g><path d=\"M149.8 752c0-5.8-44.3 45.9-50 45.9-5.7 0 26-41.3 26-46.9 0-7.5-34.2 22.7-27.1 11.1 1.9-3.1 7.5-10 7.5-17.2 0-12.7-29.3 44-29.3 26.9 0-14.5 24.4-70.2 51.1-55.8-69.9 33.5 66.5 8.3 35.5 41-8.5 9-22.8 32.6-22.8 25 0-5.2 9.1-29.4 9.1-30z\" class=\"mono7_svg__armR\"></path><path d=\"M198.6 880.8c-12.8 12.2-11.3 26.8-14.4 28.1-3.6 1.5-28.4-14.1 13.2-58.9-31 22.6-21.7 40-26.3 40.8-4.4.8-14.9-27.5 12.4-53.7-53.4 61.1-14.8-22.9 17.5-30.2-46.9-15.5-28.1-79.3 19.8-79.3 44.6 0 105.4 47 137.9 55.5 8.3 2.2-9.1 5.9-18.9 5.2 64.6 46.1 67.2 70-14.1 26.5 66.4 59.5 61.9 73.8-9.9 26.1 50.6 47.8 48.9 60.4-22.3 16.5 17.7 17.1 19.6 29.1-32.5 0 15.9 26.3-62.7 2.5-54.6 77.5.9 8.9-29.3-12.4-7.8-54.1z\" class=\"mono7_svg__hands\"></path></g><g display=\"var(--hasMonocleL)\" class=\"mono7_svg__ink\"><path id=\"mono7_svg__frameL\" d=\"M259.4 277.9c-36.6 0-34.6-53.5 0-53.5 34.9 0 36.6 53.5 0 53.5zm0-49.5c-29.7 0-31.1 45.4 0 45.4 31.4.1 29.3-45.4 0-45.4z\"></path></g><g display=\"var(--hasMonocleR)\" class=\"mono7_svg__ink\"><path id=\"mono7_svg__laceR\" d=\"M357.8 248.1c19.6 13.9-2.9 63.6.6 81.1 1.1 5.3.5 9.1-1-.2-3.9-21.6 16.1-75.9 1.1-74.6-1.2.1-.3-6.2-.7-6.3z\"></path><path id=\"mono7_svg__frameR\" d=\"M332.1 278c-36.6 0-34.9-53.5 0-53.5 34.6 0 36.5 53.5 0 53.5zm0-49.5c-29.3 0-31.4 45.5 0 45.4 31.1 0 29.7-45.4 0-45.4z\"></path></g><path d=\"M254.6 204.9c21.1 0 37.3 8.4 47 8.4 5.9 0 21.2-8.2 50-8.2 69.6 0 26 69.6-7.8 69.6-22.1 0-32.2-20.7-42.7-20.7-7.2 0-21 22.6-39.7 22.6-31.2.1-63.9-71.7-6.8-71.7zM236.4 232c10.6 21.4 34.9 20.2 55.7 9.2-10.6-21.2-34.2-19.6-55.7-9.2zm135.3-1.7c-20.2-10.3-50.7-10.9-61.4 10.9 20.1 10.3 50.7 10.9 61.4-10.9z\" display=\"var(--hasMask)\" class=\"mono7_svg__ink\"></path><path d=\"M558.2 550.6c0-7.2-.9-6.2-40.8-42-4.9-4.4-12.5-4-16.9.9-77.6 86.1-80 87.4-80 91.8 0 12.8 18.4 19 18.4 24.6 0 6.5-12.2-12.7-12.2-5.1 0 3.1 1.6 9.4 5 13.8-84.1 93.5-93.5 106.1-97.2 106.1-3.3 0-4.7-9.1-23.3 13.6l25.1 13.7c6.5-7.6 8.3-12 8.3-14.7 0-13.6-25.3 18.2 92.9-113.2 6 3.7 15.9 4.6 15.9 2.4 0-2.9-13.7-10.3-7.7-10.3 6.7 0 19.9 25.8 32.6 11.6 82.3-91.3 79.9-86.6 79.9-93.2zm-44.3-34.4c0 4.9-8 5.4-8-.1 0-5.1 8-5.3 8 .1z\" display=\"var(--hasMonopod)\" class=\"mono7_svg__base\"></path><g display=\"var(--hasMic)\" class=\"mono7_svg__base\"><path id=\"mono7_svg__bottom\" d=\"M305.1 752.1l36.1 18.8c15.8-22 17.3 5.7 44.4-21-15.5-17.7-31-34-46.4-51.5-36.8 32.2 1.5 25.8-34.1 53.7z\"></path><path id=\"mono7_svg__top\" d=\"M347.9 691.2c15.1 17.3 30.3 34.6 45.5 52.1 36.6-26.3-18.3-84.8-45.5-52.1z\"></path></g><path d=\"M512.6 908c-12.4-14.1 47.2-36.7 42.2-53.7-4.7-15.8-71.3.6-84.2-14.4C343.7 690.7 350.3 695 339.9 697c-34.2 6.7 41.1-38.2 20.7-70.4-45.9-73.5-47-81.8-69.8-79.6-60.3 5.7-61.4 8.2-68.1 0-111.9-138.3-81.1-139.3-197.3-41.2-84.8 70.6 182.6 86 150.8 115.2-61.3 55.4-122.3 18.2-81.5 69.9 9.9 12.4 19.8 4.9 67.4-8.3 1-.3 95.6 58.7 112.6 47.4 15.7-10.4 10.2 9.9 17.7 14.9s55.6 31.1 69.4 34.7c12.8 3.4-11 10.8-.7 19 59.8 47.9 10.8 40.7 23.6 56.3 24 29.3 29 38.8 59.2 26.7 7.2-2.9 1.2-5.5 100.5 107.3 6 6.8 28.6-12.1 22.5-19-18.3-20.9-36.2-41.3-54.3-61.9zm-316-240.7c7.1-7.1 33.2 23.5 24.3 32.4-7.7 7.8-35.5-21.2-24.3-32.4zm64.2-92.8c35.7-5.6 23.9-7.5 83 62.3 9.4 11-15.8 35.4-24 25.6-58.2-69.2-76.5-85.2-59-87.9zM495.7 870c9.7 0 9.9 14.7 0 14.7-9.5 0-9.8-14.7 0-14.7z\" display=\"var(--hasM16)\" class=\"mono7_svg__base\"></path><g display=\"var(--hasMonohat)\"><path d=\"M174.7 232.7c-21.2 0-15.8-32.7 3.9-45.5 14.6-9.1 27.5-20.4 41.8-29.8 21.7-14.3 16.9-133.1 163.6-90.6 64.7 18.7 72.7 63.3 72.7 132.9-4-2.3-28.3-16.5-30.8-16.5-7.3 0-20.3 46.3-57.9 46.3-31.9 0-104.3-44.7-125-44.7-19.2.1-39.5 47.9-68.3 47.9z\" class=\"mono7_svg__monohat-border mono7_svg__base\"></path><g class=\"mono7_svg__mHat mono7_svg__ink\"><path id=\"mono7_svg__button-top\" d=\"M334.6 59c-9.3-.5-10.7-.1-10.6-1.8 0-.7.6-1.2 1.3-1.2l9.4.5c1.7.1 1.5 2.6-.1 2.5z\"></path><path id=\"mono7_svg__hat-front\" d=\"M286.3 141.5c52.1 0 118.9 27.7 118.9 25.5 0-69.9-10-105.2-79.6-105.2-70.7 0-75.3 57.2-96.1 90.4 1-.6 28.7-10.7 56.8-10.7z\"></path><path id=\"mono7_svg__hat-side\" d=\"M381.1 70.4c28.6 17.9 29.1 64.4 30 99.1 43.6 23.7 41.4 26.1 41.4 22.7 0-41.6-4.5-72.7-22.6-93.9-13.2-15.6-42.6-30.7-48.8-27.9z\"></path><path id=\"mono7_svg__visor\" d=\"M201.8 176.4c76.3 0 125.7 49.4 167.6 49.4 27.4 0 50-43 50-44.4 0-6-84.2-34.7-132.9-34.7-57-.1-90.7 29.7-84.7 29.7z\"></path><path id=\"mono7_svg__visor-under\" d=\"M175.1 228.6c17.7 0 25.1-16.2 58-45.8-63.7-13.5-80 45.8-58 45.8z\"></path></g><path d=\"M309.1 118.8c-2.2 3.4 10.3 1.6 15.3 2.3 4.9.6 3.9 5 1.6 4.9-21.7-1.2-28.7-.4-26.1-3.1 13.5-14.2 17.8-31 23.2-30.3 2 .2 4.9 3.5 2.6 4.1-8.7 2.4-3.1.9-16.6 22.1z\" class=\"mono7_svg__L mono7_svg__base\"></path></g><g display=\"var(--hasMoustache)\" class=\"mono7_svg__ink\"><path id=\"mono7_svg__mous\" d=\"M298.6 310.3c-1.1-11.8-34.6 21.4-35.2-22.4 0 0-6.7 36.1 29.1 26.6 2.9-.7 6.5-1.6 6.1-4.2z\"></path><path id=\"mono7_svg__tache\" d=\"M299 310.1c0 2.5 6.3 5.1 13.6 5.1 28.4 0 24.3-30.3 23.3-30.3 0 0 0 25.9-15.3 25.9-5.3 0-21.6-7.9-21.6-.7z\"></path></g><path d=\"M152 119c5 2.8 14.3 10.7 20.2 10.7 6.6-.1 4.7-11.1 11.8-10.5 10.1.9 2.7 13.9 6.5 18.1 1.9 2.2 41.3-3.7 4 10.6-15.6 6-34.9 10.6-24.7-2.6-6.3-3.6-15.2-4.6-22.3-6.4-36.1-9.4-17.8-8.8-83.6 7.4C17.2 158 60 134 70.1 126.8c-14.1-5.5-7.6-18.5.6-16.9 7.2 1.4 12 13.2 18.8 6.5C79.4 111.7 49.6 97 55 87.3c3.9-7 21.5-.4 23.4-.9 4.4-1-1.9-6.3 19.1 2 11.5 4.4 8.1 1 12.9 1.7 12.6 1.9 3.6 13 28 4.9 155.5-52 120.9-34.3 13.6 24zm-41.9-24c-3.1-2.6-7.5 1-5.3 4.7 2.6 4.3 5.3-2 5.3-4.7zm-40.6 18.2c-3.3-.6-7.8 6.9 0 5v-5z\" display=\"var(--hasMonoplane)\" class=\"mono7_svg__ink\"></path><path d=\"M562.9 53.6c-93.2 36.9 8.1 158.9 65.4 69.1 0 0-86 13.3-65.4-69.1zm-26.3 55.6c4.2 0-2.1 22.3 42.5 39.5-1.3 2.7-43.9-8.8-42.5-39.5z\" display=\"var(--hasMoon)\" class=\"mono7_svg__ink\"></path>"),_c("style",{tag:"component"},[_vm._v(":root{--base:#fff;--ink:#000;--hasMonocleL:none;--hasMonocleR:none;--hasMask:none;--hasMonopod:none;--hasMic:none;--hasM16:none;--hasMonohat:none;--hasMoustache:none;--hasMoon:none;--hasMonoplane:none}")])],2)}
var mono7vue_type_template_id_cfd88f24_staticRenderFns = []


// CONCATENATED MODULE: ./assets/mono7.svg?vue&type=template&id=cfd88f24&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./assets/mono7.svg

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  mono7vue_type_template_id_cfd88f24_render,
  mono7vue_type_template_id_cfd88f24_staticRenderFns,
  false,
  null,
  null,
  "4d34d1d2"
  
)

/* harmony default export */ var mono7 = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/b.vue?vue&type=script&lang=js&
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


function switchComputed1(index) {
  return {
    get() {
      return this.activeSwitch1 === index;
    },

    set(value) {
      if (value) {
        this.activeSwitch1 = index;
      } else {
        this.activeSwitch1 = -1;
      }
    }

  };
}

function switchComputed2(index) {
  return {
    get() {
      return this.activeSwitch2 === index;
    },

    set(value) {
      if (value) {
        this.activeSwitch2 = index;
      } else {
        this.activeSwitch2 = -1;
      }
    }

  };
}

/* harmony default export */ var bvue_type_script_lang_js_ = ({
  name: "dapp",
  components: {
    monoLisaAvatar: mono7
  },

  data() {
    return {
      activeSwitch1: -1,
      activeSwitch2: -1,
      visible1: "none",
      visible2: "none",
      visible3: "none",
      visible4: "none",
      visible5: "none",
      visible6: "none",
      switch7: "none",
      switch8: "none",
      switch9: "none",
      switch10: "none",
      sliderInput1: 0,
      sliderInput2: 0,
      sliderInput3: 0,
      hexSign: "#",
      monocleL: "none",
      monocleR: "none",
      canvas: '#FFF',
      ticksLabels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    };
  },

  computed: {
    switch1: switchComputed1(1),
    switch2: switchComputed1(2),
    switch3: switchComputed1(3),
    switch4: switchComputed2(4),
    switch5: switchComputed2(5),
    switch6: switchComputed2(6),

    sliderHex1() {
      if (this.sliderInput1 === 0) return "0";
      if (this.sliderInput1 === 1) return "1";
      if (this.sliderInput1 === 2) return "2";
      if (this.sliderInput1 === 3) return "3";
      if (this.sliderInput1 === 4) return "4";
      if (this.sliderInput1 === 5) return "5";
      if (this.sliderInput1 === 6) return "6";
      if (this.sliderInput1 === 7) return "7";
      if (this.sliderInput1 === 8) return "8";
      if (this.sliderInput1 === 9) return "9";
      if (this.sliderInput1 === 10) return "A";
      if (this.sliderInput1 === 11) return "B";
      if (this.sliderInput1 === 12) return "C";
      if (this.sliderInput1 === 13) return "D";
      if (this.sliderInput1 === 14) return "E";
      if (this.sliderInput1 === 15) return "F";
      return "0";
    },

    sliderHex2() {
      if (this.sliderInput2 === 0) return "0";
      if (this.sliderInput2 === 1) return "1";
      if (this.sliderInput2 === 2) return "2";
      if (this.sliderInput2 === 3) return "3";
      if (this.sliderInput2 === 4) return "4";
      if (this.sliderInput2 === 5) return "5";
      if (this.sliderInput2 === 6) return "6";
      if (this.sliderInput2 === 7) return "7";
      if (this.sliderInput2 === 8) return "8";
      if (this.sliderInput2 === 9) return "9";
      if (this.sliderInput2 === 10) return "A";
      if (this.sliderInput2 === 11) return "B";
      if (this.sliderInput2 === 12) return "C";
      if (this.sliderInput2 === 13) return "D";
      if (this.sliderInput2 === 14) return "E";
      if (this.sliderInput2 === 15) return "F";
      return "0";
    },

    sliderHex3() {
      if (this.sliderInput3 === 0) return "0";
      if (this.sliderInput3 === 1) return "1";
      if (this.sliderInput3 === 2) return "2";
      if (this.sliderInput3 === 3) return "3";
      if (this.sliderInput3 === 4) return "4";
      if (this.sliderInput3 === 5) return "5";
      if (this.sliderInput3 === 6) return "6";
      if (this.sliderInput3 === 7) return "7";
      if (this.sliderInput3 === 8) return "8";
      if (this.sliderInput3 === 9) return "9";
      if (this.sliderInput3 === 10) return "A";
      if (this.sliderInput3 === 11) return "B";
      if (this.sliderInput3 === 12) return "C";
      if (this.sliderInput3 === 13) return "D";
      if (this.sliderInput3 === 14) return "E";
      if (this.sliderInput3 === 15) return "F";
      return "0";
    },

    hexcolorR() {
      return "#" + this.sliderHex1 + "0" + "0";
    },

    hexcolorG() {
      return "#" + "0" + this.sliderHex2 + "0";
    },

    hexcolorB() {
      return "#" + "0" + "0" + this.sliderHex3;
    },

    hexcolorRGB() {
      return "#" + this.sliderHex1 + this.sliderHex2 + this.sliderHex3;
    }

  },
  methods: {
    decrement1() {
      this.sliderInput1--;
    },

    increment1() {
      this.sliderInput1++;
    },

    decrement2() {
      this.sliderInput1--;
    },

    increment2() {
      this.sliderInput1++;
    },

    decrement3() {
      this.sliderInput1--;
    },

    increment3() {
      this.sliderInput1++;
    }

  },
  watch: {
    switch1: function (newValue) {
      if (newValue === true) {
        return this.visible1 = "one";
      } else {
        return this.visible1 = "none";
      }
    },
    switch2: function (newValue) {
      if (newValue === true) {
        return this.visible2 = "one";
      } else {
        return this.visible2 = "none";
      }
    },
    switch3: function (newValue) {
      if (newValue === true) {
        return this.visible3 = "one";
      } else {
        return this.visible3 = "none";
      }
    },
    switch4: function (newValue) {
      if (newValue === true) {
        return this.visible4 = "one";
      } else {
        return this.visible4 = "none";
      }
    },
    switch5: function (newValue) {
      if (newValue === true) {
        return this.visible5 = "one";
      } else {
        return this.visible5 = "none";
      }
    },
    switch6: function (newValue) {
      if (newValue === true) {
        return this.visible6 = "one";
      } else {
        return this.visible6 = "none";
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/b.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_bvue_type_script_lang_js_ = (bvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(30);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
var VSlider = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js + 3 modules
var VSwitch = __webpack_require__(136);

// CONCATENATED MODULE: ./pages/b.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(165)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var b_component = Object(componentNormalizer["a" /* default */])(
  pages_bvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69311a41",
  "51cdcd11"
  
)

/* harmony default export */ var b = __webpack_exports__["default"] = (b_component.exports);

/* vuetify-loader */








installComponents_default()(b_component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSlider: VSlider["a" /* default */],VSwitch: VSwitch["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=b.js.map