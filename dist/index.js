Object.defineProperty(exports, '__esModule', { value: true });

require('regenerator-runtime/runtime.js');
require('core-js/modules/es.array.iterator.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.set.js');
require('core-js/modules/es.string.iterator.js');
require('core-js/modules/web.dom-collections.iterator.js');
require('core-js/modules/es.object.entries.js');
require('core-js/modules/es.promise.js');
require('core-js/modules/es.array.for-each.js');
require('core-js/modules/web.dom-collections.for-each.js');
require('core-js/modules/es.array.is-array.js');
var dom = require('@testing-library/dom');
var Twig = require('twig');
var fs = require('fs');
require('regenerator-runtime/runtime');
var DrupalAttribute = require('drupal-attribute');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Twig__default = /*#__PURE__*/_interopDefaultLegacy(Twig);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var DrupalAttribute__default = /*#__PURE__*/_interopDefaultLegacy(DrupalAttribute);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var mountedContainers = new Set();

if (typeof afterEach === "function") {
  afterEach(cleanup);
}

function render(_x) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(twigFile) {
    var context,
        namespaces,
        twigCallback,
        baseElement,
        container,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            context = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            namespaces = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            twigCallback = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : function () {};
            baseElement = document.body;
            container = baseElement.appendChild(document.createElement("div")); // Add it to the mounted containers to cleanup.

            mountedContainers.add(container);
            twigCallback(Twig__default['default']);
            _context2.next = 9;
            return loadTemplate(twigFile, context, namespaces);

          case 9:
            container.innerHTML = _context2.sent;
            return _context2.abrupt("return", _objectSpread2({
              container: container,
              baseElement: baseElement,
              debug: function debug() {
                var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseElement;
                var maxLength = arguments.length > 1 ? arguments[1] : undefined;
                var options = arguments.length > 2 ? arguments[2] : undefined;
                return Array.isArray(el) ? // eslint-disable-next-line no-console
                el.forEach(function (e) {
                  return console.log(dom.prettyDOM(e, maxLength, options));
                }) : // eslint-disable-next-line no-console,
                console.log(dom.prettyDOM(el, maxLength, options));
              }
            }, dom.getQueriesForElement(baseElement)));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _render.apply(this, arguments);
}

var loadTemplate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    var context,
        namespaces,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            namespaces = _args.length > 2 ? _args[2] : undefined;

            Twig__default['default'].registryReset = function () {
              Twig__default['default'].Templates.registry = {};
            };

            Twig__default['default'].cache(false);
            Twig__default['default'].extendFunction("create_attribute", function (value) {
              if (_typeof(value) === 'object' && value !== null) value = Object.entries(value);
              return new DrupalAttribute__default['default'](value);
            });

            Twig__default['default'].twigAsync = function (options) {
              return new Promise(function (resolve, reject) {
                options.load = resolve;
                options.error = reject;
                options.async = true;
                options.autoescape = false;
                options.namespaces = namespaces;

                if (options.data || options.ref) {
                  try {
                    resolve(Twig__default['default'].twig(options));
                  } catch (error) {
                    reject(error);
                  }
                } else {
                  fs__default['default'].readFile(options.path, "utf8", function (err, data) {
                    if (err) {
                      reject(new Error("Unable to find template file ".concat(options.path)));
                      return;
                    }

                    options.load = function (template) {
                      template.rawMarkup = data;
                      resolve(template);
                    };

                    Twig__default['default'].twig(options);
                  });
                }
              });
            };

            return _context.abrupt("return", Twig__default['default'].twigAsync({
              path: file
            }).then(function (template) {
              if (!context.hasOwnProperty("attributes")) {
                context.attributes = new DrupalAttribute__default['default']();
              }

              return template.render(context);
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadTemplate(_x2) {
    return _ref.apply(this, arguments);
  };
}();

function cleanup() {
  mountedContainers.forEach(cleanupContainer);
}

function cleanupContainer(container) {
  if (container.parentNode === document.body) {
    document.body.removeChild(container);
  }

  mountedContainers["delete"](container);
} // just re-export everything from dom-testing-library
/* eslint func-name-matching:0 */

Object.defineProperty(exports, 'Twig', {
  enumerable: true,
  get: function () {
    return Twig__default['default'];
  }
});
exports.cleanup = cleanup;
exports.render = render;
Object.keys(dom).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return dom[k];
    }
  });
});
