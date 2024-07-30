(function(graph){
            function require(moduleId){ 
              function localRequire(relativePath){
                return require(graph[moduleId].dependencies[relativePath])
              }
              var exports = {};
              (function(require,exports,code){
                eval(code)
              })(localRequire,exports,graph[moduleId].code);
              return exports;
            }
            require('./src/index.js')
          })({"./src/index.js":{"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nvar _minus = require(\"./minus.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nvar sum = (0, _add[\"default\"])(1, 2);\nvar division = (0, _minus.minus)(10, 5);\nconsole.log('sum=', sum);\nconsole.log('division=', division);","dependencies":{"./add.js":"./src/add.js","./minus.js":"./src/minus.js"}},"./src/add.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nfunction add(a, b) {\n  return a + b;\n}\nvar _default = exports[\"default\"] = add;","dependencies":{}},"./src/minus.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = minus;\nfunction minus(a, b) {\n  return a - b;\n}","dependencies":{}}})