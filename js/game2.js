var _0x9b10c3 = function () {
  var _0x554bdc = true;
  return function (_0x5c35f9, _0x12131f) {
    var _0x3a1706 = _0x554bdc ? function () {
      if (_0x12131f) {
        var _0x1b09d8 = _0x12131f.apply(_0x5c35f9, arguments);
        _0x12131f = null;
        return _0x1b09d8;
      }
    } : function () {};
    _0x554bdc = false;
    return _0x3a1706;
  };
}();
var _0x2b7eec = _0x9b10c3(this, function () {
  return _0x2b7eec.toString().search('(((.+)+)+)+$').toString().constructor(_0x2b7eec).search("(((.+)+)+)+$");
});
_0x2b7eec();
var _0x17ee5b = function () {
  var _0x89cd20 = true;
  return function (_0x36ed77, _0x37fe9b) {
    var _0x510a32 = _0x89cd20 ? function () {
      if (_0x37fe9b) {
        var _0x159e7d = _0x37fe9b.apply(_0x36ed77, arguments);
        _0x37fe9b = null;
        return _0x159e7d;
      }
    } : function () {};
    _0x89cd20 = false;
    return _0x510a32;
  };
}();
var _0x42041e = _0x17ee5b(this, function () {
  var _0xd8f212;
  try {
    var _0x8ff5de = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xd8f212 = _0x8ff5de();
  } catch (_0x232e97) {
    _0xd8f212 = window;
  }
  var _0x55c1bb = _0xd8f212.console = _0xd8f212.console || {};
  var _0x5613f2 = ['log', "warn", "info", 'error', "exception", 'table', 'trace'];
  for (var _0x5756c2 = 0x0; _0x5756c2 < _0x5613f2.length; _0x5756c2++) {
    var _0x2a5888 = _0x17ee5b.constructor.prototype.bind(_0x17ee5b);
    var _0x371408 = _0x5613f2[_0x5756c2];
    var _0x963dbe = _0x55c1bb[_0x371408] || _0x2a5888;
    _0x2a5888.__proto__ = _0x17ee5b.bind(_0x17ee5b);
    _0x2a5888.toString = _0x963dbe.toString.bind(_0x963dbe);
    _0x55c1bb[_0x371408] = _0x2a5888;
  }
});
_0x42041e();
(() => {
  var _0x1dcb31 = {
    './src/temp.js': (_0x20b75b, _0x4c1003, _0x39bc08) => {
      'use strict';

      _0x39bc08.r(_0x4c1003);
      var _0x16c958 = _0x39bc08("./node_modules/howler/dist/howler.js");
      var _0xea53f0 = _0x39bc08("./node_modules/socket.io-client/build/esm/index.js");
      _0x20b75b = _0x39bc08.hmd(_0x20b75b);
      function _0x5664f7(_0x11174d, _0x10dea4) {
        for (var _0x225106 = 0x0; _0x225106 < _0x10dea4.length; _0x225106++) {
          var _0x5974eb = _0x10dea4[_0x225106];
          _0x5974eb.enumerable = _0x5974eb.enumerable || false;
          _0x5974eb.configurable = true;
          if ("value" in _0x5974eb) {
            _0x5974eb.writable = true;
          }
          Object.defineProperty(_0x11174d, _0x40290a(_0x5974eb.key), _0x5974eb);
        }
      }
      function _0x2a86e0(_0x30f2e8, _0x1a37cb, _0x342c16) {
        if (_0x1a37cb) {
          _0x5664f7(_0x30f2e8.prototype, _0x1a37cb);
        }
        if (_0x342c16) {
          _0x5664f7(_0x30f2e8, _0x342c16);
        }
        Object.defineProperty(_0x30f2e8, "prototype", {
          'writable': false
        });
        return _0x30f2e8;
      }
      function _0x35ab6e(_0x4f2aed, _0x40ca2f) {
        if (!(_0x4f2aed instanceof _0x40ca2f)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _0x1ccb21() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x44daff(_0x25b15a) {
        if (typeof Symbol !== 'undefined' && _0x25b15a[Symbol.iterator] != null || _0x25b15a['@@iterator'] != null) {
          return Array.from(_0x25b15a);
        }
      }
      function _0x4f5c48(_0x4272a8) {
        if (Array.isArray(_0x4272a8)) {
          return _0x384861(_0x4272a8);
        }
      }
      function _0x1082dc(_0x44b1a3, _0x83555a) {
        var _0x5ebb27 = typeof Symbol !== "undefined" && _0x44b1a3[Symbol.iterator] || _0x44b1a3["@@iterator"];
        if (!_0x5ebb27) {
          if (Array.isArray(_0x44b1a3) || (_0x5ebb27 = _0x41561b(_0x44b1a3)) || _0x83555a && _0x44b1a3 && typeof _0x44b1a3.length === 'number') {
            if (_0x5ebb27) {
              _0x44b1a3 = _0x5ebb27;
            }
            var _0x1afa09 = 0x0;
            var _0xbac635 = function _0x3e6e4b() {};
            return {
              's': _0xbac635,
              'n': function _0x5908cd() {
                if (_0x1afa09 >= _0x44b1a3.length) {
                  return {
                    'done': true
                  };
                }
                return {
                  'done': false,
                  'value': _0x44b1a3[_0x1afa09++]
                };
              },
              'e': function _0x339e8d(_0x21294a) {
                throw _0x21294a;
              },
              'f': _0xbac635
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var _0x5ac755 = true;
        var _0x24c4c4 = false;
        var _0x5850fa;
        return {
          's': function _0x5689a5() {
            _0x5ebb27 = _0x5ebb27.call(_0x44b1a3);
          },
          'n': function _0x4f1595() {
            var _0x3e7b33 = _0x5ebb27.next();
            _0x5ac755 = _0x3e7b33.done;
            return _0x3e7b33;
          },
          'e': function _0x347d95(_0x57de40) {
            _0x24c4c4 = true;
            _0x5850fa = _0x57de40;
          },
          'f': function _0x24df80() {
            try {
              if (!_0x5ac755 && _0x5ebb27['return'] != null) {
                _0x5ebb27["return"]();
              }
            } finally {
              if (_0x24c4c4) {
                throw _0x5850fa;
              }
            }
          }
        };
      }
      function _0x41561b(_0x550457, _0x162f7a) {
        if (!_0x550457) {
          return;
        }
        if (typeof _0x550457 === "string") {
          return _0x384861(_0x550457, _0x162f7a);
        }
        var _0x37f8f2 = Object.prototype.toString.call(_0x550457).slice(0x8, -0x1);
        if (_0x37f8f2 === "Object" && _0x550457.constructor) {
          _0x37f8f2 = _0x550457.constructor.name;
        }
        if (_0x37f8f2 === "Map" || _0x37f8f2 === 'Set') {
          return Array.from(_0x550457);
        }
        if (_0x37f8f2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x37f8f2)) {
          return _0x384861(_0x550457, _0x162f7a);
        }
      }
      function _0x384861(_0x4cb0fa, _0x3132bd) {
        if (_0x3132bd == null || _0x3132bd > _0x4cb0fa.length) {
          _0x3132bd = _0x4cb0fa.length;
        }
        var _0x51bedd = 0x0;
        for (var _0x202230 = new Array(_0x3132bd); _0x51bedd < _0x3132bd; _0x51bedd++) {
          _0x202230[_0x51bedd] = _0x4cb0fa[_0x51bedd];
        }
        return _0x202230;
      }
      function _0x2d445b(_0x11554a, _0xb134e7) {
        var _0x2e4c8a = Object.keys(_0x11554a);
        if (Object.getOwnPropertySymbols) {
          var _0x110307 = Object.getOwnPropertySymbols(_0x11554a);
          if (_0xb134e7) {
            _0x110307 = _0x110307.filter(function (_0x47b890) {
              return Object.getOwnPropertyDescriptor(_0x11554a, _0x47b890).enumerable;
            });
          }
          _0x2e4c8a.push.apply(_0x2e4c8a, _0x110307);
        }
        return _0x2e4c8a;
      }
      function _0x3e38e6(_0x4f680a) {
        for (var _0x5842c2 = 0x1; _0x5842c2 < arguments.length; _0x5842c2++) {
          var _0x541c0f = null != arguments[_0x5842c2] ? arguments[_0x5842c2] : {};
          if (_0x5842c2 % 0x2) {
            _0x2d445b(Object(_0x541c0f), true).forEach(function (_0x3d76cc) {
              _0x2609b9(_0x4f680a, _0x3d76cc, _0x541c0f[_0x3d76cc]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(_0x4f680a, Object.getOwnPropertyDescriptors(_0x541c0f));
          } else {
            _0x2d445b(Object(_0x541c0f)).forEach(function (_0x2179f8) {
              Object.defineProperty(_0x4f680a, _0x2179f8, Object.getOwnPropertyDescriptor(_0x541c0f, _0x2179f8));
            });
          }
        }
        return _0x4f680a;
      }
      function _0x2609b9(_0xcba48a, _0x4f6167, _0x27b8f3) {
        _0x4f6167 = _0x40290a(_0x4f6167);
        if (_0x4f6167 in _0xcba48a) {
          Object.defineProperty(_0xcba48a, _0x4f6167, {
            'value': _0x27b8f3,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
        } else {
          _0xcba48a[_0x4f6167] = _0x27b8f3;
        }
        return _0xcba48a;
      }
      function _0x40290a(_0x2542b8) {
        var _0x1f4926 = _0xe8035a(_0x2542b8, "string");
        return _0x363293(_0x1f4926) === "symbol" ? _0x1f4926 : String(_0x1f4926);
      }
      function _0xe8035a(_0x3c86fb, _0x2ecdf6) {
        if (_0x363293(_0x3c86fb) !== "object" || _0x3c86fb === null) {
          return _0x3c86fb;
        }
        var _0x22601e = _0x3c86fb[Symbol.toPrimitive];
        if (_0x22601e !== undefined) {
          var _0x1d8695 = _0x22601e.call(_0x3c86fb, _0x2ecdf6 || "default");
          if (_0x363293(_0x1d8695) !== "object") {
            return _0x1d8695;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (_0x2ecdf6 === "string" ? String : Number)(_0x3c86fb);
      }
      function _0x49536e() {
        'use strict';

        _0x49536e = function _0x5341b6() {
          return _0xd678ce;
        };
        var _0xf82f30;
        var _0xd678ce = {};
        var _0x50533a = Object.prototype;
        var _0x30c187 = _0x50533a.hasOwnProperty;
        var _0x3bf93e = Object.defineProperty || function (_0x4939d6, _0x5cc1a4, _0x16ae06) {
          _0x4939d6[_0x5cc1a4] = _0x16ae06.value;
        };
        var _0x4e0329 = "function" == typeof Symbol ? Symbol : {};
        var _0x3af8eb = _0x4e0329.iterator || "@@iterator";
        var _0x251c86 = _0x4e0329.asyncIterator || "@@asyncIterator";
        var _0x5d316d = _0x4e0329.toStringTag || "@@toStringTag";
        function _0x4082f8(_0x2db60e, _0x1d25d1, _0x179a14) {
          Object.defineProperty(_0x2db60e, _0x1d25d1, {
            'value': _0x179a14,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x2db60e[_0x1d25d1];
        }
        try {
          _0x4082f8({}, '');
        } catch (_0x40c0b1) {
          _0x4082f8 = function _0x719766(_0x1dc3df, _0x28368b, _0x3e88d0) {
            return _0x1dc3df[_0x28368b] = _0x3e88d0;
          };
        }
        function _0x1fbbe3(_0xfd9a17, _0x3d8b86, _0x244969, _0x5c31ce) {
          var _0x1aae0e = _0x3d8b86 && _0x3d8b86.prototype instanceof _0x2856d6 ? _0x3d8b86 : _0x2856d6;
          var _0x4e0d96 = Object.create(_0x1aae0e.prototype);
          var _0x3250ca = new _0x34d1ae(_0x5c31ce || []);
          _0x3bf93e(_0x4e0d96, "_invoke", {
            'value': _0x7b069(_0xfd9a17, _0x244969, _0x3250ca)
          });
          return _0x4e0d96;
        }
        function _0x3947af(_0x1236d4, _0x1ec181, _0x1e0b91) {
          try {
            return {
              'type': "normal",
              'arg': _0x1236d4.call(_0x1ec181, _0x1e0b91)
            };
          } catch (_0x5087fd) {
            return {
              'type': "throw",
              'arg': _0x5087fd
            };
          }
        }
        _0xd678ce.wrap = _0x1fbbe3;
        var _0x5936d4 = {};
        function _0x2856d6() {}
        function _0x2c6d23() {}
        function _0x4e7bb5() {}
        var _0x262d50 = {};
        _0x4082f8(_0x262d50, _0x3af8eb, function () {
          return this;
        });
        var _0x3eb607 = Object.getPrototypeOf;
        var _0x1a5491 = _0x3eb607 && _0x3eb607(_0x3eb607(_0x371319([])));
        if (_0x1a5491 && _0x1a5491 !== _0x50533a && _0x30c187.call(_0x1a5491, _0x3af8eb)) {
          _0x262d50 = _0x1a5491;
        }
        var _0x19401a = _0x4e7bb5.prototype = _0x2856d6.prototype = Object.create(_0x262d50);
        function _0x3e8226(_0x2c7f35) {
          ['next', "throw", "return"].forEach(function (_0x464cc7) {
            _0x4082f8(_0x2c7f35, _0x464cc7, function (_0x2ad31e) {
              return this._invoke(_0x464cc7, _0x2ad31e);
            });
          });
        }
        function _0x397dc2(_0x328dc4, _0x528373) {
          function _0x375fb5(_0x4fb345, _0x176b6b, _0x269a00, _0x225d14) {
            var _0x462837 = _0x3947af(_0x328dc4[_0x4fb345], _0x328dc4, _0x176b6b);
            if ("throw" !== _0x462837.type) {
              var _0x4428f9 = _0x462837.arg;
              var _0xd6e2b = _0x4428f9.value;
              return _0xd6e2b && 'object' == _0x363293(_0xd6e2b) && _0x30c187.call(_0xd6e2b, "__await") ? _0x528373.resolve(_0xd6e2b.__await).then(function (_0x134bb0) {
                _0x375fb5("next", _0x134bb0, _0x269a00, _0x225d14);
              }, function (_0x3fb1c7) {
                _0x375fb5('throw', _0x3fb1c7, _0x269a00, _0x225d14);
              }) : _0x528373.resolve(_0xd6e2b).then(function (_0x30e336) {
                _0x4428f9.value = _0x30e336;
                _0x269a00(_0x4428f9);
              }, function (_0x42df70) {
                return _0x375fb5("throw", _0x42df70, _0x269a00, _0x225d14);
              });
            }
            _0x225d14(_0x462837.arg);
          }
          var _0x1e5f97;
          _0x3bf93e(this, "_invoke", {
            'value': function _0xd72c9b(_0x5dba9, _0x47c5f8) {
              function _0x3cf848() {
                return new _0x528373(function (_0x2f8018, _0x7f019b) {
                  _0x375fb5(_0x5dba9, _0x47c5f8, _0x2f8018, _0x7f019b);
                });
              }
              return _0x1e5f97 = _0x1e5f97 ? _0x1e5f97.then(_0x3cf848, _0x3cf848) : _0x3cf848();
            }
          });
        }
        function _0x7b069(_0x5324ff, _0x5df56f, _0x2cd980) {
          var _0x5e251e = "suspendedStart";
          return function (_0x4dd4e7, _0x2be73c) {
            if (_0x5e251e === "executing") {
              throw new Error("Generator is already running");
            }
            if (_0x5e251e === "completed") {
              if ("throw" === _0x4dd4e7) {
                throw _0x2be73c;
              }
              return {
                'value': _0xf82f30,
                'done': true
              };
            }
            _0x2cd980.method = _0x4dd4e7;
            for (_0x2cd980.arg = _0x2be73c;;) {
              var _0x157dab = _0x2cd980.delegate;
              if (_0x157dab) {
                var _0xf58ed7 = _0x191096(_0x157dab, _0x2cd980);
                if (_0xf58ed7) {
                  if (_0xf58ed7 === _0x5936d4) {
                    continue;
                  }
                  return _0xf58ed7;
                }
              }
              if ("next" === _0x2cd980.method) {
                _0x2cd980.sent = _0x2cd980._sent = _0x2cd980.arg;
              } else {
                if ('throw' === _0x2cd980.method) {
                  if (_0x5e251e === "suspendedStart") {
                    _0x5e251e = "completed";
                    throw _0x2cd980.arg;
                  }
                  _0x2cd980.dispatchException(_0x2cd980.arg);
                } else if ("return" === _0x2cd980.method) {
                  _0x2cd980.abrupt('return', _0x2cd980.arg);
                }
              }
              _0x5e251e = "executing";
              var _0x51f5bf = _0x3947af(_0x5324ff, _0x5df56f, _0x2cd980);
              if ('normal' === _0x51f5bf.type) {
                _0x5e251e = _0x2cd980.done ? "completed" : "suspendedYield";
                if (_0x51f5bf.arg === _0x5936d4) {
                  continue;
                }
                return {
                  'value': _0x51f5bf.arg,
                  'done': _0x2cd980.done
                };
              }
              if ("throw" === _0x51f5bf.type) {
                _0x5e251e = "completed";
                _0x2cd980.method = 'throw';
                _0x2cd980.arg = _0x51f5bf.arg;
              }
            }
          };
        }
        function _0x191096(_0x47cb8f, _0x4bdc2e) {
          var _0x487bc0 = _0x4bdc2e.method;
          var _0x49aade = _0x47cb8f.iterator[_0x487bc0];
          if (_0x49aade === _0xf82f30) {
            _0x4bdc2e.delegate = null;
            if (!("throw" === _0x487bc0 && _0x47cb8f.iterator['return'] && (_0x4bdc2e.method = "return", _0x4bdc2e.arg = _0xf82f30, _0x191096(_0x47cb8f, _0x4bdc2e), "throw" === _0x4bdc2e.method))) {
              if ("return" !== _0x487bc0) {
                _0x4bdc2e.method = "throw";
                _0x4bdc2e.arg = new TypeError("The iterator does not provide a '" + _0x487bc0 + "' method");
              }
            }
            return _0x5936d4;
          }
          var _0x6d6e1 = _0x3947af(_0x49aade, _0x47cb8f.iterator, _0x4bdc2e.arg);
          if ("throw" === _0x6d6e1.type) {
            _0x4bdc2e.method = "throw";
            _0x4bdc2e.arg = _0x6d6e1.arg;
            _0x4bdc2e.delegate = null;
            return _0x5936d4;
          }
          var _0x5301b1 = _0x6d6e1.arg;
          return _0x5301b1 ? _0x5301b1.done ? (_0x4bdc2e[_0x47cb8f.resultName] = _0x5301b1.value, _0x4bdc2e.next = _0x47cb8f.nextLoc, 'return' !== _0x4bdc2e.method && (_0x4bdc2e.method = "next", _0x4bdc2e.arg = _0xf82f30), _0x4bdc2e.delegate = null, _0x5936d4) : _0x5301b1 : (_0x4bdc2e.method = "throw", _0x4bdc2e.arg = new TypeError("iterator result is not an object"), _0x4bdc2e.delegate = null, _0x5936d4);
        }
        function _0xb7b5e5(_0x5e7a72) {
          var _0x48d573 = {
            'tryLoc': _0x5e7a72[0x0]
          };
          if (0x1 in _0x5e7a72) {
            _0x48d573.catchLoc = _0x5e7a72[0x1];
          }
          if (0x2 in _0x5e7a72) {
            _0x48d573.finallyLoc = _0x5e7a72[0x2];
            _0x48d573.afterLoc = _0x5e7a72[0x3];
          }
          this.tryEntries.push(_0x48d573);
        }
        function _0x2cf049(_0x1d79be) {
          var _0x1ae90c = _0x1d79be.completion || {};
          _0x1ae90c.type = 'normal';
          delete _0x1ae90c.arg;
          _0x1d79be.completion = _0x1ae90c;
        }
        function _0x34d1ae(_0x55e296) {
          this.tryEntries = [{
            'tryLoc': 'root'
          }];
          _0x55e296.forEach(_0xb7b5e5, this);
          this.reset(true);
        }
        function _0x371319(_0x14bb52) {
          if (_0x14bb52 || '' === _0x14bb52) {
            var _0xe1cd0c = _0x14bb52[_0x3af8eb];
            if (_0xe1cd0c) {
              return _0xe1cd0c.call(_0x14bb52);
            }
            if ('function' == typeof _0x14bb52.next) {
              return _0x14bb52;
            }
            if (!isNaN(_0x14bb52.length)) {
              var _0x17c9f8 = -0x1;
              var _0x11310d = function _0x2c93d4() {
                for (; ++_0x17c9f8 < _0x14bb52.length;) {
                  if (_0x30c187.call(_0x14bb52, _0x17c9f8)) {
                    _0x2c93d4.value = _0x14bb52[_0x17c9f8];
                    _0x2c93d4.done = false;
                    return _0x2c93d4;
                  }
                }
                _0x2c93d4.value = _0xf82f30;
                _0x2c93d4.done = true;
                return _0x2c93d4;
              };
              return _0x11310d.next = _0x11310d;
            }
          }
          throw new TypeError(_0x363293(_0x14bb52) + " is not iterable");
        }
        _0x2c6d23.prototype = _0x4e7bb5;
        _0x3bf93e(_0x19401a, "constructor", {
          'value': _0x4e7bb5,
          'configurable': true
        });
        _0x3bf93e(_0x4e7bb5, "constructor", {
          'value': _0x2c6d23,
          'configurable': true
        });
        _0x2c6d23.displayName = _0x4082f8(_0x4e7bb5, _0x5d316d, 'GeneratorFunction');
        _0xd678ce.isGeneratorFunction = function (_0xb27c8d) {
          var _0x286036 = "function" == typeof _0xb27c8d && _0xb27c8d.constructor;
          return !!_0x286036 && (_0x286036 === _0x2c6d23 || "GeneratorFunction" === (_0x286036.displayName || _0x286036.name));
        };
        _0xd678ce.mark = function (_0x45fe20) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x45fe20, _0x4e7bb5);
          } else {
            _0x45fe20.__proto__ = _0x4e7bb5;
            _0x4082f8(_0x45fe20, _0x5d316d, "GeneratorFunction");
          }
          _0x45fe20.prototype = Object.create(_0x19401a);
          return _0x45fe20;
        };
        _0xd678ce.awrap = function (_0xe7b4a8) {
          return {
            '__await': _0xe7b4a8
          };
        };
        _0x3e8226(_0x397dc2.prototype);
        _0x4082f8(_0x397dc2.prototype, _0x251c86, function () {
          return this;
        });
        _0xd678ce.AsyncIterator = _0x397dc2;
        _0xd678ce.async = function (_0x5bf1a5, _0x29d706, _0x272243, _0x38b6a8, _0x1b0264) {
          if (undefined === _0x1b0264) {
            _0x1b0264 = Promise;
          }
          var _0x3665e3 = new _0x397dc2(_0x1fbbe3(_0x5bf1a5, _0x29d706, _0x272243, _0x38b6a8), _0x1b0264);
          return _0xd678ce.isGeneratorFunction(_0x29d706) ? _0x3665e3 : _0x3665e3.next().then(function (_0x40cfdb) {
            return _0x40cfdb.done ? _0x40cfdb.value : _0x3665e3.next();
          });
        };
        _0x3e8226(_0x19401a);
        _0x4082f8(_0x19401a, _0x5d316d, "Generator");
        _0x4082f8(_0x19401a, _0x3af8eb, function () {
          return this;
        });
        _0x4082f8(_0x19401a, "toString", function () {
          return "[object Generator]";
        });
        _0xd678ce.keys = function (_0x2103e4) {
          var _0x3b6c05 = Object(_0x2103e4);
          var _0x5c34e4 = [];
          for (var _0x5a4e55 in _0x3b6c05) _0x5c34e4.push(_0x5a4e55);
          _0x5c34e4.reverse();
          return function _0x5b1f36() {
            for (; _0x5c34e4.length;) {
              var _0x2eafdb = _0x5c34e4.pop();
              if (_0x2eafdb in _0x3b6c05) {
                _0x5b1f36.value = _0x2eafdb;
                _0x5b1f36.done = false;
                return _0x5b1f36;
              }
            }
            _0x5b1f36.done = true;
            return _0x5b1f36;
          };
        };
        _0xd678ce.values = _0x371319;
        _0x34d1ae.prototype = {
          'constructor': _0x34d1ae,
          'reset': function _0x7e0c8c(_0xfd00b5) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = _0xf82f30;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = _0xf82f30;
            this.tryEntries.forEach(_0x2cf049);
            if (!_0xfd00b5) {
              for (var _0x300375 in this) if ('t' === _0x300375.charAt(0x0) && _0x30c187.call(this, _0x300375) && !isNaN(+_0x300375.slice(0x1))) {
                this[_0x300375] = _0xf82f30;
              }
            }
          },
          'stop': function _0x10c606() {
            this.done = true;
            var _0x5726f8 = this.tryEntries[0x0].completion;
            if ("throw" === _0x5726f8.type) {
              throw _0x5726f8.arg;
            }
            return this.rval;
          },
          'dispatchException': function _0x4ddaed(_0x201b80) {
            if (this.done) {
              throw _0x201b80;
            }
            var _0x4de152 = this;
            function _0x470aa9(_0x4fb5da, _0xb0124c) {
              _0x13a7c1.type = 'throw';
              _0x13a7c1.arg = _0x201b80;
              _0x4de152.next = _0x4fb5da;
              if (_0xb0124c) {
                _0x4de152.method = "next";
                _0x4de152.arg = _0xf82f30;
              }
              return !!_0xb0124c;
            }
            for (var _0x15c98b = this.tryEntries.length - 0x1; _0x15c98b >= 0x0; --_0x15c98b) {
              var _0x5a2461 = this.tryEntries[_0x15c98b];
              var _0x13a7c1 = _0x5a2461.completion;
              if ("root" === _0x5a2461.tryLoc) {
                return _0x470aa9("end");
              }
              if (_0x5a2461.tryLoc <= this.prev) {
                var _0x1e1b68 = _0x30c187.call(_0x5a2461, "catchLoc");
                var _0x4637dd = _0x30c187.call(_0x5a2461, "finallyLoc");
                if (_0x1e1b68 && _0x4637dd) {
                  if (this.prev < _0x5a2461.catchLoc) {
                    return _0x470aa9(_0x5a2461.catchLoc, true);
                  }
                  if (this.prev < _0x5a2461.finallyLoc) {
                    return _0x470aa9(_0x5a2461.finallyLoc);
                  }
                } else {
                  if (_0x1e1b68) {
                    if (this.prev < _0x5a2461.catchLoc) {
                      return _0x470aa9(_0x5a2461.catchLoc, true);
                    }
                  } else {
                    if (!_0x4637dd) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x5a2461.finallyLoc) {
                      return _0x470aa9(_0x5a2461.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function _0xced0f7(_0x361a94, _0x19c396) {
            for (var _0x45fe59 = this.tryEntries.length - 0x1; _0x45fe59 >= 0x0; --_0x45fe59) {
              var _0x4f42e1 = this.tryEntries[_0x45fe59];
              if (_0x4f42e1.tryLoc <= this.prev && _0x30c187.call(_0x4f42e1, 'finallyLoc') && this.prev < _0x4f42e1.finallyLoc) {
                var _0x420e94 = _0x4f42e1;
                break;
              }
            }
            if (_0x420e94 && ("break" === _0x361a94 || "continue" === _0x361a94) && _0x420e94.tryLoc <= _0x19c396 && _0x19c396 <= _0x420e94.finallyLoc) {
              _0x420e94 = null;
            }
            var _0x54aff2 = _0x420e94 ? _0x420e94.completion : {};
            _0x54aff2.type = _0x361a94;
            _0x54aff2.arg = _0x19c396;
            return _0x420e94 ? (this.method = 'next', this.next = _0x420e94.finallyLoc, _0x5936d4) : this.complete(_0x54aff2);
          },
          'complete': function _0x38c565(_0x1b23a8, _0x816880) {
            if ("throw" === _0x1b23a8.type) {
              throw _0x1b23a8.arg;
            }
            if ("break" === _0x1b23a8.type || "continue" === _0x1b23a8.type) {
              this.next = _0x1b23a8.arg;
            } else if ('return' === _0x1b23a8.type) {
              this.rval = this.arg = _0x1b23a8.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === _0x1b23a8.type && _0x816880) {
              this.next = _0x816880;
            }
            return _0x5936d4;
          },
          'finish': function _0x3640fc(_0x54c720) {
            for (var _0x4b10ec = this.tryEntries.length - 0x1; _0x4b10ec >= 0x0; --_0x4b10ec) {
              var _0x2e58b1 = this.tryEntries[_0x4b10ec];
              if (_0x2e58b1.finallyLoc === _0x54c720) {
                this.complete(_0x2e58b1.completion, _0x2e58b1.afterLoc);
                _0x2cf049(_0x2e58b1);
                return _0x5936d4;
              }
            }
          },
          'catch': function _0x5b7903(_0x519f75) {
            for (var _0x2494d5 = this.tryEntries.length - 0x1; _0x2494d5 >= 0x0; --_0x2494d5) {
              var _0x2a6aec = this.tryEntries[_0x2494d5];
              if (_0x2a6aec.tryLoc === _0x519f75) {
                var _0x3d5eb6 = _0x2a6aec.completion;
                if ("throw" === _0x3d5eb6.type) {
                  var _0x2fd0dc = _0x3d5eb6.arg;
                  _0x2cf049(_0x2a6aec);
                }
                return _0x2fd0dc;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function _0x14c5ee(_0x26f3a9, _0x58e862, _0x40e60c) {
            this.delegate = {
              'iterator': _0x371319(_0x26f3a9),
              'resultName': _0x58e862,
              'nextLoc': _0x40e60c
            };
            if ("next" === this.method) {
              this.arg = _0xf82f30;
            }
            return _0x5936d4;
          }
        };
        return _0xd678ce;
      }
      function _0x1c3993(_0x3ab7eb, _0x3ea8d9, _0x18b506, _0x1da215, _0x3b0803, _0x197697, _0x4a712b) {
        try {
          var _0x207b77 = _0x3ab7eb[_0x197697](_0x4a712b);
          var _0x3adbc1 = _0x207b77.value;
        } catch (_0x2190d1) {
          _0x18b506(_0x2190d1);
          return;
        }
        if (_0x207b77.done) {
          _0x3ea8d9(_0x3adbc1);
        } else {
          Promise.resolve(_0x3adbc1).then(_0x1da215, _0x3b0803);
        }
      }
      function _0x2b80f8(_0x1bf5c8) {
        return function () {
          var _0x261728 = this;
          return new Promise(function (_0x59c805, _0x36f3a9) {
            var _0x35f7f1 = _0x1bf5c8.apply(_0x261728, arguments);
            function _0x4fb1a1(_0x2334f3) {
              _0x1c3993(_0x35f7f1, _0x59c805, _0x36f3a9, _0x4fb1a1, _0x44af8d, "next", _0x2334f3);
            }
            function _0x44af8d(_0x40e1f2) {
              _0x1c3993(_0x35f7f1, _0x59c805, _0x36f3a9, _0x4fb1a1, _0x44af8d, "throw", _0x40e1f2);
            }
            _0x4fb1a1(undefined);
          });
        };
      }
      function _0x363293(_0xba96d2) {
        '@babel/helpers - typeof';

        _0x363293 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x501b8a) {
          return typeof _0x501b8a;
        } : function (_0x562d7f) {
          return _0x562d7f && "function" == typeof Symbol && _0x562d7f.constructor === Symbol && _0x562d7f !== Symbol.prototype ? "symbol" : typeof _0x562d7f;
        };
        return _0x363293(_0xba96d2);
      }
      window.URLSERV_WORMWORLD = "https://wormworld.io/extension";
      window.URL_CDN = 'https://asserts.wormworld.io';
      window.URL_CDN_B = "asserts.wormworld.io";
      window.URL_CDN_C = 0x0;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var _0x1a98b9 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      window.backgroundArena = [{
        'nome': "Default",
        'uri': window.URL_CDN + '/backgrounds/bkgnd0.png'
      }, {
        'nome': "Green",
        'uri': window.URL_CDN + '/backgrounds/bkgnd8.png'
      }, {
        'nome': "Blue",
        'uri': window.URL_CDN + "/backgrounds/bkgnd9.png"
      }, {
        'nome': "Blue Black",
        'uri': window.URL_CDN + '/backgrounds/bkgnd10.png'
      }, {
        'nome': "Blue Light",
        'uri': window.URL_CDN + "/backgrounds/bkgnd6.png"
      }, {
        'nome': "Desert",
        'uri': window.URL_CDN + "/backgrounds/bkgnd7.png"
      }, {
        'nome': "Textil",
        'uri': window.URL_CDN + "/backgrounds/bkgnd11.png"
      }, {
        'nome': "Sky Blue",
        'uri': window.URL_CDN + "/backgrounds/bg_sky_1.png"
      }, {
        'nome': "Sky Purp",
        'uri': window.URL_CDN + "/backgrounds/bg_sky_2.png"
      }, {
        'nome': "Sky Violet",
        'uri': window.URL_CDN + "/backgrounds/bg_sky_3.png"
      }, {
        'nome': "Sky Orange",
        'uri': window.URL_CDN + "/backgrounds/bg_sky_4.png"
      }, {
        'nome': "Sky Write",
        'uri': window.URL_CDN + '/backgrounds/bg_sky_5.png'
      }, {
        'nome': "Arena 1",
        'uri': window.URL_CDN + "/backgrounds/arena01.png",
        'w': 0x44c,
        'h': 0x44c
      }, {
        'nome': "Arena 2",
        'uri': window.URL_CDN + '/backgrounds/arena02.png',
        'w': 0x44c,
        'h': 0x44c
      }, {
        'nome': "Arena 3",
        'uri': window.URL_CDN + "/backgrounds/arena03.png",
        'w': 0x44c,
        'h': 0x44c
      }, {
        'nome': "Arena 4",
        'uri': window.URL_CDN + "/backgrounds/arena04.png",
        'w': 0x44c,
        'h': 0x44c
      }];
      (function (_0x40f796) {
        if ((typeof exports === 'undefined' ? 'undefined' : _0x363293(exports)) === "object" && true) {
          _0x20b75b.exports = _0x40f796();
        } else {
          if (typeof define === 'function' && _0x39bc08.amdO) {
            define([], _0x40f796);
          } else {
            var _0x25e67a;
            if (typeof window !== "undefined") {
              _0x25e67a = window;
            } else {
              if (typeof _0x39bc08.g !== "undefined") {
                _0x25e67a = _0x39bc08.g;
              } else if (typeof self !== "undefined") {
                _0x25e67a = self;
              } else {
                _0x25e67a = this;
              }
            }
            _0x25e67a.nipplejs = _0x40f796();
          }
        }
      })(function () {
        "use strict";
        var _0x4a4166 = !!("ontouchstart" in window);
        var _0x3b5dad = !!window.PointerEvent;
        var _0x134eeb = !!window.MSPointerEvent;
        var _0x516468 = {
          'touch': {
            'start': 'touchstart',
            'move': "touchmove",
            'end': "touchend, touchcancel"
          },
          'mouse': {
            'start': 'mousedown',
            'move': "mousemove",
            'end': "mouseup"
          },
          'pointer': {
            'start': "pointerdown",
            'move': 'pointermove',
            'end': "pointerup, pointercancel"
          },
          'MSPointer': {
            'start': "MSPointerDown",
            'move': "MSPointerMove",
            'end': 'MSPointerUp'
          }
        };
        var _0x4e0a31;
        var _0x7935fd = {};
        if (_0x3b5dad) {
          _0x4e0a31 = _0x516468.pointer;
        } else {
          if (_0x134eeb) {
            _0x4e0a31 = _0x516468.MSPointer;
          } else if (_0x4a4166) {
            _0x4e0a31 = _0x516468.touch;
            _0x7935fd = _0x516468.mouse;
          } else {
            _0x4e0a31 = _0x516468.mouse;
          }
        }
        var _0x6e6490 = {
          distance: function (_0x205e66, _0x21096e) {
            var _0x33c774 = _0x21096e.x - _0x205e66.x;
            var _0xc5846b = _0x21096e.y - _0x205e66.y;
            return Math.sqrt(_0x33c774 * _0x33c774 + _0xc5846b * _0xc5846b);
          }
        };
        _0x6e6490.angle = function (_0x3a050c, _0x428ebf) {
          var _0x1aa301 = _0x428ebf.x - _0x3a050c.x;
          var _0x1ff0df = _0x428ebf.y - _0x3a050c.y;
          return _0x6e6490.degrees(Math.atan2(_0x1ff0df, _0x1aa301));
        };
        _0x6e6490.findCoord = function (_0xe4589d, _0x2e63cb, _0x37875b) {
          var _0x3ae5cf = {
            'x': 0x0,
            'y': 0x0
          };
          _0x37875b = _0x6e6490.radians(_0x37875b);
          _0x3ae5cf.x = _0xe4589d.x - _0x2e63cb * Math.cos(_0x37875b);
          _0x3ae5cf.y = _0xe4589d.y - _0x2e63cb * Math.sin(_0x37875b);
          return _0x3ae5cf;
        };
        _0x6e6490.radians = function (_0x3a99dd) {
          return _0x3a99dd * (Math.PI / 0xb4);
        };
        _0x6e6490.degrees = function (_0x11fe09) {
          return _0x11fe09 * (0xb4 / Math.PI);
        };
        _0x6e6490.bindEvt = function (_0x53125f, _0x437343, _0x5603b5) {
          var _0x2f1aa9 = _0x437343.split(/[ ,]+/g);
          var _0xebf49d;
          for (var _0x54429f = 0x0; _0x54429f < _0x2f1aa9.length; _0x54429f += 0x1) {
            _0xebf49d = _0x2f1aa9[_0x54429f];
            if (_0x53125f.addEventListener) {
              _0x53125f.addEventListener(_0xebf49d, _0x5603b5, false);
            } else if (_0x53125f.attachEvent) {
              _0x53125f.attachEvent(_0xebf49d, _0x5603b5);
            }
          }
        };
        _0x6e6490.unbindEvt = function (_0x30ee66, _0x417499, _0x41af6a) {
          var _0x3e67df = _0x417499.split(/[ ,]+/g);
          var _0x1d35fd;
          for (var _0x542701 = 0x0; _0x542701 < _0x3e67df.length; _0x542701 += 0x1) {
            _0x1d35fd = _0x3e67df[_0x542701];
            if (_0x30ee66.removeEventListener) {
              _0x30ee66.removeEventListener(_0x1d35fd, _0x41af6a);
            } else if (_0x30ee66.detachEvent) {
              _0x30ee66.detachEvent(_0x1d35fd, _0x41af6a);
            }
          }
        };
        _0x6e6490.trigger = function (_0x476124, _0x5c4040, _0x82fb56) {
          var _0xdb5fb1 = new CustomEvent(_0x5c4040, _0x82fb56);
          _0x476124.dispatchEvent(_0xdb5fb1);
        };
        _0x6e6490.prepareEvent = function (_0x1a9fa3) {
          _0x1a9fa3.preventDefault();
          return _0x1a9fa3.type.match(/^touch/) ? _0x1a9fa3.changedTouches : _0x1a9fa3;
        };
        _0x6e6490.getScroll = function () {
          var _0x447c94 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var _0x4a858b = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            'x': _0x447c94,
            'y': _0x4a858b
          };
        };
        _0x6e6490.applyPosition = function (_0x507c39, _0x3d25f1) {
          if (_0x3d25f1.top || _0x3d25f1.right || _0x3d25f1.bottom || _0x3d25f1.left) {
            _0x507c39.style.top = _0x3d25f1.top;
            _0x507c39.style.right = _0x3d25f1.right;
            _0x507c39.style.bottom = _0x3d25f1.bottom;
            _0x507c39.style.left = _0x3d25f1.left;
          } else {
            _0x507c39.style.left = _0x3d25f1.x + 'px';
            _0x507c39.style.top = _0x3d25f1.y + 'px';
          }
        };
        _0x6e6490.getTransitionStyle = function (_0x51a7ae, _0x4a66dd, _0x1aaf96) {
          var _0x256883 = _0x6e6490.configStylePropertyObject(_0x51a7ae);
          for (var _0x2f4267 in _0x256883) {
            if (_0x256883.hasOwnProperty(_0x2f4267)) {
              if (typeof _0x4a66dd === "string") {
                _0x256883[_0x2f4267] = _0x4a66dd + " " + _0x1aaf96;
              } else {
                var _0x1c3ef4 = '';
                var _0x2efe54 = 0x0;
                for (var _0x19ef32 = _0x4a66dd.length; _0x2efe54 < _0x19ef32; _0x2efe54 += 0x1) {
                  _0x1c3ef4 += _0x4a66dd[_0x2efe54] + " " + _0x1aaf96 + ", ";
                }
                _0x256883[_0x2f4267] = _0x1c3ef4.slice(0x0, -0x2);
              }
            }
          }
          return _0x256883;
        };
        _0x6e6490.getVendorStyle = function (_0x433842, _0x54e49d) {
          var _0x51f851 = _0x6e6490.configStylePropertyObject(_0x433842);
          for (var _0x163710 in _0x51f851) {
            if (_0x51f851.hasOwnProperty(_0x163710)) {
              _0x51f851[_0x163710] = _0x54e49d;
            }
          }
          return _0x51f851;
        };
        _0x6e6490.configStylePropertyObject = function (_0x3af6b5) {
          var _0x184eaa = {
            _0x3af6b5: ''
          };
          var _0x42d1c3 = ["webkit", "Moz", 'o'];
          _0x42d1c3.forEach(function (_0x544616) {
            _0x184eaa[_0x544616 + _0x3af6b5.charAt(0x0).toUpperCase() + _0x3af6b5.slice(0x1)] = '';
          });
          return _0x184eaa;
        };
        _0x6e6490.extend = function (_0x24d117, _0xb601f3) {
          for (var _0x22f603 in _0xb601f3) {
            if (_0xb601f3.hasOwnProperty(_0x22f603)) {
              _0x24d117[_0x22f603] = _0xb601f3[_0x22f603];
            }
          }
          return _0x24d117;
        };
        _0x6e6490.safeExtend = function (_0x96c3d3, _0x5545b1) {
          var _0x28ebde = {};
          for (var _0x1dee54 in _0x96c3d3) {
            if (_0x96c3d3.hasOwnProperty(_0x1dee54) && _0x5545b1.hasOwnProperty(_0x1dee54)) {
              _0x28ebde[_0x1dee54] = _0x5545b1[_0x1dee54];
            } else if (_0x96c3d3.hasOwnProperty(_0x1dee54)) {
              _0x28ebde[_0x1dee54] = _0x96c3d3[_0x1dee54];
            }
          }
          return _0x28ebde;
        };
        _0x6e6490.map = function (_0x2e13ec, _0xe6f30f) {
          if (_0x2e13ec.length) {
            var _0x5eed63 = 0x0;
            for (var _0x26a4bc = _0x2e13ec.length; _0x5eed63 < _0x26a4bc; _0x5eed63 += 0x1) {
              _0xe6f30f(_0x2e13ec[_0x5eed63]);
            }
          } else {
            _0xe6f30f(_0x2e13ec);
          }
        };
        function _0x409166() {}
        ;
        _0x409166.prototype.on = function (_0xf2fd45, _0x3852f9) {
          var _0x4ecfeb = this;
          var _0x4d456d = _0xf2fd45.split(/[ ,]+/g);
          var _0x5621fa;
          _0x4ecfeb._handlers_ = _0x4ecfeb._handlers_ || {};
          for (var _0x296466 = 0x0; _0x296466 < _0x4d456d.length; _0x296466 += 0x1) {
            _0x5621fa = _0x4d456d[_0x296466];
            _0x4ecfeb._handlers_[_0x5621fa] = _0x4ecfeb._handlers_[_0x5621fa] || [];
            _0x4ecfeb._handlers_[_0x5621fa].push(_0x3852f9);
          }
          return _0x4ecfeb;
        };
        _0x409166.prototype.off = function (_0xd540bd, _0x2d98e4) {
          var _0x5672e4 = this;
          _0x5672e4._handlers_ = _0x5672e4._handlers_ || {};
          if (_0xd540bd === undefined) {
            _0x5672e4._handlers_ = {};
          } else {
            if (_0x2d98e4 === undefined) {
              _0x5672e4._handlers_[_0xd540bd] = null;
            } else if (_0x5672e4._handlers_[_0xd540bd] && _0x5672e4._handlers_[_0xd540bd].indexOf(_0x2d98e4) >= 0x0) {
              _0x5672e4._handlers_[_0xd540bd].splice(_0x5672e4._handlers_[_0xd540bd].indexOf(_0x2d98e4), 0x1);
            }
          }
          return _0x5672e4;
        };
        _0x409166.prototype.trigger = function (_0x480bdb, _0x2af97f) {
          var _0x36eea0 = this;
          var _0x4d1c93 = _0x480bdb.split(/[ ,]+/g);
          var _0x4f23f5;
          _0x36eea0._handlers_ = _0x36eea0._handlers_ || {};
          for (var _0xa7f033 = 0x0; _0xa7f033 < _0x4d1c93.length; _0xa7f033 += 0x1) {
            _0x4f23f5 = _0x4d1c93[_0xa7f033];
            if (_0x36eea0._handlers_[_0x4f23f5] && _0x36eea0._handlers_[_0x4f23f5].length) {
              _0x36eea0._handlers_[_0x4f23f5].forEach(function (_0x17bcb4) {
                _0x17bcb4.call(_0x36eea0, {
                  'type': _0x4f23f5,
                  'target': _0x36eea0
                }, _0x2af97f);
              });
            }
          }
        };
        _0x409166.prototype.config = function (_0x103d6d) {
          var _0x7814b2 = this;
          _0x7814b2.options = _0x7814b2.defaults || {};
          if (_0x103d6d) {
            _0x7814b2.options = _0x6e6490.safeExtend(_0x7814b2.options, _0x103d6d);
          }
        };
        _0x409166.prototype.bindEvt = function (_0xd62376, _0x543fbf) {
          var _0x2ba163 = this;
          _0x2ba163._domHandlers_ = _0x2ba163._domHandlers_ || {};
          _0x2ba163._domHandlers_[_0x543fbf] = function () {
            if (typeof _0x2ba163['on' + _0x543fbf] === 'function') {
              _0x2ba163['on' + _0x543fbf].apply(_0x2ba163, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + _0x543fbf + "\" handler.");
            }
          };
          _0x6e6490.bindEvt(_0xd62376, _0x4e0a31[_0x543fbf], _0x2ba163._domHandlers_[_0x543fbf]);
          if (_0x7935fd[_0x543fbf]) {
            _0x6e6490.bindEvt(_0xd62376, _0x7935fd[_0x543fbf], _0x2ba163._domHandlers_[_0x543fbf]);
          }
          return _0x2ba163;
        };
        _0x409166.prototype.unbindEvt = function (_0x18f961, _0x2adf06) {
          var _0x3aafbd = this;
          _0x3aafbd._domHandlers_ = _0x3aafbd._domHandlers_ || {};
          _0x6e6490.unbindEvt(_0x18f961, _0x4e0a31[_0x2adf06], _0x3aafbd._domHandlers_[_0x2adf06]);
          if (_0x7935fd[_0x2adf06]) {
            _0x6e6490.unbindEvt(_0x18f961, _0x7935fd[_0x2adf06], _0x3aafbd._domHandlers_[_0x2adf06]);
          }
          delete _0x3aafbd._domHandlers_[_0x2adf06];
          return this;
        };
        function _0x442804(_0x55fc12, _0x56bdd8) {
          this.identifier = _0x56bdd8.identifier;
          this.position = _0x56bdd8.position;
          this.frontPosition = _0x56bdd8.frontPosition;
          this.collection = _0x55fc12;
          this.defaults = {
            'size': 0x64,
            'threshold': 0.1,
            'color': 'white',
            'fadeTime': 0xfa,
            'dataOnly': false,
            'restJoystick': true,
            'restOpacity': 0.5,
            'mode': "dynamic",
            'zone': document.body,
            'lockX': false,
            'lockY': false,
            'dumbBox': null
          };
          this.config(_0x56bdd8);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0x0;
          }
          this.id = _0x442804.id;
          _0x442804.id += 0x1;
          this.buildEl().stylize();
          this.instance = {
            'el': this.ui.el,
            'on': this.on.bind(this),
            'off': this.off.bind(this),
            'show': this.show.bind(this),
            'hide': this.hide.bind(this),
            'add': this.addToDom.bind(this),
            'remove': this.removeFromDom.bind(this),
            'destroy': this.destroy.bind(this),
            'resetDirection': this.resetDirection.bind(this),
            'computeDirection': this.computeDirection.bind(this),
            'trigger': this.trigger.bind(this),
            'position': this.position,
            'frontPosition': this.frontPosition,
            'ui': this.ui,
            'identifier': this.identifier,
            'id': this.id,
            'options': this.options
          };
          return this.instance;
        }
        ;
        _0x442804.prototype = new _0x409166();
        _0x442804.constructor = _0x442804;
        _0x442804.id = 0x0;
        _0x442804.prototype.buildEl = function (_0x20fa68) {
          this.ui = {};
          if (this.options.dataOnly) {
            return this;
          }
          this.ui.el = document.createElement('div');
          this.ui.back = document.createElement("div");
          this.ui.front = document.createElement('div');
          this.ui.el.className = "nipple collection_" + this.collection.id;
          this.ui.back.className = 'back';
          this.ui.front.className = 'front';
          this.ui.el.setAttribute('id', "nipple_" + this.collection.id + '_' + this.id);
          this.ui.el.appendChild(this.ui.back);
          this.ui.el.appendChild(this.ui.front);
          return this;
        };
        _0x442804.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var _0x24aebf = this.options.fadeTime + 'ms';
          var _0xa1b98a = _0x6e6490.getVendorStyle("borderRadius", "50%");
          var _0x50ee88 = _0x6e6490.getTransitionStyle("transition", "opacity", _0x24aebf);
          var _0x1c57a9 = {
            el: {
              'position': "absolute",
              'opacity': this.options.restOpacity,
              'display': "block",
              'zIndex': 0x3e7
            },
            "back": {
              'position': 'absolute',
              'display': 'block',
              'width': this.options.size + 'px',
              'height': this.options.size + 'px',
              'marginLeft': -this.options.size / 0x2 + 'px',
              'marginTop': -this.options.size / 0x2 + 'px',
              'background': this.options.color,
              'opacity': '.5'
            },
            "front": {
              'width': this.options.size / 0x2 + 'px',
              'height': this.options.size / 0x2 + 'px',
              'position': 'absolute',
              'display': "block",
              'marginLeft': -this.options.size / 0x4 + 'px',
              'marginTop': -this.options.size / 0x4 + 'px',
              'background': this.options.color,
              'opacity': '.5'
            }
          };
          _0x6e6490.extend(_0x1c57a9.el, _0x50ee88);
          _0x6e6490.extend(_0x1c57a9.back, _0xa1b98a);
          _0x6e6490.extend(_0x1c57a9.front, _0xa1b98a);
          this.applyStyles(_0x1c57a9);
          return this;
        };
        _0x442804.prototype.applyStyles = function (_0x19146f) {
          for (var _0x10c914 in this.ui) {
            if (this.ui.hasOwnProperty(_0x10c914)) {
              for (var _0x122ccc in _0x19146f[_0x10c914]) {
                this.ui[_0x10c914].style[_0x122ccc] = _0x19146f[_0x10c914][_0x122ccc];
              }
            }
          }
          return this;
        };
        _0x442804.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        _0x442804.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        _0x442804.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        _0x442804.prototype.show = function (_0x59beef) {
          var _0x41842d = this;
          if (_0x41842d.options.dataOnly) {
            return _0x41842d;
          }
          clearTimeout(_0x41842d.removeTimeout);
          clearTimeout(_0x41842d.showTimeout);
          clearTimeout(_0x41842d.restTimeout);
          _0x41842d.addToDom();
          _0x41842d.restCallback();
          setTimeout(function () {
            _0x41842d.ui.el.style.opacity = 0x1;
          }, 0x0);
          _0x41842d.showTimeout = setTimeout(function () {
            _0x41842d.trigger("shown", _0x41842d.instance);
            if (typeof _0x59beef === "function") {
              _0x59beef.call(this);
            }
          }, _0x41842d.options.fadeTime);
          return _0x41842d;
        };
        _0x442804.prototype.hide = function (_0x474093) {
          var _0x397ab3 = this;
          if (_0x397ab3.options.dataOnly) {
            return _0x397ab3;
          }
          _0x397ab3.ui.el.style.opacity = _0x397ab3.options.restOpacity;
          clearTimeout(_0x397ab3.removeTimeout);
          clearTimeout(_0x397ab3.showTimeout);
          clearTimeout(_0x397ab3.restTimeout);
          _0x397ab3.removeTimeout = setTimeout(function () {
            var _0x3bcdf2 = _0x397ab3.options.mode === "dynamic" ? "none" : "block";
            _0x397ab3.ui.el.style.display = _0x3bcdf2;
            if (typeof _0x474093 === "function") {
              _0x474093.call(_0x397ab3);
            }
            _0x397ab3.trigger('hidden', _0x397ab3.instance);
          }, _0x397ab3.options.fadeTime);
          if (_0x397ab3.options.restJoystick) {
            _0x397ab3.restPosition();
          }
          return _0x397ab3;
        };
        _0x442804.prototype.restPosition = function (_0x6061de) {
          var _0x578b28 = this;
          _0x578b28.frontPosition = {
            'x': 0x0,
            'y': 0x0
          };
          var _0x36641a = _0x578b28.options.fadeTime + 'ms';
          var _0x542f65 = {
            front: _0x6e6490.getTransitionStyle("transition", ["top", "left"], _0x36641a)
          };
          var _0x2f377d = {
            'front': {}
          };
          _0x2f377d.front = {
            'left': _0x578b28.frontPosition.x + 'px',
            'top': _0x578b28.frontPosition.y + 'px'
          };
          _0x578b28.applyStyles(_0x542f65);
          _0x578b28.applyStyles(_0x2f377d);
          _0x578b28.restTimeout = setTimeout(function () {
            if (typeof _0x6061de === "function") {
              _0x6061de.call(_0x578b28);
            }
            _0x578b28.restCallback();
          }, _0x578b28.options.fadeTime);
        };
        _0x442804.prototype.restCallback = function () {
          var _0x4e458e = this;
          var _0x5c4a30 = {
            "front": _0x6e6490.getTransitionStyle("transition", "none", '')
          };
          _0x4e458e.applyStyles(_0x5c4a30);
          _0x4e458e.trigger("rested", _0x4e458e.instance);
        };
        _0x442804.prototype.resetDirection = function () {
          this.direction = {
            'x': false,
            'y': false,
            'angle': false
          };
        };
        _0x442804.prototype.computeDirection = function (_0x3e853c) {
          var _0x40ec79 = _0x3e853c.angle.radian;
          var _0x562911 = Math.PI / 0x4;
          var _0x4242c6 = Math.PI / 0x2;
          var _0x482c40;
          var _0x38cc2c;
          var _0x31c5f9;
          if (_0x40ec79 > _0x562911 && _0x40ec79 < _0x562911 * 0x3 && !_0x3e853c.lockX) {
            _0x482c40 = 'up';
          } else {
            if (_0x40ec79 > -_0x562911 && _0x40ec79 <= _0x562911 && !_0x3e853c.lockY) {
              _0x482c40 = 'left';
            } else {
              if (_0x40ec79 > -_0x562911 * 0x3 && _0x40ec79 <= -_0x562911 && !_0x3e853c.lockX) {
                _0x482c40 = "down";
              } else if (!_0x3e853c.lockY) {
                _0x482c40 = "right";
              }
            }
          }
          if (!_0x3e853c.lockY) {
            if (_0x40ec79 > -_0x4242c6 && _0x40ec79 < _0x4242c6) {
              _0x38cc2c = 'left';
            } else {
              _0x38cc2c = "right";
            }
          }
          if (!_0x3e853c.lockX) {
            if (_0x40ec79 > 0x0) {
              _0x31c5f9 = 'up';
            } else {
              _0x31c5f9 = "down";
            }
          }
          if (_0x3e853c.force > this.options.threshold) {
            var _0x73cfc0 = {};
            for (var _0x474a4b in this.direction) {
              if (this.direction.hasOwnProperty(_0x474a4b)) {
                _0x73cfc0[_0x474a4b] = this.direction[_0x474a4b];
              }
            }
            var _0x42ccc8 = {};
            this.direction = {
              'x': _0x38cc2c,
              'y': _0x31c5f9,
              'angle': _0x482c40
            };
            _0x3e853c.direction = this.direction;
            for (var _0x474a4b in _0x73cfc0) {
              if (_0x73cfc0[_0x474a4b] === this.direction[_0x474a4b]) {
                _0x42ccc8[_0x474a4b] = true;
              }
            }
            if (_0x42ccc8.x && _0x42ccc8.y && _0x42ccc8.angle) {
              return _0x3e853c;
            }
            if (!_0x42ccc8.x || !_0x42ccc8.y) {
              this.trigger('plain', _0x3e853c);
            }
            if (!_0x42ccc8.x) {
              this.trigger("plain:" + _0x38cc2c, _0x3e853c);
            }
            if (!_0x42ccc8.y) {
              this.trigger("plain:" + _0x31c5f9, _0x3e853c);
            }
            if (!_0x42ccc8.angle) {
              this.trigger("dir dir:" + _0x482c40, _0x3e853c);
            }
          }
          return _0x3e853c;
        };
        function _0xf9cb46(_0x427681, _0xcf0108) {
          var _0x243165 = this;
          _0x243165.nipples = [];
          _0x243165.idles = [];
          _0x243165.actives = [];
          _0x243165.ids = [];
          _0x243165.pressureIntervals = {};
          _0x243165.manager = _0x427681;
          _0x243165.id = _0xf9cb46.id;
          _0xf9cb46.id += 0x1;
          _0x243165.defaults = {
            'zone': document.body,
            'multitouch': false,
            'maxNumberOfNipples': 0xa,
            'mode': 'dynamic',
            'position': {
              'top': 0x0,
              'left': 0x0
            },
            'catchDistance': 0xc8,
            'size': 0x64,
            'threshold': 0.1,
            'color': "white",
            'fadeTime': 0xfa,
            'dataOnly': false,
            'restJoystick': true,
            'restOpacity': 0.5,
            'lockX': false,
            'lockY': false,
            'dumbBox': null
          };
          _0x243165.config(_0xcf0108);
          if (_0x243165.options.mode === "static" || _0x243165.options.mode === "semi") {
            _0x243165.options.multitouch = false;
          }
          if (!_0x243165.options.multitouch) {
            _0x243165.options.maxNumberOfNipples = 0x1;
          }
          _0x243165.updateBox();
          _0x243165.prepareNipples();
          _0x243165.bindings();
          _0x243165.begin();
          return _0x243165.nipples;
        }
        _0xf9cb46.prototype = new _0x409166();
        _0xf9cb46.constructor = _0xf9cb46;
        _0xf9cb46.id = 0x0;
        _0xf9cb46.prototype.prepareNipples = function () {
          var _0x4bc0ae = this;
          var _0x56de32 = _0x4bc0ae.nipples;
          _0x56de32.on = _0x4bc0ae.on.bind(_0x4bc0ae);
          _0x56de32.off = _0x4bc0ae.off.bind(_0x4bc0ae);
          _0x56de32.options = _0x4bc0ae.options;
          _0x56de32.destroy = _0x4bc0ae.destroy.bind(_0x4bc0ae);
          _0x56de32.ids = _0x4bc0ae.ids;
          _0x56de32.id = _0x4bc0ae.id;
          _0x56de32.processOnMove = _0x4bc0ae.processOnMove.bind(_0x4bc0ae);
          _0x56de32.processOnEnd = _0x4bc0ae.processOnEnd.bind(_0x4bc0ae);
          _0x56de32.get = function (_0x581f68) {
            if (_0x581f68 === undefined) {
              return _0x56de32[0x0];
            }
            var _0x5eb38d = 0x0;
            for (var _0x5589ae = _0x56de32.length; _0x5eb38d < _0x5589ae; _0x5eb38d += 0x1) {
              if (_0x56de32[_0x5eb38d].identifier === _0x581f68) {
                return _0x56de32[_0x5eb38d];
              }
            }
            return false;
          };
        };
        _0xf9cb46.prototype.bindings = function () {
          var _0x1a70d9 = this;
          _0x1a70d9.bindEvt(_0x1a70d9.options.zone, "start");
          _0x1a70d9.options.zone.style.touchAction = "none";
          _0x1a70d9.options.zone.style.msTouchAction = "none";
        };
        _0xf9cb46.prototype.begin = function () {
          var _0x3a0b44 = this;
          var _0x1c012d = _0x3a0b44.options;
          if (_0x1c012d.mode === 'static') {
            var _0x11440f = _0x3a0b44.createNipple(_0x1c012d.position, _0x3a0b44.manager.getIdentifier());
            _0x11440f.add();
            _0x3a0b44.idles.push(_0x11440f);
          }
        };
        _0xf9cb46.prototype.createNipple = function (_0x6c5d99, _0x146c69) {
          var _0x11c96b = this;
          var _0x5d28eb = _0x6e6490.getScroll();
          var _0x367bef = {};
          var _0x2b7814 = _0x11c96b.options;
          if (_0x6c5d99.x && _0x6c5d99.y) {
            _0x367bef = {
              'x': _0x6c5d99.x - (_0x5d28eb.x + _0x11c96b.box.left),
              'y': _0x6c5d99.y - (_0x5d28eb.y + _0x11c96b.box.top)
            };
          } else {
            if (_0x6c5d99.top || _0x6c5d99.right || _0x6c5d99.bottom || _0x6c5d99.left) {
              var _0x175116 = document.createElement("DIV");
              _0x175116.style.display = 'hidden';
              _0x175116.style.top = _0x6c5d99.top;
              _0x175116.style.right = _0x6c5d99.right;
              _0x175116.style.bottom = _0x6c5d99.bottom;
              _0x175116.style.left = _0x6c5d99.left;
              _0x175116.style.position = "absolute";
              _0x2b7814.zone.appendChild(_0x175116);
              var _0x13c28f = _0x175116.getBoundingClientRect();
              _0x2b7814.zone.removeChild(_0x175116);
              _0x367bef = _0x6c5d99;
              _0x6c5d99 = {
                'x': (_0x2b7814.dumbBox ? _0x2b7814.dumbBox.left : _0x13c28f.left) + _0x5d28eb.x,
                'y': (_0x2b7814.dumbBox ? _0x2b7814.dumbBox.top : _0x13c28f.top) + _0x5d28eb.y
              };
            }
          }
          var _0x22b7f0 = new _0x442804(_0x11c96b, {
            'color': _0x2b7814.color,
            'size': _0x2b7814.size,
            'threshold': _0x2b7814.threshold,
            'fadeTime': _0x2b7814.fadeTime,
            'dataOnly': _0x2b7814.dataOnly,
            'restJoystick': _0x2b7814.restJoystick,
            'restOpacity': _0x2b7814.restOpacity,
            'mode': _0x2b7814.mode,
            'identifier': _0x146c69,
            'position': _0x6c5d99,
            'zone': _0x2b7814.zone,
            'frontPosition': {
              'x': 0x0,
              'y': 0x0
            }
          });
          if (!_0x2b7814.dataOnly) {
            _0x6e6490.applyPosition(_0x22b7f0.ui.el, _0x367bef);
            _0x6e6490.applyPosition(_0x22b7f0.ui.front, _0x22b7f0.frontPosition);
          }
          _0x11c96b.nipples.push(_0x22b7f0);
          _0x11c96b.trigger("added " + _0x22b7f0.identifier + ':added', _0x22b7f0);
          _0x11c96b.manager.trigger("added " + _0x22b7f0.identifier + ':added', _0x22b7f0);
          _0x11c96b.bindNipple(_0x22b7f0);
          return _0x22b7f0;
        };
        _0xf9cb46.prototype.updateBox = function () {
          var _0x2357f7 = this;
          _0x2357f7.box = _0x2357f7.options.zone.getBoundingClientRect();
        };
        _0xf9cb46.prototype.bindNipple = function (_0x1a9595) {
          var _0x1779b4 = this;
          var _0xd65c6f;
          var _0x2bc327 = function _0x1e9736(_0x7074af, _0x3c9a1a) {
            _0xd65c6f = _0x7074af.type + " " + _0x3c9a1a.id + ':' + _0x7074af.type;
            _0x1779b4.trigger(_0xd65c6f, _0x3c9a1a);
          };
          _0x1a9595.on("destroyed", _0x1779b4.onDestroyed.bind(_0x1779b4));
          _0x1a9595.on("shown hidden rested dir plain", _0x2bc327);
          _0x1a9595.on("dir:up dir:right dir:down dir:left", _0x2bc327);
          _0x1a9595.on("plain:up plain:right plain:down plain:left", _0x2bc327);
        };
        _0xf9cb46.prototype.pressureFn = function (_0x192620, _0x1d97c2, _0x143357) {
          var _0x66c3ce = this;
          var _0x3d714e = 0x0;
          clearInterval(_0x66c3ce.pressureIntervals[_0x143357]);
          _0x66c3ce.pressureIntervals[_0x143357] = setInterval(function () {
            var _0x2fd0e5 = _0x192620.force || _0x192620.pressure || _0x192620.webkitForce || 0x0;
            if (_0x2fd0e5 !== _0x3d714e) {
              _0x1d97c2.trigger("pressure", _0x2fd0e5);
              _0x66c3ce.trigger("pressure " + _0x1d97c2.identifier + ":pressure", _0x2fd0e5);
              _0x3d714e = _0x2fd0e5;
            }
          }.bind(_0x66c3ce), 0x64);
        };
        _0xf9cb46.prototype.onstart = function (_0x7ef364) {
          var _0xe8d8bf = this;
          var _0x5714b8 = _0xe8d8bf.options;
          _0x7ef364 = _0x6e6490.prepareEvent(_0x7ef364);
          _0xe8d8bf.updateBox();
          var _0x2b15ef = function _0x35629a(_0x1bdc45) {
            if (_0xe8d8bf.actives.length < _0x5714b8.maxNumberOfNipples) {
              _0xe8d8bf.processOnStart(_0x1bdc45);
            }
          };
          _0x6e6490.map(_0x7ef364, _0x2b15ef);
          _0xe8d8bf.manager.bindDocument();
          return false;
        };
        _0xf9cb46.prototype.processOnStart = function (_0x2dcf0c) {
          var _0x30a478 = this;
          var _0x5c0f29 = _0x30a478.options;
          var _0x10511a;
          var _0x448470 = _0x30a478.manager.getIdentifier(_0x2dcf0c);
          var _0x3c6605 = _0x2dcf0c.force || _0x2dcf0c.pressure || _0x2dcf0c.webkitForce || 0x0;
          var _0x23c0b7 = {
            'x': _0x2dcf0c.pageX,
            'y': _0x2dcf0c.pageY
          };
          var _0x1d6b53 = _0x30a478.getOrCreate(_0x448470, _0x23c0b7);
          if (_0x1d6b53.identifier !== _0x448470) {
            _0x30a478.manager.removeIdentifier(_0x1d6b53.identifier);
          }
          _0x1d6b53.identifier = _0x448470;
          var _0xe843d7 = function _0x553afb(_0x55704a) {
            _0x55704a.trigger('start', _0x55704a);
            _0x30a478.trigger("start " + _0x55704a.id + ":start", _0x55704a);
            _0x55704a.show();
            if (_0x3c6605 > 0x0) {
              _0x30a478.pressureFn(_0x2dcf0c, _0x55704a, _0x55704a.identifier);
            }
            _0x30a478.processOnMove(_0x2dcf0c);
          };
          if ((_0x10511a = _0x30a478.idles.indexOf(_0x1d6b53)) >= 0x0) {
            _0x30a478.idles.splice(_0x10511a, 0x1);
          }
          _0x30a478.actives.push(_0x1d6b53);
          _0x30a478.ids.push(_0x1d6b53.identifier);
          if (_0x5c0f29.mode !== "semi") {
            _0xe843d7(_0x1d6b53);
          } else {
            var _0xb2247f = _0x6e6490.distance(_0x23c0b7, _0x1d6b53.position);
            if (_0xb2247f <= _0x5c0f29.catchDistance) {
              _0xe843d7(_0x1d6b53);
            } else {
              _0x1d6b53.destroy();
              _0x30a478.processOnStart(_0x2dcf0c);
              return;
            }
          }
          return _0x1d6b53;
        };
        _0xf9cb46.prototype.getOrCreate = function (_0x2bc21c, _0x18b91b) {
          var _0x462fa1 = this;
          var _0x667022 = _0x462fa1.options;
          var _0x581f44;
          if (/(semi|static)/.test(_0x667022.mode)) {
            _0x581f44 = _0x462fa1.idles[0x0];
            if (_0x581f44) {
              _0x462fa1.idles.splice(0x0, 0x1);
              return _0x581f44;
            }
            if (_0x667022.mode === "semi") {
              return _0x462fa1.createNipple(_0x18b91b, _0x2bc21c);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          _0x581f44 = _0x462fa1.createNipple(_0x18b91b, _0x2bc21c);
          return _0x581f44;
        };
        _0xf9cb46.prototype.processOnMove = function (_0x18bb7f) {
          var _0x53f7dd = this;
          var _0x2d6c3a = _0x53f7dd.options;
          var _0x4e44d6 = _0x53f7dd.manager.getIdentifier(_0x18bb7f);
          var _0x598280 = _0x53f7dd.nipples.get(_0x4e44d6);
          if (!_0x598280) {
            console.error("Found zombie joystick with ID " + _0x4e44d6);
            _0x53f7dd.manager.removeIdentifier(_0x4e44d6);
            return;
          }
          _0x598280.identifier = _0x4e44d6;
          var _0x3f0227 = _0x598280.options.size / 0x2;
          var _0x1dee72 = {
            'x': _0x18bb7f.pageX,
            'y': _0x18bb7f.pageY
          };
          var _0x166f6b = _0x6e6490.distance(_0x1dee72, _0x598280.position);
          var _0x2348be = _0x6e6490.angle(_0x1dee72, _0x598280.position);
          var _0x3f18a1 = _0x6e6490.radians(_0x2348be);
          var _0x2b6cc7 = _0x166f6b / _0x3f0227;
          if (_0x166f6b > _0x3f0227) {
            _0x166f6b = _0x3f0227;
            _0x1dee72 = _0x6e6490.findCoord(_0x598280.position, _0x166f6b, _0x2348be);
          }
          var _0x31cdda = _0x1dee72.x - _0x598280.position.x;
          var _0x11fe10 = _0x1dee72.y - _0x598280.position.y;
          if (_0x2d6c3a.lockX) {
            _0x11fe10 = 0x0;
          }
          if (_0x2d6c3a.lockY) {
            _0x31cdda = 0x0;
          }
          _0x598280.frontPosition = {
            'x': _0x31cdda,
            'y': _0x11fe10
          };
          if (!_0x2d6c3a.dataOnly) {
            _0x6e6490.applyPosition(_0x598280.ui.front, _0x598280.frontPosition);
          }
          var _0x35eb2d = {
            'identifier': _0x598280.identifier,
            'position': _0x1dee72,
            'force': _0x2b6cc7,
            'pressure': _0x18bb7f.force || _0x18bb7f.pressure || _0x18bb7f.webkitForce || 0x0,
            'distance': _0x166f6b,
            'angle': {
              'radian': _0x3f18a1,
              'degree': _0x2348be
            },
            'instance': _0x598280,
            'lockX': _0x2d6c3a.lockX,
            'lockY': _0x2d6c3a.lockY
          };
          _0x35eb2d = _0x598280.computeDirection(_0x35eb2d);
          _0x35eb2d.angle = {
            'radian': _0x6e6490.radians(0xb4 - _0x2348be),
            'degree': 0xb4 - _0x2348be
          };
          _0x598280.trigger('move', _0x35eb2d);
          _0x53f7dd.trigger("move " + _0x598280.id + ":move", _0x35eb2d);
        };
        _0xf9cb46.prototype.processOnEnd = function (_0x40b8be) {
          var _0x25b953 = this;
          var _0xccd38b = _0x25b953.options;
          var _0x21b56b = _0x25b953.manager.getIdentifier(_0x40b8be);
          var _0x44a01f = _0x25b953.nipples.get(_0x21b56b);
          var _0x5c8ccd = _0x25b953.manager.removeIdentifier(_0x44a01f.identifier);
          if (!_0x44a01f) {
            return;
          }
          if (!_0xccd38b.dataOnly) {
            _0x44a01f.hide(function () {
              if (_0xccd38b.mode === 'dynamic') {
                _0x44a01f.trigger("removed", _0x44a01f);
                _0x25b953.trigger("removed " + _0x44a01f.id + ":removed", _0x44a01f);
                _0x25b953.manager.trigger("removed " + _0x44a01f.id + ":removed", _0x44a01f);
                _0x44a01f.destroy();
              }
            });
          }
          clearInterval(_0x25b953.pressureIntervals[_0x44a01f.identifier]);
          _0x44a01f.resetDirection();
          _0x44a01f.trigger('end', _0x44a01f);
          _0x25b953.trigger("end " + _0x44a01f.id + ":end", _0x44a01f);
          if (_0x25b953.ids.indexOf(_0x44a01f.identifier) >= 0x0) {
            _0x25b953.ids.splice(_0x25b953.ids.indexOf(_0x44a01f.identifier), 0x1);
          }
          if (_0x25b953.actives.indexOf(_0x44a01f) >= 0x0) {
            _0x25b953.actives.splice(_0x25b953.actives.indexOf(_0x44a01f), 0x1);
          }
          if (/(semi|static)/.test(_0xccd38b.mode)) {
            _0x25b953.idles.push(_0x44a01f);
          } else if (_0x25b953.nipples.indexOf(_0x44a01f) >= 0x0) {
            _0x25b953.nipples.splice(_0x25b953.nipples.indexOf(_0x44a01f), 0x1);
          }
          _0x25b953.manager.unbindDocument();
          if (/(semi|static)/.test(_0xccd38b.mode)) {
            _0x25b953.manager.ids[_0x5c8ccd.id] = _0x5c8ccd.identifier;
          }
        };
        _0xf9cb46.prototype.onDestroyed = function (_0x2f99aa, _0x4f0649) {
          var _0x24b3ce = this;
          if (_0x24b3ce.nipples.indexOf(_0x4f0649) >= 0x0) {
            _0x24b3ce.nipples.splice(_0x24b3ce.nipples.indexOf(_0x4f0649), 0x1);
          }
          if (_0x24b3ce.actives.indexOf(_0x4f0649) >= 0x0) {
            _0x24b3ce.actives.splice(_0x24b3ce.actives.indexOf(_0x4f0649), 0x1);
          }
          if (_0x24b3ce.idles.indexOf(_0x4f0649) >= 0x0) {
            _0x24b3ce.idles.splice(_0x24b3ce.idles.indexOf(_0x4f0649), 0x1);
          }
          if (_0x24b3ce.ids.indexOf(_0x4f0649.identifier) >= 0x0) {
            _0x24b3ce.ids.splice(_0x24b3ce.ids.indexOf(_0x4f0649.identifier), 0x1);
          }
          _0x24b3ce.manager.removeIdentifier(_0x4f0649.identifier);
          _0x24b3ce.manager.unbindDocument();
        };
        _0xf9cb46.prototype.destroy = function () {
          var _0x664b20 = this;
          _0x664b20.unbindEvt(_0x664b20.options.zone, "start");
          _0x664b20.nipples.forEach(function (_0x34fb16) {
            _0x34fb16.destroy();
          });
          for (var _0x2fa66c in _0x664b20.pressureIntervals) {
            if (_0x664b20.pressureIntervals.hasOwnProperty(_0x2fa66c)) {
              clearInterval(_0x664b20.pressureIntervals[_0x2fa66c]);
            }
          }
          _0x664b20.trigger("destroyed", _0x664b20.nipples);
          _0x664b20.manager.unbindDocument();
          _0x664b20.off();
        };
        function _0x15945e(_0x5e145d) {
          var _0x4d87be = this;
          _0x4d87be.ids = {};
          _0x4d87be.index = 0x0;
          _0x4d87be.collections = [];
          _0x4d87be.config(_0x5e145d);
          _0x4d87be.prepareCollections();
          var _0x5f50be;
          _0x6e6490.bindEvt(window, "resize", function (_0x3d4d7d) {
            clearTimeout(_0x5f50be);
            _0x5f50be = setTimeout(function () {
              var _0xe050e9;
              var _0x89d944 = _0x6e6490.getScroll();
              _0x4d87be.collections.forEach(function (_0x2d77d3) {
                _0x2d77d3.forEach(function (_0x27799c) {
                  _0xe050e9 = _0x27799c.el.getBoundingClientRect();
                  _0x27799c.position = {
                    'x': _0x89d944.x + _0xe050e9.left,
                    'y': _0x89d944.y + _0xe050e9.top
                  };
                });
              });
            }, 0x64);
          });
          return _0x4d87be.collections;
        }
        ;
        _0x15945e.prototype = new _0x409166();
        _0x15945e.constructor = _0x15945e;
        _0x15945e.prototype.prepareCollections = function () {
          var _0x312a52 = this;
          _0x312a52.collections.create = _0x312a52.create.bind(_0x312a52);
          _0x312a52.collections.on = _0x312a52.on.bind(_0x312a52);
          _0x312a52.collections.off = _0x312a52.off.bind(_0x312a52);
          _0x312a52.collections.destroy = _0x312a52.destroy.bind(_0x312a52);
          _0x312a52.collections.get = function (_0x948740) {
            var _0x302867;
            _0x312a52.collections.every(function (_0x3ddeff) {
              if (_0x302867 = _0x3ddeff.get(_0x948740)) {
                return false;
              }
              return true;
            });
            return _0x302867;
          };
        };
        _0x15945e.prototype.create = function (_0x5ab705) {
          return this.createCollection(_0x5ab705);
        };
        _0x15945e.prototype.createCollection = function (_0x3e049b) {
          var _0x4a175d = this;
          var _0x272ce9 = new _0xf9cb46(_0x4a175d, _0x3e049b);
          _0x4a175d.bindCollection(_0x272ce9);
          _0x4a175d.collections.push(_0x272ce9);
          return _0x272ce9;
        };
        _0x15945e.prototype.bindCollection = function (_0x500d95) {
          var _0x28242d = this;
          var _0x482b71;
          var _0x346ec0 = function _0x504f87(_0x3a822d, _0x25114e) {
            _0x482b71 = _0x3a822d.type + " " + _0x25114e.id + ':' + _0x3a822d.type;
            _0x28242d.trigger(_0x482b71, _0x25114e);
          };
          _0x500d95.on('destroyed', _0x28242d.onDestroyed.bind(_0x28242d));
          _0x500d95.on("shown hidden rested dir plain", _0x346ec0);
          _0x500d95.on("dir:up dir:right dir:down dir:left", _0x346ec0);
          _0x500d95.on("plain:up plain:right plain:down plain:left", _0x346ec0);
        };
        _0x15945e.prototype.bindDocument = function () {
          var _0x212837 = this;
          if (!_0x212837.binded) {
            _0x212837.bindEvt(document, 'move').bindEvt(document, "end");
            _0x212837.binded = true;
          }
        };
        _0x15945e.prototype.unbindDocument = function (_0x157c38) {
          var _0x32f431 = this;
          if (!Object.keys(_0x32f431.ids).length || _0x157c38 === true) {
            _0x32f431.unbindEvt(document, 'move').unbindEvt(document, "end");
            _0x32f431.binded = false;
          }
        };
        _0x15945e.prototype.getIdentifier = function (_0x3c0920) {
          var _0x108dc4;
          if (!_0x3c0920) {
            _0x108dc4 = this.index;
          } else {
            _0x108dc4 = _0x3c0920.identifier === undefined ? _0x3c0920.pointerId : _0x3c0920.identifier;
            if (_0x108dc4 === undefined) {
              _0x108dc4 = this.latest || 0x0;
            }
          }
          if (this.ids[_0x108dc4] === undefined) {
            this.ids[_0x108dc4] = this.index;
            this.index += 0x1;
          }
          this.latest = _0x108dc4;
          return this.ids[_0x108dc4];
        };
        _0x15945e.prototype.removeIdentifier = function (_0x44c7fd) {
          var _0x4e288b = {};
          for (var _0x429caa in this.ids) {
            if (this.ids[_0x429caa] === _0x44c7fd) {
              _0x4e288b.id = _0x429caa;
              _0x4e288b.identifier = this.ids[_0x429caa];
              delete this.ids[_0x429caa];
              break;
            }
          }
          return _0x4e288b;
        };
        _0x15945e.prototype.onmove = function (_0x241f27) {
          var _0x5a7a90 = this;
          _0x5a7a90.onAny("move", _0x241f27);
          return false;
        };
        _0x15945e.prototype.onend = function (_0x35032e) {
          var _0x40762e = this;
          _0x40762e.onAny("end", _0x35032e);
          return false;
        };
        _0x15945e.prototype.oncancel = function (_0x52f997) {
          var _0x1a3194 = this;
          _0x1a3194.onAny("end", _0x52f997);
          return false;
        };
        _0x15945e.prototype.onAny = function (_0x315662, _0xe8b537) {
          var _0x510667 = this;
          var _0x5a5e40;
          var _0x58dff7 = "processOn" + _0x315662.charAt(0x0).toUpperCase() + _0x315662.slice(0x1);
          _0xe8b537 = _0x6e6490.prepareEvent(_0xe8b537);
          var _0x41e232 = function _0x5e2bd6(_0x537278, _0x2ac1a7, _0x338fb7) {
            if (_0x338fb7.ids.indexOf(_0x2ac1a7) >= 0x0) {
              _0x338fb7[_0x58dff7](_0x537278);
              _0x537278._found_ = true;
            }
          };
          var _0x38b020 = function _0x4d84(_0x4c4273) {
            _0x5a5e40 = _0x510667.getIdentifier(_0x4c4273);
            _0x6e6490.map(_0x510667.collections, _0x41e232.bind(null, _0x4c4273, _0x5a5e40));
            if (!_0x4c4273._found_) {
              _0x510667.removeIdentifier(_0x5a5e40);
            }
          };
          _0x6e6490.map(_0xe8b537, _0x38b020);
          return false;
        };
        _0x15945e.prototype.destroy = function () {
          var _0xf31e6f = this;
          _0xf31e6f.unbindDocument(true);
          _0xf31e6f.ids = {};
          _0xf31e6f.index = 0x0;
          _0xf31e6f.collections.forEach(function (_0x58910e) {
            _0x58910e.destroy();
          });
          _0xf31e6f.off();
        };
        _0x15945e.prototype.onDestroyed = function (_0x301f69, _0x276761) {
          var _0x9f03a4 = this;
          if (_0x9f03a4.collections.indexOf(_0x276761) < 0x0) {
            return false;
          }
          _0x9f03a4.collections.splice(_0x9f03a4.collections.indexOf(_0x276761), 0x1);
        };
        var _0x38d0b3 = new _0x15945e();
        return {
          'create': function _0x116206(_0x5b8076) {
            return _0x38d0b3.create(_0x5b8076);
          },
          'factory': _0x38d0b3
        };
      });
      var _0x530498 = false;
      var _0x470b73 = true;
      var _0x10b7e5 = null;
      var _0x37ea2c = 0x1;
      var _0x2f539c = null;
      var _0x20b0f8 = {};
      window.gerarCodigoUnico = function () {
        var _0x212862 = bbs.userId || '';
        var _0x405bb5 = _0x212862.match(/\d/g);
        var _0xc777ad = (_0x405bb5 || []).reduce(function (_0x2cac1d, _0x31fdda) {
          return _0x2cac1d + parseInt(_0x31fdda, 0xa);
        }, 0x0);
        var _0x1b22d6 = '';
        var _0x555c71 = '';
        for (var _0xc6f1fc = 0x0; _0xc6f1fc < 0x5; _0xc6f1fc++) {
          var _0x2170bc = Math.floor(Math.random() * "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length);
          _0x1b22d6 += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(_0x2170bc);
          var _0x2a8c63 = Math.floor(Math.random() * "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length);
          _0x555c71 += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(_0x2a8c63);
        }
        return "ROOM" + _0x555c71 + '_' + _0xc777ad + '_' + _0x1b22d6;
      };
      var _0x5a465b = {
        'sao': "wss://nycsam01.wormworld.io",
        'dal': "wss://nycsam01.wormworld.io",
        'hil': 'wss://nycsam01.wormworld.io',
        'vin': 'wss://nycsam01.wormworld.io',
        'fra': "wss://fraceu01.wormworld.io",
        'gra': 'wss://fraceu01.wormworld.io',
        'dxb': "wss://fraceu01.wormworld.io",
        'sin': "wss://sin01.wormworld.io",
        'tok': 'wss://sin01.wormworld.io',
        'local': "ws://localhost:5000",
        'slocal': "wss://nycsam01.wormworld.io"
      };
      var _0x3405ee = ["sao", 'dal', "hil", 'vin', "fra", "gra", "sin", "tok", "dxb"];
      $("#mm-params-nickname").attr("maxlength", 0x12);
      var _0x5b5da3 = {
        'ref': [],
        'hs': {},
        'fxdo': function _0x42cd82(_0x470934) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!_0x5b5da3[_0x470934].playing()) {
              _0x5b5da3[_0x470934].play();
            }
          }
        },
        'fxAux': function _0x1df800(_0x1c0178, _0x3ffc74) {
          if (_0x3ffc74 === 0x1 && !_0x5b5da3.fxStatus.top1) {
            _0x5b5da3.fxStatus.top1 = true;
            _0x5b5da3.fxdo("top1");
          }
          return _0x1c0178;
        },
        'fxStatus': {
          'top1': false
        }
      };
      window._wwcio = {
        'message': null,
        'obj': {},
        'player': {},
        'join': function _0x589711() {},
        'update': function _0x4b3eaa() {},
        'leave': function _0x79b0f9() {},
        'leaderboardUpdated': function _0x503433(_0xe60ed8, _0x148fac) {
          _0x5a0d5c(_0xe60ed8, _0x148fac);
        },
        'sendLocation': function _0x4dd053() {},
        'findFriend': function _0x352aef() {},
        'close': function _0x33247a() {},
        'set': function _0xba76f1(_0x153dbc) {
          return _0x153dbc;
        },
        'friend': null,
        'myLocation': {},
        'crown': null
      };
      window._wwc = {
        'deadPositionMap': function _0x40f327() {
          var _0x18d294 = new PIXI.Text('X', _wwc.fontStyleMap());
          _0x18d294.position.x = _wwc.memory.positionOfDead.x;
          _0x18d294.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(_0x18d294);
          var _0x30bf02 = 0x0;
          var _0xc4c824 = setInterval(function () {
            _0x30bf02 = !_0x30bf02;
            _0x18d294.alpha = _0x30bf02;
          }, 0x1f4);
          var _0x1a2e1f = setTimeout(function () {
            clearInterval(_0xc4c824);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0x18d294);
            _0x18d294.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(_0xc4c824);
            clearTimeout(_0x1a2e1f);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0x18d294);
            if (_0x18d294 && _0x18d294.destroy) {
              _0x18d294.destroy();
            }
          };
        },
        'fontStyleMap': function _0x1e4bd0(_0x6b82e2) {
          return {
            'fontFamily': 'Arial',
            'fontSize': "12px",
            'fill': 'red',
            'align': 'center',
            'fontWeight': "bold"
          };
        },
        'startGame': function _0x48b496() {
          if (_wwc.memory.positionOfDead) {}
        },
        'stopGame': function _0x4f1b10() {
          var _0x3e8411;
          var _0x1963d9;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          _wwc.memory.positionOfDead = {
            'x': (_0x3e8411 = _wwcio.myLocation) === null || _0x3e8411 === undefined ? undefined : _0x3e8411.position.x,
            'y': (_0x1963d9 = _wwcio.myLocation) === null || _0x1963d9 === undefined ? undefined : _0x1963d9.position.y
          };
          if (_wwc.removeDeadPositionMap) {
            _wwc.removeDeadPositionMap();
          }
        },
        'memory': {},
        'mySkin': null,
        'customPaths': {
          'map': null
        },
        '_ass_type': [],
        'testSkinMod': function _0x4db028(_0x3f98bf) {
          var _0x563626 = typeof _0x3f98bf === "string";
          _0x3f98bf = parseInt(_0x3f98bf);
          return _0x563626 && isNaN(_0x3f98bf) ? false : parseInt(_0x3f98bf) >= 0x18f && parseInt(_0x3f98bf) < 0x2327;
        },
        'testWear': function _0x49a6cb(_0x15a560) {
          var _0x5e6fc8 = typeof _0x15a560 === "string";
          _0x15a560 = parseInt(_0x15a560);
          return _0x5e6fc8 && isNaN(_0x15a560) ? false : parseInt(_0x15a560) >= 0x18f && parseInt(_0x15a560) < 0x2327;
        },
        'isNumberValid': function _0x479e18(_0x8e8b65) {
          return _0x8e8b65 !== '' && _0x8e8b65 !== null && _0x8e8b65 !== undefined && !isNaN(_0x8e8b65);
        },
        'validInputWear': function _0x3a6a3b(_0x317a9a) {
          var _0x18033b = _wwc.testWear(_0x317a9a);
          var _0x5ad7ca = typeof skinId === "string";
          if (!_0x18033b && !_0x5ad7ca) {
            return _0x317a9a;
          }
          return 0x0;
        },
        'validInput': function _0x416db4(_0x47c386) {
          var _0x344e9b = _wwc.testSkinMod(_0x47c386);
          var _0x505891 = typeof _0x47c386 === "string";
          if (!_0x344e9b && !_0x505891) {
            return _0x47c386;
          }
          try {
            var _0x2d1280 = $('#inputReplaceSkin').val();
            return encodeURI(_wwc.isNumberValid(_0x2d1280) ? _0x2d1280 : bbs.idReplaceSkin || 0x23);
          } catch (_0x45632d) {
            return encodeURI(0x23);
          }
        },
        'fullscreen': null,
        'joystick': function _0x55fb09(_0x35df27) {
          var _0x201e1d = {
            'checked': true,
            'color': "red",
            'mode': "dynamic",
            'positionMode': 'L',
            'size': 0x64,
            'pxy': 0x64
          };
          return _0x201e1d;
        },
        'load_con': function _0x2580b4() {
          $(".selecionar-sala-v2").click(function (_0x35aefc) {
            _0x35aefc.preventDefault();
            var _0x461fc4 = $(this).attr("data-con") || bbs.con;
            _0x3b679f.addRoom($(this).attr('data-room'));
            _0x1f32cc.dh.Zp = function (_0x3f347a, _0x22804c, _0x25db3b) {
              bbs.con = _0x25db3b ? _0x3f347a : _0x461fc4 || _0x3f347a;
              _wwc.Zp(bbs.con, _0x22804c);
            };
            _0x1f32cc.Pn();
          });
        },
        'fnSaveGame': function _0x5c235e() {
          var _0x7fb254 = $("#saveGame");
          _0x7fb254.prop("checked", bbs.saveGame);
          _0x7fb254.change(function () {
            if (!this.checked) {
              var _0x177c91 = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
              $(this).prop('checked', !_0x177c91);
              if (!this.checked) {
                _wwc.fnSetCounts("zerar");
              }
            }
            bbs.saveGame = this.checked;
            _0x3b679f.hsTotal.alpha = this.checked ? 0x1 : 0x0;
            _0x3b679f.killTotal.alpha = this.checked ? 0x1 : 0x0;
            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
          });
        },
        'fnSetCounts': function _0xe5b97c(_0x5642fd, _0xf0939f) {
          var _0x3e7c05 = function _0x54e34d(_0x4be321, _0x3e0d8d, _0x52e156, _0x15309c) {
            _wwc.setCountGame(_0x4be321, _0x3e0d8d, _0x52e156, _0x15309c);
          };
          if (_0x5642fd === "count") {
            bbs.kill = (bbs.kill || 0x0) + (_0xf0939f ? 0x0 : 0x1);
            bbs.headshot = (bbs.headshot || 0x0) + (_0xf0939f ? 0x1 : 0x0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (_0xf0939f ? 0x0 : 0x1);
            bbs.theadshot = bbs.theadshot + (_0xf0939f ? 0x1 : 0x0);
          }
          if (_0x5642fd === "open") {
            bbs.kill = 0x0;
            bbs.headshot = 0x0;
            if (bbs.saveGame) {}
          }
          if (_0x5642fd === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0x0) + 0x1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (_0x5642fd === "zerar") {
            bbs.kill = 0x0;
            bbs.tkill = 0x0;
            bbs.headshot = 0x0;
            bbs.theadshot = 0x0;
            bbs.died = 0x0;
          }
          _0x3e7c05(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        'setCountGame': function _0x602190(_0x3aab30, _0x1d5c56, _0x36003f, _0x489520) {
          if (!bbs.saveGame) {
            _0x3b679f.hsTotal.alpha = 0x0;
            _0x3b679f.killTotal.alpha = 0x0;
          }
          _0x3b679f.hs.text = _0x1d5c56;
          _0x3b679f.hsTotal.text = _0x489520;
          _0x3b679f.kill.text = _0x3aab30;
          _0x3b679f.killTotal.text = _0x36003f;
        },
        'ismobile': _0x32dfdf(),
        'Zp': undefined
      };
      window.bbs = {
        'version': 0x0,
        'headshot': 0x0,
        'kill': 0x0,
        'theadshot': 0x0,
        'tkill': 0x0,
        'died': 0x0,
        'start': 0x0,
        'HOL': 0x0,
        'tk': null,
        'country': null,
        'finish': 0x0,
        'saveGame': false,
        'idReplaceSkin': 0x22,
        'mobile': false,
        'joystick': null,
        'configJoystick': {
          'buttons': {
            'respawn': {
              'label': "RESPAWN",
              'labelAbbreviation': 'RP',
              'active': false,
              'action': "mbf.mbfass6()"
            },
            'lobby': {
              'label': "LOBBY",
              'labelAbbreviation': 'L',
              'active': true,
              'action': 'mbf.mbfass5()'
            },
            'rotate': {
              'label': "ROTATE",
              'labelAbbreviation': 'A',
              'active': true,
              'action': 'mbf.mbfass4()'
            },
            'snail': {
              'label': "SNAIL",
              'labelAbbreviation': 'B',
              'active': true,
              'action': "mbf.mbfass3()"
            },
            'search': {
              'label': "SEARCH",
              'labelAbbreviation': 'SE',
              'active': false,
              'action': "mbf.mbfass0()"
            },
            'swap': {
              'label': "SWAP",
              'labelAbbreviation': 'SW',
              'active': false,
              'action': "mbf.mbf_cambiar()"
            },
            'zoomplus': {
              'label': 'Z+',
              'labelAbbreviation': '+',
              'active': true,
              'action': "mbf.mbfass1()"
            },
            'zoomminus': {
              'label': 'Z-',
              'labelAbbreviation': '-',
              'active': true,
              'action': 'mbf.mbfass2()'
            },
            'zoom': {
              'label': 'x1',
              'labelAbbreviation': 'x1',
              'active': true,
              'action': "mbf.mbfass7()"
            }
          },
          'typeZoom': ["btn", 'range'],
          'typeCurrent': "btn",
          'typeName': ['all', "abb"],
          'typeCurrentName': "abb"
        },
        'customJoystick': null,
        'display': {
          'customClock': null,
          'clock': {
            'x': 0x3c,
            'y': 0x3c
          },
          'top': {
            'x': 0xe1,
            'y': 0x1
          },
          'default': false,
          'custom': false,
          'm': {
            'x': 0x3c,
            'y': 0x3c
          },
          'r': {
            'x': 0xe1,
            'y': 0x1
          },
          'ms': false
        },
        'PropertyManager': {},
        'acs': true,
        'lr': false,
        'showTophs': true,
        'showRechs': true,
        'con': null,
        'params': '',
        'arrow': true,
        'activeBadLang': false,
        'activeSounds2': true,
        'activeZoom': false,
        'activeZoomMobile': false,
        'top10Show': [],
        'background': null,
        'backgroundIsCustom': false,
        'nickname': null,
        'code': null,
        'configZoom': {
          'limitDown': 0.25,
          'step': 0.25,
          'closeUp': 0.5,
          'closeDown': 0x1
        }
      };
      var _0x453fee = localStorage.getItem("wwc_version");
      var _0x8d3f43 = localStorage.getItem("wwcSaveGame");
      var _0x5740e3 = localStorage.getItem("wwc_config");
      if (_0x8d3f43) {
        _0x8d3f43 = JSON.parse(_0x8d3f43);
      }
      for (var _0x10032c in _0x8d3f43) {
        switch (_0x10032c) {
          case 'configJoystick':
            if (!_0x8d3f43[_0x10032c]) {
              break;
            }
            bbs[_0x10032c] = _0x8d3f43[_0x10032c];
            for (var _0x10656c in _0x8d3f43[_0x10032c].buttons) {
              bbs[_0x10032c].buttons[_0x10656c] = _0x8d3f43[_0x10032c].buttons[_0x10656c];
            }
            for (var _0x8aebba in _0x8d3f43[_0x10032c]) {
              bbs[_0x10032c][_0x8aebba] = _0x8d3f43[_0x10032c][_0x8aebba];
            }
            break;
          case 'joystick':
            bbs[_0x10032c] = _wwc.joystick();
            for (var _0x21dbb1 in _0x8d3f43[_0x10032c]) {
              bbs[_0x10032c][_0x21dbb1] = _0x8d3f43[_0x10032c][_0x21dbb1];
            }
            break;
          case "display":
            for (var _0x390dc in _0x8d3f43[_0x10032c]) {
              bbs[_0x10032c][_0x390dc] = _0x8d3f43[_0x10032c][_0x390dc];
            }
            break;
          default:
            bbs[_0x10032c] = _0x8d3f43[_0x10032c];
            break;
        }
      }
      if (!bbs.version || bbs.version !== 0x2) {
        bbs.version = 0x2;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        _0x1f32cc.dh.Cn = 0x0;
        if (_0x1f32cc.dh.mq) {
          _0x1f32cc.dh.mq.close();
        }
        _0x1f32cc.dh.mq = null;
        _0x1f32cc.dh.Zp = function (_0x3059ad, _0x12aed2) {
          _wwc.Zp(bbs.con || _0x3059ad, _0x12aed2);
        };
        _0x1f32cc.Pn();
      };
      window.lobbyFn = function () {
        _0x1f32cc.dh.Cn = 0x0;
        if (_0x1f32cc.dh.mq) {
          _0x1f32cc.dh.mq.close();
        }
        _0x1f32cc.dh.mq = null;
        _0x1f32cc.dh.Np();
        _0x5bfe63();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter('#mm-store');
      $('.store-view-cont').append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var _0x1991e7 = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        _0x1991e7 = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append("<div id=\"wwc-set-view\" class=\"base-popup-view\" style=\"".concat(_0x1991e7, "\"></div>"));
      window.mbf = {};
      var _0x2b627c = function _0x502d24(_0x193758) {
        if (bbs.shiftKey) {
          return;
        }
        var _0x5e4cf1 = 0x1e;
        var _0x3d1a4f = 0x0;
        function _0x2eabd2() {
          var _0x1d8dcd = parseFloat(_0x1f32cc.og.af.Bn);
          _0x1d8dcd = (_0x1d8dcd - 0.06) % (0x2 * Math.PI);
          if (_0x1d8dcd < 0x0) {
            _0x1d8dcd += 0x2 * Math.PI;
          }
          _0x1f32cc.og.af.Bn = _0x1d8dcd.toFixed(0x2);
        }
        function _0x1771e5(_0xc71985) {
          _0x530498 = setInterval(function () {
            if (_0xc71985 === 0x1) {
              _0x3d1a4f = _0x3d1a4f + 0x1;
              if (_0x3d1a4f % 0x50 === 0x0 && true) {
                _0x5e4cf1 = _0x5e4cf1 + 0x12;
                clearInterval(_0x530498);
                _0x1771e5(0x1);
              }
            }
            _0x2eabd2();
          }, _0x5e4cf1);
        }
        if ((_0x193758 == 0x7 || _0x193758.key == '7') && _0x530498 === null) {
          _0x1f32cc.og.af.ng.Eb.removeEventListener('pointermove', mbf.onmovepoint, true);
          _0x1771e5(0x1);
          return;
        }
        if ((_0x193758 == 0x8 || _0x193758.key == '8') && _0x530498 === null) {
          _0x1f32cc.og.af.ng.Eb.removeEventListener('pointermove', mbf.onmovepoint, true);
          _0x1771e5(0x2);
          return;
        }
        if (_0x530498 !== null) {
          clearInterval(_0x530498);
          _0x1f32cc.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          _0x530498 = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function () {
        var _0x1b61a0 = _0x2f539c ? 0x64 : 0x2;
        if (_0x37ea2c <= _0x1b61a0) {
          var _0x1b9cc7;
          _0x37ea2c += _0x37ea2c > 0xf ? 0x1 : ((_0x1b9cc7 = bbs.configZoom) === null || _0x1b9cc7 === undefined ? undefined : _0x1b9cc7.step) || 0.25;
        }
        _0x37ea2c = Math.min(_0x37ea2c, _0x1b61a0);
        _0x3b679f.zoom.text = 'x' + _0x37ea2c.toFixed(0x2);
      };
      mbf.mbfass2 = function () {
        var _0x20e0f1;
        var _0x502cda;
        var _0x13339f;
        var _0x205669 = _0x37ea2c - (_0x37ea2c > 0xf ? 0x1 : (_0x20e0f1 = bbs.configZoom) === null || _0x20e0f1 === undefined ? undefined : _0x20e0f1.step);
        _0x37ea2c = _0x205669 < ((_0x502cda = bbs.configZoom) === null || _0x502cda === undefined ? undefined : _0x502cda.limitDown) ? (_0x13339f = bbs.configZoom) === null || _0x13339f === undefined ? undefined : _0x13339f.step : _0x205669;
        _0x3b679f.zoom.text = 'x' + _0x37ea2c.toFixed(0x2);
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          _0x2b627c(0x8);
          $("#mbf_rotate").css('background-color', "#000");
        } else {
          _0x2b627c(_0x530498 ? 0x0 : 0x8);
        }
        if (_0x530498) {
          mbf.mbf_snail = true;
          $("#mbf_snail").css('background-color', "#156ab3");
        } else {
          mbf.mbf_snail = false;
          $('#mbf_snail').css('background-color', "#000");
        }
      };
      mbf.mbfass4 = function () {
        if (mbf.mbf_snail) {
          $("#mbf_snail").css('background-color', "#000");
          _0x2b627c(0x8);
        } else {
          _0x2b627c(_0x530498 ? 0x0 : 0x8);
        }
        if (_0x530498) {
          mbf.mbf_rotate = true;
          $("#mbf_rotate").css('background-color', "#156ab3");
        } else {
          mbf.mbf_rotate = false;
          $('#mbf_rotate').css('background-color', "#000");
        }
      };
      mbf.mbfass5 = function () {
        window.location.reload();
      };
      mbf.mbfass6 = function () {
        respawnFn();
      };
      mbf.mbfass7 = function () {
        _0x37ea2c = 0x1;
        _0x3b679f.zoom.text = 'x1';
      };
      mbf.mbfass9 = function (_0x401ee4) {
        var _0x3eb9da = _0x2f539c ? 0x64 : 0x2;
        if (_0x401ee4.value <= _0x3eb9da) {
          _0x37ea2c = _0x401ee4.value;
          _0x3b679f.zoom.text = 'x' + _0x401ee4.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 0x0;
      mbf.mbf_cambiar_seq = 0x0;
      mbf.mbf_cambiar_add = function (_0x45bde5, _0x49da8a) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[_0x45bde5]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[_0x45bde5] = _0x49da8a || "Skin " + _0x45bde5;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var _0x276fcf = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= _0x276fcf.length) {
          mbf.mbf_cambiar_seq = 0x0;
        }
        for (var _0x54ee3b = 0x0; _0x54ee3b < _0x276fcf.length; _0x54ee3b++) {
          mbf.mbf_cambiar_current = _0x276fcf[_0x54ee3b];
          if (_0x54ee3b === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = _0x276fcf[_0x54ee3b];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 0x1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (_0xece2b2) {
          if (_0xece2b2.deltaY < 0x0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"margin-top:5px;width:100%;height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\"\n    style=\"margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;\" />\n    <input type=\"button\" value=\"SKINLAB\" onclick=\"window.location.href='https://wormworld.io/skinlab/'\"\n    style=\"margin-top:5px;width:100%;height: 35px;\" />\n    </div>");
      var _0x51fa9c = $("#idReplaceSkin");
      var _0xd787bd = function () {
        var _0x4c4d41 = _0x2b80f8(_0x49536e().mark(function _0x4169cb(_0x2d4206, _0x30de01) {
          return _0x49536e().wrap(function _0xfbd08a(_0x36141a) {
            while (0x1) {
              switch (_0x36141a.prev = _0x36141a.next) {
                case 0x0:
                  if (!_0x30de01) {
                    _0x36141a.next = 0x2;
                    break;
                  }
                  return _0x36141a.abrupt("return");
                case 0x2:
                  if (!_0x2d4206) {
                    _0x2d4206 = _0x1f32cc.u.wi;
                  }
                  console.log(_0x2d4206);
                  bbs.userId = _0x2d4206.userId;
                  _0x36141a.next = 0x7;
                  return fetch(URLSERV_WORMWORLD + "/load-page", {
                    'headers': {
                      'Content-Type': "application/json",
                      'x-access-token': bbs.tk
                    },
                    'method': "POST",
                    'body': JSON.stringify(_0x2d4206)
                  }).then(function (_0x22c74e) {
                    _0x22c74e.text().then(function (_0x5c26c4) {
                      $('.description-text').html(_0x5c26c4);
                      if (_0x2d4206.type === "error") {
                        $(".description-text").html(_0x2d4206.msg);
                      }
                    });
                  })["catch"](function () {
                    $('.description-text').html("Problema de conexão.");
                  });
                case 0x7:
                  _0x36141a.next = 0x9;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    'headers': {
                      'Content-Type': 'application/json',
                      'x-access-token': bbs.tk
                    },
                    'method': "POST",
                    'body': JSON.stringify({
                      'userId': bbs.userId
                    })
                  }).then(function (_0x28d833) {
                    _0x28d833.text().then(function (_0x1550b1) {
                      $("#wwc-set-view").html(_0x1550b1);
                      $('#mm-wwc').click(function (_0x2f677c) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $('#backgroundArena').change(function () {
                        var _0x5a2602 = $(this).val();
                        bbs.background = _0x5a2602;
                        bbs.backgroundUri = null;
                        _0x1f32cc.xe._g = _0x167f4e.bgg(_0x5a2602);
                        alert("Background changed!");
                        location.reload();
                      });
                      var _0x473964 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (_0x473964) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var _0xd03aa1 = $("#inputReplaceSkin").val();
                        _0x473964 = _wwc.isNumberValid(_0xd03aa1);
                        bbs.idReplaceSkin = _0x473964 ? _0xd03aa1 : 0x21;
                      }
                      if (!bbs.joystick) {
                        $('#joystick_checked').val(true);
                        $('#joystick_color').val("red");
                        $("#joystick_mode").val("dynamic");
                        $('#joystick_position').val('L');
                        $("#joystick_size").val(0x64);
                        $("#joystick_pxy").val(0x64);
                      } else {
                        $("#joystick_checked").prop("checked", bbs.joystick.checked);
                        $('#joystick_color').val(bbs.joystick.color);
                        $("#joystick_mode").val(bbs.joystick.mode);
                        $('#joystick_position').val(bbs.joystick.positionMode);
                        $("#joystick_size").val(bbs.joystick.size);
                        $("#joystick_pxy").val(bbs.joystick.pxy);
                      }
                    });
                  });
                case 0x9:
                case 'end':
                  return _0x36141a.stop();
              }
            }
          }, _0x4169cb);
        }));
        return function _0x6c76f(_0x37e3fe, _0x43c0bb) {
          return _0x4c4d41.apply(this, arguments);
        };
      }();
      var _0x1bc4f7 = function _0x2f4366(_0x542c6d) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            _0x542c6d.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            _0x542c6d.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            _0x542c6d.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            _0x542c6d.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            _0x542c6d.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var _0x310814 = function () {
        var _0x3a17a2 = _0x2b80f8(_0x49536e().mark(function _0x2038b8(_0x215968, _0x483f61) {
          var _0x50aada;
          var _0x28c997;
          var _0xedb777;
          var _0x5f5950;
          var _0x104c5d;
          return _0x49536e().wrap(function _0x4b95a3(_0x56a150) {
            while (0x1) {
              switch (_0x56a150.prev = _0x56a150.next) {
                case 0x0:
                  $("#mm-params-nickname").prop("maxlength", 0x12);
                  _0x56a150.next = 0x3;
                  return fetch(URLSERV_WORMWORLD + "/register", {
                    'headers': {
                      'Content-Type': "application/json",
                      'x-access-token': bbs.tk,
                      'x-wuid': bbs.wuid,
                      'x-uid': 0x2
                    },
                    'method': "POST",
                    'body': JSON.stringify(_0x215968)
                  }).then(function () {
                    var _0x4f1b2a = _0x2b80f8(_0x49536e().mark(function _0x439217(_0x37a051) {
                      return _0x49536e().wrap(function _0x15e51e(_0x21fc4b) {
                        while (0x1) {
                          switch (_0x21fc4b.prev = _0x21fc4b.next) {
                            case 0x0:
                              _0x21fc4b.next = 0x2;
                              return _0x37a051.json();
                            case 0x2:
                              return _0x21fc4b.abrupt('return', _0x21fc4b.sent);
                            case 0x3:
                            case "end":
                              return _0x21fc4b.stop();
                          }
                        }
                      }, _0x439217);
                    }));
                    return function (_0xa9073b) {
                      return _0x4f1b2a.apply(this, arguments);
                    };
                  }())["catch"](function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 0x3:
                  _0x50aada = _0x56a150.sent;
                  if (!_0x50aada) {
                    _0x50aada = {};
                    _0x50aada.tk = 0x1;
                  }
                  bbs.tk = _0x50aada.tk;
                  bbs.x1 = _0x50aada.x1;
                  _0x2f539c = _0x50aada.customer;
                  _0x215968.propertyList = _0x50aada.propertyList;
                  _0x483f61(_0x215968);
                  _0xd787bd(_0x50aada);
                  _wwc._anApp = _0x1f32cc;
                  _wwc._tx = function (_0x57edc5) {
                    Object.keys(_0x57edc5).forEach(function (_0x43a736) {
                      if (_0x57edc5[_0x43a736].Yi) {
                        _0x57edc5[_0x43a736].fj.nh.Cc.xc.width = _0x57edc5[_0x43a736].fj.nh.Cc.xc.width + 0x2;
                        _0x57edc5[_0x43a736].fj.nh.Cc.xc.height = _0x57edc5[_0x43a736].fj.nh.Cc.xc.height + 0x2;
                      }
                    });
                  };
                  _wwc.Zp = _0x1f32cc.dh.Zp;
                  _0x1f32cc.dh.Dq = function (_0x51fa5e, _0x195a44) {
                    var _0x22bb1e = arguments.length > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0x0;
                    console.log(bbs.nickname);
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        'headers': {
                          'Content-Type': "application/json",
                          'x-access-token': bbs.tk,
                          'x-uid': 0x2
                        },
                        'method': "POST",
                        'body': JSON.stringify({
                          'userId': _0x1f32cc.Ij.Rk.userId,
                          'nickname': bbs.nickname,
                          'code': bbs.code,
                          'teamRoom': _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var _0x24efac = _0x2b80f8(_0x49536e().mark(function _0x320000(_0x391419) {
                          var _0x474e6d;
                          var _0x532b5e;
                          return _0x49536e().wrap(function _0x349f4f(_0x5dee73) {
                            while (0x1) {
                              switch (_0x5dee73.prev = _0x5dee73.next) {
                                case 0x0:
                                  _0x5dee73.next = 0x2;
                                  return _0x391419.json();
                                case 0x2:
                                  _0x474e6d = _0x5dee73.sent;
                                  _0x532b5e = _0x1f32cc.dh;
                                  if (!_0x474e6d.connected) {
                                    _0x5dee73.next = 0x8;
                                    break;
                                  }
                                  alert("Warning: Unauthorized action detected. It appears you've used a cheat for unintended purposes. This behavior is against the rules and may result in penalties or account suspension.");
                                  _0x532b5e.Cq();
                                  return _0x5dee73.abrupt("return");
                                case 0x8:
                                  _0x532b5e.mq = new WebSocket(_0x51fa5e);
                                  _0x532b5e.mq.binaryType = 'arraybuffer';
                                  _0x37ea2c = _wwc.ismobile ? 1.25 : 0x1;
                                  bbs.start = new Date();
                                  bbs.con = _0x51fa5e;
                                  _0x20b0f8 = {};
                                  _0x167f4e.setIntervalRun = setInterval(function () {
                                    _0x167f4e.ps3();
                                  }, 0x28);
                                  _0x532b5e.mq.onopen = function () {
                                    _0x82562f();
                                    _wwc.fnSetCounts("open");
                                    _0x195a44();
                                  };
                                  _0x532b5e.mq.onclose = function () {
                                    _0x5bfe63();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0x167f4e.setIntervalRun);
                                    _0x167f4e.loadBg = false;
                                    bbs.start = 0x0;
                                  };
                                  _0x532b5e.mq.onerror = function (_0x1e580d) {
                                    _0x5bfe63();
                                    _wwc.fnSetCounts('close');
                                    _wwc.stopGame();
                                    clearInterval(_0x167f4e.setIntervalRun);
                                    _0x167f4e.loadBg = false;
                                    bbs.start = 0x0;
                                    if (_0x22bb1e > 0x4) {
                                      _0x532b5e.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x22bb1e++;
                                        console.log("Reconnect server");
                                        _0x1f32cc.dh.Dq(bbs.con, _0x195a44, _0x22bb1e);
                                      }, 0x7d0);
                                    }
                                  };
                                  _0x532b5e.mq.onmessage = function (_0x187b0b) {
                                    _0x532b5e.Kp.Ph(_0x187b0b.data);
                                  };
                                case 0x13:
                                case "end":
                                  return _0x5dee73.stop();
                              }
                            }
                          }, _0x320000);
                        }));
                        return function (_0x3e9056) {
                          return _0x24efac.apply(this, arguments);
                        };
                      }());
                    } catch (_0x1738eb) {
                      console.log(_0x1738eb);
                      i.Cq();
                    }
                  };
                  _0x1f32cc.dh.Kp.Yh = function (_0x343113, _0x1bd753) {
                    _0x5bfe63();
                    this.dh.Oi();
                  };
                  _0x1f32cc.og.af.ng.Ug.Uf = function (_0x3bce48) {
                    var _0x39ea76 = function () {
                      return _0x167f4e.$F.M(_0x167f4e.POGL.Sprite, function () {
                        _0x167f4e.POGL.Sprite.call(this);
                        this.sh = 0x0;
                      });
                    }();
                    for (var _0x2289eb in this.rh) if (!(null != _0x3bce48[_0x2289eb] && _0x3bce48[_0x2289eb].hd)) {
                      _0x167f4e.$F.U(this.rh[_0x2289eb]);
                      delete this.rh[_0x2289eb];
                    }
                    var _0x1f775c = 0x0;
                    var _0x3f35cf = 0x1;
                    if (bbs.display.custom) {
                      _0x3f35cf = window.innerWidth;
                    }
                    for (var _0x539a6a in _0x3bce48) {
                      var _0x35b59a = _0x3bce48[_0x539a6a];
                      if (_0x35b59a.hd) {
                        var _0x57d663 = this.rh[_0x539a6a];
                        if (!_0x57d663) {
                          var _0x158b6f = _0x1f32cc.Lc.Ub().pb(_0x35b59a.nd).ub;
                          _0x57d663 = new _0x39ea76();
                          _0x57d663.texture = _0x158b6f.Ea();
                          _0x57d663.width = 0x28;
                          _0x57d663.height = 0x28;
                          this.rh[_0x539a6a] = _0x57d663;
                          this.addChild(_0x57d663);
                        }
                        _0x3b679f.setPtc(this, _0x539a6a, _0x35b59a.od);
                        _0x57d663.sh = _0x35b59a.od;
                        _0x57d663.position.x = _0x1f775c + (bbs.display.custom ? bbs.display.clock.x * _0x3f35cf : 0x0);
                        _0x57d663.position.y = bbs.display.custom ? bbs.display.clock.y : _0x57d663.position.y;
                        _0x1f775c += 0x28;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    _0x1f32cc.og.af.ng.Tg.addChild(_0x3b679f.clock);
                  }
                  _0x1f32cc.og.af.ng.Tg.addChild(_0x3b679f.containerCountInfo);
                  _0x1f32cc.og.af.ng.Tg.addChild(_0x3b679f.containerHstop);
                  _0x3b679f.containerHstop.alpha = bbs.showTophs ? 0x1 : 0x0;
                  _0x1f32cc.og.af.ng.Tg.addChild(_0x3b679f.containerHsRec);
                  _0x3b679f.containerHsRec.alpha = bbs.showRechs ? 0x1 : 0x0;
                  _0x1f32cc.og.af.ng.Tg.addChild(_0x3b679f.labelRoom);
                  _0x3b679f.ptc = {};
                  _0x28c997 = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
                  for (_0xedb777 = 0x0; _0xedb777 < _0x28c997.length; _0xedb777++) {
                    _0x5f5950 = "clock_ad" + _0xedb777;
                    _0x3b679f.ptc[_0x5f5950] = new PIXI.Text(_0x28c997[_0xedb777], _0x3b679f.fontStyle["tfc" + _0xedb777]);
                    _0x3b679f.ptc[_0x5f5950].y = 0x3d;
                  }
                  _0x3b679f.setPtc = function (_0x4cb909, _0x58603d, _0x3b92cf) {
                    var _0x2d2c00 = _0x28c997[_0x58603d] - parseInt((0.99 == _0x3b92cf ? 0x1 : _0x3b92cf) * _0x28c997[_0x58603d] / 0x1);
                    var _0x21a161 = "clock_ad" + _0x58603d;
                    _0x4cb909.rh[_0x58603d].addChild(_0x3b679f.ptc[_0x21a161]);
                    if (_0x3b679f.ptc[_0x21a161]) {
                      _0x3b679f.ptc[_0x21a161].x = _0x2d2c00 >= 0x64 ? 0xb : _0x2d2c00 >= 0xa ? 0x12 : 0x1a;
                      _0x3b679f.ptc[_0x21a161].text = _0x2d2c00;
                    }
                  };
                  _0x104c5d = _0x1f32cc.og.af.ng.Eb;
                  mbf.onmovepoint = function (_0x546904) {
                    if (_0x546904.pointerType === 'touch' && !_0x546904.isPrimary) {
                      return;
                    }
                    if (undefined !== _0x546904.clientX) {
                      _0x1f32cc.og.af.Bn = Math.atan2(_0x546904.clientY - 0.5 * _0x104c5d.offsetHeight, _0x546904.clientX - 0.5 * _0x104c5d.offsetWidth);
                    } else {
                      _0x1f32cc.og.af.Bn = Math.atan2(_0x546904.pageY - 0.5 * _0x104c5d.offsetHeight, _0x546904.pageX - 0.5 * _0x104c5d.offsetWidth);
                    }
                  };
                  mbf.onRun = function (_0x293a23) {
                    if (_0x293a23 && _0x293a23.pointerType === "touch") {
                      return;
                    }
                    _0x1f32cc.og.af.An = true;
                  };
                  mbf.onStop = function (_0x1fda84) {
                    if (_0x1fda84 && _0x1fda84.pointerType === "touch") {
                      return;
                    }
                    _0x1f32cc.og.af.An = false;
                  };
                  _0x104c5d.addEventListener("pointermove", mbf.onmovepoint, true);
                  _0x104c5d.addEventListener("pointerdown", mbf.onRun, true);
                  _0x104c5d.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    _0x104c5d.addEventListener("touchstart", function (_0x2d58cf) {
                      if (_0x2d58cf = _0x2d58cf || window.event) {
                        _0x1f32cc.og.af.An = _0x2d58cf.touches.length >= 0x2;
                      }
                      _0x2d58cf.preventDefault();
                    }, true);
                    _0x104c5d.addEventListener("touchend", function (_0x399dfd) {
                      if (_0x399dfd = _0x399dfd || window.event) {
                        _0x1f32cc.og.af.An = _0x399dfd.touches.length >= 0x2;
                      }
                    }, true);
                  }
                case 0x24:
                case 'end':
                  return _0x56a150.stop();
              }
            }
          }, _0x2038b8);
        }));
        return function _0x57840f(_0x144224, _0x41178a) {
          return _0x3a17a2.apply(this, arguments);
        };
      }();
      function _0x1f68d4() {
        var _0x36f4a2 = document.createElement("div");
        _0x36f4a2.style.position = 'fixed';
        _0x36f4a2.style.top = '0';
        _0x36f4a2.style.height = '100%';
        _0x36f4a2.style.width = "100%";
        _0x36f4a2.style.zIndex = "1000";
        _0x36f4a2.id = 'zone_joystick';
        document.body.appendChild(_0x36f4a2);
      }
      function _0x250b17() {
        var _0x4eeff6 = document.getElementById("zone_joystick");
        if (_0x4eeff6) {
          _0x4eeff6.remove();
        }
      }
      var _0x5bfe63 = function _0x29c70f() {
        if (_0x10b7e5) {
          $("#wwc-mobile-box").remove();
          $('#wwc-mobile-box-slider').remove();
          _0x10b7e5.destroy();
        }
        _0x250b17();
      };
      var _0x82562f = function _0x3524a0() {
        try {
          var _0x141b38 = function _0x470585() {
            _0x10b7e5.on("start end", function (_0x2416b8, _0x346cfa) {}).on("move", function (_0x140156, _0x3e7f91) {
              var _0x429233 = _0x3e7f91.angle.radian <= Math.PI ? -0x1 * _0x3e7f91.angle.radian : Math.PI - (_0x3e7f91.angle.radian - Math.PI);
              _0x1f32cc.og.af.Bn = _0x429233;
            });
          };
          var _0x17228d = function _0x414187() {
            if (_0x10b7e5) {
              _0x10b7e5.destroy();
            }
            var _0x349a3d = _0x3e38e6({}, bbs.joystick);
            var _0x46b08c = {};
            if (bbs.customJoystick) {
              _0x1f68d4();
              var _0x1e3be4 = _0x1082dc(bbs.customJoystick.buttons);
              var _0x403d92;
              try {
                for (_0x1e3be4.s(); !(_0x403d92 = _0x1e3be4.n()).done;) {
                  var _0x42294c = _0x403d92.value;
                  var _0x5ba62d = document.createElement('div');
                  if (_0x42294c.svg) {
                    _0x5ba62d.innerHTML = _0x42294c.svg;
                  } else {
                    _0x5ba62d.style.color = _0x42294c.color || "#FFF";
                    _0x5ba62d.style.backgroundColor = _0x42294c.backgroundColor || "#000";
                    _0x5ba62d.style.borderRadius = '10px';
                    _0x5ba62d.style.textAlign = "center";
                    _0x5ba62d.style.fontWeight = "bold";
                    _0x5ba62d.style.padding = "5px";
                    _0x5ba62d.style.border = "1px solid #f00";
                    _0x5ba62d.style.fontSize = _0x42294c.size || "25px";
                    _0x5ba62d.innerHTML = _0x42294c.value;
                  }
                  _0x5ba62d.style.position = "absolute";
                  _0x5ba62d.style.top = _0x42294c.top;
                  _0x5ba62d.style.left = _0x42294c.left;
                  _0x5ba62d.style.display = _0x42294c.display;
                  _0x5ba62d.style.cursor = "pointer";
                  _0x5ba62d.id = 'cbjt_' + _0x42294c.value;
                  _0x5ba62d.dataset.size = _0x42294c.size;
                  _0x5ba62d.dataset.color = _0x42294c.color || "#FFF";
                  _0x5ba62d.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(_0x5ba62d);
                  if (_0x42294c.display !== "none") {
                    if (_0x42294c.value === "ZoomIn") {
                      _0x5ba62d.addEventListener("click", function (_0x4f3143) {
                        mbf.mbfass2();
                      });
                    }
                    if (_0x42294c.value === "ZoomOut") {
                      _0x5ba62d.addEventListener('click', function (_0x5ee4ed) {
                        mbf.mbfass1();
                      });
                    }
                    if (_0x42294c.value === "Accelerator") {
                      _0x5ba62d.addEventListener('pointerdown', function (_0xd895c2) {
                        mbf.onRun();
                      });
                      _0x5ba62d.addEventListener('pointerup', function (_0x174e46) {
                        mbf.onStop();
                      });
                    }
                    if (_0x42294c.value === "Respawn") {
                      _0x5ba62d.addEventListener('click', function (_0x505deb) {
                        respawnFn();
                      });
                    }
                    if (_0x42294c.value === "Rotate") {
                      _0x5ba62d.addEventListener("click", function (_0x3230a0) {
                        _0x2b627c(_0x530498 ? 0x0 : 0x8);
                      });
                    }
                    if (_0x42294c.value === "Snail") {
                      _0x5ba62d.addEventListener('click', function (_0x401532) {
                        _0x2b627c(_0x530498 ? 0x0 : 0x7);
                      });
                    }
                    if (_0x42294c.value === "Lobby") {
                      _0x5ba62d.addEventListener("click", function (_0x44eefb) {
                        lobbyFn();
                      });
                    }
                    if (_0x42294c.value === "Search") {
                      _0x5ba62d.addEventListener("click", function (_0x495a96) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  _0x46b08c[_0x42294c.value] = _0x5ba62d;
                }
              } catch (_0x1932f5) {
                _0x1e3be4.e(_0x1932f5);
              } finally {
                _0x1e3be4.f();
              }
              _0x46b08c.Directional;
              var _0x15d76d = _0x46b08c.Directional.dataset.size / 0x2;
              var _0x14aeed = parseInt(_0x46b08c.Directional.style.left.replace('px', '')) + _0x15d76d;
              var _0xf40957 = parseInt(_0x46b08c.Directional.style.top.replace('px', '')) + _0x15d76d;
              _0x349a3d = {
                'zone': _0x46b08c.Directional,
                'mode': "static",
                'position': {
                  'left': "50%",
                  'top': '50%'
                },
                'dumbBox': {
                  'left': _0x14aeed,
                  'top': _0xf40957
                },
                'color': 'transparent',
                'size': Math.floor(_0x46b08c.Directional.dataset.size / 1.6)
              };
            } else {
              _0x349a3d.zone = document.getElementById("game-view");
              if (_0x349a3d.mode === 'static') {
                delete _0x349a3d.zone;
              }
            }
            _0x10b7e5 = nipplejs.create(_0x349a3d);
            _0x141b38();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", _0x46b08c.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var _0x629508 = '';
            var _0x1381ed = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (_0x297257) {
              _0x629508 = _0x629508 + (bbs.configJoystick.buttons[_0x297257].active ? "<button onclick=\"".concat(bbs.configJoystick.buttons[_0x297257].action, "\" id=\"mbf_").concat(_0x297257, "\">").concat(bbs.configJoystick.buttons[_0x297257][_0x1381ed], "</button>") : '');
            });
            var _0x105118 = "\n        <style>\n          #wwc-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n          }\n          #wwc-mobile-buttons {\n            position: relative;margin: 0 auto;width: 265px;\n            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;\n          }\n          #wwc-mobile-buttons > button {\n            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;\n            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;\n            align-items: center;\n          }\n          .game-slider-container-02 {\n            position: fixed;z-index: 1000;bottom: 50px;right: 45px;\n          }\n          .game-slider-container-02 input[type=range][orient=vertical] {\n              writing-mode: vertical-lr;\n              direction: rtl;\n              appearance: slider-vertical;\n              width: 16px;\n              vertical-align: bottom;\n          }\n        </style>\n        <div id=\"wwc-mobile-box\"><div id=\"wwc-mobile-buttons\" style=\"\">".concat(_0x629508, '</div></div>');
            _0x105118 = _0x105118 + (bbs.configJoystick.typeCurrent === "btn" ? '' : "<div id=\"wwc-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"mbf.mbfass9(this)\" type=\"range\" min=\"0.25\" max=\"".concat(_0x2f539c ? 0xc : 0x2, "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>"));
            $("body").append(_0x105118);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log('customJoystick');
            }
            _0x17228d();
          }
        } catch (_0x2a2d74) {
          console.error(_0x2a2d74);
        }
      };
      var _0x21660c = localStorage.getItem("custom_wormworld_wear");
      var _0x250fe1 = localStorage.getItem("custom_wormworld_skin");
      var _0x19fbb6 = localStorage.getItem("custom_wormworld_badLang");
      var _0x4854c3 = localStorage.getItem("custom_wormworld_background");
      var _0x4e5020 = localStorage.getItem("custom_wormworld_audio");
      var _0x1752b4 = [" XТ_", "WORMXТ_(d{})", "_xt", 'wormxt', "worm_xt", "timmap"];
      if (_0x19fbb6) {
        _0x1752b4 = _0x1752b4.concat(JSON.parse(_0x19fbb6));
      }
      window.badLanguageRegEx = (_0x1752b4 || []).join('|');
      var _0x4dae64 = function _0x49cbf9(_0x13e077) {
        _0x13e077 = _0x13e077.replace(new RegExp(badLanguageRegEx, "gim"), ':');
        _0x13e077 = _0x13e077.replace(/\uFDFD/g, '');
        _0x13e077 = _0x13e077.substring(0x0, 0x12);
        return _0x13e077;
      };
      _wwc.customConfig = function (_0x42b3f8) {
        var _0x1794ed = function _0xa3d782(_0x34d891) {
          var _0x912c75 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x0;
          var _0xe0e5e0 = _0x34d891.id.toString();
          var _0x2b38d7 = _0x34d891.type.toString().toLowerCase() + "VariantArray";
          var _0x3bfc6d = _0x34d891.type.toString().toLowerCase() + "Dict";
          _0x42b3f8.textureDict[_0xe0e5e0] = {
            'custom': true,
            're1ativePath': _0x34d891.file,
            'reference': 0x3e8 + _0x912c75
          };
          _0x42b3f8.regionDict[_0xe0e5e0] = {
            'texture': _0xe0e5e0,
            'x': _0x34d891.x,
            'y': _0x34d891.y,
            'w': _0x34d891.w,
            'h': _0x34d891.h,
            'px': _0x34d891.px,
            'py': _0x34d891.py,
            'pw': 0x80,
            'ph': 0x80
          };
          _0x42b3f8[_0x3bfc6d][0x3e8 + _0x912c75] = {
            'base': [{
              'region': _0xe0e5e0
            }],
            'guest': false,
            'nonbuyable': false,
            'price': 0x0,
            'priceBefore': 0x0,
            'id': _0xe0e5e0
          };
          _0x42b3f8[_0x2b38d7].push([0x3e8 + _0x912c75]);
        };
        if (_0x21660c) {
          _0x21660c = JSON.parse(_0x21660c);
          if (_0x21660c.wear) {
            if (_0x21660c.version == '2') {
              _0x21660c.data.forEach(function (_0xb44c3f, _0x51d729) {
                _0x1794ed(_0xb44c3f, _0x51d729);
              });
            } else {
              for (var _0x4efc06 in _0x21660c.wear.textureDict) {
                _0x42b3f8.textureDict[_0x4efc06] = {};
                _0x42b3f8.textureDict[_0x4efc06].h1 = true;
                _0x42b3f8.textureDict[_0x4efc06].h3 = true;
                _0x42b3f8.textureDict[_0x4efc06].re1ativePath = _0x21660c.wear.textureDict[_0x4efc06].file;
              }
              for (var _0x3b13a1 in _0x21660c.wear.regionDict) {
                _0x42b3f8.regionDict[_0x3b13a1] = _0x21660c.wear.regionDict[_0x3b13a1];
                var _0x166770 = _0x42b3f8.regionDict[_0x3b13a1];
                _0x42b3f8[_0x166770.list][_0x166770.obj.id.toString()] = _0x166770.obj;
                _0x42b3f8[_0x166770.listVariant].push([_0x166770.obj.id.toString()]);
              }
            }
          }
        }
        if (_0x250fe1) {
          _0x250fe1 = JSON.parse(_0x250fe1);
          if (_0x250fe1.version_skin == '2') {
            var _0x570f92 = "SKIN_" + _0x250fe1.id + '___Z';
            var _0xcd80c5 = {
              'id': _0x570f92,
              'regionDict': {},
              'textureDict': {},
              'skinArrayDict': [],
              'skinGroupArrayDict': [{
                'id': _0x570f92,
                'name': {
                  'en': "Custom V2"
                },
                'list': []
              }],
              'version_skin': 0x3
            };
            var _0x33dd3e = {
              'id': _0x570f92,
              'guest': false,
              'price': 0x0,
              'priceBefore': 0x0,
              'nonbuyable': false,
              'prime': "c_white",
              'glow': _0x250fe1.glow,
              'base': []
            };
            for (var _0x275015 = _0x250fe1.len - 0x1; 0x0 <= _0x275015; _0x275015--) {
              _0xcd80c5.regionDict[''.concat(_0x570f92, '_').concat(_0x275015)] = {
                'texture': _0x570f92,
                'h': _0x250fe1.cos - 0x5,
                'w': _0x250fe1.cos - 0x5,
                'x': _0x250fe1.cos * (_0x275015 || 0x0),
                'y': 0x0
              };
              _0x33dd3e.base.push(''.concat(_0x570f92, '_').concat(_0x275015));
            }
            _0xcd80c5.textureDict[_0x570f92] = {
              'custom': true,
              're1ativePath': _0x250fe1.file || _0x250fe1.td.file,
              'h1': true,
              'h4': true
            };
            _0xcd80c5.skinArrayDict.push(_0x33dd3e);
            _0xcd80c5.skinGroupArrayDict[0x0].list.push(_0x570f92);
            if (!_0x250fe1.textureDict[_0x570f92]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (_0x250fe1.version_skin == '3') {
            for (var _0x65ae3a in _0x250fe1) {
              var _0x32916a = _0x363293(_0x250fe1[_0x65ae3a]);
              if (_0x32916a === 'object') {
                _0x42b3f8[_0x65ae3a] = Array.isArray(_0x250fe1[_0x65ae3a]) ? [].concat(_0x4f5c48(_0x42b3f8[_0x65ae3a]) || _0x44daff(_0x42b3f8[_0x65ae3a]) || _0x41561b(_0x42b3f8[_0x65ae3a]) || _0x1ccb21(), _0x4f5c48(_0x250fe1[_0x65ae3a]) || _0x44daff(_0x250fe1[_0x65ae3a]) || _0x41561b(_0x250fe1[_0x65ae3a]) || _0x1ccb21()) : _0x3e38e6(_0x3e38e6({}, _0x42b3f8[_0x65ae3a]), _0x250fe1[_0x65ae3a]);
              }
            }
            return;
          }
          var _0x1eb07b = _0x250fe1.skin.id;
          _0x250fe1.skin.id = _0x1eb07b.toString();
          for (var _0x12fadd in _0x250fe1.textureDict) {
            _0x42b3f8.textureDict[_0x12fadd] = _0x250fe1.textureDict[_0x12fadd];
            _0x42b3f8.textureDict[_0x12fadd].re1ativePath = _0x250fe1.textureDict[_0x12fadd].file;
            _0x42b3f8.textureDict[_0x12fadd].h1 = true;
            _0x42b3f8.textureDict[_0x12fadd].h4 = true;
          }
          for (var _0x467be7 in _0x250fe1.regionDict) {
            _0x42b3f8.regionDict[_0x467be7] = _0x250fe1.regionDict[_0x467be7];
          }
          _0x42b3f8.skinGroupArrayDict.push({
            'id': 'custom',
            'name': {
              'en': 'Custom'
            },
            'list': [_0x1eb07b]
          });
          _0x42b3f8.skinArrayDict.push(_0x250fe1.skin);
        }
      };
      document.getElementById('btnFullScreen').addEventListener("click", function () {
        var _0x348085 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (_0x348085 && !_wwc.fullscreen) {
          try {
            _wwc.fullscreen = true;
            _0x348085.call(document.documentElement);
          } catch (_0x4b5b87) {}
        } else {
          _wwc.fullscreen = false;
          document.exitFullscreen();
        }
      });
      function _0x32dfdf() {
        var _0x311082 = false;
        (function (_0x4772b7) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x4772b7) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x4772b7.substr(0x0, 0x4))) {
            _0x311082 = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return _0x311082;
      }
      var _0x3b679f = {
        'fontStyle': {
          'amarelo': new PIXI.TextStyle({
            'align': "center",
            'fill': "#FFD500",
            'fontSize': 0xa,
            'lineJoin': "round",
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': "bold"
          }),
          'branco': new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0xa,
            'lineJoin': "round",
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': "bold"
          }),
          'hsBranco': new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x9,
            'lineJoin': "round",
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': "bold"
          }),
          'hsBrancoRight': new PIXI.TextStyle(_0x2609b9({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x9,
            'lineJoin': 'round',
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': 'bold'
          }, "align", "right")),
          'brancoXzoom': new PIXI.TextStyle({
            'align': 'center',
            'fill': "#fff",
            'fontSize': 0xc,
            'lineJoin': 'round',
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': "bold"
          }),
          'verdeXzoom': new PIXI.TextStyle({
            'align': "center",
            'fill': "#0ff555",
            'fontSize': 0x9,
            'lineJoin': 'round',
            'whiteSpace': "normal",
            'wordWrap': true,
            'fontWeight': "bold"
          })
        }
      };
      var _0x232fed = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", '#ff0999'];
      for (var _0x4df961 = 0x0; _0x4df961 < _0x232fed.length; _0x4df961++) {
        var _0x3327ab = _0x232fed[_0x4df961];
        _0x3b679f.fontStyle["tfc" + _0x4df961] = new PIXI.TextStyle({
          'align': 'center',
          'fill': _0x3327ab,
          'fontSize': 0x19,
          'lineJoin': "round",
          'whiteSpace': "normal",
          'wordWrap': true,
          'fontWeight': 'bold'
        });
      }
      _0x3b679f.zoom = new PIXI.Text('x1', _0x3b679f.fontStyle.brancoXzoom);
      _0x3b679f.zoom.x = 0x52;
      _0x3b679f.zoom.y = 0x69;
      _0x3b679f.conteinerTeam = new PIXI.Container();
      _0x3b679f.conteinerTeam.id = "team";
      _0x3b679f.friends = new PIXI.Container();
      _0x3b679f.friends.background = new PIXI.Graphics();
      _0x3b679f.friends.background.beginFill(0x0, 0.6);
      _0x3b679f.friends.background.drawRect(0x0, 0x0, 0x64, 0x82);
      _0x3b679f.friends.background.endFill();
      _0x3b679f.friends.addChild(_0x3b679f.friends.background);
      _0x3b679f.friends.position.x = -0xa;
      _0x3b679f.friends.position.y = 0x13b;
      _0x3b679f.friends.alpha = 0x0;
      _0x3b679f.label_hs = new PIXI.Text('HS', _0x3b679f.fontStyle.amarelo);
      _0x3b679f.label_hs.x = 0xf;
      _0x3b679f.label_hs.y = 0x6b;
      _0x3b679f.hs = new PIXI.Text('0', _0x3b679f.fontStyle.amarelo);
      _0x3b679f.hs.x = 0x14;
      _0x3b679f.hs.y = 0x77;
      _0x3b679f.hsTotal = new PIXI.Text('0', _0x3b679f.fontStyle.branco);
      _0x3b679f.hsTotal.x = 0x14;
      _0x3b679f.hsTotal.y = 0x84;
      _0x3b679f.label_kill = new PIXI.Text('KILL', _0x3b679f.fontStyle.amarelo);
      _0x3b679f.label_kill.x = 0x32;
      _0x3b679f.label_kill.y = 0x6b;
      _0x3b679f.kill = new PIXI.Text('0', _0x3b679f.fontStyle.amarelo);
      _0x3b679f.kill.x = 0x3c;
      _0x3b679f.kill.y = 0x78;
      _0x3b679f.killTotal = new PIXI.Text('0', _0x3b679f.fontStyle.branco);
      _0x3b679f.killTotal.x = 0x3c;
      _0x3b679f.killTotal.y = 0x85;
      _0x3b679f.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
      _0x3b679f.clock.width = 0x64;
      _0x3b679f.clock.height = 0x64;
      _0x3b679f.clock.x = -0x32;
      _0x3b679f.clock.y = -0x32;
      _0x3b679f.containerHsRec = new PIXI.Container();
      _0x3b679f.containerHsRec.x = -0x37;
      _0x3b679f.containerHsRec.y = 0xc3;
      _0x3b679f.containerHstop = new PIXI.Container();
      _0x3b679f.containerHstop.x = -0x37;
      _0x3b679f.containerHstop.y = 0x5f;
      _0x3b679f.containerHsIndex = new PIXI.Container();
      _0x3b679f.containerHsNames = new PIXI.Container();
      _0x3b679f.containerHsValue = new PIXI.Container();
      _0x3b679f.top1rec = '🥇';
      _0x3b679f.top2rec = '🥈';
      _0x3b679f.top3rec = '🥉';
      _0x3b679f.titleRec = new PIXI.Text("Records (kb 0)", _0x3b679f.fontStyle.amarelo);
      _0x3b679f.titleRec.y = -0x5;
      for (var _0x1867f1 = 0x0; _0x1867f1 < 0x3; _0x1867f1++) {
        var _0x2ef6e2 = _0x1867f1 + 0x1;
        var _0x2ad1b8 = new PIXI.Text(_0x3b679f["top" + _0x2ef6e2 + "rec"], _0x3b679f.fontStyle.hsBrancoRight);
        _0x2ad1b8.x = _0x1867f1 >= 0x9 ? -0x5 : 0x0;
        _0x2ad1b8.y = 0xd * _0x2ef6e2;
        _0x3b679f.containerHsRec.addChild(_0x2ad1b8);
        var _0x10c5a0 = new PIXI.Text('--', _0x3b679f.fontStyle.hsBranco);
        _0x10c5a0.x = 0xf;
        _0x10c5a0.y = 0xd * _0x2ef6e2;
        _0x3b679f.containerHsRec.addChild(_0x10c5a0);
        var _0x3697b6 = new PIXI.Text('-', _0x3b679f.fontStyle.hsBrancoRight);
        _0x3697b6.x = 0x87;
        _0x3697b6.y = 0xd * _0x2ef6e2;
        _0x3b679f.containerHsRec.addChild(_0x3697b6);
      }
      _0x3b679f.containerHsRec.addChild(_0x3b679f.titleRec);
      var _0x5a0d5c = function _0xa45a8d(_0x1ef917, _0x29e3bf) {
        if (_0x29e3bf && _0x29e3bf.length > 0x0) {
          for (var _0x582560 = 0x0; _0x582560 < 0x3; _0x582560++) {
            if (_0x3b679f.containerHsRec.children[_0x582560]) {
              _0x3b679f.containerHsRec.children[_0x582560 * 0x3 + 0x1].text = _0x29e3bf && _0x29e3bf[_0x582560] ? _0x29e3bf[_0x582560].nickname : '--';
            }
            if (_0x3b679f.containerHsRec.children[_0x582560]) {
              _0x3b679f.containerHsRec.children[_0x582560 * 0x3 + 0x2].text = _0x29e3bf && _0x29e3bf[_0x582560] ? _0x29e3bf[_0x582560].score : '--';
            }
          }
        }
        if (_0x1ef917 && _0x1ef917.length > 0x0) {
          for (var _0x2760ca = 0x0; _0x2760ca < 0x6; _0x2760ca++) {
            var _0x5ea9fc = '--';
            var _0x22fde9 = '--';
            if (_0x1ef917 && _0x1ef917[_0x2760ca]) {
              _0x5ea9fc = _0x1ef917[_0x2760ca].nickname ? _0x1ef917[_0x2760ca].nickname.substring(0x0, 0xe) : '--';
              _0x22fde9 = parseInt(_0x1ef917[_0x2760ca].score || 0x0);
            }
            if (_0x3b679f.containerHsNames.children[_0x2760ca]) {
              _0x3b679f.containerHsNames.children[_0x2760ca].text = _0x5ea9fc;
            }
            if (_0x3b679f.containerHsValue.children[_0x2760ca]) {
              _0x3b679f.containerHsValue.children[_0x2760ca].text = _0x22fde9;
            }
          }
        }
      };
      _0x3b679f.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", _0x3b679f.fontStyle.amarelo));
      for (var _0x67e894 = 0x0; _0x67e894 < 0x6; _0x67e894++) {
        var _0x59b6cb = new PIXI.Text(_0x67e894 + 0x1, _0x3b679f.fontStyle.hsBranco);
        _0x59b6cb.x = _0x67e894 >= 0x9 ? -0x5 : 0x0;
        _0x59b6cb.y = 0xd * (_0x67e894 + 0x1);
        _0x3b679f.containerHsIndex.addChild(_0x59b6cb);
        var _0x6f5d1b = new PIXI.Text('..', _0x3b679f.fontStyle.hsBranco);
        _0x6f5d1b.x = 0xa;
        _0x6f5d1b.y = 0xd * (_0x67e894 + 0x1);
        _0x3b679f.containerHsNames.addChild(_0x6f5d1b);
        var _0x342c9a = new PIXI.Text(0x0, _0x3b679f.fontStyle.hsBrancoRight);
        _0x342c9a.x = 0x82;
        _0x342c9a.y = 0xd * (_0x67e894 + 0x1);
        _0x3b679f.containerHsValue.addChild(_0x342c9a);
      }
      _0x3b679f.containerHstop.addChild(_0x3b679f.containerHsIndex);
      _0x3b679f.containerHstop.addChild(_0x3b679f.containerHsNames);
      _0x3b679f.containerHstop.addChild(_0x3b679f.containerHsValue);
      _0x3b679f.containerCountInfo = new PIXI.Container();
      _0x3b679f.containerCountInfo.x = -0x2d;
      _0x3b679f.containerCountInfo.y = -0x34;
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.zoom);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.friends);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.label_hs);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.hs);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.hsTotal);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.label_kill);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.kill);
      _0x3b679f.containerCountInfo.addChild(_0x3b679f.killTotal);
      _0x3b679f.labelRoom = new PIXI.Text('WWC', _0x3b679f.fontStyle.amarelo);
      _0x3b679f.labelRoom.x = -0x32;
      _0x3b679f.labelRoom.y = -0x38;
      _0x3b679f.addRoom = function (_0x23a11c) {
        _0x3b679f.labelRoom.text = _0x23a11c || 'WWC';
      };
      window.addEventListener("keydown", function (_0x253799) {
        if (_0x253799.key == '7') {
          _0x2b627c(_0x530498 ? 0x0 : 0x7);
        }
        if (_0x253799.key == '8') {
          _0x2b627c(_0x530498 ? 0x0 : 0x8);
        }
        if (_0x253799.key === '0' && bbs.showRechs) {
          _0x3b679f.containerHsRec.alpha = !_0x3b679f.containerHsRec.alpha;
        }
        if (_0x253799.key === '9' && bbs.showTophs) {
          _0x3b679f.containerHstop.alpha = !_0x3b679f.containerHstop.alpha;
        }
        if (_0x253799.key === '6' && _0x167f4e.setIntervalRun) {
          _0x470b73 = !_0x470b73;
        }
        if (_0x253799.key === '5' && _0x167f4e.setIntervalRun) {
          respawnFn();
        }
        if (_0x253799.key === '4' && _0x167f4e.setIntervalRun) {
          mbf.mbfass0();
        }
        if (_0x253799.key === '1') {
          mbf.mbf_cambiar();
        }
        if (_0x253799.key === 'x1') {
          _wwcio.update(0x1);
        }
        if (_0x253799.key === 'x2') {
          _wwcio.update(0x2);
        }
        if (_0x253799.key === '<' || _0x253799.key === ',' && _0x167f4e.setIntervalRun) {
          mbf.mbfass1();
        }
        if (_0x253799.key === '>' || _0x253799.key === '.' && _0x167f4e.setIntervalRun) {
          mbf.mbfass2();
        }
        if (_0x253799.key === 'z' || _0x253799.key === 'Z' && _0x167f4e.setIntervalRun) {
          var _0x172034;
          _0x37ea2c = ((_0x172034 = bbs.configZoom) === null || _0x172034 === undefined ? undefined : _0x172034.closeDown) || 0x1;
          _0x3b679f.zoom.text = 'x' + _0x37ea2c;
        }
        if (_0x253799.key === 'c' || _0x253799.key === 'C' && _0x167f4e.setIntervalRun) {
          var _0x147a17;
          _0x3b679f.zoom.text = _0x37ea2c === 0.5 ? 'x2' : 'CLOSE-UP';
          _0x37ea2c = _0x37ea2c === 0.5 ? 0x2 : ((_0x147a17 = bbs.configZoom) === null || _0x147a17 === undefined ? undefined : _0x147a17.closeUp) || 0.25;
        }
      });
      var _0x1f32cc = {
        'Lc': {
          'Gb': {}
        }
      };
      var _0x167f4e = {
        'pm': {},
        'ps': 0x0,
        'ps2': function _0x1dc2ea(_0x16ca1a, _0x2f4b01, _0x546ee7) {
          var _0x5c34a0 = _0x546ee7 ? 0x80 : 0x0;
          var _0x5ba289 = _0x167f4e.$F.N(_0x2f4b01) / _0x167f4e.$V.F * 0x80 & 0x7f;
          var _0x56fde5 = 0xff & (_0x5c34a0 | _0x5ba289);
          if (_0x16ca1a.nq !== _0x56fde5) {
            var _0x30667f = new ArrayBuffer(0x1);
            new DataView(_0x30667f).setInt8(0x0, _0x56fde5);
            _0x16ca1a.Eq(_0x30667f);
            _0x16ca1a.nq = _0x56fde5;
          }
        },
        'ps3': function _0x5e1b8c() {
          _0x1f32cc.dh.xq(_0x1f32cc.og.af.Gn(), _0x1f32cc.og.af.Hn());
        },
        'setIntervalRun': null,
        'loadBg': false,
        'LG': function _0x227569(_0x350335, _0x5d4dfa, _0x464687) {
          _0x350335.Ll('gg', _0x464687.credential, null);
        },
        'Lg': function _0x115cc5(_0x46c1e9) {
          _0x1f32cc.xe._g = _0x167f4e.bgg();
          _wwc.$C = _0x46c1e9;
          return bbs.bgGameWidth > 0x200 ? new _0x46c1e9.WMGBS1() : new _0x46c1e9.WMGBS2();
        },
        'registry': function () {
          var _0x2b238b = _0x2b80f8(_0x49536e().mark(function _0x2b2a9a(_0x2e998a) {
            var _0x320b6b;
            return _0x49536e().wrap(function _0x57f43e(_0x2ec4aa) {
              while (0x1) {
                switch (_0x2ec4aa.prev = _0x2ec4aa.next) {
                  case 0x0:
                    _0x2ec4aa.next = 0x2;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      'method': 'POST',
                      'headers': {
                        'Content-Type': 'application/json'
                      },
                      'body': JSON.stringify(_0x2e998a)
                    }).then(function (_0x53c428) {
                      if (!_0x53c428.ok) {
                        return _0x2e998a;
                      }
                      return _0x53c428.json();
                    });
                  case 0x2:
                    _0x320b6b = _0x2ec4aa.sent;
                    return _0x2ec4aa.abrupt("return", _0x320b6b);
                  case 0x4:
                  case "end":
                    return _0x2ec4aa.stop();
                }
              }
            }, _0x2b2a9a);
          }));
          function _0x4e12c3(_0x2e5b96) {
            return _0x2b238b.apply(this, arguments);
          }
          return _0x4e12c3;
        }()
      };
      _0x167f4e.Vd = function (_0x33ead8, _0x4e3851) {
        _wwc.customConfig(_0x33ead8);
        if (!_0x33ead8) {
          return;
        }
        var _0x67b4ad = this;
        function _0xc48e96(_0x398947) {
          var _0x474185 = _0x4e3851.Id.Ld;
          _0x67b4ad.Rd(_0x474185, _0x4e3851.Od.bc(_0x474185).lc(_0x398947));
        }
        if (this.Fd) {
          return void this.Pd();
        }
        var _0x32c0b5 = [];
        var _0x154816 = new PIXI.Loader();
        for (var _0x477c34 in _0x33ead8.textureDict) {
          if (_0x33ead8.textureDict.hasOwnProperty(_0x477c34)) {
            var _0x30d623 = _0x33ead8.textureDict[_0x477c34];
            var _0x2a749d = _0x30d623.re1ativePath || _0x30d623.relativePath;
            var _0x584017 = _0x30d623.fileSize || 0x64;
            var _0x27f15f = _0x30d623.sha256 || null;
            var _0x34b74a = new _0x4e3851.Wd(_0x477c34, _0x2a749d, _0x584017, _0x27f15f);
            _0x34b74a.h1 = _0x30d623.h1;
            _0x34b74a.h4 = _0x30d623.h4;
            _0x34b74a.skinEvo = _0x30d623.skinEvo;
            _0x34b74a.lines = _0x30d623.lines;
            _0x34b74a.speed = _0x30d623.speed;
            _0x32c0b5.push(_0x34b74a);
            _0x154816.add(_0x477c34, _0x2a749d);
          }
        }
        _0x154816.onProgress.add(function (_0x51818a, _0x3d1bc0) {
          _0xc48e96(_0x51818a.progress / 0x64);
        });
        _0x154816.load(function (_0x3e99a9, _0x1a560a) {
          _0x32c0b5.forEach(function (_0x1b4fae) {
            _0x1b4fae.resource = _0x1a560a[_0x1b4fae.ae];
          });
          _0x67b4ad.$d(_0x33ead8, _0x32c0b5, _0x4e3851);
        });
        return;
      };
      _0x167f4e.Zd = function (_0x14efad, _0x5702d4, _0x12db3c, _0x525569) {
        $.ajax({
          'type': "GET",
          'url': _0x14efad._d,
          'xhrFields': {
            'responseType': "arraybuffer",
            'onprogress': function _0xdb3bc4(_0x29435f) {
              if (_0x29435f.lengthComputable) {
                _0x525569(_0x29435f.loaded / _0x29435f.total);
              }
            }
          }
        }).fail(function () {
          _0x5702d4(new Error());
        }).done(function (_0x5c38db) {
          _0x12db3c(_0x5c38db);
        });
      };
      _0x167f4e.$d = function (_0x1173e7, _0x44a9e9, _0x4b0d3e) {
        var _0x2a38e1 = this;
        if (this.Fd) {
          return void this.Pd();
        }
        var _0x58323d;
        var _0x67d390 = {};
        var _0x17ab3a = function _0x91fe8e() {
          try {
            if (_0x2d8fa3 < _0x44a9e9.length) {
              _0x58323d = _0x44a9e9[_0x2d8fa3];
              _0x2d8fa3++;
              _0x67d390[_0x58323d.ae] = new _0x167f4e.$C.be(_0x58323d.resource.texture, _0x58323d.resource.texture.baseTexture);
              _0x91fe8e();
              return;
            }
            return _0x2a38e1.ce(_0x1173e7, _0x67d390);
          } catch (_0x3bc63e) {
            console.error(_0x3bc63e);
          }
        };
        var _0x2d8fa3 = 0x0;
        _0x17ab3a();
      };
      _0x167f4e.p = function (_0xba896c, _0x1f7c48) {
        _0xba896c = _0xba896c.split('|');
        _0x167f4e.pm[_0xba896c[0x0]] = {
          'p': _0xba896c[0x1],
          'i': _0x1f7c48
        };
      };
      _0x167f4e.ae = function (_0x503819, _0x3fb645, _0x2f345e) {
        if (_0x3fb645.maV !== 0x1) {
          _0x3fb645.maV = 0x1;
          var _0x1cadab = _0x3fb645.ma.trim().match(_0x1a98b9);
          if (_0x1cadab && _0x2f345e.dh.Fh[_0x3fb645.ae]) {
            var _0x316aaf = function _0x2e96d5(_0x166cd4, _0x47842c) {
              if (_0x166cd4.includes('_')) {
                return _0x28edb4['WEAR_W' + _0x5b42ff + '_' + _0x166cd4] ? _0x28edb4["WEAR_W" + _0x5b42ff + '_' + _0x166cd4].reference : _0x47842c;
              }
              return _wwc.wearMap[_0x166cd4];
            };
            var _0x20f1f5 = _0x1cadab[0x3];
            var _0x5b42ff = _0x1cadab[0x4];
            var _0x9a2896 = _0x1cadab[0x5];
            var _0x476706 = _0x1cadab[0x6];
            var _0x53c7b5 = _0x1cadab[0x7];
            var _0x44557b = _0x1cadab[0x8];
            var _0x170893 = _0x1cadab[0x9];
            var _0x28edb4 = _0x1f32cc.Lc.Xb().textureDict;
            var _0x282c66 = _0x20f1f5 === 'B';
            if (_0x9a2896 !== "000") {
              var _0x5b0f97 = "SKIN_S" + _0x9a2896.substring(0x0, 0x2) + "___" + _0x9a2896.substring(0x2);
              var _0x2060dc = _0x28edb4[_0x5b0f97];
              _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.Hh = !_0x282c66 ? parseInt(_wwc.skinMap[_0x9a2896]) : _0x2060dc ? _0x5b0f97 : _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.Hh;
            }
            if (_0x476706 !== '00') {
              _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.ni = _0x316aaf(_0x476706, _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.ni);
            }
            if (_0x53c7b5 !== '00') {
              _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.oi = _0x316aaf(_0x53c7b5, _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.oi);
            }
            if (_0x44557b !== '00') {
              _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.pi = _0x316aaf(_0x44557b, _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.pi);
            }
            if (_0x170893 !== '00') {
              _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.qi = _0x316aaf(_0x170893, _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.qi);
            }
            _0x2f345e.dh.Fh[_0x3fb645.ae].Eh.ma = _0x4dae64(_0x2f345e.dh.Fh[_0x3fb645.ae].Eh.ma);
          }
        }
        _0x3fb645.ma = _0x4dae64(_0x3fb645.ma);
      };
      _0x167f4e.Xp = function (_0x56bfff, _0x5c8dc8, _0x1f699e, _0x325b6b, _0x470682, _0xcdfa76, _0x1bba5a) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = _0x1f32cc.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = _0x1f32cc.Lc.Xb().wearMap;
        }
        var _0x3d923f = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var _0x1462ed = _0x1f32cc.Lc.Xb().hatDict[_0x1bba5a] ? _0x1f32cc.Lc.Xb().hatDict[_0x1bba5a].id : _0x1bba5a;
        var _0x47d89d = _0x1f32cc.Lc.Xb().glassesDict[_0xcdfa76] ? _0x1f32cc.Lc.Xb().glassesDict[_0xcdfa76].id : _0xcdfa76;
        var _0x1c3dfc = _0x1f32cc.Lc.Xb().glassesDict[_0x470682] ? _0x1f32cc.Lc.Xb().mouthDict[_0x470682].id : _0x470682;
        var _0x4ad502 = _0x1f32cc.Lc.Xb().glassesDict[_0x325b6b] ? _0x1f32cc.Lc.Xb().eyesDict[_0x325b6b].id : _0x325b6b;
        var _0x2c7113 = 'A';
        var _0x56ae7c = '';
        var _0x5d76ec = '__';
        var _0x14ad20 = function _0x4db19c(_0x596d05, _0x43acb1) {
          if (_0x3d923f.test(_0x596d05)) {
            var _0x4aede8 = _0x3d923f.exec(_0x596d05);
            return {
              'id': _0x4aede8[0x2],
              'value': _0x4aede8[0x3],
              'testRun': true
            };
          }
          return {
            'id': null,
            'value': null,
            'testRun': false
          };
        };
        var _0x52b76 = {
          'h': _0x14ad20(_0x1f699e, 'h'),
          'r': _0x14ad20(_0x4ad502, 'r'),
          'a': _0x14ad20(_0x1c3dfc, 'a'),
          'f': _0x14ad20(_0x47d89d, 'f'),
          'c': _0x14ad20(_0x1462ed, 'c')
        };
        if (_0x52b76.h.testRun) {
          _0x56ae7c = _0x52b76.h.id.substring(0x1);
          _0x2c7113 = 'B';
        }
        if (_0x52b76.r.testRun || _0x52b76.a.testRun || _0x52b76.f.testRun || _0x52b76.c.testRun) {
          _0x5d76ec = (_0x52b76.r.id || _0x52b76.a.id || _0x52b76.f.id || _0x52b76.c.id).substring(0x1);
        }
        var _0x52f577 = function _0x26481b(_0x2096ea, _0x311064) {
          if (_0x52b76[_0x311064].value) {
            return _0x52b76[_0x311064].value.padStart(_0x311064 === 'h' ? 0x3 : 0x2, '0');
          }
          if (!_wwc[_0x311064 === 'h' ? "testSkinMod" : "testWear"](_0x2096ea || 0x0)) {
            return _0x52b76[_0x311064].testRun ? _0x2096ea.toString().padStart(_0x311064 === 'h' ? 0x3 : 0x2, '0') : _0x311064 === 'h' ? "000" : '00';
          }
          return _wwc[_0x311064 === 'h' ? "skinMap" : "wearMap"][_0x2096ea] || (_0x311064 === 'h' ? '000' : '00');
        };
        var _0x551f48 = _0x52f577(_0x1f699e, 'h');
        var _0xfed7a9 = _0x52f577(_0x325b6b, 'r');
        var _0x3e3609 = _0x52f577(_0x470682, 'a');
        var _0x14c6be = _0x52f577(_0xcdfa76, 'f');
        var _0x50ffa1 = _0x52f577(_0x1bba5a, 'c');
        var _0x4ae500 = _0x2c7113 + _0x5d76ec + _0x56ae7c + _0x551f48.replace('__', '') + _0xfed7a9 + _0x3e3609 + _0x14c6be + _0x50ffa1;
        bbs.code = ''.concat(_0x551f48 || "000", '|').concat(_0x50ffa1 || '00');
        function _0x91ca1(_0x27c776, _0x17be73) {
          var _0x255014 = '';
          _0x255014 = _0x27c776.substring(0x0, 0x12).padEnd(0x12, '_');
          var _0x42eebe = _0x255014 + _0x17be73;
          return _0x42eebe;
        }
        bbs.nickname = _0x91ca1(_0x5c8dc8, _0x4ae500);
        return bbs.nickname;
      };
      _0x167f4e.bgg = function (_0x471ab3) {
        var _0x323a99 = parseInt(bbs.background) ? backgroundArena[bbs.background].uri : "/images/bg-pattern-pow2-ARENA.png";
        if (_0x471ab3) {
          _0x323a99 = backgroundArena[_0x471ab3].uri;
          bbs.bgGameWidth = backgroundArena[_0x471ab3].w || 0x200;
          bbs.bgGameHeight = backgroundArena[_0x471ab3].h || 0x100;
        }
        var _0x1a2af0 = PIXI.BaseTexture.from(bbs.backgroundUri || _0x323a99);
        bbs.bgGameWidth = _0x1a2af0.width || bbs.bgGameWidth || 0x200;
        bbs.bgGameHeight = _0x1a2af0.height || bbs.bgGameHeight || 0x100;
        _0x1a2af0.wrapMode = bbs.bgGameWidth > 0x3e7 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        return new PIXI.Texture(_0x1a2af0);
      };
      _0x167f4e.genereteTexture = function (_0x5d1a25) {
        try {
          var _0x298313 = function _0x55e2ce() {
            var _0x3956fa = [];
            for (var _0x457ea4 = 0x0; _0x457ea4 < _0x5d1a25.lines; _0x457ea4++) {
              lineContainer = [];
              for (var _0x48da17 = 0x0; _0x48da17 < 0x9; _0x48da17++) {
                try {
                  var _0x51e9d8 = PIXI.Texture.from(_0x5d1a25._d, {
                    'x': _0x48da17 * 0x80,
                    'y': _0x457ea4 * 0x80,
                    'width': 0x80,
                    'height': 0x80
                  });
                  lineContainer.push(_0x51e9d8);
                } catch (_0x29f52f) {
                  console.log(_0x457ea4, _0x48da17);
                  console.log(_0x29f52f);
                  return;
                }
              }
              _0x3956fa.push(lineContainer);
            }
            return _0x3956fa;
          };
          return _0x298313();
        } catch (_0x23af57) {
          return [];
        }
      };
      var _0x5d0115 = {
        'headshot': window.URL_CDN + '/sounds/headshot_sound_effect.mp3',
        'shaokahn': window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        'speed': window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        'curve': window.URL_CDN + "/sounds/yes_effect.mp3",
        'loser': window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        'top1': window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      _0x5b5da3.ref = ["speed", "curve"];
      for (var _0x138f75 in _0x5d0115) {
        _0x5b5da3[_0x138f75] = new _0x16c958.Howl({
          'src': [_0x5d0115[_0x138f75]],
          'html5': true,
          'autoplay': _0x138f75 == "top1",
          'loop': false
        });
      }
      var _0x408f6e = {
        'rotate(0deg)': 0x0,
        'rotate(90deg)': 1.5707963267948966,
        'rotate(180deg)': 3.141592653589793,
        'rotate(270deg)': 4.71238898038469,
        'rotate(360deg)': 0x0
      };
      function _0x10ee1f(_0x1f962e) {
        console.log(_0x1f962e);
        return function (_0x5f4efb) {};
      }
      var _0x591037 = "function" == typeof Symbol && 'symbol' == _0x363293(Symbol.iterator) ? function (_0x2d2d80) {
        return _0x363293(_0x2d2d80);
      } : function (_0x2832d3) {
        return _0x2832d3 && "function" == typeof Symbol && _0x2832d3.constructor === Symbol && _0x2832d3 !== Symbol.prototype ? "symbol" : _0x363293(_0x2832d3);
      };
      var _0x17960c;
      window.addEventListener('load', function () {
        function _0x3cfad6() {
          (function (_0x33c768, _0xb6ddf8, _0x364899) {
            var _0x3a3bb6 = [];
            var _0x2e284f = [];
            var _0xaeed4a = {
              '_version': "3.3.1",
              '_config': {
                'classPrefix': '',
                'enableClasses': true,
                'enableJSClass': true,
                'usePrefixes': true
              },
              '_q': [],
              'on': function _0x4e5d32(_0x480ed2, _0xa1947e) {
                var _0x5bbe05 = this;
                setTimeout(function () {
                  _0xa1947e(_0x5bbe05[_0x480ed2]);
                }, 0x0);
              },
              'addTest': function _0x3b0457(_0x2d1349, _0x3701d0, _0x7fc51a) {
                _0x2e284f.push({
                  'name': _0x2d1349,
                  'fn': _0x3701d0,
                  'options': _0x7fc51a
                });
              },
              'addAsyncTest': function _0x43b73e(_0x18b6b5) {
                _0x2e284f.push({
                  'name': null,
                  'fn': _0x18b6b5
                });
              }
            };
            var _0x5cd3f1 = function _0x298b0f() {};
            _0x5cd3f1.prototype = _0xaeed4a;
            _0x5cd3f1 = new _0x5cd3f1();
            var _0x2fd5ef = false;
            try {
              _0x2fd5ef = "WebSocket" in _0x33c768 && 0x2 === _0x33c768.WebSocket.CLOSING;
            } catch (_0x1e9234) {}
            _0x5cd3f1.addTest("websockets", _0x2fd5ef);
            var _0x2fd6f7 = _0xb6ddf8.documentElement;
            var _0x5b50ba = 'svg' === _0x2fd6f7.nodeName.toLowerCase();
            _0x5cd3f1.addTest("canvas", function () {
              var _0x572bfe = "function" != typeof _0xb6ddf8.createElement ? _0xb6ddf8.createElement(arguments[0x0]) : _0x5b50ba ? _0xb6ddf8.createElementNS.call(_0xb6ddf8, "http://www.w3.org/2000/svg", arguments[0x0]) : _0xb6ddf8.createElement.apply(_0xb6ddf8, arguments);
              return !(!_0x572bfe.getContext || !_0x572bfe.getContext('2d'));
            });
            _0x5cd3f1.addTest("canvastext", function () {
              return false !== _0x5cd3f1.canvas && 'function' == typeof ("function" != typeof _0xb6ddf8.createElement ? _0xb6ddf8.createElement(arguments[0x0]) : _0x5b50ba ? _0xb6ddf8.createElementNS.call(_0xb6ddf8, "http://www.w3.org/2000/svg", arguments[0x0]) : _0xb6ddf8.createElement.apply(_0xb6ddf8, arguments)).getContext('2d').fillText;
            });
            (function () {
              var _0x271763;
              var _0x4e0c93;
              var _0x41afb5;
              var _0x5605c2;
              var _0x18d1da;
              var _0x3ac844;
              var _0x5db0f7;
              for (var _0x589373 in _0x2e284f) if (_0x2e284f.hasOwnProperty(_0x589373)) {
                _0x271763 = [];
                _0x4e0c93 = _0x2e284f[_0x589373];
                if (_0x4e0c93.name && (_0x271763.push(_0x4e0c93.name.toLowerCase()), _0x4e0c93.options && _0x4e0c93.options.aliases && _0x4e0c93.options.aliases.length)) {
                  for (_0x41afb5 = 0x0; _0x41afb5 < _0x4e0c93.options.aliases.length; _0x41afb5++) {
                    _0x271763.push(_0x4e0c93.options.aliases[_0x41afb5].toLowerCase());
                  }
                }
                _0x5605c2 = (undefined === _0x4e0c93.fn ? 'undefined' : _0x591037(_0x4e0c93.fn)) === "function" ? _0x4e0c93.fn() : _0x4e0c93.fn;
                for (_0x18d1da = 0x0; _0x18d1da < _0x271763.length; _0x18d1da++) {
                  _0x3ac844 = _0x271763[_0x18d1da];
                  _0x5db0f7 = _0x3ac844.split('.');
                  if (0x1 === _0x5db0f7.length) {
                    _0x5cd3f1[_0x5db0f7[0x0]] = _0x5605c2;
                  } else {
                    if (!(!_0x5cd3f1[_0x5db0f7[0x0]] || _0x5cd3f1[_0x5db0f7[0x0]] instanceof Boolean)) {
                      _0x5cd3f1[_0x5db0f7[0x0]] = new Boolean(_0x5cd3f1[_0x5db0f7[0x0]]);
                    }
                    _0x5cd3f1[_0x5db0f7[0x0]][_0x5db0f7[0x1]] = _0x5605c2;
                  }
                  _0x3a3bb6.push((_0x5605c2 ? '' : "no-") + _0x5db0f7.join('-'));
                }
              }
            })();
            (function (_0x1a046a) {
              var _0x16744e = _0x2fd6f7.className;
              var _0x4d0e5b = _0x5cd3f1._config.classPrefix || '';
              if (_0x5b50ba) {
                _0x16744e = _0x16744e.baseVal;
              }
              if (_0x5cd3f1._config.enableJSClass) {
                var _0x36af4f = new RegExp("(^|\\s)" + _0x4d0e5b + "no-js(\\s|$)");
                _0x16744e = _0x16744e.replace(_0x36af4f, '$1' + _0x4d0e5b + "js$2");
              }
              if (_0x5cd3f1._config.enableClasses) {
                _0x16744e += " " + _0x4d0e5b + _0x1a046a.join(" " + _0x4d0e5b);
                if (_0x5b50ba) {
                  _0x2fd6f7.className.baseVal = _0x16744e;
                } else {
                  _0x2fd6f7.className = _0x16744e;
                }
              }
            })(_0x3a3bb6);
            delete _0xaeed4a.addTest;
            delete _0xaeed4a.addAsyncTest;
            for (var _0xa3270b = 0x0; _0xa3270b < _0x5cd3f1._q.length; _0xa3270b++) {
              _0x5cd3f1._q[_0xa3270b]();
            }
            _0x33c768.Modernizr = _0x5cd3f1;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = 'block';
        if (!_0x3cfad6()) {
          return void (document.getElementById('error-view').style.display = "block");
        }
        !function () {
          var _0x5408a7 = {};
          var _0x3b850d = {};
          var _0x318912 = {
            a: {
              'r': window.runtimeHash,
              'b': 'https://gateway.wormate.io',
              'c': "https://resources.wormate.io",
              'd': "/images/linelogo-valday2023.png",
              'e': "/images/guest-avatar-valday2023.png",
              'f': "/images/confetti-valday2023.png",
              'g': "/images/bg-event-pattern-valday2023.png"
            }
          };
          _0x318912.a.i = function () {
            var _0xc9213c = window.I18N_LANG;
            if (!_0xc9213c) {
              _0xc9213c = 'en';
            }
            return _0xc9213c;
          }();
          _0x318912.a.j = function () {
            var _0x2b4b16 = undefined;
            switch (_0x318912.a.i) {
              case 'uk':
                _0x2b4b16 = "uk_UA";
                break;
              case 'de':
                _0x2b4b16 = 'de_DE';
                break;
              case 'fr':
                _0x2b4b16 = 'fr_FR';
                break;
              case 'es':
                _0x2b4b16 = "es_ES";
                break;
              default:
                _0x2b4b16 = "en_US";
            }
            return _0x2b4b16;
          }();
          moment.locale(_0x318912.a.j);
          var _0x587230 = function () {
            return {
              'Container': PIXI.Container,
              'BaseTexture': PIXI.BaseTexture,
              'Texture': PIXI.Texture,
              'Renderer': PIXI.Renderer,
              'Graphics': PIXI.Graphics,
              'Shader': PIXI.Shader,
              'Rectangle': PIXI.Rectangle,
              'Sprite': PIXI.Sprite,
              'Text': PIXI.Text,
              'Geometry': PIXI.Geometry,
              'Mesh': PIXI.Mesh,
              'v': {
                'z': PIXI.BLEND_MODES.ADD,
                'A': PIXI.BLEND_MODES.SCREEN,
                'B': PIXI.BLEND_MODES.MULTIPLY
              },
              'C': {
                'D': PIXI.WRAP_MODES.REPEAT
              }
            };
          }();
          _0x3b850d.F = 6.283185307179586;
          _0x3b850d.G = Math.PI;
          _0x318912.H = function (_0xafca70) {
            return window.I18N_MESSAGES[_0xafca70];
          };
          _0x318912.I = function (_0x5aa54a) {
            return _0x5aa54a[_0x318912.a.i] ? _0x5aa54a[_0x318912.a.i] : _0x5aa54a.en ? _0x5aa54a.en : _0x5aa54a.x;
          };
          _0x318912.J = function (_0x50e3f2) {
            var _0x24125c = (Math.floor(_0x50e3f2) % 0x3c).toString();
            var _0x458557 = (Math.floor(_0x50e3f2 / 0x3c) % 0x3c).toString();
            var _0x3f0264 = (Math.floor(_0x50e3f2 / 0xe10) % 0x18).toString();
            var _0x52f045 = Math.floor(_0x50e3f2 / 0x15180).toString();
            var _0x510981 = _0x318912.H("util.time.days");
            var _0x5c82ab = _0x318912.H("util.time.hours");
            var _0x55d8b7 = _0x318912.H('util.time.min');
            var _0x4df59d = _0x318912.H("util.time.sec");
            return _0x52f045 > 0x0 ? _0x52f045 + " " + _0x510981 + " " + _0x3f0264 + " " + _0x5c82ab + " " + _0x458557 + " " + _0x55d8b7 + " " + _0x24125c + " " + _0x4df59d : _0x3f0264 > 0x0 ? _0x3f0264 + " " + _0x5c82ab + " " + _0x458557 + " " + _0x55d8b7 + " " + _0x24125c + " " + _0x4df59d : _0x458557 > 0x0 ? _0x458557 + " " + _0x55d8b7 + " " + _0x24125c + " " + _0x4df59d : _0x24125c + " " + _0x4df59d;
          };
          _0x318912.K = function (_0x2a76f9) {
            return _0x2a76f9.includes("href") ? _0x2a76f9.replaceAll("href", "target=\"_black\" href") : _0x2a76f9;
          };
          _0x318912.L = function (_0x13cf5a, _0x23e7f9, _0x2c7a4d, _0x1345b3) {
            var _0x515825 = document.createElement('script');
            var _0x429f66 = true;
            if ('undefined' !== _0x591037(_0x23e7f9) && null !== _0x23e7f9) {
              if ("undefined" !== _0x591037(_0x23e7f9.id)) {
                _0x515825.id = _0x23e7f9.id;
              }
              if ('undefined' !== _0x591037(_0x23e7f9.async) && _0x23e7f9.async) {
                _0x515825.async = "async";
              }
              if ('undefined' !== _0x591037(_0x23e7f9.defer) && _0x23e7f9.defer) {
                _0x515825.defer = "defer";
              }
              if ("undefined" !== _0x591037(_0x23e7f9.crossorigin)) {
                _0x515825.crossorigin = _0x23e7f9.crossorigin;
              }
            }
            _0x515825.type = _0x515825.type == _0x1345b3 ? "module" : "text/javascript";
            _0x515825.src = _0x13cf5a;
            if (_0x2c7a4d) {
              _0x515825.onload = _0x515825.onreadystatechange = function () {
                _0x429f66 = false;
                try {
                  _0x2c7a4d();
                } catch (_0x5e38fb) {}
                _0x515825.onload = _0x515825.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x515825);
          };
          _0x318912.M = function (_0x670641, _0x4d6d44) {
            _0x4d6d44.prototype = Object.create(_0x670641.prototype);
            _0x4d6d44.prototype.constructor = _0x4d6d44;
            _0x4d6d44.parent = _0x670641;
            return _0x4d6d44;
          };
          _0x318912.N = function (_0x37b0b9) {
            _0x37b0b9 %= _0x3b850d.F;
            return _0x37b0b9 < 0x0 ? _0x37b0b9 + _0x3b850d.F : _0x37b0b9;
          };
          _0x318912.O = function (_0x3eac50, _0x1d32ca, _0xf7d899) {
            return _0x318912.P(_0xf7d899, _0x3eac50, _0x1d32ca);
          };
          _0x318912.P = function (_0x1fdac3, _0x5b1a64, _0x2f1ffa) {
            return _0x1fdac3 > _0x2f1ffa ? _0x2f1ffa : _0x1fdac3 < _0x5b1a64 ? _0x5b1a64 : Number.isFinite(_0x1fdac3) ? _0x1fdac3 : 0.5 * (_0x5b1a64 + _0x2f1ffa);
          };
          _0x318912.Q = function (_0x18d16a, _0x28c2b5, _0x164cbf, _0x34fb7e) {
            return _0x28c2b5 > _0x18d16a ? Math.min(_0x28c2b5, _0x18d16a + _0x164cbf * _0x34fb7e) : Math.max(_0x28c2b5, _0x18d16a - _0x164cbf * _0x34fb7e);
          };
          _0x318912.R = function (_0xace8e5, _0x3cb413, _0xdb18be, _0x4d94a0, _0x420150) {
            return _0x3cb413 + (_0xace8e5 - _0x3cb413) * Math.pow(0x1 - _0x4d94a0, _0xdb18be / _0x420150);
          };
          _0x318912.S = function (_0x3552f7, _0x1bf4f8, _0x32a0a0) {
            return _0x3552f7 - (_0x3552f7 - _0x1bf4f8) * _0x32a0a0;
          };
          _0x318912.T = function (_0x5da09c, _0x29a308, _0x290dba, _0x336d16) {
            var _0x15ce4b = _0x29a308 + _0x336d16;
            if (null == _0x5da09c) {
              throw new TypeError("this is null or not defined");
            }
            var _0x35ac7a = _0x5da09c.length >>> 0x0;
            var _0x1c2df5 = _0x290dba >> 0x0;
            var _0x57f0da = _0x1c2df5 < 0x0 ? Math.max(_0x35ac7a + _0x1c2df5, 0x0) : Math.min(_0x1c2df5, _0x35ac7a);
            var _0x2a55ec = _0x29a308 >> 0x0;
            var _0x1b82bd = _0x2a55ec < 0x0 ? Math.max(_0x35ac7a + _0x2a55ec, 0x0) : Math.min(_0x2a55ec, _0x35ac7a);
            var _0x29f199 = undefined === _0x15ce4b ? _0x35ac7a : _0x15ce4b >> 0x0;
            var _0x2ab540 = _0x29f199 < 0x0 ? Math.max(_0x35ac7a + _0x29f199, 0x0) : Math.min(_0x29f199, _0x35ac7a);
            var _0x3fa823 = Math.min(_0x2ab540 - _0x1b82bd, _0x35ac7a - _0x57f0da);
            var _0x2ae640 = 0x1;
            for (_0x1b82bd < _0x57f0da && _0x57f0da < _0x1b82bd + _0x3fa823 && (_0x2ae640 = -0x1, _0x1b82bd += _0x3fa823 - 0x1, _0x57f0da += _0x3fa823 - 0x1); _0x3fa823 > 0x0;) {
              if (_0x1b82bd in _0x5da09c) {
                _0x5da09c[_0x57f0da] = _0x5da09c[_0x1b82bd];
              } else {
                delete _0x5da09c[_0x57f0da];
              }
              _0x1b82bd += _0x2ae640;
              _0x57f0da += _0x2ae640;
              _0x3fa823--;
            }
            return _0x5da09c;
          };
          _0x318912.U = function (_0x50988d) {
            if (null != _0x50988d.parent) {
              _0x50988d.parent.removeChild(_0x50988d);
            }
          };
          _0x318912.V = function (_0x49bbe5, _0x1c7c97) {
            return _0x49bbe5 + (_0x1c7c97 - _0x49bbe5) * Math.random();
          };
          _0x318912.W = function (_0xf9022d) {
            return _0xf9022d[parseInt(Math.random() * _0xf9022d.length)];
          };
          _0x318912.X = function () {
            return Math.random().toString(0x24).substring(0x2, 0xf);
          };
          _0x318912.Y = function (_0x4199c4, _0xcab951, _0x19492e) {
            var _0x28bbef = (0x1 - Math.abs(0x2 * _0x19492e - 0x1)) * _0xcab951;
            var _0x1a03c1 = _0x28bbef * (0x1 - Math.abs(_0x4199c4 / 0x3c % 0x2 - 0x1));
            var _0x2b60f8 = _0x19492e - _0x28bbef / 0x2;
            return 0x0 <= _0x4199c4 && _0x4199c4 < 0x3c ? [_0x2b60f8 + _0x28bbef, _0x2b60f8 + _0x1a03c1, _0x2b60f8 + 0x0] : 0x3c <= _0x4199c4 && _0x4199c4 < 0x78 ? [_0x2b60f8 + _0x1a03c1, _0x2b60f8 + _0x28bbef, _0x2b60f8 + 0x0] : 0x78 <= _0x4199c4 && _0x4199c4 < 0xb4 ? [_0x2b60f8 + 0x0, _0x2b60f8 + _0x28bbef, _0x2b60f8 + _0x1a03c1] : 0xb4 <= _0x4199c4 && _0x4199c4 < 0xf0 ? [_0x2b60f8 + 0x0, _0x2b60f8 + _0x1a03c1, _0x2b60f8 + _0x28bbef] : 0xf0 <= _0x4199c4 && _0x4199c4 < 0x12c ? [_0x2b60f8 + _0x1a03c1, _0x2b60f8 + 0x0, _0x2b60f8 + _0x28bbef] : [_0x2b60f8 + _0x28bbef, _0x2b60f8 + 0x0, _0x2b60f8 + _0x1a03c1];
          };
          _0x318912.Z = function (_0xe040d1, _0x955308, _0x37cd60) {
            $.get(_0xe040d1).fail(_0x955308).done(_0x37cd60);
          };
          _0x318912.$ = function (_0x129266, _0x16c69c, _0x411ef2, _0x29cbd4) {
            $.ajax({
              'type': "GET",
              'url': _0x129266,
              'xhrFields': {
                'responseType': "arraybuffer",
                'onprogress': function _0x1437b1(_0x5b277d) {
                  if (_0x5b277d.lengthComputable) {
                    _0x29cbd4(_0x5b277d.loaded / _0x5b277d.total * 0x64);
                  }
                }
              }
            }).fail(_0x16c69c).done(_0x411ef2);
          };
          _0x318912._ = function (_0x4745a4, _0x15f420) {
            for (var _0x46cf16 in _0x4745a4) if (_0x4745a4.hasOwnProperty(_0x46cf16)) {
              _0x15f420(_0x46cf16, _0x4745a4[_0x46cf16]);
            }
          };
          _0x318912.aa = function (_0x2dfda1) {
            for (var _0x4541cf = _0x2dfda1.length - 0x1; _0x4541cf > 0x0; _0x4541cf--) {
              var _0x2400a4 = Math.floor(Math.random() * (_0x4541cf + 0x1));
              var _0x18833d = _0x2dfda1[_0x4541cf];
              _0x2dfda1[_0x4541cf] = _0x2dfda1[_0x2400a4];
              _0x2dfda1[_0x2400a4] = _0x18833d;
            }
            return _0x2dfda1;
          };
          (function () {
            DataView.prototype.ba = function (_0x89df38) {
              return this.getInt8(_0x89df38);
            };
            DataView.prototype.ca = function (_0x27bfcf) {
              return this.getInt16(_0x27bfcf);
            };
            DataView.prototype.da = function (_0xa20c9b) {
              return this.getInt32(_0xa20c9b);
            };
            DataView.prototype.ea = function (_0x328ee1) {
              return this.getFloat32(_0x328ee1);
            };
            DataView.prototype.fa = function (_0x50aff8) {
              return this.getFloat64(_0x50aff8);
            };
          })();
          _0x318912.ga = function () {
            function _0x33d0f0() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga('send', "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (_0x50f3e7) {}
                _0x4eed44(true);
              }
            }
            var _0x436ab7 = false;
            var _0x4eed44 = function _0x29508f() {};
            var _0x343d37 = {};
            $("#adbl-continue").click(function () {
              $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
              _0x4eed44(false);
            });
            _0x343d37.ha = function (_0x59fdca) {
              _0x4eed44 = _0x59fdca;
              if (!_0x436ab7) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer({
                      'AD_WIDTH': 0x3c0,
                      'AD_HEIGHT': 0x21c,
                      'AD_FULLSCREEN': true,
                      'AD_CENTERPLAYER': false,
                      'LOADING_TEXT': "loading advertisement",
                      'PREROLL_ELEM': function _0x38ef14() {
                        return document.getElementById("1eaom01c3pxu9wd3");
                      },
                      'AIP_COMPLETE': function _0x197d59(_0x1b7205) {
                        _0x4eed44(true);
                        $("#1eaom01c3pxu9wd3").hide();
                        $("#JDHnkHtYwyXyVgG9").hide();
                        try {
                          ga("send", "event", 'preroll', window.runtimeHash + "_complete");
                        } catch (_0x3bc0ed) {}
                      },
                      'AIP_REMOVE': function _0x41ac2c() {}
                    });
                  });
                  _0x436ab7 = true;
                } catch (_0x3d4776) {}
              }
            };
            _0x343d37.ia = function () {
              try {
                ga('send', "event", 'antiadblocker', window.runtimeHash + "_start");
              } catch (_0x54f2b1) {}
              _0x33d0f0();
            };
            return _0x343d37;
          };
          _0x318912.ja = function (_0x357569, _0xd260d9) {
            var _0x2319c4 = $('#' + _0x357569);
            var _0x47817b = {};
            var _0x90c8d3 = false;
            _0x47817b.ha = function () {
              if (!_0x90c8d3) {
                _0x2319c4.empty();
                _0x2319c4.append("<div id='" + _0xd260d9 + "'></div>");
                try {
                  try {
                    ga("send", "event", 'banner', window.runtimeHash + "_display");
                  } catch (_0x36ac46) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(_0xd260d9);
                  });
                  _0x90c8d3 = true;
                } catch (_0x5ac1e8) {}
              }
            };
            _0x47817b.ka = function () {
              try {
                try {
                  ga("send", 'event', "banner", window.runtimeHash + '_refresh');
                } catch (_0x3fed68) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(_0xd260d9);
                });
              } catch (_0x84fe0e) {}
            };
            return _0x47817b;
          };
          _0x5408a7.la = function () {
            function _0x3d289d(_0x160045, _0x411817, _0x4c8298, _0x36d62d, _0x3560ce, _0x1f8ff9, _0x507014, _0x212fff, _0x6ffc6e, _0x5d44a5, _0xdbdb7) {
              this.ma = _0x160045;
              this.na = _0x411817;
              this.oa = null;
              this.pa = false;
              this.qa = _0x4c8298;
              this.ra = _0x36d62d;
              this.sa = _0x3560ce;
              this.ta = _0x1f8ff9;
              this.ua = _0x507014 || (_0x6ffc6e || _0x3560ce) / 0x2;
              this.va = _0x212fff || (_0x5d44a5 || _0x1f8ff9) / 0x2;
              this.wa = _0x6ffc6e || _0x3560ce;
              this.xa = _0x5d44a5 || _0x1f8ff9;
              this.ya = 0.5 - (this.ua - 0.5 * this.wa) / this.sa;
              this.za = 0.5 - (this.va - 0.5 * this.xa) / this.ta;
              this.Aa = this.sa / this.wa;
              if (_0xdbdb7) {
                this.ev = _0xdbdb7;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            _0x3d289d.Ca = function () {
              return new _0x3d289d('', null, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0);
            };
            _0x3d289d.Da = function (_0x5d045f, _0xdc8a95, _0x31b38f, _0x14a1a4) {
              return new _0x3d289d(_0x5d045f, _0xdc8a95, _0x31b38f.x, _0x31b38f.y, _0x31b38f.w, _0x31b38f.h, _0x31b38f.px, _0x31b38f.py, _0x31b38f.pw, _0x31b38f.ph, _0x14a1a4);
            };
            _0x3d289d.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new _0x587230.Texture(this.na, new _0x587230.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            _0x3d289d.prototype.Fa = function () {
              if (null != this.oa) {
                this.oa.destroy();
              }
            };
            return _0x3d289d;
          }();
          _0x5408a7.Ga = function () {
            function _0x3e541f(_0x5511d0, _0x11bf4f, _0x27a603, _0x3499a2, _0xf7e357, _0x541afb, _0x3c3ce7, _0x14ec48, _0x526aef, _0x4de8dc, _0x3e3646, _0x255e40, _0x4abc65, _0x4a4e3e, _0x53f9d4, _0xa6a9cb, _0x53108a, _0x20cb02) {
              this.Ha = _0x5511d0;
              this.Ia = _0x11bf4f;
              this.Ja = _0x27a603;
              this.Ka = _0x3499a2;
              this.La = _0xf7e357;
              this.Ma = _0x541afb;
              this.Na = _0x3c3ce7;
              this.Oa = _0x14ec48;
              this.Pa = _0x526aef;
              this.Qa = _0x4de8dc;
              this.Ra = _0x3e3646;
              this.Sa = _0x255e40;
              this.Ta = _0x4abc65;
              this.Ua = _0x4a4e3e;
              this.Va = _0x53f9d4;
              this.Wa = _0xa6a9cb;
              this.Xa = _0x53108a;
              this.Ya = _0x20cb02;
            }
            _0x3e541f.prototype.Fa = function () {
              for (var _0x5202cc = 0x0; _0x5202cc < this.Ha.length; _0x5202cc++) {
                this.Ha[_0x5202cc].dispose();
                this.Ha[_0x5202cc].destroy();
              }
              this.Ha = [];
              for (var _0x16e968 = 0x0; _0x16e968 < this.Ia.length; _0x16e968++) {
                this.Ia[_0x16e968].Fa();
              }
              this.Ia = [];
            };
            _0x3e541f.Ca = function () {
              var _0xaf4e3d = new _0x3e541f.Za(_0x5408a7._a.$a, _0x5408a7._a.$a);
              var _0x217c53 = new _0x3e541f.ab("#ffffff", [_0x5408a7._a.$a], [_0x5408a7._a.$a]);
              return new _0x3e541f([], [], {}, _0xaf4e3d, {}, new _0x3e541f.bb(_0x5408a7._a.$a), {}, _0x217c53, {}, new _0x3e541f.cb('', _0x217c53, _0xaf4e3d), {}, new _0x3e541f.db([_0x5408a7._a.$a]), {}, new _0x3e541f.db([_0x5408a7._a.$a]), {}, new _0x3e541f.db([_0x5408a7._a.$a]), {}, new _0x3e541f.db([_0x5408a7._a.$a]));
            };
            _0x3e541f.eb = function (_0x3394f2, _0x37e880, _0x2b962c, _0x4bb140) {
              var _0x22ba87 = new _0x3e541f.Za(_0x5408a7._a.$a, _0x5408a7._a.$a);
              var _0x2e3cfd = new _0x3e541f.ab("#ffffff", [_0x3394f2], [_0x37e880]);
              return new _0x3e541f([], [], {}, _0x22ba87, {}, new _0x3e541f.bb(_0x5408a7._a.$a), {}, _0x2e3cfd, {}, new _0x3e541f.cb('', _0x2e3cfd, _0x22ba87), {}, new _0x3e541f.db([_0x2b962c]), {}, new _0x3e541f.db([_0x4bb140]), {}, new _0x3e541f.db([_0x5408a7._a.$a]), {}, new _0x3e541f.db([_0x5408a7._a.$a]));
            };
            _0x3e541f.fb = function (_0x51bea5, _0x3cb2b5, _0x263d46, _0x3d6b1b) {
              var _0x4c53c4 = {};
              _0x318912._(_0x51bea5.colorDict, function (_0x272790, _0x55da98) {
                _0x4c53c4[_0x272790] = '#' + _0x55da98;
              });
              var _0x34c776 = {};
              for (var _0x59d80d = 0x0; _0x59d80d < _0x51bea5.skinArrayDict.length; _0x59d80d++) {
                var _0xc8d02 = _0x51bea5.skinArrayDict[_0x59d80d];
                _0x34c776[_0xc8d02.id] = new _0x3e541f.ab(_0x4c53c4[_0xc8d02.prime], _0xc8d02.base.map(function (_0x588889) {
                  return _0x3cb2b5[_0x588889];
                }), _0xc8d02.glow.map(function (_0x973e3, _0x3c0e13) {
                  return _0x3cb2b5[_0x973e3];
                }));
                if (_0xc8d02.glow[0x0] == "a_trans") {
                  _0x34c776[_0xc8d02.id].vbb = _0x3cb2b5.a_black;
                }
              }
              var _0x107a99 = undefined;
              var _0x680534 = _0x51bea5.skinUnknown;
              try {
                _0x107a99 = new _0x3e541f.ab(_0x4c53c4[_0x680534.prime], _0x680534.base.map(function (_0x4d9225) {
                  return _0x3cb2b5[_0x4d9225];
                }), _0x680534.glow.map(function (_0x561f91) {
                  return _0x3cb2b5[_0x561f91];
                }));
              } catch (_0x191917) {}
              var _0xff63e7 = {};
              _0x318912._(_0x51bea5.eyesDict, function (_0x136df4, _0x88bafa) {
                var _0x4e50d4 = parseInt(_0x136df4);
                _0xff63e7[_0x4e50d4] = new _0x3e541f.db(_0x88bafa.base.map(function (_0x3aa831) {
                  return _0x3cb2b5[_0x3aa831.region];
                }));
              });
              var _0x35110f = new _0x3e541f.db(_0x51bea5.eyesUnknown.base.map(function (_0x4560cc) {
                return _0x3cb2b5[_0x4560cc.region];
              }));
              var _0x32283f = {};
              _0x318912._(_0x51bea5.mouthDict, function (_0x4a583a, _0x3a4307) {
                var _0x59dff8 = parseInt(_0x4a583a);
                _0x32283f[_0x59dff8] = new _0x3e541f.db(_0x3a4307.base.map(function (_0x39dce1) {
                  return _0x3cb2b5[_0x39dce1.region];
                }));
              });
              var _0xe14632 = new _0x3e541f.db(_0x51bea5.mouthUnknown.base.map(function (_0x31f42f) {
                return _0x3cb2b5[_0x31f42f.region];
              }));
              var _0x52a14d = {};
              _0x318912._(_0x51bea5.hatDict, function (_0x439a48, _0x42b5e6) {
                var _0xc7db4e = parseInt(_0x439a48);
                _0x52a14d[_0xc7db4e] = new _0x3e541f.db(_0x42b5e6.base.map(function (_0x428dd9) {
                  return _0x3cb2b5[_0x428dd9.region];
                }));
              });
              var _0x22d4c9 = new _0x3e541f.db(_0x51bea5.hatUnknown.base.map(function (_0x6a2346) {
                return _0x3cb2b5[_0x6a2346.region];
              }));
              var _0x443dce = {};
              _0x318912._(_0x51bea5.glassesDict, function (_0x213d5f, _0x10908b) {
                var _0x1908b8 = parseInt(_0x213d5f);
                _0x443dce[_0x1908b8] = new _0x3e541f.db(_0x10908b.base.map(function (_0x491935) {
                  return _0x3cb2b5[_0x491935.region];
                }));
              });
              var _0x204df9 = new _0x3e541f.db(_0x51bea5.glassesUnknown.base.map(function (_0x5e8571) {
                return _0x3cb2b5[_0x5e8571.region];
              }));
              var _0x8d49d7 = {};
              _0x318912._(_0x51bea5.portionDict, function (_0x12a804, _0x5e764b) {
                _0x12a804 = parseInt(_0x12a804);
                _0x8d49d7[_0x12a804] = new _0x3e541f.Za(_0x3cb2b5[_0x5e764b.base], _0x3cb2b5[_0x5e764b.glow]);
              });
              var _0x117f78 = undefined;
              var _0x84283a = _0x51bea5.portionUnknown;
              _0x117f78 = new _0x3e541f.Za(_0x3cb2b5[_0x84283a.base], _0x3cb2b5[_0x84283a.glow]);
              var _0x31fe09 = {};
              _0x318912._(_0x51bea5.abilityDict, function (_0x4ccbce, _0x378f5b) {
                _0x4ccbce = parseInt(_0x4ccbce);
                _0x31fe09[_0x4ccbce] = new _0x3e541f.bb(_0x3cb2b5[_0x378f5b.base]);
              });
              var _0x4972dc = undefined;
              var _0x23d991 = _0x51bea5.abilityUnknown;
              _0x4972dc = new _0x3e541f.bb(_0x3cb2b5[_0x23d991.base]);
              var _0x3dab18 = {};
              _0x318912._(_0x51bea5.teamDict, function (_0x4be705, _0x27ac70) {
                _0x4be705 = parseInt(_0x4be705);
                _0x3dab18[_0x4be705] = new _0x3e541f.cb(_0x27ac70.title, new _0x3e541f.ab(_0x4c53c4[_0x27ac70.skin.prime], null, _0x27ac70.skin.glow.map(function (_0x55db08) {
                  return _0x3cb2b5[_0x55db08];
                })), new _0x3e541f.Za(null, _0x3cb2b5[_0x27ac70.portion.glow]));
              });
              var _0x3f58e0 = new _0x3e541f.cb({}, _0x107a99, _0x117f78);
              return new _0x3e541f(_0x263d46, _0x3d6b1b, _0x8d49d7, _0x117f78, _0x31fe09, _0x4972dc, _0x34c776, _0x107a99, _0x3dab18, _0x3f58e0, _0xff63e7, _0x35110f, _0x32283f, _0xe14632, _0x52a14d, _0x22d4c9, _0x443dce, _0x204df9);
            };
            _0x3e541f.prototype.gb = function (_0x3dad8c) {
              var _0x6fe80e = _0x318912.aa(Object.keys(this.Na)).slice(0x0, _0x3dad8c);
              var _0x4ee6e0 = _0x318912.aa(Object.keys(this.Ra)).slice(0x0, _0x3dad8c);
              var _0x36d0cb = _0x318912.aa(Object.keys(this.Ta)).slice(0x0, _0x3dad8c);
              var _0x41393f = _0x318912.aa(Object.keys(this.Va)).slice(0x0, _0x3dad8c);
              var _0xdb7589 = _0x318912.aa(Object.keys(this.Xa)).slice(0x0, _0x3dad8c);
              var _0x25cae0 = [];
              for (var _0x511291 = 0x0; _0x511291 < _0x3dad8c; _0x511291++) {
                var _0x1bcf9b = _0x6fe80e.length > 0x0 ? _0x6fe80e[_0x511291 % _0x6fe80e.length] : 0x0;
                var _0x272097 = _0x4ee6e0.length > 0x0 ? _0x4ee6e0[_0x511291 % _0x4ee6e0.length] : 0x0;
                var _0x19d0bb = _0x36d0cb.length > 0x0 ? _0x36d0cb[_0x511291 % _0x36d0cb.length] : 0x0;
                var _0x40ac9f = _0x41393f.length > 0x0 ? _0x41393f[_0x511291 % _0x41393f.length] : 0x0;
                var _0x47f9b0 = _0xdb7589.length > 0x0 ? _0xdb7589[_0x511291 % _0xdb7589.length] : 0x0;
                _0x25cae0.push(new _0x5408a7.hb(_0x1bcf9b, _0x272097, _0x19d0bb, _0x40ac9f, _0x47f9b0));
              }
              return _0x25cae0;
            };
            _0x3e541f.prototype.ib = function (_0x3ff0a2) {
              return this.Na.hasOwnProperty(_0x3ff0a2) ? this.Na[_0x3ff0a2] : this.Oa;
            };
            _0x3e541f.prototype.jb = function (_0x48f022) {
              return this.Pa.hasOwnProperty(_0x48f022) ? this.Pa[_0x48f022] : this.Qa;
            };
            _0x3e541f.prototype.kb = function (_0x5ad7e5) {
              return this.Ra.hasOwnProperty(_0x5ad7e5) ? this.Ra[_0x5ad7e5] : this.Sa;
            };
            _0x3e541f.prototype.lb = function (_0xca7531) {
              return this.Ta.hasOwnProperty(_0xca7531) ? this.Ta[_0xca7531] : this.Ua;
            };
            _0x3e541f.prototype.mb = function (_0x32a1ef) {
              return this.Xa.hasOwnProperty(_0x32a1ef) ? this.Xa[_0x32a1ef] : this.Ya;
            };
            _0x3e541f.prototype.nb = function (_0x2e5684) {
              return this.Va.hasOwnProperty(_0x2e5684) ? this.Va[_0x2e5684] : this.Wa;
            };
            _0x3e541f.prototype.ob = function (_0x595bfd) {
              return this.Ja.hasOwnProperty(_0x595bfd) ? this.Ja[_0x595bfd] : this.Ka;
            };
            _0x3e541f.prototype.pb = function (_0x320987) {
              return this.La.hasOwnProperty(_0x320987) ? this.La[_0x320987] : this.Ma;
            };
            _0x3e541f.cb = function () {
              function _0x4eb02b(_0x208dde, _0x6a9a32, _0x35863a) {
                this.qb = _0x208dde;
                this.rb = _0x6a9a32;
                this.sb = _0x35863a;
              }
              return _0x4eb02b;
            }();
            _0x3e541f.ab = function () {
              function _0x1b2c5e(_0x2a96b5, _0x1f4dc7, _0x11dec4) {
                this.tb = _0x2a96b5;
                this.ub = _0x1f4dc7;
                this.vb = _0x11dec4;
              }
              return _0x1b2c5e;
            }();
            _0x3e541f.db = function () {
              function _0x46037d(_0x442331) {
                this.ub = _0x442331;
              }
              return _0x46037d;
            }();
            _0x3e541f.Za = function () {
              function _0x4bdc93(_0x27d933, _0x327d2d) {
                this.ub = _0x27d933;
                this.vb = _0x327d2d;
              }
              return _0x4bdc93;
            }();
            _0x3e541f.bb = function () {
              function _0x3df820(_0x2862a0) {
                this.ub = _0x2862a0;
              }
              return _0x3df820;
            }();
            return _0x3e541f;
          }();
          _0x5408a7._a = function () {
            function _0x40934d() {
              var _0x14b5d6 = _0x587230.BaseTexture.from("/images/wear-ability.png");
              for (var _0x469f71 = 0x1; _0x469f71 < 0xa; _0x469f71++) {
                this['vb' + _0x469f71] = new _0x5408a7.la('emoji_' + _0x469f71, _0x14b5d6, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
              }
              this.wb = new _0x5408a7.la("magnet_ability", _0x14b5d6, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
              this.xb = new _0x5408a7.la("velocity_ability", _0x14b5d6, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
              this.yb = new _0x5408a7.la('flex_ability', _0x14b5d6, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
              var _0x469f71 = _0x587230.BaseTexture.from("/images/def-look.png");
              var _0x4d7d7e = new _0x5408a7.la("def_eyes", _0x469f71, 0x0, 0x0, 0x2a, 0x50, 0x4b, 0x40, 0x80, 0x80);
              var _0xd36c62 = new _0x5408a7.la("def_mouth", _0x469f71, 0x2e, 0x0, 0x14, 0x30, 0x6d, 0x3f, 0x80, 0x80);
              var _0x194254 = new _0x5408a7.la("def_skin_glow", _0x469f71, 0x46, 0x0, 0x20, 0x20, 0x0, 0x0, 0x0, 0x0);
              var _0x47ed3d = new _0x5408a7.la('def_skin_base', _0x469f71, 0x2e, 0x34, 0x40, 0x40, 0x0, 0x0, 0x0, 0x0);
              var _0x3ae21b = _0x5408a7.Ga.eb(_0x47ed3d, _0x194254, _0x4d7d7e, _0xd36c62);
              _wwc.mySkin = _0x3ae21b;
              this.zb = new _0x5408a7.Ab({}, _0x3ae21b);
              this.Bb = -0x2710;
              this.Cb = -0x2710;
              this.Db = function () {
                var _0x324bf2 = window.document.createElement("canvas");
                _0x324bf2.width = 0x50;
                _0x324bf2.height = 0x50;
                return {
                  'Eb': _0x324bf2,
                  'Fb': _0x324bf2.getContext('2d'),
                  'oa': new _0x587230.Texture(_0x587230.BaseTexture.from(_0x324bf2))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            _0x40934d.$a = _0x5408a7.la.Ca();
            _0x40934d.prototype.ha = function () {};
            _0x40934d.prototype.Ib = function (_0x571c0f, _0x21f8ab, _0x205ac1) {
              var _0x390725 = this;
              var _0x534475 = this.zb.Jb();
              if (_0x534475 > 0x0 && Date.now() - this.Bb < 0x124f80) {
                return void (null != _0x571c0f && _0x571c0f());
              }
              if (null != this.Gb && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 0x493e0) {
                  return void (null != _0x571c0f && _0x571c0f());
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var _0x3068c3 = new _0x5408a7.Mb(_0x534475);
              _0x3068c3.Nb(function (_0x1e86b4, _0x279052) {
                if (_0x3068c3 === _0x390725.Gb && null != _0x205ac1) {
                  _0x205ac1(_0x1e86b4, _0x279052);
                }
              });
              _0x3068c3.Ob(function (_0x2f7a04) {
                if (_0x3068c3 === _0x390725.Gb && null != _0x21f8ab) {
                  _0x21f8ab(_0x2f7a04);
                }
              });
              _0x3068c3.Pb(function () {
                if (_0x3068c3 === _0x390725.Gb && null != _0x21f8ab) {
                  _0x21f8ab(new Error());
                }
              });
              _0x3068c3.Qb(function () {
                if (_0x3068c3 === _0x390725.Gb && null != _0x571c0f) {
                  _0x571c0f();
                }
              });
              _0x3068c3.Rb(function (_0x520031) {
                if (_0x3068c3 === _0x390725.Gb) {
                  _0x390725.Cb = Date.now();
                  _0x390725.Gb = null;
                  _0x390725.Sb();
                  _0x390725.zb.Ub().Fa();
                  _0x390725.zb = _0x520031;
                  if (null != _0x571c0f) {
                    _0x571c0f();
                  }
                  return void _0x390725.Tb();
                }
                try {
                  _0x520031.Ub().Fa();
                } catch (_0x32ee50) {}
              });
              _0x3068c3.Vb();
              this.Bb = Date.now();
              this.Gb = _0x3068c3;
            };
            _0x40934d.prototype.Sb = function () {};
            _0x40934d.prototype.Wb = function () {
              return this.zb.Jb() > 0x0;
            };
            _0x40934d.prototype.Xb = function () {
              return this.zb.Yb();
            };
            _0x40934d.prototype.Zb = function () {
              return this.Db;
            };
            _0x40934d.prototype.$b = function (_0x469ebe) {
              this.Hb.push(_0x469ebe);
            };
            _0x40934d.prototype.Tb = function () {
              for (var _0x3e5a0a = 0x0; _0x3e5a0a < this.Hb.length; _0x3e5a0a++) {
                this.Hb[_0x3e5a0a]();
              }
            };
            _0x40934d.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return _0x40934d;
          }();
          _0x5408a7._b = function () {
            function _0xee9926(_0x518ccc) {
              this.ac = _0x518ccc;
            }
            _0xee9926.prototype.bc = function (_0x392a14) {
              return this.ac[_0x392a14];
            };
            _0xee9926.cc = function () {
              function _0x1d0569() {
                this.dc = [];
              }
              _0x1d0569.prototype.ec = function (_0x225c2f, _0x1fc9d6) {
                for (var _0x547c2d = 0x0; _0x547c2d < this.dc.length; _0x547c2d++) {
                  if (this.dc[_0x547c2d].fc === _0x225c2f) {
                    throw new Error();
                  }
                }
                this.dc.push(new _0xee9926.gc(_0x225c2f, _0x1fc9d6));
                return this;
              };
              _0x1d0569.prototype.hc = function () {
                var _0x3d468b = 0x0;
                for (var _0x5916af = 0x0; _0x5916af < this.dc.length; _0x5916af++) {
                  _0x3d468b += this.dc[_0x5916af].ic;
                }
                var _0xc3e852 = {};
                var _0x5728c2 = 0x0;
                for (var _0x232d04 = 0x0; _0x232d04 < this.dc.length; _0x232d04++) {
                  var _0x29b777 = this.dc[_0x232d04];
                  _0x29b777.ic = _0x29b777.ic / _0x3d468b;
                  _0x29b777.jc = _0x5728c2;
                  _0x29b777.kc = _0x5728c2 + _0x29b777.ic;
                  _0x5728c2 = _0x29b777.kc;
                  _0xc3e852[_0x29b777.fc] = _0x29b777;
                }
                return new _0xee9926(_0xc3e852);
              };
              return _0x1d0569;
            }();
            _0xee9926.gc = function () {
              function _0x2d8f96(_0x2c5560, _0x25348d) {
                this.fc = _0x2c5560;
                this.ic = _0x25348d;
                this.jc = 0x0;
                this.kc = 0x0;
              }
              _0x2d8f96.prototype.lc = function (_0xdee3c0) {
                return this.jc + (this.kc - this.jc) * _0xdee3c0;
              };
              return _0x2d8f96;
            }();
            return _0xee9926;
          }();
          _0x5408a7.WormSpriteTree = function () {
            function _0xf60b69() {
              this.nc = new _0x587230.Container();
              this.nc.sortableChildren = true;
              this.oc = new _0x3cdb7b();
              this.oc.zIndex = 1.6;
              this.pc = 0x0;
              this.qc = new Array(0x31d);
              this.qc[0x0] = this.rc(0x0, new _0x5408a7.sc(), new _0x5408a7.sc());
              for (var _0x397f60 = 0x1; _0x397f60 < 0x31d; _0x397f60++) {
                this.qc[_0x397f60] = this.rc(_0x397f60, new _0x5408a7.sc(), new _0x5408a7.sc());
              }
              this.tc = 0x0;
              this.uc = 0x0;
              this.vc = 0x0;
            }
            var _0x4d1100 = -0.06640625;
            var _0x8d8be6 = -0.03515625;
            var _0x183846 = -0.0625;
            var _0x4832a1 = 0x3 * _0x4d1100 + 0.84375;
            var _0xafffd3 = 0.2578125 - 0x3 * _0x4d1100;
            var _0x295bec = _0x4d1100 + _0x8d8be6;
            var _0xb92347 = _0x183846 + _0x183846;
            var _0xda7ea2 = 0x3 * _0x8d8be6 + 0.2578125;
            var _0x42f4d0 = 0.84375 - 0x3 * _0x8d8be6;
            var _0x4afcaa = _0x8d8be6 + _0x4d1100;
            _0xf60b69.wc = 0x31d;
            _0xf60b69.prototype.rc = function (_0x4d41c6, _0x53c965, _0x2280ce) {
              var _0x3fb06c = new _0x3b8f93(_0x53c965, _0x2280ce);
              _0x53c965.xc.zIndex = 0.001 * (0x2 * (0x31d - _0x4d41c6) + 0x1 + 0x3);
              _0x2280ce.xc.zIndex = 0.001 * (0x2 * (0x31d - _0x4d41c6) - 0x2 + 0x3);
              return _0x3fb06c;
            };
            _0xf60b69.prototype.yc = function (_0x7b0b50, _0x5b2ee6, _0x42e19d, _0x5e5d5, _0x42a7aa, _0x2070be, _0x3a04b2, _0x44bd94) {
              var _0x1d41b3 = _0x42e19d.ub;
              var _0x4489a4 = _0x7b0b50 === _0x5408a7.Ac.zc ? _0x5b2ee6.rb.vb : _0x42e19d.vb;
              if (_0x1d41b3.length > 0x0 && _0x4489a4.length > 0x0) {
                for (var _0x6d887d = 0x0; _0x6d887d < this.qc.length; _0x6d887d++) {
                  this.qc[_0x6d887d].Cc.Bc(_0x1d41b3[_0x6d887d % _0x1d41b3.length], _0x6d887d % _0x1d41b3.length, _0x6d887d);
                  this.qc[_0x6d887d].Dc.Bc(_0x6d887d == 0x0 && _0x42e19d.vbb ? _0x42e19d.vbb : _0x4489a4[_0x6d887d % _0x4489a4.length], _0x6d887d % _0x1d41b3.length, _0x6d887d);
                  this.qc[_0x6d887d].Cc.Ec(_0x44bd94);
                  this.qc[_0x6d887d].Dc.Ec(_0x44bd94);
                }
              }
              this.oc.yc(_0x5e5d5, _0x42a7aa, _0x2070be, _0x3a04b2);
            };
            var _0x3cdb7b = function () {
              var _0x3304b1 = _0x318912.M(_0x587230.Container, function () {
                _0x587230.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new _0x587230.Container();
                this.Kc = [];
                this.message = new _0x587230.Container();
                for (var _0x2bb337 = 0x0; _0x2bb337 < 0x4; _0x2bb337++) {
                  var _0xec7b43 = new _0x5408a7.sc();
                  _0xec7b43.Bc(_0x1f32cc.Lc.wb);
                  this.Jc.addChild(_0xec7b43.xc);
                  this.Kc.push(_0xec7b43);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new _0x5408a7.sc();
                this.Nc.Bc(_0x1f32cc.Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
              });
              _0x3304b1.prototype.yc = function (_0x53bd0a, _0x3881aa, _0xd6cca0, _0x4ea885) {
                this.Pc(0.002, this.Fc, _0x53bd0a.ub);
                this.Pc(0.003, this.Gc, _0x3881aa.ub);
                this.Pc(0.004, this.Ic, _0x4ea885.ub);
                this.Pc(0.005, this.Hc, _0xd6cca0.ub);
              };
              _0x3304b1.prototype.Pc = function (_0x427421, _0x35b4ce, _0x26fcb3) {
                while (_0x26fcb3.length > _0x35b4ce.length) {
                  var _0xfdc53d = new _0x5408a7.sc();
                  _0x35b4ce.push(_0xfdc53d);
                  this.addChild(_0xfdc53d.Qc());
                }
                while (_0x26fcb3.length < _0x35b4ce.length) {
                  _0x35b4ce.pop().Rc();
                }
                var _0xfb9fa8 = _0x427421;
                for (var _0x4a7cf8 = 0x0; _0x4a7cf8 < _0x26fcb3.length; _0x4a7cf8++) {
                  _0xfb9fa8 += 0.0001;
                  var _0x557412 = _0x35b4ce[_0x4a7cf8];
                  _0x557412.Bc(_0x26fcb3[_0x4a7cf8]);
                  _0x557412.xc.zIndex = _0xfb9fa8;
                }
              };
              _0x3304b1.prototype.Sc = function (_0x1a40a0, _0xcd539, _0xfbcb52, _0x4af430) {
                this.visible = true;
                this.position.set(_0x1a40a0, _0xcd539);
                this.rotation = _0x4af430;
                for (var _0xe22ea5 = 0x0; _0xe22ea5 < this.Fc.length; _0xe22ea5++) {
                  this.Fc[_0xe22ea5].Tc(_0xfbcb52);
                }
                for (var _0x5bfa7d = 0x0; _0x5bfa7d < this.Gc.length; _0x5bfa7d++) {
                  this.Gc[_0x5bfa7d].Tc(_0xfbcb52);
                }
                for (var _0x1b35a7 = 0x0; _0x1b35a7 < this.Hc.length; _0x1b35a7++) {
                  this.Hc[_0x1b35a7].Tc(_0xfbcb52);
                }
                for (var _0x372685 = 0x0; _0x372685 < this.Ic.length; _0x372685++) {
                  this.Ic[_0x372685].Tc(_0xfbcb52);
                }
              };
              _0x3304b1.prototype.Uc = function () {
                this.visible = false;
              };
              _0x3304b1.prototype.VcAc = function (_0x394960, _0x28322a, _0x119559, _0x1e6aab, _0xb32fee) {
                this.message.visible = true;
                this.Mc2.Tc(_0x28322a);
              };
              _0x3304b1.prototype.VcUn = function () {
                this.message.visible = false;
              };
              _0x3304b1.prototype.Vc = function (_0x4a0936, _0x1ff20a, _0x15361c, _0x4ab153) {
                this.Jc.visible = true;
                var _0x1c96f4 = _0x15361c / 0x3e8;
                var _0x12094f = 0x1 / this.Kc.length;
                for (var _0xca43de = 0x0; _0xca43de < this.Kc.length; _0xca43de++) {
                  var _0x106d31 = 0x1 - (_0x1c96f4 + _0x12094f * _0xca43de) % 0x1;
                  this.Kc[_0xca43de].xc.alpha = 0x1 - _0x106d31;
                  this.Kc[_0xca43de].Tc(_0x1ff20a * (0.5 + 4.5 * _0x106d31));
                }
              };
              _0x3304b1.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              _0x3304b1.prototype.Wc = function (_0x5769c6, _0x122442, _0x3fbfbe, _0x58cc65) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x318912.Q(this.Nc.xc.alpha, _0x5769c6.Xc ? 0.9 : 0.2, _0x58cc65, 0.0025);
                this.Nc.Tc(_0x122442);
              };
              _0x3304b1.prototype.WXX = function (_0x42f4ba, _0x25cbaa, _0x14aac8, _0x2db3fa) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x318912.Q(this.Nc.xc.alpha, _0x42f4ba.Xc ? 0.9 : 0.2, _0x2db3fa, 0.0025);
                this.Nc.Tc(_0x25cbaa);
              };
              _0x3304b1.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return _0x3304b1;
            }();
            _0xf60b69.prototype.Yc = function (_0x33a777) {
              return this.uc + this.vc * Math.sin(_0x33a777 * 3.14159 - this.tc);
            };
            _0xf60b69.prototype.Zc = function (_0x5455cb, _0x4b9dd9, _0x2af724, _0x57fa20) {
              var _0x406b10 = 0x2 * _0x5455cb.$c;
              var _0x1048b4 = _0x5455cb._c;
              var _0x11629b = _0x5455cb.ad;
              var _0x481be6 = 0x4 * _0x11629b - 0x3;
              this.tc = _0x4b9dd9 / 0x190 * Math.PI;
              this.uc = 1.5 * _0x406b10;
              this.vc = 0.15 * _0x406b10 * _0x5455cb.bd;
              var _0x15720f;
              var _0x5ce931;
              var _0x305bfa;
              var _0x38f3fd;
              var _0x4f83b4;
              var _0xa052;
              var _0x453b05;
              var _0x2b689b;
              _0x5ce931 = _0x1048b4[0x0];
              _0xa052 = _0x1048b4[0x1];
              if (_0x57fa20(_0x5ce931, _0xa052)) {
                _0x305bfa = _0x1048b4[0x2];
                _0x453b05 = _0x1048b4[0x3];
                _0x38f3fd = _0x1048b4[0x4];
                _0x2b689b = _0x1048b4[0x5];
                var _0x302ed6 = Math.atan2(_0x2b689b + 0x2 * _0xa052 - 0x3 * _0x453b05, _0x38f3fd + 0x2 * _0x5ce931 - 0x3 * _0x305bfa);
                this.oc.Sc(_0x5ce931, _0xa052, _0x406b10, _0x302ed6);
                this.qc[0x0].Sc(_0x5ce931, _0xa052, _0x406b10, this.Yc(0x0), _0x302ed6);
                this.qc[0x1].Sc(_0x4832a1 * _0x5ce931 + _0xafffd3 * _0x305bfa + _0x295bec * _0x38f3fd, _0x4832a1 * _0xa052 + _0xafffd3 * _0x453b05 + _0x295bec * _0x2b689b, _0x406b10, this.Yc(0x1), _0x3b8f93.cd(this.qc[0x0], this.qc[0x2]));
                this.qc[0x2].Sc(0.375 * _0x5ce931 + 0.75 * _0x305bfa + _0xb92347 * _0x38f3fd, 0.375 * _0xa052 + 0.75 * _0x453b05 + _0xb92347 * _0x2b689b, _0x406b10, this.Yc(0x2), _0x3b8f93.cd(this.qc[0x1], this.qc[0x3]));
                this.qc[0x3].Sc(_0xda7ea2 * _0x5ce931 + _0x42f4d0 * _0x305bfa + _0x4afcaa * _0x38f3fd, _0xda7ea2 * _0xa052 + _0x42f4d0 * _0x453b05 + _0x4afcaa * _0x2b689b, _0x406b10, this.Yc(0x3), _0x3b8f93.cd(this.qc[0x2], this.qc[0x4]));
              } else {
                this.oc.Uc();
                this.qc[0x0].Uc();
                this.qc[0x1].Uc();
                this.qc[0x2].Uc();
                this.qc[0x3].Uc();
              }
              var _0x561cce = 0x4;
              var _0x336a52 = 0x2;
              var _0x3c0d7b = 0x2 * _0x11629b - 0x4;
              while (_0x336a52 < _0x3c0d7b) {
                _0x5ce931 = _0x1048b4[_0x336a52];
                _0xa052 = _0x1048b4[_0x336a52 + 0x1];
                if (_0x57fa20(_0x5ce931, _0xa052)) {
                  _0x15720f = _0x1048b4[_0x336a52 - 0x2];
                  _0x4f83b4 = _0x1048b4[_0x336a52 - 0x1];
                  _0x305bfa = _0x1048b4[_0x336a52 + 0x2];
                  _0x453b05 = _0x1048b4[_0x336a52 + 0x3];
                  _0x38f3fd = _0x1048b4[_0x336a52 + 0x4];
                  _0x2b689b = _0x1048b4[_0x336a52 + 0x5];
                  this.qc[_0x561cce].Sc(_0x5ce931, _0xa052, _0x406b10, this.Yc(_0x561cce), _0x3b8f93.cd(this.qc[_0x561cce - 0x1], this.qc[_0x561cce + 0x1]));
                  _0x561cce++;
                  this.qc[_0x561cce].Sc(_0x4d1100 * _0x15720f + 0.84375 * _0x5ce931 + 0.2578125 * _0x305bfa + _0x8d8be6 * _0x38f3fd, _0x4d1100 * _0x4f83b4 + 0.84375 * _0xa052 + 0.2578125 * _0x453b05 + _0x8d8be6 * _0x2b689b, _0x406b10, this.Yc(_0x561cce), _0x3b8f93.cd(this.qc[_0x561cce - 0x1], this.qc[_0x561cce + 0x1]));
                  _0x561cce++;
                  this.qc[_0x561cce].Sc(_0x183846 * _0x15720f + 0.5625 * _0x5ce931 + 0.5625 * _0x305bfa + _0x183846 * _0x38f3fd, _0x183846 * _0x4f83b4 + 0.5625 * _0xa052 + 0.5625 * _0x453b05 + _0x183846 * _0x2b689b, _0x406b10, this.Yc(_0x561cce), _0x3b8f93.cd(this.qc[_0x561cce - 0x1], this.qc[_0x561cce + 0x1]));
                  _0x561cce++;
                  this.qc[_0x561cce].Sc(_0x8d8be6 * _0x15720f + 0.2578125 * _0x5ce931 + 0.84375 * _0x305bfa + _0x4d1100 * _0x38f3fd, _0x8d8be6 * _0x4f83b4 + 0.2578125 * _0xa052 + 0.84375 * _0x453b05 + _0x4d1100 * _0x2b689b, _0x406b10, this.Yc(_0x561cce), _0x3b8f93.cd(this.qc[_0x561cce - 0x1], this.qc[_0x561cce + 0x1]));
                  _0x561cce++;
                } else {
                  this.qc[_0x561cce].Uc();
                  _0x561cce++;
                  this.qc[_0x561cce].Uc();
                  _0x561cce++;
                  this.qc[_0x561cce].Uc();
                  _0x561cce++;
                  this.qc[_0x561cce].Uc();
                  _0x561cce++;
                }
                _0x336a52 += 0x2;
              }
              _0x5ce931 = _0x1048b4[0x2 * _0x11629b - 0x4];
              _0xa052 = _0x1048b4[0x2 * _0x11629b - 0x3];
              if (_0x57fa20(_0x5ce931, _0xa052)) {
                _0x15720f = _0x1048b4[0x2 * _0x11629b - 0x6];
                _0x4f83b4 = _0x1048b4[0x2 * _0x11629b - 0x5];
                _0x305bfa = _0x1048b4[0x2 * _0x11629b - 0x2];
                _0x453b05 = _0x1048b4[0x2 * _0x11629b - 0x1];
                this.qc[_0x481be6 - 0x5].Sc(_0x5ce931, _0xa052, _0x406b10, this.Yc(_0x481be6 - 0x5), _0x3b8f93.cd(this.qc[_0x481be6 - 0x6], this.qc[_0x481be6 - 0x4]));
                this.qc[_0x481be6 - 0x4].Sc(_0x4afcaa * _0x15720f + _0x42f4d0 * _0x5ce931 + _0xda7ea2 * _0x305bfa, _0x4afcaa * _0x4f83b4 + _0x42f4d0 * _0xa052 + _0xda7ea2 * _0x453b05, _0x406b10, this.Yc(_0x481be6 - 0x4), _0x3b8f93.cd(this.qc[_0x481be6 - 0x5], this.qc[_0x481be6 - 0x3]));
                this.qc[_0x481be6 - 0x3].Sc(_0xb92347 * _0x15720f + 0.75 * _0x5ce931 + 0.375 * _0x305bfa, _0xb92347 * _0x4f83b4 + 0.75 * _0xa052 + 0.375 * _0x453b05, _0x406b10, this.Yc(_0x481be6 - 0x3), _0x3b8f93.cd(this.qc[_0x481be6 - 0x4], this.qc[_0x481be6 - 0x2]));
                this.qc[_0x481be6 - 0x2].Sc(_0x295bec * _0x15720f + _0xafffd3 * _0x5ce931 + _0x4832a1 * _0x305bfa, _0x295bec * _0x4f83b4 + _0xafffd3 * _0xa052 + _0x4832a1 * _0x453b05, _0x406b10, this.Yc(_0x481be6 - 0x2), _0x3b8f93.cd(this.qc[_0x481be6 - 0x3], this.qc[_0x481be6 - 0x1]));
                this.qc[_0x481be6 - 0x1].Sc(_0x305bfa, _0x453b05, _0x406b10, this.Yc(_0x481be6 - 0x1), _0x3b8f93.cd(this.qc[_0x481be6 - 0x2], this.qc[_0x481be6 - 0x1]));
              } else {
                this.qc[_0x481be6 - 0x5].Uc();
                this.qc[_0x481be6 - 0x4].Uc();
                this.qc[_0x481be6 - 0x3].Uc();
                this.qc[_0x481be6 - 0x2].Uc();
                this.qc[_0x481be6 - 0x1].Uc();
              }
              if (this.pc === 0x0 && _0x481be6 > 0x0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0x0 && _0x481be6 === 0x0) {
                _0x318912.U(this.oc);
              }
              while (this.pc < _0x481be6) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 0x1;
              }
              while (this.pc > _0x481be6) {
                this.pc -= 0x1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var _0x7ec28e = _0x5455cb.dd[_0x5408a7.fd.ed];
              if (this.qc[0x0].gd() && _0x7ec28e && _0x7ec28e.hd) {
                this.oc.Vc(_0x5455cb, _0x406b10, _0x4b9dd9, _0x2af724);
              } else {
                this.oc.Mc();
              }
              var _0x40c36c = _0x5455cb.dd[_0x5408a7.fd.jd];
              if (this.qc[0x0].gd() && _0x40c36c && _0x40c36c.hd) {
                this.oc.Wc(_0x5455cb, _0x406b10, _0x4b9dd9, _0x2af724);
              } else {
                this.oc.Oc();
              }
            };
            var _0x3b8f93 = function () {
              function _0x272f4b(_0x45f4c3, _0x53780a) {
                this.Cc = _0x45f4c3;
                this.Cc.kd(false);
                this.Dc = _0x53780a;
                this.Dc.kd(false);
                this.ev = null;
              }
              _0x272f4b.prototype.Sc = function (_0x1c4fa2, _0x130551, _0x3dd3a7, _0x10ba58, _0x20cd00) {
                this.Cc.kd(true);
                this.Cc.ld(_0x1c4fa2, _0x130551);
                this.Cc.Tc(_0x3dd3a7);
                this.Cc.md(_0x20cd00);
                this.Dc.kd(true);
                this.Dc.ld(_0x1c4fa2, _0x130551);
                this.Dc.Tc(_0x10ba58);
                this.Dc.md(_0x20cd00);
              };
              _0x272f4b.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              _0x272f4b.prototype.gd = function () {
                return this.Cc.gd();
              };
              _0x272f4b.cd = function (_0x3f0d05, _0x767493) {
                return Math.atan2(_0x3f0d05.Cc.xc.position.y - _0x767493.Cc.xc.position.y, _0x3f0d05.Cc.xc.position.x - _0x767493.Cc.xc.position.x);
              };
              return _0x272f4b;
            }();
            return _0xf60b69;
          }();
          _0x5408a7.fd = function () {
            function _0x4ca3c5(_0x4f4090) {
              this.nd = _0x4f4090;
              this.hd = false;
              this.od = 0x1;
            }
            _0x4ca3c5.jd = 0x0;
            _0x4ca3c5.pd = 0x1;
            _0x4ca3c5.ed = 0x2;
            _0x4ca3c5.qd = 0x6;
            _0x4ca3c5.rd = 0x3;
            _0x4ca3c5.sd = 0x4;
            _0x4ca3c5.td = 0x5;
            return _0x4ca3c5;
          }();
          _0x5408a7.Ab = function () {
            function _0x2609f6(_0x5c176f, _0x20a472) {
              this.ud = _0x5c176f;
              this.vd = _0x20a472;
            }
            _0x2609f6.wd = new _0x2609f6({}, _0x5408a7.Ga.Ca());
            _0x2609f6.prototype.Jb = function () {
              return this.ud.revision;
            };
            _0x2609f6.prototype.Yb = function () {
              _0x167f4e.Jb();
              return this.ud;
            };
            _0x2609f6.prototype.Ub = function () {
              return this.vd;
            };
            return _0x2609f6;
          }();
          _0x5408a7.Mb = function () {
            function _0x115ddc(_0x435c28) {
              this.xd = function () {
                ++_0x115ddc.yd;
                return function (_0x3df19a, _0x41ed95) {};
              }();
              this.zd = _0x435c28;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            _0x115ddc.Id = {
              'Jd': "0x0",
              'Kd': "0x1",
              'Ld': '0x2',
              'Md': "0x3",
              'Nd': '0x4'
            };
            _0x115ddc.yd = 0x186a0;
            _0x115ddc.Od = new _0x5408a7._b.cc().ec(_0x115ddc.Id.Jd, 0x1).ec(_0x115ddc.Id.Kd, 0xa).ec(_0x115ddc.Id.Ld, 0x32).ec(_0x115ddc.Id.Md, 0xf).ec(_0x115ddc.Id.Nd, 0x5).hc();
            _0x115ddc.prototype.Rb = function (_0x5081e1) {
              this.Ad = _0x5081e1;
            };
            _0x115ddc.prototype.Qb = function (_0x41fec6) {
              this.Bd = _0x41fec6;
            };
            _0x115ddc.prototype.Ob = function (_0x27cff0) {
              this.Cd = _0x27cff0;
            };
            _0x115ddc.prototype.Pb = function (_0x378d35) {
              this.Dd = _0x378d35;
            };
            _0x115ddc.prototype.Nb = function (_0x3a5453) {
              this.Ed = _0x3a5453;
            };
            _0x115ddc.prototype.Kb = function () {
              return this.Hd;
            };
            _0x115ddc.prototype.Lb = function () {
              this.Fd = true;
            };
            _0x115ddc.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  return void this.Pd();
                }
                this.Qd();
              }
            };
            _0x115ddc.prototype.Qd = function () {
              function _0x1260dd(_0x375058) {
                var _0x30c048 = _0x115ddc.Id.Jd;
                _0x12e14b.Rd(_0x30c048, _0x115ddc.Od.bc(_0x30c048).lc(_0x375058));
              }
              var _0x12e14b = this;
              if (this.Fd) {
                return void this.Pd();
              }
              $.ajax({
                'type': 'GET',
                'url': _0x318912.a.c + '/dynamic/assets/revision.json',
                'xhrFields': {
                  'onprogress': function _0x1488bd(_0x2230f6) {
                    if (_0x2230f6.lengthComputable) {
                      _0x1260dd(_0x2230f6.loaded / _0x2230f6.total);
                    }
                  }
                }
              }).fail(function () {
                _0x12e14b.Sd(new Error());
              }).done(function (_0x315cee) {
                if (_0x315cee <= _0x12e14b.zd) {
                  return void _0x12e14b.Td();
                }
                _0x12e14b.Ud();
              });
            };
            _0x115ddc.prototype.Ud = _0x2b80f8(_0x49536e().mark(function _0x4abec1() {
              var _0x43c3c5;
              var _0x30e1c2;
              var _0x111642;
              return _0x49536e().wrap(function _0x519f7e(_0x1dd3ec) {
                while (0x1) {
                  switch (_0x1dd3ec.prev = _0x1dd3ec.next) {
                    case 0x0:
                      _0x43c3c5 = function _0x1d450b(_0x412e77) {
                        var _0x4f1243 = _0x115ddc.Id.Kd;
                        _0x30e1c2.Rd(_0x4f1243, _0x115ddc.Od.bc(_0x4f1243).lc(_0x412e77));
                      };
                      _0x30e1c2 = this;
                      if (!this.Fd) {
                        _0x1dd3ec.next = 0x4;
                        break;
                      }
                      return _0x1dd3ec.abrupt("return", void this.Pd());
                    case 0x4:
                      _0x1dd3ec.next = 0x6;
                      return fetch(URLSERV_WORMWORLD + "/version");
                    case 0x6:
                      _0x111642 = _0x1dd3ec.sent;
                      _0x1dd3ec.next = 0x9;
                      return _0x111642.json();
                    case 0x9:
                      _0x111642 = _0x1dd3ec.sent;
                      localStorage.setItem('wwc_version', _0x111642);
                      if (_0x453fee != _0x111642) {
                        $.ajax({
                          'type': 'GET',
                          'url': _0x318912.a.c + "/dynamic/assets/registry.json",
                          'xhrFields': {
                            'onprogress': function _0x229007(_0x170c18) {
                              if (_0x170c18.lengthComputable) {
                                _0x43c3c5(_0x170c18.loaded / _0x170c18.total);
                              }
                            }
                          }
                        }).fail(function () {
                          _0x30e1c2.Sd(new Error());
                        }).done(function () {
                          var _0x5a9b75 = _0x2b80f8(_0x49536e().mark(function _0x556c93(_0x1cb206) {
                            return _0x49536e().wrap(function _0x4f957c(_0x37a589) {
                              while (0x1) {
                                switch (_0x37a589.prev = _0x37a589.next) {
                                  case 0x0:
                                    _0x37a589.next = 0x2;
                                    return _0x167f4e.registry(_0x1cb206);
                                  case 0x2:
                                    _0x1cb206 = _0x37a589.sent;
                                    localStorage.setItem("wwc_config", JSON.stringify(_0x1cb206));
                                    _0x30e1c2.Vd(_0x1cb206, _0x115ddc);
                                  case 0x5:
                                  case "end":
                                    return _0x37a589.stop();
                                }
                              }
                            }, _0x556c93);
                          }));
                          return function (_0xcd7ed6) {
                            return _0x5a9b75.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          _0x5740e3 = JSON.parse(_0x5740e3);
                          _0x43c3c5(0x1);
                          _0x30e1c2.Vd(_0x5740e3, _0x115ddc);
                        } catch (_0x36a334) {
                          console.log("ConfigError", _0x36a334);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem('wwc_config');
                        }
                      }
                    case 0xc:
                    case "end":
                      return _0x1dd3ec.stop();
                  }
                }
              }, _0x4abec1, this);
            }));
            _0x115ddc.prototype.Vd = _0x167f4e.Vd || function (_0x1ca064) {
              function _0x32648f(_0x2f362a) {
                var _0x37d674 = _0x115ddc.Id.Ld;
                _0x3a98ba.Rd(_0x37d674, _0x115ddc.Od.bc(_0x37d674).lc(_0x2f362a));
              }
              var _0x3a98ba = this;
              if (this.Fd) {
                return void this.Pd();
              }
              var _0x3aedc0 = [];
              var _0xa1720f = [];
              var _0xd166ba = 0x0;
              for (var _0x430ccd in _0x1ca064.textureDict) if (_0x1ca064.textureDict.hasOwnProperty(_0x430ccd)) {
                var _0x3dd210 = _0x1ca064.textureDict[_0x430ccd];
                var _0x1729a7 = _0x318912.a.c + _0x3dd210.relativePath;
                var _0x1c5dc9 = _0x3dd210.fileSize;
                var _0x2fc154 = _0x3dd210.sha256;
                var _0x11e461 = new _0x115ddc.Wd(_0x430ccd, _0x1729a7, _0x1c5dc9, _0x2fc154);
                _0x3aedc0.push(_0x11e461);
                _0xa1720f.push(_0x11e461);
                _0xd166ba += _0x1c5dc9;
              }
              var _0x389955;
              var _0x1b25da = 0x0;
              var _0x3cc155 = function _0x3b8ffa(_0x38d368) {
                for (var _0x10f955 = 0x0; _0x10f955 < _0xa1720f.length; _0x10f955++) {
                  try {
                    window.URL.revokeObjectURL(_0xa1720f[_0x10f955].Xd);
                  } catch (_0x420d2e) {}
                }
                _0x3a98ba.Sd(_0x38d368);
              };
              var _0x47c7d5 = function _0x3b2df0(_0x59379f) {
                var _0x3233da = Math.floor(_0x389955.Yd * _0x59379f);
                _0x32648f((_0x1b25da + _0x3233da) / _0xd166ba);
              };
              var _0x1c9949 = function _0x463f17(_0x495a9d) {
                var _0xf1a144 = new Blob([_0x495a9d]);
                _0x389955.Xd = window.URL.createObjectURL(_0xf1a144);
                _0x1b25da += _0x389955.Yd;
                _0x3e221a();
              };
              var _0x3e221a = function _0x5bc871() {
                if (_0x1365b0 < _0xa1720f.length) {
                  _0x389955 = _0xa1720f[_0x1365b0++];
                  return void _0x3a98ba.Zd(_0x389955, _0x3cc155, _0x1c9949, _0x47c7d5);
                }
                setTimeout(function () {
                  return _0x3a98ba.$d(_0x1ca064, _0x3aedc0);
                }, 0x0);
              };
              var _0x1365b0 = 0x0;
              _0x3e221a();
            };
            _0x115ddc.prototype.Zd = _0x167f4e.Zd || function (_0x189a43, _0x1e98e6, _0xbb988d, _0x34d7b3) {
              $.ajax({
                'type': 'GET',
                'url': _0x189a43._d,
                'xhrFields': {
                  'responseType': "arraybuffer",
                  'onprogress': function _0x4c0244(_0xc9de97) {
                    if (_0xc9de97.lengthComputable) {
                      _0x34d7b3(_0xc9de97.loaded / _0xc9de97.total);
                    }
                  }
                }
              }).fail(function () {
                _0x1e98e6(new Error());
              }).done(function (_0x38a257) {
                _0xbb988d(_0x38a257);
              });
            };
            _0x115ddc.prototype.$d = _0x167f4e.$d || function (_0x4175d3, _0x305951) {
              function _0x2a69d7(_0x191a80) {
                var _0x281be4 = _0x115ddc.Id.Md;
                _0x5017bf.Rd(_0x281be4, _0x115ddc.Od.bc(_0x281be4).lc(_0x191a80));
              }
              var _0x5017bf = this;
              if (this.Fd) {
                return void this.Pd();
              }
              var _0x8de21b;
              var _0x4c927a;
              var _0x31b9e0 = {};
              var _0x332520 = function _0x30dd75() {
                for (var _0x412c8e = 0x0; _0x412c8e < _0x305951.length; _0x412c8e++) {
                  try {
                    window.URL.revokeObjectURL(_0x305951[_0x412c8e].Xd);
                  } catch (_0x315065) {}
                }
                _0x5017bf.Sd(new Error());
              };
              var _0x4094d3 = function _0x5e8441() {
                _0x2a69d7(_0x2768e1 / _0x305951.length);
                _0x31b9e0[_0x8de21b.ae] = new _0x5408a7.be(_0x8de21b.Xd, _0x4c927a);
                _0x13d80f();
              };
              var _0x13d80f = function _0x42c0fd() {
                if (_0x2768e1 < _0x305951.length) {
                  _0x8de21b = _0x305951[_0x2768e1++];
                  _0x4c927a = PIXI.BaseTexture.from(_0x8de21b.Xd);
                  _0x4c927a.on("error", _0x332520);
                  return void _0x4c927a.on("loaded", _0x4094d3);
                }
                setTimeout(function () {
                  return _0x5017bf.ce(_0x4175d3, _0x31b9e0);
                }, 0x0);
              };
              var _0x2768e1 = 0x0;
              _0x13d80f();
            };
            _0x115ddc.prototype.ce = function (_0x1d4ba5, _0x3b939b) {
              function _0x19c5db(_0x5403e3) {
                var _0x5a5b8b = _0x115ddc.Id.Nd;
                _0x2da6b5.Rd(_0x5a5b8b, _0x115ddc.Od.bc(_0x5a5b8b).lc(_0x5403e3));
              }
              var _0x2da6b5 = this;
              var _0x232aff = {};
              var _0x3de7d9 = 0x0;
              var _0x249d4c = Object.values(_0x1d4ba5.regionDict).length;
              _0x318912._(_0x1d4ba5.regionDict, function (_0x953794, _0x31ff6b) {
                var _0x100d41 = null;
                try {
                  var _0x2e450b = null;
                  if (_0x3b939b[_0x31ff6b.texture].ev) {
                    _0x2e450b = _0x3b939b[_0x31ff6b.texture].ev;
                  }
                  var _0x5cee53 = _0x31ff6b.texture + ':' + _0x953794;
                  _0x100d41 = _0x5408a7.la.Da(_0x5cee53, _0x3b939b[_0x31ff6b.texture].oa, _0x31ff6b, _0x2e450b);
                  _0x232aff[_0x953794] = _0x100d41;
                  if (++_0x3de7d9 % 0xa == 0x0) {
                    _0x19c5db(_0x3de7d9 / _0x249d4c);
                  }
                } catch (_0x34b297) {}
              });
              var _0x3175a1 = Object.values(_0x3b939b).map(function (_0x391d28) {
                return _0x391d28.oa;
              });
              var _0x4484de = Object.values(_0x232aff);
              var _0x19697b = new _0x5408a7.Ab(_0x1d4ba5, _0x5408a7.Ga.fb(_0x1d4ba5, _0x232aff, _0x3175a1, _0x4484de));
              setTimeout(function () {
                return _0x2da6b5.de(_0x19697b);
              }, 0x0);
            };
            _0x115ddc.Wd = function () {
              function _0x4a147a(_0x193a36, _0x4b1bf9, _0x23a077, _0x4dee6a) {
                this.ae = _0x193a36;
                this._d = _0x4b1bf9;
                this.Yd = _0x23a077;
                this.ee = _0x4dee6a;
                this.Xd = '';
              }
              return _0x4a147a;
            }();
            _0x115ddc.prototype.de = function (_0x36b03c) {
              if (this.Hd) {
                return void _0x36b03c.Ub().Fa();
              }
              this.Hd = true;
              var _0x57bcca = this;
              setTimeout(function () {
                return _0x57bcca.Ad(_0x36b03c);
              }, 0x0);
            };
            _0x115ddc.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x31bda1 = this;
                setTimeout(function () {
                  return _0x31bda1.Bd();
                }, 0x0);
              }
            };
            _0x115ddc.prototype.Sd = function (_0x29b638) {
              if (!this.Hd) {
                this.Hd = true;
                var _0x170d6b = this;
                setTimeout(function () {
                  return _0x170d6b.Cd(_0x29b638);
                }, 0x0);
              }
            };
            _0x115ddc.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x18ffa3 = this;
                setTimeout(function () {
                  return _0x18ffa3.Dd();
                }, 0x0);
              }
            };
            _0x115ddc.prototype.Rd = function (_0xf6d5e4, _0x2e4b8) {
              if (!this.Hd && !this.Fd) {
                var _0x14a1bd = this;
                return _0x14a1bd.Ed(_0xf6d5e4, _0x2e4b8);
              }
            };
            return _0x115ddc;
          }();
          _0x5408a7.fe = function () {
            return {};
          }();
          _0x5408a7.ge = function () {
            function _0x3c4bce() {
              this.he = _0x5408a7.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            _0x3c4bce.prototype.ha = function () {};
            _0x3c4bce.prototype.oe = function (_0xbbf50f) {
              this.le = _0xbbf50f;
            };
            _0x3c4bce.prototype.pe = function (_0x13de18) {
              this.he = _0x13de18;
              this.qe();
            };
            _0x3c4bce.prototype.re = function (_0x195ae4) {
              this.ke = _0x195ae4;
              this.qe();
            };
            _0x3c4bce.prototype.qe = function () {};
            _0x3c4bce.prototype.se = function (_0x2e97e8, _0x47509e) {
              if (!_0x1f32cc.Lc.Wb()) {
                return null;
              }
              var _0x4b911f = _0x2e97e8[_0x47509e];
              return null == _0x4b911f || 0x0 === _0x4b911f.length ? null : _0x4b911f[Math.floor(Math.random() * _0x4b911f.length)].cloneNode();
            };
            _0x3c4bce.prototype.te = function (_0x363821, _0x4b7ccc, _0x4abe38) {
              if (this.le && !(_0x4abe38 <= 0x0)) {
                var _0x9e165d = this.se(_0x363821, _0x4b7ccc);
                if (null != _0x9e165d) {
                  _0x9e165d.volume = Math.min(0x1, _0x4abe38);
                  _0x9e165d.play();
                }
              }
            };
            _0x3c4bce.prototype.ue = function (_0x312ac4, _0x3dc2e6) {
              if (this.he.ve) {
                this.te(app.xe.we, _0x312ac4, _0x3dc2e6);
              }
            };
            _0x3c4bce.prototype.ye = function (_0xa0caf4, _0x5d5c77) {
              if (this.he.ze) {
                this.te(app.xe.Ae, _0xa0caf4, _0x5d5c77);
              }
            };
            _0x3c4bce.prototype.Be = function () {};
            _0x3c4bce.prototype.Ce = function () {};
            _0x3c4bce.prototype.De = function () {};
            _0x3c4bce.prototype.Ee = function () {};
            _0x3c4bce.prototype.Fe = function () {};
            _0x3c4bce.prototype.Ge = function () {};
            _0x3c4bce.prototype.He = function (_0xe71c7, _0x2485b9, _0x3651fb) {};
            _0x3c4bce.prototype.Ie = function (_0x29d8d1) {};
            _0x3c4bce.prototype.Je = function (_0x522a41) {};
            _0x3c4bce.prototype.Ke = function (_0x90af2c) {};
            _0x3c4bce.prototype.Le = function (_0x41fdc3) {};
            _0x3c4bce.prototype.Me = function (_0x375a28) {};
            _0x3c4bce.prototype.Ne = function (_0x1fa064) {};
            _0x3c4bce.prototype.Oe = function (_0x36944f) {};
            _0x3c4bce.prototype.Pe = function (_0x5c4cd2) {};
            _0x3c4bce.prototype.Qe = function (_0x8aeb11) {};
            _0x3c4bce.prototype.Re = function (_0x8a3ca4) {};
            _0x3c4bce.prototype.Se = function (_0xbbc033) {};
            _0x3c4bce.prototype.Te = function (_0x5be0fb) {};
            _0x3c4bce.prototype.Ue = function (_0x1e9da6) {};
            _0x3c4bce.prototype.Ve = function (_0x1439c4) {};
            _0x3c4bce.prototype.We = function (_0x42714e, _0x56a931) {};
            _0x3c4bce.prototype.Xe = function (_0xef4e94) {};
            _0x3c4bce.prototype.Ye = function (_0x3ad6ac, _0x5cee18, _0x15625f) {};
            _0x3c4bce.je = {
              'ie': {
                'Ze': false,
                '$e': false,
                'ze': true,
                've': false
              },
              '_e': {
                'Ze': false,
                '$e': true,
                'ze': true,
                've': false
              },
              'af': {
                'Ze': true,
                '$e': false,
                'ze': false,
                've': true
              },
              'bf': {
                'Ze': false,
                '$e': false,
                'ze': true,
                've': false
              },
              'cf': {
                'Ze': false,
                '$e': false,
                'ze': false,
                've': false
              }
            };
            return _0x3c4bce;
          }();
          _0x5408a7.GameView = function () {
            function _0x17320a(_0x58c37e) {
              this.ef = _0x58c37e;
              this.Eb = _0x58c37e.get()[0x0];
              this.ff = 0x1;
              this.gf = 0x1;
              this.hf = null;
              this.lf = new _0x587230.Renderer({
                'view': _0x58c37e.get()[0x0],
                'backgroundColor': 0x0,
                'transparent': false,
                'antialias': false,
                'autoResize': true
              });
              this.mf = new _0x587230.Container();
              this.mf.sortableChildren = true;
              this.nf = new _0x587230.Container();
              this.nf.zIndex = 0x0;
              this.mf.addChild(this.nf);
              this.uf = new _0x587230.Container();
              this.uf.zIndex = 0x3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var _0x1c2a98 = [{
              'yf': 0x1,
              'zf': 0.15,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0.125,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0.1,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0.075,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0.05,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0.025,
              'Af': 0x0
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.025
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.05
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.075
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.1
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.125
            }, {
              'yf': 0x1,
              'zf': 0x0,
              'Af': 0.15
            }];
            _0x17320a.prototype.ha = function () {
              var _0x19f74f = _0x1f32cc;
              this.lf.backgroundColor = 0x0;
              this.vf = new Array(_0x1c2a98.length);
              for (var _0x451b34 = 0x0; _0x451b34 < this.vf.length; _0x451b34++) {
                this.vf[_0x451b34] = new _0x587230.Sprite();
                this.vf[_0x451b34].texture = _0x19f74f.xe.Bf;
                this.vf[_0x451b34].anchor.set(0.5);
                this.nf.addChild(this.vf[_0x451b34]);
              }
              this.wf = new Array(_0x19f74f.xe.Cf.length);
              for (var _0x34406b = 0x0; _0x34406b < this.wf.length; _0x34406b++) {
                this.wf[_0x34406b] = new _0x587230.Sprite();
                this.wf[_0x34406b].texture = _0x19f74f.xe.Cf[_0x34406b];
                this.wf[_0x34406b].anchor.set(0.5);
                this.uf.addChild(this.wf[_0x34406b]);
              }
              this.xf = new Array(this.wf.length);
              for (var _0x29581b = 0x0; _0x29581b < this.xf.length; _0x29581b++) {
                var _0x34d73c = [0.6, 0x1, 0.5];
                this.xf[_0x29581b] = {
                  'Df': _0x318912.V(0x0, _0x3b850d.F),
                  'Ef': 0.66 * _0x318912.V(0.09, 0.16),
                  'Ff': _0x318912.V(0x0, 0x1),
                  'Gf': _0x318912.V(0x0, 0x1),
                  'Hf': 0x0,
                  'yf': _0x34d73c[0x0],
                  'zf': _0x34d73c[0x1],
                  'Af': _0x34d73c[0x2]
                };
              }
              this.If();
              this.Jf();
            };
            _0x17320a.hd = false;
            _0x17320a.Kf = function (_0x59939b) {
              _0x17320a.hd = _0x59939b;
            };
            _0x17320a.prototype.Lf = function (_0x4b6d91) {
              this.hf.Kf(_0x4b6d91);
            };
            _0x17320a.prototype.Jf = function () {
              var _0x10f2c4 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x10f2c4;
              this.Eb.width = _0x10f2c4 * this.ff;
              this.Eb.height = _0x10f2c4 * this.gf;
              var _0x4f93b5 = 0.6 * Math.max(this.ff, this.gf);
              for (var _0x15eee8 = 0x0; _0x15eee8 < this.vf.length; _0x15eee8++) {
                this.vf[_0x15eee8].width = _0x4f93b5;
                this.vf[_0x15eee8].height = _0x4f93b5;
              }
            };
            _0x17320a.prototype.Nf = function (_0x470e7e, _0x847ba1) {
              if (_0x17320a.hd) {
                var _0x1e3f7f = _0x470e7e / 0x3e8;
                var _0x3bca82 = _0x847ba1 / 0x3e8;
                var _0xdde52e = this.ef.width();
                var _0x57ccb4 = this.ef.height();
                for (var _0xe62871 = 0x0; _0xe62871 < this.vf.length; _0xe62871++) {
                  var _0x83e7fe = _0x1c2a98[_0xe62871 % _0x1c2a98.length];
                  var _0xbe4015 = this.vf[_0xe62871];
                  var _0x3f50ee = _0xe62871 / this.vf.length * _0x3b850d.G;
                  var _0x50ec18 = 0.5 * _0x1e3f7f * 0.12;
                  var _0x4d7f87 = Math.cos(0x3 * (_0x50ec18 + _0x3f50ee)) * Math.cos(_0x3f50ee) - Math.sin(0x5 * (_0x50ec18 + _0x3f50ee)) * Math.sin(_0x3f50ee);
                  var _0x1ccd3e = Math.cos(0x3 * (_0x50ec18 + _0x3f50ee)) * Math.sin(_0x3f50ee) + Math.sin(0x5 * (_0x50ec18 + _0x3f50ee)) * Math.cos(_0x3f50ee);
                  var _0x5bee3f = 0.2 + 0.2 * Math.cos(_0x3f50ee + 0.075 * _0x1e3f7f);
                  var _0x16f630 = 0xff0000 & 0xff * _0x83e7fe.Af << 0x10 | 0xff00 & 0xff * _0x83e7fe.zf << 0x8 | 0xff & 0xff * _0x83e7fe.yf;
                  _0xbe4015.tint = _0x16f630;
                  _0xbe4015.alpha = _0x5bee3f;
                  _0xbe4015.position.set(_0xdde52e * (0.2 + 0.5 * (_0x4d7f87 + 0x1) * 0.6), _0x57ccb4 * (0.1 + 0.5 * (_0x1ccd3e + 0x1) * 0.8));
                }
                var _0x549da1 = 0.05 * Math.max(_0xdde52e, _0x57ccb4);
                for (var _0x430cc5 = 0x0; _0x430cc5 < this.wf.length; _0x430cc5++) {
                  var _0x4c95d1 = this.xf[_0x430cc5];
                  var _0x380a2d = this.wf[_0x430cc5];
                  var _0x2046fc = _0x3b850d.F * _0x430cc5 / this.wf.length + _0x4c95d1.Df;
                  _0x4c95d1.Gf += _0x4c95d1.Ef * _0x3bca82;
                  if (_0x4c95d1.Gf > 1.1) {
                    _0x4c95d1.Df = Math.random() * _0x3b850d.F;
                    _0x4c95d1.Ef = 0.66 * (0.09 + 0.07 * Math.random());
                    _0x4c95d1.Ff = 0.15 + 0.7 * Math.random();
                    _0x4c95d1.Gf = -0.1;
                  }
                  var _0x109b9d = _0x4c95d1.Ff + 0.03 * Math.sin(0x6 * Math.sin(_0x2046fc + 0.48 * _0x1e3f7f));
                  var _0x25d0e0 = _0x4c95d1.Gf;
                  var _0x4886fc = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x2046fc + 0.12 * _0x1e3f7f)) * 1.2);
                  var _0x2f33e2 = _0x2046fc + 0x2 * _0x4c95d1.Ef * _0x1e3f7f;
                  var _0x2a241c = _0x318912.P(Math.sin(Math.PI * _0x25d0e0), 0.1, 0x1);
                  var _0x1d5b2e = 0xff00 & 0xff * _0x4c95d1.zf << 0x8 | 0xff0000 & 0xff * _0x4c95d1.Af << 0x10 | 0xff & 0xff * _0x4c95d1.yf;
                  _0x380a2d.alpha = _0x2a241c;
                  _0x380a2d.tint = _0x1d5b2e;
                  _0x380a2d.position.set(_0xdde52e * _0x109b9d, _0x57ccb4 * _0x25d0e0);
                  _0x380a2d.rotation = _0x2f33e2;
                  var _0x138fd0 = _0x380a2d.texture.width / _0x380a2d.texture.height;
                  _0x380a2d.width = _0x4886fc * _0x549da1;
                  _0x380a2d.height = _0x4886fc * _0x549da1 * _0x138fd0;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            _0x17320a.prototype.Pf = function () {
              var _0x498778 = _0x1f32cc;
              if (_0x498778.Lc.Wb()) {
                var _0x219f93 = _0x498778.Lc.Ub().gb(0x5);
                for (var _0x373b08 = 0x0; _0x373b08 < 0x5; _0x373b08++) {
                  this.hf.Qf(_0x373b08, _0x219f93[_0x373b08]);
                }
              } else {
                var _0x31d331 = _0x318912.V(0x0, 0x1);
                for (var _0x209a6d = 0x0; _0x209a6d < 0x5; _0x209a6d++) {
                  var _0x1fd756 = (_0x31d331 + _0x209a6d / 0x5) % 0x1;
                  var _0x5192a8 = _0x318912.Y(Math.floor(0x168 * _0x1fd756), 0.85, 0.5);
                  var _0x2c2910 = 0xff & 0xff * _0x5192a8[0x0] | 0xff00 & 0xff * _0x5192a8[0x1] << 0x8 | 0xff0000 & 0xff * _0x5192a8[0x2] << 0x10;
                  var _0x32be1e = "000000" + _0x2c2910.toString(0x10);
                  _0x32be1e = '#' + _0x32be1e.substring(_0x32be1e.length - 0x6, _0x32be1e.length);
                  this.hf.Rf(_0x209a6d, _0x32be1e);
                }
              }
            };
            _0x17320a.prototype.If = function () {
              var _0x2cee59 = Math.min(this.ff, this.gf);
              var _0x1da8b5 = Date.now();
              for (var _0x377887 = 0x0; _0x377887 < 0x5; _0x377887++) {
                var _0x5ab7e6 = _0x377887 / 0x5 * _0x3b850d.F;
                var _0x1dcd45 = _0x191c15(_0x1da8b5, 0.12, _0x5ab7e6);
                _0x1dcd45.qa = 0x4 * _0x1dcd45.qa;
                _0x1dcd45.ra = 0x4 * _0x1dcd45.ra;
                this.hf.Sf(_0x377887, 0.5 * (this.ff + _0x1dcd45.qa * _0x2cee59), 0.5 * (this.gf + _0x1dcd45.ra * _0x2cee59));
              }
            };
            _0x17320a.prototype.Of = function () {
              var _0x285984 = Math.min(this.ff, this.gf);
              var _0x6580e2 = Date.now();
              for (var _0x435cc6 = 0x0; _0x435cc6 < 0x5; _0x435cc6++) {
                var _0x8b30c1 = _0x435cc6 / 0x5 * _0x3b850d.F;
                var _0x31ab1b = _0x191c15(_0x6580e2, 0.12, _0x8b30c1);
                this.hf.Tf(_0x435cc6, 0.5 * (this.ff + _0x31ab1b.qa * _0x285984), 0.5 * (this.gf + _0x31ab1b.ra * _0x285984));
              }
              this.hf.Uf();
            };
            var _0x191c15 = function _0x34e12d(_0x4451d3, _0x444b1a, _0x328851) {
              var _0x252eef = _0x4451d3 / 0x3e8;
              return {
                'qa': 0.8 * (Math.cos(_0x444b1a * _0x252eef + _0x328851) + 0.4 * Math.cos(-0x20 * _0x444b1a * _0x252eef + _0x328851) + 0.7 * Math.cos(0x7 * _0x444b1a * _0x252eef + _0x328851)),
                'ra': 0.8 * (Math.sin(_0x444b1a * _0x252eef + _0x328851) + 0.4 * Math.sin(-0x20 * _0x444b1a * _0x252eef + _0x328851) + 0.7 * Math.sin(0x7 * _0x444b1a * _0x252eef + _0x328851))
              };
            };
            return _0x17320a;
          }();
          _0x5408a7.Vf = function () {
            function _0x471b12() {}
            _0x471b12.Wf = "consent_state_2";
            _0x471b12.Xf = 'showPlayerNames';
            _0x471b12.Yf = 'musicEnabled';
            _0x471b12.Zf = "sfxEnabled";
            _0x471b12.$f = 'account_type';
            _0x471b12._f = "gameMode";
            _0x471b12.ag = 'nickname';
            _0x471b12.bg = "skin";
            _0x471b12.cg = 'prerollCount';
            _0x471b12.dg = "shared";
            _0x471b12.eg = function (_0x4aa8a5, _0x1f9941, _0x2fd0c6) {
              var _0x49e007 = new Date();
              _0x49e007.setTime(_0x49e007.getTime() + 0x5265c00 * _0x2fd0c6);
              var _0x3cb70c = "expires=" + _0x49e007.toUTCString();
              document.cookie = _0x4aa8a5 + '=' + _0x1f9941 + "; " + _0x3cb70c;
            };
            _0x471b12.fg = function (_0xb4830f) {
              var _0x4c5a6f = _0xb4830f + '=';
              var _0x89bf7d = document.cookie.split(';');
              for (var _0x22a8cd = 0x0; _0x22a8cd < _0x89bf7d.length; _0x22a8cd++) {
                for (var _0x1b729e = _0x89bf7d[_0x22a8cd]; " " == _0x1b729e.charAt(0x0);) {
                  _0x1b729e = _0x1b729e.substring(0x1);
                }
                if (0x0 == _0x1b729e.indexOf(_0x4c5a6f)) {
                  if (_0xb4830f == "nickname=") {
                    _0x1b729e.substring(_0x4c5a6f.length, _0x1b729e.length).substring(0x0, 0x12);
                  }
                  return _0x1b729e.substring(_0x4c5a6f.length, _0x1b729e.length);
                }
              }
              return '';
            };
            return _0x471b12;
          }();
          _0x3b850d.gg = function () {
            function _0x150012(_0x5f52cf, _0x43e5cf, _0x25b7f6) {
              var _0x324bac = false;
              var _0x363b3b = _0x25b7f6.length;
              var _0x4a1039 = 0x0;
              for (var _0x2f275e = _0x363b3b - 0x1; _0x4a1039 < _0x363b3b; _0x2f275e = _0x4a1039++) {
                if (_0x25b7f6[_0x4a1039][0x1] > _0x43e5cf != _0x25b7f6[_0x2f275e][0x1] > _0x43e5cf && _0x5f52cf < (_0x25b7f6[_0x2f275e][0x0] - _0x25b7f6[_0x4a1039][0x0]) * (_0x43e5cf - _0x25b7f6[_0x4a1039][0x1]) / (_0x25b7f6[_0x2f275e][0x1] - _0x25b7f6[_0x4a1039][0x1]) + _0x25b7f6[_0x4a1039][0x0]) {
                  _0x324bac = !_0x324bac;
                }
              }
              return _0x324bac;
            }
            var _0x3604ba = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              'hg': function _0x206d68(_0x191063, _0x3bc043) {
                return _0x150012(_0x3bc043, _0x191063, _0x3604ba);
              }
            };
          }();
          _0x5408a7.ig = function () {
            function _0x35538a(_0x142fa5) {
              var _0x179776 = undefined;
              _0x179776 = _0x142fa5 > 0x0 ? '+' + Math.floor(_0x142fa5) : _0x142fa5 < 0x0 ? '-' + Math.floor(_0x142fa5) : '0';
              var _0x114b9b = Math.min(1.5, 0.5 + _0x142fa5 / 0x258);
              var _0x54e9ff = undefined;
              if (_0x142fa5 < 0x1) {
                _0x54e9ff = "0xFFFFFF";
              } else {
                if (_0x142fa5 < 0x1e) {
                  var _0x468e76 = (_0x142fa5 - 0x1) / 0x1d;
                  _0x54e9ff = ((0xff * (0x1 * (0x1 - _0x468e76) + 0.96 * _0x468e76) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x468e76) + 0.82 * _0x468e76) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x468e76) + 0x0 * _0x468e76) & 0xff);
                } else {
                  if (_0x142fa5 < 0x12c) {
                    var _0x426fa2 = (_0x142fa5 - 0x1e) / 0x10e;
                    _0x54e9ff = ((0xff * (0.96 * (0x1 - _0x426fa2) + 0.93 * _0x426fa2) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x426fa2) + 0.34 * _0x426fa2) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x426fa2) + 0.25 * _0x426fa2) & 0xff);
                  } else {
                    if (_0x142fa5 < 0x2bc) {
                      var _0x2b49cb = (_0x142fa5 - 0x12c) / 0x190;
                      _0x54e9ff = ((0xff * (0.93 * (0x1 - _0x2b49cb) + 0.98 * _0x2b49cb) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x2b49cb) + 0x0 * _0x2b49cb) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x2b49cb) + 0.98 * _0x2b49cb) & 0xff);
                    } else {
                      _0x54e9ff = 16318713;
                    }
                  }
                }
              }
              var _0x32e259 = Math.random();
              var _0x507cef = 0x1 + 0.5 * Math.random();
              return new _0x434249(_0x179776, _0x54e9ff, true, 0.5, _0x114b9b, _0x32e259, _0x507cef);
            }
            function _0x1fc014(_0xe98540, _0x500496) {
              var _0x7f1d0 = undefined;
              var _0x53eaa3 = undefined;
              if (_0x500496) {
                _0x7f1d0 = 1.3;
                _0x53eaa3 = 15554111;
              } else {
                _0x7f1d0 = 1.1;
                _0x53eaa3 = 16044288;
              }
              return new _0x434249(_0xe98540, _0x53eaa3, true, 0.5, _0x7f1d0, 0.5, 0.7);
            }
            var _0x57c285 = _0x318912.M(_0x587230.Container, function () {
              _0x587230.Container.call(this);
              this.jg = [];
              this.kg = 0x0;
            });
            _0x57c285.prototype.lg = function (_0x340dda) {
              this.kg += _0x340dda;
              if (this.kg >= 0x1) {
                var _0xd88fe7 = Math.floor(this.kg);
                this.kg -= _0xd88fe7;
                var _0x533db2 = _0x35538a(_0xd88fe7);
                this.addChild(_0x533db2);
                this.jg.push(_0x533db2);
              }
            };
            _0x57c285.prototype.mg = function (_0x2f98aa) {
              _wwc.fnSetCounts("count", _0x2f98aa);
              if (_0x2f98aa) {
                if (!(window.bbs.headshot % 0xa)) {
                  _0x5b5da3.fxdo("shaokahn");
                } else {
                  _0x5b5da3.fxdo('headshot');
                }
                var _0x4e1ef0 = _0x1fc014(_0x318912.H('index.game.floating.headshot'), true);
                this.addChild(_0x4e1ef0);
                this.jg.push(_0x4e1ef0);
                _wwcio.update("headshot");
              } else {
                var _0xecb43 = _0x1fc014(_0x318912.H("index.game.floating.wellDone"), false);
                this.addChild(_0xecb43);
                this.jg.push(_0xecb43);
              }
            };
            _0x57c285.prototype.Uf = function (_0x438f2f, _0x2b9ce7) {
              var _0x11bb84 = _0x1f32cc.og.af.ng;
              var _0x2035a1 = _0x11bb84.lf.width / _0x11bb84.lf.resolution;
              var _0x5253a0 = _0x11bb84.lf.height / _0x11bb84.lf.resolution;
              for (var _0x15ce3b = 0x0; _0x15ce3b < this.jg.length;) {
                var _0x182cdb = this.jg[_0x15ce3b];
                _0x182cdb.pg = _0x182cdb.pg + _0x2b9ce7 / 0x7d0 * _0x182cdb.qg;
                _0x182cdb.rg = _0x182cdb.rg + _0x2b9ce7 / 0x7d0 * _0x182cdb.sg;
                _0x182cdb.alpha = 0.5 * Math.sin(Math.PI * _0x182cdb.rg);
                _0x182cdb.scale.set(_0x182cdb.pg);
                _0x182cdb.position.x = _0x2035a1 * (0.25 + 0.5 * _0x182cdb.tg);
                _0x182cdb.position.y = _0x182cdb.ug ? _0x5253a0 * (0x1 - 0.5 * (0x1 + _0x182cdb.rg)) : _0x5253a0 * (0x1 - 0.5 * (0x0 + _0x182cdb.rg));
                if (_0x182cdb.rg > 0x1) {
                  _0x318912.U(_0x182cdb);
                  this.jg.splice(_0x15ce3b, 0x1);
                  _0x15ce3b--;
                }
                _0x15ce3b++;
              }
            };
            var _0x434249 = function () {
              return _0x318912.M(_0x587230.Text, function (_0x327490, _0x3dbadc, _0x4d13f2, _0x448852, _0x6f6d67, _0x4ea92f, _0x3fb7ab) {
                _0x587230.Text.call(this, _0x327490, {
                  'fill': _0x3dbadc,
                  'fontFamily': "PTSans",
                  'fontSize': 0x24
                });
                this.anchor.set(0.5);
                this.ug = _0x4d13f2;
                this.pg = _0x448852;
                this.qg = _0x6f6d67;
                this.tg = _0x4ea92f;
                this.rg = 0x0;
                this.sg = _0x3fb7ab;
              });
            }();
            return _0x57c285;
          }();
          _0x5408a7.be = function () {
            function _0x21fbd8(_0x27fa23, _0x279606) {
              this.Xd = _0x27fa23;
              this.oa = _0x279606;
            }
            return _0x21fbd8;
          }();
          _0x5408a7.Ac = {
            'vg': 0x0,
            'zc': 0x10
          };
          _0x5408a7.GameParams = function () {
            function _0x37efae() {
              this.xg = _0x5408a7.Ac.vg;
              this.yg = 0x0;
              this.zg = 0x1f4;
              this.Ag = 0xfa0;
              this.Bg = 0x1b58;
            }
            _0x37efae.Cg = 0x0;
            _0x37efae.prototype.Dg = function () {
              return 1.02 * this.zg;
            };
            return _0x37efae;
          }();
          _0x5408a7.Eg = function () {
            function _0x35b8f6(_0x1cde39) {
              this.ef = _0x1cde39;
              this.Eb = _0x1cde39.get()[0x0];
              this.lf = new _0x587230.Renderer({
                'view': _0x1cde39.get()[0x0],
                'backgroundColor': 0x0,
                'antialias': false
              });
              this.mf = new _0x587230.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(0x168 * Math.random());
              this.Gg = 0x0;
              this.Hg = 0x0;
              this.Ig = 0xf;
              this.Jg = 0.5;
              this.Kg = 0x0;
              this.Lg = _0x167f4e.Lg(_0x5408a7);
              this.Ng = new _0x587230.Graphics();
              this.Og = new _0x587230.Container();
              this.Pg = new _0x587230.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new _0x587230.Container();
              this.Rg = new _0x587230.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new _0x587230.Container();
              this.Tg = new _0x2ea18d();
              this.Ug = new _0x493e71();
              this.Vg = new _0x2617a9();
              this.Wg = new _0x5408a7.ig();
              this.Xg = new _0x587230.Sprite();
              this.Yg = {
                'x': 0x0,
                'y': 0x0
              };
              this.ha();
            }
            _0x35b8f6.prototype.ha = function () {
              this.lf.backgroundColor = 0x0;
              this.Lg.sf.zIndex = 0x1;
              this.mf.addChild(this.Lg.sf);
              this.Ng.zIndex = 0x14;
              this.mf.addChild(this.Ng);
              this.Og.zIndex = 0x1388;
              this.mf.addChild(this.Og);
              this.Pg.zIndex = 0x13ec;
              this.mf.addChild(this.Pg);
              this.Qg.zIndex = 0x2710;
              this.mf.addChild(this.Qg);
              this.Xg.texture = _0x1f32cc.xe.Zg;
              this.Xg.anchor.set(0.5);
              this.Xg.zIndex = 0x1;
              this.Rg.addChild(this.Xg);
              this.Sg.alpha = 0.6;
              this.Sg.zIndex = 0x2;
              this.Rg.addChild(this.Sg);
              this.Wg.zIndex = 0x3;
              this.Rg.addChild(this.Wg);
              this.Tg.alpha = 0.8;
              this.Tg.zIndex = 0x4;
              this.Rg.addChild(this.Tg);
              this.Ug.zIndex = 0x5;
              this.Rg.addChild(this.Ug);
              this.Vg.zIndex = 0x6;
              this.Rg.addChild(this.Vg);
              this.Jf();
            };
            _0x35b8f6.prototype.Jf = function () {
              var _0xb251e8 = this.ef.width();
              var _0x52a33e = this.ef.height();
              var _0x27dd28 = window.bbs.display.custom ? window.bbs.display.clock.x * _0xb251e8 : 0x0;
              var _0x294a5e = window.bbs.display.custom ? window.bbs.display.clock.y * _0x52a33e : 0x0;
              var _0x133263 = window.bbs.display.custom ? window.bbs.display.top.x * _0xb251e8 : _0xb251e8 - 0xff;
              var _0x415674 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 0x1;
              var _0x4cff3d = window.bbs.display.clock.rc ? _0x408f6e[window.bbs.display.clock.rc] : 0x0;
              var _0x491e10 = window.bbs.display.top.rt ? _0x408f6e[window.bbs.display.top.rt] : 0x0;
              var _0x4b7afe = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
              var _0x2674b0 = _0x4b7afe * _0xb251e8;
              var _0x37e491 = _0x4b7afe * _0x52a33e;
              var _0x478282 = Math.min(Math.min(_0xb251e8, _0x52a33e), 0.625 * Math.max(_0xb251e8, _0x52a33e));
              this.lf.resize(_0xb251e8, _0x52a33e);
              this.lf.resolution = _0x4b7afe;
              this.Eb.width = _0x2674b0;
              this.Eb.height = _0x37e491;
              this.Jg = _0x478282;
              this.Xg.position.set(_0xb251e8 / 0x2, _0x52a33e / 0x2);
              this.Xg.width = _0xb251e8;
              this.Xg.height = _0x52a33e;
              this.Tg.position.set(0x3c + _0x27dd28, 0x3c + _0x294a5e + (_0x4cff3d ? this.Tg.height / 0x4 : 0x0));
              this.Ug.position.set(0x6e, 0xa);
              this.Vg.position.set(_0x133263, _0x415674 + (_0x491e10 ? this.Vg.height : 0x0));
              this.Tg.rotation = _0x4cff3d;
              this.Vg.rotation = _0x491e10;
            };
            _0x35b8f6.prototype.Uf = function (_0x220ff8, _0x8033) {
              var _0x5575ab = _0x1f32cc;
              this.Ig = 0xf;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(_0x220ff8.xg === _0x5408a7.Ac.vg ? _0x5575ab.xe._g : _0x5575ab.xe.ah);
              var _0x39b728 = this.Ng;
              _0x39b728.clear();
              _0x39b728.lineStyle(0.2, 0xff0000, 0.6);
              _0x39b728.drawCircle(0x0, 0x0, _0x220ff8.zg);
              _0x39b728.endFill();
              this.Vg.bh = _0x8033;
              this.Sg.visible = _0x8033;
            };
            _0x35b8f6.prototype.Nf = function (_0x39b836, _0x1e58a0) {
              if (this.lf.width <= 0x5) {
                return;
              }
              var _0x7f3a1e = _0x1f32cc;
              var _0x49bd98 = _0x7f3a1e.dh.ch;
              var _0x25feb2 = this.lf.width / this.lf.resolution;
              var _0x104562 = this.lf.height / this.lf.resolution;
              this.Ig = _0x167f4e.$F.Q(this.Ig, _0x7f3a1e.dh.eh, _0x1e58a0, 0.002);
              var _0x2a9c80 = this.Jg / (this.Ig * _0x37ea2c);
              var _0x363825 = _0x7f3a1e.dh.ch.dd[_0x167f4e.$C.fd.qd];
              var _0x50e9a5 = null != _0x363825 && _0x363825.hd;
              this.Kg = _0x167f4e.$F.P(this.Kg + _0x1e58a0 / 0x3e8 * (0.1 * (_0x50e9a5 ? 0x1 : 0x0) - this.Kg), 0x0, 0x1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + 0.01 * _0x1e58a0) % 0x168;
              this.Gg = Math.sin(_0x39b836 / 0x4b0 * 0x2 * Math.PI);
              var _0x7fbb25 = _0x49bd98.fh();
              this.Yg.x = _0x167f4e.$F.R(this.Yg.x, _0x7fbb25.x, _0x1e58a0, 0.5, 33.333);
              this.Yg.y = _0x167f4e.$F.R(this.Yg.y, _0x7fbb25.y, _0x1e58a0, 0.5, 33.333);
              var _0xba12db = _0x25feb2 / _0x2a9c80 / 0x2;
              var _0x1b1204 = _0x104562 / _0x2a9c80 / 0x2;
              _0x7f3a1e.dh.gh(this.Yg.x - 1.3 * _0xba12db, this.Yg.x + 1.3 * _0xba12db, this.Yg.y - 1.3 * _0x1b1204, this.Yg.y + 1.3 * _0x1b1204);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, 0x2 * _0xba12db, 0x2 * _0x1b1204);
              }
              var _0x4eb777 = _0x7f3a1e.dh.hh.zg;
              this.mf.scale.set(_0x2a9c80, _0x2a9c80);
              this.mf.position.set(_0x25feb2 / 0x2 - this.Yg.x * _0x2a9c80, _0x104562 / 0x2 - this.Yg.y * _0x2a9c80);
              var _0x1c5cfc = Math.hypot(_0x7fbb25.x, _0x7fbb25.y);
              if (_0x1c5cfc > _0x4eb777 - 0xa) {
                this.Hg = _0x167f4e.$F.P(0x1 + (_0x1c5cfc - _0x4eb777) / 0xa, 0x0, 0x1);
                var _0x364eaf = Math.cos(this.Fg * _0x167f4e.$V.F / 0x168) * (0x1 - this.Hg) + 0x1 * this.Hg;
                var _0x1bfb5e = Math.sin(this.Fg * _0x167f4e.$V.F / 0x168) * (0x1 - this.Hg);
                var _0x5f510d = (Math.atan2(_0x1bfb5e, _0x364eaf) + _0x167f4e.$V.F) % _0x167f4e.$V.F * 0x168 / _0x167f4e.$V.F;
                var _0x1c82a4 = this.Hg * (0.5 + 0.5 * this.Gg);
                var _0x4cc289 = _0x167f4e.$F.Y(Math.floor(_0x5f510d), 0x1, 0.75 - 0.25 * this.Hg);
                this.Lg.Ec(_0x4cc289[0x0], _0x4cc289[0x1], _0x4cc289[0x2], 0.1 + 0.2 * _0x1c82a4);
              } else {
                this.Hg = 0x0;
                var _0x532f5b = _0x167f4e.$F.Y(Math.floor(this.Fg), 0x1, 0.75);
                this.Lg.Ec(_0x532f5b[0x0], _0x532f5b[0x1], _0x532f5b[0x2], 0.1);
              }
              for (var _0x1ed977 = 0x0; _0x1ed977 < this.Sg.children.length; _0x1ed977++) {
                var _0x3dc7f9 = this.Sg.children[_0x1ed977];
                _0x3dc7f9.position.set(_0x25feb2 / 0x2 - (this.Yg.x - _0x3dc7f9.ih.x) * _0x2a9c80, _0x104562 / 0x2 - (this.Yg.y - _0x3dc7f9.ih.y) * _0x2a9c80);
              }
              this.Tg.jh.position.x = _0x7fbb25.x / _0x4eb777 * this.Tg.kh;
              this.Tg.jh.position.y = _0x7fbb25.y / _0x4eb777 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(_0x39b836);
              this.Wg.Uf(_0x39b836, _0x1e58a0);
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            _0x35b8f6.prototype.mh = function (_0x348d2f, _0x208e6b) {
              _0x208e6b.nh.Cc.Qc().zIndex = (_0x348d2f + 0x80000000) / 0x100000000 * 0x1388;
              this.Og.addChild(_0x208e6b.nh.Dc.Qc());
              this.Pg.addChild(_0x208e6b.nh.Cc.Qc());
            };
            _0x35b8f6.prototype.oh = function (_0x4f1122, _0x4b7e3b, _0x19085f) {
              _0x4b7e3b.nc.zIndex = _0x1f32cc.dh.hh.yg ? 0x0 : 0xa + (_0x4f1122 + 0x8000) / 0x10000 * 0x1388;
              this.Qg.addChild(_0x4b7e3b.nc);
              if (_0x4f1122 != _0x1f32cc.dh.hh.yg) {
                this.Sg.addChild(_0x19085f);
              }
            };
            var _0x2ea18d = function () {
              return _0x318912.M(_0x587230.Container, function () {
                _0x587230.Container.call(this);
                this.kh = 0x28;
                this.qh = new _0x587230.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var _0x2d2754 = new _0x587230.Graphics();
                _0x2d2754.beginFill('black', 0.4);
                _0x2d2754.drawCircle(0x0, 0x0, this.kh);
                _0x2d2754.endFill();
                _0x2d2754.lineStyle(0x1, 0xf79425);
                _0x2d2754.drawCircle(0x0, 0x0, this.kh);
                _0x2d2754.moveTo(0x0, -this.kh);
                _0x2d2754.lineTo(0x0, +this.kh);
                _0x2d2754.moveTo(-this.kh, 0x0);
                _0x2d2754.lineTo(+this.kh, 0x0);
                _0x2d2754.endFill();
                if (bbs.display.customClock) {
                  _0x2d2754 = new _0x587230.Sprite();
                  _0x2d2754.texture = new _0x587230.Texture.from(bbs.display.customClock.file);
                  _0x2d2754.width = 2.75 * this.kh;
                  _0x2d2754.height = 2.75 * this.kh;
                  _0x2d2754.anchor.set(0.5);
                }
                this.jh = new _0x587230.Graphics();
                this.jh.zIndex = 0x2;
                this.jh.alpha = 0.9;
                this.jh.beginFill(0xff0000);
                this.jh.drawCircle(0x0, 0x0, 0.1 * this.kh);
                this.jh.endFill();
                this.jh.lineStyle(0x1, 'black');
                this.addChild(_0x2d2754);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(_0x3b679f.conteinerTeam);
              });
            }();
            var _0x493e71 = function () {
              var _0x4aeba1 = _0x318912.M(_0x587230.Container, function () {
                _0x587230.Container.call(this);
                this.rh = {};
              });
              _0x4aeba1.prototype.lh = function (_0xd3b59) {
                var _0x58d12b = 0.5 + 0.5 * Math.cos(_0x3b850d.F * (_0xd3b59 / 0x3e8 / 1.6));
                for (var _0x3c00f9 in this.rh) {
                  var _0x1a0957 = this.rh[_0x3c00f9];
                  var _0x311a63 = _0x1a0957.sh;
                  _0x1a0957.alpha = 0x1 - _0x311a63 + _0x311a63 * _0x58d12b;
                }
              };
              _0x4aeba1.prototype.Uf = function (_0x2b7637) {
                for (var _0xc46444 in this.rh) if (!(null != _0x2b7637[_0xc46444] && _0x2b7637[_0xc46444].hd)) {
                  _0x318912.U(this.rh[_0xc46444]);
                  delete this.rh[_0xc46444];
                }
                var _0x40ad22 = 0x0;
                for (var _0x38bc55 in _0x2b7637) {
                  var _0x593915 = _0x2b7637[_0x38bc55];
                  if (_0x593915.hd) {
                    var _0x1c6efa = this.rh[_0x38bc55];
                    if (!_0x1c6efa) {
                      var _0x5f57be = _0x1f32cc.Lc.Ub().pb(_0x593915.nd).ub;
                      _0x1c6efa = new _0x3abb5a();
                      _0x1c6efa.texture = _0x5f57be.Ea();
                      _0x1c6efa.width = 0x28;
                      _0x1c6efa.height = 0x28;
                      this.rh[_0x38bc55] = _0x1c6efa;
                      this.addChild(_0x1c6efa);
                    }
                    _0x1c6efa.sh = _0x593915.od;
                    _0x1c6efa.position.x = _0x40ad22;
                    _0x40ad22 += 0x28;
                  }
                }
              };
              var _0x3abb5a = function () {
                return _0x318912.M(_0x587230.Sprite, function () {
                  _0x587230.Sprite.call(this);
                  this.sh = 0x0;
                });
              }();
              return _0x4aeba1;
            }();
            var _0x2617a9 = function () {
              var _0x3580cc = _0x318912.M(_0x587230.Container, function () {
                _0x587230.Container.call(this);
                this.bh = true;
                this.th = 0xc;
                this.uh = 0x9;
                this.jg = [];
                for (var _0x5f0af0 = 0x0; _0x5f0af0 < 0xe; _0x5f0af0++) {
                  this.vh();
                }
              });
              _0x3580cc.prototype.Uf = function (_0x36b125) {
                var _0x196e98 = _0x1f32cc;
                var _0x1decc1 = _0x196e98.dh.hh.xg === _0x5408a7.Ac.zc;
                var _0x31e2b7 = 0x0;
                var _0x9f3f6a = 0x0;
                if (_0x9f3f6a >= this.jg.length) {
                  this.vh();
                }
                this.jg[_0x9f3f6a].wh(0x1, 'white');
                this.jg[_0x9f3f6a].xh('', _0x318912.H('index.game.leader.top10'), '(' + _0x196e98.dh.yh + " online)");
                this.jg[_0x9f3f6a].position.y = _0x31e2b7;
                _0x31e2b7 += this.th;
                _0x9f3f6a += 0x1;
                if (_0x36b125.zh.length > 0x0) {
                  _0x31e2b7 += this.uh;
                }
                for (var _0x13cf75 = 0x0; _0x13cf75 < _0x36b125.zh.length; _0x13cf75++) {
                  var _0x3cbc0d = _0x36b125.zh[_0x13cf75];
                  var _0x1c01a4 = _0x196e98.Lc.Ub().jb(_0x3cbc0d.Ah);
                  var _0x52404e = '';
                  var _0x420a1b = _0x196e98.Lc.Xb().textDict[_0x1c01a4.qb];
                  if (null != _0x420a1b) {
                    _0x52404e = _0x318912.I(_0x420a1b);
                  }
                  if (_0x9f3f6a >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x9f3f6a].wh(0.8, _0x1c01a4.rb.tb);
                  this.jg[_0x9f3f6a].xh('' + (_0x13cf75 + 0x1), _0x52404e, '' + Math.floor(_0x3cbc0d.Bh));
                  this.jg[_0x9f3f6a].position.y = _0x31e2b7;
                  _0x31e2b7 += this.th;
                  _0x9f3f6a += 0x1;
                }
                if (_0x36b125.Ch.length > 0x0) {
                  _0x31e2b7 += this.uh;
                }
                for (var _0x10bdbc = 0x0; _0x10bdbc < _0x36b125.Ch.length; _0x10bdbc++) {
                  var _0x47bfed = _0x36b125.Ch[_0x10bdbc];
                  var _0x43cdf8 = _0x196e98.dh.hh.yg == _0x47bfed.Dh;
                  var _0x597895;
                  var _0x414ae5;
                  if (_0x43cdf8) {
                    _0x597895 = "white";
                    _0x414ae5 = _0x196e98.dh.ch.Eh.ma;
                  } else {
                    var _0x2d06fc = _0x196e98.dh.Fh[_0x47bfed.Dh];
                    if (!_0x597895) {
                      _0x597895 = 'white';
                    }
                    if (null != _0x2d06fc) {
                      _0x597895 = _0x1decc1 ? _0x196e98.Lc.Ub().jb(_0x2d06fc.Eh.Gh).rb.tb : _0x196e98.Lc.Ub().ib(_0x2d06fc.Eh.Hh).tb || _0x597895;
                      _0x414ae5 = this.bh && _0x470b73 ? _0x2d06fc.Eh.ma : "---";
                    } else {
                      _0x597895 = 'gray';
                      _0x414ae5 = '?';
                    }
                  }
                  if (_0x43cdf8) {
                    _0x31e2b7 += this.uh;
                  }
                  if (_0x9f3f6a >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x9f3f6a].wh(_0x43cdf8 ? 0x1 : 0.8, _0x597895);
                  this.jg[_0x9f3f6a].xh('' + (_0x10bdbc + 0x1), _0x414ae5, '' + Math.floor(_0x47bfed.Bh));
                  this.jg[_0x9f3f6a].position.y = _0x31e2b7;
                  _0x31e2b7 += this.th;
                  _0x9f3f6a += 0x1;
                  if (_0x43cdf8) {
                    _0x31e2b7 += this.uh;
                  }
                  if (window.bbs.lr && _0x10bdbc === 0x2) {
                    break;
                  }
                }
                if (_0x196e98.dh.Ih > (window.bbs.lr ? 0x3 : _0x36b125.Ch.length)) {
                  _0x31e2b7 += this.uh;
                  if (_0x9f3f6a >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x9f3f6a].wh(0x1, "white");
                  this.jg[_0x9f3f6a].xh('' + _0x196e98.dh.Ih, _0x196e98.dh.ch.Eh.ma, '' + Math.floor(_0x196e98.dh.ch.Bh));
                  this.jg[_0x9f3f6a].position.y = _0x31e2b7;
                  _0x31e2b7 += this.th;
                  _0x9f3f6a += 0x1;
                  _0x31e2b7 += this.uh;
                }
                while (this.jg.length > _0x9f3f6a) {
                  _0x318912.U(this.jg.pop());
                }
              };
              _0x3580cc.prototype.vh = function () {
                var _0x30fa9a = new _0x180485();
                _0x30fa9a.position.y = 0x0;
                if (this.jg.length > 0x0) {
                  _0x30fa9a.position.y = this.jg[this.jg.length - 0x1].position.y + this.th;
                }
                this.jg.push(_0x30fa9a);
                this.addChild(_0x30fa9a);
              };
              var _0x180485 = function () {
                var _0xe5d5e7 = _0x318912.M(_0x587230.Container, function () {
                  _0x587230.Container.call(this);
                  this.Jh = new _0x587230.Text('', {
                    'fontFamily': "PTSans",
                    'fontSize': 0xc,
                    'fill': "white"
                  });
                  this.Jh.anchor.x = 0x1;
                  this.Jh.position.x = 0x1e;
                  this.addChild(this.Jh);
                  this.Kh = new _0x587230.Text('', {
                    'fontFamily': "PTSans",
                    'fontSize': 0xc,
                    'fill': 'white'
                  });
                  this.Kh.anchor.x = 0x0;
                  this.Kh.position.x = 0x23;
                  this.addChild(this.Kh);
                  this.Lh = new _0x587230.Text('', {
                    'fontFamily': "PTSans",
                    'fontSize': 0xc,
                    'fill': "white"
                  });
                  this.Lh.anchor.x = 0x1;
                  this.Lh.position.x = 0xfa;
                  this.addChild(this.Lh);
                });
                _0xe5d5e7.prototype.xh = function (_0x583287, _0x1f6137, _0x3371ed) {
                  this.Jh.text = _0x583287;
                  this.Lh.text = _0x3371ed;
                  this.Kh.text = _0x1f6137;
                };
                _0xe5d5e7.prototype.wh = function (_0x260151, _0x6f5438) {
                  this.Jh.alpha = _0x260151;
                  this.Jh.style.fill = _0x6f5438;
                  this.Kh.alpha = _0x260151;
                  this.Kh.style.fill = _0x6f5438;
                  this.Lh.alpha = _0x260151;
                  this.Lh.style.fill = _0x6f5438;
                };
                return _0xe5d5e7;
              }();
              return _0x3580cc;
            }();
            return _0x35b8f6;
          }();
          _0x5408a7.MessageProcessor = function () {
            function _0x2be48c(_0x44141b) {
              this.dh = _0x44141b;
              this.Nh = [];
              this.Oh = 0x0;
            }
            _0x2be48c.prototype.Ph = function (_0x3c3974) {
              this.Nh.push(new DataView(_0x3c3974));
            };
            _0x2be48c.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0x0;
            };
            _0x2be48c.prototype.Rh = function () {
              for (var _0xc693d0 = 0x0; _0xc693d0 < 0xa; _0xc693d0++) {
                if (0x0 === this.Nh.length) {
                  return;
                }
                var _0x342b45 = this.Nh.shift();
                try {
                  this.Sh(_0x342b45);
                } catch (_0x4c13f0) {
                  throw _0x4c13f0;
                }
              }
            };
            _0x2be48c.prototype.Sh = function (_0x3aed5b) {
              switch (0xff & _0x3aed5b.ba(0x0)) {
                case 0x0:
                  return void this.Th(_0x3aed5b, 0x1);
                case 0x1:
                  return void this.Uh(_0x3aed5b, 0x1);
                case 0x2:
                  return void this.Vh(_0x3aed5b, 0x1);
                case 0x3:
                  return void this.Wh(_0x3aed5b, 0x1);
                case 0x4:
                  return void this.Xh(_0x3aed5b, 0x1);
                case 0x5:
                  return void this.Yh(_0x3aed5b, 0x1);
              }
            };
            _0x2be48c.prototype.Th = function (_0x4d9577, _0x3ab9e7) {
              this.dh.hh.xg = _0x4d9577.ba(_0x3ab9e7);
              _0x3ab9e7 += 0x1;
              var _0x25ff18 = _0x4d9577.ca(_0x3ab9e7);
              _0x3ab9e7 += 0x2;
              this.dh.hh.yg = _0x25ff18;
              this.dh.ch.Eh.ae = _0x25ff18;
              this.dh.hh.zg = _0x4d9577.ea(_0x3ab9e7);
              _0x3ab9e7 += 0x4;
              this.dh.hh.Ag = _0x4d9577.ea(_0x3ab9e7);
              _0x3ab9e7 += 0x4;
              this.dh.hh.Bg = _0x4d9577.ea(_0x3ab9e7);
              _0x3ab9e7 += 0x4;
              _0x1f32cc.og.af.ng.Uf(this.dh.hh, _0x1f32cc.og.$h.Zh());
              return _0x3ab9e7;
            };
            _0x2be48c.prototype.Uh = function (_0x2e31a9, _0x490cd4) {
              var _0x323527 = this.Oh++;
              var _0x49737c = _0x2e31a9.ca(_0x490cd4);
              _0x490cd4 += 0x2;
              var _0x2d36c6 = undefined;
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x5d39ce = 0x0; _0x5d39ce < _0x2d36c6; _0x5d39ce++) {
                _0x490cd4 = this.bi(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x21df17 = 0x0; _0x21df17 < _0x2d36c6; _0x21df17++) {
                _0x490cd4 = this.ci(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x507516 = 0x0; _0x507516 < _0x2d36c6; _0x507516++) {
                _0x490cd4 = this.di(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x35639d = 0x0; _0x35639d < _0x2d36c6; _0x35639d++) {
                _0x490cd4 = this.ei(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x11b002 = 0x0; _0x11b002 < _0x2d36c6; _0x11b002++) {
                _0x490cd4 = this.fi(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x374c75 = 0x0; _0x374c75 < _0x2d36c6; _0x374c75++) {
                _0x490cd4 = this.gi(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0x1111ad = 0x0; _0x1111ad < _0x2d36c6; _0x1111ad++) {
                _0x490cd4 = this.hi(_0x2e31a9, _0x490cd4);
              }
              _0x2d36c6 = this._h(_0x2e31a9, _0x490cd4);
              _0x490cd4 += this.ai(_0x2d36c6);
              for (var _0xe88380 = 0x0; _0xe88380 < _0x2d36c6; _0xe88380++) {
                _0x490cd4 = this.ii(_0x2e31a9, _0x490cd4);
              }
              if (_0x323527 > 0x0) {
                _0x490cd4 = this.ji(_0x2e31a9, _0x490cd4);
              }
              this.dh.ki(_0x323527, _0x49737c);
              return _0x490cd4;
            };
            _0x2be48c.prototype.ei = function (_0x2c8f39, _0x11a09f) {
              var _0x5f8fc2 = new _0x5408a7.Worm.li();
              _0x5f8fc2.ae = _0x2c8f39.ca(_0x11a09f);
              _0x11a09f += 0x2;
              _0x5f8fc2.Gh = this.dh.hh.xg === _0x5408a7.Ac.zc ? _0x2c8f39.ba(_0x11a09f++) : _0x167f4e.ps ? _0x167f4e.ps : _0x5408a7.GameParams.Cg;
              _0x5f8fc2.Hh = _0x2c8f39.ca(_0x11a09f);
              _0x167f4e.p("Hh|lj", _0x11a09f);
              _0x11a09f += 0x2;
              _0x5f8fc2.ni = _0x2c8f39.ca(_0x11a09f);
              _0x167f4e.p("ni|mj", _0x11a09f);
              _0x11a09f += 0x2;
              _0x5f8fc2.oi = _0x2c8f39.ca(_0x11a09f);
              _0x167f4e.p("oi|nj", _0x11a09f);
              _0x11a09f += 0x2;
              _0x5f8fc2.pi = _0x2c8f39.ca(_0x11a09f);
              _0x167f4e.p("pi|pj", _0x11a09f);
              _0x11a09f += 0x2;
              _0x5f8fc2.qi = _0x2c8f39.ca(_0x11a09f);
              _0x167f4e.p("qi|oj", _0x11a09f);
              _0x11a09f += 0x2;
              var _0x10e312 = _0x2c8f39.ba(_0x11a09f);
              _0x11a09f += 0x1;
              var _0x2ba0b3 = '';
              for (var _0x795985 = 0x0; _0x795985 < _0x10e312; _0x795985++) {
                _0x2ba0b3 += String.fromCharCode(_0x2c8f39.ca(_0x11a09f));
                _0x11a09f += 0x2;
              }
              _0x5f8fc2.ma = _0x2ba0b3;
              if (this.dh.hh.yg === _0x5f8fc2.ae) {
                var _0x579827 = Object.keys(_0x167f4e.pm);
                _0x579827.forEach(function (_0x11ad8d) {
                  _0x5f8fc2[_0x11ad8d] = window.bbs.PropertyManager[_0x167f4e.pm[_0x11ad8d].p];
                  _0x2c8f39.setInt16(_0x167f4e.pm[_0x11ad8d].i, _0x5f8fc2[_0x11ad8d]);
                });
                this.dh.ch.ri(_0x5f8fc2);
                _wwc.startGame();
                _wwcio.connect(_0x5f8fc2);
              } else {
                var _0xfb0042 = this.dh.Fh[_0x5f8fc2.ae];
                if (null != _0xfb0042) {
                  _0xfb0042.si();
                }
                var _0x5d8f51 = new _0x5408a7.Worm(this.dh.hh);
                _0x5d8f51.ti(_0x1f32cc.og.af.ng);
                this.dh.Fh[_0x5f8fc2.ae] = _0x5d8f51;
                _0x5d8f51.ri(_0x5f8fc2);
              }
              _0x167f4e.ae(_0x2c8f39, _0x5f8fc2, this);
              return _0x11a09f;
            };
            _0x2be48c.prototype.fi = function (_0x321479, _0x441c76) {
              var _0x5b0300 = _0x321479.ca(_0x441c76);
              _0x441c76 += 0x2;
              var _0x5c2eab = _0x321479.ba(_0x441c76);
              _0x441c76++;
              var _0x457ca6 = !!(0x1 & _0x5c2eab);
              var _0x32347c = !!(0x2 & _0x5c2eab);
              var _0x373686 = 0x0;
              if (_0x457ca6) {
                _0x373686 = _0x321479.ca(_0x441c76);
                _0x441c76 += 0x2;
              }
              var _0x556d69 = this.vi(_0x5b0300);
              if (undefined === _0x556d69) {
                return _0x441c76;
              }
              _0x556d69.wi = false;
              if (!_0x556d69.xi) {
                return _0x441c76;
              }
              var _0x3705af = this.vi(_0x5b0300);
              if (_0x457ca6 && undefined !== _0x3705af && _0x3705af.xi) {
                if (_0x373686 === this.dh.hh.yg) {
                  var _0xedbfcb = this.dh.ch.fh();
                  var _0x246e0e = _0x556d69.yi(_0xedbfcb.x, _0xedbfcb.y);
                  Math.max(0x0, 0x1 - _0x246e0e.distance / (0.5 * this.dh.eh));
                  if (_0x246e0e.distance < 0.5 * this.dh.eh) {
                    _0x1f32cc.og.af.ng.Wg.mg(_0x32347c);
                  }
                } else {
                  if (_0x5b0300 === this.dh.hh.yg) {
                    ;
                  } else {
                    var _0x256d23 = this.dh.ch.fh();
                    var _0x14e943 = _0x556d69.yi(_0x256d23.x, _0x256d23.y);
                    Math.max(0x0, 0x1 - _0x14e943.distance / (0.5 * this.dh.eh));
                  }
                }
              } else {
                if (_0x5b0300 === this.dh.hh.yg) {
                  ;
                } else {
                  var _0x22a687 = this.dh.ch.fh();
                  var _0x95d494 = _0x556d69.yi(_0x22a687.x, _0x22a687.y);
                  Math.max(0x0, 0x1 - _0x95d494.distance / (0.5 * this.dh.eh));
                }
              }
              return _0x441c76;
            };
            _0x2be48c.prototype.ii = function (_0x44fd4a, _0x34bf65) {
              var _0x386c69 = _0x44fd4a.ca(_0x34bf65);
              _0x34bf65 += 0x2;
              var _0x6da70c = _0x386c69 === this.dh.hh.yg ? null : this.dh.Fh[_0x386c69];
              var _0x2a34cf = _0x44fd4a.ba(_0x34bf65);
              _0x34bf65 += 0x1;
              var _0x4662f6 = !!(0x1 & _0x2a34cf);
              if (!!(0x2 & _0x2a34cf)) {
                var _0x2f81e0 = _0x44fd4a.ea(_0x34bf65);
                _0x34bf65 += 0x4;
                if (_0x6da70c) {
                  _0x6da70c.zi(_0x2f81e0);
                }
              }
              var _0x47477d = this.Ai(_0x44fd4a.ba(_0x34bf65++), _0x44fd4a.ba(_0x34bf65++), _0x44fd4a.ba(_0x34bf65++));
              var _0x48c404 = this.Ai(_0x44fd4a.ba(_0x34bf65++), _0x44fd4a.ba(_0x34bf65++), _0x44fd4a.ba(_0x34bf65++));
              if (_0x6da70c) {
                _0x6da70c.Bi(_0x47477d, _0x48c404, _0x4662f6);
                var _0xe1ea94 = this.dh.ch.fh();
                var _0x1d40a9 = _0x6da70c.fh();
                var _0x3936c1 = Math.max(0x0, 0x1 - Math.hypot(_0xe1ea94.x - _0x1d40a9.x, _0xe1ea94.y - _0x1d40a9.y) / (0.5 * this.dh.eh));
                _0x1f32cc.Ci.Ye(_0x3936c1, _0x386c69, _0x4662f6);
              }
              var _0x216d67 = this._h(_0x44fd4a, _0x34bf65);
              _0x34bf65 += this.ai(_0x216d67);
              if (_0x6da70c) {
                for (var _0x46d0c in _0x6da70c.dd) {
                  var _0x4a228d = _0x6da70c.dd[_0x46d0c];
                  if (_0x4a228d) {
                    _0x4a228d.hd = false;
                  }
                }
              }
              for (var _0xd028bf = 0x0; _0xd028bf < _0x216d67; _0xd028bf++) {
                var _0x13c729 = _0x44fd4a.ba(_0x34bf65);
                _0x34bf65++;
                var _0xf90d3f = _0x44fd4a.ba(_0x34bf65);
                _0x34bf65++;
                if (_0x6da70c) {
                  var _0x179f52 = _0x6da70c.dd[_0x13c729];
                  if (!_0x179f52) {
                    _0x179f52 = _0x6da70c.dd[_0x13c729] = new _0x5408a7.fd(_0x13c729);
                  }
                  _0x179f52.hd = true;
                  _0x179f52.od = Math.min(0x1, Math.max(0x0, _0xf90d3f / 0x64));
                }
              }
              return _0x34bf65;
            };
            _0x2be48c.prototype.ji = function (_0x4693e9, _0x1adcaa) {
              var _0x41dc2e = this.dh.ch;
              var _0xf2a6b1 = _0x4693e9.ba(_0x1adcaa);
              _0x1adcaa += 0x1;
              var _0x490100 = !!(0x1 & _0xf2a6b1);
              var _0x11e0ac = !!(0x2 & _0xf2a6b1);
              var _0x4fdb90 = !!(0x4 & _0xf2a6b1);
              if (_0x11e0ac) {
                var _0x3e9a74 = _0x41dc2e.Bh;
                _0x41dc2e.zi(_0x4693e9.ea(_0x1adcaa));
                _0x1adcaa += 0x4;
                _0x3e9a74 = _0x41dc2e.Bh - _0x3e9a74;
                if (_0x3e9a74 > 0x0) {
                  _0x1f32cc.og.af.ng.Wg.lg(_0x3e9a74);
                }
              }
              if (_0x4fdb90) {
                this.dh.Di = _0x4693e9.ea(_0x1adcaa);
                _0x1adcaa += 0x4;
              }
              var _0x105b8d = this.Ai(_0x4693e9.ba(_0x1adcaa++), _0x4693e9.ba(_0x1adcaa++), _0x4693e9.ba(_0x1adcaa++));
              var _0x16d6b1 = this.Ai(_0x4693e9.ba(_0x1adcaa++), _0x4693e9.ba(_0x1adcaa++), _0x4693e9.ba(_0x1adcaa++));
              _0x41dc2e.Bi(_0x105b8d, _0x16d6b1, _0x490100);
              _0x1f32cc.Ci.Ye(0.5, this.dh.hh.yg, _0x490100);
              var _0x1dc0b3 = this._h(_0x4693e9, _0x1adcaa);
              _0x1adcaa += this.ai(_0x1dc0b3);
              for (var _0x5293d7 in _0x41dc2e.dd) {
                var _0x50fd22 = _0x41dc2e.dd[_0x5293d7];
                if (_0x50fd22) {
                  _0x50fd22.hd = false;
                }
              }
              for (var _0x57ec14 = 0x0; _0x57ec14 < _0x1dc0b3; _0x57ec14++) {
                var _0x18cf20 = _0x4693e9.ba(_0x1adcaa);
                _0x1adcaa++;
                var _0x10aa81 = _0x4693e9.ba(_0x1adcaa);
                _0x1adcaa++;
                var _0x27581d = _0x41dc2e.dd[_0x18cf20];
                if (!_0x27581d) {
                  _0x27581d = new _0x5408a7.fd(_0x18cf20);
                  _0x41dc2e.dd[_0x18cf20] = _0x27581d;
                }
                _0x27581d.hd = true;
                _0x27581d.od = Math.min(0x1, Math.max(0x0, _0x10aa81 / 0x64));
              }
              _0x1f32cc.og.af.ng.Ug.Uf(_0x41dc2e.dd);
            };
            _0x2be48c.prototype.gi = function (_0x5bc7ba, _0x21b880) {
              var _0x3d9931 = this;
              var _0xebf585 = _0x5bc7ba.ca(_0x21b880);
              _0x21b880 += 0x2;
              var _0x106c8a = this.vi(_0xebf585);
              var _0x3b34f6 = _0x5bc7ba.ea(_0x21b880);
              _0x21b880 += 0x4;
              var _0xb3fddd = this._h(_0x5bc7ba, _0x21b880);
              _0x21b880 += this.ai(_0xb3fddd);
              if (_0x106c8a) {
                _0x106c8a.zi(_0x3b34f6);
                _0x106c8a.Ei(function () {
                  return _0x3d9931.Ai(_0x5bc7ba.ba(_0x21b880++), _0x5bc7ba.ba(_0x21b880++), _0x5bc7ba.ba(_0x21b880++));
                }, _0xb3fddd);
                _0x106c8a.kd(true);
                var _0x15eaba = this.dh.ch.fh();
                var _0x252997 = _0x106c8a.fh();
                var _0x39367c = Math.max(0x0, 0x1 - Math.hypot(_0x15eaba.x - _0x252997.x, _0x15eaba.y - _0x252997.y) / (0.5 * this.dh.eh));
                _0x1f32cc.Ci.We(_0x39367c, _0xebf585);
              } else {
                _0x21b880 += 0x6 * _0xb3fddd;
              }
              return _0x21b880;
            };
            _0x2be48c.prototype.hi = function (_0x3711e4, _0x439479) {
              var _0x5518a2 = _0x3711e4.ca(_0x439479);
              _0x439479 += 0x2;
              var _0x3c66fb = this.dh.Fh[_0x5518a2];
              if (_0x3c66fb && _0x3c66fb.wi) {
                _0x3c66fb.kd(false);
              }
              _0x1f32cc.Ci.Xe(_0x5518a2);
              return _0x439479;
            };
            _0x2be48c.prototype.bi = function (_0x55c9e6, _0x47af7e) {
              var _0x1e6241 = new _0x5408a7.Fi.li();
              _0x1e6241.ae = _0x55c9e6.da(_0x47af7e);
              _0x47af7e += 0x4;
              _0x1e6241.Gh = this.dh.hh.xg === _0x5408a7.Ac.zc ? _0x55c9e6.ba(_0x47af7e++) : _0x167f4e.ps ? _0x167f4e.ps : _0x5408a7.GameParams.Cg;
              _0x1e6241.Gi = this.Ai(_0x55c9e6.ba(_0x47af7e++), _0x55c9e6.ba(_0x47af7e++), _0x55c9e6.ba(_0x47af7e++));
              _0x1e6241.Hh = _0x55c9e6.ba(_0x47af7e++);
              var _0x2ee4e8 = this.dh.Hi[_0x1e6241.ae];
              if (null != _0x2ee4e8) {
                _0x2ee4e8.si();
              }
              var _0x170a79 = new _0x5408a7.Fi(_0x1e6241, _0x1f32cc.og.af.ng);
              _0x170a79.Ii(this.Ji(_0x1e6241.ae), this.Ki(_0x1e6241.ae), true);
              this.dh.Hi[_0x1e6241.ae] = _0x170a79;
              return _0x47af7e;
            };
            _0x2be48c.prototype.ci = function (_0xf2697e, _0x1e8111) {
              var _0x1c829f = _0xf2697e.da(_0x1e8111);
              _0x1e8111 += 0x4;
              var _0xe2626d = this.dh.Hi[_0x1c829f];
              if (_0xe2626d) {
                _0xe2626d.Li = 0x0;
                _0xe2626d.Mi = 1.5 * _0xe2626d.Mi;
                _0xe2626d.Ni = true;
              }
              return _0x1e8111;
            };
            _0x2be48c.prototype.di = function (_0x501694, _0x1cda22) {
              var _0x741be2 = _0x501694.da(_0x1cda22);
              _0x1cda22 += 0x4;
              var _0x284afd = _0x501694.ca(_0x1cda22);
              _0x1cda22 += 0x2;
              var _0x24bfb8 = this.dh.Hi[_0x741be2];
              if (_0x24bfb8) {
                _0x24bfb8.Li = 0x0;
                _0x24bfb8.Mi = 0.1 * _0x24bfb8.Mi;
                _0x24bfb8.Ni = true;
                var _0x3df147 = this.vi(_0x284afd);
                if (_0x3df147 && _0x3df147.xi) {
                  this.dh.hh.yg;
                  var _0x4b5f6c = _0x3df147.fh();
                  _0x24bfb8.Ii(_0x4b5f6c.x, _0x4b5f6c.y, false);
                }
              }
              return _0x1cda22;
            };
            var _0x4adbfb = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            _0x2be48c.prototype.Vh = function (_0x19e9a7) {
              var _0x1aca09 = _0x1f32cc.Lc.Zb().Fb;
              var _0x833455 = _0x1aca09.getImageData(0x0, 0x0, 0x50, 0x50);
              var _0x220995 = _0x4adbfb[0x0];
              var _0x1b0147 = 0x50 - _0x220995;
              var _0x5eba09 = 0x0;
              for (var _0xda96a6 = 0x0; _0xda96a6 < 0x274; _0xda96a6++) {
                var _0x5da89b = _0x19e9a7.ba(0x1 + _0xda96a6);
                for (var _0x4576f6 = 0x0; _0x4576f6 < 0x8; _0x4576f6++) {
                  var _0xe96d75 = 0x0 != (_0x5da89b >> _0x4576f6 & 0x1);
                  var _0x238d73 = 0x4 * (_0x220995 + 0x50 * _0x5eba09);
                  if (_0xe96d75) {
                    _0x833455.data[_0x238d73] = 0xff;
                    _0x833455.data[_0x238d73 + 0x1] = 0xff;
                    _0x833455.data[_0x238d73 + 0x2] = 0xff;
                    _0x833455.data[_0x238d73 + 0x3] = 0xff;
                  } else {
                    _0x833455.data[_0x238d73 + 0x3] = 0x0;
                  }
                  if (++_0x220995 >= _0x1b0147 && ++_0x5eba09 < 0x50) {
                    _0x220995 = _0x4adbfb[_0x5eba09];
                    _0x1b0147 = 0x50 - _0x220995;
                  }
                }
              }
              _0x1aca09.putImageData(_0x833455, 0x0, 0x0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  'x': _wwcio.myLocation.position.x,
                  'y': _wwcio.myLocation.position.y
                });
              }
              var _0x2518fa = _0x1f32cc.og.af.ng.Tg.qh;
              _0x2518fa.texture = _0x1f32cc.Lc.Zb().oa;
              _0x2518fa.texture.update();
            };
            _0x2be48c.prototype.Xh = function (_0x2db336, _0x1ad443) {
              _0x2db336.da(_0x1ad443);
            };
            _0x2be48c.prototype.Yh = function (_0x5ea359, _0x3bf024) {
              this.dh.Oi();
            };
            _0x2be48c.prototype.Wh = function (_0x55a931, _0x292e8c) {
              this.dh.yh = _0x55a931.ca(_0x292e8c);
              _0x292e8c += 0x2;
              this.dh.Ih = _0x55a931.ca(_0x292e8c);
              _0x292e8c += 0x2;
              var _0x39ec64 = new _0x5408a7.Pi();
              _0x39ec64.Ch = [];
              var _0x14ed82 = _0x55a931.ba(_0x292e8c++);
              for (var _0x45d8de = 0x0; _0x45d8de < _0x14ed82; _0x45d8de++) {
                var _0x126407 = _0x55a931.ca(_0x292e8c);
                _0x292e8c += 0x2;
                var _0x2b45b5 = _0x55a931.ea(_0x292e8c);
                _0x292e8c += 0x4;
                _0x39ec64.Ch.push(_0x5408a7.Pi.Qi(_0x126407, _0x2b45b5));
              }
              _0x39ec64.zh = [];
              if (this.dh.hh.xg === _0x5408a7.Ac.zc) {
                var _0x2e62a3 = _0x55a931.ba(_0x292e8c++);
                for (var _0x268ffe = 0x0; _0x268ffe < _0x2e62a3; _0x268ffe++) {
                  var _0x3c35b1 = _0x55a931.ba(_0x292e8c);
                  _0x292e8c += 0x1;
                  var _0x10168a = _0x55a931.ea(_0x292e8c);
                  _0x292e8c += 0x4;
                  _0x39ec64.zh.push(_0x5408a7.Pi.Ri(_0x3c35b1, _0x10168a));
                }
              }
              _0x1f32cc.og.af.ng.Vg.Uf(_0x39ec64);
            };
            _0x2be48c.prototype.vi = function (_0x214604) {
              return _0x214604 === this.dh.hh.yg ? this.dh.ch : this.dh.Fh[_0x214604];
            };
            _0x2be48c.prototype.Ai = function (_0x20c07e, _0x468b77, _0x5dac89) {
              return 0x2710 * ((0xffffff & (0xff & _0x5dac89 | _0x468b77 << 0x8 & 0xff00 | _0x20c07e << 0x10 & 0xff0000)) / 0x800000 - 0x1);
            };
            _0x2be48c.prototype.Ji = function (_0x2d0e97) {
              return ((0xffff & _0x2d0e97) / 0x8000 - 0x1) * this.dh.hh.Dg();
            };
            _0x2be48c.prototype.Ki = function (_0x5d3b6e) {
              return ((_0x5d3b6e >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.dh.hh.Dg();
            };
            _0x2be48c.prototype._h = function (_0x3719d4, _0x5d25f5) {
              var _0x3f9340 = _0x3719d4.ba(_0x5d25f5);
              if (0x0 == (0x80 & _0x3f9340)) {
                return _0x3f9340;
              }
              var _0x509910 = _0x3719d4.ba(_0x5d25f5 + 0x1);
              if (0x0 == (0x80 & _0x509910)) {
                return _0x509910 | _0x3f9340 << 0x7 & 0x3f80;
              }
              var _0x49c2b2 = _0x3719d4.ba(_0x5d25f5 + 0x2);
              if (0x0 == (0x80 & _0x49c2b2)) {
                return _0x49c2b2 | _0x509910 << 0x7 & 0x3f80 | _0x3f9340 << 0xe & 0x1fc000;
              }
              var _0x23177a = _0x3719d4.ba(_0x5d25f5 + 0x3);
              return 0x0 == (0x80 & _0x23177a) ? _0x23177a | _0x49c2b2 << 0x7 & 0x3f80 | _0x509910 << 0xe & 0x1fc000 | _0x3f9340 << 0x15 & 0xfe00000 : undefined;
            };
            _0x2be48c.prototype.ai = function (_0x139dd7) {
              return _0x139dd7 < 0x80 ? 0x1 : _0x139dd7 < 0x4000 ? 0x2 : _0x139dd7 < 0x200000 ? 0x3 : _0x139dd7 < 0x10000000 ? 0x4 : undefined;
            };
            return _0x2be48c;
          }();
          _0x5408a7.Si = function () {
            function _0x47ccbf(_0x1c5812) {
              this.Ti = _0x1c5812;
            }
            _0x47ccbf.Ui = function () {
              return new _0x5408a7.Si(null);
            };
            _0x47ccbf.Vi = function (_0x4c11f0) {
              return new _0x5408a7.Si(_0x4c11f0);
            };
            _0x47ccbf.prototype.bc = function () {
              return this.Ti;
            };
            _0x47ccbf.prototype.Wi = function () {
              return null != this.Ti;
            };
            _0x47ccbf.prototype.Xi = function (_0x171511) {
              if (null != this.Ti) {
                _0x171511(this.Ti);
              }
            };
            return _0x47ccbf;
          }();
          _0x5408a7.Fi = function () {
            function _0x3c6808(_0x5cc702, _0x5814b3) {
              this.Eh = _0x5cc702;
              this.Yi = _0x5cc702.Hh >= 0x50;
              this.Zi = 0x0;
              this.$i = 0x0;
              this._i = 0x0;
              this.aj = 0x0;
              this.Mi = this.Yi ? 0x1 : _0x5cc702.Gi;
              this.Li = 0x1;
              this.Ni = false;
              this.bj = 0x0;
              this.cj = 0x0;
              this.dj = 0x1;
              this.ej = 6.283185307179586 * Math.random();
              this.fj = new _0x5408a7.PortionSpriteTree();
              this.fj.yc(_0x1f32cc.dh.hh.xg, this.Eh.Gh === _0x5408a7.GameParams.Cg ? null : _0x1f32cc.Lc.Ub().jb(this.Eh.Gh), _0x1f32cc.Lc.Ub().ob(this.Eh.Hh));
              _0x5814b3.mh(_0x5cc702.ae, this.fj);
            }
            _0x3c6808.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 0x64;
              this.fj.nh.Dc.xc.height = 0x64;
            };
            _0x3c6808.prototype.Ii = function (_0x1949d9, _0x558b07, _0x491b74) {
              this.Zi = _0x1949d9;
              this.$i = _0x558b07;
              if (_0x491b74) {
                this._i = _0x1949d9;
                this.aj = _0x558b07;
              }
            };
            _0x3c6808.prototype.hj = function (_0x3dacb0, _0x32fa69) {
              var _0x5aa9c6 = Math.min(0.5, 0x1 * this.Mi);
              var _0x250b16 = Math.min(2.5, 1.5 * this.Mi);
              this.bj = _0x318912.Q(this.bj, _0x5aa9c6, _0x32fa69, 0.0025);
              this.cj = _0x318912.Q(this.cj, _0x250b16, _0x32fa69, 0.0025);
              this.dj = _0x318912.Q(this.dj, this.Li, _0x32fa69, 0.0025);
            };
            _0x3c6808.prototype.ij = function (_0x2508fb, _0x3c1d3f, _0x5e393f) {
              this._i = _0x318912.Q(this._i, this.Zi, _0x3c1d3f, 0.0025);
              this.aj = _0x318912.Q(this.aj, this.$i, _0x3c1d3f, 0.0025);
              this.fj.Uf(this, _0x2508fb, _0x3c1d3f, _0x5e393f);
            };
            _0x3c6808.li = function () {
              function _0x39f304() {
                this.me = 0x0;
                this.ae = 0x0;
                this.Gh = _0x167f4e.ps ? _0x167f4e.ps : _0x5408a7.GameParams.Cg;
                this.Gi = 0x0;
                this.Hh = 0x0;
              }
              return _0x39f304;
            }();
            return _0x3c6808;
          }();
          _0x5408a7.PortionSpriteTree = function () {
            function _0x3acb45() {
              this.nh = new _0x514fe4(new _0x5408a7.sc(), new _0x5408a7.sc());
              this.nh.Dc.xc.blendMode = _0x587230.v.z;
              this.nh.Dc.xc.zIndex = 0x64;
              this.nh.Cc.xc.zIndex = 0x1f4;
            }
            _0x3acb45.prototype.yc = function (_0x174151, _0xa6396c, _0x799f42) {
              var _0x1e71c2 = _0x799f42.ub;
              if (_0x1e71c2) {
                this.nh.Cc.Bc(_0x1e71c2);
              }
              var _0x186d20 = _0x174151 === _0x5408a7.Ac.zc && _0xa6396c ? _0xa6396c.sb.vb : _0x799f42.vb;
              if (_0x186d20) {
                this.nh.Dc.Bc(_0x186d20);
              }
            };
            _0x3acb45.prototype.Uf = function (_0x27f895, _0x4852c9, _0x39c24b, _0x275c8e) {
              if (!_0x275c8e(_0x27f895._i, _0x27f895.aj)) {
                this.nh.Uc();
              } else {
                var _0x2fcdca = _0x37ea2c > 0x1 ? _0x37ea2c / 0x5 : 0x0;
                var _0x4e86d7 = _0x27f895.cj * 0x1 + 0.3 * Math.cos(_0x27f895.ej + _0x4852c9 / 0xc8);
                this.nh.Sc(_0x27f895._i, _0x27f895.aj, _0x27f895.Yi ? 0x2 * _0x27f895.bj + _0x2fcdca : 0x2 * _0x27f895.bj, _0x27f895.Yi ? 0x1 * _0x27f895.dj + _0x2fcdca : 0x1 * _0x27f895.dj, _0x27f895.Yi ? 1.2 * _0x4e86d7 + _0x2fcdca : 0x2 * _0x4e86d7, _0x27f895.Yi ? 0.8 * _0x27f895.dj : 0.3 * _0x27f895.dj);
              }
            };
            var _0x514fe4 = function () {
              function _0xbe9258(_0x1cd9cf, _0x5e3848) {
                this.Cc = _0x1cd9cf;
                this.Dc = _0x5e3848;
              }
              _0xbe9258.prototype.Sc = function (_0x35639e, _0xd47198, _0x19e4e9, _0x15c55c, _0x3c405f, _0x58b0b4) {
                this.Cc.kd(true);
                this.Cc.ld(_0x35639e, _0xd47198);
                this.Cc.Tc(_0x19e4e9);
                this.Cc.jj(_0x15c55c);
                this.Dc.kd(true);
                this.Dc.ld(_0x35639e, _0xd47198);
                this.Dc.Tc(_0x3c405f);
                this.Dc.jj(_0x58b0b4);
              };
              _0xbe9258.prototype.Uc = function () {};
              return _0xbe9258;
            }();
            return _0x3acb45;
          }();
          _0x5408a7.kj = function () {
            function _0x393425() {
              this.lj = 0x0;
              this.mj = 0x0;
              this.nj = 0x0;
              this.oj = 0x0;
              this.pj = 0x0;
              this.qj = [];
            }
            function _0x30597e(_0x2108fd, _0xebb988) {
              for (var _0x3f431e = 0x0; _0x3f431e < _0x2108fd.length; _0x3f431e++) {
                if (_0x2108fd[_0x3f431e].id == _0xebb988) {
                  return _0x3f431e;
                }
              }
              return -0x1;
            }
            _0x393425.prototype.ha = function () {};
            _0x393425.prototype.rj = function (_0x4b6fbe) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = _0x3e38e6({}, this);
                localStorage.setItem('wwcSaveGame', JSON.stringify(bbs));
              }
              switch (_0x4b6fbe) {
                case _0x5408a7.tj.sj:
                  return this.lj;
                case _0x5408a7.tj.uj:
                  return this.mj;
                case _0x5408a7.tj.vj:
                  return this.nj;
                case _0x5408a7.tj.wj:
                  return this.oj;
                case _0x5408a7.tj.xj:
                  return this.pj;
              }
              return 0x0;
            };
            _0x393425.prototype.yj = function () {
              return new _0x5408a7.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            _0x393425.prototype.zj = function (_0x112579) {
              this.qj.push(_0x112579);
              this.Aj();
            };
            _0x393425.prototype.Bj = function () {
              if (!_0x1f32cc.Lc.Wb()) {
                return _0x318912.W([0x20, 0x21, 0x22, 0x23]);
              }
              var _0x1343d1 = [];
              var _0x5916c9 = _0x1f32cc.Lc.Xb().skinArrayDict;
              for (var _0x504631 = 0x0; _0x504631 < _0x5916c9.length; _0x504631++) {
                var _0x257bc2 = _0x5916c9[_0x504631];
                if (this.Cj(_0x257bc2.id, _0x5408a7.tj.sj)) {
                  _0x1343d1.push(_0x257bc2);
                }
              }
              return 0x0 === _0x1343d1.length ? 0x0 : _0x1343d1[parseInt(_0x1343d1.length * Math.random())].id;
            };
            _0x393425.prototype.Dj = function () {
              if (_0x1f32cc.Lc.Wb()) {
                var _0x5d12d8 = _0x1f32cc.Lc.Xb().skinArrayDict;
                var _0x3163b9 = _0x30597e(_0x5d12d8, this.lj);
                if (!(_0x3163b9 < 0x0)) {
                  for (var _0x23ee33 = _0x3163b9 + 0x1; _0x23ee33 < _0x5d12d8.length; _0x23ee33++) {
                    if (this.Cj(_0x5d12d8[_0x23ee33].id, _0x5408a7.tj.sj)) {
                      this.lj = _0x5d12d8[_0x23ee33].id;
                      return void this.Aj();
                    }
                  }
                  for (var _0xfd0f37 = 0x0; _0xfd0f37 < _0x3163b9; _0xfd0f37++) {
                    if (this.Cj(_0x5d12d8[_0xfd0f37].id, _0x5408a7.tj.sj)) {
                      this.lj = _0x5d12d8[_0xfd0f37].id;
                      return void this.Aj();
                    }
                  }
                }
              }
            };
            _0x393425.prototype.Ej = function () {
              var _0x4eab1a = _0x1f32cc;
              if (_0x4eab1a.Lc.Wb) {
                var _0x3dff6a = _0x4eab1a.Lc.Xb().skinArrayDict;
                var _0x28fb61 = _0x30597e(_0x3dff6a, this.lj);
                if (!(_0x28fb61 < 0x0)) {
                  for (var _0xceb744 = _0x28fb61 - 0x1; _0xceb744 >= 0x0; _0xceb744--) {
                    if (this.Cj(_0x3dff6a[_0xceb744].id, _0x5408a7.tj.sj)) {
                      this.lj = _0x3dff6a[_0xceb744].id;
                      return void this.Aj();
                    }
                  }
                  for (var _0x1bf8b7 = _0x3dff6a.length - 0x1; _0x1bf8b7 > _0x28fb61; _0x1bf8b7--) {
                    if (this.Cj(_0x3dff6a[_0x1bf8b7].id, _0x5408a7.tj.sj)) {
                      this.lj = _0x3dff6a[_0x1bf8b7].id;
                      return void this.Aj();
                    }
                  }
                }
              }
            };
            _0x393425.prototype.Fj = function (_0x4c6ffa, _0x49e4cd) {
              if (!_0x1f32cc.Lc.Wb() || this.Cj(_0x4c6ffa, _0x49e4cd)) {
                switch (_0x49e4cd) {
                  case _0x5408a7.tj.sj:
                    return void (this.lj !== _0x4c6ffa && (this.lj = _0x4c6ffa, this.Aj()));
                  case _0x5408a7.tj.uj:
                    return void (this.mj !== _0x4c6ffa && (this.mj = _0x4c6ffa, this.Aj()));
                  case _0x5408a7.tj.vj:
                    return void (this.nj !== _0x4c6ffa && (this.nj = _0x4c6ffa, this.Aj()));
                  case _0x5408a7.tj.wj:
                    return void (this.oj !== _0x4c6ffa && (this.oj = _0x4c6ffa, this.Aj()));
                  case _0x5408a7.tj.xj:
                    return void (this.pj !== _0x4c6ffa && (this.pj = _0x4c6ffa, this.Aj()));
                }
              }
            };
            _0x393425.prototype.Cj = function (_0x1b2fd0, _0x257361) {
              var _0x550fa7 = this.Gj(_0x1b2fd0, _0x257361);
              return null != _0x550fa7 && (_0x1f32cc.Ij.Hj() ? 0x0 === _0x550fa7.Jj() && !_0x550fa7.Kj() || _0x1f32cc.Ij.Lj(_0x1b2fd0, _0x257361) : _0x550fa7.Mj());
            };
            _0x393425.prototype.Gj = function (_0x4cc8d6, _0x564907) {
              if (!_0x1f32cc.Lc.Wb()) {
                return null;
              }
              var _0x4957f8 = _0x1f32cc.Lc.Xb();
              if (_0x564907 === _0x5408a7.tj.sj) {
                var _0x48967f = _0x30597e(_0x4957f8.skinArrayDict, _0x4cc8d6);
                return _0x48967f < 0x0 ? null : _0x5408a7.Oj.Nj(_0x4957f8.skinArrayDict[_0x48967f]);
              }
              var _0x1a06a0 = null;
              switch (_0x564907) {
                case _0x5408a7.tj.uj:
                  _0x1a06a0 = _0x4957f8.eyesDict[_0x4cc8d6];
                  break;
                case _0x5408a7.tj.vj:
                  _0x1a06a0 = _0x4957f8.mouthDict[_0x4cc8d6];
                  break;
                case _0x5408a7.tj.wj:
                  _0x1a06a0 = _0x4957f8.hatDict[_0x4cc8d6];
                  break;
                case _0x5408a7.tj.xj:
                  _0x1a06a0 = _0x4957f8.glassesDict[_0x4cc8d6];
              }
              return null != _0x1a06a0 ? _0x5408a7.Oj.Pj(_0x1a06a0) : null;
            };
            _0x393425.prototype.Aj = function () {
              for (var _0x55d5db = 0x0; _0x55d5db < this.qj.length; _0x55d5db++) {
                this.qj[_0x55d5db]();
              }
            };
            return _0x393425;
          }();
          _0x5408a7.tj = function () {
            function _0x5925c0() {}
            _0x5925c0.sj = "SKIN";
            _0x5925c0.uj = 'EYES';
            _0x5925c0.vj = "MOUTH";
            _0x5925c0.xj = 'GLASSES';
            _0x5925c0.wj = 'HAT';
            return _0x5925c0;
          }();
          _0x5408a7.Qj = function () {
            function _0x47741e() {
              this.Bf = new _0x587230.Texture(_0x587230.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(0x24);
              this._g = _0x167f4e.bgg();
              this.ah = new _0x587230.Texture(function () {
                var _0x1580b4 = _0x587230.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                _0x1580b4.wrapMode = _0x587230.C.D;
                return _0x1580b4;
              }());
              this.Zg = new _0x587230.Texture(_0x587230.BaseTexture.from('/images/lens.png'));
              this.rf = null;
              this.Db = function () {
                var _0x591f7d = window.document.createElement("canvas");
                _0x591f7d.width = 0x50;
                _0x591f7d.height = 0x50;
                return {
                  'Eb': _0x591f7d,
                  'Fb': _0x591f7d.getContext('2d'),
                  'oa': new _0x587230.Texture(_0x587230.BaseTexture.from(_0x591f7d))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            _0x47741e.prototype.ha = function (_0x3d45b7) {
              function _0x5eb64c() {
                if (0x0 == --_0x25128d) {
                  _0x3d45b7();
                }
              }
              var _0x25128d = 0x4;
              this.Ae = {};
              _0x5eb64c();
              this.we = {};
              _0x5eb64c();
              this.Rj = [];
              _0x5eb64c();
              this.Sj = null;
              _0x5eb64c();
            };
            return _0x47741e;
          }();
          _0x5408a7.Tj = function () {
            function _0x293c63() {
              this.Uj = null;
              this.af = new _0x5408a7.Vj();
              this._e = new _0x5408a7.Wj();
              this.Xj = new _0x5408a7.Yj();
              this.Zj = new _0x5408a7.$j();
              this._j = new _0x5408a7.ak();
              this.bk = new _0x5408a7.ck();
              this.dk = new _0x5408a7.ek();
              this.fk = new _0x5408a7.gk();
              this.$h = new _0x5408a7.hk();
              this.ik = new _0x5408a7.jk();
              this.kk = new _0x5408a7.lk();
              this.mk = new _0x5408a7.nk();
              this.ok = new _0x5408a7.pk();
              this.qk = new _0x5408a7.rk();
              this.ie = new _0x5408a7.sk();
              this.tk = new _0x5408a7.uk();
              this.vk = new _0x5408a7.wk();
              this.xk = new _0x5408a7.yk();
              this.zk = [];
            }
            function _0x411773(_0x9bba74, _0x13835c) {
              if (0x0 !== _0x13835c) {
                var _0x59ebee = _0x9bba74[_0x13835c];
                _0x318912.T(_0x9bba74, 0x0, 0x1, _0x13835c);
                _0x9bba74[0x0] = _0x59ebee;
              }
            }
            function _0x46adb5(_0x518b12, _0x30be0f) {
              if (_0x30be0f !== _0x518b12.length + 0x1) {
                var _0xe8cdee = _0x518b12[_0x30be0f];
                _0x318912.T(_0x518b12, _0x30be0f + 0x1, _0x30be0f, _0x518b12.length - _0x30be0f - 0x1);
                _0x518b12[_0x518b12.length - 0x1] = _0xe8cdee;
              }
            }
            function _0x358317(_0x139b7b, _0x34cc70) {
              for (var _0x20a3b4 = 0x0; _0x20a3b4 < _0x139b7b.length; _0x20a3b4++) {
                if (_0x139b7b[_0x20a3b4] === _0x34cc70) {
                  return _0x20a3b4;
                }
              }
              return -0x1;
            }
            _0x293c63.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var _0x2f893c = 0x0; _0x2f893c < this.zk.length; _0x2f893c++) {
                this.zk[_0x2f893c].ha();
              }
            };
            _0x293c63.prototype.lh = function (_0x57e6b2, _0x32c0d4) {
              for (var _0xc0c973 = this.zk.length - 0x1; _0xc0c973 >= 0x0; _0xc0c973--) {
                this.zk[_0xc0c973].Nf(_0x57e6b2, _0x32c0d4);
              }
              if (this.zk[0x0] !== this.af && this.zk[0x0] !== this.xk && null != this.Uj) {
                this.Uj.Nf(_0x57e6b2, _0x32c0d4);
              }
            };
            _0x293c63.prototype.Jf = function () {
              for (var _0x4ec207 = this.zk.length - 0x1; _0x4ec207 >= 0x0; _0x4ec207--) {
                this.zk[_0x4ec207].Jf();
              }
              if (null != this.Uj) {
                this.Uj.Jf();
              }
            };
            _0x293c63.prototype.Ak = function (_0x317325) {
              var _0x5b48fb = _0x358317(this.zk, _0x317325);
              if (!(_0x5b48fb < 0x0)) {
                this.zk[0x0].Bk();
                _0x411773(this.zk, _0x5b48fb);
                this.Ck();
              }
            };
            _0x293c63.prototype.Dk = function () {
              this.zk[0x0].Bk();
              do {
                _0x46adb5(this.zk, 0x0);
              } while (this.zk[0x0].nd !== _0x5408a7.Fk.Ek);
              this.Ck();
            };
            _0x293c63.prototype.Ck = function () {
              var _0x3849e6 = this.zk[0x0];
              _0x3849e6.Gk();
              _0x3849e6.Hk();
              this.Ik();
            };
            _0x293c63.prototype.Jk = function () {
              return 0x0 !== this.zk.length && this.zk[0x0].nd === _0x5408a7.Fk.Ek && this.qk.Kk();
            };
            _0x293c63.prototype.Lk = function () {
              return 0x0 === this.zk.length ? null : this.zk[0x0];
            };
            _0x293c63.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return _0x293c63;
          }();
          _0x5408a7.Pi = function () {
            function _0x1c8efc() {
              this.Ch = [];
              this.zh = [];
            }
            _0x1c8efc.Qi = function (_0x85c3f8, _0x1652ae) {
              return {
                'Dh': _0x85c3f8,
                'Bh': _0x1652ae
              };
            };
            _0x1c8efc.Ri = function (_0x169ea5, _0x3d2696) {
              return {
                'Ah': _0x169ea5,
                'Bh': _0x3d2696
              };
            };
            return _0x1c8efc;
          }();
          _0x5408a7.Mk = function () {
            function _0x3d6ec7() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = 'guest';
              this.Rk = {};
            }
            _0x3d6ec7.Sk = new (function () {
              function _0x14831e() {}
              _0x14831e.Tk = function () {
                function _0xb9d7ed(_0x1c72fd) {
                  this.Uk = _0x1c72fd;
                }
                return _0xb9d7ed;
              }();
              _0x14831e.prototype.Vk = function () {
                return "undefined" != typeof FB;
              };
              _0x14831e.prototype.Wk = function (_0x3ec4ef, _0x4f1c3d, _0x558d65) {
                var _0x275b15 = "https://graph.facebook.com/me?access_token=" + _0x3ec4ef;
                $.get(_0x275b15).fail(function () {
                  _0x4f1c3d();
                }).done(function () {
                  _0x558d65();
                });
              };
              _0x14831e.prototype.Xk = function (_0x83ea0d, _0x2aff8b) {
                if (!this.Vk()) {
                  return void _0x83ea0d();
                }
                this.Yk(function () {
                  FB.login(function (_0x5e8976) {
                    if ("connected" !== _0x5e8976.status) {
                      return void _0x83ea0d();
                    }
                    var _0x5b0599 = _0x5e8976.authResponse.accessToken;
                    _0x2aff8b(new _0x14831e.Tk(_0x5b0599));
                  });
                }, function (_0x3860b3) {
                  _0x2aff8b(_0x3860b3);
                });
              };
              _0x14831e.prototype.Yk = function (_0x233495, _0x312c18) {
                var _0x43f935 = this;
                if (!this.Vk()) {
                  return void _0x233495();
                }
                FB.getLoginStatus(function (_0x1dacd2) {
                  if ('connected' !== _0x1dacd2.status) {
                    return void _0x233495();
                  }
                  var _0x4488f6 = _0x1dacd2.authResponse.accessToken;
                  _0x43f935.Wk(_0x4488f6, function () {
                    _0x233495();
                  }, function () {
                    _0x312c18(new _0x14831e.Tk(_0x4488f6));
                  });
                });
              };
              _0x14831e.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return _0x14831e;
            }())();
            _0x3d6ec7.$k = new (function () {
              function _0x545e4b() {}
              _0x545e4b._k = function () {
                function _0xb2e541(_0x52ba4e, _0x5146c3) {
                  this.Uk = _0x52ba4e;
                  this.al = _0x5146c3;
                }
                return _0xb2e541;
              }();
              _0x545e4b.prototype.Vk = function () {
                return typeof _0x17960c !== 'undefined';
              };
              _0x545e4b.prototype.Xk = function (_0x1c2994, _0x18eb2c) {
                if (typeof _0x17960c === "undefined") {
                  return void _0x1c2994();
                }
                if (undefined === _0x17960c) {
                  return void _0x1c2994();
                }
                _0x17960c.then(function () {
                  if (_0x17960c.isSignedIn.get()) {
                    var _0x2af446 = _0x17960c.currentUser.get();
                    var _0x12a2b2 = _0x2af446.getAuthResponse().id_token;
                    var _0x95772a = new Date().getTime() + 0x3e8 * _0x2af446.getAuthResponse().expires_in;
                    if (new Date().getTime() < _0x95772a) {
                      return void _0x18eb2c(new _0x545e4b._k(_0x12a2b2, _0x95772a));
                    }
                  }
                  _0x17960c.signIn().then(function (_0x3565d1) {
                    if (typeof _0x3565d1.error !== 'undefined') {
                      return void _0x1c2994();
                    }
                    if (!_0x3565d1.isSignedIn()) {
                      return void _0x1c2994();
                    }
                    var _0x4f731c = _0x3565d1.getAuthResponse().id_token;
                    var _0x43cab0 = new Date().getTime() + 0x3e8 * _0x3565d1.getAuthResponse().expires_in;
                    _0x18eb2c(new _0x545e4b._k(_0x4f731c, _0x43cab0));
                  });
                });
              };
              _0x545e4b.prototype.Yk = function (_0x4852d2, _0x7e9d8) {
                if (undefined === _0x17960c) {
                  return void _0x4852d2();
                }
                _0x17960c.then(function () {
                  if (_0x17960c.isSignedIn.get()) {
                    var _0x192bfd = _0x17960c.currentUser.get();
                    var _0x123ef0 = _0x192bfd.getAuthResponse().id_token;
                    var _0x2a78aa = new Date().getTime() + 0x3e8 * _0x192bfd.getAuthResponse().expires_in;
                    if (new Date().getTime() < _0x2a78aa) {
                      return void _0x7e9d8(new _0x545e4b._k(_0x123ef0, _0x2a78aa));
                    }
                  }
                  _0x4852d2();
                });
              };
              _0x545e4b.prototype.Zk = function () {
                if (undefined !== _0x17960c) {
                  _0x17960c.signOut();
                }
              };
              return _0x545e4b;
            }())();
            _0x3d6ec7.prototype.ha = function () {
              this.bl();
            };
            _0x3d6ec7.prototype.cl = function () {
              return this.Pk ? this.Rk.userId : '';
            };
            _0x3d6ec7.prototype.dl = function () {
              return this.Pk ? this.Rk.username : '';
            };
            _0x3d6ec7.prototype.el = function () {
              return this.Pk ? this.Rk.nickname.substring(0x0, 0x12) : '';
            };
            _0x3d6ec7.prototype.fl = function () {
              return this.Pk ? this.Rk.avatarUrl : GUEST_AVATAR_URL;
            };
            _0x3d6ec7.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            _0x3d6ec7.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            _0x3d6ec7.prototype.il = function () {
              return this.Pk ? this.Rk.coins : 0x0;
            };
            _0x3d6ec7.prototype.jl = function () {
              return this.Pk ? this.Rk.level : 0x1;
            };
            _0x3d6ec7.prototype.kl = function () {
              return this.Pk ? this.Rk.expOnLevel : 0x0;
            };
            _0x3d6ec7.prototype.ll = function () {
              return this.Pk ? this.Rk.expToNext : 0x32;
            };
            _0x3d6ec7.prototype.ml = function () {
              return this.Pk ? this.Rk.skinId : 0x0;
            };
            _0x3d6ec7.prototype.nl = function () {
              return this.Pk ? this.Rk.eyesId : 0x0;
            };
            _0x3d6ec7.prototype.ol = function () {
              return this.Pk ? this.Rk.mouthId : 0x0;
            };
            _0x3d6ec7.prototype.pl = function () {
              return this.Pk ? this.Rk.glassesId : 0x0;
            };
            _0x3d6ec7.prototype.ql = function () {
              return this.Pk ? this.Rk.hatId : 0x0;
            };
            _0x3d6ec7.prototype.rl = function () {
              return this.Pk ? this.Rk.highScore : 0x0;
            };
            _0x3d6ec7.prototype.sl = function () {
              return this.Pk ? this.Rk.bestSurvivalTimeSec : 0x0;
            };
            _0x3d6ec7.prototype.tl = function () {
              return this.Pk ? this.Rk.kills : 0x0;
            };
            _0x3d6ec7.prototype.ul = function () {
              return this.Pk ? this.Rk.headShots : 0x0;
            };
            _0x3d6ec7.prototype.vl = function () {
              return this.Pk ? this.Rk.sessionsPlayed : 0x0;
            };
            _0x3d6ec7.prototype.wl = function () {
              return this.Pk ? this.Rk.totalPlayTimeSec : 0x0;
            };
            _0x3d6ec7.prototype.xl = function () {
              return this.Pk ? this.Rk.regDate : {};
            };
            _0x3d6ec7.prototype.yl = function (_0x45ebf9) {
              this.Nk.push(_0x45ebf9);
              _0x45ebf9();
            };
            _0x3d6ec7.prototype.zl = function (_0x316d6c) {
              this.Ok.push(_0x316d6c);
              _0x316d6c();
            };
            _0x3d6ec7.prototype.Lj = function (_0xc9560, _0x5452e0) {
              var _0xd2beb = this.Rk.propertyList;
              if (null == _0xd2beb) {
                return false;
              }
              var _0x13d894 = _0xc9560.toString();
              for (var _0xe803a7 = 0x0; _0xe803a7 < _0xd2beb.length; _0xe803a7++) {
                var _0xacb850 = _0xd2beb[_0xe803a7];
                if (_0xacb850.id === _0x13d894 && _0xacb850.type === _0x5452e0) {
                  return true;
                }
              }
              return false;
            };
            _0x3d6ec7.prototype.Hj = function () {
              return this.Pk;
            };
            _0x3d6ec7.prototype.Al = function () {
              return this.Qk;
            };
            _0x3d6ec7.prototype.Bl = function (_0x590112) {
              var _0x2933e8 = this;
              var _0x537a7e = this.cl();
              var _0x3b3580 = this.il();
              var _0x8f2fb5 = this.jl();
              this.Cl(function () {
                if (null != _0x590112) {
                  _0x590112();
                }
              }, function (_0x241ab1) {
                _0x1bc4f7(_0x241ab1.user_data);
                _0x2933e8.Rk = _0x241ab1.user_data;
                _0x2933e8.Dl();
                _0x2933e8.Rk.isConsentGiven = true;
                var _0x2e3a59 = _0x2933e8.cl();
                var _0x151721 = _0x2933e8.il();
                var _0x285a8e = _0x2933e8.jl();
                if (_0x537a7e === _0x2e3a59) {
                  if (_0x285a8e > 0x1 && _0x285a8e !== _0x8f2fb5) {
                    _0x1f32cc.og.qk.El(new _0x5408a7.Fl(currLevel));
                  }
                  var _0x3dea7e = _0x151721 - _0x3b3580;
                  if (_0x3dea7e >= 0x14) {
                    _0x1f32cc.og.qk.El(new _0x5408a7.Gl(_0x3dea7e));
                  }
                }
                if (null != _0x590112) {
                  _0x590112();
                }
              });
            };
            _0x3d6ec7.prototype.Cl = function (_0x1c1c20, _0x23c174) {
              var _0x11fd99 = _0x318912.a.b + '/pub/wuid/' + this.Qk + '/getUserData';
              _0x318912.Z(_0x11fd99, _0x1c1c20, function (_0x8ba9fa) {
                if (0x4b0 !== _0x8ba9fa.code) {
                  _0x1c1c20();
                } else {
                  _0x23c174(_0x8ba9fa);
                }
              });
            };
            _0x3d6ec7.prototype.Hl = function (_0x3721b9, _0x3bb5a6, _0x1fa297, _0x398ca4) {
              var _0x479fa0 = _0x318912.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x3721b9 + '&type=' + _0x3bb5a6;
              _0x318912.Z(_0x479fa0, function () {
                _0x1fa297();
              }, function (_0xfa5a9e) {
                if (0x4b0 !== _0xfa5a9e.code) {
                  _0x1fa297();
                } else {
                  _0x398ca4(_0xfa5a9e);
                }
              });
            };
            _0x3d6ec7.prototype.Il = function (_0x294205, _0xc77b50) {
              var _0x1fbe6d = _0x318912.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              _0x318912.Z(_0x1fbe6d, _0x294205, function (_0x1d5614) {
                if (0x4b0 !== _0x1d5614.code) {
                  _0x294205();
                } else {
                  _0xc77b50(_0x1d5614);
                }
              });
            };
            _0x3d6ec7.prototype.Jl = function (_0x71ae7d) {
              var _0x35001f = this;
              if (this.Pk) {
                this.Kl();
              }
              _0x3d6ec7.Sk.Xk(function () {
                _0x71ae7d();
              }, function (_0xa112c2) {
                _0x35001f.Ll('fb', _0xa112c2.Uk, _0x71ae7d);
              });
            };
            _0x3d6ec7.prototype.Ml = function (_0x35cb34) {
              var _0x32255d = this;
              if (this.Pk) {
                this.Kl();
              }
              _0x3d6ec7.$k.Xk(function () {
                _0x35cb34();
              }, function (_0x732bd1) {
                _0x32255d.Ll('gg', _0x732bd1.Uk, _0x35cb34);
              });
            };
            _0x3d6ec7.prototype.Ll = function (_0x3f33c7, _0x25cdbf, _0x489f48, _0x300faa) {
              _0x300faa = _0x300faa || 0x0;
              var _0x24a813 = $("#please-wait-view");
              if (_0x300faa < 0x1) {
                _0x24a813.append(" AUTO CONNECTION <i id=\"auto_connection_text\">".concat(_0x300faa, "<i>..."));
              }
              var _0x16b860 = this;
              var _0x12a69d = _0x3f33c7 + '_' + _0x25cdbf;
              var _0x5b13e1 = "https://gateway.wormate.io/pub/wuid/" + _0x12a69d + "/login";
              bbs.wuid = _0x12a69d;
              _0x300faa++;
              _0x24a813.fadeIn(0x1f4);
              $("#auto_connection_text").html(_0x300faa);
              fetch(_0x5b13e1, {
                'mode': "cors"
              }).then(function (_0x24e767) {
                if (_0x24e767.ok) {
                  return _0x24e767.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (_0xe397a1) {
                if (0x4b0 !== _0xe397a1.code) {
                  _0x16b860.Ll(_0x3f33c7, _0x25cdbf, _0x489f48, _0x300faa);
                  return;
                }
                if (_0xe397a1.user_data) {
                  _0x24a813.html('...');
                  _0x24a813.fadeOut(0x1f4);
                  _0x16b860.Ol(_0x3f33c7, _0x25cdbf, _0xe397a1.user_data);
                  if (null != _0x489f48) {
                    _0x489f48();
                  }
                }
              })["catch"](function (_0xb29d38) {
                _0x16b860.Nl();
                _0x24a813.html("...");
                _0x24a813.fadeOut(0x1f4);
              });
            };
            _0x3d6ec7.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (_0x59a9ad) {}
              this.Rl();
            };
            _0x3d6ec7.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (_0x2c8ab3) {});
              }
            };
            _0x3d6ec7.prototype.Nl = function () {
              _0x1f32cc.og.Ak(_0x1f32cc.og.tk);
            };
            _0x3d6ec7.prototype.Ol = function (_0x3b7ed4, _0x1a8ba9, _0x5d3080) {
              var _0x27618c = this;
              var _0x14fb27 = this.Pk ? this.Rk.userId : "guest";
              _0x310814(_0x5d3080, function (_0x2e58e1) {
                _0x1bc4f7(_0x2e58e1);
                _0x27618c.Pk = true;
                _0x27618c.Qk = _0x3b7ed4 + '_' + _0x1a8ba9;
                _0x27618c.Rk = _0x2e58e1;
                _0x5408a7.Vf.eg(_0x5408a7.Vf.$f, _0x3b7ed4, 0x3c);
                if (_0x14fb27 !== _0x27618c.Rk.userId) {
                  _0x27618c.Tl();
                } else {
                  _0x27618c.Dl();
                }
                window.bbs.loading = false;
              });
            };
            _0x3d6ec7.prototype.Rl = function () {
              var _0x410507 = this.Pk ? this.Rk.userId : 'guest';
              this.Pk = false;
              this.Qk = 'guest';
              this.Rk = {};
              _0x5408a7.Vf.eg(_0x5408a7.Vf.$f, '', 0x3c);
              if (_0x410507 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            _0x3d6ec7.prototype.bl = function () {
              var _0x763c7b = _0x5408a7.Vf.fg(_0x5408a7.Vf.$f);
              var _0x5e0cc4 = this;
              if ('fb' === _0x763c7b) {
                var _0x316d3d = 0x1;
                !function _0x3b98cc() {
                  if (!_0x3d6ec7.Sk.Vk() && _0x316d3d++ < 0x5) {
                    return void setTimeout(_0x3b98cc, 0x3e8);
                  }
                  _0x3d6ec7.Sk.Yk(function () {}, function (_0x51c0f6) {
                    _0x5e0cc4.Ll('fb', _0x51c0f6.Uk);
                  });
                }();
              } else {
                if ('gg' === _0x763c7b) {
                  var _0x4a2676 = 0x1;
                  !function _0x5b4024() {
                    if (!_0x3d6ec7.$k.Vk() && _0x4a2676++ < 0x5) {
                      return void setTimeout(_0x5b4024, 0x3e8);
                    }
                    _0x3d6ec7.$k.Yk(function () {}, function (_0x271a08) {
                      _0x5e0cc4.Ll('gg', _0x271a08.Uk);
                    });
                  }();
                }
              }
            };
            _0x3d6ec7.prototype.Tl = function () {
              for (var _0xec701f = 0x0; _0xec701f < this.Nk.length; _0xec701f++) {
                this.Nk[_0xec701f]();
              }
              this.Dl();
            };
            _0x3d6ec7.prototype.Dl = function () {
              for (var _0x8fb780 = 0x0; _0x8fb780 < this.Ok.length; _0x8fb780++) {
                this.Ok[_0x8fb780]();
              }
            };
            _0x3d6ec7.prototype.Pl = function () {
              _0x3d6ec7.Sk.Zk();
            };
            _0x3d6ec7.prototype.Ql = function () {
              _0x3d6ec7.$k.Zk();
            };
            return _0x3d6ec7;
          }();
          _0x5408a7['if'] = function () {
            function _0x3b9e71(_0xbcc9b7, _0x2239d5, _0x526374) {
              this.ef = _0x526374;
              this.hd = false;
              this.nc = new _0x587230.Container();
              this.nc.visible = false;
              this.Ul = new Array(_0xbcc9b7);
              for (var _0x4a8d0b = 0x0; _0x4a8d0b < this.Ul.length; _0x4a8d0b++) {
                var _0x213ffe = new _0x5408a7.Vl(new Float32Array(0x3 * _0x2239d5));
                _0x213ffe.Wl(_0x2239d5);
                this.Ul[_0x4a8d0b] = _0x213ffe;
                this.nc.addChild(_0x213ffe.tf());
              }
              this.ff = 0x1;
              this.gf = 0x1;
              this.Jf();
            }
            _0x3b9e71.prototype.tf = function () {
              return this.nc;
            };
            _0x3b9e71.prototype.Kf = function (_0x5c6717) {
              this.hd = _0x5c6717;
              this.nc.visible = _0x5c6717;
            };
            _0x3b9e71.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var _0x34f360 = this.gf / 0x1e;
              for (var _0x857d4c = 0x0; _0x857d4c < this.Ul.length; _0x857d4c++) {
                this.Ul[_0x857d4c].Xl(_0x34f360);
              }
            };
            _0x3b9e71.prototype.Uf = function () {
              if (this.hd) {
                for (var _0x2fbb92 = 0x0; _0x2fbb92 < this.Ul.length; _0x2fbb92++) {
                  this.Ul[_0x2fbb92].Uf(this.lf);
                }
              }
            };
            _0x3b9e71.prototype.Yl = function () {
              return this.ff;
            };
            _0x3b9e71.prototype.Zl = function () {
              return this.gf;
            };
            _0x3b9e71.prototype.Qf = function (_0x28ff28, _0x489648) {
              this.Ul[_0x28ff28].$l(_0x489648);
            };
            _0x3b9e71.prototype.Rf = function (_0x50a943, _0x2d1a6a) {
              this.Ul[_0x50a943]._l(_0x2d1a6a);
            };
            _0x3b9e71.prototype.Sf = function (_0x4d648, _0x229b84, _0x5d7ae9) {
              var _0xef9a9b = this.Ul[_0x4d648];
              var _0x4331c6 = _0xef9a9b.am();
              var _0x4aaf38 = _0xef9a9b.bm;
              for (var _0x2017d7 = 0x0; _0x2017d7 < _0x4331c6; _0x2017d7++) {
                _0x4aaf38[0x3 * _0x2017d7] = _0x229b84;
                _0x4aaf38[0x3 * _0x2017d7 + 0x1] = _0x5d7ae9;
                _0x4aaf38[0x3 * _0x2017d7 + 0x2] = 0x0;
              }
            };
            _0x3b9e71.prototype.Tf = function (_0x5b99af, _0x334901, _0x13c9b8) {
              var _0x44db40 = this.Ul[_0x5b99af];
              var _0x366836 = _0x44db40.am();
              var _0x365900 = _0x44db40.bm;
              var _0x54fdbe = _0x44db40.cm();
              var _0x22fc23 = _0x365900[0x0];
              var _0x10fdc2 = undefined;
              var _0x216310 = _0x365900[0x1];
              var _0x55152e = undefined;
              var _0xf0557d = _0x334901 - _0x22fc23;
              var _0x1791eb = _0x13c9b8 - _0x216310;
              var _0x182447 = Math.hypot(_0xf0557d, _0x1791eb);
              if (_0x182447 > 0x0) {
                _0x365900[0x0] = _0x334901;
                _0x365900[0x1] = _0x13c9b8;
                _0x365900[0x2] = Math.atan2(_0x1791eb, _0xf0557d);
                var _0x6b55ee = 0.25 * _0x54fdbe / (0.25 * _0x54fdbe + _0x182447);
                var _0x1cdbbc = 0x1 - 0x2 * _0x6b55ee;
                for (var _0x49f52c = 0x1; _0x49f52c < _0x366836; _0x49f52c++) {
                  _0x10fdc2 = _0x365900[0x3 * _0x49f52c];
                  _0x365900[0x3 * _0x49f52c] = _0x365900[0x3 * _0x49f52c - 0x3] * _0x1cdbbc + (_0x10fdc2 + _0x22fc23) * _0x6b55ee;
                  _0x22fc23 = _0x10fdc2;
                  _0x55152e = _0x365900[0x3 * _0x49f52c + 0x1];
                  _0x365900[0x3 * _0x49f52c + 0x1] = _0x365900[0x3 * _0x49f52c - 0x2] * _0x1cdbbc + (_0x55152e + _0x216310) * _0x6b55ee;
                  _0x216310 = _0x55152e;
                  _0x365900[0x3 * _0x49f52c + 0x2] = Math.atan2(_0x365900[0x3 * _0x49f52c - 0x2] - _0x365900[0x3 * _0x49f52c + 0x1], _0x365900[0x3 * _0x49f52c - 0x3] - _0x365900[0x3 * _0x49f52c]);
                }
              }
            };
            return _0x3b9e71;
          }();
          _0x5408a7.dm = function () {
            function _0x3aa672(_0x379b86) {
              var _0x4be759 = this;
              this.ef = _0x379b86;
              this.Eb = _0x379b86.get()[0x0];
              this.lf = new _0x587230.Renderer({
                'view': _0x379b86.get()[0x0],
                'transparent': true,
                'antialias': false
              });
              this.hd = false;
              this.em = new _0x5408a7.Vl(new Float32Array(0x3 * _0x1cac01));
              this.ff = 0x1;
              this.gf = 0x1;
              this.fm = '0lt0';
              this.hm = '0lt0';
              this.im = '0lt0';
              this.jm = '0lt0';
              this.km = '0lt0';
              this.Jf();
              _0x1f32cc.Lc.$b(function () {
                _0x4be759.em.lm();
              });
            }
            var _0x1cac01 = Math.min(0x64, _0x5408a7.WormSpriteTree.wc);
            _0x3aa672.prototype.Kf = function (_0x21f111) {
              this.hd = _0x21f111;
            };
            _0x3aa672.prototype.Jf = function () {
              var _0x2977c0 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x2977c0;
              this.Eb.width = _0x2977c0 * this.ff;
              this.Eb.height = _0x2977c0 * this.gf;
              var _0x1705b5 = this.gf / 0x4;
              this.em.Xl(_0x1705b5);
              var _0x35256b = _0x318912.P(0x2 * Math.floor(this.ff / _0x1705b5) - 0x5, 0x1, _0x1cac01);
              this.em.Wl(_0x35256b);
            };
            _0x3aa672.prototype.Nf = function () {
              if (this.hd) {
                var _0x1ae9ae = Date.now();
                var _0x27c62b = _0x1ae9ae / 0xc8;
                var _0x19f12c = Math.sin(_0x27c62b);
                this.em.om(this.pm(this.fm, _0x19f12c), this.qm(this.fm, _0x19f12c));
                this.em.rm(this.sm(this.hm, _0x19f12c), this.sm(this.im, _0x19f12c), this.sm(this.jm, _0x19f12c), this.sm(this.km, _0x19f12c));
                var _0x58440c = this.em.cm();
                var _0x425dfd = this.em.am();
                var _0x5cbe02 = this.em.bm;
                var _0x4524e4 = this.ff - 0.5 * (this.ff - 0.5 * _0x58440c * (_0x425dfd - 0x1));
                var _0x441996 = 0.5 * this.gf;
                var _0x26005b = 0x0;
                var _0x4e6dad = 0x0;
                for (var _0x4590be = -0x1; _0x4590be < _0x425dfd; _0x4590be++) {
                  var _0x5ac18f = _0x4590be;
                  var _0x470013 = Math.cos(0x1 * _0x5ac18f / 0xc * Math.PI - _0x27c62b) * (0x1 - Math.pow(0x10, -0x1 * _0x5ac18f / 0xc));
                  if (_0x4590be >= 0x0) {
                    _0x5cbe02[0x3 * _0x4590be] = _0x4524e4 + -0.5 * _0x58440c * _0x5ac18f;
                    _0x5cbe02[0x3 * _0x4590be + 0x1] = _0x441996 + 0.5 * _0x58440c * _0x470013;
                    _0x5cbe02[0x3 * _0x4590be + 0x2] = Math.atan2(_0x4e6dad - _0x470013, _0x5ac18f - _0x26005b);
                  }
                  _0x26005b = _0x5ac18f;
                  _0x4e6dad = _0x470013;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            _0x3aa672.prototype.$l = function (_0x4c9348) {
              this.em.$l(_0x4c9348);
            };
            _0x3aa672.prototype.um = function (_0xfef693) {
              this.fm = _0xfef693 ? '0lt2' : "0lt1";
              this.hm = '0lt0';
              this.im = '0lt0';
              this.jm = '0lt0';
              this.km = '0lt0';
            };
            _0x3aa672.prototype.vm = function (_0x146dcf) {
              this.fm = '0lt0';
              this.hm = _0x146dcf ? '0lt2' : "0lt1";
              this.im = '0lt0';
              this.jm = '0lt0';
              this.km = '0lt0';
            };
            _0x3aa672.prototype.wm = function (_0x3bf50a) {
              this.fm = '0lt0';
              this.hm = '0lt0';
              this.im = _0x3bf50a ? '0lt2' : "0lt1";
              this.jm = '0lt0';
              this.km = '0lt0';
            };
            _0x3aa672.prototype.xm = function (_0x41f6c1) {
              this.fm = '0lt0';
              this.hm = '0lt0';
              this.im = '0lt0';
              this.jm = _0x41f6c1 ? '0lt2' : "0lt1";
              this.km = '0lt0';
            };
            _0x3aa672.prototype.ym = function (_0x38c9f5) {
              this.fm = '0lt0';
              this.hm = '0lt0';
              this.im = '0lt0';
              this.jm = '0lt0';
              this.km = _0x38c9f5 ? '0lt2' : "0lt1";
            };
            _0x3aa672.prototype.pm = function (_0x326be3, _0x1f916c) {
              switch (_0x326be3) {
                case "0lt1":
                  return 0.9 + 0.1 * _0x1f916c;
                case '0lt2':
                  return 0.4 + 0.3 * _0x1f916c;
              }
              return 0x1;
            };
            _0x3aa672.prototype.qm = function (_0x126a61, _0x5aec24) {
              switch (_0x126a61) {
                case "0lt1":
                  return 0.6 + 0.5 * _0x5aec24;
                case '0lt2':
                  return 0.3 + 0.3 * _0x5aec24;
              }
              return 0x1;
            };
            _0x3aa672.prototype.sm = function (_0x5c2992, _0x511b45) {
              switch (_0x5c2992) {
                case "0lt1":
                  return 0.9 + 0.1 * _0x511b45;
                case '0lt2':
                  return 0.6 + 0.4 * _0x511b45;
              }
              return 0x1;
            };
            return _0x3aa672;
          }();
          _0x5408a7.Oj = function () {
            function _0x377ab0(_0x18e3c3, _0x4ab2e0, _0x48ef14, _0x1a634f, _0x225613) {
              this.zm = _0x18e3c3;
              this.Am = _0x4ab2e0;
              this.Bm = _0x48ef14;
              this.Cm = _0x1a634f;
              this.Dm = _0x225613;
            }
            _0x377ab0.Nj = function (_0x41d08f) {
              var _0x29422a;
              return new _0x377ab0(_0x41d08f.price, _0x41d08f.guest, _0x41d08f.nonbuyable, _0x41d08f.nonbuyableCause, _0x41d08f.description || ((_0x29422a = _0x41d08f.refer) === null || _0x29422a === undefined ? undefined : _0x29422a.texture) || "SKIN NATIVE " + _0x41d08f.id);
            };
            _0x377ab0.Pj = function (_0x11a360) {
              return new _0x377ab0(_0x11a360.price, _0x11a360.guest, _0x11a360.nonbuyable, _0x11a360.nonbuyableCause, _0x11a360.description);
            };
            _0x377ab0.prototype.Jj = function () {
              return this.zm;
            };
            _0x377ab0.prototype.Mj = function () {
              return this.Am;
            };
            _0x377ab0.prototype.Kj = function () {
              return this.Bm;
            };
            _0x377ab0.prototype.Em = function () {
              return this.Cm;
            };
            _0x377ab0.prototype.Fm = function () {
              return this.Dm;
            };
            return _0x377ab0;
          }();
          _0x5408a7.qf = function () {
            function _0x2299ec(_0x55a505) {
              this.Gm = {};
              this.Gm[_0x215051] = _0x55a505;
              var _0x4c17ff = _0x587230.Shader.from(_0x2d95a3, _0x457421, this.Gm);
              this.sf = new _0x587230.Mesh(_0x502197, _0x4c17ff);
              this.sf.blendMode = _0x587230.v.B;
            }
            var _0x33317e = "a1_" + _0x318912.X();
            var _0x486c74 = "a2_" + _0x318912.X();
            var _0x215051 = "u3_" + _0x318912.X();
            var _0x3b7240 = "u4_" + _0x318912.X();
            var _0x3cb631 = "v1_" + _0x318912.X();
            var _0x502197 = new _0x587230.Geometry().addAttribute(_0x33317e, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2).addAttribute(_0x486c74, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2);
            var _0x2d95a3 = "precision mediump float;attribute vec2 " + _0x33317e + ";attribute vec2 " + _0x486c74 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0x3b7240 + ";varying vec2 " + _0x3cb631 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((" + "projectionMatrix * translationMatrix * vec3(" + _0x33317e + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x3b7240 + ";vec2 uv=" + _0x486c74 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x3cb631 + "=uv;}";
            var _0x457421 = "precision highp float;varying vec2 " + _0x3cb631 + ";uniform sampler2D " + _0x215051 + ";void main(){gl_FragColor=texture2D(" + _0x215051 + ',' + _0x3cb631 + ");}";
            _0x2299ec.prototype.Mf = function (_0x131985, _0x5c1bda) {
              this.sf.scale.x = _0x131985;
              this.sf.scale.y = _0x5c1bda;
              this.Gm[_0x3b7240] = [_0x131985, _0x5c1bda, 0x1 / _0x131985 + 0x1, 0x1 / _0x5c1bda + 0x1];
            };
            return _0x2299ec;
          }();
          _0x5408a7.WMGBS1 = function () {
            function _0x5968cd(_0x20c7e6) {
              var _0x13a2c4 = bbs.bgGameWidth || 0x1;
              var _0x4dac6a = bbs.bgGameHeight || 0x1;
              var _0x333e9a = _0x13a2c4 > 0x200 ? _0x13a2c4 >= 0x3e8 ? 0x1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm.u3_ = [0x1, 0.5, 0.25, 0.5];
              this.Gm.u4_ = _0x587230.Texture.WHITE;
              this.Gm.u5_ = [0x0, 0x0];
              this.Gm.u6_ = [0x0, 0x0];
              this.sf = new PIXI.TilingSprite(_0x20c7e6 || _0x1f32cc.xe._g, _0x333e9a == 0x1 ? 0x44c : 0x1d4c0, _0x333e9a == 0x1 ? 0x44c : 0x1d4c0);
              this.sf.scale.x = _0x333e9a;
              this.sf.scale.y = _0x333e9a;
              this.sf.position.x = -(_0x333e9a == 0x1 ? _0x13a2c4 / 0x2 : 0x271);
              this.sf.position.y = -(_0x333e9a == 0x1 ? _0x4dac6a / 0x2 : 0x271);
              console.log('WMGBS1', _0x13a2c4, _0x4dac6a);
            }
            _0x5968cd.prototype.Ec = function (_0x1e963a, _0x575ba5, _0x47693c, _0x1d97b0) {
              var _0x172eee = this.Gm.u3_;
              _0x172eee[0x0] = _0x1e963a;
              _0x172eee[0x1] = _0x575ba5;
              _0x172eee[0x2] = _0x47693c;
              _0x172eee[0x3] = _0x1d97b0;
            };
            _0x5968cd.prototype.$g = function (_0x2ff6ca) {
              this.Gm.u4_ = _0x2ff6ca;
            };
            _0x5968cd.prototype.Uf = function (_0x238b68, _0x1e381b, _0x1564ae, _0x4b8fad) {};
            return _0x5968cd;
          }();
          _0x5408a7.WMGBS2 = function () {
            console.log("WMGBS2");
            function _0x210324() {
              this.Gm = {};
              this.Gm[_0x207cfd] = [0x1, 0.5, 0.25, 0.5];
              this.Gm[_0x12f8af] = _0x587230.Texture.WHITE;
              this.Gm[_0x46e857] = [0x0, 0x0];
              this.Gm[_0x4446b2] = [0x0, 0x0];
              var _0x39f6e3 = _0x587230.Shader.from(_0x22e0eb, _0x4a442f, this.Gm);
              this.sf = new _0x587230.Mesh(_0x58ae17, _0x39f6e3);
            }
            var _0x349045 = "a1_" + _0x318912.X();
            var _0x3885f1 = "a2_" + _0x318912.X();
            var _0x207cfd = "u3_" + _0x318912.X();
            var _0x12f8af = "u4_" + _0x318912.X();
            var _0x46e857 = "u5_" + _0x318912.X();
            var _0x4446b2 = "u6_" + _0x318912.X();
            var _0x520fb5 = "v1_" + _0x318912.X();
            var _0x58ae17 = new _0x587230.Geometry().addAttribute(_0x349045, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x3885f1, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
            var _0x22e0eb = "precision mediump float;attribute vec2 " + _0x349045 + ";attribute vec2 " + _0x3885f1 + ";uniform mat3 " + 'translationMatrix' + ";uniform mat3 " + "projectionMatrix" + ";varying vec2 " + _0x520fb5 + ";void main(){" + _0x520fb5 + '=' + _0x3885f1 + ";gl_Position=vec4((" + "projectionMatrix" + '*' + 'translationMatrix' + '*vec3(' + _0x349045 + ',1.0)).xy,0.0,1.0);}';
            var _0x4a442f = "precision highp float;varying vec2 " + _0x520fb5 + ";uniform vec4 " + _0x207cfd + ";uniform sampler2D " + _0x12f8af + ";uniform vec2 " + _0x46e857 + ";uniform vec2 " + _0x4446b2 + ";void main(){vec2 coord=" + _0x520fb5 + '*' + _0x46e857 + '+' + _0x4446b2 + ";vec4 v_color_mix=" + _0x207cfd + ';gl_FragColor=texture2D(' + _0x12f8af + ',coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}';
            _0x210324.prototype.Ec = function (_0x2dacdb, _0x54f57c, _0xa71b87, _0x3068e4) {
              var _0xac2708 = this.Gm[_0x207cfd];
              _0xac2708[0x0] = _0x2dacdb;
              _0xac2708[0x1] = _0x54f57c;
              _0xac2708[0x2] = _0xa71b87;
              _0xac2708[0x3] = _0x3068e4;
            };
            _0x210324.prototype.$g = function (_0x1bd73b) {
              this.Gm[_0x12f8af] = _0x1bd73b;
            };
            _0x210324.prototype.Uf = function (_0x3c7d38, _0x1ba8b4, _0x4b02b5, _0xc258d4) {
              this.sf.position.x = _0x3c7d38;
              this.sf.position.y = _0x1ba8b4;
              this.sf.scale.x = _0x4b02b5;
              this.sf.scale.y = _0xc258d4;
              var _0x581309 = this.Gm[_0x46e857];
              _0x581309[0x0] = 0.2520615384615385 * _0x4b02b5;
              _0x581309[0x1] = 0.4357063736263738 * _0xc258d4;
              var _0x27b889 = this.Gm[_0x4446b2];
              _0x27b889[0x0] = 0.2520615384615385 * _0x3c7d38;
              _0x27b889[0x1] = 0.4357063736263738 * _0x1ba8b4;
            };
            return _0x210324;
          }();
          _0x5408a7.sc = function () {
            function _0x44af82() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0x0;
              this.Im = 0x0;
              this.si = null;
            }
            _0x44af82.prototype.changeTexture = function (_0x103e77, _0x5c2a15, _0x43cb17) {
              console.log(_0x103e77, _0x5c2a15, _0x43cb17);
              _0x10ee1f();
            };
            _0x44af82.prototype.Bc = function (_0x46714b, _0xca171b, _0x47a32e) {
              if (_0x46714b) {
                this.xc.texture = _0x46714b.Ea();
                this.xc.anchor.set(_0x46714b.ya, _0x46714b.za);
                this.Hm = _0x46714b.Aa;
                this.Im = _0x46714b.Ba;
              } else {}
            };
            _0x44af82.prototype.Ec = function (_0x53b710) {
              this.xc.tint = parseInt(_0x53b710.substring(0x1), 0x10);
            };
            _0x44af82.prototype.Tc = function (_0x286170) {
              try {
                this.xc.width = _0x286170 * this.Hm;
                this.xc.height = _0x286170 * this.Im;
              } catch (_0x2d5e6e) {}
            };
            _0x44af82.prototype.md = function (_0x5a1e6e) {
              this.xc.rotation = _0x5a1e6e;
            };
            _0x44af82.prototype.ld = function (_0x437fa1, _0x26b3a0) {
              this.xc.position.set(_0x437fa1, _0x26b3a0);
            };
            _0x44af82.prototype.kd = function (_0x20f4eb) {
              this.xc.visible = _0x20f4eb;
            };
            _0x44af82.prototype.gd = function () {
              return this.xc.visible;
            };
            _0x44af82.prototype.jj = function (_0x459098) {
              this.xc.alpha = _0x459098;
            };
            _0x44af82.prototype.Qc = function () {
              return this.xc;
            };
            _0x44af82.prototype.Rc = function () {
              _0x318912.U(this.xc);
            };
            return _0x44af82;
          }();
          _0x5408a7.Worm = function () {
            function _0x21ca5a(_0x5286d4) {
              this.hh = _0x5286d4;
              this.Eh = new _0x5408a7.Worm.li();
              this.xi = false;
              this.wi = true;
              this.Xc = false;
              this.$c = 0x0;
              this.Jm = 0x0;
              this.dj = 0x1;
              this.bd = 0x0;
              this.Bh = 0x0;
              this.dd = {};
              this.ad = 0x0;
              this.Km = new Float32Array(400);
              this.Lm = new Float32Array(400);
              this._c = new Float32Array(400);
              this.Mm = null;
              this.Nm = null;
              this.Om = null;
              this.Pm();
            }
            _0x21ca5a.prototype.si = function () {
              if (null != this.Nm) {
                _0x318912.U(this.Nm.nc);
              }
              if (null != this.Om) {
                _0x318912.U(this.Om);
              }
            };
            _0x21ca5a.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = '';
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            _0x21ca5a.prototype.ri = function (_0x33db88) {
              this.Eh = _0x33db88;
              this.Qm(this.xi);
            };
            _0x21ca5a.prototype.kd = function (_0x5ef462) {
              var _0x2e7c59 = this.xi;
              this.xi = _0x5ef462;
              this.Qm(_0x2e7c59);
            };
            _0x21ca5a.prototype.zi = function (_0x2d35c4) {
              this.Bh = 0x32 * _0x2d35c4;
              var _0x93683c = _0x2d35c4;
              if (_0x2d35c4 > this.hh.Ag) {
                _0x93683c = Math.atan((_0x2d35c4 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var _0x411b68 = Math.sqrt(0x4 * Math.pow(0x5 * _0x93683c, 0.707106781186548) + 0x19);
              var _0x4fffc0 = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x411b68 - 0x5) + 0x1));
              var _0x4a80f2 = this.ad;
              this.$c = 0.025 * (0x5 + 0.9 * _0x411b68);
              this.ad = Math.floor(_0x4fffc0);
              this.Jm = _0x4fffc0 - this.ad;
              if (_0x4a80f2 > 0x0 && _0x4a80f2 < this.ad) {
                var _0xdf3d57 = this.Km[0x2 * _0x4a80f2 - 0x2];
                var _0x58b27b = this.Km[0x2 * _0x4a80f2 - 0x1];
                var _0x4c6f78 = this.Lm[0x2 * _0x4a80f2 - 0x2];
                var _0x44b8b4 = this.Lm[0x2 * _0x4a80f2 - 0x1];
                var _0x383a4b = this._c[0x2 * _0x4a80f2 - 0x2];
                var _0x246bf2 = this._c[0x2 * _0x4a80f2 - 0x1];
                for (var _0x24f661 = _0x4a80f2; _0x24f661 < this.ad; _0x24f661++) {
                  this.Km[0x2 * _0x24f661] = _0xdf3d57;
                  this.Km[0x2 * _0x24f661 + 0x1] = _0x58b27b;
                  this.Lm[0x2 * _0x24f661] = _0x4c6f78;
                  this.Lm[0x2 * _0x24f661 + 0x1] = _0x44b8b4;
                  this._c[0x2 * _0x24f661] = _0x383a4b;
                  this._c[0x2 * _0x24f661 + 0x1] = _0x246bf2;
                }
              }
            };
            _0x21ca5a.prototype.Ei = function (_0x5adbc2, _0x55dd3f) {
              this.ad = _0x55dd3f;
              for (var _0x258924 = 0x0; _0x258924 < this.ad; _0x258924++) {
                this.Km[0x2 * _0x258924] = this.Lm[0x2 * _0x258924] = this._c[0x2 * _0x258924] = _0x5adbc2();
                this.Km[0x2 * _0x258924 + 0x1] = this.Lm[0x2 * _0x258924 + 0x1] = this._c[0x2 * _0x258924 + 0x1] = _0x5adbc2();
              }
            };
            _0x21ca5a.prototype.Bi = function (_0x2d55a2, _0x6841bd, _0x56139f) {
              this.Xc = _0x56139f;
              for (var _0x3edab2 = 0x0; _0x3edab2 < this.ad; _0x3edab2++) {
                this.Km[0x2 * _0x3edab2] = this.Lm[0x2 * _0x3edab2];
                this.Km[0x2 * _0x3edab2 + 0x1] = this.Lm[0x2 * _0x3edab2 + 0x1];
              }
              var _0x439d79 = _0x2d55a2 - this.Lm[0x0];
              var _0x5bc3b4 = _0x6841bd - this.Lm[0x1];
              this.Rm(_0x439d79, _0x5bc3b4, this.ad, this.Lm);
            };
            _0x21ca5a.prototype.Rm = function (_0x181080, _0x5ded7d, _0x3078d2, _0x53a1ac) {
              var _0x206259 = Math.hypot(_0x181080, _0x5ded7d);
              if (!(_0x206259 <= 0x0)) {
                var _0x4b2f43 = _0x53a1ac[0x0];
                var _0x24334e = undefined;
                _0x53a1ac[0x0] += _0x181080;
                var _0x198f46 = _0x53a1ac[0x1];
                var _0x148cf5 = undefined;
                _0x53a1ac[0x1] += _0x5ded7d;
                var _0x3626b8 = this.$c / (this.$c + _0x206259);
                var _0xab4ae6 = 0x1 - 0x2 * _0x3626b8;
                var _0x5569bc = 0x1;
                for (var _0xc918f5 = _0x3078d2 - 0x1; _0x5569bc < _0xc918f5; _0x5569bc++) {
                  _0x24334e = _0x53a1ac[0x2 * _0x5569bc];
                  _0x53a1ac[0x2 * _0x5569bc] = _0x53a1ac[0x2 * _0x5569bc - 0x2] * _0xab4ae6 + (_0x24334e + _0x4b2f43) * _0x3626b8;
                  _0x4b2f43 = _0x24334e;
                  _0x148cf5 = _0x53a1ac[0x2 * _0x5569bc + 0x1];
                  _0x53a1ac[0x2 * _0x5569bc + 0x1] = _0x53a1ac[0x2 * _0x5569bc - 0x1] * _0xab4ae6 + (_0x148cf5 + _0x198f46) * _0x3626b8;
                  _0x198f46 = _0x148cf5;
                }
                _0x3626b8 = this.Jm * this.$c / (this.Jm * this.$c + _0x206259);
                _0xab4ae6 = 0x1 - 0x2 * _0x3626b8;
                _0x53a1ac[0x2 * _0x3078d2 - 0x2] = _0x53a1ac[0x2 * _0x3078d2 - 0x4] * _0xab4ae6 + (_0x53a1ac[0x2 * _0x3078d2 - 0x2] + _0x4b2f43) * _0x3626b8;
                _0x53a1ac[0x2 * _0x3078d2 - 0x1] = _0x53a1ac[0x2 * _0x3078d2 - 0x3] * _0xab4ae6 + (_0x53a1ac[0x2 * _0x3078d2 - 0x1] + _0x198f46) * _0x3626b8;
              }
            };
            _0x21ca5a.prototype.fh = function () {
              return {
                'x': this._c[0x0],
                'y': this._c[0x1]
              };
            };
            _0x21ca5a.prototype.yi = function (_0x5bdb86, _0x7d33ab) {
              var _0x4aef48 = 0xf4240;
              var _0x13c7f3 = _0x5bdb86;
              var _0x2d80f3 = _0x7d33ab;
              for (var _0x4b1a2a = 0x0; _0x4b1a2a < this.ad; _0x4b1a2a++) {
                var _0x132112 = this._c[0x2 * _0x4b1a2a];
                var _0x5d2db1 = this._c[0x2 * _0x4b1a2a + 0x1];
                var _0xdeee1f = Math.hypot(_0x5bdb86 - _0x132112, _0x7d33ab - _0x5d2db1);
                if (_0xdeee1f < _0x4aef48) {
                  _0x4aef48 = _0xdeee1f;
                  _0x13c7f3 = _0x132112;
                  _0x2d80f3 = _0x5d2db1;
                }
              }
              return {
                'x': _0x13c7f3,
                'y': _0x2d80f3,
                'distance': _0x4aef48
              };
            };
            _0x21ca5a.prototype.ti = function (_0x375df9) {
              this.Mm = _0x375df9;
            };
            _0x21ca5a.prototype.hj = function (_0xbcdd7f, _0x415b31) {
              this.dj = _0x318912.Q(this.dj, this.wi ? this.Xc ? 0.9 + 0.1 * Math.cos(_0xbcdd7f / 0x190 * Math.PI) : 0x1 : 0x0, _0x415b31, 0.00125);
              this.bd = _0x318912.Q(this.bd, this.wi ? this.Xc ? 0x1 : 0x0 : 0x1, _0x415b31, 0.0025);
              if (null != this.Nm) {
                this.Nm.nc.alpha = this.dj;
              }
              if (null != this.Om) {
                this.Om.alpha = this.dj;
              }
            };
            _0x21ca5a.prototype.ij = function (_0x1aad1b, _0x2e71a6, _0x3076ae, _0x4debeb) {
              if (this.xi && this.wi) {
                var _0x172db8 = Math.pow(0.11112, _0x2e71a6 / 0x5f);
                for (var _0x43e2ce = 0x0; _0x43e2ce < this.ad; _0x43e2ce++) {
                  this._c[0x2 * _0x43e2ce] = _0x318912.S(_0x318912.S(this.Km[0x2 * _0x43e2ce], this.Lm[0x2 * _0x43e2ce], _0x3076ae), this._c[0x2 * _0x43e2ce], _0x172db8);
                  this._c[0x2 * _0x43e2ce + 0x1] = _0x318912.S(_0x318912.S(this.Km[0x2 * _0x43e2ce + 0x1], this.Lm[0x2 * _0x43e2ce + 0x1], _0x3076ae), this._c[0x2 * _0x43e2ce + 0x1], _0x172db8);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, _0x1aad1b, _0x2e71a6, _0x4debeb);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0x0];
                this.Om.ih.y = this._c[0x1] - 0x3 * this.$c;
              }
            };
            _0x21ca5a.prototype.Qm = function (_0x371059) {
              if (this.xi) {
                if (!_0x371059) {
                  this.Sm();
                }
              } else {
                if (null != this.Nm) {
                  _0x318912.U(this.Nm.nc);
                }
                if (null != this.Om) {
                  _0x318912.U(this.Om);
                }
              }
            };
            _0x21ca5a.prototype.Sm = function () {
              var _0x5abaae = _0x1f32cc;
              this.Nm = this.Nm || new _0x5408a7.WormSpriteTree();
              _0x318912.U(this.Nm.nc);
              this.Nm.yc(_0x5abaae.dh.hh.xg, _0x5abaae.Lc.Ub().jb(this.Eh.Gh), _0x5abaae.Lc.Ub().ib(this.Eh.Hh), _0x5abaae.Lc.Ub().kb(this.Eh.ni), _0x5abaae.Lc.Ub().lb(this.Eh.oi), _0x5abaae.Lc.Ub().mb(this.Eh.pi), _0x5abaae.Lc.Ub().nb(this.Eh.qi), '#ffffff');
              this.Om = this.Om || new _0x5408a7.Tm('');
              _0x318912.U(this.Om);
              this.Om.style.fontFamily = 'PTSans';
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = 0xe;
              this.Om.style.fill = _0x5abaae.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.text = _0x470b73 ? this.Eh.ma : '-----';
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            _0x21ca5a.li = function () {
              function _0x20ece8() {
                this.ae = 0x0;
                this.Gh = _0x167f4e.ps ? _0x167f4e.ps : _0x5408a7.GameParams.Cg;
                this.Hh = 0x0;
                this.ni = 0x0;
                this.oi = 0x0;
                this.pi = 0x0;
                this.qi = 0x0;
                this.ma = 0x0;
              }
              return _0x20ece8;
            }();
            return _0x21ca5a;
          }();
          _0x5408a7.Tm = function () {
            return _0x318912.M(_0x587230.Text, function (_0x467adf, _0x5422e5, _0x3818ab) {
              _0x587230.Text.call(this, _0x467adf, _0x5422e5, _0x3818ab);
              this.ih = {
                'x': 0x0,
                'y': 0x0
              };
            });
          }();
          _0x5408a7.hb = function () {
            function _0x18ff8e(_0x1288d7, _0x14614e, _0xb5eb67, _0x498c79, _0x34a1f2) {
              this.lj = _0x1288d7;
              this.mj = _0x14614e;
              this.nj = _0xb5eb67;
              this.oj = _0x498c79;
              this.pj = _0x34a1f2;
            }
            _0x18ff8e.prototype.Um = function (_0x5df728) {
              return new _0x18ff8e(_0x5df728, this.mj, this.nj, this.oj, this.pj);
            };
            _0x18ff8e.prototype.Vm = function (_0x34cfd7) {
              return new _0x18ff8e(this.lj, _0x34cfd7, this.nj, this.oj, this.pj);
            };
            _0x18ff8e.prototype.Wm = function (_0x3ca0c4) {
              return new _0x18ff8e(this.lj, this.mj, _0x3ca0c4, this.oj, this.pj);
            };
            _0x18ff8e.prototype.Xm = function (_0xabc724) {
              return new _0x18ff8e(this.lj, this.mj, this.nj, _0xabc724, this.pj);
            };
            _0x18ff8e.prototype.Ym = function (_0x573b6c) {
              return new _0x18ff8e(this.lj, this.mj, this.nj, this.oj, _0x573b6c);
            };
            return _0x18ff8e;
          }();
          _0x5408a7.Vl = function () {
            function _0x3163fc(_0xf41604) {
              this.Zm = new _0x5408a7.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = _0xf41604;
              this.pc = 0x0;
              this.Gi = 0x1;
              this.an = 0x1;
              this.bn = 0x1;
              this.cn = 0x1;
              this.dn = 0x1;
              this.gn = 0x1;
              this.hn = 0x1;
              this._l("#ffffff");
            }
            var _0x4798c6 = new _0x5408a7.hb(0x0, 0x0, 0x0, 0x0, 0x0);
            _0x3163fc.prototype.tf = function () {
              return this.Zm.nc;
            };
            _0x3163fc.prototype.Wl = function (_0x22bca3) {
              this.pc = _0x22bca3;
              if (this.Zm.pc !== _0x22bca3) {
                for (var _0x43b323 = _0x22bca3; _0x43b323 < this.Zm.qc.length; _0x43b323++) {
                  this.Zm.qc[_0x43b323].Uc();
                }
                for (; this.Zm.pc > _0x22bca3;) {
                  this.Zm.pc -= 0x1;
                  var _0x2361ad = this.Zm.qc[this.Zm.pc];
                  _0x2361ad.Dc.Rc();
                  _0x2361ad.Cc.Rc();
                }
                for (; this.Zm.pc < _0x22bca3;) {
                  var _0x4b6aa2 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 0x1;
                  this.Zm.nc.addChild(_0x4b6aa2.Cc.Qc());
                  this.Zm.nc.addChild(_0x4b6aa2.Dc.Qc());
                  _0x4b6aa2.Cc.jj(this.an);
                  _0x4b6aa2.Dc.jj(this.bn);
                }
                for (var _0x575b83 = 0x0; _0x575b83 < this.Zm.oc.Fc.length; _0x575b83++) {
                  this.Zm.oc.Fc[_0x575b83].jj(this.cn);
                }
                for (var _0x3c7533 = 0x0; _0x3c7533 < this.Zm.oc.Gc.length; _0x3c7533++) {
                  this.Zm.oc.Gc[_0x3c7533].jj(this.dn);
                }
                for (var _0x3bbd1f = 0x0; _0x3bbd1f < this.Zm.oc.Ic.length; _0x3bbd1f++) {
                  this.Zm.oc.Ic[_0x3bbd1f].jj(this.gn);
                }
                for (var _0x57e03a = 0x0; _0x57e03a < this.Zm.oc.Hc.length; _0x57e03a++) {
                  this.Zm.oc.Hc[_0x57e03a].jj(this.hn);
                }
              }
            };
            _0x3163fc.prototype.am = function () {
              return this.pc;
            };
            _0x3163fc.prototype.$l = function (_0x1ad7f3) {
              this.$m = _0x1ad7f3;
              this._m = '#ffffff';
              this.lm();
            };
            _0x3163fc.prototype._l = function (_0x741ac0) {
              this.$m = _0x4798c6;
              this._m = _0x741ac0;
              this.lm();
            };
            _0x3163fc.prototype.lm = function () {
              var _0x469cf1 = _0x1f32cc;
              this.Zm.yc(_0x5408a7.Ac.vg, null, _0x469cf1.Lc.Ub().ib(this.$m.lj), _0x469cf1.Lc.Ub().kb(this.$m.mj), _0x469cf1.Lc.Ub().lb(this.$m.nj), _0x469cf1.Lc.Ub().mb(this.$m.pj), _0x469cf1.Lc.Ub().nb(this.$m.oj), this._m);
            };
            _0x3163fc.prototype.Xl = function (_0x5589e2) {
              this.Gi = _0x5589e2;
            };
            _0x3163fc.prototype.cm = function () {
              return this.Gi;
            };
            _0x3163fc.prototype.om = function (_0x43b84b, _0x274e03) {
              this.an = _0x43b84b;
              this.bn = _0x274e03;
              for (var _0x5bb1cf = 0x0; _0x5bb1cf < this.pc; _0x5bb1cf++) {
                var _0x3468d4 = this.Zm.qc[_0x5bb1cf];
                _0x3468d4.Cc.jj(this.an);
                _0x3468d4.Dc.jj(this.bn);
              }
            };
            _0x3163fc.prototype.rm = function (_0x509579, _0x5c327c, _0x5903ee, _0x2b50ee) {
              this.cn = _0x509579;
              this.dn = _0x5c327c;
              this.gn = _0x5903ee;
              this.hn = _0x2b50ee;
              for (var _0x73387c = 0x0; _0x73387c < this.Zm.oc.Fc.length; _0x73387c++) {
                this.Zm.oc.Fc[_0x73387c].jj(this.cn);
              }
              for (var _0xb41d81 = 0x0; _0xb41d81 < this.Zm.oc.Gc.length; _0xb41d81++) {
                this.Zm.oc.Gc[_0xb41d81].jj(this.dn);
              }
              for (var _0x370ff0 = 0x0; _0x370ff0 < this.Zm.oc.Ic.length; _0x370ff0++) {
                this.Zm.oc.Ic[_0x370ff0].jj(this.gn);
              }
              for (var _0x10d056 = 0x0; _0x10d056 < this.Zm.oc.Hc.length; _0x10d056++) {
                this.Zm.oc.Hc[_0x10d056].jj(this.hn);
              }
            };
            _0x3163fc.prototype.Uf = function () {
              var _0x2a1ed2 = 0x2 * this.Gi;
              var _0x16f840 = 0x2 * this.Gi * 1.5;
              if (this.pc > 0x0) {
                var _0x553c67 = this.bm[0x0];
                var _0x3b0a41 = this.bm[0x1];
                var _0x381c5b = this.bm[0x2];
                this.Zm.qc[0x0].Sc(_0x553c67, _0x3b0a41, _0x2a1ed2, _0x16f840, _0x381c5b);
                this.Zm.oc.Sc(_0x553c67, _0x3b0a41, _0x2a1ed2, _0x381c5b);
              }
              for (var _0x311f93 = 0x1; _0x311f93 < this.pc; _0x311f93++) {
                var _0x2c2fa1 = this.bm[0x3 * _0x311f93];
                var _0x546f70 = this.bm[0x3 * _0x311f93 + 0x1];
                var _0x43fb92 = this.bm[0x3 * _0x311f93 + 0x2];
                this.Zm.qc[_0x311f93].Sc(_0x2c2fa1, _0x546f70, _0x2a1ed2, _0x16f840, _0x43fb92);
              }
            };
            _0x3163fc.prototype.tm = function (_0x4106b7) {
              _0x4106b7.render(this.Zm.nc);
            };
            return _0x3163fc;
          }();
          _0x5408a7.kf = function () {
            function _0x39c6e4(_0x5403ea) {
              this.nd = _0x5403ea;
            }
            _0x39c6e4.bgcanvas = $("#background-canvas");
            _0x39c6e4.socialButtons = $("#social-buttons");
            _0x39c6e4.socialButtons.html('');
            _0x39c6e4.jn = $("#game-view");
            _0x39c6e4.gameCanvas = $("#game-canvas");
            _0x39c6e4.ln = $('#results-view');
            _0x39c6e4.mn = $('#stretch-box');
            _0x39c6e4.nn = $('#main-menu-view');
            _0x39c6e4.pn = $('#popup-view');
            _0x39c6e4.qn = $('#loading-view');
            _0x39c6e4.rn = $("#restricted-view");
            _0x39c6e4.sn = $("#toaster-view");
            _0x39c6e4.tn = $("#error-gateway-connection-view");
            _0x39c6e4.un_error = $("#error-game-connection-view");
            _0x39c6e4.vn = $("#markup-wrap");
            _0x39c6e4.prototype.ha = function () {};
            _0x39c6e4.prototype.Gk = function () {};
            _0x39c6e4.prototype.Hk = function () {};
            _0x39c6e4.prototype.Bk = function () {};
            _0x39c6e4.prototype.Jf = function () {};
            _0x39c6e4.prototype.Nf = function (_0x206249, _0x173e15) {};
            return _0x39c6e4;
          }();
          _0x5408a7.Vj = function () {
            function _0x17f5fb(_0xcd2a63, _0x4edaf7, _0x275d1c, _0x1dfa60, _0x498e95, _0x2311a8) {
              var _0x5a48a3 = $('OK');
              _0x5a48a3.click(function () {
                if ("undefined" != typeof FB && undefined !== FB.ui) {
                  FB.ui({
                    'method': "feed",
                    'display': "popup",
                    'link': _0x4edaf7,
                    'name': _0x275d1c,
                    'caption': _0x1dfa60,
                    'description': _0x498e95,
                    'picture': _0x2311a8
                  }, function () {});
                }
              });
              return _0x5a48a3;
            }
            var _0x3aa20c = $('#final-caption');
            var _0x581b44 = $("#final-continue");
            var _0x8f7177 = $("#congrats-bg");
            var _0x5b74d8 = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var _0x5c78b6 = $("#final-share-fb");
            var _0x3d5752 = $("#final-message");
            var _0x23be46 = $("#final-score");
            var _0x568843 = $("#final-place");
            var _0x4c5082 = $('#final-board');
            var _0x491f28 = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
              var _0x276ea4 = this;
              var _0x5a3d31 = _0x1f32cc;
              _0x5c78b6.toggle(_0x3df779.xn);
              _0x3aa20c.text(_0x318912.H("index.game.result.title"));
              _0x581b44.text(_0x318912.H("index.game.result.continue"));
              _0x581b44.click(function () {
                _0x5a3d31.Ci.Be();
                _0x5a3d31.zn.yn.ka();
                _0x5a3d31.Ci.pe(_0x5408a7.ge.je._e);
                _0x5a3d31.og.Ak(_0x5a3d31.og._e);
              });
              $("html").keydown(function (_0x2d17bb) {
                if (0x20 === _0x2d17bb.keyCode) {
                  _0x276ea4.An = true;
                }
              }).keyup(function (_0x5e136f) {
                if (0x20 === _0x5e136f.keyCode) {
                  _0x276ea4.An = false;
                }
              });
              this.ng = new _0x5408a7.Eg(_0x5408a7.kf.gameCanvas);
              this.Cn = 0x0;
              this.Bn = 0x0;
              this.An = false;
            });
            _0x491f28.prototype.ha = function () {};
            _0x491f28.prototype.Gk = function () {
              if (this.Cn === 0x0) {
                _0x5408a7.kf.jn.stop();
                _0x5408a7.kf.jn.fadeIn(0x1f4);
                _0x5408a7.kf.ln.stop();
                _0x5408a7.kf.ln.fadeOut(0x1);
                _0x5408a7.kf.nn.stop();
                _0x5408a7.kf.nn.fadeOut(0x32);
                _0x5408a7.kf.pn.stop();
                _0x5408a7.kf.pn.fadeOut(0x32);
                _0x5408a7.kf.sn.stop();
                _0x5408a7.kf.sn.fadeOut(0x32);
                _0x5408a7.kf.qn.stop();
                _0x5408a7.kf.qn.fadeOut(0x32);
                _0x5408a7.kf.rn.stop();
                _0x5408a7.kf.rn.fadeOut(0x32);
                _0x5408a7.kf.tn.stop();
                _0x5408a7.kf.tn.fadeOut(0x32);
                _0x5408a7.kf.un_error.stop();
                _0x5408a7.kf.un_error.fadeOut(0x32);
                _0x5408a7.kf.mn.stop();
                _0x5408a7.kf.mn.fadeOut(0x1);
                _0x5408a7.kf.bgcanvas.stop();
                _0x5408a7.kf.bgcanvas.fadeOut(0x32);
                _0x5408a7.GameView.Kf(false);
                _0x5408a7.kf.socialButtons.stop();
                _0x5408a7.kf.socialButtons.fadeOut(0x32);
                _0x5408a7.kf.vn.stop();
                _0x5408a7.kf.vn.fadeOut(0x32);
              } else {
                _0x5408a7.kf.jn.stop();
                _0x5408a7.kf.jn.fadeIn(0x1f4);
                _0x5408a7.kf.ln.stop();
                _0x5408a7.kf.ln.fadeIn(0x1f4);
                _0x5408a7.kf.nn.stop();
                _0x5408a7.kf.nn.fadeOut(0x32);
                _0x5408a7.kf.pn.stop();
                _0x5408a7.kf.pn.fadeOut(0x32);
                _0x5408a7.kf.sn.stop();
                _0x5408a7.kf.sn.fadeOut(0x32);
                _0x5408a7.kf.qn.stop();
                _0x5408a7.kf.qn.fadeOut(0x32);
                _0x5408a7.kf.rn.stop();
                _0x5408a7.kf.rn.fadeOut(0x32);
                _0x5408a7.kf.tn.stop();
                _0x5408a7.kf.tn.fadeOut(0x32);
                _0x5408a7.kf.un_error.stop();
                _0x5408a7.kf.un_error.fadeOut(0x32);
                _0x5408a7.kf.mn.stop();
                _0x5408a7.kf.mn.fadeOut(0x1);
                _0x5408a7.kf.bgcanvas.stop();
                _0x5408a7.kf.bgcanvas.fadeOut(0x32);
                _0x5408a7.GameView.Kf(false);
                _0x5408a7.kf.socialButtons.stop();
                _0x5408a7.kf.socialButtons.fadeOut(0x32);
                _0x5408a7.kf.vn.stop();
                _0x5408a7.kf.vn.fadeOut(0x32);
              }
            };
            _0x491f28.prototype.Dn = function () {
              this.Cn = 0x0;
              return this;
            };
            _0x491f28.prototype.En = function () {
              _0x8f7177.hide();
              setTimeout(function () {
                _0x8f7177.fadeIn(0x1f4);
              }, 0xbb8);
              _0x5b74d8.hide();
              setTimeout(function () {
                _0x5b74d8.fadeIn(0x1f4);
              }, 0x1f4);
              this.Cn = 0x1;
              return this;
            };
            _0x491f28.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 0x1) {
                _0x1f32cc.Ci.Fe();
              }
            };
            _0x491f28.prototype.Jf = function () {
              this.ng.Jf();
            };
            _0x491f28.prototype.Nf = function (_0xdcf46f, _0x10c5d9) {
              this.ng.Nf(_0xdcf46f, _0x10c5d9);
            };
            _0x491f28.prototype.Fn = function (_0x13105d, _0xf06bd0, _0x59f232) {
              var _0x463df5 = undefined;
              var _0x2b37e6 = undefined;
              var _0x42ad73 = undefined;
              if (_0xf06bd0 >= 0x1 && _0xf06bd0 <= 0xa) {
                _0x463df5 = _0x318912.H('index.game.result.place.i' + _0xf06bd0);
                _0x2b37e6 = _0x318912.H('index.game.result.placeInBoard');
                _0x42ad73 = _0x318912.H("index.game.social.shareResult.messGood").replace("{0}", _0x59f232).replace("{1}", _0x13105d).replace('{2}', _0x463df5);
              } else {
                _0x463df5 = '';
                _0x2b37e6 = _0x318912.H("index.game.result.tryHit");
                _0x42ad73 = _0x318912.H("index.game.social.shareResult.messNorm").replace("{0}", _0x59f232).replace("{1}", _0x13105d);
              }
              _0x3d5752.html(_0x318912.H('index.game.result.your'));
              _0x23be46.html(_0x13105d);
              _0x568843.html(_0x463df5);
              _0x4c5082.html(_0x2b37e6);
              if (_0x3df779.xn) {
                var _0x5767f5 = _0x318912.H("index.game.result.share");
                _0x318912.H("index.game.social.shareResult.caption");
                _0x5c78b6.empty().append(_0x17f5fb(_0x5767f5, "https://wormate.io", 'wormate.io', _0x42ad73, _0x42ad73, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            _0x491f28.prototype.Gn = function () {
              return this.Bn;
            };
            _0x491f28.prototype.Hn = function () {
              return this.An;
            };
            return _0x491f28;
          }();
          _0x5408a7.sk = function () {
            var _0x20308e = $("#loading-progress-cont");
            var _0x424ecc = $("#loading-progress-bar");
            var _0x423e12 = $('#loading-progress-text');
            var _0x42db1e = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
              this.In = -0x1;
              this.Jn = '';
            });
            _0x42db1e.prototype.ha = function () {};
            _0x42db1e.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeIn(0x1f4);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeOut(0x32);
            };
            _0x42db1e.prototype.Hk = function () {
              _0x1f32cc.Ci.pe(_0x5408a7.ge.je.ie);
            };
            _0x42db1e.prototype.Bk = function () {};
            _0x42db1e.prototype.Kn = function () {
              this.Ln('', 0x0);
              _0x20308e.stop();
              _0x20308e.fadeIn(0x64);
            };
            _0x42db1e.prototype.Mn = function () {
              _0x20308e.stop();
              _0x20308e.fadeOut(0x64);
            };
            _0x42db1e.prototype.Ln = function (_0x303222, _0x151f60) {
              if (this.Jn !== _0x303222) {
                this.Jn = _0x303222;
              }
              var _0x2256c2 = _0x318912.P(Math.floor(0x64 * _0x151f60), 0x0, 0x64);
              if (this.In !== _0x2256c2) {
                _0x424ecc.css({
                  'width': _0x2256c2 + '%'
                });
                _0x423e12.html(_0x2256c2 + " %");
              }
            };
            return _0x42db1e;
          }();
          _0x5408a7.Wj = function () {
            var _0x128687 = $("#mm-line-top");
            $("#mm-line-center");
            $("#mm-line-bottom");
            var _0x724b38 = $("#mm-bottom-buttons");
            var _0x38cd62 = $("#mm-menu-cont");
            var _0x20fac0 = $("#mm-loading");
            var _0x4e8e3d = $("#mm-loading-progress-bar");
            var _0x2927c3 = $("#mm-loading-progress-text");
            $("#mm-event-text");
            var _0x19ebf9 = $("#mm-skin-canv");
            var _0x4d646b = $("#mm-skin-prev");
            var _0x56d4e2 = $("#mm-skin-next");
            var _0x45677d = $("#mm-skin-over");
            var _0x2f05dc = $("#mm-skin-over-button-list");
            var _0x2db0ba = $('#mm-params-nickname');
            var _0x30f625 = $("#mm-params-game-mode");
            var _0x553f50 = $("#mm-action-play");
            var _0x2f99cc = $('#mm-action-guest');
            var _0x4cf674 = $('#mm-action-login');
            var _0x4aabb0 = $('#mm-player-info');
            var _0x5cae99 = $("#mm-store");
            var _0x4531e0 = $("#mm-leaders");
            var _0x12424c = $('#mm-settings');
            var _0x4fdd0e = $("#mm-coins-box");
            var _0x4594e3 = $('#mm-player-avatar');
            var _0x53a548 = $("#mm-player-username");
            var _0x397184 = $('#mm-coins-val');
            var _0x1f3815 = $('#mm-player-exp-bar');
            var _0x4670b8 = $('#mm-player-exp-val');
            var _0x196172 = $("#mm-player-level");
            var _0x3eb764 = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.Ek);
              var _0x3d5210 = _0x1f32cc;
              this.In = -0x1;
              this.Jn = '';
              this.Nn = new _0x5408a7.dm(_0x19ebf9);
              _0x30f625.click(function () {
                _0x3d5210.Ci.Be();
              });
              _0x19ebf9.click(function () {
                if (_0x3d5210.Ij.Hj()) {
                  _0x3d5210.Ci.Be();
                  _0x3d5210.og.Ak(_0x3d5210.og.ik);
                }
              });
              _0x4d646b.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.On.Ej();
              });
              _0x56d4e2.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.On.Dj();
              });
              _0x2db0ba.keypress(function (_0x435105) {
                if (0xd == _0x435105.keyCode) {
                  _0x3d5210.Pn(true);
                }
              });
              _0x553f50.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.Pn(true);
              });
              _0x2f99cc.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.Pn(true);
              });
              _0x4cf674.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.og.Ak(_0x3d5210.og.fk);
              });
              _0x12424c.click(function () {
                _0x3d5210.Ci.Be();
                _0x3d5210.og.Ak(_0x3d5210.og.$h);
              });
              _0x4aabb0.click(function () {
                if (_0x3d5210.Ij.Hj()) {
                  _0x3d5210.Ci.Be();
                  _0x3d5210.og.Ak(_0x3d5210.og.dk);
                }
              });
              _0x4531e0.click(function () {
                if (_0x3d5210.Ij.Hj()) {
                  _0x3d5210.Ci.Be();
                  _0x3d5210.og.Ak(_0x3d5210.og.bk);
                }
              });
              _0x5cae99.click(function () {
                if (_0x3d5210.Ij.Hj()) {
                  _0x3d5210.Ci.Be();
                  _0x3d5210.og.Ak(_0x3d5210.og.kk);
                }
              });
              _0x4fdd0e.click(function () {
                if (_0x3d5210.Ij.Hj()) {
                  _0x3d5210.Ci.Be();
                  _0x3d5210.og.Ak(_0x3d5210.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var _0x5b307b = _0x5408a7.Vf.fg(_0x5408a7.Vf._f);
              if ('ARENA' !== _0x5b307b && "TEAM2" !== _0x5b307b) {
                _0x5b307b = 'ARENA';
              }
              _0x30f625.val(_0x5b307b);
            });
            _0x3eb764.prototype.ha = function () {
              var _0x4ea078 = _0x1f32cc;
              var _0x342218 = this;
              _0x4ea078.Ij.zl(function () {
                if (_0x4ea078.Ij.Hj()) {
                  _0x4ea078.On.Fj(_0x4ea078.Ij.ml(), _0x5408a7.tj.sj);
                  _0x4ea078.On.Fj(_0x4ea078.Ij.nl(), _0x5408a7.tj.uj);
                  _0x4ea078.On.Fj(_0x4ea078.Ij.ol(), _0x5408a7.tj.vj);
                  _0x4ea078.On.Fj(_0x4ea078.Ij.pl(), _0x5408a7.tj.xj);
                  _0x4ea078.On.Fj(_0x4ea078.Ij.ql(), _0x5408a7.tj.wj);
                } else {
                  _0x4ea078.On.Fj(_0x4ea078.Sn(), _0x5408a7.tj.sj);
                  _0x4ea078.On.Fj(0x0, _0x5408a7.tj.uj);
                  _0x4ea078.On.Fj(0x0, _0x5408a7.tj.vj);
                  _0x4ea078.On.Fj(0x0, _0x5408a7.tj.xj);
                  _0x4ea078.On.Fj(0x0, _0x5408a7.tj.wj);
                }
              });
              _0x4ea078.Ij.zl(function () {
                _0x553f50.toggle(_0x4ea078.Ij.Hj());
                _0x4cf674.toggle(!_0x4ea078.Ij.Hj());
                _0x4aabb0.toggle(true);
                _0x2f99cc.toggle(!_0x4ea078.Ij.Hj());
                _0x12424c.toggle(true);
                _0x4531e0.toggle(_0x4ea078.Ij.Hj());
                _0x5cae99.toggle(_0x4ea078.Ij.Hj());
                _0x4fdd0e.toggle(_0x4ea078.Ij.Hj());
                if (_0x4ea078.Ij.Hj()) {
                  _0x45677d.hide();
                  _0x53a548.html(_0x4ea078.Ij.dl());
                  _0x4594e3.attr('src', _0x4ea078.Ij.fl());
                  _0x397184.html(_0x4ea078.Ij.il());
                  _0x1f3815.width(0x64 * _0x4ea078.Ij.kl() / _0x4ea078.Ij.ll() + '%');
                  _0x4670b8.html(_0x4ea078.Ij.kl() + " / " + _0x4ea078.Ij.ll());
                  _0x196172.html(_0x4ea078.Ij.jl());
                  _0x2db0ba.val(_0x4ea078.Ij.el());
                } else {
                  _0x45677d.toggle(_0x3df779.xn && !_0x4ea078.Tn());
                  _0x53a548.html(_0x53a548.data("guest"));
                  _0x4594e3.attr("src", _0x318912.a.e);
                  _0x397184.html('10');
                  _0x1f3815.width('0');
                  _0x4670b8.html('');
                  _0x196172.html(0x1);
                  _0x2db0ba.val(_0x5408a7.Vf.fg(_0x5408a7.Vf.ag));
                }
              });
              _0x4ea078.On.zj(function () {
                _0x342218.Nn.$l(_0x4ea078.On.yj());
              });
            };
            _0x3eb764.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeIn(0x1f4);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeIn(0x1f4);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeIn(0x1f4);
            };
            _0x3eb764.prototype.Un = function () {
              _0x128687.fadeIn(0x1f4);
              _0x724b38.fadeIn(0x1f4);
              _0x38cd62.fadeIn(0x1f4);
              _0x20fac0.fadeOut(0x64);
            };
            _0x3eb764.prototype.Vn = function () {
              _0x128687.fadeOut(0x64);
              _0x724b38.fadeOut(0x64);
              _0x38cd62.fadeOut(0x64);
              _0x20fac0.fadeIn(0x1f4);
            };
            _0x3eb764.prototype.Ln = function (_0x1aa387, _0x4d009d) {
              if (this.Jn !== _0x1aa387) {
                this.Jn = _0x1aa387;
              }
              var _0x5c0bda = _0x318912.P(Math.floor(0x64 * _0x4d009d), 0x0, 0x64);
              if (this.In !== _0x5c0bda) {
                _0x4e8e3d.css({
                  'width': _0x5c0bda + '%'
                });
                _0x2927c3.html(_0x5c0bda + " %");
              }
            };
            _0x3eb764.prototype.Hk = function () {
              _0x1f32cc.Ci.Ce();
              this.Nn.Kf(true);
            };
            _0x3eb764.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            _0x3eb764.prototype.Jf = function () {
              this.Nn.Jf();
            };
            _0x3eb764.prototype.Nf = function (_0x279067, _0x43e741) {
              this.Nn.Nf();
            };
            _0x3eb764.prototype.el = function () {
              return _0x2db0ba.val();
            };
            _0x3eb764.prototype.Wn = function () {
              return _0x30f625.val();
            };
            _0x3eb764.prototype.Qn = function () {};
            _0x3eb764.prototype.Rn = function () {
              function _0x398611() {
                _0x123948.Xn(true);
                setTimeout(function () {
                  _0x45677d.hide();
                }, 0xbb8);
              }
              var _0x123948 = _0x1f32cc;
              if (_0x3df779.xn && !_0x123948.Tn()) {
                _0x45677d.show();
                var _0x5e8e91 = _0x318912.H("index.game.main.menu.unlockSkins.share");
                var _0x23b937 = encodeURIComponent(_0x318912.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var _0x5558ab = encodeURIComponent(_0x318912.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                _0x2f05dc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x23b937 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x5e8e91 + "</span></a>").click(_0x398611));
                _0x2f05dc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x5558ab + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x5e8e91 + "</span></a>").click(_0x398611));
              }
            };
            return _0x3eb764;
          }();
          _0x5408a7.yk = function () {
            var _0x4164be = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
            });
            _0x4164be.prototype.ha = function () {};
            _0x4164be.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeOut(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeOut(0x32);
              _0x5408a7.GameView.Kf(false);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeOut(0x32);
            };
            return _0x4164be;
          }();
          _0x5408a7.pk = function () {
            var _0xea2722 = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
            });
            _0xea2722.prototype.ha = function () {};
            _0xea2722.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeIn(0x1f4);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeOut(0x32);
            };
            _0xea2722.prototype.Hk = function () {};
            return _0xea2722;
          }();
          _0x5408a7.rk = function () {
            var _0x5a3fd9 = $("#toaster-stack");
            var _0x29f2bc = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            _0x29f2bc.prototype.ha = function () {};
            _0x29f2bc.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeIn(0x1f4);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeIn(0x1f4);
            };
            _0x29f2bc.prototype.Hk = function () {
              this.$n();
            };
            _0x29f2bc.prototype.Kk = function () {
              return null != this.Zn || this.Yn.length > 0x0;
            };
            _0x29f2bc.prototype._n = function (_0x2ec47f) {
              this.Yn.unshift(_0x2ec47f);
              setTimeout(function () {
                _0x1f32cc.og.Ik();
              }, 0x0);
            };
            _0x29f2bc.prototype.El = function (_0x377938) {
              this.Yn.push(_0x377938);
              setTimeout(function () {
                _0x1f32cc.og.Ik();
              }, 0x0);
            };
            _0x29f2bc.prototype.$n = function () {
              var _0x1af862 = this;
              if (null == this.Zn) {
                if (0x0 == this.Yn.length) {
                  return void _0x1f32cc.og.Dk();
                }
                var _0x1d0bf3 = this.Yn.shift();
                this.Zn = _0x1d0bf3;
                var _0x2389bc = _0x1d0bf3.tf();
                _0x2389bc.hide();
                _0x2389bc.fadeIn(0x12c);
                _0x5a3fd9.append(_0x2389bc);
                _0x1d0bf3.ao = function () {
                  _0x2389bc.fadeOut(0x12c);
                  setTimeout(function () {
                    _0x2389bc.remove();
                  }, 0x12c);
                  if (_0x1af862.Zn == _0x1d0bf3) {
                    _0x1af862.Zn = null;
                  }
                  _0x1af862.$n();
                };
                _0x1d0bf3.Hk();
              }
            };
            return _0x29f2bc;
          }();
          _0x5408a7.Fk = {
            'wn': 0x0,
            'Ek': 0x1
          };
          _0x5408a7.bo = function () {
            var _0x4f87e0 = $("#popup-menu-label");
            var _0x39d6bd = $("#popup-menu-coins-box");
            var _0x13e8b6 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var _0x1d6e0b = _0x1f32cc;
              _0x1d6e0b.Ci.Be();
              _0x1d6e0b.og.Dk();
            });
            _0x39d6bd.click(function () {
              var _0x52b3ce = _0x1f32cc;
              if (_0x52b3ce.Ij.Hj()) {
                _0x52b3ce.Ci.Be();
                _0x52b3ce.og.Ak(_0x52b3ce.og._j);
              }
            });
            var _0x405254 = _0x318912.M(_0x5408a7.kf, function (_0x2313aa, _0x32f72a) {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.Ek);
              this.ma = _0x2313aa;
              this.co = _0x32f72a;
              this['do'] = [];
            });
            _0x405254.prototype.ha = function () {
              _0x405254.parent.prototype.ha.call(this);
              if (!_0x405254.eo) {
                _0x405254.eo = true;
                var _0x53e086 = _0x1f32cc;
                _0x53e086.Ij.zl(function () {
                  if (_0x53e086.Ij.Hj()) {
                    _0x13e8b6.html(_0x53e086.Ij.il());
                  } else {
                    _0x13e8b6.html('0');
                  }
                });
              }
              _0x5408a7.bo.fo.stop();
              _0x5408a7.bo.fo.fadeOut(0x64);
            };
            _0x405254.go = $("#coins-view");
            _0x405254.ho = $('#leaders-view');
            _0x405254.io = $('#profile-view');
            _0x405254.jo = $("#settings-view");
            _0x405254.ko = $("#login-view");
            _0x405254.lo = $("#skins-view");
            _0x405254.mo = $("#store-view");
            _0x405254.no = $("#wear-view");
            _0x405254.oo = $('#withdraw-consent-view');
            _0x405254.po = $("#delete-account-view");
            _0x405254.fo = $("#please-wait-view");
            _0x405254.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0xc8);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0xc8);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0xc8);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeIn(0xc8);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0xc8);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0xc8);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0xc8);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0xc8);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0xc8);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeIn(0xc8);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeIn(0xc8);
              _0x4f87e0.html(this.ma);
              _0x39d6bd.toggle(this.co);
              this.qo();
            };
            _0x405254.prototype.qo = function () {};
            _0x405254.prototype.ro = function (_0x1540ce) {
              var _0x17c38e = this;
              var _0x4f04d2 = 0x7fffffff & _0x318912.V(0x0, 0x7fffffff);
              this['do'].push(_0x4f04d2);
              _0x5408a7.bo.fo.stop();
              _0x5408a7.bo.fo.fadeIn(0x64);
              setTimeout(function () {
                _0x17c38e.so(_0x4f04d2);
              }, _0x1540ce);
              return new _0x55d5cf(this, _0x4f04d2);
            };
            _0x405254.prototype.so = function (_0x1836cc) {
              var _0x39cb46 = this['do'].indexOf(_0x1836cc);
              if (!(_0x39cb46 < 0x0)) {
                this['do'].splice(_0x39cb46, 0x1);
                if (0x0 === this['do'].length) {
                  _0x5408a7.bo.fo.stop();
                  _0x5408a7.bo.fo.fadeOut(0x64);
                }
              }
            };
            return _0x405254;
          }();
          var _0x55d5cf = function () {
            function _0x566418(_0x2af0e9, _0xe9083b) {
              this.to = _0x2af0e9;
              this.uo = _0xe9083b;
            }
            _0x566418.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return _0x566418;
          }();
          _0x5408a7.ak = function () {
            var _0x48d792 = $('#store-buy-coins_125000');
            var _0x1ddad4 = $("#store-buy-coins_50000");
            var _0x379806 = $("#store-buy-coins_16000");
            var _0x46fac4 = $("#store-buy-coins_7000");
            var _0x550b3c = $("#store-buy-coins_3250");
            var _0x910f3b = $("#store-buy-coins_1250");
            var _0x299c49 = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.coins.tab"), false);
              var _0x51f734 = _0x1f32cc;
              var _0x1e9279 = this;
              _0x48d792.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo("coins_125000");
              });
              _0x1ddad4.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo("coins_50000");
              });
              _0x379806.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo('coins_16000');
              });
              _0x46fac4.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo("coins_7000");
              });
              _0x550b3c.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo('coins_3250');
              });
              _0x910f3b.click(function () {
                _0x51f734.Ci.Be();
                _0x1e9279.wo('coins_1250');
              });
            });
            _0x299c49.prototype.ha = function () {
              _0x299c49.parent.prototype.ha.call(this);
            };
            _0x299c49.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeIn(0xc8);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x299c49.prototype.Hk = function () {
              _0x1f32cc.Ci.Ce();
            };
            _0x299c49.prototype.wo = function (_0x238b6c) {};
            return _0x299c49;
          }();
          _0x5408a7.ck = function () {
            var _0xaeebca = $("#highscore-table");
            var _0xb70570 = $("#leaders-button-level");
            var _0x4addf7 = $("#leaders-button-highscore");
            var _0x1f1bb2 = $("#leaders-button-kills");
            var _0x4ab077 = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.leaders.tab"), true);
              var _0xd55080 = _0x1f32cc;
              var _0x2e4143 = this;
              this.xo = {};
              this.yo = {
                'zo': {
                  'Ao': _0xb70570,
                  'Bo': "byLevel"
                },
                'Co': {
                  'Ao': _0x4addf7,
                  'Bo': "byHighScore"
                },
                'Do': {
                  'Ao': _0x1f1bb2,
                  'Bo': "byKillsAndHeadShots"
                }
              };
              _0xb70570.click(function () {
                _0xd55080.Ci.Be();
                _0x2e4143.Eo(_0x2e4143.yo.zo);
              });
              _0x4addf7.click(function () {
                _0xd55080.Ci.Be();
                _0x2e4143.Eo(_0x2e4143.yo.Co);
              });
              _0x1f1bb2.click(function () {
                _0xd55080.Ci.Be();
                _0x2e4143.Eo(_0x2e4143.yo.Do);
              });
            });
            _0x4ab077.prototype.ha = function () {
              _0x4ab077.parent.prototype.ha.call(this);
            };
            _0x4ab077.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeIn(0xc8);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x4ab077.prototype.Hk = function () {
              var _0x32412d = this;
              _0x1f32cc.Ci.Ce();
              var _0x51e513 = this.ro(0x1388);
              var _0x4ff253 = _0x318912.a.b + "/pub/leaders";
              _0x318912.Z(_0x4ff253, function () {
                _0x32412d.xo = {
                  'byLevel': [],
                  'byHighScore': [],
                  'byKillsAndHeadShots': []
                };
                _0x32412d.Eo(null != _0x32412d.Fo ? _0x32412d.Fo : _0x32412d.yo.zo);
                _0x51e513.vo();
              }, function (_0x4a1fe7) {
                _0x32412d.xo = _0x4a1fe7;
                _0x32412d.Eo(null != _0x32412d.Fo ? _0x32412d.Fo : _0x32412d.yo.zo);
                _0x51e513.vo();
              });
            };
            _0x4ab077.prototype.Eo = function (_0x50423a) {
              this.Fo = _0x50423a;
              for (var _0x4a238e in this.yo) if (this.yo.hasOwnProperty(_0x4a238e)) {
                var _0x4092f3 = this.yo[_0x4a238e];
                _0x4092f3.Ao.removeClass("pressed");
              }
              this.Fo.Ao.addClass("pressed");
              var _0x5416ad = this.xo[this.Fo.Bo];
              var _0x41665b = '';
              for (var _0xca5a17 = 0x0; _0xca5a17 < _0x5416ad.length; _0xca5a17++) {
                var _0x408615 = _0x5416ad[_0xca5a17];
                _0x41665b += "<div class=\"table-row\"><span>" + (_0xca5a17 + 0x1) + "</span><span><img src=\"" + _0x408615.avatarUrl + "\"/></span><span>" + _0x408615.username + "</span><span>" + _0x408615.level + '</span><span>' + _0x408615.highScore + '</span><span>' + _0x408615.headShots + " / " + _0x408615.kills + "</span></div>";
              }
              _0xaeebca.empty();
              _0xaeebca.append(_0x41665b);
            };
            return _0x4ab077;
          }();
          _0x5408a7.gk = function () {
            var _0x92ad2f = $('#popup-login-gg');
            var _0x9e15ca = $('#popup-login-fb');
            var _0x1a1e27 = _0x318912.M(_0x5408a7.bo, function () {
              var _0xe94987 = this;
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.login.tab"), false);
              var _0x133b8a = _0x1f32cc;
              _0x92ad2f.click(function () {
                _0x133b8a.Ci.Be();
                var _0x413914 = _0xe94987.ro(0x2710);
                setTimeout(function () {
                  _0x133b8a.Ij.Ml(function () {
                    if (_0x133b8a.Ij.Hj()) {
                      _0x133b8a.Ci.Fe();
                    }
                    _0x413914.vo();
                  });
                }, 0x1f4);
              });
              _0x9e15ca.click(function () {
                _0x133b8a.Ci.Be();
                var _0x4200fd = _0xe94987.ro(0x2710);
                setTimeout(function () {
                  _0x133b8a.Ij.Jl(function () {
                    if (_0x133b8a.Ij.Hj()) {
                      _0x133b8a.Ci.Fe();
                    }
                    _0x4200fd.vo();
                  });
                }, 0x1f4);
              });
            });
            _0x1a1e27.prototype.ha = function () {
              _0x1a1e27.parent.prototype.ha.call(this);
            };
            _0x1a1e27.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeIn(0xc8);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x1a1e27.prototype.Hk = function () {
              _0x1f32cc.Ci.Ce();
            };
            return _0x1a1e27;
          }();
          _0x5408a7.ek = function () {
            var _0x42e69e = $("#profile-avatar");
            var _0x15a14e = $("#profile-username");
            var _0x59e4f3 = $("#profile-experience-bar");
            var _0x538b66 = $('#profile-experience-val');
            var _0x36231f = $("#profile-level");
            var _0x3992cc = $('#profile-stat-highScore');
            var _0x43c9ba = $("#profile-stat-bestSurvivalTime");
            var _0x38ef21 = $("#profile-stat-kills");
            var _0x5c458e = $("#profile-stat-headshots");
            var _0x193e8e = $("#profile-stat-gamesPlayed");
            var _0x45c226 = $("#profile-stat-totalTimeSpent");
            var _0x108704 = $('#profile-stat-registrationDate');
            var _0x5d90b7 = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.profile.tab"), true);
            });
            _0x5d90b7.prototype.ha = function () {
              _0x5d90b7.parent.prototype.ha.call(this);
            };
            _0x5d90b7.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeIn(0xc8);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x5d90b7.prototype.Hk = function () {
              var _0x242bd4 = _0x1f32cc;
              _0x242bd4.Ci.Ce();
              var _0x4432ac = _0x242bd4.Ij.xl();
              var _0xa08980 = moment([_0x4432ac.year, _0x4432ac.month - 0x1, _0x4432ac.day]).format('LL');
              _0x15a14e.html(_0x242bd4.Ij.dl());
              _0x42e69e.attr("src", _0x242bd4.Ij.fl());
              _0x59e4f3.width(0x64 * _0x242bd4.Ij.kl() / _0x242bd4.Ij.ll() + '%');
              _0x538b66.html(_0x242bd4.Ij.kl() + " / " + _0x242bd4.Ij.ll());
              _0x36231f.html(_0x242bd4.Ij.jl());
              _0x3992cc.html(_0x242bd4.Ij.rl());
              _0x43c9ba.html(_0x318912.J(_0x242bd4.Ij.sl()));
              _0x38ef21.html(_0x242bd4.Ij.tl());
              _0x5c458e.html(_0x242bd4.Ij.ul());
              _0x193e8e.html(_0x242bd4.Ij.vl());
              _0x45c226.html(_0x318912.J(_0x242bd4.Ij.wl()));
              _0x108704.html(_0xa08980);
            };
            return _0x5d90b7;
          }();
          _0x5408a7.hk = function () {
            var _0x385007 = $("#settings-music-enabled-switch");
            var _0x43782d = $("#settings-sfx-enabled-switch");
            var _0x2916a4 = $("#settings-show-names-switch");
            var _0x1e8445 = $("#popup-logout");
            var _0x11e472 = $("#popup-logout-container");
            var _0x251748 = $('#popup-delete-account');
            var _0x16bdd6 = $("#popup-delete-account-container");
            var _0x304df7 = $('#popup-withdraw-consent');
            var _0x392d62 = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.settings.tab"), false);
              var _0xb047e6 = this;
              var _0x208306 = _0x1f32cc;
              _0x385007.click(function () {
                var _0x5ddcad = !!_0x385007.prop("checked");
                _0x5408a7.Vf.eg(_0x5408a7.Vf.Yf, _0x5ddcad, 0x1e);
                _0x208306.Ci.re(_0x5ddcad);
                _0x208306.Ci.Be();
              });
              _0x43782d.click(function () {
                var _0x40106f = !!_0x43782d.prop("checked");
                _0x5408a7.Vf.eg(_0x5408a7.Vf.Zf, _0x40106f, 0x1e);
                _0x208306.Ci.oe(_0x40106f);
                _0x208306.Ci.Be();
              });
              _0x2916a4.click(function () {
                _0x208306.Ci.Be();
              });
              _0x1e8445.click(function () {
                _0x208306.Ci.Be();
                _0xb047e6.ro(0x1f4);
                _0x208306.Ij.Kl();
              });
              _0x251748.click(function () {
                if (_0x208306.Ij.Hj()) {
                  _0x208306.Ci.Be();
                  _0x208306.og.Ak(_0x208306.og.Zj);
                } else {
                  _0x208306.Ci.Ge();
                }
              });
              _0x304df7.click(function () {
                if (_0x208306.Go()) {
                  _0x208306.Ci.Be();
                  _0x208306.og.Ak(_0x208306.og.Xj);
                } else {
                  _0x208306.Ci.Ge();
                }
              });
            });
            _0x392d62.prototype.ha = function () {
              _0x392d62.parent.prototype.ha.call(this);
              var _0x4acc03 = _0x1f32cc;
              var _0x143811 = undefined;
              switch (_0x5408a7.Vf.fg(_0x5408a7.Vf.Yf)) {
                case "false":
                  _0x143811 = false;
                  break;
                default:
                  _0x143811 = true;
              }
              _0x385007.prop("checked", _0x143811);
              _0x4acc03.Ci.re(_0x143811);
              var _0xaf7a7a = undefined;
              switch (_0x5408a7.Vf.fg(_0x5408a7.Vf.Zf)) {
                case "false":
                  _0xaf7a7a = false;
                  break;
                default:
                  _0xaf7a7a = true;
              }
              _0x43782d.prop("checked", _0xaf7a7a);
              _0x4acc03.Ci.oe(_0xaf7a7a);
              var _0x2137da = undefined;
              switch (_0x5408a7.Vf.fg(_0x5408a7.Vf.Xf)) {
                case "false":
                  _0x2137da = false;
                  break;
                default:
                  _0x2137da = true;
              }
              _0x2916a4.prop("checked", _0x2137da);
              _0x4acc03.Ij.yl(function () {
                _0x11e472.toggle(_0x4acc03.Ij.Hj());
                _0x16bdd6.toggle(_0x4acc03.Ij.Hj());
              });
            };
            _0x392d62.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeIn(0xc8);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x392d62.prototype.Hk = function () {
              var _0x248bbb = _0x1f32cc;
              _0x248bbb.Ci.Ce();
              if (_0x248bbb.Go()) {
                _0x304df7.show();
              } else {
                _0x304df7.hide();
              }
            };
            _0x392d62.prototype.Zh = function () {
              return _0x2916a4.prop('checked');
            };
            return _0x392d62;
          }();
          _0x5408a7.jk = function () {
            var _0x451721 = $("#store-view-canv");
            var _0x4d67d4 = $('#skin-description-text');
            var _0xb034c9 = $("#skin-group-description-text");
            var _0x298aa4 = $("#store-locked-bar");
            var _0xc268b2 = $("#store-locked-bar-text");
            var _0x4b66ec = $('#store-buy-button');
            var _0x36c0ac = $('#store-item-price');
            var _0x205722 = $("#store-groups");
            var _0x1a376e = $("#store-view-prev");
            var _0x56e6e2 = $("#store-view-next");
            var _0x1cc08b = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.skins.tab"), true);
              var _0x201fbe = this;
              var _0x161d79 = _0x1f32cc;
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new _0x5408a7.dm(_0x451721);
              _0x4b66ec.click(function () {
                _0x161d79.Ci.Be();
                _0x201fbe.Lo();
              });
              _0x1a376e.click(function () {
                _0x161d79.Ci.Be();
                _0x201fbe.Ho.Mo();
              });
              _0x56e6e2.click(function () {
                _0x161d79.Ci.Be();
                _0x201fbe.Ho.No();
              });
            });
            _0x1cc08b.prototype.ha = function () {
              _0x1cc08b.parent.prototype.ha.call(this);
              var _0x5aa32b = this;
              var _0x2586f0 = _0x1f32cc;
              _0x2586f0.Lc.$b(function () {
                var _0x3be156 = _0x2586f0.Lc.Xb();
                _0x5aa32b.Io = [];
                for (var _0x23414a = 0x0; _0x23414a < _0x3be156.skinGroupArrayDict.length; _0x23414a++) {
                  _0x5aa32b.Io.push(new _0x34953f(_0x5aa32b, _0x3be156.skinGroupArrayDict[_0x23414a]));
                }
                _0x5aa32b.Jo = {};
                for (var _0x4b4c37 = 0x0; _0x4b4c37 < _0x3be156.skinArrayDict.length; _0x4b4c37++) {
                  var _0x45b2ae = _0x3be156.skinArrayDict[_0x4b4c37];
                  _0x5aa32b.Jo[_0x45b2ae.id] = _0x45b2ae;
                }
                _0x5aa32b.Oo();
              });
              this.Po(false);
              _0x2586f0.On.zj(function () {
                _0x5aa32b.Po(false);
              });
            };
            _0x1cc08b.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeIn(0xc8);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x1cc08b.prototype.Hk = function () {
              _0x1f32cc.Ci.pe(_0x5408a7.ge.je._e);
              _0x1f32cc.Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            _0x1cc08b.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x1cc08b.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x1cc08b.prototype.Nf = function (_0x4e497b, _0x2fbb32) {
              this.Ko.Nf();
            };
            _0x1cc08b.prototype.Oo = function () {
              var _0xcc4ac3 = this;
              var _0x4fe09c = this;
              var _0x1e2e82 = _0x1f32cc;
              _0x205722.empty();
              for (var _0x5cd628 = 0x0; _0x5cd628 < this.Io.length; _0x5cd628++) {
                !function (_0x2663ab) {
                  var _0x4b20dc = _0xcc4ac3.Io[_0x2663ab];
                  var _0xc21a09 = document.createElement('li');
                  _0x205722.append(_0xc21a09);
                  var _0x6960ca = $(_0xc21a09);
                  if (_0x4b20dc.To && _0x4b20dc.To.isCustom) {
                    _0x6960ca.css("background-color", '#FFF');
                    _0x6960ca.css("color", "#000");
                  }
                  _0x6960ca.html(_0x4b20dc.Qo());
                  _0x6960ca.click(function () {
                    _0x1e2e82.Ci.Be();
                    _0x4fe09c.Ro(_0x4b20dc);
                  });
                  _0x4b20dc.So = _0x6960ca;
                }(_0x5cd628);
              }
              if (this.Io.length > 0x0) {
                var _0x191a52 = _0x1e2e82.On.rj(_0x5408a7.tj.sj);
                for (var _0x5cd628 = 0x0; _0x5cd628 < this.Io.length; _0x5cd628++) {
                  var _0x8b426 = this.Io[_0x5cd628];
                  var _0x2095f7 = _0x8b426.To.list;
                  for (var _0x309b86 = 0x0; _0x309b86 < _0x2095f7.length; _0x309b86++) {
                    if (_0x2095f7[_0x309b86] == _0x191a52) {
                      _0x8b426.Uo = _0x309b86;
                      return void this.Ro(_0x8b426);
                    }
                  }
                }
                this.Ro(this.Io[0x0]);
              }
            };
            _0x1cc08b.prototype.Ro = function (_0x371c4e) {
              var _0x35d322 = _0x1f32cc;
              if (this.Ho !== _0x371c4e) {
                this.Ho = _0x371c4e;
                _0x205722.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass('pressed');
                }
                _0xb034c9.html('');
                if (null != _0x371c4e.To) {
                  var _0xd7db0c = _0x35d322.Lc.Xb().textDict[_0x371c4e.To.description];
                  if (null != _0xd7db0c) {
                    _0xb034c9.html(_0x318912.K(_0x318912.I(_0xd7db0c)));
                  }
                }
                this.Po(true);
              }
            };
            _0x1cc08b.prototype.Vo = function () {
              return null == this.Ho ? _0x5408a7.Si.Ui() : this.Ho.Wo();
            };
            _0x1cc08b.prototype.Lo = function () {
              var _0x24bc1d = this;
              var _0x526750 = this.Vo();
              if (_0x526750.Wi()) {
                var _0x287374 = _0x526750.bc();
                _0x24bc1d.Xo(_0x287374);
              }
            };
            _0x1cc08b.prototype.Xo = function (_0x2021dd) {
              var _0x3148bc = _0x1f32cc;
              var _0x57c2cc = _0x3148bc.On.Gj(_0x2021dd, _0x5408a7.tj.sj);
              if (null != _0x57c2cc) {
                var _0x2dc556 = _0x57c2cc.Jj();
                if (!(_0x3148bc.Ij.il() < _0x2dc556)) {
                  var _0x551059 = _0x3148bc.On.rj(_0x5408a7.tj.sj);
                  var _0x33d62d = _0x3148bc.On.rj(_0x5408a7.tj.uj);
                  var _0x210136 = _0x3148bc.On.rj(_0x5408a7.tj.vj);
                  var _0x2ef07d = _0x3148bc.On.rj(_0x5408a7.tj.xj);
                  var _0x4bf671 = _0x3148bc.On.rj(_0x5408a7.tj.wj);
                  var _0x42f426 = this.ro(0x1388);
                  _0x3148bc.Ij.Hl(_0x2021dd, _0x5408a7.tj.sj, function () {
                    _0x42f426.vo();
                    _0x3148bc.og.Ak(_0x3148bc.og.tk);
                  }, function (_0x3b337e) {
                    _0x3148bc.Ij.Bl(function () {
                      _0x3148bc.On.Fj(_0x551059, _0x5408a7.tj.sj);
                      _0x3148bc.On.Fj(_0x33d62d, _0x5408a7.tj.uj);
                      _0x3148bc.On.Fj(_0x210136, _0x5408a7.tj.vj);
                      _0x3148bc.On.Fj(_0x2ef07d, _0x5408a7.tj.xj);
                      _0x3148bc.On.Fj(_0x4bf671, _0x5408a7.tj.wj);
                      _0x3148bc.On.Fj(_0x2021dd, _0x5408a7.tj.sj);
                      _0x42f426.vo();
                    });
                  });
                }
              }
            };
            _0x1cc08b.prototype.Po = function (_0x2a66f5) {
              var _0x3ac543 = _0x1f32cc;
              var _0x507294 = _0x3ac543.On.yj();
              var _0x2d84ed = this.Vo();
              if (_0x2d84ed.Wi()) {
                var _0x189b2b = _0x2d84ed.bc();
                var _0x6393a5 = _0x3ac543.On.Gj(_0x189b2b, _0x5408a7.tj.sj);
                var _0xa0c1b9 = false;
                var _0x3d4bf6 = _0x3ac543.On.Cj(_0x189b2b, _0x5408a7.tj.sj);
                var _0x31e7b7 = true;
                if (_0x3d4bf6) {
                  _0x298aa4.hide();
                  _0x4b66ec.hide();
                } else {
                  if (_0x6393a5 == null || _0x6393a5.Kj()) {
                    _0xa0c1b9 = true;
                    _0x298aa4.show();
                    _0x4b66ec.hide();
                    _0xc268b2.text(_0x318912.H('index.game.popup.menu.store.locked'));
                    if (_0x6393a5 != null && _0x6393a5.Kj()) {
                      var _0x460327 = _0x3ac543.Lc.Xb().textDict[_0x6393a5.Em()];
                      if (_0x460327 != null) {
                        _0xc268b2.text(_0x318912.I(_0x460327));
                      }
                    }
                  } else {
                    _0x31e7b7 = false;
                    _0x298aa4.hide();
                    _0x4b66ec.show();
                    _0x36c0ac.html(_0x6393a5.Jj());
                  }
                }
                _0x4d67d4.html('');
                var _0x3bc6c1 = _0x3ac543.Lc.Xb().textDict[_0x6393a5.Fm()];
                var _0x3eab8b = _0x3bc6c1 ? _0x318912.K(_0x318912.I(_0x3bc6c1)) : _0x6393a5.Fm();
                if (_0x6393a5 != null && _0x6393a5.Fm() != null) {
                  _0x4d67d4.html(_0x3eab8b);
                }
                if (_0x31e7b7 && _0x6393a5.Bm !== true) {
                  _0x51fa9c.html("<button onclick=\"mbf.mbf_cambiar_add('".concat(_0x189b2b, "', '").concat(_0x3eab8b, "')\">Add</button>"));
                } else {
                  _0x51fa9c.html('');
                }
                this.Ko.$l(_0x507294.Um(_0x189b2b));
                this.Ko.um(_0xa0c1b9);
                if (_0x2a66f5) {
                  _0x3ac543.On.Fj(_0x189b2b, _0x5408a7.tj.sj);
                }
              }
            };
            var _0x34953f = function () {
              function _0x1922ae(_0x40fdf0, _0x1b9d79) {
                this.Yo = _0x40fdf0;
                this.Uo = 0x0;
                this.To = _0x1b9d79;
              }
              _0x1922ae.prototype.Mo = function () {
                if (--this.Uo < 0x0) {
                  this.Uo = this.To.list.length - 0x1;
                }
                this.Yo.Po(true);
              };
              _0x1922ae.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0x0;
                }
                this.Yo.Po(true);
              };
              _0x1922ae.prototype.Qo = function () {
                if (this.To.img) {
                  var _0x1b73b2 = _0x1f32cc.Lc.Xb().customPaths;
                  var _0x513c09 = URL_CDN + "/images/" + _0x1b73b2.texture;
                  var _0x3bc22d = [];
                  try {
                    _0x3bc22d.push("background-image:url('".concat(_0x513c09, "')"));
                    _0x3bc22d.push("background-position: -".concat(_0x1b73b2.map[this.To.img].x, "px -").concat(_0x1b73b2.map[this.To.img].y, 'px'));
                    _0x3bc22d.push('background-repeat:no-repeat');
                    _0x3bc22d.push("width: 180px");
                    _0x3bc22d.push("height: 40px");
                  } catch (_0x20b355) {
                    console.error(_0x513c09, _0x20b355);
                  }
                  return "<div id=\"".concat(this.To.id, "\" style=\"").concat(_0x3bc22d.join(';'), "\"></div>");
                }
                return _0x318912.I(this.To.name);
              };
              _0x1922ae.prototype.Wo = function () {
                return this.Uo >= this.To.list.length ? _0x5408a7.Si.Ui() : _0x5408a7.Si.Vi(this.To.list[this.Uo]);
              };
              return _0x1922ae;
            }();
            return _0x1cc08b;
          }();
          _0x5408a7.lk = function () {
            var _0x2adca0 = $("#store-go-coins-button");
            var _0x4cca8a = $("#store-go-skins-button");
            var _0x526d27 = $("#store-go-wear-button");
            var _0x44cebc = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H('index.game.popup.menu.store.tab'), true);
              var _0x1b9002 = _0x1f32cc;
              _0x2adca0.click(function () {
                _0x1b9002.Ci.Be();
                _0x1b9002.og.Ak(_0x1b9002.og._j);
              });
              _0x4cca8a.click(function () {
                _0x1b9002.Ci.Be();
                _0x1b9002.og.Ak(_0x1b9002.og.ik);
              });
              _0x526d27.click(function () {
                _0x1b9002.Ci.Be();
                _0x1b9002.og.Ak(_0x1b9002.og.mk);
              });
            });
            _0x44cebc.prototype.ha = function () {
              _0x44cebc.parent.prototype.ha.call(this);
            };
            _0x44cebc.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeIn(0xc8);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x44cebc.prototype.Hk = function () {
              _0x1f32cc.Ci.Ce();
            };
            return _0x44cebc;
          }();
          _0x5408a7.nk = function () {
            var _0x23012d = $("#wear-view-canv");
            var _0x3bfe6b = $("#wear-description-text");
            var _0xea4516 = $("#wear-locked-bar");
            var _0x1cf712 = $("#wear-locked-bar-text");
            var _0x5ac10c = $('#wear-buy-button');
            var _0x777cd3 = $('#wear-item-price');
            var _0xbd651 = $("#wear-eyes-button");
            var _0x47176c = $("#wear-mouths-button");
            var _0x27528c = $("#wear-glasses-button");
            var _0x42ce17 = $("#wear-hats-button");
            var _0x49c505 = $("#wear-tint-chooser");
            var _0x4ee53d = $("#wear-view-prev");
            var _0x3e4fd5 = $("#wear-view-next");
            var _0x4885e9 = _0x318912.M(_0x5408a7.bo, function () {
              var _0x162606 = this;
              _0x5408a7.bo.call(this, _0x318912.H("index.game.popup.menu.wear.tab"), true);
              var _0x12fff8 = _0x1f32cc;
              var _0x4f93c7 = this;
              this.Zo = [];
              this.uj = new _0x598b91(this, _0x5408a7.tj.uj, _0xbd651);
              this.vj = new _0x598b91(this, _0x5408a7.tj.vj, _0x47176c);
              this.xj = new _0x598b91(this, _0x5408a7.tj.xj, _0x27528c);
              this.wj = new _0x598b91(this, _0x5408a7.tj.wj, _0x42ce17);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new _0x5408a7.dm(_0x23012d);
              _0x5ac10c.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.ep();
              });
              _0x4ee53d.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.$o.fp();
              });
              _0x3e4fd5.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.$o.gp();
              });
              _0xbd651.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.hp(_0x162606.uj);
              });
              _0x47176c.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.hp(_0x162606.vj);
              });
              _0x27528c.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.hp(_0x162606.xj);
              });
              _0x42ce17.click(function () {
                _0x12fff8.Ci.Be();
                _0x4f93c7.hp(_0x162606.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            _0x4885e9.prototype.ha = function () {
              _0x4885e9.parent.prototype.ha.call(this);
              var _0xfcdf7a = _0x1f32cc;
              var _0x1b0c90 = this;
              _0xfcdf7a.Lc.$b(function () {
                var _0x15871e = _0xfcdf7a.Lc.Xb();
                _0x1b0c90._o = _0x15871e.eyesDict;
                _0x1b0c90.ap = _0x15871e.mouthDict;
                _0x1b0c90.bp = _0x15871e.glassesDict;
                _0x1b0c90.cp = _0x15871e.hatDict;
                _0x1b0c90.dp = _0x15871e.colorDict;
                _0x1b0c90.uj.ip(_0x15871e.eyesVariantArray);
                _0x1b0c90.uj.jp(_0x1b0c90._o);
                _0x1b0c90.vj.ip(_0x15871e.mouthVariantArray);
                _0x1b0c90.vj.jp(_0x1b0c90.ap);
                _0x1b0c90.xj.ip(_0x15871e.glassesVariantArray);
                _0x1b0c90.xj.jp(_0x1b0c90.bp);
                _0x1b0c90.wj.ip(_0x15871e.hatVariantArray);
                _0x1b0c90.wj.jp(_0x1b0c90.cp);
              });
              this.Po(false);
              _0xfcdf7a.On.zj(function () {
                _0x1b0c90.Po(false);
              });
            };
            _0x4885e9.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeIn(0xc8);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x4885e9.prototype.Hk = function () {
              _0x1f32cc.Ci.pe(_0x5408a7.ge.je._e);
              _0x1f32cc.Ci.Ce();
              this.hp(null != this.$o ? this.$o : this.uj);
              this.Ko.Kf(true);
            };
            _0x4885e9.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x4885e9.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x4885e9.prototype.Nf = function (_0x36ef74, _0x6a656b) {
              this.Ko.Nf();
            };
            _0x4885e9.prototype.hp = function (_0x1c2995) {
              this.$o = _0x1c2995;
              for (var _0x43be80 = 0x0; _0x43be80 < this.Zo.length; _0x43be80++) {
                this.Zo[_0x43be80].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            _0x4885e9.prototype.kp = function () {
              return null == this.$o ? _0x5408a7.Si.Ui() : _0x5408a7.Si.Vi({
                'ae': this.$o.Wo(),
                'nd': this.$o.nd
              });
            };
            _0x4885e9.prototype.ep = function () {
              var _0x2de0d4 = this;
              var _0x29c52f = this.kp();
              if (_0x29c52f.Wi()) {
                var _0x4f3f5d = _0x29c52f.bc();
                _0x2de0d4.lp(_0x4f3f5d.ae, _0x4f3f5d.nd);
              }
            };
            _0x4885e9.prototype.lp = function (_0x1cc277, _0x10598d) {
              var _0x31a38d = _0x1f32cc;
              var _0xd7913f = _0x31a38d.On.Gj(_0x1cc277, _0x10598d);
              if (null != _0xd7913f) {
                var _0x402332 = _0xd7913f.Jj();
                if (!(_0x31a38d.Ij.il() < _0x402332)) {
                  var _0x89a102 = _0x31a38d.On.rj(_0x5408a7.tj.sj);
                  var _0x24775a = _0x31a38d.On.rj(_0x5408a7.tj.uj);
                  var _0x1bfa3a = _0x31a38d.On.rj(_0x5408a7.tj.vj);
                  var _0x119f49 = _0x31a38d.On.rj(_0x5408a7.tj.xj);
                  var _0x333d56 = _0x31a38d.On.rj(_0x5408a7.tj.wj);
                  var _0x457964 = this.ro(0x1388);
                  _0x31a38d.Ij.Hl(_0x1cc277, _0x10598d, function () {
                    _0x457964.vo();
                    _0x31a38d.og.Ak(_0x31a38d.og.tk);
                  }, function (_0x543ab3) {
                    _0x31a38d.Ij.Bl(function () {
                      _0x31a38d.On.Fj(_0x89a102, _0x5408a7.tj.sj);
                      _0x31a38d.On.Fj(_0x24775a, _0x5408a7.tj.uj);
                      _0x31a38d.On.Fj(_0x1bfa3a, _0x5408a7.tj.vj);
                      _0x31a38d.On.Fj(_0x119f49, _0x5408a7.tj.xj);
                      _0x31a38d.On.Fj(_0x333d56, _0x5408a7.tj.wj);
                      _0x31a38d.On.Fj(_0x1cc277, _0x10598d);
                      _0x457964.vo();
                    });
                  });
                }
              }
            };
            _0x4885e9.prototype.Po = function (_0x4ad4b3) {
              var _0x53c02f = _0x1f32cc;
              var _0xefba6a = _0x53c02f.On.yj();
              var _0x5ba9f4 = this.kp();
              if (_0x5ba9f4.Wi()) {
                var _0x195915 = _0x5ba9f4.bc();
                var _0x49d5ed = _0x53c02f.On.Gj(_0x195915.ae, _0x195915.nd);
                var _0x21ba2c = false;
                if (_0x53c02f.On.Cj(_0x195915.ae, _0x195915.nd)) {
                  _0xea4516.hide();
                  _0x5ac10c.hide();
                } else {
                  if (null == _0x49d5ed || _0x49d5ed.Kj()) {
                    _0x21ba2c = true;
                    _0xea4516.show();
                    _0x5ac10c.hide();
                    _0x1cf712.text(_0x318912.H("index.game.popup.menu.store.locked"));
                    if (null != _0x49d5ed && _0x49d5ed.Kj()) {
                      var _0x223b8b = _0x53c02f.Lc.Xb().textDict[_0x49d5ed.Em()];
                      if (null != _0x223b8b) {
                        _0x1cf712.text(_0x318912.I(_0x223b8b));
                      }
                    }
                  } else {
                    _0xea4516.hide();
                    _0x5ac10c.show();
                    _0x777cd3.html(_0x49d5ed.Jj());
                  }
                }
                _0x3bfe6b.html('');
                if (null != _0x49d5ed && null != _0x49d5ed.Fm()) {
                  var _0x54d110 = _0x53c02f.Lc.Xb().textDict[_0x49d5ed.Fm()];
                  if (null != _0x54d110) {
                    _0x3bfe6b.html(_0x318912.K(_0x318912.I(_0x54d110)));
                  }
                }
                var _0x4486ab = this.Ko;
                switch (_0x195915.nd) {
                  case _0x5408a7.tj.uj:
                    _0x4486ab.$l(_0xefba6a.Vm(_0x195915.ae));
                    _0x4486ab.vm(_0x21ba2c);
                    break;
                  case _0x5408a7.tj.vj:
                    _0x4486ab.$l(_0xefba6a.Wm(_0x195915.ae));
                    _0x4486ab.wm(_0x21ba2c);
                    break;
                  case _0x5408a7.tj.xj:
                    _0x4486ab.$l(_0xefba6a.Ym(_0x195915.ae));
                    _0x4486ab.ym(_0x21ba2c);
                    break;
                  case _0x5408a7.tj.wj:
                    _0x4486ab.$l(_0xefba6a.Xm(_0x195915.ae));
                    _0x4486ab.xm(_0x21ba2c);
                }
                if (_0x4ad4b3) {
                  _0x53c02f.On.Fj(_0x195915.ae, _0x195915.nd);
                }
              }
            };
            var _0x598b91 = function () {
              function _0x5d3f9d(_0x307ec6, _0x4c8636, _0x587ed1) {
                this.Yo = _0x307ec6;
                this.nd = _0x4c8636;
                this.Ao = _0x587ed1;
                this.ac = {};
                this.mp = [[]];
                this.np = -0xa;
                this.op = -0xa;
              }
              _0x5d3f9d.prototype.ip = function (_0x34536) {
                this.mp = _0x34536;
              };
              _0x5d3f9d.prototype.jp = function (_0x32d58b) {
                this.ac = _0x32d58b;
              };
              _0x5d3f9d.prototype.Gk = function () {
                var _0x47aaee = _0x1f32cc;
                var _0x6ade9 = _0x47aaee.On.rj(this.nd);
                for (var _0x37a81a = 0x0; _0x37a81a < this.mp.length; _0x37a81a++) {
                  for (var _0x3b1f54 = 0x0; _0x3b1f54 < this.mp[_0x37a81a].length; _0x3b1f54++) {
                    if (this.mp[_0x37a81a][_0x3b1f54] == _0x6ade9) {
                      this.pp(_0x37a81a);
                      return void this.qp(_0x3b1f54);
                    }
                  }
                }
                this.pp(0x0);
                this.qp(0x0);
              };
              _0x5d3f9d.prototype.fp = function () {
                var _0x2a00e7 = this.np - 0x1;
                if (_0x2a00e7 < 0x0) {
                  _0x2a00e7 = this.mp.length - 0x1;
                }
                this.pp(_0x2a00e7);
                this.qp(this.op % this.mp[_0x2a00e7].length);
              };
              _0x5d3f9d.prototype.gp = function () {
                var _0x4742e8 = this.np + 0x1;
                if (_0x4742e8 >= this.mp.length) {
                  _0x4742e8 = 0x0;
                }
                this.pp(_0x4742e8);
                this.qp(this.op % this.mp[_0x4742e8].length);
              };
              _0x5d3f9d.prototype.pp = function (_0x6aee25) {
                var _0x1c27ad = this;
                if (!(_0x6aee25 < 0x0 || _0x6aee25 >= this.mp.length)) {
                  this.np = _0x6aee25;
                  _0x49c505.empty();
                  var _0x3274cf = this.mp[this.np];
                  if (_0x3274cf.length > 0x1) {
                    for (var _0x31f9d5 = 0x0; _0x31f9d5 < _0x3274cf.length; _0x31f9d5++) {
                      !function (_0x1a132e) {
                        var _0x45f28b = _0x3274cf[_0x1a132e];
                        var _0x3ad8dc = _0x1c27ad.ac[_0x45f28b];
                        var _0x20e526 = '#' + _0x1c27ad.Yo.dp[_0x3ad8dc.prime];
                        var _0x28a744 = $("<div style=\"border-color:" + _0x20e526 + "\"></div>");
                        _0x28a744.click(function () {
                          _0x1f32cc.Ci.Be();
                          _0x1c27ad.qp(_0x1a132e);
                        });
                        _0x49c505.append(_0x28a744);
                      }(_0x31f9d5);
                    }
                  }
                }
              };
              _0x5d3f9d.prototype.qp = function (_0x23b364) {
                if (!(_0x23b364 < 0x0 || _0x23b364 >= this.mp[this.np].length)) {
                  this.op = _0x23b364;
                  _0x49c505.children().css('background-color', 'transparent');
                  var _0x200393 = _0x49c505.children(":nth-child(" + (0x1 + _0x23b364) + ')');
                  _0x200393.css('background-color', _0x200393.css('border-color'));
                  this.Yo.Po(true);
                }
              };
              _0x5d3f9d.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return _0x5d3f9d;
            }();
            return _0x4885e9;
          }();
          _0x5408a7.Yj = function () {
            var _0x4c024c = $("#withdraw-consent-yes");
            var _0x1567ff = $('#withdraw-consent-no');
            var _0x294c11 = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H('index.game.popup.menu.consent.tab'), false);
              var _0x3cbae5 = _0x1f32cc;
              _0x4c024c.click(function () {
                _0x3cbae5.Ci.Be();
                if (_0x3cbae5.Go()) {
                  _0x3cbae5.og.Ak(_0x3cbae5.og._e);
                  _0x3cbae5.rp(false, true);
                  _0x3cbae5.og.qk._n(new _0x5408a7.sp());
                } else {
                  _0x3cbae5.og.Dk();
                }
              });
              _0x1567ff.click(function () {
                _0x3cbae5.Ci.Be();
                _0x3cbae5.og.Dk();
              });
            });
            _0x294c11.prototype.ha = function () {
              _0x294c11.parent.prototype.ha.call(this);
            };
            _0x294c11.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeIn(0xc8);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeOut(0x32);
            };
            _0x294c11.prototype.Hk = function () {
              _0x1f32cc.Ci.Ce();
            };
            return _0x294c11;
          }();
          _0x5408a7.$j = function () {
            var _0x27ec2f = $("#delete-account-timer");
            var _0x19bd40 = $("#delete-account-yes");
            var _0x16d385 = $("#delete-account-no");
            var _0x420e3f = _0x318912.M(_0x5408a7.bo, function () {
              _0x5408a7.bo.call(this, _0x318912.H('index.game.popup.menu.delete.tab'), false);
              var _0x117eac = _0x1f32cc;
              _0x19bd40.click(function () {
                _0x117eac.Ci.Be();
                if (_0x117eac.Ij.Hj()) {
                  _0x117eac.Ij.Sl();
                  _0x117eac.Ij.Kl();
                } else {
                  _0x117eac.og.Dk();
                }
              });
              _0x16d385.click(function () {
                _0x117eac.Ci.Be();
                _0x117eac.og.Dk();
              });
              this.tp = [];
            });
            _0x420e3f.prototype.ha = function () {
              _0x420e3f.parent.prototype.ha.call(this);
            };
            _0x420e3f.prototype.qo = function () {
              _0x5408a7.bo.go.stop();
              _0x5408a7.bo.go.fadeOut(0x32);
              _0x5408a7.bo.ho.stop();
              _0x5408a7.bo.ho.fadeOut(0x32);
              _0x5408a7.bo.io.stop();
              _0x5408a7.bo.io.fadeOut(0x32);
              _0x5408a7.bo.ko.stop();
              _0x5408a7.bo.ko.fadeOut(0x32);
              _0x5408a7.bo.jo.stop();
              _0x5408a7.bo.jo.fadeOut(0x32);
              _0x5408a7.bo.lo.stop();
              _0x5408a7.bo.lo.fadeOut(0x32);
              _0x5408a7.bo.mo.stop();
              _0x5408a7.bo.mo.fadeOut(0x32);
              _0x5408a7.bo.no.stop();
              _0x5408a7.bo.no.fadeOut(0x32);
              _0x5408a7.bo.oo.stop();
              _0x5408a7.bo.oo.fadeOut(0x32);
              _0x5408a7.bo.po.stop();
              _0x5408a7.bo.po.fadeIn(0xc8);
            };
            _0x420e3f.prototype.Hk = function () {
              _0x1f32cc.Ci.Ge();
              _0x19bd40.stop();
              _0x19bd40.hide();
              _0x27ec2f.stop();
              _0x27ec2f.show();
              _0x27ec2f.text(".. 10 ..");
              this.up();
              this.vp(function () {
                _0x27ec2f.text(".. 9 ..");
              }, 0x3e8);
              this.vp(function () {
                _0x27ec2f.text(".. 8 ..");
              }, 0x7d0);
              this.vp(function () {
                _0x27ec2f.text(".. 7 ..");
              }, 0xbb8);
              this.vp(function () {
                _0x27ec2f.text(".. 6 ..");
              }, 0xfa0);
              this.vp(function () {
                _0x27ec2f.text(".. 5 ..");
              }, 0x1388);
              this.vp(function () {
                _0x27ec2f.text(".. 4 ..");
              }, 0x1770);
              this.vp(function () {
                _0x27ec2f.text(".. 3 ..");
              }, 0x1b58);
              this.vp(function () {
                _0x27ec2f.text(".. 2 ..");
              }, 0x1f40);
              this.vp(function () {
                _0x27ec2f.text(".. 1 ..");
              }, 0x2328);
              this.vp(function () {
                _0x27ec2f.hide();
                _0x19bd40.fadeIn(0x12c);
              }, 0x2710);
            };
            _0x420e3f.prototype.vp = function (_0x2bb6b3, _0x3827e4) {
              var _0x3be4d3 = setTimeout(_0x2bb6b3, _0x3827e4);
              this.tp.push(_0x3be4d3);
            };
            _0x420e3f.prototype.up = function () {
              for (var _0x372a36 = 0x0; _0x372a36 < this.tp.length; _0x372a36++) {
                clearTimeout(this.tp[_0x372a36]);
              }
              this.tp = [];
            };
            return _0x420e3f;
          }();
          _0x5408a7.wp = function () {
            function _0x7fd385() {
              this.ao = function () {};
            }
            _0x7fd385.prototype.tf = function () {};
            _0x7fd385.prototype.Hk = function () {};
            return _0x7fd385;
          }();
          _0x5408a7.Gl = function () {
            var _0x4fe516 = _0x318912.M(_0x5408a7.wp, function (_0xcabe65) {
              _0x5408a7.wp.call(this);
              var _0x444e52 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
              this.xp = $("<div id=\"" + _0x444e52 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0xcabe65 + "</div>    <div class=\"toaster-coins-close\">" + _0x318912.H("index.game.toaster.continue") + "</div></div>");
              var _0xf8a5e7 = this;
              this.xp.find('.toaster-coins-close').click(function () {
                _0x1f32cc.Ci.Be();
                _0xf8a5e7.ao();
              });
            });
            _0x4fe516.prototype.tf = function () {
              return this.xp;
            };
            _0x4fe516.prototype.Hk = function () {
              _0x1f32cc.Ci.Ee();
            };
            return _0x4fe516;
          }();
          _0x5408a7.Fl = function () {
            var _0x2cd246 = _0x318912.M(_0x5408a7.wp, function (_0x4fad76) {
              _0x5408a7.wp.call(this);
              var _0x27200 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
              this.xp = $("<div id=\"" + _0x27200 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x4fad76 + "</div>    <div class=\"toaster-levelup-text\">" + _0x318912.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x318912.H("index.game.toaster.continue") + '</div></div>');
              var _0xf28e64 = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                _0x1f32cc.Ci.Be();
                _0xf28e64.ao();
              });
            });
            _0x2cd246.prototype.tf = function () {
              return this.xp;
            };
            _0x2cd246.prototype.Hk = function () {
              _0x1f32cc.Ci.De();
            };
            return _0x2cd246;
          }();
          _0x5408a7.sp = function () {
            var _0x523a39 = _0x318912.M(_0x5408a7.wp, function () {
              _0x5408a7.wp.call(this);
              var _0x456734 = this;
              var _0x27b557 = _0x1f32cc;
              var _0x325329 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
              this.xp = $("<div id=\"" + _0x325329 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x318912.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x318912.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x318912.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x318912.H('index.game.toaster.consent.iAccept') + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                _0x27b557.Ci.Be();
                if (_0x27b557.Go()) {
                  _0x27b557.rp(true, true);
                }
                _0x456734.ao();
              });
            });
            _0x523a39.prototype.tf = function () {
              return this.xp;
            };
            _0x523a39.prototype.Hk = function () {
              var _0x587917 = this;
              var _0x5c57c7 = _0x1f32cc;
              if (_0x5c57c7.Go() && !_0x5c57c7.hl()) {
                _0x5c57c7.Ci.Ge();
                setTimeout(function () {
                  _0x587917.yp.fadeIn(0x12c);
                }, 0x7d0);
              } else {
                setTimeout(function () {
                  _0x587917.ao();
                }, 0x0);
              }
            };
            return _0x523a39;
          }();
          _0x5408a7.uk = function () {
            var _0x509b06 = $("#error-gateway-connection-retry");
            var _0x2d8cef = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
              var _0x2d20d = _0x1f32cc;
              _0x509b06.click(function () {
                _0x2d20d.Ci.Be();
                _0x2d20d.og.ie.Mn();
                _0x2d20d.og.Ak(_0x2d20d.og.ie);
                setTimeout(function () {
                  var _0x2b1fe5 = _0x318912.a.b + "/pub/healthCheck/ping";
                  _0x318912.Z(_0x2b1fe5, function () {
                    _0x2d20d.og.Ak(_0x2d20d.og.tk);
                  }, function (_0x4026c9) {
                    _0x2d20d.og.ie.Kn();
                    _0x2d20d.Lc.Ib(function () {
                      _0x2d20d.og.Ak(_0x2d20d.og._e);
                    }, function (_0x4c9a80) {
                      _0x2d20d.og.Ak(_0x2d20d.og.tk);
                    }, function (_0x1e7928, _0x3366f1) {
                      _0x2d20d.og.ie.Ln(_0x1e7928, _0x3366f1);
                    });
                  });
                }, 0x7d0);
              });
            });
            _0x2d8cef.prototype.ha = function () {};
            _0x2d8cef.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeIn(0x1f4);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeOut(0x32);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeOut(0x32);
            };
            _0x2d8cef.prototype.Hk = function () {
              var _0x595363 = _0x1f32cc;
              _0x595363.Ci.pe(_0x5408a7.ge.je._e);
              _0x595363.Ci.Ge();
            };
            return _0x2d8cef;
          }();
          _0x5408a7.wk = function () {
            var _0x17e2b7 = $("#error-game-connection-retry");
            var _0xd0cc2a = _0x318912.M(_0x5408a7.kf, function () {
              _0x5408a7.kf.call(this, _0x5408a7.Fk.wn);
              var _0x12f20d = _0x1f32cc;
              _0x17e2b7.click(function () {
                _0x12f20d.Ci.Be();
                _0x12f20d.og.Ak(_0x12f20d.og._e);
              });
            });
            _0xd0cc2a.prototype.ha = function () {};
            _0xd0cc2a.prototype.Gk = function () {
              _0x5408a7.kf.jn.stop();
              _0x5408a7.kf.jn.fadeOut(0x32);
              _0x5408a7.kf.ln.stop();
              _0x5408a7.kf.ln.fadeOut(0x32);
              _0x5408a7.kf.nn.stop();
              _0x5408a7.kf.nn.fadeOut(0x32);
              _0x5408a7.kf.pn.stop();
              _0x5408a7.kf.pn.fadeOut(0x32);
              _0x5408a7.kf.sn.stop();
              _0x5408a7.kf.sn.fadeOut(0x32);
              _0x5408a7.kf.qn.stop();
              _0x5408a7.kf.qn.fadeOut(0x32);
              _0x5408a7.kf.rn.stop();
              _0x5408a7.kf.rn.fadeOut(0x32);
              _0x5408a7.kf.tn.stop();
              _0x5408a7.kf.tn.fadeOut(0x32);
              _0x5408a7.kf.un_error.stop();
              _0x5408a7.kf.un_error.fadeIn(0x1f4);
              _0x5408a7.kf.mn.stop();
              _0x5408a7.kf.mn.fadeIn(0x1);
              _0x5408a7.kf.bgcanvas.stop();
              _0x5408a7.kf.bgcanvas.fadeIn(0x1f4);
              _0x5408a7.GameView.Kf(true);
              _0x5408a7.kf.socialButtons.stop();
              _0x5408a7.kf.socialButtons.fadeOut(0x32);
              _0x5408a7.kf.vn.stop();
              _0x5408a7.kf.vn.fadeOut(0x32);
            };
            _0xd0cc2a.prototype.Hk = function () {
              var _0x10bb7d = _0x1f32cc;
              _0x10bb7d.Ci.pe(_0x5408a7.ge.je._e);
              _0x10bb7d.Ci.Ge();
            };
            return _0xd0cc2a;
          }();
          _0x318912.zp = function () {
            function _0xfe5fdc(_0x4994e3) {
              var _0x2a4c98 = _0x4994e3 + 0x25 * Math.floor(0xffff * Math.random());
              _0x5408a7.Vf.eg(_0x5408a7.Vf.cg, _0x2a4c98, 0x1e);
            }
            return function () {
              var _0x2bcf5e = parseInt(_0x5408a7.Vf.fg(_0x5408a7.Vf.cg)) % 0x25;
              if (!(_0x2bcf5e >= 0x0 && _0x2bcf5e < _0x3df779.Ap)) {
                _0x2bcf5e = Math.max(0x0, _0x3df779.Ap - 0x2);
              }
              var _0x2072d6 = {
                zn: _0x3df779,
                Bp: false,
                Cp: Date.now(),
                Dp: 0x0,
                Ep: 0x0,
                Fp: null,
                Gp: _0x318912.a.j,
                Hp: _0x318912.a.i,
                dh: null,
                Lc: null,
                xe: null,
                Ci: null,
                og: null,
                On: null,
                Ij: null
              };
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (_0x133bba) {
                    if (undefined !== _0x133bba.coords) {
                      var _0x2e741f = _0x133bba.coords;
                      if (undefined !== _0x2e741f.latitude && undefined !== _0x2e741f.longitude) {
                        _0x2072d6.Fp = _0x133bba;
                      }
                    }
                  }, function (_0x3e0f86) {});
                }
              } catch (_0x5b394c) {}
              _0x2072d6.Ip = function () {
                _0x2072d6.dh = new _0x5408a7.Engine();
                null.Kp = new _0x5408a7.MessageProcessor(null);
                _0x2072d6.Lc = new _0x5408a7._a();
                _0x2072d6.xe = new _0x5408a7.Qj();
                _0x2072d6.Ci = new _0x5408a7.ge();
                _0x2072d6.og = new _0x5408a7.Tj();
                _0x2072d6.On = new _0x5408a7.kj();
                _0x2072d6.Ij = new _0x5408a7.Mk();
                _0x2072d6.ha();
              };
              _0x2072d6.ha = function () {
                try {
                  ga("send", "event", 'app', window.runtimeHash + "_init");
                } catch (_0x1664c4) {}
                null.Lp = function () {
                  null.Ak(null.vk);
                };
                null.Mp = function () {
                  var _0x2b957d = null._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + '_start', _0x2b957d);
                  } catch (_0xd5840b) {}
                  null.pe(_0x5408a7.ge.je.af);
                  null.Ak(null.af.Dn());
                };
                null.Np = function () {
                  try {
                    ga('send', "event", 'game', window.runtimeHash + "_end");
                  } catch (_0x1d0daf) {}
                  if ($("body").height() >= 0x1ae) {
                    _0x2072d6.zn.Op.ka();
                  }
                  null.Ib(null, null, null);
                  (function () {
                    var _0x31b278 = Math.floor(null.ch.Bh);
                    var _0x1c3603 = null.Ih;
                    if (null.Hj()) {
                      null.Bl(function () {
                        _0x2072d6.Pp(_0x31b278, _0x1c3603);
                      });
                    } else {
                      _0x2072d6.Pp(_0x31b278, _0x1c3603);
                    }
                  })();
                };
                null.Qp = function (_0x5337ef) {
                  _0x5337ef(null.af.Gn(), null.af.Hn());
                };
                null.yl(function () {
                  var _0x411e5b = null.Lk();
                  if (null != _0x411e5b && _0x411e5b.nd === _0x5408a7.Fk.Ek) {
                    null.pe(_0x5408a7.ge.je._e);
                    null.Ak(null._e);
                  }
                  if (null.Hj()) {
                    try {
                      var _0x3a0126 = null.cl();
                      ga("set", "userId", _0x3a0126);
                    } catch (_0x4dbfd2) {}
                  }
                  if (_0x2072d6.Go() && null.Hj() && !null.hl()) {
                    _0x2072d6.rp(false, false);
                    null.qk._n(new _0x5408a7.sp());
                  } else {
                    _0x2072d6.Rp(true);
                  }
                });
                null.run();
                null.ha();
                null.ha();
                null.ha();
                null._e.Vn();
                null.Ak(null._e);
                null.ha(function () {
                  null.ha();
                  null.ha();
                  null.Ib(function () {
                    null._e.Un();
                    null.Ak(null._e);
                  }, function (_0x2d8f01) {
                    null._e.Un();
                    null.Ak(null.tk);
                  }, function (_0x1620a7, _0x3b908b) {
                    null.ie.Ln(_0x1620a7, _0x3b908b);
                    null._e.Ln(_0x1620a7, _0x3b908b);
                  });
                  if (_0x2072d6.Go() && !_0x2072d6.hl()) {
                    null.qk._n(new _0x5408a7.sp());
                  } else {
                    _0x2072d6.Rp(true);
                  }
                });
              };
              _0x2072d6.Sp = function (_0x3979e0) {
                if (null.Hj()) {
                  var _0x5108b2 = null.Al();
                  var _0x4d55a6 = _0x318912.a.b + "/pub/wuid/" + _0x5108b2 + "/consent/change?value=" + encodeURI(_0x3979e0);
                  _0x318912.Z(_0x4d55a6, function () {}, function (_0x418789) {});
                }
              };
              _0x2072d6.Pn = function (_0x1c4498) {
                _0x2bcf5e++;
                if (!_0x2072d6.zn.Tp && _0x2bcf5e >= _0x2072d6.zn.Ap) {
                  null.Ak(null.xk);
                  null.pe(_0x5408a7.ge.je.cf);
                  _0x2072d6.zn.Up.ia();
                } else {
                  _0xfe5fdc(_0x2bcf5e);
                  _0x2072d6.Vp(_0x1c4498);
                }
              };
              _0x2072d6.Vp = function (_0x647187) {
                if (null.Wp()) {
                  null.ie.Mn();
                  null.Ak(null.ie);
                  var _0xcc76e8 = null._e.Wn();
                  _0x5408a7.Vf.eg(_0x5408a7.Vf._f, _0xcc76e8, 0x1e);
                  var _0x465fbb = null.$h.Zh();
                  _0x5408a7.Vf.eg(_0x5408a7.Vf.Xf, _0x465fbb, 0x1e);
                  if (null.Hj()) {
                    _0x2072d6.Xp(_0xcc76e8, 0x0, _0x647187);
                  } else {
                    var _0x47c209 = null._e.el();
                    _0x5408a7.Vf.eg(_0x5408a7.Vf.ag, _0x47c209, 0x1e);
                    var _0x5e2c20 = null.rj(_0x5408a7.tj.sj);
                    _0x5408a7.Vf.eg(_0x5408a7.Vf.bg, _0x5e2c20, 0x1e);
                    _0x2072d6.Yp(_0xcc76e8, 0x0);
                  }
                }
              };
              _0x2072d6.Xp = function (_0x309b85, _0x196123, _0x4321ba) {
                var _0x2ed41d = null.Al();
                var _0x24c7d5 = null._e.el();
                var _0x151c00 = null.rj(_0x5408a7.tj.sj);
                var _0x30e202 = null.rj(_0x5408a7.tj.uj);
                var _0x288cf4 = null.rj(_0x5408a7.tj.vj);
                var _0x4c9c8f = null.rj(_0x5408a7.tj.xj);
                var _0x3092fc = null.rj(_0x5408a7.tj.wj);
                var _0x47d851 = _0x318912.a.b + '/pub/wuid/' + _0x2ed41d + "/start?gameMode=" + encodeURI(_0x309b85) + "&gh=" + _0x196123 + '&nickname=' + _0x167f4e.Xp(_0x2ed41d, _0x24c7d5, _0x151c00, _0x30e202, _0x288cf4, _0x4c9c8f, _0x3092fc) + '&skinId=' + encodeURI(_wwc.validInput(_0x151c00 || 0x0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(_0x30e202)) + "&mouthId=" + encodeURI(_wwc.validInputWear(_0x288cf4)) + '&glassesId=' + encodeURI(_wwc.validInputWear(_0x4c9c8f)) + '&hatId=' + encodeURI(_wwc.validInputWear(_0x3092fc));
                _0x318912.Z(_0x47d851, function () {
                  null.Ak(null.tk);
                }, function (_0x21117d) {
                  if (0x5b4 === _0x21117d.code) {
                    null.Ak(null.ok);
                    try {
                      ga('send', "event", "restricted", window.runtimeHash + "_tick");
                    } catch (_0x591b95) {}
                  } else {
                    if (!_0x21117d.server_url) {
                      _0x1f32cc.dh.Cq();
                      return;
                    }
                    var _0x4a19fb = _0x21117d.server_url;
                    null.Zp(_0x4a19fb, _0x2ed41d, _0x4321ba);
                  }
                });
              };
              _0x2072d6.Yp = function (_0x5c6f55, _0xde1a4f) {
                var _0x49de8a = null._e.el();
                var _0x307e83 = null.rj(_0x5408a7.tj.sj);
                var _0x52f371 = _0x318912.a.b + '/pub/wuid/guest/start?gameMode=' + encodeURI(_0x5c6f55) + "&gh=" + _0xde1a4f + "&nickname=" + encodeURI(_0x49de8a) + "&skinId=" + encodeURI(_0x307e83);
                _0x318912.Z(_0x52f371, function () {
                  null.Ak(null.tk);
                }, function (_0xed6770) {
                  if (0x5b4 === _0xed6770.code) {
                    null.Ak(null.ok);
                    try {
                      ga("send", "event", 'restricted', window.runtimeHash + "_tick");
                    } catch (_0x20c222) {}
                  } else {
                    if (0x4b0 !== _0xed6770.code) {
                      null.Ak(null.tk);
                    } else {
                      var _0x17cdf5 = _0xed6770.server_url;
                      null.$p(_0x17cdf5, _0x49de8a, _0x307e83);
                    }
                  }
                });
              };
              _0x2072d6.Pp = function (_0x583d72, _0x340c2b) {
                var _0x1bbb50 = null._e.el();
                null.af.Fn(_0x583d72, _0x340c2b, _0x1bbb50);
                null.pe(_0x5408a7.ge.je.bf);
                null.Ak(null.af.En());
              };
              _0x2072d6.Sn = function () {
                if (!_0x2072d6.Tn()) {
                  return null.Bj();
                }
                var _0x31653d = parseInt(_0x5408a7.Vf.fg(_0x5408a7.Vf.bg));
                return null != _0x31653d && null.Cj(_0x31653d, _0x5408a7.tj.sj) ? _0x31653d : null.Bj();
              };
              _0x2072d6.Xn = function (_0x5ef463) {
                _0x5408a7.Vf.eg(_0x5408a7.Vf.dg, _0x5ef463 ? "true" : "false", 0x708);
              };
              _0x2072d6.Tn = function () {
                return "true" === _0x5408a7.Vf.fg(_0x5408a7.Vf.dg);
              };
              _0x2072d6.Rp = function (_0x46ef9c) {
                if (_0x46ef9c !== false) {
                  _0x2072d6.Bp = _0x46ef9c;
                  var _0x12aeac = _0x12aeac || {};
                  _0x12aeac.consented = _0x46ef9c;
                  _0x12aeac.gdprConsent = _0x46ef9c;
                  _0x2072d6.zn.yn.ha();
                  _0x2072d6.zn.Op.ha();
                  _0x2072d6.zn.Up.ha(function (_0x3c271b) {
                    if (_0x3c271b) {
                      _0xfe5fdc(_0x2bcf5e = 0x0);
                    }
                    _0x2072d6.Vp();
                  });
                }
              };
              _0x2072d6.rp = function (_0x4996c0, _0x395181) {
                _0x5408a7.Vf.eg(_0x5408a7.Vf.Wf, _0x4996c0 ? 'true' : "false");
                if (_0x395181) {
                  _0x2072d6.Sp(_0x4996c0);
                }
                _0x2072d6.Rp(_0x4996c0);
              };
              _0x2072d6.hl = function () {
                switch (_0x5408a7.Vf.fg(_0x5408a7.Vf.Wf)) {
                  case 'true':
                    return true;
                  default:
                    return false;
                }
              };
              _0x2072d6.Go = function () {
                try {
                  return !!window.isIPInEEA || !(true || !_0x3b850d.gg.hg(null.coords.latitude, null.coords.longitude));
                } catch (_0x4a0c0c) {
                  return true;
                }
              };
              _0x2072d6.Nf = function () {
                _0x2072d6.Dp = performance.now();
                _0x2072d6.Ep = 0x0 - _0x2072d6.Cp;
                null.lh(0x0, 0x0);
                null.lh(0x0, 0x0);
                _0x2072d6.Cp = 0x0;
              };
              _0x2072d6.Jf = function () {
                null.Jf();
              };
              return _0x2072d6;
            }();
          };
          _0x5408a7.Engine = function () {
            var _0x2f9e8a = {
              dq: 0x1e,
              fq: new Float32Array(0x64),
              gq: 0x0,
              hq: 0x0,
              iq: 0x0,
              jq: 0x0,
              kq: 0x0,
              lq: 0x0,
              Cn: 0x0,
              mq: null,
              nq: 0x12c,
              Mp: function () {},
              Np: function () {},
              Qp: function () {},
              Lp: function () {},
              hh: new _0x5408a7.GameParams(),
              Kp: null,
              ch: null,
              Hi: {},
              Fh: {},
              Di: 12.5,
              eh: 0x28,
              oq: 0x1,
              pq: -0x1,
              qq: 0x1,
              rq: 0x1,
              sq: -0x1,
              tq: -0x1,
              uq: 0x1,
              vq: 0x1,
              wq: -0x1,
              Ih: 0x1f4,
              yh: 0x1f4
            };
            _0x2f9e8a.hh.zg = 0x1f4;
            _0x2f9e8a.ch = new _0x5408a7.Worm(_0x2f9e8a.hh);
            _0x2f9e8a.run = function () {
              null.ti(_0x1f32cc.og.af.ng);
            };
            _0x2f9e8a.gh = function (_0x54588f, _0x134f39, _0x534367, _0x2201b7) {
              _0x2f9e8a.pq = _0x54588f;
              _0x2f9e8a.qq = _0x134f39;
              _0x2f9e8a.rq = _0x534367;
              _0x2f9e8a.sq = _0x2201b7;
              _0x2f9e8a.yq();
            };
            _0x2f9e8a.zq = function (_0x4d3b1d) {
              _0x2f9e8a.oq = _0x4d3b1d;
              _0x2f9e8a.yq();
            };
            _0x2f9e8a.yq = function () {
              _0x2f9e8a.tq = _0x2f9e8a.pq - 0x1;
              _0x2f9e8a.uq = 2;
              _0x2f9e8a.vq = 0;
              _0x2f9e8a.wq = _0x2f9e8a.sq + 0x1;
            };
            _0x2f9e8a.lh = function (_0x4e8ca9, _0x33723e) {
              _0x2f9e8a.iq += _0x33723e;
              _0x2f9e8a.hq -= 0 * _0x33723e;
              null.Rh();
              if (false && (false || false)) {
                _0x2f9e8a.Aq(_0x4e8ca9, _0x33723e);
                _0x2f9e8a.eh = 0x4 + 12.5 * null.$c;
              }
              var _0x1b936c = 0x3e8 / Math.max(0x1, _0x33723e);
              var _0x2ad844 = 0x0;
              for (var _0x245a2f = 0x0; _0x245a2f < _0x2f9e8a.fq.length - 0x1; _0x245a2f++) {
                _0x2ad844 += _0x2f9e8a.fq[_0x245a2f];
                _0x2f9e8a.fq[_0x245a2f] = _0x2f9e8a.fq[_0x245a2f + 0x1];
              }
              _0x2f9e8a.fq[_0x2f9e8a.fq.length - 0x1] = _0x1b936c;
              _0x2f9e8a.dq = (_0x2ad844 + _0x1b936c) / _0x2f9e8a.fq.length;
            };
            _0x2f9e8a.Bq = function (_0x40b1ff, _0x1671f2) {
              return _0x40b1ff > _0x2f9e8a.tq && _0x40b1ff < 0x1 && _0x1671f2 > 0x1 && _0x1671f2 < _0x2f9e8a.wq;
            };
            _0x2f9e8a.Aq = function (_0xdfaff9, _0x129e7b) {
              var _0x44ca3b = -NaN;
              null.hj(_0xdfaff9, _0x129e7b);
              null.ij(_0xdfaff9, _0x129e7b, _0x44ca3b, _0x2f9e8a.Bq);
              var _0x12baf9 = 0x0;
              for (var _0x58d6fd in _0x2f9e8a.Fh) {
                var _0x3e0b00 = _0x2f9e8a.Fh[_0x58d6fd];
                _0x3e0b00.hj(_0xdfaff9, _0x129e7b);
                _0x3e0b00.ij(_0xdfaff9, _0x129e7b, _0x44ca3b, _0x2f9e8a.Bq);
                if (_0x3e0b00.xi && _0x3e0b00.$c > _0x12baf9) {
                  _0x12baf9 = _0x3e0b00.$c;
                }
                if (!(_0x3e0b00.wi || !(_0x3e0b00.dj < 0.005) && _0x3e0b00.xi)) {
                  _0x3e0b00.si();
                  delete _0x2f9e8a.Fh[_0x3e0b00.Eh.ae];
                }
              }
              _0x2f9e8a.zq(0x3 * _0x12baf9);
              for (var _0x4559dc in _0x2f9e8a.Hi) {
                var _0x3ff983 = _0x2f9e8a.Hi[_0x4559dc];
                _0x3ff983.hj(_0xdfaff9, _0x129e7b);
                _0x3ff983.ij(_0xdfaff9, _0x129e7b, _0x2f9e8a.Bq);
                if (_0x3ff983.Ni && (_0x3ff983.dj < 0.005 || !_0x2f9e8a.Bq(_0x3ff983.Zi, _0x3ff983.$i))) {
                  _0x3ff983.si();
                  delete _0x2f9e8a.Hi[_0x3ff983.Eh.ae];
                }
              }
            };
            _0x2f9e8a.ki = function (_0x32893b, _0x4ebc34) {
              var _0x1a1c0c = _0x1f32cc.Dp;
              _0x2f9e8a.lq = _0x32893b;
              if (0x0 === _0x32893b) {
                _0x2f9e8a.jq = _0x1a1c0c - 0x5f;
                _0x2f9e8a.kq = _0x1a1c0c;
                _0x2f9e8a.iq = 0x0;
                _0x2f9e8a.hq = 0x0;
              } else {
                _0x2f9e8a.jq = 0x0;
                _0x2f9e8a.kq = 0x0 + _0x4ebc34;
              }
              _0x2f9e8a.gq = -NaN;
            };
            _0x2f9e8a.Oi = function () {
              if (false || false) {
                _0x2f9e8a.Cn = 0x3;
                setTimeout(function () {
                  if (false && true) {
                    null.close();
                    _0x2f9e8a.mq = null;
                  }
                }, 0x1194);
                _0x2f9e8a.Np();
              }
            };
            _0x2f9e8a.Wp = function () {
              return true && (_0x2f9e8a.Cn = 0x1, null.Qh(), _0x2f9e8a.Hi = {}, _0x2f9e8a.Fh = {}, null.Pm(), false && (null.close(), _0x2f9e8a.mq = null), true);
            };
            _0x2f9e8a.Cq = function () {
              _0x2f9e8a.mq = null;
              null.Qh();
              _0x2f9e8a.Lp();
              _0x2f9e8a.Cn = 0x0;
            };
            _0x2f9e8a.Zp = function (_0x1c25c8, _0x33b42c) {
              _0x2f9e8a.Dq(_0x1c25c8, function () {
                var _0x21e5bf = Math.min(0x800, _0x33b42c.length);
                var _0x46375d = new ArrayBuffer(0x6 + 0x2 * _0x21e5bf);
                var _0x1bfec6 = new DataView(_0x46375d);
                var _0xcaec24 = 0x0;
                _0x1bfec6.setInt8(_0xcaec24, 0x81);
                _0xcaec24 += 0x1;
                _0x1bfec6.setInt16(_0xcaec24, 0xaf0);
                _0xcaec24 += 0x2;
                _0x1bfec6.setInt8(_0xcaec24, 0x1);
                _0xcaec24 += 0x1;
                _0x1bfec6.setInt16(_0xcaec24, _0x21e5bf);
                _0xcaec24 += 0x2;
                for (var _0x34eeff = 0x0; _0x34eeff < _0x21e5bf; _0x34eeff++) {
                  _0x1bfec6.setInt16(_0xcaec24, _0x33b42c.charCodeAt(_0x34eeff));
                  _0xcaec24 += 0x2;
                }
                _0x2f9e8a.Eq(_0x46375d);
              });
            };
            _0x2f9e8a.$p = function (_0x3b5d20, _0xc324a6, _0x5dad0a) {
              _0x2f9e8a.Dq(_0x3b5d20, function () {
                var _0x38235c = Math.min(0x20, _0xc324a6.length);
                var _0x47f41d = new ArrayBuffer(0x7 + 0x2 * _0x38235c);
                var _0x511582 = new DataView(_0x47f41d);
                var _0x10eb62 = 0x0;
                _0x511582.setInt8(_0x10eb62, 0x81);
                _0x10eb62 += 0x1;
                _0x511582.setInt16(_0x10eb62, 0xaf0);
                _0x10eb62 += 0x2;
                _0x511582.setInt8(_0x10eb62, 0x0);
                _0x10eb62 += 0x1;
                _0x511582.setInt16(_0x10eb62, _0x5dad0a);
                _0x10eb62 += 0x2;
                _0x511582.setInt8(_0x10eb62, _0x38235c);
                _0x10eb62++;
                for (var _0x2e4a6c = 0x0; _0x2e4a6c < _0x38235c; _0x2e4a6c++) {
                  _0x511582.setInt16(_0x10eb62, _0xc324a6.charCodeAt(_0x2e4a6c));
                  _0x10eb62 += 0x2;
                }
                _0x2f9e8a.Eq(_0x47f41d);
              });
            };
            _0x2f9e8a.Eq = function (_0x16508f) {
              try {
                if (false && null.readyState === WebSocket.OPEN) {
                  null.send(_0x16508f);
                }
              } catch (_0x146b8b) {
                _0x2f9e8a.Cq();
              }
            };
            _0x2f9e8a.xq = function (_0x35c15c, _0x1961e2) {
              var _0x304d58 = _0x1961e2 ? 0x80 : 0x0;
              var _0x4722a4 = _0x318912.N(_0x35c15c) / _0x3b850d.F * 0x80 & 0x7f;
              var _0x5b3b74 = 0xff & (_0x304d58 | _0x4722a4);
              if (0x12c !== _0x5b3b74) {
                var _0x45b392 = new ArrayBuffer(0x1);
                new DataView(_0x45b392).setInt8(0x0, _0x5b3b74);
                _0x2f9e8a.Eq(_0x45b392);
                _0x2f9e8a.nq = _0x5b3b74;
              }
            };
            _0x2f9e8a.Dq = function (_0x1fdc23, _0x5e622b) {
              var _0x22c92c = _0x2f9e8a.mq = new WebSocket(_0x1fdc23);
              _0x22c92c.binaryType = "arraybuffer";
              _0x22c92c.onopen = function () {
                if (null === _0x22c92c) {
                  _0x5e622b();
                }
              };
              _0x22c92c.onclose = function () {
                if (null === _0x22c92c) {
                  _0x2f9e8a.Cq();
                }
              };
              _0x22c92c.onerror = function (_0x21f027) {
                if (null === _0x22c92c) {
                  _0x2f9e8a.Cq();
                }
              };
              _0x22c92c.onmessage = function (_0x47b092) {
                if (null === _0x22c92c) {
                  null.Ph(_0x47b092.data);
                }
              };
            };
            return _0x2f9e8a;
          };
          var _0x443650 = _0x3e38e6({}, _0x167f4e);
          _0x167f4e = _0x3e38e6({
            '$C': _0x5408a7,
            '$V': _0x3b850d,
            '$F': _0x318912,
            'POGL': _0x587230
          }, _0x443650);
          _0x167f4e.Jb = function () {
            (_0x1f32cc.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x1cd939) {
              if (_0x1cd939.associados && _0x1cd939.associados.includes(_0x1f32cc.Ij.Rk.userId)) {
                _0x1cd939[['n', 'o', 'n', 'b', 'u', 'y', 'a', 'b', 'l', 'e'].join('')] = false;
              }
            });
          };
          var _0x3df779 = function (_0x286680) {
            var _0x7a70d3 = {
              main: {
                'yn': _0x318912.ja('aqnvgcpz05orkobh', "WRM_wormate-io_300x250"),
                'Op': _0x318912.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
                'Up': _0x318912.ga(),
                'Ap': 0x4,
                'Tp': false,
                'xn': true
              },
              "miniclip": {
                'yn': _0x318912.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                'Op': _0x318912.ja('ltmolilci1iurq1i', "wormate-io_970x250"),
                'Up': _0x318912.ga(),
                'Ap': 0x4,
                'Tp': false,
                'xn': false
              }
            };
            var _0x287bec = _0x7a70d3[window.ENV];
            if (!_0x287bec) {
              _0x287bec = _0x7a70d3.main;
            }
            return _0x287bec;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (_0x371738) {
            _0x371738.preventDefault();
            _0x371738.stopPropagation();
            return false;
          });
          window.fbAsyncInit = function () {
            FB.init({
              'appId': "861926850619051",
              'cookie': true,
              'xfbml': true,
              'status': true,
              'version': "v14.0"
            });
          };
          _0x318912.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              _0x17960c = gapi.auth2.init({
                'client_id': "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          _0x318912.L("//connect.facebook.net/" + _0x318912.a.j + "/sdk.js", {
            'id': "facebook-jssdk",
            'async': true,
            'defer': true,
            'crossorigin': "anonymous"
          });
          _0x1f32cc = _0x318912.zp();
          _0x1f32cc.Ip();
          (function () {
            function _0x414fcd() {
              requestAnimationFrame(_0x414fcd);
              _0x1f32cc.Nf();
            }
            _0x414fcd();
          })();
          (function () {
            function _0x34c508() {
              var _0x47a940 = _0x41f2fe.width();
              var _0x537b51 = _0x41f2fe.height();
              var _0x1ef6e6 = _0x1cac51.outerWidth();
              var _0x1e6589 = _0x1cac51.outerHeight();
              var _0x5e3a7c = _0x36b783.outerHeight();
              var _0x3968aa = _0x20ccff.outerHeight();
              var _0x3e1a49 = Math.min(0x1, Math.min((_0x537b51 - _0x3968aa - _0x5e3a7c) / _0x1e6589, _0x47a940 / _0x1ef6e6));
              var _0x2f6ed3 = "translate(-50%, -50%) scale(" + _0x3e1a49 + ')';
              _0x1cac51.css({
                '-webkit-transform': _0x2f6ed3,
                '-moz-transform': _0x2f6ed3,
                '-ms-transform': _0x2f6ed3,
                '-o-transform': _0x2f6ed3,
                'transform': _0x2f6ed3
              });
              _0x1f32cc.Jf();
              window.scrollTo(0x0, 0x1);
            }
            var _0x41f2fe = $('body');
            var _0x1cac51 = $("#stretch-box");
            var _0x36b783 = $("#markup-header");
            var _0x20ccff = $('#markup-footer');
            _0x34c508();
            $(window).resize(_0x34c508);
          })();
        }();
      });
      $(".mm-merchant").remove();
      setTimeout(function () {
        $('#launcher').css('display', 'none');
        $(".mm-merchant-cont").append("\n  <div style=\"display: flex; justify-content: center; align-items: center; margin-top: 10px;\">\n    <a href=\"https://www.facebook.com/share/15sLH1R6p5\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"".concat(URL_CDN, "/images/pub/B4_04.png\" alt=\"Happy\">\n    </a>\n    <a href=\"https://wormworld.io/install\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"").concat(URL_CDN, "/images/pub/B4_02.png\" alt=\"Happy\">\n    </a>\n  </div>\n  "));
        $('.mm-merchant-cont').css("top", '-10px');
      }, 0x1194);
      $(".description-text").css('height', "300px");
      var _0x140b2f = function _0x2f3dc7(_0x8285f1) {
        document.body.style.backgroundColor = "#000";
        document.body.style.backgroundImage = "url('".concat(_0x8285f1 || "https://cdn.pixabay.com/photo/2018/01/09/13/11/background-3071520_1280.jpg", "')");
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = 'cover';
        var _0x22f88f = document.getElementById("background-canvas");
        var _0x3263c6 = document.getElementById("game-wrap");
        _0x22f88f.style.backgroundColor = "#530303";
        _0x22f88f.style.opacity = '0.65';
        _0x3263c6.style.backgroundColor = "transparent";
      };
      if (_0x4854c3) {
        _0x4854c3 = JSON.parse(_0x4854c3);
        if (_0x4854c3.background) {
          _0x140b2f(_0x4854c3.background);
        } else {
          _0x140b2f();
        }
      } else {
        _0x140b2f();
      }
      if (_0x4e5020) {
        _0x4e5020 = JSON.parse(_0x4e5020);
        if (_0x4e5020.audio) {
          _0x5b5da3.headshot = new _0x16c958.Howl({
            'src': [_0x4e5020.audio],
            'html5': true,
            'autoplay': false,
            'loop': false
          });
        }
      }
      window.testAudioCustom = function () {
        console.log("Playing custom audio?", _0x4e5020.audio);
        _0x5b5da3.headshot.play();
      };
      var _0x128535 = _0x2a86e0(function _0x5d0c9d(_0x14617b, _0x24e245, _0x1e5d1c, _0x5c01a6, _0xd98150, _0x4c7629) {
        _0x35ab6e(this, _0x5d0c9d);
        this.wid = _0x14617b;
        this.refer = _0x24e245;
        this.nickname = _0x1e5d1c;
        this.score = _0xd98150;
        this.myRoom = _0x5c01a6;
        this.myLocation = {
          'x': 0x0,
          'y': 0x0
        };
        this.teamRoom = _0x4c7629;
      });
      _0x3b679f.containerHsRec.alpha = 0x0;
      _0x3b679f.containerHstop.alpha = 0x0;
      var _0x233ea9 = [0xffffff, 0xff00, 0xffff00, 0xffff, 0xffa000, 0xff00ff, 0xadff2f, 0xff, 0x800080];
      function _0x4e0c64(_0xe2045d, _0x513933) {
        if (!_0x513933) {
          return;
        }
        _0x513933.playerMap.position.x = _0xe2045d.position.x;
        _0x513933.playerMap.position.y = _0xe2045d.position.y;
      }
      function _0x4e9b1a(_0x38cce1, _0x42e5f8, _0x1b5f08) {
        var _0x316fb2 = Array.from(_0x38cce1.keys()).indexOf(_0x42e5f8.wid);
        var _0x39bdef = _0x1b5f08 ? 0xff0000 : _0x233ea9[_0x316fb2 % _0x233ea9.length];
        var _0x524c87 = ''.concat(_0x316fb2 + 0x1, " - ").concat(_0x42e5f8.nickname.substring(0x0, 0xf));
        var _0x24626c = new PIXI.Text(_0x524c87, {
          'fontFamily': "Arial",
          'fontSize': 9.5,
          'fill': _0x39bdef,
          'align': 'left'
        });
        _0x24626c.position.y = _0x316fb2 * 0xd;
        _0x3b679f.friends.addChild(_0x24626c);
        return _0x24626c;
      }
      function _0x1578bf(_0x3ae6dd, _0x5cc33c, _0x18792d) {
        var _0x59fe2a = Array.from(_0x3ae6dd.keys()).indexOf(_0x5cc33c.wid);
        var _0x468f04 = _0x18792d ? 0xff0000 : _0x233ea9[_0x59fe2a % _0x233ea9.length];
        var _0x42f19b = new PIXI.Graphics();
        _0x42f19b.id = _0x5cc33c.wid;
        _0x42f19b.zIndex = 0x3;
        _0x42f19b.alpha = 0x1;
        _0x42f19b.beginFill(_0x468f04, 0x1);
        _0x42f19b.drawCircle(0x0, 0x0, 3.5);
        _0x42f19b.endFill();
        _0x42f19b.position.x = _0x5cc33c.position.x;
        _0x42f19b.position.y = _0x5cc33c.position.y;
        _0x3b679f.conteinerTeam.addChild(_0x42f19b);
        return _0x42f19b;
      }
      _wwcio.connect = function (_0x329863) {
        console.log("Conectando...");
        var _0x4bc715 = new Map();
        var _0x11e2d0 = (bbs.con || '').match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
        if (!_0x11e2d0) {
          _0x11e2d0 = [];
        }
        if (_0x11e2d0 && _0x3405ee.includes(_0x11e2d0[0x2])) {
          _wwcio.leaderboardUpdated([], []);
          var _0x41e953 = _0x11e2d0[0x2];
          var _0x123006 = _wwc._anApp.dh.hh.xg + (_0x11e2d0[0x2] || 'L') + (_0x11e2d0[0x4] || '0');
          _wwcio.player = new _0x128535(bbs.userId, _0x329863 ? _0x329863.ae : userId, _0x329863 ? _0x329863.ma : 'AN', _0x123006, 0x0, _wwcio.player.teamRoom);
          try {
            0x0;
            var _0x50fef9 = _0xea53f0.io(_0x5a465b[_0x41e953], {
              'path': "/api/",
              'transports': ["websocket"],
              'reconnectionAttempts': 0x5
            });
            var _0x46ea02 = function _0x10ecaf() {
              _0x50fef9.emit('join', _wwcio.player, function (_0x4b1a89) {
                _wwcio.player.id = _0x4b1a89.sid;
                _wwcio.leaderboardUpdated(_0x4b1a89.top10, _0x4b1a89.top3);
                if (_wwcio.player.teamRoom) {
                  _0x50fef9.emit("joinTeam");
                  _0x4bc715.set(_wwcio.player.wid, {
                    'player': _wwcio.player
                  });
                  _0x4bc715.get(_wwcio.player.wid).playerText = _0x4e9b1a(_0x4bc715, _wwcio.player, 0x1);
                  _0x3b679f.friends.alpha = 0x1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                }
                console.log("Conectado com sucesso!", _0x4b1a89);
              });
            };
            _0x50fef9.on("connect", function () {
              _0x46ea02();
            });
            _0x50fef9.on("message", function (_0xb35313) {
              switch (_0xb35313.type) {
                case 'join':
                  _wwcio.obj.sid = _0xb35313.sid;
                  break;
                case "leaderBoard":
                  _wwcio.leaderboardUpdated(_0xb35313.top10, _0xb35313.top3);
                  break;
                case "update":
                  break;
                case 'leave':
                  break;
                default:
                  break;
              }
              if (_0xb35313 && _0xb35313.top10) {
                _wwcio.leaderboardUpdated(_0xb35313.top10, _0xb35313.top3);
              }
            });
            _0x50fef9.on("connect_error", function (_0x20d9b3) {
              console.error("Erro de conexão:", _0x20d9b3);
            });
            _0x50fef9.on("disconnect", function () {
              console.warn("Desconectado.");
              _0x3b679f.friends.removeChildren();
            });
            _0x50fef9.on("error", function (_0xceee88) {
              console.error("Erro:", _0xceee88);
            });
            _0x50fef9.on("updateLocation", function (_0x3f8c40) {
              var _0x481491 = _0x4bc715.get(_0x3f8c40.wid);
              if (!_0x481491) {
                _0x4bc715.set(_0x3f8c40.wid, {
                  'player': _0x3f8c40,
                  'playerMap': null,
                  'playerText': null
                });
                _0x481491 = _0x4bc715.get(_0x3f8c40.wid);
                _0x481491.playerMap = _0x1578bf(_0x4bc715, _0x3f8c40);
                _0x481491.playerText = _0x4e9b1a(_0x4bc715, _0x3f8c40);
                _0x4bc715.set(_0x3f8c40.wid, _0x481491);
              }
              _0x4e0c64(_0x3f8c40, _0x481491);
            });
            _0x50fef9.on("leaveTeam", function (_0x59b8cd) {
              console.log("Saiu do time", _0x59b8cd);
              var _0xcc981f = _0x4bc715.get(_0x59b8cd.wid);
              if (_0xcc981f) {
                _0x3b679f.conteinerTeam.removeChild(_0xcc981f.playerMap);
                _0x3b679f.friends.removeChild(_0xcc981f.playerText);
                _0x4bc715['delete'](_0x59b8cd.wid);
              }
            });
            _wwcio.sendLocation = function (_0x258776) {
              _0x50fef9.emit('updateLocation', _0x258776);
            };
            _wwcio.update = function (_0x3f273a) {
              if (_0x3f273a === "headshot") {
                _wwcio.player.score += 0x1;
              }
              _0x50fef9.emit("message", {
                'action': _0x3f273a
              }, function (_0x1c7f3d) {
                var _0x57b5b3;
                if (_0x1c7f3d.type === "leaderBoard" && (_0x57b5b3 = _wwcio.player) !== null && _0x57b5b3 !== undefined && _0x57b5b3.score) {
                  console.log("Enviado", _0x1c7f3d);
                }
              });
            };
            _wwcio.close = function () {
              _0x50fef9.emit('leaveTeam');
              setTimeout(function () {
                _0x50fef9.disconnect();
                _0x50fef9.close();
              }, 0x3e8);
            };
          } catch (_0x42afed) {
            _0x3b679f.containerHsRec.alpha = 0x0;
            _0x3b679f.containerHstop.alpha = 0x0;
            console.error("Erro: Servidor não disponível.");
            _wwcio.close();
          }
        } else {
          _0x3b679f.containerHsRec.alpha = 0x0;
          _0x3b679f.containerHstop.alpha = 0x0;
          console.error("NO MATCH!");
        }
      };
    },
    './node_modules/howler/dist/howler.js': (_0xdb7ba6, _0x5c89c8, _0x5ac100) => {
      var _0x3f628d;
      var _0xf8eec2;
      (function () {
        'use strict';

        var _0x11ad09 = function () {
          this.init();
        };
        _0x11ad09.prototype = {
          'init': function () {
            var _0xb6bb51 = this || _0x104653;
            _0xb6bb51._counter = 0x3e8;
            _0xb6bb51._html5AudioPool = [];
            _0xb6bb51.html5PoolSize = 0xa;
            _0xb6bb51._codecs = {};
            _0xb6bb51._howls = [];
            _0xb6bb51._muted = false;
            _0xb6bb51._volume = 0x1;
            _0xb6bb51._canPlayEvent = "canplaythrough";
            _0xb6bb51._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            _0xb6bb51.masterGain = null;
            _0xb6bb51.noAudio = false;
            _0xb6bb51.usingWebAudio = true;
            _0xb6bb51.autoSuspend = true;
            _0xb6bb51.ctx = null;
            _0xb6bb51.autoUnlock = true;
            _0xb6bb51._setup();
            return _0xb6bb51;
          },
          'volume': function (_0x5ad40c) {
            var _0x5abc71 = this || _0x104653;
            _0x5ad40c = parseFloat(_0x5ad40c);
            if (!_0x5abc71.ctx) {
              _0x42ce97();
            }
            if (typeof _0x5ad40c !== "undefined" && _0x5ad40c >= 0x0 && _0x5ad40c <= 0x1) {
              _0x5abc71._volume = _0x5ad40c;
              if (_0x5abc71._muted) {
                return _0x5abc71;
              }
              if (_0x5abc71.usingWebAudio) {
                _0x5abc71.masterGain.gain.setValueAtTime(_0x5ad40c, _0x104653.ctx.currentTime);
              }
              for (var _0x3d93ab = 0x0; _0x3d93ab < _0x5abc71._howls.length; _0x3d93ab++) {
                if (!_0x5abc71._howls[_0x3d93ab]._webAudio) {
                  var _0x1a9d28 = _0x5abc71._howls[_0x3d93ab]._getSoundIds();
                  for (var _0x3a3669 = 0x0; _0x3a3669 < _0x1a9d28.length; _0x3a3669++) {
                    var _0x9c0613 = _0x5abc71._howls[_0x3d93ab]._soundById(_0x1a9d28[_0x3a3669]);
                    if (_0x9c0613 && _0x9c0613._node) {
                      _0x9c0613._node.volume = _0x9c0613._volume * _0x5ad40c;
                    }
                  }
                }
              }
              return _0x5abc71;
            }
            return _0x5abc71._volume;
          },
          'mute': function (_0x24f9a4) {
            var _0x67ca31 = this || _0x104653;
            if (!_0x67ca31.ctx) {
              _0x42ce97();
            }
            _0x67ca31._muted = _0x24f9a4;
            if (_0x67ca31.usingWebAudio) {
              _0x67ca31.masterGain.gain.setValueAtTime(_0x24f9a4 ? 0x0 : _0x67ca31._volume, _0x104653.ctx.currentTime);
            }
            for (var _0x5ab4e4 = 0x0; _0x5ab4e4 < _0x67ca31._howls.length; _0x5ab4e4++) {
              if (!_0x67ca31._howls[_0x5ab4e4]._webAudio) {
                var _0x2ae042 = _0x67ca31._howls[_0x5ab4e4]._getSoundIds();
                for (var _0x50bead = 0x0; _0x50bead < _0x2ae042.length; _0x50bead++) {
                  var _0x5da041 = _0x67ca31._howls[_0x5ab4e4]._soundById(_0x2ae042[_0x50bead]);
                  if (_0x5da041 && _0x5da041._node) {
                    _0x5da041._node.muted = _0x24f9a4 ? true : _0x5da041._muted;
                  }
                }
              }
            }
            return _0x67ca31;
          },
          'stop': function () {
            var _0x1c30c7 = this || _0x104653;
            for (var _0x40d66c = 0x0; _0x40d66c < _0x1c30c7._howls.length; _0x40d66c++) {
              _0x1c30c7._howls[_0x40d66c].stop();
            }
            return _0x1c30c7;
          },
          'unload': function () {
            var _0x3f29ae = this || _0x104653;
            for (var _0x20a497 = _0x3f29ae._howls.length - 0x1; _0x20a497 >= 0x0; _0x20a497--) {
              _0x3f29ae._howls[_0x20a497].unload();
            }
            if (_0x3f29ae.usingWebAudio && _0x3f29ae.ctx && typeof _0x3f29ae.ctx.close !== "undefined") {
              _0x3f29ae.ctx.close();
              _0x3f29ae.ctx = null;
              _0x42ce97();
            }
            return _0x3f29ae;
          },
          'codecs': function (_0xd90ed8) {
            return (this || _0x104653)._codecs[_0xd90ed8.replace(/^x-/, '')];
          },
          '_setup': function () {
            var _0x4e13f4 = this || _0x104653;
            _0x4e13f4.state = _0x4e13f4.ctx ? _0x4e13f4.ctx.state || "suspended" : "suspended";
            _0x4e13f4._autoSuspend();
            if (!_0x4e13f4.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var _0x140b03 = new Audio();
                  if (typeof _0x140b03.oncanplaythrough === "undefined") {
                    _0x4e13f4._canPlayEvent = "canplay";
                  }
                } catch (_0x214ce4) {
                  _0x4e13f4.noAudio = true;
                }
              } else {
                _0x4e13f4.noAudio = true;
              }
            }
            try {
              var _0x140b03 = new Audio();
              if (_0x140b03.muted) {
                _0x4e13f4.noAudio = true;
              }
            } catch (_0x2e3f7b) {}
            if (!_0x4e13f4.noAudio) {
              _0x4e13f4._setupCodecs();
            }
            return _0x4e13f4;
          },
          '_setupCodecs': function () {
            var _0x38e9d0 = this || _0x104653;
            var _0x460a92 = null;
            try {
              _0x460a92 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (_0x3911c0) {
              return _0x38e9d0;
            }
            if (!_0x460a92 || typeof _0x460a92.canPlayType !== "function") {
              return _0x38e9d0;
            }
            var _0x4e405a = _0x460a92.canPlayType("audio/mpeg;").replace(/^no$/, '');
            var _0x4add45 = _0x38e9d0._navigator ? _0x38e9d0._navigator.userAgent : '';
            var _0x20d328 = _0x4add45.match(/OPR\/([0-6].)/g);
            var _0x7f96b0 = _0x20d328 && parseInt(_0x20d328[0x0].split('/')[0x1], 0xa) < 0x21;
            var _0x1a0d43 = _0x4add45.indexOf("Safari") !== -0x1 && _0x4add45.indexOf("Chrome") === -0x1;
            var _0x48fb6a = _0x4add45.match(/Version\/(.*?) /);
            var _0x5d71c1 = _0x1a0d43 && _0x48fb6a && parseInt(_0x48fb6a[0x1], 0xa) < 0xf;
            _0x38e9d0._codecs = {
              'mp3': !!(!_0x7f96b0 && (_0x4e405a || _0x460a92.canPlayType('audio/mp3;').replace(/^no$/, ''))),
              'mpeg': !!_0x4e405a,
              'opus': !!_0x460a92.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
              'ogg': !!_0x460a92.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
              'oga': !!_0x460a92.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
              'wav': !!(_0x460a92.canPlayType("audio/wav; codecs=\"1\"") || _0x460a92.canPlayType("audio/wav")).replace(/^no$/, ''),
              'aac': !!_0x460a92.canPlayType("audio/aac;").replace(/^no$/, ''),
              'caf': !!_0x460a92.canPlayType("audio/x-caf;").replace(/^no$/, ''),
              'm4a': !!(_0x460a92.canPlayType("audio/x-m4a;") || _0x460a92.canPlayType('audio/m4a;') || _0x460a92.canPlayType("audio/aac;")).replace(/^no$/, ''),
              'm4b': !!(_0x460a92.canPlayType("audio/x-m4b;") || _0x460a92.canPlayType('audio/m4b;') || _0x460a92.canPlayType("audio/aac;")).replace(/^no$/, ''),
              'mp4': !!(_0x460a92.canPlayType("audio/x-mp4;") || _0x460a92.canPlayType("audio/mp4;") || _0x460a92.canPlayType("audio/aac;")).replace(/^no$/, ''),
              'weba': !!(!_0x5d71c1 && _0x460a92.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')),
              'webm': !!(!_0x5d71c1 && _0x460a92.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')),
              'dolby': !!_0x460a92.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ''),
              'flac': !!(_0x460a92.canPlayType("audio/x-flac;") || _0x460a92.canPlayType("audio/flac;")).replace(/^no$/, '')
            };
            return _0x38e9d0;
          },
          '_unlockAudio': function () {
            var _0x4dcb25 = this || _0x104653;
            if (_0x4dcb25._audioUnlocked || !_0x4dcb25.ctx) {
              return;
            }
            _0x4dcb25._audioUnlocked = false;
            _0x4dcb25.autoUnlock = false;
            if (!_0x4dcb25._mobileUnloaded && _0x4dcb25.ctx.sampleRate !== 0xac44) {
              _0x4dcb25._mobileUnloaded = true;
              _0x4dcb25.unload();
            }
            _0x4dcb25._scratchBuffer = _0x4dcb25.ctx.createBuffer(0x1, 0x1, 0x5622);
            var _0x35c050 = function (_0x439efe) {
              while (_0x4dcb25._html5AudioPool.length < _0x4dcb25.html5PoolSize) {
                try {
                  var _0x1970a4 = new Audio();
                  _0x1970a4._unlocked = true;
                  _0x4dcb25._releaseHtml5Audio(_0x1970a4);
                } catch (_0x42c694) {
                  _0x4dcb25.noAudio = true;
                  break;
                }
              }
              for (var _0x38a7f3 = 0x0; _0x38a7f3 < _0x4dcb25._howls.length; _0x38a7f3++) {
                if (!_0x4dcb25._howls[_0x38a7f3]._webAudio) {
                  var _0x4e0680 = _0x4dcb25._howls[_0x38a7f3]._getSoundIds();
                  for (var _0x48a3ed = 0x0; _0x48a3ed < _0x4e0680.length; _0x48a3ed++) {
                    var _0x2e8244 = _0x4dcb25._howls[_0x38a7f3]._soundById(_0x4e0680[_0x48a3ed]);
                    if (_0x2e8244 && _0x2e8244._node && !_0x2e8244._node._unlocked) {
                      _0x2e8244._node._unlocked = true;
                      _0x2e8244._node.load();
                    }
                  }
                }
              }
              _0x4dcb25._autoResume();
              var _0x5a9842 = _0x4dcb25.ctx.createBufferSource();
              _0x5a9842.buffer = _0x4dcb25._scratchBuffer;
              _0x5a9842.connect(_0x4dcb25.ctx.destination);
              if (typeof _0x5a9842.start === "undefined") {
                _0x5a9842.noteOn(0x0);
              } else {
                _0x5a9842.start(0x0);
              }
              if (typeof _0x4dcb25.ctx.resume === "function") {
                _0x4dcb25.ctx.resume();
              }
              _0x5a9842.onended = function () {
                _0x5a9842.disconnect(0x0);
                _0x4dcb25._audioUnlocked = true;
                document.removeEventListener('touchstart', _0x35c050, true);
                document.removeEventListener("touchend", _0x35c050, true);
                document.removeEventListener('click', _0x35c050, true);
                document.removeEventListener('keydown', _0x35c050, true);
                for (var _0x509b42 = 0x0; _0x509b42 < _0x4dcb25._howls.length; _0x509b42++) {
                  _0x4dcb25._howls[_0x509b42]._emit("unlock");
                }
              };
            };
            document.addEventListener("touchstart", _0x35c050, true);
            document.addEventListener("touchend", _0x35c050, true);
            document.addEventListener("click", _0x35c050, true);
            document.addEventListener("keydown", _0x35c050, true);
            return _0x4dcb25;
          },
          '_obtainHtml5Audio': function () {
            var _0x387319 = this || _0x104653;
            if (_0x387319._html5AudioPool.length) {
              return _0x387319._html5AudioPool.pop();
            }
            var _0x3efe68 = new Audio().play();
            if (_0x3efe68 && typeof Promise !== "undefined" && (_0x3efe68 instanceof Promise || typeof _0x3efe68.then === "function")) {
              _0x3efe68["catch"](function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          '_releaseHtml5Audio': function (_0x48153a) {
            var _0x1b43ab = this || _0x104653;
            if (_0x48153a._unlocked) {
              _0x1b43ab._html5AudioPool.push(_0x48153a);
            }
            return _0x1b43ab;
          },
          '_autoSuspend': function () {
            var _0x4a9202 = this;
            if (!_0x4a9202.autoSuspend || !_0x4a9202.ctx || typeof _0x4a9202.ctx.suspend === "undefined" || !_0x104653.usingWebAudio) {
              return;
            }
            for (var _0x33b007 = 0x0; _0x33b007 < _0x4a9202._howls.length; _0x33b007++) {
              if (_0x4a9202._howls[_0x33b007]._webAudio) {
                for (var _0x4e476e = 0x0; _0x4e476e < _0x4a9202._howls[_0x33b007]._sounds.length; _0x4e476e++) {
                  if (!_0x4a9202._howls[_0x33b007]._sounds[_0x4e476e]._paused) {
                    return _0x4a9202;
                  }
                }
              }
            }
            if (_0x4a9202._suspendTimer) {
              clearTimeout(_0x4a9202._suspendTimer);
            }
            _0x4a9202._suspendTimer = setTimeout(function () {
              if (!_0x4a9202.autoSuspend) {
                return;
              }
              _0x4a9202._suspendTimer = null;
              _0x4a9202.state = "suspending";
              var _0x57dc25 = function () {
                _0x4a9202.state = "suspended";
                if (_0x4a9202._resumeAfterSuspend) {
                  delete _0x4a9202._resumeAfterSuspend;
                  _0x4a9202._autoResume();
                }
              };
              _0x4a9202.ctx.suspend().then(_0x57dc25, _0x57dc25);
            }, 0x7530);
            return _0x4a9202;
          },
          '_autoResume': function () {
            var _0x81858a = this;
            if (!_0x81858a.ctx || typeof _0x81858a.ctx.resume === "undefined" || !_0x104653.usingWebAudio) {
              return;
            }
            if (_0x81858a.state === "running" && _0x81858a.ctx.state !== 'interrupted' && _0x81858a._suspendTimer) {
              clearTimeout(_0x81858a._suspendTimer);
              _0x81858a._suspendTimer = null;
            } else {
              if (_0x81858a.state === "suspended" || _0x81858a.state === "running" && _0x81858a.ctx.state === 'interrupted') {
                _0x81858a.ctx.resume().then(function () {
                  _0x81858a.state = "running";
                  for (var _0x4eee2b = 0x0; _0x4eee2b < _0x81858a._howls.length; _0x4eee2b++) {
                    _0x81858a._howls[_0x4eee2b]._emit("resume");
                  }
                });
                if (_0x81858a._suspendTimer) {
                  clearTimeout(_0x81858a._suspendTimer);
                  _0x81858a._suspendTimer = null;
                }
              } else if (_0x81858a.state === "suspending") {
                _0x81858a._resumeAfterSuspend = true;
              }
            }
            return _0x81858a;
          }
        };
        var _0x104653 = new _0x11ad09();
        var _0x383181 = function (_0x5b6a72) {
          var _0x2bc48a = this;
          if (!_0x5b6a72.src || _0x5b6a72.src.length === 0x0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          _0x2bc48a.init(_0x5b6a72);
        };
        _0x383181.prototype = {
          'init': function (_0x17e38a) {
            var _0x8a150c = this;
            if (!_0x104653.ctx) {
              _0x42ce97();
            }
            _0x8a150c._autoplay = _0x17e38a.autoplay || false;
            _0x8a150c._format = typeof _0x17e38a.format !== "string" ? _0x17e38a.format : [_0x17e38a.format];
            _0x8a150c._html5 = _0x17e38a.html5 || false;
            _0x8a150c._muted = _0x17e38a.mute || false;
            _0x8a150c._loop = _0x17e38a.loop || false;
            _0x8a150c._pool = _0x17e38a.pool || 0x5;
            _0x8a150c._preload = typeof _0x17e38a.preload === 'boolean' || _0x17e38a.preload === "metadata" ? _0x17e38a.preload : true;
            _0x8a150c._rate = _0x17e38a.rate || 0x1;
            _0x8a150c._sprite = _0x17e38a.sprite || {};
            _0x8a150c._src = typeof _0x17e38a.src !== "string" ? _0x17e38a.src : [_0x17e38a.src];
            _0x8a150c._volume = _0x17e38a.volume !== undefined ? _0x17e38a.volume : 0x1;
            _0x8a150c._xhr = {
              'method': _0x17e38a.xhr && _0x17e38a.xhr.method ? _0x17e38a.xhr.method : "GET",
              'headers': _0x17e38a.xhr && _0x17e38a.xhr.headers ? _0x17e38a.xhr.headers : null,
              'withCredentials': _0x17e38a.xhr && _0x17e38a.xhr.withCredentials ? _0x17e38a.xhr.withCredentials : false
            };
            _0x8a150c._duration = 0x0;
            _0x8a150c._state = "unloaded";
            _0x8a150c._sounds = [];
            _0x8a150c._endTimers = {};
            _0x8a150c._queue = [];
            _0x8a150c._playLock = false;
            _0x8a150c._onend = _0x17e38a.onend ? [{
              'fn': _0x17e38a.onend
            }] : [];
            _0x8a150c._onfade = _0x17e38a.onfade ? [{
              'fn': _0x17e38a.onfade
            }] : [];
            _0x8a150c._onload = _0x17e38a.onload ? [{
              'fn': _0x17e38a.onload
            }] : [];
            _0x8a150c._onloaderror = _0x17e38a.onloaderror ? [{
              'fn': _0x17e38a.onloaderror
            }] : [];
            _0x8a150c._onplayerror = _0x17e38a.onplayerror ? [{
              'fn': _0x17e38a.onplayerror
            }] : [];
            _0x8a150c._onpause = _0x17e38a.onpause ? [{
              'fn': _0x17e38a.onpause
            }] : [];
            _0x8a150c._onplay = _0x17e38a.onplay ? [{
              'fn': _0x17e38a.onplay
            }] : [];
            _0x8a150c._onstop = _0x17e38a.onstop ? [{
              'fn': _0x17e38a.onstop
            }] : [];
            _0x8a150c._onmute = _0x17e38a.onmute ? [{
              'fn': _0x17e38a.onmute
            }] : [];
            _0x8a150c._onvolume = _0x17e38a.onvolume ? [{
              'fn': _0x17e38a.onvolume
            }] : [];
            _0x8a150c._onrate = _0x17e38a.onrate ? [{
              'fn': _0x17e38a.onrate
            }] : [];
            _0x8a150c._onseek = _0x17e38a.onseek ? [{
              'fn': _0x17e38a.onseek
            }] : [];
            _0x8a150c._onunlock = _0x17e38a.onunlock ? [{
              'fn': _0x17e38a.onunlock
            }] : [];
            _0x8a150c._onresume = [];
            _0x8a150c._webAudio = _0x104653.usingWebAudio && !_0x8a150c._html5;
            if (typeof _0x104653.ctx !== "undefined" && _0x104653.ctx && _0x104653.autoUnlock) {
              _0x104653._unlockAudio();
            }
            _0x104653._howls.push(_0x8a150c);
            if (_0x8a150c._autoplay) {
              _0x8a150c._queue.push({
                'event': 'play',
                'action': function () {
                  _0x8a150c.play();
                }
              });
            }
            if (_0x8a150c._preload && _0x8a150c._preload !== "none") {
              _0x8a150c.load();
            }
            return _0x8a150c;
          },
          'load': function () {
            var _0x131ab8 = this;
            var _0x456e72 = null;
            if (_0x104653.noAudio) {
              _0x131ab8._emit('loaderror', null, "No audio support.");
              return;
            }
            if (typeof _0x131ab8._src === "string") {
              _0x131ab8._src = [_0x131ab8._src];
            }
            for (var _0xe674ed = 0x0; _0xe674ed < _0x131ab8._src.length; _0xe674ed++) {
              var _0x31d434;
              var _0x2b133b;
              if (_0x131ab8._format && _0x131ab8._format[_0xe674ed]) {
                _0x31d434 = _0x131ab8._format[_0xe674ed];
              } else {
                _0x2b133b = _0x131ab8._src[_0xe674ed];
                if (typeof _0x2b133b !== "string") {
                  _0x131ab8._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                _0x31d434 = /^data:audio\/([^;,]+);/i.exec(_0x2b133b);
                if (!_0x31d434) {
                  _0x31d434 = /\.([^.]+)$/.exec(_0x2b133b.split('?', 0x1)[0x0]);
                }
                if (_0x31d434) {
                  _0x31d434 = _0x31d434[0x1].toLowerCase();
                }
              }
              if (!_0x31d434) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (_0x31d434 && _0x104653.codecs(_0x31d434)) {
                _0x456e72 = _0x131ab8._src[_0xe674ed];
                break;
              }
            }
            if (!_0x456e72) {
              _0x131ab8._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            _0x131ab8._src = _0x456e72;
            _0x131ab8._state = "loading";
            if (window.location.protocol === "https:" && _0x456e72.slice(0x0, 0x5) === 'http:') {
              _0x131ab8._html5 = true;
              _0x131ab8._webAudio = false;
            }
            new _0x2c7acd(_0x131ab8);
            if (_0x131ab8._webAudio) {
              _0x36cd6d(_0x131ab8);
            }
            return _0x131ab8;
          },
          'play': function (_0x4697d9, _0x5c7ebc) {
            var _0x1261e6 = this;
            var _0x4b89bc = null;
            if (typeof _0x4697d9 === "number") {
              _0x4b89bc = _0x4697d9;
              _0x4697d9 = null;
            } else {
              if (typeof _0x4697d9 === "string" && _0x1261e6._state === 'loaded' && !_0x1261e6._sprite[_0x4697d9]) {
                return null;
              } else {
                if (typeof _0x4697d9 === "undefined") {
                  _0x4697d9 = "__default";
                  if (!_0x1261e6._playLock) {
                    var _0x27cd65 = 0x0;
                    for (var _0xb5cf52 = 0x0; _0xb5cf52 < _0x1261e6._sounds.length; _0xb5cf52++) {
                      if (_0x1261e6._sounds[_0xb5cf52]._paused && !_0x1261e6._sounds[_0xb5cf52]._ended) {
                        _0x27cd65++;
                        _0x4b89bc = _0x1261e6._sounds[_0xb5cf52]._id;
                      }
                    }
                    if (_0x27cd65 === 0x1) {
                      _0x4697d9 = null;
                    } else {
                      _0x4b89bc = null;
                    }
                  }
                }
              }
            }
            var _0x489559 = _0x4b89bc ? _0x1261e6._soundById(_0x4b89bc) : _0x1261e6._inactiveSound();
            if (!_0x489559) {
              return null;
            }
            if (_0x4b89bc && !_0x4697d9) {
              _0x4697d9 = _0x489559._sprite || "__default";
            }
            if (_0x1261e6._state !== "loaded") {
              _0x489559._sprite = _0x4697d9;
              _0x489559._ended = false;
              var _0x448572 = _0x489559._id;
              _0x1261e6._queue.push({
                'event': "play",
                'action': function () {
                  _0x1261e6.play(_0x448572);
                }
              });
              return _0x448572;
            }
            if (_0x4b89bc && !_0x489559._paused) {
              if (!_0x5c7ebc) {
                _0x1261e6._loadQueue("play");
              }
              return _0x489559._id;
            }
            if (_0x1261e6._webAudio) {
              _0x104653._autoResume();
            }
            var _0x773f88 = Math.max(0x0, _0x489559._seek > 0x0 ? _0x489559._seek : _0x1261e6._sprite[_0x4697d9][0x0] / 0x3e8);
            var _0x4c72c4 = Math.max(0x0, (_0x1261e6._sprite[_0x4697d9][0x0] + _0x1261e6._sprite[_0x4697d9][0x1]) / 0x3e8 - _0x773f88);
            var _0x46f937 = _0x4c72c4 * 0x3e8 / Math.abs(_0x489559._rate);
            var _0x1912fb = _0x1261e6._sprite[_0x4697d9][0x0] / 0x3e8;
            var _0x1bf307 = (_0x1261e6._sprite[_0x4697d9][0x0] + _0x1261e6._sprite[_0x4697d9][0x1]) / 0x3e8;
            _0x489559._sprite = _0x4697d9;
            _0x489559._ended = false;
            var _0x35b93f = function () {
              _0x489559._paused = false;
              _0x489559._seek = _0x773f88;
              _0x489559._start = _0x1912fb;
              _0x489559._stop = _0x1bf307;
              _0x489559._loop = !!(_0x489559._loop || _0x1261e6._sprite[_0x4697d9][0x2]);
            };
            if (_0x773f88 >= _0x1bf307) {
              _0x1261e6._ended(_0x489559);
              return;
            }
            var _0x2420bf = _0x489559._node;
            if (_0x1261e6._webAudio) {
              var _0x1109da = function () {
                _0x1261e6._playLock = false;
                _0x35b93f();
                _0x1261e6._refreshBuffer(_0x489559);
                var _0x52ca0f = _0x489559._muted || _0x1261e6._muted ? 0x0 : _0x489559._volume;
                _0x2420bf.gain.setValueAtTime(_0x52ca0f, _0x104653.ctx.currentTime);
                _0x489559._playStart = _0x104653.ctx.currentTime;
                if (typeof _0x2420bf.bufferSource.start === "undefined") {
                  if (_0x489559._loop) {
                    _0x2420bf.bufferSource.noteGrainOn(0x0, _0x773f88, 0x15180);
                  } else {
                    _0x2420bf.bufferSource.noteGrainOn(0x0, _0x773f88, _0x4c72c4);
                  }
                } else if (_0x489559._loop) {
                  _0x2420bf.bufferSource.start(0x0, _0x773f88, 0x15180);
                } else {
                  _0x2420bf.bufferSource.start(0x0, _0x773f88, _0x4c72c4);
                }
                if (_0x46f937 !== Infinity) {
                  _0x1261e6._endTimers[_0x489559._id] = setTimeout(_0x1261e6._ended.bind(_0x1261e6, _0x489559), _0x46f937);
                }
                if (!_0x5c7ebc) {
                  setTimeout(function () {
                    _0x1261e6._emit("play", _0x489559._id);
                    _0x1261e6._loadQueue();
                  }, 0x0);
                }
              };
              if (_0x104653.state === 'running' && _0x104653.ctx.state !== "interrupted") {
                _0x1109da();
              } else {
                _0x1261e6._playLock = true;
                _0x1261e6.once('resume', _0x1109da);
                _0x1261e6._clearTimer(_0x489559._id);
              }
            } else {
              var _0x2beb7f = function () {
                _0x2420bf.currentTime = _0x773f88;
                _0x2420bf.muted = _0x489559._muted || _0x1261e6._muted || _0x104653._muted || _0x2420bf.muted;
                _0x2420bf.volume = _0x489559._volume * _0x104653.volume();
                _0x2420bf.playbackRate = _0x489559._rate;
                try {
                  var _0x46e0ae = _0x2420bf.play();
                  if (_0x46e0ae && typeof Promise !== "undefined" && (_0x46e0ae instanceof Promise || typeof _0x46e0ae.then === 'function')) {
                    _0x1261e6._playLock = true;
                    _0x35b93f();
                    _0x46e0ae.then(function () {
                      _0x1261e6._playLock = false;
                      _0x2420bf._unlocked = true;
                      if (!_0x5c7ebc) {
                        _0x1261e6._emit("play", _0x489559._id);
                      } else {
                        _0x1261e6._loadQueue();
                      }
                    })["catch"](function () {
                      _0x1261e6._playLock = false;
                      _0x1261e6._emit("playerror", _0x489559._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      _0x489559._ended = true;
                      _0x489559._paused = true;
                    });
                  } else if (!_0x5c7ebc) {
                    _0x1261e6._playLock = false;
                    _0x35b93f();
                    _0x1261e6._emit("play", _0x489559._id);
                  }
                  _0x2420bf.playbackRate = _0x489559._rate;
                  if (_0x2420bf.paused) {
                    _0x1261e6._emit("playerror", _0x489559._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (_0x4697d9 !== "__default" || _0x489559._loop) {
                    _0x1261e6._endTimers[_0x489559._id] = setTimeout(_0x1261e6._ended.bind(_0x1261e6, _0x489559), _0x46f937);
                  } else {
                    _0x1261e6._endTimers[_0x489559._id] = function () {
                      _0x1261e6._ended(_0x489559);
                      _0x2420bf.removeEventListener("ended", _0x1261e6._endTimers[_0x489559._id], false);
                    };
                    _0x2420bf.addEventListener("ended", _0x1261e6._endTimers[_0x489559._id], false);
                  }
                } catch (_0x4129bf) {
                  _0x1261e6._emit("playerror", _0x489559._id, _0x4129bf);
                }
              };
              if (_0x2420bf.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                _0x2420bf.src = _0x1261e6._src;
                _0x2420bf.load();
              }
              var _0x57057a = window && window.ejecta || !_0x2420bf.readyState && _0x104653._navigator.isCocoonJS;
              if (_0x2420bf.readyState >= 0x3 || _0x57057a) {
                _0x2beb7f();
              } else {
                _0x1261e6._playLock = true;
                _0x1261e6._state = "loading";
                var _0x4312cc = function () {
                  _0x1261e6._state = "loaded";
                  _0x2beb7f();
                  _0x2420bf.removeEventListener(_0x104653._canPlayEvent, _0x4312cc, false);
                };
                _0x2420bf.addEventListener(_0x104653._canPlayEvent, _0x4312cc, false);
                _0x1261e6._clearTimer(_0x489559._id);
              }
            }
            return _0x489559._id;
          },
          'pause': function (_0x2e2ab8) {
            var _0x2356df = this;
            if (_0x2356df._state !== 'loaded' || _0x2356df._playLock) {
              _0x2356df._queue.push({
                'event': 'pause',
                'action': function () {
                  _0x2356df.pause(_0x2e2ab8);
                }
              });
              return _0x2356df;
            }
            var _0x2e8bfd = _0x2356df._getSoundIds(_0x2e2ab8);
            for (var _0x2a9047 = 0x0; _0x2a9047 < _0x2e8bfd.length; _0x2a9047++) {
              _0x2356df._clearTimer(_0x2e8bfd[_0x2a9047]);
              var _0x5d143d = _0x2356df._soundById(_0x2e8bfd[_0x2a9047]);
              if (_0x5d143d && !_0x5d143d._paused) {
                _0x5d143d._seek = _0x2356df.seek(_0x2e8bfd[_0x2a9047]);
                _0x5d143d._rateSeek = 0x0;
                _0x5d143d._paused = true;
                _0x2356df._stopFade(_0x2e8bfd[_0x2a9047]);
                if (_0x5d143d._node) {
                  if (_0x2356df._webAudio) {
                    if (!_0x5d143d._node.bufferSource) {
                      continue;
                    }
                    if (typeof _0x5d143d._node.bufferSource.stop === 'undefined') {
                      _0x5d143d._node.bufferSource.noteOff(0x0);
                    } else {
                      _0x5d143d._node.bufferSource.stop(0x0);
                    }
                    _0x2356df._cleanBuffer(_0x5d143d._node);
                  } else if (!isNaN(_0x5d143d._node.duration) || _0x5d143d._node.duration === Infinity) {
                    _0x5d143d._node.pause();
                  }
                }
              }
              if (!arguments[0x1]) {
                _0x2356df._emit("pause", _0x5d143d ? _0x5d143d._id : null);
              }
            }
            return _0x2356df;
          },
          'stop': function (_0x261bc9, _0x2827d7) {
            var _0x1e34aa = this;
            if (_0x1e34aa._state !== 'loaded' || _0x1e34aa._playLock) {
              _0x1e34aa._queue.push({
                'event': "stop",
                'action': function () {
                  _0x1e34aa.stop(_0x261bc9);
                }
              });
              return _0x1e34aa;
            }
            var _0x313ebe = _0x1e34aa._getSoundIds(_0x261bc9);
            for (var _0x2573d0 = 0x0; _0x2573d0 < _0x313ebe.length; _0x2573d0++) {
              _0x1e34aa._clearTimer(_0x313ebe[_0x2573d0]);
              var _0x2c609d = _0x1e34aa._soundById(_0x313ebe[_0x2573d0]);
              if (_0x2c609d) {
                _0x2c609d._seek = _0x2c609d._start || 0x0;
                _0x2c609d._rateSeek = 0x0;
                _0x2c609d._paused = true;
                _0x2c609d._ended = true;
                _0x1e34aa._stopFade(_0x313ebe[_0x2573d0]);
                if (_0x2c609d._node) {
                  if (_0x1e34aa._webAudio) {
                    if (_0x2c609d._node.bufferSource) {
                      if (typeof _0x2c609d._node.bufferSource.stop === "undefined") {
                        _0x2c609d._node.bufferSource.noteOff(0x0);
                      } else {
                        _0x2c609d._node.bufferSource.stop(0x0);
                      }
                      _0x1e34aa._cleanBuffer(_0x2c609d._node);
                    }
                  } else if (!isNaN(_0x2c609d._node.duration) || _0x2c609d._node.duration === Infinity) {
                    _0x2c609d._node.currentTime = _0x2c609d._start || 0x0;
                    _0x2c609d._node.pause();
                    if (_0x2c609d._node.duration === Infinity) {
                      _0x1e34aa._clearSound(_0x2c609d._node);
                    }
                  }
                }
                if (!_0x2827d7) {
                  _0x1e34aa._emit("stop", _0x2c609d._id);
                }
              }
            }
            return _0x1e34aa;
          },
          'mute': function (_0xb10cd5, _0x284130) {
            var _0x21d51d = this;
            if (_0x21d51d._state !== "loaded" || _0x21d51d._playLock) {
              _0x21d51d._queue.push({
                'event': "mute",
                'action': function () {
                  _0x21d51d.mute(_0xb10cd5, _0x284130);
                }
              });
              return _0x21d51d;
            }
            if (typeof _0x284130 === "undefined") {
              if (typeof _0xb10cd5 === "boolean") {
                _0x21d51d._muted = _0xb10cd5;
              } else {
                return _0x21d51d._muted;
              }
            }
            var _0x1d4a68 = _0x21d51d._getSoundIds(_0x284130);
            for (var _0x4fbc28 = 0x0; _0x4fbc28 < _0x1d4a68.length; _0x4fbc28++) {
              var _0xee111d = _0x21d51d._soundById(_0x1d4a68[_0x4fbc28]);
              if (_0xee111d) {
                _0xee111d._muted = _0xb10cd5;
                if (_0xee111d._interval) {
                  _0x21d51d._stopFade(_0xee111d._id);
                }
                if (_0x21d51d._webAudio && _0xee111d._node) {
                  _0xee111d._node.gain.setValueAtTime(_0xb10cd5 ? 0x0 : _0xee111d._volume, _0x104653.ctx.currentTime);
                } else if (_0xee111d._node) {
                  _0xee111d._node.muted = _0x104653._muted ? true : _0xb10cd5;
                }
                _0x21d51d._emit("mute", _0xee111d._id);
              }
            }
            return _0x21d51d;
          },
          'volume': function () {
            var _0x16348e = this;
            var _0x2d6081;
            var _0x4d4a35;
            if (arguments.length === 0x0) {
              return _0x16348e._volume;
            } else {
              if (arguments.length === 0x1 || arguments.length === 0x2 && typeof arguments[0x1] === 'undefined') {
                var _0x3c8067 = _0x16348e._getSoundIds();
                var _0x2f28ff = _0x3c8067.indexOf(arguments[0x0]);
                if (_0x2f28ff >= 0x0) {
                  _0x4d4a35 = parseInt(arguments[0x0], 0xa);
                } else {
                  _0x2d6081 = parseFloat(arguments[0x0]);
                }
              } else if (arguments.length >= 0x2) {
                _0x2d6081 = parseFloat(arguments[0x0]);
                _0x4d4a35 = parseInt(arguments[0x1], 0xa);
              }
            }
            var _0xc46152;
            if (typeof _0x2d6081 !== 'undefined' && _0x2d6081 >= 0x0 && _0x2d6081 <= 0x1) {
              if (_0x16348e._state !== "loaded" || _0x16348e._playLock) {
                _0x16348e._queue.push({
                  'event': "volume",
                  'action': function () {
                    _0x16348e.volume.apply(_0x16348e, arguments);
                  }
                });
                return _0x16348e;
              }
              if (typeof _0x4d4a35 === "undefined") {
                _0x16348e._volume = _0x2d6081;
              }
              _0x4d4a35 = _0x16348e._getSoundIds(_0x4d4a35);
              for (var _0x46141e = 0x0; _0x46141e < _0x4d4a35.length; _0x46141e++) {
                _0xc46152 = _0x16348e._soundById(_0x4d4a35[_0x46141e]);
                if (_0xc46152) {
                  _0xc46152._volume = _0x2d6081;
                  if (!arguments[0x2]) {
                    _0x16348e._stopFade(_0x4d4a35[_0x46141e]);
                  }
                  if (_0x16348e._webAudio && _0xc46152._node && !_0xc46152._muted) {
                    _0xc46152._node.gain.setValueAtTime(_0x2d6081, _0x104653.ctx.currentTime);
                  } else if (_0xc46152._node && !_0xc46152._muted) {
                    _0xc46152._node.volume = _0x2d6081 * _0x104653.volume();
                  }
                  _0x16348e._emit('volume', _0xc46152._id);
                }
              }
            } else {
              _0xc46152 = _0x4d4a35 ? _0x16348e._soundById(_0x4d4a35) : _0x16348e._sounds[0x0];
              return _0xc46152 ? _0xc46152._volume : 0x0;
            }
            return _0x16348e;
          },
          'fade': function (_0x13f1f3, _0x38e37d, _0x58c5a9, _0x33b761) {
            var _0x48c726 = this;
            if (_0x48c726._state !== "loaded" || _0x48c726._playLock) {
              _0x48c726._queue.push({
                'event': "fade",
                'action': function () {
                  _0x48c726.fade(_0x13f1f3, _0x38e37d, _0x58c5a9, _0x33b761);
                }
              });
              return _0x48c726;
            }
            _0x13f1f3 = Math.min(Math.max(0x0, parseFloat(_0x13f1f3)), 0x1);
            _0x38e37d = Math.min(Math.max(0x0, parseFloat(_0x38e37d)), 0x1);
            _0x58c5a9 = parseFloat(_0x58c5a9);
            _0x48c726.volume(_0x13f1f3, _0x33b761);
            var _0x38d7f9 = _0x48c726._getSoundIds(_0x33b761);
            for (var _0x1fbbbe = 0x0; _0x1fbbbe < _0x38d7f9.length; _0x1fbbbe++) {
              var _0x156e19 = _0x48c726._soundById(_0x38d7f9[_0x1fbbbe]);
              if (_0x156e19) {
                if (!_0x33b761) {
                  _0x48c726._stopFade(_0x38d7f9[_0x1fbbbe]);
                }
                if (_0x48c726._webAudio && !_0x156e19._muted) {
                  var _0x4f6f22 = _0x104653.ctx.currentTime;
                  var _0x5a239a = _0x4f6f22 + _0x58c5a9 / 0x3e8;
                  _0x156e19._volume = _0x13f1f3;
                  _0x156e19._node.gain.setValueAtTime(_0x13f1f3, _0x4f6f22);
                  _0x156e19._node.gain.linearRampToValueAtTime(_0x38e37d, _0x5a239a);
                }
                _0x48c726._startFadeInterval(_0x156e19, _0x13f1f3, _0x38e37d, _0x58c5a9, _0x38d7f9[_0x1fbbbe], typeof _0x33b761 === "undefined");
              }
            }
            return _0x48c726;
          },
          '_startFadeInterval': function (_0x3706bc, _0x2ad914, _0x48d070, _0x294366, _0xf61a83, _0x2708aa) {
            var _0x1710d6 = this;
            var _0x43534a = _0x2ad914;
            var _0x30baef = _0x48d070 - _0x2ad914;
            var _0x4a3bac = Math.abs(_0x30baef / 0.01);
            var _0x24eda9 = Math.max(0x4, _0x4a3bac > 0x0 ? _0x294366 / _0x4a3bac : _0x294366);
            var _0x116350 = Date.now();
            _0x3706bc._fadeTo = _0x48d070;
            _0x3706bc._interval = setInterval(function () {
              var _0x15f25b = (Date.now() - _0x116350) / _0x294366;
              _0x116350 = Date.now();
              _0x43534a += _0x30baef * _0x15f25b;
              _0x43534a = Math.round(_0x43534a * 0x64) / 0x64;
              if (_0x30baef < 0x0) {
                _0x43534a = Math.max(_0x48d070, _0x43534a);
              } else {
                _0x43534a = Math.min(_0x48d070, _0x43534a);
              }
              if (_0x1710d6._webAudio) {
                _0x3706bc._volume = _0x43534a;
              } else {
                _0x1710d6.volume(_0x43534a, _0x3706bc._id, true);
              }
              if (_0x2708aa) {
                _0x1710d6._volume = _0x43534a;
              }
              if (_0x48d070 < _0x2ad914 && _0x43534a <= _0x48d070 || _0x48d070 > _0x2ad914 && _0x43534a >= _0x48d070) {
                clearInterval(_0x3706bc._interval);
                _0x3706bc._interval = null;
                _0x3706bc._fadeTo = null;
                _0x1710d6.volume(_0x48d070, _0x3706bc._id);
                _0x1710d6._emit('fade', _0x3706bc._id);
              }
            }, _0x24eda9);
          },
          '_stopFade': function (_0x2f1ca9) {
            var _0x267dd7 = this;
            var _0x653bae = _0x267dd7._soundById(_0x2f1ca9);
            if (_0x653bae && _0x653bae._interval) {
              if (_0x267dd7._webAudio) {
                _0x653bae._node.gain.cancelScheduledValues(_0x104653.ctx.currentTime);
              }
              clearInterval(_0x653bae._interval);
              _0x653bae._interval = null;
              _0x267dd7.volume(_0x653bae._fadeTo, _0x2f1ca9);
              _0x653bae._fadeTo = null;
              _0x267dd7._emit("fade", _0x2f1ca9);
            }
            return _0x267dd7;
          },
          'loop': function () {
            var _0x48b665 = this;
            var _0xaf5dbe;
            var _0x12de3a;
            var _0x44328c;
            if (arguments.length === 0x0) {
              return _0x48b665._loop;
            } else {
              if (arguments.length === 0x1) {
                if (typeof arguments[0x0] === "boolean") {
                  _0xaf5dbe = arguments[0x0];
                  _0x48b665._loop = _0xaf5dbe;
                } else {
                  _0x44328c = _0x48b665._soundById(parseInt(arguments[0x0], 0xa));
                  return _0x44328c ? _0x44328c._loop : false;
                }
              } else if (arguments.length === 0x2) {
                _0xaf5dbe = arguments[0x0];
                _0x12de3a = parseInt(arguments[0x1], 0xa);
              }
            }
            var _0x46740d = _0x48b665._getSoundIds(_0x12de3a);
            for (var _0xb8dd33 = 0x0; _0xb8dd33 < _0x46740d.length; _0xb8dd33++) {
              _0x44328c = _0x48b665._soundById(_0x46740d[_0xb8dd33]);
              if (_0x44328c) {
                _0x44328c._loop = _0xaf5dbe;
                if (_0x48b665._webAudio && _0x44328c._node && _0x44328c._node.bufferSource) {
                  _0x44328c._node.bufferSource.loop = _0xaf5dbe;
                  if (_0xaf5dbe) {
                    _0x44328c._node.bufferSource.loopStart = _0x44328c._start || 0x0;
                    _0x44328c._node.bufferSource.loopEnd = _0x44328c._stop;
                    if (_0x48b665.playing(_0x46740d[_0xb8dd33])) {
                      _0x48b665.pause(_0x46740d[_0xb8dd33], true);
                      _0x48b665.play(_0x46740d[_0xb8dd33], true);
                    }
                  }
                }
              }
            }
            return _0x48b665;
          },
          'rate': function () {
            var _0x3577f6 = this;
            var _0x360923;
            var _0x1fdb74;
            if (arguments.length === 0x0) {
              _0x1fdb74 = _0x3577f6._sounds[0x0]._id;
            } else {
              if (arguments.length === 0x1) {
                var _0x3a5278 = _0x3577f6._getSoundIds();
                var _0x4043e0 = _0x3a5278.indexOf(arguments[0x0]);
                if (_0x4043e0 >= 0x0) {
                  _0x1fdb74 = parseInt(arguments[0x0], 0xa);
                } else {
                  _0x360923 = parseFloat(arguments[0x0]);
                }
              } else if (arguments.length === 0x2) {
                _0x360923 = parseFloat(arguments[0x0]);
                _0x1fdb74 = parseInt(arguments[0x1], 0xa);
              }
            }
            var _0x307e80;
            if (typeof _0x360923 === 'number') {
              if (_0x3577f6._state !== "loaded" || _0x3577f6._playLock) {
                _0x3577f6._queue.push({
                  'event': "rate",
                  'action': function () {
                    _0x3577f6.rate.apply(_0x3577f6, arguments);
                  }
                });
                return _0x3577f6;
              }
              if (typeof _0x1fdb74 === 'undefined') {
                _0x3577f6._rate = _0x360923;
              }
              _0x1fdb74 = _0x3577f6._getSoundIds(_0x1fdb74);
              for (var _0x587222 = 0x0; _0x587222 < _0x1fdb74.length; _0x587222++) {
                _0x307e80 = _0x3577f6._soundById(_0x1fdb74[_0x587222]);
                if (_0x307e80) {
                  if (_0x3577f6.playing(_0x1fdb74[_0x587222])) {
                    _0x307e80._rateSeek = _0x3577f6.seek(_0x1fdb74[_0x587222]);
                    _0x307e80._playStart = _0x3577f6._webAudio ? _0x104653.ctx.currentTime : _0x307e80._playStart;
                  }
                  _0x307e80._rate = _0x360923;
                  if (_0x3577f6._webAudio && _0x307e80._node && _0x307e80._node.bufferSource) {
                    _0x307e80._node.bufferSource.playbackRate.setValueAtTime(_0x360923, _0x104653.ctx.currentTime);
                  } else if (_0x307e80._node) {
                    _0x307e80._node.playbackRate = _0x360923;
                  }
                  var _0x46bcb3 = _0x3577f6.seek(_0x1fdb74[_0x587222]);
                  var _0x458a25 = (_0x3577f6._sprite[_0x307e80._sprite][0x0] + _0x3577f6._sprite[_0x307e80._sprite][0x1]) / 0x3e8 - _0x46bcb3;
                  var _0x14ac6d = _0x458a25 * 0x3e8 / Math.abs(_0x307e80._rate);
                  if (_0x3577f6._endTimers[_0x1fdb74[_0x587222]] || !_0x307e80._paused) {
                    _0x3577f6._clearTimer(_0x1fdb74[_0x587222]);
                    _0x3577f6._endTimers[_0x1fdb74[_0x587222]] = setTimeout(_0x3577f6._ended.bind(_0x3577f6, _0x307e80), _0x14ac6d);
                  }
                  _0x3577f6._emit("rate", _0x307e80._id);
                }
              }
            } else {
              _0x307e80 = _0x3577f6._soundById(_0x1fdb74);
              return _0x307e80 ? _0x307e80._rate : _0x3577f6._rate;
            }
            return _0x3577f6;
          },
          'seek': function () {
            var _0x3a8421 = this;
            var _0x196791;
            var _0x2cf3be;
            if (arguments.length === 0x0) {
              if (_0x3a8421._sounds.length) {
                _0x2cf3be = _0x3a8421._sounds[0x0]._id;
              }
            } else {
              if (arguments.length === 0x1) {
                var _0x5e0cb3 = _0x3a8421._getSoundIds();
                var _0x423f77 = _0x5e0cb3.indexOf(arguments[0x0]);
                if (_0x423f77 >= 0x0) {
                  _0x2cf3be = parseInt(arguments[0x0], 0xa);
                } else if (_0x3a8421._sounds.length) {
                  _0x2cf3be = _0x3a8421._sounds[0x0]._id;
                  _0x196791 = parseFloat(arguments[0x0]);
                }
              } else if (arguments.length === 0x2) {
                _0x196791 = parseFloat(arguments[0x0]);
                _0x2cf3be = parseInt(arguments[0x1], 0xa);
              }
            }
            if (typeof _0x2cf3be === "undefined") {
              return 0x0;
            }
            if (typeof _0x196791 === 'number' && (_0x3a8421._state !== "loaded" || _0x3a8421._playLock)) {
              _0x3a8421._queue.push({
                'event': "seek",
                'action': function () {
                  _0x3a8421.seek.apply(_0x3a8421, arguments);
                }
              });
              return _0x3a8421;
            }
            var _0x1e4c53 = _0x3a8421._soundById(_0x2cf3be);
            if (_0x1e4c53) {
              if (typeof _0x196791 === 'number' && _0x196791 >= 0x0) {
                var _0x5e1061 = _0x3a8421.playing(_0x2cf3be);
                if (_0x5e1061) {
                  _0x3a8421.pause(_0x2cf3be, true);
                }
                _0x1e4c53._seek = _0x196791;
                _0x1e4c53._ended = false;
                _0x3a8421._clearTimer(_0x2cf3be);
                if (!_0x3a8421._webAudio && _0x1e4c53._node && !isNaN(_0x1e4c53._node.duration)) {
                  _0x1e4c53._node.currentTime = _0x196791;
                }
                var _0x5c786b = function () {
                  if (_0x5e1061) {
                    _0x3a8421.play(_0x2cf3be, true);
                  }
                  _0x3a8421._emit("seek", _0x2cf3be);
                };
                if (_0x5e1061 && !_0x3a8421._webAudio) {
                  var _0x335cd1 = function () {
                    if (!_0x3a8421._playLock) {
                      _0x5c786b();
                    } else {
                      setTimeout(_0x335cd1, 0x0);
                    }
                  };
                  setTimeout(_0x335cd1, 0x0);
                } else {
                  _0x5c786b();
                }
              } else {
                if (_0x3a8421._webAudio) {
                  var _0x43b708 = _0x3a8421.playing(_0x2cf3be) ? _0x104653.ctx.currentTime - _0x1e4c53._playStart : 0x0;
                  var _0x293fe5 = _0x1e4c53._rateSeek ? _0x1e4c53._rateSeek - _0x1e4c53._seek : 0x0;
                  return _0x1e4c53._seek + (_0x293fe5 + _0x43b708 * Math.abs(_0x1e4c53._rate));
                } else {
                  return _0x1e4c53._node.currentTime;
                }
              }
            }
            return _0x3a8421;
          },
          'playing': function (_0xd9f9ba) {
            var _0x834a29 = this;
            if (typeof _0xd9f9ba === 'number') {
              var _0x5e027e = _0x834a29._soundById(_0xd9f9ba);
              return _0x5e027e ? !_0x5e027e._paused : false;
            }
            for (var _0x362287 = 0x0; _0x362287 < _0x834a29._sounds.length; _0x362287++) {
              if (!_0x834a29._sounds[_0x362287]._paused) {
                return true;
              }
            }
            return false;
          },
          'duration': function (_0x3da666) {
            var _0x42cc52 = this;
            var _0x508874 = _0x42cc52._duration;
            var _0x2ad662 = _0x42cc52._soundById(_0x3da666);
            if (_0x2ad662) {
              _0x508874 = _0x42cc52._sprite[_0x2ad662._sprite][0x1] / 0x3e8;
            }
            return _0x508874;
          },
          'state': function () {
            return this._state;
          },
          'unload': function () {
            var _0x54fbfb = this;
            var _0x1bf85a = _0x54fbfb._sounds;
            for (var _0x3d462d = 0x0; _0x3d462d < _0x1bf85a.length; _0x3d462d++) {
              if (!_0x1bf85a[_0x3d462d]._paused) {
                _0x54fbfb.stop(_0x1bf85a[_0x3d462d]._id);
              }
              if (!_0x54fbfb._webAudio) {
                _0x54fbfb._clearSound(_0x1bf85a[_0x3d462d]._node);
                _0x1bf85a[_0x3d462d]._node.removeEventListener("error", _0x1bf85a[_0x3d462d]._errorFn, false);
                _0x1bf85a[_0x3d462d]._node.removeEventListener(_0x104653._canPlayEvent, _0x1bf85a[_0x3d462d]._loadFn, false);
                _0x1bf85a[_0x3d462d]._node.removeEventListener("ended", _0x1bf85a[_0x3d462d]._endFn, false);
                _0x104653._releaseHtml5Audio(_0x1bf85a[_0x3d462d]._node);
              }
              delete _0x1bf85a[_0x3d462d]._node;
              _0x54fbfb._clearTimer(_0x1bf85a[_0x3d462d]._id);
            }
            var _0x4cd3ea = _0x104653._howls.indexOf(_0x54fbfb);
            if (_0x4cd3ea >= 0x0) {
              _0x104653._howls.splice(_0x4cd3ea, 0x1);
            }
            var _0x1dd544 = true;
            for (_0x3d462d = 0x0; _0x3d462d < _0x104653._howls.length; _0x3d462d++) {
              if (_0x104653._howls[_0x3d462d]._src === _0x54fbfb._src || _0x54fbfb._src.indexOf(_0x104653._howls[_0x3d462d]._src) >= 0x0) {
                _0x1dd544 = false;
                break;
              }
            }
            if (_0x57a2f6 && _0x1dd544) {
              delete _0x57a2f6[_0x54fbfb._src];
            }
            _0x104653.noAudio = false;
            _0x54fbfb._state = "unloaded";
            _0x54fbfb._sounds = [];
            _0x54fbfb = null;
            return null;
          },
          'on': function (_0x2cf575, _0x175c04, _0x31ada9, _0x25b87c) {
            var _0x1f2f51 = this;
            var _0x3c221c = _0x1f2f51["_on" + _0x2cf575];
            if (typeof _0x175c04 === 'function') {
              _0x3c221c.push(_0x25b87c ? {
                'id': _0x31ada9,
                'fn': _0x175c04,
                'once': _0x25b87c
              } : {
                'id': _0x31ada9,
                'fn': _0x175c04
              });
            }
            return _0x1f2f51;
          },
          'off': function (_0x540ea0, _0x24a204, _0x172533) {
            var _0x51fc37 = this;
            var _0x27e599 = _0x51fc37["_on" + _0x540ea0];
            var _0x34b7e9 = 0x0;
            if (typeof _0x24a204 === 'number') {
              _0x172533 = _0x24a204;
              _0x24a204 = null;
            }
            if (_0x24a204 || _0x172533) {
              for (_0x34b7e9 = 0x0; _0x34b7e9 < _0x27e599.length; _0x34b7e9++) {
                var _0x2b8be7 = _0x172533 === _0x27e599[_0x34b7e9].id;
                if (_0x24a204 === _0x27e599[_0x34b7e9].fn && _0x2b8be7 || !_0x24a204 && _0x2b8be7) {
                  _0x27e599.splice(_0x34b7e9, 0x1);
                  break;
                }
              }
            } else {
              if (_0x540ea0) {
                _0x51fc37["_on" + _0x540ea0] = [];
              } else {
                var _0x2b9454 = Object.keys(_0x51fc37);
                for (_0x34b7e9 = 0x0; _0x34b7e9 < _0x2b9454.length; _0x34b7e9++) {
                  if (_0x2b9454[_0x34b7e9].indexOf("_on") === 0x0 && Array.isArray(_0x51fc37[_0x2b9454[_0x34b7e9]])) {
                    _0x51fc37[_0x2b9454[_0x34b7e9]] = [];
                  }
                }
              }
            }
            return _0x51fc37;
          },
          'once': function (_0x4c1e6a, _0x4644a6, _0x4b45df) {
            var _0x1592e5 = this;
            _0x1592e5.on(_0x4c1e6a, _0x4644a6, _0x4b45df, 0x1);
            return _0x1592e5;
          },
          '_emit': function (_0x1abded, _0x237a93, _0x478586) {
            var _0x2b732a = this;
            var _0x3054c8 = _0x2b732a["_on" + _0x1abded];
            for (var _0x2d97a6 = _0x3054c8.length - 0x1; _0x2d97a6 >= 0x0; _0x2d97a6--) {
              if (!_0x3054c8[_0x2d97a6].id || _0x3054c8[_0x2d97a6].id === _0x237a93 || _0x1abded === "load") {
                setTimeout(function (_0x11383f) {
                  _0x11383f.call(this, _0x237a93, _0x478586);
                }.bind(_0x2b732a, _0x3054c8[_0x2d97a6].fn), 0x0);
                if (_0x3054c8[_0x2d97a6].once) {
                  _0x2b732a.off(_0x1abded, _0x3054c8[_0x2d97a6].fn, _0x3054c8[_0x2d97a6].id);
                }
              }
            }
            _0x2b732a._loadQueue(_0x1abded);
            return _0x2b732a;
          },
          '_loadQueue': function (_0x381e43) {
            var _0x22adda = this;
            if (_0x22adda._queue.length > 0x0) {
              var _0x5cfbcb = _0x22adda._queue[0x0];
              if (_0x5cfbcb.event === _0x381e43) {
                _0x22adda._queue.shift();
                _0x22adda._loadQueue();
              }
              if (!_0x381e43) {
                _0x5cfbcb.action();
              }
            }
            return _0x22adda;
          },
          '_ended': function (_0x46195c) {
            var _0x4ccb59 = this;
            var _0x10ab86 = _0x46195c._sprite;
            if (!_0x4ccb59._webAudio && _0x46195c._node && !_0x46195c._node.paused && !_0x46195c._node.ended && _0x46195c._node.currentTime < _0x46195c._stop) {
              setTimeout(_0x4ccb59._ended.bind(_0x4ccb59, _0x46195c), 0x64);
              return _0x4ccb59;
            }
            var _0x5822d2 = !!(_0x46195c._loop || _0x4ccb59._sprite[_0x10ab86][0x2]);
            _0x4ccb59._emit("end", _0x46195c._id);
            if (!_0x4ccb59._webAudio && _0x5822d2) {
              _0x4ccb59.stop(_0x46195c._id, true).play(_0x46195c._id);
            }
            if (_0x4ccb59._webAudio && _0x5822d2) {
              _0x4ccb59._emit("play", _0x46195c._id);
              _0x46195c._seek = _0x46195c._start || 0x0;
              _0x46195c._rateSeek = 0x0;
              _0x46195c._playStart = _0x104653.ctx.currentTime;
              var _0x36ed5f = (_0x46195c._stop - _0x46195c._start) * 0x3e8 / Math.abs(_0x46195c._rate);
              _0x4ccb59._endTimers[_0x46195c._id] = setTimeout(_0x4ccb59._ended.bind(_0x4ccb59, _0x46195c), _0x36ed5f);
            }
            if (_0x4ccb59._webAudio && !_0x5822d2) {
              _0x46195c._paused = true;
              _0x46195c._ended = true;
              _0x46195c._seek = _0x46195c._start || 0x0;
              _0x46195c._rateSeek = 0x0;
              _0x4ccb59._clearTimer(_0x46195c._id);
              _0x4ccb59._cleanBuffer(_0x46195c._node);
              _0x104653._autoSuspend();
            }
            if (!_0x4ccb59._webAudio && !_0x5822d2) {
              _0x4ccb59.stop(_0x46195c._id, true);
            }
            return _0x4ccb59;
          },
          '_clearTimer': function (_0x56aba1) {
            var _0x1d2850 = this;
            if (_0x1d2850._endTimers[_0x56aba1]) {
              if (typeof _0x1d2850._endTimers[_0x56aba1] !== "function") {
                clearTimeout(_0x1d2850._endTimers[_0x56aba1]);
              } else {
                var _0x4bb959 = _0x1d2850._soundById(_0x56aba1);
                if (_0x4bb959 && _0x4bb959._node) {
                  _0x4bb959._node.removeEventListener("ended", _0x1d2850._endTimers[_0x56aba1], false);
                }
              }
              delete _0x1d2850._endTimers[_0x56aba1];
            }
            return _0x1d2850;
          },
          '_soundById': function (_0x265d12) {
            var _0x2eedd7 = this;
            for (var _0x34fd13 = 0x0; _0x34fd13 < _0x2eedd7._sounds.length; _0x34fd13++) {
              if (_0x265d12 === _0x2eedd7._sounds[_0x34fd13]._id) {
                return _0x2eedd7._sounds[_0x34fd13];
              }
            }
            return null;
          },
          '_inactiveSound': function () {
            var _0x552a85 = this;
            _0x552a85._drain();
            for (var _0x37bdd4 = 0x0; _0x37bdd4 < _0x552a85._sounds.length; _0x37bdd4++) {
              if (_0x552a85._sounds[_0x37bdd4]._ended) {
                return _0x552a85._sounds[_0x37bdd4].reset();
              }
            }
            return new _0x2c7acd(_0x552a85);
          },
          '_drain': function () {
            var _0x3c8d68 = this;
            var _0x8576f = _0x3c8d68._pool;
            var _0x39b41c = 0x0;
            var _0xf37045 = 0x0;
            if (_0x3c8d68._sounds.length < _0x8576f) {
              return;
            }
            for (_0xf37045 = 0x0; _0xf37045 < _0x3c8d68._sounds.length; _0xf37045++) {
              if (_0x3c8d68._sounds[_0xf37045]._ended) {
                _0x39b41c++;
              }
            }
            for (_0xf37045 = _0x3c8d68._sounds.length - 0x1; _0xf37045 >= 0x0; _0xf37045--) {
              if (_0x39b41c <= _0x8576f) {
                return;
              }
              if (_0x3c8d68._sounds[_0xf37045]._ended) {
                if (_0x3c8d68._webAudio && _0x3c8d68._sounds[_0xf37045]._node) {
                  _0x3c8d68._sounds[_0xf37045]._node.disconnect(0x0);
                }
                _0x3c8d68._sounds.splice(_0xf37045, 0x1);
                _0x39b41c--;
              }
            }
          },
          '_getSoundIds': function (_0x23ab01) {
            var _0x1e0b6e = this;
            if (typeof _0x23ab01 === "undefined") {
              var _0x582ed1 = [];
              for (var _0x819a23 = 0x0; _0x819a23 < _0x1e0b6e._sounds.length; _0x819a23++) {
                _0x582ed1.push(_0x1e0b6e._sounds[_0x819a23]._id);
              }
              return _0x582ed1;
            } else {
              return [_0x23ab01];
            }
          },
          '_refreshBuffer': function (_0x578724) {
            var _0x46ffe6 = this;
            _0x578724._node.bufferSource = _0x104653.ctx.createBufferSource();
            _0x578724._node.bufferSource.buffer = _0x57a2f6[_0x46ffe6._src];
            if (_0x578724._panner) {
              _0x578724._node.bufferSource.connect(_0x578724._panner);
            } else {
              _0x578724._node.bufferSource.connect(_0x578724._node);
            }
            _0x578724._node.bufferSource.loop = _0x578724._loop;
            if (_0x578724._loop) {
              _0x578724._node.bufferSource.loopStart = _0x578724._start || 0x0;
              _0x578724._node.bufferSource.loopEnd = _0x578724._stop || 0x0;
            }
            _0x578724._node.bufferSource.playbackRate.setValueAtTime(_0x578724._rate, _0x104653.ctx.currentTime);
            return _0x46ffe6;
          },
          '_cleanBuffer': function (_0x1d622c) {
            var _0x2d1c7c = this;
            var _0x59d70b = _0x104653._navigator && _0x104653._navigator.vendor.indexOf("Apple") >= 0x0;
            if (_0x104653._scratchBuffer && _0x1d622c.bufferSource) {
              _0x1d622c.bufferSource.onended = null;
              _0x1d622c.bufferSource.disconnect(0x0);
              if (_0x59d70b) {
                try {
                  _0x1d622c.bufferSource.buffer = _0x104653._scratchBuffer;
                } catch (_0x2571c9) {}
              }
            }
            _0x1d622c.bufferSource = null;
            return _0x2d1c7c;
          },
          '_clearSound': function (_0x530d3b) {
            var _0x52fab3 = /MSIE |Trident\//.test(_0x104653._navigator && _0x104653._navigator.userAgent);
            if (!_0x52fab3) {
              _0x530d3b.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
            }
          }
        };
        var _0x2c7acd = function (_0x2ccf5c) {
          this._parent = _0x2ccf5c;
          this.init();
        };
        _0x2c7acd.prototype = {
          'init': function () {
            var _0x2c9e6b = this;
            var _0x58d5e3 = _0x2c9e6b._parent;
            _0x2c9e6b._muted = _0x58d5e3._muted;
            _0x2c9e6b._loop = _0x58d5e3._loop;
            _0x2c9e6b._volume = _0x58d5e3._volume;
            _0x2c9e6b._rate = _0x58d5e3._rate;
            _0x2c9e6b._seek = 0x0;
            _0x2c9e6b._paused = true;
            _0x2c9e6b._ended = true;
            _0x2c9e6b._sprite = '__default';
            _0x2c9e6b._id = ++_0x104653._counter;
            _0x58d5e3._sounds.push(_0x2c9e6b);
            _0x2c9e6b.create();
            return _0x2c9e6b;
          },
          'create': function () {
            var _0x55e017 = this;
            var _0x1474cb = _0x55e017._parent;
            var _0x4a1476 = _0x104653._muted || _0x55e017._muted || _0x55e017._parent._muted ? 0x0 : _0x55e017._volume;
            if (_0x1474cb._webAudio) {
              _0x55e017._node = typeof _0x104653.ctx.createGain === "undefined" ? _0x104653.ctx.createGainNode() : _0x104653.ctx.createGain();
              _0x55e017._node.gain.setValueAtTime(_0x4a1476, _0x104653.ctx.currentTime);
              _0x55e017._node.paused = true;
              _0x55e017._node.connect(_0x104653.masterGain);
            } else if (!_0x104653.noAudio) {
              _0x55e017._node = _0x104653._obtainHtml5Audio();
              _0x55e017._errorFn = _0x55e017._errorListener.bind(_0x55e017);
              _0x55e017._node.addEventListener("error", _0x55e017._errorFn, false);
              _0x55e017._loadFn = _0x55e017._loadListener.bind(_0x55e017);
              _0x55e017._node.addEventListener(_0x104653._canPlayEvent, _0x55e017._loadFn, false);
              _0x55e017._endFn = _0x55e017._endListener.bind(_0x55e017);
              _0x55e017._node.addEventListener("ended", _0x55e017._endFn, false);
              _0x55e017._node.src = _0x1474cb._src;
              _0x55e017._node.preload = _0x1474cb._preload === true ? "auto" : _0x1474cb._preload;
              _0x55e017._node.volume = _0x4a1476 * _0x104653.volume();
              _0x55e017._node.load();
            }
            return _0x55e017;
          },
          'reset': function () {
            var _0x7727bb = this;
            var _0x4a0eca = _0x7727bb._parent;
            _0x7727bb._muted = _0x4a0eca._muted;
            _0x7727bb._loop = _0x4a0eca._loop;
            _0x7727bb._volume = _0x4a0eca._volume;
            _0x7727bb._rate = _0x4a0eca._rate;
            _0x7727bb._seek = 0x0;
            _0x7727bb._rateSeek = 0x0;
            _0x7727bb._paused = true;
            _0x7727bb._ended = true;
            _0x7727bb._sprite = "__default";
            _0x7727bb._id = ++_0x104653._counter;
            return _0x7727bb;
          },
          '_errorListener': function () {
            var _0x309b9a = this;
            _0x309b9a._parent._emit("loaderror", _0x309b9a._id, _0x309b9a._node.error ? _0x309b9a._node.error.code : 0x0);
            _0x309b9a._node.removeEventListener("error", _0x309b9a._errorFn, false);
          },
          '_loadListener': function () {
            var _0x364e0a = this;
            var _0x36d0d2 = _0x364e0a._parent;
            _0x36d0d2._duration = Math.ceil(_0x364e0a._node.duration * 0xa) / 0xa;
            if (Object.keys(_0x36d0d2._sprite).length === 0x0) {
              _0x36d0d2._sprite = {
                '__default': [0x0, _0x36d0d2._duration * 0x3e8]
              };
            }
            if (_0x36d0d2._state !== "loaded") {
              _0x36d0d2._state = "loaded";
              _0x36d0d2._emit("load");
              _0x36d0d2._loadQueue();
            }
            _0x364e0a._node.removeEventListener(_0x104653._canPlayEvent, _0x364e0a._loadFn, false);
          },
          '_endListener': function () {
            var _0x5abedc = this;
            var _0x3a4999 = _0x5abedc._parent;
            if (_0x3a4999._duration === Infinity) {
              _0x3a4999._duration = Math.ceil(_0x5abedc._node.duration * 0xa) / 0xa;
              if (_0x3a4999._sprite.__default[0x1] === Infinity) {
                _0x3a4999._sprite.__default[0x1] = _0x3a4999._duration * 0x3e8;
              }
              _0x3a4999._ended(_0x5abedc);
            }
            _0x5abedc._node.removeEventListener('ended', _0x5abedc._endFn, false);
          }
        };
        var _0x57a2f6 = {};
        var _0x36cd6d = function (_0x2c39b4) {
          var _0x823db5 = _0x2c39b4._src;
          if (_0x57a2f6[_0x823db5]) {
            _0x2c39b4._duration = _0x57a2f6[_0x823db5].duration;
            _0x407024(_0x2c39b4);
            return;
          }
          if (/^data:[^;]+;base64,/.test(_0x823db5)) {
            var _0x34c6de = atob(_0x823db5.split(',')[0x1]);
            var _0x56361c = new Uint8Array(_0x34c6de.length);
            for (var _0x37705e = 0x0; _0x37705e < _0x34c6de.length; ++_0x37705e) {
              _0x56361c[_0x37705e] = _0x34c6de.charCodeAt(_0x37705e);
            }
            _0x40597c(_0x56361c.buffer, _0x2c39b4);
          } else {
            var _0x32fba8 = new XMLHttpRequest();
            _0x32fba8.open(_0x2c39b4._xhr.method, _0x823db5, true);
            _0x32fba8.withCredentials = _0x2c39b4._xhr.withCredentials;
            _0x32fba8.responseType = "arraybuffer";
            if (_0x2c39b4._xhr.headers) {
              Object.keys(_0x2c39b4._xhr.headers).forEach(function (_0x188637) {
                _0x32fba8.setRequestHeader(_0x188637, _0x2c39b4._xhr.headers[_0x188637]);
              });
            }
            _0x32fba8.onload = function () {
              var _0x324872 = (_0x32fba8.status + '')[0x0];
              if (_0x324872 !== '0' && _0x324872 !== '2' && _0x324872 !== '3') {
                _0x2c39b4._emit("loaderror", null, "Failed loading audio file with status: " + _0x32fba8.status + '.');
                return;
              }
              _0x40597c(_0x32fba8.response, _0x2c39b4);
            };
            _0x32fba8.onerror = function () {
              if (_0x2c39b4._webAudio) {
                _0x2c39b4._html5 = true;
                _0x2c39b4._webAudio = false;
                _0x2c39b4._sounds = [];
                delete _0x57a2f6[_0x823db5];
                _0x2c39b4.load();
              }
            };
            _0x4eae88(_0x32fba8);
          }
        };
        var _0x4eae88 = function (_0x9a42e3) {
          try {
            _0x9a42e3.send();
          } catch (_0x44f74a) {
            _0x9a42e3.onerror();
          }
        };
        var _0x40597c = function (_0x1ebb1c, _0x48414a) {
          var _0x384212 = function () {
            _0x48414a._emit("loaderror", null, "Decoding audio data failed.");
          };
          var _0x117592 = function (_0x4023d6) {
            if (_0x4023d6 && _0x48414a._sounds.length > 0x0) {
              _0x57a2f6[_0x48414a._src] = _0x4023d6;
              _0x407024(_0x48414a, _0x4023d6);
            } else {
              _0x384212();
            }
          };
          if (typeof Promise !== 'undefined' && _0x104653.ctx.decodeAudioData.length === 0x1) {
            _0x104653.ctx.decodeAudioData(_0x1ebb1c).then(_0x117592)["catch"](_0x384212);
          } else {
            _0x104653.ctx.decodeAudioData(_0x1ebb1c, _0x117592, _0x384212);
          }
        };
        var _0x407024 = function (_0x1dd1bb, _0x436540) {
          if (_0x436540 && !_0x1dd1bb._duration) {
            _0x1dd1bb._duration = _0x436540.duration;
          }
          if (Object.keys(_0x1dd1bb._sprite).length === 0x0) {
            _0x1dd1bb._sprite = {
              '__default': [0x0, _0x1dd1bb._duration * 0x3e8]
            };
          }
          if (_0x1dd1bb._state !== 'loaded') {
            _0x1dd1bb._state = "loaded";
            _0x1dd1bb._emit('load');
            _0x1dd1bb._loadQueue();
          }
        };
        var _0x42ce97 = function () {
          if (!_0x104653.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              _0x104653.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              _0x104653.ctx = new webkitAudioContext();
            } else {
              _0x104653.usingWebAudio = false;
            }
          } catch (_0x9fbe3e) {
            _0x104653.usingWebAudio = false;
          }
          if (!_0x104653.ctx) {
            _0x104653.usingWebAudio = false;
          }
          var _0xb73709 = /iP(hone|od|ad)/.test(_0x104653._navigator && _0x104653._navigator.platform);
          var _0x22e12f = _0x104653._navigator && _0x104653._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var _0x5e6034 = _0x22e12f ? parseInt(_0x22e12f[0x1], 0xa) : null;
          if (_0xb73709 && _0x5e6034 && _0x5e6034 < 0x9) {
            var _0x16565f = /safari/.test(_0x104653._navigator && _0x104653._navigator.userAgent.toLowerCase());
            if (_0x104653._navigator && !_0x16565f) {
              _0x104653.usingWebAudio = false;
            }
          }
          if (_0x104653.usingWebAudio) {
            _0x104653.masterGain = typeof _0x104653.ctx.createGain === "undefined" ? _0x104653.ctx.createGainNode() : _0x104653.ctx.createGain();
            _0x104653.masterGain.gain.setValueAtTime(_0x104653._muted ? 0x0 : _0x104653._volume, _0x104653.ctx.currentTime);
            _0x104653.masterGain.connect(_0x104653.ctx.destination);
          }
          _0x104653._setup();
        };
        _0x3f628d = [];
        _0xf8eec2 = function () {
          return {
            'Howler': _0x104653,
            'Howl': _0x383181
          };
        }.apply(_0x5c89c8, _0x3f628d);
        !(_0xf8eec2 !== undefined && (_0xdb7ba6.exports = _0xf8eec2));
        _0x5c89c8.Howler = _0x104653;
        _0x5c89c8.Howl = _0x383181;
        if (typeof _0x5ac100.g !== "undefined") {
          _0x5ac100.g.HowlerGlobal = _0x11ad09;
          _0x5ac100.g.Howler = _0x104653;
          _0x5ac100.g.Howl = _0x383181;
          _0x5ac100.g.Sound = _0x2c7acd;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = _0x11ad09;
          window.Howler = _0x104653;
          window.Howl = _0x383181;
          window.Sound = _0x2c7acd;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0x0, 0x0, 0x0];
        HowlerGlobal.prototype._orientation = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0];
        HowlerGlobal.prototype.stereo = function (_0x28be7c) {
          var _0x181f8a = this;
          if (!_0x181f8a.ctx || !_0x181f8a.ctx.listener) {
            return _0x181f8a;
          }
          for (var _0x55c59d = _0x181f8a._howls.length - 0x1; _0x55c59d >= 0x0; _0x55c59d--) {
            _0x181f8a._howls[_0x55c59d].stereo(_0x28be7c);
          }
          return _0x181f8a;
        };
        HowlerGlobal.prototype.pos = function (_0x5b55c3, _0x433ecd, _0x89a929) {
          var _0x40d2b9 = this;
          if (!_0x40d2b9.ctx || !_0x40d2b9.ctx.listener) {
            return _0x40d2b9;
          }
          _0x433ecd = typeof _0x433ecd !== 'number' ? _0x40d2b9._pos[0x1] : _0x433ecd;
          _0x89a929 = typeof _0x89a929 !== "number" ? _0x40d2b9._pos[0x2] : _0x89a929;
          if (typeof _0x5b55c3 === 'number') {
            _0x40d2b9._pos = [_0x5b55c3, _0x433ecd, _0x89a929];
            if (typeof _0x40d2b9.ctx.listener.positionX !== 'undefined') {
              _0x40d2b9.ctx.listener.positionX.setTargetAtTime(_0x40d2b9._pos[0x0], Howler.ctx.currentTime, 0.1);
              _0x40d2b9.ctx.listener.positionY.setTargetAtTime(_0x40d2b9._pos[0x1], Howler.ctx.currentTime, 0.1);
              _0x40d2b9.ctx.listener.positionZ.setTargetAtTime(_0x40d2b9._pos[0x2], Howler.ctx.currentTime, 0.1);
            } else {
              _0x40d2b9.ctx.listener.setPosition(_0x40d2b9._pos[0x0], _0x40d2b9._pos[0x1], _0x40d2b9._pos[0x2]);
            }
          } else {
            return _0x40d2b9._pos;
          }
          return _0x40d2b9;
        };
        HowlerGlobal.prototype.orientation = function (_0x1789cd, _0x5e6d8a, _0x31e0e0, _0x1a8016, _0x1dbe0b, _0x8ab679) {
          var _0xba310c = this;
          if (!_0xba310c.ctx || !_0xba310c.ctx.listener) {
            return _0xba310c;
          }
          var _0x2a5efb = _0xba310c._orientation;
          _0x5e6d8a = typeof _0x5e6d8a !== "number" ? _0x2a5efb[0x1] : _0x5e6d8a;
          _0x31e0e0 = typeof _0x31e0e0 !== "number" ? _0x2a5efb[0x2] : _0x31e0e0;
          _0x1a8016 = typeof _0x1a8016 !== 'number' ? _0x2a5efb[0x3] : _0x1a8016;
          _0x1dbe0b = typeof _0x1dbe0b !== "number" ? _0x2a5efb[0x4] : _0x1dbe0b;
          _0x8ab679 = typeof _0x8ab679 !== "number" ? _0x2a5efb[0x5] : _0x8ab679;
          if (typeof _0x1789cd === "number") {
            _0xba310c._orientation = [_0x1789cd, _0x5e6d8a, _0x31e0e0, _0x1a8016, _0x1dbe0b, _0x8ab679];
            if (typeof _0xba310c.ctx.listener.forwardX !== "undefined") {
              _0xba310c.ctx.listener.forwardX.setTargetAtTime(_0x1789cd, Howler.ctx.currentTime, 0.1);
              _0xba310c.ctx.listener.forwardY.setTargetAtTime(_0x5e6d8a, Howler.ctx.currentTime, 0.1);
              _0xba310c.ctx.listener.forwardZ.setTargetAtTime(_0x31e0e0, Howler.ctx.currentTime, 0.1);
              _0xba310c.ctx.listener.upX.setTargetAtTime(_0x1a8016, Howler.ctx.currentTime, 0.1);
              _0xba310c.ctx.listener.upY.setTargetAtTime(_0x1dbe0b, Howler.ctx.currentTime, 0.1);
              _0xba310c.ctx.listener.upZ.setTargetAtTime(_0x8ab679, Howler.ctx.currentTime, 0.1);
            } else {
              _0xba310c.ctx.listener.setOrientation(_0x1789cd, _0x5e6d8a, _0x31e0e0, _0x1a8016, _0x1dbe0b, _0x8ab679);
            }
          } else {
            return _0x2a5efb;
          }
          return _0xba310c;
        };
        Howl.prototype.init = function (_0xaebd9d) {
          return function (_0x192d76) {
            var _0x454e8d = this;
            _0x454e8d._orientation = _0x192d76.orientation || [0x1, 0x0, 0x0];
            _0x454e8d._stereo = _0x192d76.stereo || null;
            _0x454e8d._pos = _0x192d76.pos || null;
            _0x454e8d._pannerAttr = {
              'coneInnerAngle': typeof _0x192d76.coneInnerAngle !== "undefined" ? _0x192d76.coneInnerAngle : 0x168,
              'coneOuterAngle': typeof _0x192d76.coneOuterAngle !== "undefined" ? _0x192d76.coneOuterAngle : 0x168,
              'coneOuterGain': typeof _0x192d76.coneOuterGain !== 'undefined' ? _0x192d76.coneOuterGain : 0x0,
              'distanceModel': typeof _0x192d76.distanceModel !== "undefined" ? _0x192d76.distanceModel : "inverse",
              'maxDistance': typeof _0x192d76.maxDistance !== "undefined" ? _0x192d76.maxDistance : 0x2710,
              'panningModel': typeof _0x192d76.panningModel !== "undefined" ? _0x192d76.panningModel : "HRTF",
              'refDistance': typeof _0x192d76.refDistance !== "undefined" ? _0x192d76.refDistance : 0x1,
              'rolloffFactor': typeof _0x192d76.rolloffFactor !== "undefined" ? _0x192d76.rolloffFactor : 0x1
            };
            _0x454e8d._onstereo = _0x192d76.onstereo ? [{
              'fn': _0x192d76.onstereo
            }] : [];
            _0x454e8d._onpos = _0x192d76.onpos ? [{
              'fn': _0x192d76.onpos
            }] : [];
            _0x454e8d._onorientation = _0x192d76.onorientation ? [{
              'fn': _0x192d76.onorientation
            }] : [];
            return _0xaebd9d.call(this, _0x192d76);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (_0x137fc3, _0x3ed92b) {
          var _0x1fd826 = this;
          if (!_0x1fd826._webAudio) {
            return _0x1fd826;
          }
          if (_0x1fd826._state !== 'loaded') {
            _0x1fd826._queue.push({
              'event': 'stereo',
              'action': function () {
                _0x1fd826.stereo(_0x137fc3, _0x3ed92b);
              }
            });
            return _0x1fd826;
          }
          var _0x598e47 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof _0x3ed92b === "undefined") {
            if (typeof _0x137fc3 === "number") {
              _0x1fd826._stereo = _0x137fc3;
              _0x1fd826._pos = [_0x137fc3, 0x0, 0x0];
            } else {
              return _0x1fd826._stereo;
            }
          }
          var _0x25e20c = _0x1fd826._getSoundIds(_0x3ed92b);
          for (var _0x2a0dec = 0x0; _0x2a0dec < _0x25e20c.length; _0x2a0dec++) {
            var _0xd58179 = _0x1fd826._soundById(_0x25e20c[_0x2a0dec]);
            if (_0xd58179) {
              if (typeof _0x137fc3 === "number") {
                _0xd58179._stereo = _0x137fc3;
                _0xd58179._pos = [_0x137fc3, 0x0, 0x0];
                if (_0xd58179._node) {
                  _0xd58179._pannerAttr.panningModel = "equalpower";
                  if (!_0xd58179._panner || !_0xd58179._panner.pan) {
                    _0x40b731(_0xd58179, _0x598e47);
                  }
                  if (_0x598e47 === "spatial") {
                    if (typeof _0xd58179._panner.positionX !== "undefined") {
                      _0xd58179._panner.positionX.setValueAtTime(_0x137fc3, Howler.ctx.currentTime);
                      _0xd58179._panner.positionY.setValueAtTime(0x0, Howler.ctx.currentTime);
                      _0xd58179._panner.positionZ.setValueAtTime(0x0, Howler.ctx.currentTime);
                    } else {
                      _0xd58179._panner.setPosition(_0x137fc3, 0x0, 0x0);
                    }
                  } else {
                    _0xd58179._panner.pan.setValueAtTime(_0x137fc3, Howler.ctx.currentTime);
                  }
                }
                _0x1fd826._emit("stereo", _0xd58179._id);
              } else {
                return _0xd58179._stereo;
              }
            }
          }
          return _0x1fd826;
        };
        Howl.prototype.pos = function (_0x2e177a, _0x17de2b, _0x44ed72, _0x2443fc) {
          var _0x3d6799 = this;
          if (!_0x3d6799._webAudio) {
            return _0x3d6799;
          }
          if (_0x3d6799._state !== "loaded") {
            _0x3d6799._queue.push({
              'event': "pos",
              'action': function () {
                _0x3d6799.pos(_0x2e177a, _0x17de2b, _0x44ed72, _0x2443fc);
              }
            });
            return _0x3d6799;
          }
          _0x17de2b = typeof _0x17de2b !== 'number' ? 0x0 : _0x17de2b;
          _0x44ed72 = typeof _0x44ed72 !== "number" ? -0.5 : _0x44ed72;
          if (typeof _0x2443fc === "undefined") {
            if (typeof _0x2e177a === 'number') {
              _0x3d6799._pos = [_0x2e177a, _0x17de2b, _0x44ed72];
            } else {
              return _0x3d6799._pos;
            }
          }
          var _0xef6c23 = _0x3d6799._getSoundIds(_0x2443fc);
          for (var _0x4cce23 = 0x0; _0x4cce23 < _0xef6c23.length; _0x4cce23++) {
            var _0xafd39c = _0x3d6799._soundById(_0xef6c23[_0x4cce23]);
            if (_0xafd39c) {
              if (typeof _0x2e177a === "number") {
                _0xafd39c._pos = [_0x2e177a, _0x17de2b, _0x44ed72];
                if (_0xafd39c._node) {
                  if (!_0xafd39c._panner || _0xafd39c._panner.pan) {
                    _0x40b731(_0xafd39c, "spatial");
                  }
                  if (typeof _0xafd39c._panner.positionX !== "undefined") {
                    _0xafd39c._panner.positionX.setValueAtTime(_0x2e177a, Howler.ctx.currentTime);
                    _0xafd39c._panner.positionY.setValueAtTime(_0x17de2b, Howler.ctx.currentTime);
                    _0xafd39c._panner.positionZ.setValueAtTime(_0x44ed72, Howler.ctx.currentTime);
                  } else {
                    _0xafd39c._panner.setPosition(_0x2e177a, _0x17de2b, _0x44ed72);
                  }
                }
                _0x3d6799._emit("pos", _0xafd39c._id);
              } else {
                return _0xafd39c._pos;
              }
            }
          }
          return _0x3d6799;
        };
        Howl.prototype.orientation = function (_0x36213d, _0x239f65, _0x2d7a63, _0x120fc7) {
          var _0x321302 = this;
          if (!_0x321302._webAudio) {
            return _0x321302;
          }
          if (_0x321302._state !== "loaded") {
            _0x321302._queue.push({
              'event': 'orientation',
              'action': function () {
                _0x321302.orientation(_0x36213d, _0x239f65, _0x2d7a63, _0x120fc7);
              }
            });
            return _0x321302;
          }
          _0x239f65 = typeof _0x239f65 !== "number" ? _0x321302._orientation[0x1] : _0x239f65;
          _0x2d7a63 = typeof _0x2d7a63 !== "number" ? _0x321302._orientation[0x2] : _0x2d7a63;
          if (typeof _0x120fc7 === "undefined") {
            if (typeof _0x36213d === 'number') {
              _0x321302._orientation = [_0x36213d, _0x239f65, _0x2d7a63];
            } else {
              return _0x321302._orientation;
            }
          }
          var _0x3409f2 = _0x321302._getSoundIds(_0x120fc7);
          for (var _0x2cf9f1 = 0x0; _0x2cf9f1 < _0x3409f2.length; _0x2cf9f1++) {
            var _0x2bcfbb = _0x321302._soundById(_0x3409f2[_0x2cf9f1]);
            if (_0x2bcfbb) {
              if (typeof _0x36213d === "number") {
                _0x2bcfbb._orientation = [_0x36213d, _0x239f65, _0x2d7a63];
                if (_0x2bcfbb._node) {
                  if (!_0x2bcfbb._panner) {
                    if (!_0x2bcfbb._pos) {
                      _0x2bcfbb._pos = _0x321302._pos || [0x0, 0x0, -0.5];
                    }
                    _0x40b731(_0x2bcfbb, "spatial");
                  }
                  if (typeof _0x2bcfbb._panner.orientationX !== "undefined") {
                    _0x2bcfbb._panner.orientationX.setValueAtTime(_0x36213d, Howler.ctx.currentTime);
                    _0x2bcfbb._panner.orientationY.setValueAtTime(_0x239f65, Howler.ctx.currentTime);
                    _0x2bcfbb._panner.orientationZ.setValueAtTime(_0x2d7a63, Howler.ctx.currentTime);
                  } else {
                    _0x2bcfbb._panner.setOrientation(_0x36213d, _0x239f65, _0x2d7a63);
                  }
                }
                _0x321302._emit('orientation', _0x2bcfbb._id);
              } else {
                return _0x2bcfbb._orientation;
              }
            }
          }
          return _0x321302;
        };
        Howl.prototype.pannerAttr = function () {
          var _0x3da2cc = this;
          var _0x3717f1;
          var _0x464004;
          var _0x5457be;
          if (!_0x3da2cc._webAudio) {
            return _0x3da2cc;
          }
          if (arguments.length === 0x0) {
            return _0x3da2cc._pannerAttr;
          } else {
            if (arguments.length === 0x1) {
              if (typeof arguments[0x0] === 'object') {
                _0x3717f1 = arguments[0x0];
                if (typeof _0x464004 === "undefined") {
                  if (!_0x3717f1.pannerAttr) {
                    _0x3717f1.pannerAttr = {
                      'coneInnerAngle': _0x3717f1.coneInnerAngle,
                      'coneOuterAngle': _0x3717f1.coneOuterAngle,
                      'coneOuterGain': _0x3717f1.coneOuterGain,
                      'distanceModel': _0x3717f1.distanceModel,
                      'maxDistance': _0x3717f1.maxDistance,
                      'refDistance': _0x3717f1.refDistance,
                      'rolloffFactor': _0x3717f1.rolloffFactor,
                      'panningModel': _0x3717f1.panningModel
                    };
                  }
                  _0x3da2cc._pannerAttr = {
                    'coneInnerAngle': typeof _0x3717f1.pannerAttr.coneInnerAngle !== "undefined" ? _0x3717f1.pannerAttr.coneInnerAngle : _0x3da2cc._coneInnerAngle,
                    'coneOuterAngle': typeof _0x3717f1.pannerAttr.coneOuterAngle !== "undefined" ? _0x3717f1.pannerAttr.coneOuterAngle : _0x3da2cc._coneOuterAngle,
                    'coneOuterGain': typeof _0x3717f1.pannerAttr.coneOuterGain !== "undefined" ? _0x3717f1.pannerAttr.coneOuterGain : _0x3da2cc._coneOuterGain,
                    'distanceModel': typeof _0x3717f1.pannerAttr.distanceModel !== 'undefined' ? _0x3717f1.pannerAttr.distanceModel : _0x3da2cc._distanceModel,
                    'maxDistance': typeof _0x3717f1.pannerAttr.maxDistance !== "undefined" ? _0x3717f1.pannerAttr.maxDistance : _0x3da2cc._maxDistance,
                    'refDistance': typeof _0x3717f1.pannerAttr.refDistance !== 'undefined' ? _0x3717f1.pannerAttr.refDistance : _0x3da2cc._refDistance,
                    'rolloffFactor': typeof _0x3717f1.pannerAttr.rolloffFactor !== "undefined" ? _0x3717f1.pannerAttr.rolloffFactor : _0x3da2cc._rolloffFactor,
                    'panningModel': typeof _0x3717f1.pannerAttr.panningModel !== 'undefined' ? _0x3717f1.pannerAttr.panningModel : _0x3da2cc._panningModel
                  };
                }
              } else {
                _0x5457be = _0x3da2cc._soundById(parseInt(arguments[0x0], 0xa));
                return _0x5457be ? _0x5457be._pannerAttr : _0x3da2cc._pannerAttr;
              }
            } else if (arguments.length === 0x2) {
              _0x3717f1 = arguments[0x0];
              _0x464004 = parseInt(arguments[0x1], 0xa);
            }
          }
          var _0x2d74f0 = _0x3da2cc._getSoundIds(_0x464004);
          for (var _0x2d5f18 = 0x0; _0x2d5f18 < _0x2d74f0.length; _0x2d5f18++) {
            _0x5457be = _0x3da2cc._soundById(_0x2d74f0[_0x2d5f18]);
            if (_0x5457be) {
              var _0x1ed23f = _0x5457be._pannerAttr;
              _0x1ed23f = {
                'coneInnerAngle': typeof _0x3717f1.coneInnerAngle !== "undefined" ? _0x3717f1.coneInnerAngle : _0x1ed23f.coneInnerAngle,
                'coneOuterAngle': typeof _0x3717f1.coneOuterAngle !== "undefined" ? _0x3717f1.coneOuterAngle : _0x1ed23f.coneOuterAngle,
                'coneOuterGain': typeof _0x3717f1.coneOuterGain !== "undefined" ? _0x3717f1.coneOuterGain : _0x1ed23f.coneOuterGain,
                'distanceModel': typeof _0x3717f1.distanceModel !== "undefined" ? _0x3717f1.distanceModel : _0x1ed23f.distanceModel,
                'maxDistance': typeof _0x3717f1.maxDistance !== "undefined" ? _0x3717f1.maxDistance : _0x1ed23f.maxDistance,
                'refDistance': typeof _0x3717f1.refDistance !== "undefined" ? _0x3717f1.refDistance : _0x1ed23f.refDistance,
                'rolloffFactor': typeof _0x3717f1.rolloffFactor !== "undefined" ? _0x3717f1.rolloffFactor : _0x1ed23f.rolloffFactor,
                'panningModel': typeof _0x3717f1.panningModel !== 'undefined' ? _0x3717f1.panningModel : _0x1ed23f.panningModel
              };
              var _0x2501e5 = _0x5457be._panner;
              if (_0x2501e5) {
                _0x2501e5.coneInnerAngle = _0x1ed23f.coneInnerAngle;
                _0x2501e5.coneOuterAngle = _0x1ed23f.coneOuterAngle;
                _0x2501e5.coneOuterGain = _0x1ed23f.coneOuterGain;
                _0x2501e5.distanceModel = _0x1ed23f.distanceModel;
                _0x2501e5.maxDistance = _0x1ed23f.maxDistance;
                _0x2501e5.refDistance = _0x1ed23f.refDistance;
                _0x2501e5.rolloffFactor = _0x1ed23f.rolloffFactor;
                _0x2501e5.panningModel = _0x1ed23f.panningModel;
              } else {
                if (!_0x5457be._pos) {
                  _0x5457be._pos = _0x3da2cc._pos || [0x0, 0x0, -0.5];
                }
                _0x40b731(_0x5457be, "spatial");
              }
            }
          }
          return _0x3da2cc;
        };
        Sound.prototype.init = function (_0x56cf65) {
          return function () {
            var _0x4a4854 = this;
            var _0x1e1198 = _0x4a4854._parent;
            _0x4a4854._orientation = _0x1e1198._orientation;
            _0x4a4854._stereo = _0x1e1198._stereo;
            _0x4a4854._pos = _0x1e1198._pos;
            _0x4a4854._pannerAttr = _0x1e1198._pannerAttr;
            _0x56cf65.call(this);
            if (_0x4a4854._stereo) {
              _0x1e1198.stereo(_0x4a4854._stereo);
            } else if (_0x4a4854._pos) {
              _0x1e1198.pos(_0x4a4854._pos[0x0], _0x4a4854._pos[0x1], _0x4a4854._pos[0x2], _0x4a4854._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (_0x3c7278) {
          return function () {
            var _0x509ded = this;
            var _0x4996f0 = _0x509ded._parent;
            _0x509ded._orientation = _0x4996f0._orientation;
            _0x509ded._stereo = _0x4996f0._stereo;
            _0x509ded._pos = _0x4996f0._pos;
            _0x509ded._pannerAttr = _0x4996f0._pannerAttr;
            if (_0x509ded._stereo) {
              _0x4996f0.stereo(_0x509ded._stereo);
            } else {
              if (_0x509ded._pos) {
                _0x4996f0.pos(_0x509ded._pos[0x0], _0x509ded._pos[0x1], _0x509ded._pos[0x2], _0x509ded._id);
              } else if (_0x509ded._panner) {
                _0x509ded._panner.disconnect(0x0);
                _0x509ded._panner = undefined;
                _0x4996f0._refreshBuffer(_0x509ded);
              }
            }
            return _0x3c7278.call(this);
          };
        }(Sound.prototype.reset);
        var _0x40b731 = function (_0x122075, _0x1684ea) {
          _0x1684ea = _0x1684ea || "spatial";
          if (_0x1684ea === "spatial") {
            _0x122075._panner = Howler.ctx.createPanner();
            _0x122075._panner.coneInnerAngle = _0x122075._pannerAttr.coneInnerAngle;
            _0x122075._panner.coneOuterAngle = _0x122075._pannerAttr.coneOuterAngle;
            _0x122075._panner.coneOuterGain = _0x122075._pannerAttr.coneOuterGain;
            _0x122075._panner.distanceModel = _0x122075._pannerAttr.distanceModel;
            _0x122075._panner.maxDistance = _0x122075._pannerAttr.maxDistance;
            _0x122075._panner.refDistance = _0x122075._pannerAttr.refDistance;
            _0x122075._panner.rolloffFactor = _0x122075._pannerAttr.rolloffFactor;
            _0x122075._panner.panningModel = _0x122075._pannerAttr.panningModel;
            if (typeof _0x122075._panner.positionX !== 'undefined') {
              _0x122075._panner.positionX.setValueAtTime(_0x122075._pos[0x0], Howler.ctx.currentTime);
              _0x122075._panner.positionY.setValueAtTime(_0x122075._pos[0x1], Howler.ctx.currentTime);
              _0x122075._panner.positionZ.setValueAtTime(_0x122075._pos[0x2], Howler.ctx.currentTime);
            } else {
              _0x122075._panner.setPosition(_0x122075._pos[0x0], _0x122075._pos[0x1], _0x122075._pos[0x2]);
            }
            if (typeof _0x122075._panner.orientationX !== "undefined") {
              _0x122075._panner.orientationX.setValueAtTime(_0x122075._orientation[0x0], Howler.ctx.currentTime);
              _0x122075._panner.orientationY.setValueAtTime(_0x122075._orientation[0x1], Howler.ctx.currentTime);
              _0x122075._panner.orientationZ.setValueAtTime(_0x122075._orientation[0x2], Howler.ctx.currentTime);
            } else {
              _0x122075._panner.setOrientation(_0x122075._orientation[0x0], _0x122075._orientation[0x1], _0x122075._orientation[0x2]);
            }
          } else {
            _0x122075._panner = Howler.ctx.createStereoPanner();
            _0x122075._panner.pan.setValueAtTime(_0x122075._stereo, Howler.ctx.currentTime);
          }
          _0x122075._panner.connect(_0x122075._node);
          if (!_0x122075._paused) {
            _0x122075._parent.pause(_0x122075._id, true).play(_0x122075._id, true);
          }
        };
      })();
    },
    './node_modules/@socket.io/component-emitter/index.mjs': (_0xa288ec, _0x4f38b3, _0x5e568a) => {
      'use strict';

      _0x5e568a.r(_0x4f38b3);
      _0x5e568a.d(_0x4f38b3, {
        'Emitter': () => _0x30f360
      });
      function _0x30f360(_0x4dff30) {
        if (_0x4dff30) {
          return _0x2a049f(_0x4dff30);
        }
      }
      function _0x2a049f(_0x1abd13) {
        for (var _0xca4bd in _0x30f360.prototype) {
          _0x1abd13[_0xca4bd] = _0x30f360.prototype[_0xca4bd];
        }
        return _0x1abd13;
      }
      _0x30f360.prototype.on = _0x30f360.prototype.addEventListener = function (_0x59813d, _0x141bce) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + _0x59813d] = this._callbacks['$' + _0x59813d] || []).push(_0x141bce);
        return this;
      };
      _0x30f360.prototype.once = function (_0x3cc5f3, _0x2f5415) {
        function _0xd3d17d() {
          this.off(_0x3cc5f3, _0xd3d17d);
          _0x2f5415.apply(this, arguments);
        }
        _0xd3d17d.fn = _0x2f5415;
        this.on(_0x3cc5f3, _0xd3d17d);
        return this;
      };
      _0x30f360.prototype.off = _0x30f360.prototype.removeListener = _0x30f360.prototype.removeAllListeners = _0x30f360.prototype.removeEventListener = function (_0x2b38b4, _0x1432e6) {
        this._callbacks = this._callbacks || {};
        if (0x0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var _0x3e3d27 = this._callbacks['$' + _0x2b38b4];
        if (!_0x3e3d27) {
          return this;
        }
        if (0x1 == arguments.length) {
          delete this._callbacks['$' + _0x2b38b4];
          return this;
        }
        var _0x3bcb81;
        for (var _0x319b93 = 0x0; _0x319b93 < _0x3e3d27.length; _0x319b93++) {
          _0x3bcb81 = _0x3e3d27[_0x319b93];
          if (_0x3bcb81 === _0x1432e6 || _0x3bcb81.fn === _0x1432e6) {
            _0x3e3d27.splice(_0x319b93, 0x1);
            break;
          }
        }
        if (_0x3e3d27.length === 0x0) {
          delete this._callbacks['$' + _0x2b38b4];
        }
        return this;
      };
      _0x30f360.prototype.emit = function (_0x30eb03) {
        this._callbacks = this._callbacks || {};
        var _0x50057c = new Array(arguments.length - 0x1);
        var _0x14d86c = this._callbacks['$' + _0x30eb03];
        for (var _0x5e00dd = 0x1; _0x5e00dd < arguments.length; _0x5e00dd++) {
          _0x50057c[_0x5e00dd - 0x1] = arguments[_0x5e00dd];
        }
        if (_0x14d86c) {
          _0x14d86c = _0x14d86c.slice(0x0);
          var _0x5e00dd = 0x0;
          for (var _0x595b83 = _0x14d86c.length; _0x5e00dd < _0x595b83; ++_0x5e00dd) {
            _0x14d86c[_0x5e00dd].apply(this, _0x50057c);
          }
        }
        return this;
      };
      _0x30f360.prototype.emitReserved = _0x30f360.prototype.emit;
      _0x30f360.prototype.listeners = function (_0x3f7d1d) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + _0x3f7d1d] || [];
      };
      _0x30f360.prototype.hasListeners = function (_0x11e5d7) {
        return !!this.listeners(_0x11e5d7).length;
      };
    },
    './node_modules/engine.io-client/build/esm/contrib/has-cors.js': (_0x1324e1, _0x521154, _0xe73c94) => {
      'use strict';

      _0xe73c94.r(_0x521154);
      _0xe73c94.d(_0x521154, {
        'hasCORS': () => _0x51f0bf
      });
      let _0x1301e7 = false;
      try {
        _0x1301e7 = typeof XMLHttpRequest !== "undefined" && 'withCredentials' in new XMLHttpRequest();
      } catch (_0x1f838c) {}
      const _0x51f0bf = _0x1301e7;
    },
    './node_modules/engine.io-client/build/esm/contrib/parseqs.js': (_0x198ba0, _0x261af8, _0x90e426) => {
      'use strict';

      _0x90e426.r(_0x261af8);
      _0x90e426.d(_0x261af8, {
        'decode': () => _0xc803e4,
        'encode': () => _0x4c20b5
      });
      function _0x4c20b5(_0x4b79b4) {
        let _0x5dc9ad = '';
        for (let _0x39caca in _0x4b79b4) {
          if (_0x4b79b4.hasOwnProperty(_0x39caca)) {
            if (_0x5dc9ad.length) {
              _0x5dc9ad += '&';
            }
            _0x5dc9ad += encodeURIComponent(_0x39caca) + '=' + encodeURIComponent(_0x4b79b4[_0x39caca]);
          }
        }
        return _0x5dc9ad;
      }
      function _0xc803e4(_0x5cc0b4) {
        let _0x3bcca3 = {};
        let _0xfe585f = _0x5cc0b4.split('&');
        let _0x581dea = 0x0;
        for (let _0x20f6ed = _0xfe585f.length; _0x581dea < _0x20f6ed; _0x581dea++) {
          let _0x45a82e = _0xfe585f[_0x581dea].split('=');
          _0x3bcca3[decodeURIComponent(_0x45a82e[0x0])] = decodeURIComponent(_0x45a82e[0x1]);
        }
        return _0x3bcca3;
      }
    },
    './node_modules/engine.io-client/build/esm/contrib/parseuri.js': (_0x265b19, _0x285964, _0x1ead4e) => {
      'use strict';

      _0x1ead4e.r(_0x285964);
      _0x1ead4e.d(_0x285964, {
        'parse': () => _0xd0a7a
      });
      const _0x15bcd2 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      const _0x1a78a0 = ["source", "protocol", 'authority', "userInfo", 'user', "password", "host", 'port', "relative", 'path', "directory", "file", "query", "anchor"];
      function _0xd0a7a(_0xcbc5d0) {
        const _0x531a07 = _0xcbc5d0;
        const _0x28ed6a = _0xcbc5d0.indexOf('[');
        const _0x31e5e7 = _0xcbc5d0.indexOf(']');
        if (_0x28ed6a != -0x1 && _0x31e5e7 != -0x1) {
          _0xcbc5d0 = _0xcbc5d0.substring(0x0, _0x28ed6a) + _0xcbc5d0.substring(_0x28ed6a, _0x31e5e7).replace(/:/g, ';') + _0xcbc5d0.substring(_0x31e5e7, _0xcbc5d0.length);
        }
        let _0xb7b231 = _0x15bcd2.exec(_0xcbc5d0 || '');
        let _0x8f756c = {};
        let _0x3a2d8e = 0xe;
        while (_0x3a2d8e--) {
          _0x8f756c[_0x1a78a0[_0x3a2d8e]] = _0xb7b231[_0x3a2d8e] || '';
        }
        if (_0x28ed6a != -0x1 && _0x31e5e7 != -0x1) {
          _0x8f756c.source = _0x531a07;
          _0x8f756c.host = _0x8f756c.host.substring(0x1, _0x8f756c.host.length - 0x1).replace(/;/g, ':');
          _0x8f756c.authority = _0x8f756c.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          _0x8f756c.ipv6uri = true;
        }
        _0x8f756c.pathNames = _0x306315(_0x8f756c, _0x8f756c.path);
        _0x8f756c.queryKey = _0x53ee07(_0x8f756c, _0x8f756c.query);
        return _0x8f756c;
      }
      function _0x306315(_0x57fb6e, _0x5b3e95) {
        const _0x41c859 = /\/{2,9}/g;
        const _0x85a8a8 = _0x5b3e95.replace(_0x41c859, '/').split('/');
        if (_0x5b3e95.slice(0x0, 0x1) == '/' || _0x5b3e95.length === 0x0) {
          _0x85a8a8.splice(0x0, 0x1);
        }
        if (_0x5b3e95.slice(-0x1) == '/') {
          _0x85a8a8.splice(_0x85a8a8.length - 0x1, 0x1);
        }
        return _0x85a8a8;
      }
      function _0x53ee07(_0x4ac5a0, _0x133146) {
        const _0x30b015 = {};
        _0x133146.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (_0x4c2a5a, _0x2ec5e4, _0x2e12e5) {
          if (_0x2ec5e4) {
            _0x30b015[_0x2ec5e4] = _0x2e12e5;
          }
        });
        return _0x30b015;
      }
    },
    './node_modules/engine.io-client/build/esm/contrib/yeast.js': (_0x40a46b, _0x4f9274, _0x2d4842) => {
      'use strict';

      _0x2d4842.r(_0x4f9274);
      _0x2d4842.d(_0x4f9274, {
        'decode': () => _0x26911d,
        'encode': () => _0x14dc9e,
        'yeast': () => _0x3f8528
      });
      const _0x5a2bf4 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split('');
      const _0x496a03 = {};
      let _0x42ca09 = 0x0;
      let _0x50b31b = 0x0;
      let _0x2fa0d7;
      function _0x14dc9e(_0x28ba3a) {
        let _0x1c3e1d = '';
        do {
          _0x1c3e1d = _0x5a2bf4[_0x28ba3a % 0x40] + _0x1c3e1d;
          _0x28ba3a = Math.floor(_0x28ba3a / 0x40);
        } while (_0x28ba3a > 0x0);
        return _0x1c3e1d;
      }
      function _0x26911d(_0x73735) {
        let _0x47aaa5 = 0x0;
        for (_0x50b31b = 0x0; _0x50b31b < _0x73735.length; _0x50b31b++) {
          _0x47aaa5 = _0x47aaa5 * 0x40 + _0x496a03[_0x73735.charAt(_0x50b31b)];
        }
        return _0x47aaa5;
      }
      function _0x3f8528() {
        const _0x2e7424 = _0x14dc9e(+new Date());
        if (_0x2e7424 !== _0x2fa0d7) {
          _0x42ca09 = 0x0;
          return _0x2fa0d7 = _0x2e7424;
        }
        return _0x2e7424 + '.' + _0x14dc9e(_0x42ca09++);
      }
      for (; _0x50b31b < 0x40; _0x50b31b++) {
        _0x496a03[_0x5a2bf4[_0x50b31b]] = _0x50b31b;
      }
    },
    './node_modules/engine.io-client/build/esm/globalThis.browser.js': (_0x2f0465, _0x21f321, _0x131122) => {
      'use strict';

      _0x131122.r(_0x21f321);
      _0x131122.d(_0x21f321, {
        'globalThisShim': () => _0x56374a
      });
      const _0x56374a = (() => {
        if (typeof self !== "undefined") {
          return self;
        } else {
          return typeof window !== 'undefined' ? window : Function("return this")();
        }
      })();
    },
    './node_modules/engine.io-client/build/esm/index.js': (_0x36e509, _0xdc42ca, _0x448129) => {
      'use strict';

      _0x448129.r(_0xdc42ca);
      _0x448129.d(_0xdc42ca, {
        'Socket': () => _0x14bed3.Socket,
        'Transport': () => _0x4696bd.Transport,
        'installTimerFunctions': () => _0x192bfc.installTimerFunctions,
        'nextTick': () => _0x33726c.nextTick,
        'parse': () => _0x24c768.parse,
        'protocol': () => _0x39b25d,
        'transports': () => _0x337bee.transports
      });
      var _0x14bed3 = _0x448129('./node_modules/engine.io-client/build/esm/socket.js');
      var _0x4696bd = _0x448129("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x337bee = _0x448129('./node_modules/engine.io-client/build/esm/transports/index.js');
      var _0x192bfc = _0x448129('./node_modules/engine.io-client/build/esm/util.js');
      var _0x24c768 = _0x448129("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var _0x33726c = _0x448129("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      const _0x39b25d = _0x14bed3.Socket.protocol;
    },
    './node_modules/engine.io-client/build/esm/socket.js': (_0x434ef7, _0x1de5f4, _0x2e4042) => {
      'use strict';

      _0x2e4042.r(_0x1de5f4);
      _0x2e4042.d(_0x1de5f4, {
        'Socket': () => _0x4c0bab
      });
      var _0x4d47ef = _0x2e4042('./node_modules/engine.io-client/build/esm/transports/index.js');
      var _0x4ea06b = _0x2e4042("./node_modules/engine.io-client/build/esm/util.js");
      var _0x150337 = _0x2e4042("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      var _0x4d8035 = _0x2e4042("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var _0x248881 = _0x2e4042("./node_modules/@socket.io/component-emitter/index.mjs");
      var _0x2047e0 = _0x2e4042("./node_modules/engine.io-parser/build/esm/index.js");
      var _0xb2ebc4 = _0x2e4042("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      class _0x4c0bab extends _0x248881.Emitter {
        constructor(_0x43af02, _0x5cf232 = {}) {
          super();
          this.binaryType = _0xb2ebc4.defaultBinaryType;
          this.writeBuffer = [];
          if (_0x43af02 && 'object' === typeof _0x43af02) {
            _0x5cf232 = _0x43af02;
            _0x43af02 = null;
          }
          if (_0x43af02) {
            0x0;
            _0x43af02 = _0x4d8035.parse(_0x43af02);
            _0x5cf232.hostname = _0x43af02.host;
            _0x5cf232.secure = _0x43af02.protocol === "https" || _0x43af02.protocol === "wss";
            _0x5cf232.port = _0x43af02.port;
            if (_0x43af02.query) {
              _0x5cf232.query = _0x43af02.query;
            }
          } else if (_0x5cf232.host) {
            0x0;
            _0x5cf232.hostname = _0x4d8035.parse(_0x5cf232.host).host;
          }
          0x0;
          _0x4ea06b.installTimerFunctions(this, _0x5cf232);
          this.secure = null != _0x5cf232.secure ? _0x5cf232.secure : typeof location !== "undefined" && "https:" === location.protocol;
          if (_0x5cf232.hostname && !_0x5cf232.port) {
            _0x5cf232.port = this.secure ? "443" : '80';
          }
          this.hostname = _0x5cf232.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = _0x5cf232.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? "443" : '80');
          this.transports = _0x5cf232.transports || ["polling", "websocket", "webtransport"];
          this.writeBuffer = [];
          this.prevBufferLen = 0x0;
          this.opts = Object.assign({
            'path': '/engine.io',
            'agent': false,
            'withCredentials': false,
            'upgrade': true,
            'timestampParam': 't',
            'rememberUpgrade': false,
            'addTrailingSlash': true,
            'rejectUnauthorized': true,
            'perMessageDeflate': {
              'threshold': 0x400
            },
            'transportOptions': {},
            'closeOnBeforeunload': false
          }, _0x5cf232);
          this.opts.path = this.opts.path.replace(/\/$/, '') + (this.opts.addTrailingSlash ? '/' : '');
          if (typeof this.opts.query === "string") {
            0x0;
            this.opts.query = _0x150337.decode(this.opts.query);
          }
          this.id = null;
          this.upgrades = null;
          this.pingInterval = null;
          this.pingTimeout = null;
          this.pingTimeoutTimer = null;
          if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
              this.beforeunloadEventListener = () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              };
              addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
              this.offlineEventListener = () => {
                this.onClose("transport close", {
                  'description': "network connection lost"
                });
              };
              addEventListener('offline', this.offlineEventListener, false);
            }
          }
          this.open();
        }
        ["createTransport"](_0x102970) {
          const _0x42abde = Object.assign({}, this.opts.query);
          _0x42abde.EIO = _0x2047e0.protocol;
          _0x42abde.transport = _0x102970;
          if (this.id) {
            _0x42abde.sid = this.id;
          }
          const _0x54c579 = Object.assign({}, this.opts, {
            'query': _0x42abde,
            'socket': this,
            'hostname': this.hostname,
            'secure': this.secure,
            'port': this.port
          }, this.opts.transportOptions[_0x102970]);
          return new _0x4d47ef.transports[_0x102970](_0x54c579);
        }
        ["open"]() {
          let _0x535033;
          if (this.opts.rememberUpgrade && _0x4c0bab.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -0x1) {
            _0x535033 = "websocket";
          } else {
            if (0x0 === this.transports.length) {
              this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0x0);
              return;
            } else {
              _0x535033 = this.transports[0x0];
            }
          }
          this.readyState = "opening";
          try {
            _0x535033 = this.createTransport(_0x535033);
          } catch (_0x5a80ef) {
            this.transports.shift();
            this.open();
            return;
          }
          _0x535033.open();
          this.setTransport(_0x535033);
        }
        ["setTransport"](_0x2e1f38) {
          if (this.transport) {
            this.transport.removeAllListeners();
          }
          this.transport = _0x2e1f38;
          _0x2e1f38.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", _0x5bb484 => this.onClose("transport close", _0x5bb484));
        }
        ["probe"](_0x43ce7c) {
          let _0x47edc7 = this.createTransport(_0x43ce7c);
          let _0x3bd3c8 = false;
          _0x4c0bab.priorWebsocketSuccess = false;
          const _0x3d775c = () => {
            if (_0x3bd3c8) {
              return;
            }
            _0x47edc7.send([{
              'type': 'ping',
              'data': "probe"
            }]);
            _0x47edc7.once('packet', _0x1e9ba0 => {
              if (_0x3bd3c8) {
                return;
              }
              if ("pong" === _0x1e9ba0.type && "probe" === _0x1e9ba0.data) {
                this.upgrading = true;
                this.emitReserved("upgrading", _0x47edc7);
                if (!_0x47edc7) {
                  return;
                }
                _0x4c0bab.priorWebsocketSuccess = "websocket" === _0x47edc7.name;
                this.transport.pause(() => {
                  if (_0x3bd3c8) {
                    return;
                  }
                  if ("closed" === this.readyState) {
                    return;
                  }
                  _0x33675f();
                  this.setTransport(_0x47edc7);
                  _0x47edc7.send([{
                    'type': "upgrade"
                  }]);
                  this.emitReserved("upgrade", _0x47edc7);
                  _0x47edc7 = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                const _0x478713 = new Error("probe error");
                _0x478713.transport = _0x47edc7.name;
                this.emitReserved("upgradeError", _0x478713);
              }
            });
          };
          function _0x51c3d9() {
            if (_0x3bd3c8) {
              return;
            }
            _0x3bd3c8 = true;
            _0x33675f();
            _0x47edc7.close();
            _0x47edc7 = null;
          }
          const _0x3f831d = _0xc5eb96 => {
            const _0x3690a8 = new Error("probe error: " + _0xc5eb96);
            _0x3690a8.transport = _0x47edc7.name;
            _0x51c3d9();
            this.emitReserved("upgradeError", _0x3690a8);
          };
          function _0x52e24e() {
            _0x3f831d("transport closed");
          }
          function _0x1a319b() {
            _0x3f831d("socket closed");
          }
          function _0x263b9a(_0x284e89) {
            if (_0x47edc7 && _0x284e89.name !== _0x47edc7.name) {
              _0x51c3d9();
            }
          }
          const _0x33675f = () => {
            _0x47edc7.removeListener("open", _0x3d775c);
            _0x47edc7.removeListener("error", _0x3f831d);
            _0x47edc7.removeListener("close", _0x52e24e);
            this.off("close", _0x1a319b);
            this.off("upgrading", _0x263b9a);
          };
          _0x47edc7.once('open', _0x3d775c);
          _0x47edc7.once("error", _0x3f831d);
          _0x47edc7.once("close", _0x52e24e);
          this.once("close", _0x1a319b);
          this.once('upgrading', _0x263b9a);
          if (this.upgrades.indexOf("webtransport") !== -0x1 && _0x43ce7c !== "webtransport") {
            this.setTimeoutFn(() => {
              if (!_0x3bd3c8) {
                _0x47edc7.open();
              }
            }, 0xc8);
          } else {
            _0x47edc7.open();
          }
        }
        ['onOpen']() {
          this.readyState = 'open';
          _0x4c0bab.priorWebsocketSuccess = 'websocket' === this.transport.name;
          this.emitReserved('open');
          this.flush();
          if ("open" === this.readyState && this.opts.upgrade) {
            let _0x1cf959 = 0x0;
            const _0x5f30ae = this.upgrades.length;
            for (; _0x1cf959 < _0x5f30ae; _0x1cf959++) {
              this.probe(this.upgrades[_0x1cf959]);
            }
          }
        }
        ["onPacket"](_0x35369a) {
          if ("opening" === this.readyState || 'open' === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", _0x35369a);
            this.emitReserved("heartbeat");
            this.resetPingTimeout();
            switch (_0x35369a.type) {
              case "open":
                this.onHandshake(JSON.parse(_0x35369a.data));
                break;
              case "ping":
                this.sendPacket('pong');
                this.emitReserved("ping");
                this.emitReserved("pong");
                break;
              case 'error':
                const _0x3c0f6d = new Error("server error");
                _0x3c0f6d.code = _0x35369a.data;
                this.onError(_0x3c0f6d);
                break;
              case 'message':
                this.emitReserved("data", _0x35369a.data);
                this.emitReserved('message', _0x35369a.data);
                break;
            }
          } else {}
        }
        ["onHandshake"](_0x55431a) {
          this.emitReserved("handshake", _0x55431a);
          this.id = _0x55431a.sid;
          this.transport.query.sid = _0x55431a.sid;
          this.upgrades = this.filterUpgrades(_0x55431a.upgrades);
          this.pingInterval = _0x55431a.pingInterval;
          this.pingTimeout = _0x55431a.pingTimeout;
          this.maxPayload = _0x55431a.maxPayload;
          this.onOpen();
          if ("closed" === this.readyState) {
            return;
          }
          this.resetPingTimeout();
        }
        ["resetPingTimeout"]() {
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout);
          if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
          }
        }
        ["onDrain"]() {
          this.writeBuffer.splice(0x0, this.prevBufferLen);
          this.prevBufferLen = 0x0;
          if (0x0 === this.writeBuffer.length) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        ["flush"]() {
          if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const _0x268ada = this.getWritablePackets();
            this.transport.send(_0x268ada);
            this.prevBufferLen = _0x268ada.length;
            this.emitReserved('flush');
          }
        }
        ['getWritablePackets']() {
          const _0x55bd4a = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 0x1;
          if (!_0x55bd4a) {
            return this.writeBuffer;
          }
          let _0x54c923 = 0x1;
          for (let _0x4e6e48 = 0x0; _0x4e6e48 < this.writeBuffer.length; _0x4e6e48++) {
            const _0x1fbab7 = this.writeBuffer[_0x4e6e48].data;
            if (_0x1fbab7) {
              0x0;
              _0x54c923 += _0x4ea06b.byteLength(_0x1fbab7);
            }
            if (_0x4e6e48 > 0x0 && _0x54c923 > this.maxPayload) {
              return this.writeBuffer.slice(0x0, _0x4e6e48);
            }
            _0x54c923 += 0x2;
          }
          return this.writeBuffer;
        }
        ["write"](_0x5ec0b2, _0x4a5940, _0x13e4ad) {
          this.sendPacket('message', _0x5ec0b2, _0x4a5940, _0x13e4ad);
          return this;
        }
        ["send"](_0x460640, _0x6b8ff2, _0x2604d3) {
          this.sendPacket("message", _0x460640, _0x6b8ff2, _0x2604d3);
          return this;
        }
        ["sendPacket"](_0x237960, _0x3efa17, _0x23fbdb, _0x3274c9) {
          if ("function" === typeof _0x3efa17) {
            _0x3274c9 = _0x3efa17;
            _0x3efa17 = undefined;
          }
          if ("function" === typeof _0x23fbdb) {
            _0x3274c9 = _0x23fbdb;
            _0x23fbdb = null;
          }
          if ("closing" === this.readyState || 'closed' === this.readyState) {
            return;
          }
          _0x23fbdb = _0x23fbdb || {};
          _0x23fbdb.compress = false !== _0x23fbdb.compress;
          const _0x5f583a = {
            'type': _0x237960,
            'data': _0x3efa17,
            'options': _0x23fbdb
          };
          this.emitReserved("packetCreate", _0x5f583a);
          this.writeBuffer.push(_0x5f583a);
          if (_0x3274c9) {
            this.once('flush', _0x3274c9);
          }
          this.flush();
        }
        ["close"]() {
          const _0x898832 = () => {
            this.onClose("forced close");
            this.transport.close();
          };
          const _0xaaf62e = () => {
            this.off("upgrade", _0xaaf62e);
            this.off('upgradeError', _0xaaf62e);
            _0x898832();
          };
          const _0x2cf708 = () => {
            this.once('upgrade', _0xaaf62e);
            this.once("upgradeError", _0xaaf62e);
          };
          if ('opening' === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  _0x2cf708();
                } else {
                  _0x898832();
                }
              });
            } else if (this.upgrading) {
              _0x2cf708();
            } else {
              _0x898832();
            }
          }
          return this;
        }
        ["onError"](_0x31069f) {
          _0x4c0bab.priorWebsocketSuccess = false;
          this.emitReserved("error", _0x31069f);
          this.onClose("transport error", _0x31069f);
        }
        ["onClose"](_0x72ae1a, _0xceb903) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (typeof removeEventListener === 'function') {
              removeEventListener("beforeunload", this.beforeunloadEventListener, false);
              removeEventListener("offline", this.offlineEventListener, false);
            }
            this.readyState = 'closed';
            this.id = null;
            this.emitReserved('close', _0x72ae1a, _0xceb903);
            this.writeBuffer = [];
            this.prevBufferLen = 0x0;
          }
        }
        ["filterUpgrades"](_0x4c4632) {
          const _0x1c36d9 = [];
          let _0x5daa75 = 0x0;
          const _0x2a9b7a = _0x4c4632.length;
          for (; _0x5daa75 < _0x2a9b7a; _0x5daa75++) {
            if (~this.transports.indexOf(_0x4c4632[_0x5daa75])) {
              _0x1c36d9.push(_0x4c4632[_0x5daa75]);
            }
          }
          return _0x1c36d9;
        }
      }
      _0x4c0bab.protocol = _0x2047e0.protocol;
    },
    './node_modules/engine.io-client/build/esm/transport.js': (_0x146ab9, _0x409418, _0x5e573e) => {
      'use strict';

      _0x5e573e.r(_0x409418);
      _0x5e573e.d(_0x409418, {
        'Transport': () => _0x109fec
      });
      var _0x57d624 = _0x5e573e("./node_modules/engine.io-parser/build/esm/index.js");
      var _0x3ef895 = _0x5e573e("./node_modules/@socket.io/component-emitter/index.mjs");
      var _0x1c4f7a = _0x5e573e("./node_modules/engine.io-client/build/esm/util.js");
      var _0x58de30 = _0x5e573e("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      class _0x44e900 extends Error {
        constructor(_0x1e1ab9, _0xc31286, _0x337103) {
          super(_0x1e1ab9);
          this.description = _0xc31286;
          this.context = _0x337103;
          this.type = "TransportError";
        }
      }
      class _0x109fec extends _0x3ef895.Emitter {
        constructor(_0x253342) {
          super();
          this.writable = false;
          0x0;
          _0x1c4f7a.installTimerFunctions(this, _0x253342);
          this.opts = _0x253342;
          this.query = _0x253342.query;
          this.socket = _0x253342.socket;
        }
        ["onError"](_0x2eb581, _0x1a3941, _0x5c8f0a) {
          super.emitReserved("error", new _0x44e900(_0x2eb581, _0x1a3941, _0x5c8f0a));
          return this;
        }
        ["open"]() {
          this.readyState = "opening";
          this.doOpen();
          return this;
        }
        ["close"]() {
          if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        ["send"](_0x3913d1) {
          if (this.readyState === "open") {
            this.write(_0x3913d1);
          } else {}
        }
        ["onOpen"]() {
          this.readyState = "open";
          this.writable = true;
          super.emitReserved("open");
        }
        ["onData"](_0x4b9f3d) {
          0x0;
          const _0x131c61 = _0x57d624.decodePacket(_0x4b9f3d, this.socket.binaryType);
          this.onPacket(_0x131c61);
        }
        ['onPacket'](_0x216893) {
          super.emitReserved("packet", _0x216893);
        }
        ["onClose"](_0x2a4b22) {
          this.readyState = "closed";
          super.emitReserved("close", _0x2a4b22);
        }
        ["pause"](_0x51ccce) {}
        ["createUri"](_0x1dab00, _0x5c8f63 = {}) {
          return _0x1dab00 + "://" + this._hostname() + this._port() + this.opts.path + this._query(_0x5c8f63);
        }
        ["_hostname"]() {
          const _0x434aad = this.opts.hostname;
          return _0x434aad.indexOf(':') === -0x1 ? _0x434aad : '[' + _0x434aad + ']';
        }
        ["_port"]() {
          return this.opts.port && (this.opts.secure && Number(this.opts.port !== 0x1bb) || !this.opts.secure && Number(this.opts.port) !== 0x50) ? ':' + this.opts.port : '';
        }
        ["_query"](_0x59319d) {
          0x0;
          const _0x306e9c = _0x58de30.encode(_0x59319d);
          return _0x306e9c.length ? '?' + _0x306e9c : '';
        }
      }
    },
    './node_modules/engine.io-client/build/esm/transports/index.js': (_0x3f6927, _0x4ff018, _0x342267) => {
      'use strict';

      _0x342267.r(_0x4ff018);
      _0x342267.d(_0x4ff018, {
        'transports': () => _0x51c6cb
      });
      var _0x133f63 = _0x342267("./node_modules/engine.io-client/build/esm/transports/polling.js");
      var _0x22ba8d = _0x342267("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var _0x207e30 = _0x342267("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const _0x51c6cb = {
        'websocket': _0x22ba8d.WS,
        'webtransport': _0x207e30.WT,
        'polling': _0x133f63.Polling
      };
    },
    './node_modules/engine.io-client/build/esm/transports/polling.js': (_0xa2dd10, _0x34286c, _0x225ba7) => {
      'use strict';

      _0x225ba7.r(_0x34286c);
      _0x225ba7.d(_0x34286c, {
        'Polling': () => _0x86a531,
        'Request': () => _0x5dc567
      });
      var _0x4b9045 = _0x225ba7("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x5c39c3 = _0x225ba7("./node_modules/engine.io-client/build/esm/contrib/yeast.js");
      var _0x52c82c = _0x225ba7('./node_modules/engine.io-parser/build/esm/index.js');
      var _0x2daa61 = _0x225ba7("./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js");
      var _0x1e3bf0 = _0x225ba7('./node_modules/@socket.io/component-emitter/index.mjs');
      var _0x35cb08 = _0x225ba7("./node_modules/engine.io-client/build/esm/util.js");
      var _0x25c238 = _0x225ba7("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function _0x92a805() {}
      const _0x2d4534 = function () {
        const _0x2c4ba2 = new _0x2daa61.XHR({
          'xdomain': false
        });
        return null != _0x2c4ba2.responseType;
      }();
      class _0x86a531 extends _0x4b9045.Transport {
        constructor(_0x1a5a6d) {
          super(_0x1a5a6d);
          this.polling = false;
          if (typeof location !== "undefined") {
            const _0x1584bb = "https:" === location.protocol;
            let _0x49e8b7 = location.port;
            if (!_0x49e8b7) {
              _0x49e8b7 = _0x1584bb ? "443" : '80';
            }
            this.xd = typeof location !== 'undefined' && _0x1a5a6d.hostname !== location.hostname || _0x49e8b7 !== _0x1a5a6d.port;
          }
          const _0xe62768 = _0x1a5a6d && _0x1a5a6d.forceBase64;
          this.supportsBinary = _0x2d4534 && !_0xe62768;
          if (this.opts.withCredentials) {
            0x0;
            this.cookieJar = _0x2daa61.createCookieJar();
          }
        }
        get ["name"]() {
          return "polling";
        }
        ['doOpen']() {
          this.poll();
        }
        ["pause"](_0x141c96) {
          this.readyState = "pausing";
          const _0x5185ce = () => {
            this.readyState = "paused";
            _0x141c96();
          };
          if (this.polling || !this.writable) {
            let _0xc6f40 = 0x0;
            if (this.polling) {
              _0xc6f40++;
              this.once("pollComplete", function () {
                if (! --_0xc6f40) {
                  _0x5185ce();
                }
              });
            }
            if (!this.writable) {
              _0xc6f40++;
              this.once("drain", function () {
                if (! --_0xc6f40) {
                  _0x5185ce();
                }
              });
            }
          } else {
            _0x5185ce();
          }
        }
        ["poll"]() {
          this.polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        ['onData'](_0x1e78cd) {
          const _0x4bb667 = _0x29f08e => {
            if ("opening" === this.readyState && _0x29f08e.type === "open") {
              this.onOpen();
            }
            if ('close' === _0x29f08e.type) {
              this.onClose({
                'description': "transport closed by the server"
              });
              return false;
            }
            this.onPacket(_0x29f08e);
          };
          0x0;
          _0x52c82c.decodePayload(_0x1e78cd, this.socket.binaryType).forEach(_0x4bb667);
          if ("closed" !== this.readyState) {
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
              this.poll();
            } else {}
          }
        }
        ['doClose']() {
          const _0x436d0e = () => {
            this.write([{
              'type': "close"
            }]);
          };
          if ("open" === this.readyState) {
            _0x436d0e();
          } else {
            this.once('open', _0x436d0e);
          }
        }
        ["write"](_0xb7f697) {
          this.writable = false;
          0x0;
          _0x52c82c.encodePayload(_0xb7f697, _0xe548d7 => {
            this.doWrite(_0xe548d7, () => {
              this.writable = true;
              this.emitReserved("drain");
            });
          });
        }
        ["uri"]() {
          const _0x48e4a0 = this.opts.secure ? 'https' : "http";
          const _0x41890e = this.query || {};
          if (false !== this.opts.timestampRequests) {
            0x0;
            _0x41890e[this.opts.timestampParam] = _0x5c39c3.yeast();
          }
          if (!this.supportsBinary && !_0x41890e.sid) {
            _0x41890e.b64 = 0x1;
          }
          return this.createUri(_0x48e4a0, _0x41890e);
        }
        ["request"](_0x43acbb = {}) {
          Object.assign(_0x43acbb, {
            'xd': this.xd,
            'cookieJar': this.cookieJar
          }, this.opts);
          return new _0x5dc567(this.uri(), _0x43acbb);
        }
        ["doWrite"](_0x8758af, _0x3411b1) {
          const _0x28b652 = this.request({
            'method': 'POST',
            'data': _0x8758af
          });
          _0x28b652.on("success", _0x3411b1);
          _0x28b652.on("error", (_0x3bf300, _0x5d768b) => {
            this.onError("xhr post error", _0x3bf300, _0x5d768b);
          });
        }
        ["doPoll"]() {
          const _0x9db19b = this.request();
          _0x9db19b.on("data", this.onData.bind(this));
          _0x9db19b.on("error", (_0x63dc16, _0x5cbbf2) => {
            this.onError("xhr poll error", _0x63dc16, _0x5cbbf2);
          });
          this.pollXhr = _0x9db19b;
        }
      }
      class _0x5dc567 extends _0x1e3bf0.Emitter {
        constructor(_0x27a6be, _0x4a3f1d) {
          super();
          0x0;
          _0x35cb08.installTimerFunctions(this, _0x4a3f1d);
          this.opts = _0x4a3f1d;
          this.method = _0x4a3f1d.method || "GET";
          this.uri = _0x27a6be;
          this.data = undefined !== _0x4a3f1d.data ? _0x4a3f1d.data : null;
          this.create();
        }
        ['create']() {
          var _0x1f5145;
          0x0;
          const _0x316047 = _0x35cb08.pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", 'ca', 'ciphers', "rejectUnauthorized", "autoUnref");
          _0x316047.xdomain = !!this.opts.xd;
          const _0x5c8518 = this.xhr = new _0x2daa61.XHR(_0x316047);
          try {
            _0x5c8518.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                if (_0x5c8518.setDisableHeaderCheck) {
                  _0x5c8518.setDisableHeaderCheck(true);
                }
                for (let _0xe719c7 in this.opts.extraHeaders) {
                  if (this.opts.extraHeaders.hasOwnProperty(_0xe719c7)) {
                    _0x5c8518.setRequestHeader(_0xe719c7, this.opts.extraHeaders[_0xe719c7]);
                  }
                }
              }
            } catch (_0x19da8e) {}
            if ("POST" === this.method) {
              try {
                _0x5c8518.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (_0x593f8e) {}
            }
            try {
              _0x5c8518.setRequestHeader("Accept", "*/*");
            } catch (_0x1b91e8) {}
            if ((_0x1f5145 = this.opts.cookieJar) === null || _0x1f5145 === undefined) {
              undefined;
            } else {
              _0x1f5145.addCookies(_0x5c8518);
            }
            if ('withCredentials' in _0x5c8518) {
              _0x5c8518.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
              _0x5c8518.timeout = this.opts.requestTimeout;
            }
            _0x5c8518.onreadystatechange = () => {
              var _0x2286f6;
              if (_0x5c8518.readyState === 0x3) {
                if ((_0x2286f6 = this.opts.cookieJar) === null || _0x2286f6 === undefined) {
                  undefined;
                } else {
                  _0x2286f6.parseCookies(_0x5c8518);
                }
              }
              if (0x4 !== _0x5c8518.readyState) {
                return;
              }
              if (0xc8 === _0x5c8518.status || 0x4c7 === _0x5c8518.status) {
                this.onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this.onError(typeof _0x5c8518.status === "number" ? _0x5c8518.status : 0x0);
                }, 0x0);
              }
            };
            _0x5c8518.send(this.data);
          } catch (_0xc096f8) {
            this.setTimeoutFn(() => {
              this.onError(_0xc096f8);
            }, 0x0);
            return;
          }
          if (typeof document !== 'undefined') {
            this.index = _0x5dc567.requestsCount++;
            _0x5dc567.requests[this.index] = this;
          }
        }
        ["onError"](_0x52748a) {
          this.emitReserved("error", _0x52748a, this.xhr);
          this.cleanup(true);
        }
        ["cleanup"](_0xe99b3b) {
          if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
          }
          this.xhr.onreadystatechange = _0x92a805;
          if (_0xe99b3b) {
            try {
              this.xhr.abort();
            } catch (_0x306e38) {}
          }
          if (typeof document !== 'undefined') {
            delete _0x5dc567.requests[this.index];
          }
          this.xhr = null;
        }
        ['onLoad']() {
          const _0x3303d1 = this.xhr.responseText;
          if (_0x3303d1 !== null) {
            this.emitReserved("data", _0x3303d1);
            this.emitReserved('success');
            this.cleanup();
          }
        }
        ["abort"]() {
          this.cleanup();
        }
      }
      _0x5dc567.requestsCount = 0x0;
      _0x5dc567.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", _0x193709);
        } else {
          if (typeof addEventListener === "function") {
            const _0x12abd8 = "onpagehide" in _0x25c238.globalThisShim ? "pagehide" : 'unload';
            addEventListener(_0x12abd8, _0x193709, false);
          }
        }
      }
      function _0x193709() {
        for (let _0x1aa5a4 in _0x5dc567.requests) {
          if (_0x5dc567.requests.hasOwnProperty(_0x1aa5a4)) {
            _0x5dc567.requests[_0x1aa5a4].abort();
          }
        }
      }
    },
    './node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js': (_0x1b58d3, _0x320f0c, _0x3ca221) => {
      'use strict';

      _0x3ca221.r(_0x320f0c);
      _0x3ca221.d(_0x320f0c, {
        'WebSocket': () => _0x3316fd,
        'defaultBinaryType': () => "arraybuffer",
        'nextTick': () => _0x52eaba,
        'usingBrowserWebSocket': () => true
      });
      var _0x362f73 = _0x3ca221("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      const _0x52eaba = (() => {
        const _0x454c7d = typeof Promise === "function" && typeof Promise.resolve === "function";
        return _0x454c7d ? _0x498c6f => Promise.resolve().then(_0x498c6f) : (_0x747d34, _0x38c5b0) => _0x38c5b0(_0x747d34, 0x0);
      })();
      const _0x3316fd = _0x362f73.globalThisShim.WebSocket || _0x362f73.globalThisShim.MozWebSocket;
    },
    './node_modules/engine.io-client/build/esm/transports/websocket.js': (_0x42a8e5, _0xf086d7, _0x432f8f) => {
      'use strict';

      _0x432f8f.r(_0xf086d7);
      _0x432f8f.d(_0xf086d7, {
        'WS': () => _0x4fc0bd
      });
      var _0x43200a = _0x432f8f("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x100fef = _0x432f8f('./node_modules/engine.io-client/build/esm/contrib/yeast.js');
      var _0xa5e0ad = _0x432f8f('./node_modules/engine.io-client/build/esm/util.js');
      var _0x1fca74 = _0x432f8f("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      var _0x5e8015 = _0x432f8f("./node_modules/engine.io-parser/build/esm/index.js");
      const _0x9659b7 = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === 'reactnative';
      class _0x4fc0bd extends _0x43200a.Transport {
        constructor(_0x12107c) {
          super(_0x12107c);
          this.supportsBinary = !_0x12107c.forceBase64;
        }
        get ["name"]() {
          return "websocket";
        }
        ["doOpen"]() {
          if (!this.check()) {
            return;
          }
          const _0x9c183f = this.uri();
          const _0x518055 = this.opts.protocols;
          const _0x4c2813 = _0x9659b7 ? {} : (0x0, _0xa5e0ad.pick)(this.opts, "agent", 'perMessageDeflate', "pfx", "key", "passphrase", 'cert', 'ca', "ciphers", 'rejectUnauthorized', "localAddress", 'protocolVersion', "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            _0x4c2813.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = _0x1fca74.usingBrowserWebSocket && !_0x9659b7 ? _0x518055 ? new _0x1fca74.WebSocket(_0x9c183f, _0x518055) : new _0x1fca74.WebSocket(_0x9c183f) : new _0x1fca74.WebSocket(_0x9c183f, _0x518055, _0x4c2813);
          } catch (_0x20beb8) {
            return this.emitReserved("error", _0x20beb8);
          }
          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        ['addEventListeners']() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = _0x591fab => this.onClose({
            'description': "websocket connection closed",
            'context': _0x591fab
          });
          this.ws.onmessage = _0x14f41e => this.onData(_0x14f41e.data);
          this.ws.onerror = _0x1de8d0 => this.onError("websocket error", _0x1de8d0);
        }
        ["write"](_0x1b6f9f) {
          this.writable = false;
          for (let _0x40380d = 0x0; _0x40380d < _0x1b6f9f.length; _0x40380d++) {
            const _0x12d676 = _0x1b6f9f[_0x40380d];
            const _0x77a695 = _0x40380d === _0x1b6f9f.length - 0x1;
            0x0;
            _0x5e8015.encodePacket(_0x12d676, this.supportsBinary, _0x5b2340 => {
              const _0x5ab2f5 = {};
              if (!_0x1fca74.usingBrowserWebSocket) {
                if (_0x12d676.options) {
                  _0x5ab2f5.compress = _0x12d676.options.compress;
                }
                if (this.opts.perMessageDeflate) {
                  const _0x492f7f = "string" === typeof _0x5b2340 ? Buffer.byteLength(_0x5b2340) : _0x5b2340.length;
                  if (_0x492f7f < this.opts.perMessageDeflate.threshold) {
                    _0x5ab2f5.compress = false;
                  }
                }
              }
              try {
                if (_0x1fca74.usingBrowserWebSocket) {
                  this.ws.send(_0x5b2340);
                } else {
                  this.ws.send(_0x5b2340, _0x5ab2f5);
                }
              } catch (_0x28ab2f) {}
              if (_0x77a695) {
                0x0;
                _0x1fca74.nextTick(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        ['doClose']() {
          if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
          }
        }
        ['uri']() {
          const _0x54845e = this.opts.secure ? 'wss' : 'ws';
          const _0x27ad47 = this.query || {};
          if (this.opts.timestampRequests) {
            0x0;
            _0x27ad47[this.opts.timestampParam] = _0x100fef.yeast();
          }
          if (!this.supportsBinary) {
            _0x27ad47.b64 = 0x1;
          }
          return this.createUri(_0x54845e, _0x27ad47);
        }
        ["check"]() {
          return !!_0x1fca74.WebSocket;
        }
      }
    },
    './node_modules/engine.io-client/build/esm/transports/webtransport.js': (_0x345e74, _0x307490, _0x392237) => {
      'use strict';

      _0x392237.r(_0x307490);
      _0x392237.d(_0x307490, {
        'WT': () => _0x10d6b5
      });
      var _0x110923 = _0x392237("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x1d484c = _0x392237("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      var _0x31ffb2 = _0x392237("./node_modules/engine.io-parser/build/esm/index.js");
      class _0x10d6b5 extends _0x110923.Transport {
        get ["name"]() {
          return "webtransport";
        }
        ["doOpen"]() {
          if (typeof WebTransport !== "function") {
            return;
          }
          this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          this.transport.closed.then(() => {
            this.onClose();
          })['catch'](_0xda7155 => {
            this.onError("webtransport error", _0xda7155);
          });
          this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then(_0x111ba2 => {
              0x0;
              const _0x4a3bf6 = _0x31ffb2.createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const _0x1d4d27 = _0x111ba2.readable.pipeThrough(_0x4a3bf6).getReader();
              0x0;
              const _0x5a8699 = _0x31ffb2.createPacketEncoderStream();
              _0x5a8699.readable.pipeTo(_0x111ba2.writable);
              this.writer = _0x5a8699.writable.getWriter();
              const _0x66a56e = () => {
                _0x1d4d27.read().then(({
                  done: _0x47a8dc,
                  value: _0x54f79b
                }) => {
                  if (_0x47a8dc) {
                    return;
                  }
                  this.onPacket(_0x54f79b);
                  _0x66a56e();
                })["catch"](_0x47e9ec => {});
              };
              _0x66a56e();
              const _0x20b2bf = {
                'type': 'open'
              };
              if (this.query.sid) {
                _0x20b2bf.data = "{\"sid\":\"" + this.query.sid + "\"}";
              }
              this.writer.write(_0x20b2bf).then(() => this.onOpen());
            });
          });
        }
        ["write"](_0x43df76) {
          this.writable = false;
          for (let _0x3fba67 = 0x0; _0x3fba67 < _0x43df76.length; _0x3fba67++) {
            const _0x4ecf6c = _0x43df76[_0x3fba67];
            const _0x1ba1aa = _0x3fba67 === _0x43df76.length - 0x1;
            this.writer.write(_0x4ecf6c).then(() => {
              if (_0x1ba1aa) {
                0x0;
                _0x1d484c.nextTick(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        ['doClose']() {
          var _0x1a0aad;
          if ((_0x1a0aad = this.transport) === null || _0x1a0aad === undefined) {
            undefined;
          } else {
            _0x1a0aad.close();
          }
        }
      }
    },
    './node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js': (_0x2710e0, _0x3914ee, _0x109f4b) => {
      'use strict';

      _0x109f4b.r(_0x3914ee);
      _0x109f4b.d(_0x3914ee, {
        'XHR': () => _0x904f21,
        'createCookieJar': () => _0x1f6fd0
      });
      var _0x37701a = _0x109f4b("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
      var _0x277c5c = _0x109f4b("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function _0x904f21(_0x45db14) {
        const _0x122f03 = _0x45db14.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!_0x122f03 || _0x37701a.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (_0x2c332d) {}
        if (!_0x122f03) {
          try {
            return new _0x277c5c.globalThisShim[["Active"].concat("Object").join('X')]("Microsoft.XMLHTTP");
          } catch (_0x36ba54) {}
        }
      }
      function _0x1f6fd0() {}
    },
    './node_modules/engine.io-client/build/esm/util.js': (_0x30b6df, _0xdce05e, _0x1c4718) => {
      'use strict';

      _0x1c4718.r(_0xdce05e);
      _0x1c4718.d(_0xdce05e, {
        'byteLength': () => _0x3f5d24,
        'installTimerFunctions': () => _0x4f67ac,
        'pick': () => _0x128f30
      });
      var _0x1b1375 = _0x1c4718("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function _0x128f30(_0x3c3fa3, ..._0x38b3f0) {
        return _0x38b3f0.reduce((_0x18f437, _0x41db6c) => {
          if (_0x3c3fa3.hasOwnProperty(_0x41db6c)) {
            _0x18f437[_0x41db6c] = _0x3c3fa3[_0x41db6c];
          }
          return _0x18f437;
        }, {});
      }
      const _0x32d926 = _0x1b1375.globalThisShim.setTimeout;
      const _0x5475b4 = _0x1b1375.globalThisShim.clearTimeout;
      function _0x4f67ac(_0x26e72f, _0x766604) {
        if (_0x766604.useNativeTimers) {
          _0x26e72f.setTimeoutFn = _0x32d926.bind(_0x1b1375.globalThisShim);
          _0x26e72f.clearTimeoutFn = _0x5475b4.bind(_0x1b1375.globalThisShim);
        } else {
          _0x26e72f.setTimeoutFn = _0x1b1375.globalThisShim.setTimeout.bind(_0x1b1375.globalThisShim);
          _0x26e72f.clearTimeoutFn = _0x1b1375.globalThisShim.clearTimeout.bind(_0x1b1375.globalThisShim);
        }
      }
      function _0x3f5d24(_0x167252) {
        if (typeof _0x167252 === 'string') {
          return _0x296c0f(_0x167252);
        }
        return Math.ceil((_0x167252.byteLength || _0x167252.size) * 1.33);
      }
      function _0x296c0f(_0x46dfc7) {
        let _0x3c4380 = 0x0;
        let _0x3845d6 = 0x0;
        let _0x517033 = 0x0;
        for (let _0x24bc02 = _0x46dfc7.length; _0x517033 < _0x24bc02; _0x517033++) {
          _0x3c4380 = _0x46dfc7.charCodeAt(_0x517033);
          if (_0x3c4380 < 0x80) {
            _0x3845d6 += 0x1;
          } else {
            if (_0x3c4380 < 0x800) {
              _0x3845d6 += 0x2;
            } else if (_0x3c4380 < 0xd800 || _0x3c4380 >= 0xe000) {
              _0x3845d6 += 0x3;
            } else {
              _0x517033++;
              _0x3845d6 += 0x4;
            }
          }
        }
        return _0x3845d6;
      }
    },
    './node_modules/engine.io-parser/build/esm/commons.js': (_0x50c62f, _0x5823e3, _0x215474) => {
      'use strict';

      _0x215474.r(_0x5823e3);
      _0x215474.d(_0x5823e3, {
        'ERROR_PACKET': () => _0xfbfc93,
        'PACKET_TYPES': () => _0x4a725b,
        'PACKET_TYPES_REVERSE': () => _0x4a32e7
      });
      const _0x4a725b = Object.create(null);
      _0x4a725b.open = '0';
      _0x4a725b.close = '1';
      _0x4a725b.ping = '2';
      _0x4a725b.pong = '3';
      _0x4a725b.message = '4';
      _0x4a725b.upgrade = '5';
      _0x4a725b.noop = '6';
      const _0x4a32e7 = Object.create(null);
      Object.keys(_0x4a725b).forEach(_0x6dd972 => {
        _0x4a32e7[_0x4a725b[_0x6dd972]] = _0x6dd972;
      });
      const _0xfbfc93 = {
        'type': 'error',
        'data': "parser error"
      };
    },
    './node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js': (_0x3669e4, _0x3e57a9, _0x27e149) => {
      'use strict';

      _0x27e149.r(_0x3e57a9);
      _0x27e149.d(_0x3e57a9, {
        'decode': () => _0xc04170,
        'encode': () => _0x5f0708
      });
      const _0x4fb0c6 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(0x100);
      for (let _0x5d420b = 0x0; _0x5d420b < "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".length; _0x5d420b++) {
        _0x4fb0c6["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(_0x5d420b)] = _0x5d420b;
      }
      const _0x5f0708 = _0x5e4255 => {
        let _0x45058b = new Uint8Array(_0x5e4255);
        let _0x3d4bb6;
        let _0x27a147 = _0x45058b.length;
        let _0xc5c4e1 = '';
        for (_0x3d4bb6 = 0x0; _0x3d4bb6 < _0x27a147; _0x3d4bb6 += 0x3) {
          _0xc5c4e1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0x45058b[_0x3d4bb6] >> 0x2];
          _0xc5c4e1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x45058b[_0x3d4bb6] & 0x3) << 0x4 | _0x45058b[_0x3d4bb6 + 0x1] >> 0x4];
          _0xc5c4e1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x45058b[_0x3d4bb6 + 0x1] & 0xf) << 0x2 | _0x45058b[_0x3d4bb6 + 0x2] >> 0x6];
          _0xc5c4e1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0x45058b[_0x3d4bb6 + 0x2] & 0x3f];
        }
        if (_0x27a147 % 0x3 === 0x2) {
          _0xc5c4e1 = _0xc5c4e1.substring(0x0, _0xc5c4e1.length - 0x1) + '=';
        } else if (_0x27a147 % 0x3 === 0x1) {
          _0xc5c4e1 = _0xc5c4e1.substring(0x0, _0xc5c4e1.length - 0x2) + '==';
        }
        return _0xc5c4e1;
      };
      const _0xc04170 = _0x5b5629 => {
        let _0x2fd04a = _0x5b5629.length * 0.75;
        let _0x57e7fc = _0x5b5629.length;
        let _0xc556c6;
        let _0x2fb242 = 0x0;
        let _0x225af2;
        let _0x468411;
        let _0x50aee3;
        let _0x1e33f2;
        if (_0x5b5629[_0x5b5629.length - 0x1] === '=') {
          _0x2fd04a--;
          if (_0x5b5629[_0x5b5629.length - 0x2] === '=') {
            _0x2fd04a--;
          }
        }
        const _0x21d22b = new ArrayBuffer(_0x2fd04a);
        const _0x29b740 = new Uint8Array(_0x21d22b);
        for (_0xc556c6 = 0x0; _0xc556c6 < _0x57e7fc; _0xc556c6 += 0x4) {
          _0x225af2 = _0x4fb0c6[_0x5b5629.charCodeAt(_0xc556c6)];
          _0x468411 = _0x4fb0c6[_0x5b5629.charCodeAt(_0xc556c6 + 0x1)];
          _0x50aee3 = _0x4fb0c6[_0x5b5629.charCodeAt(_0xc556c6 + 0x2)];
          _0x1e33f2 = _0x4fb0c6[_0x5b5629.charCodeAt(_0xc556c6 + 0x3)];
          _0x29b740[_0x2fb242++] = _0x225af2 << 0x2 | _0x468411 >> 0x4;
          _0x29b740[_0x2fb242++] = (_0x468411 & 0xf) << 0x4 | _0x50aee3 >> 0x2;
          _0x29b740[_0x2fb242++] = (_0x50aee3 & 0x3) << 0x6 | _0x1e33f2 & 0x3f;
        }
        return _0x21d22b;
      };
    },
    './node_modules/engine.io-parser/build/esm/decodePacket.browser.js': (_0x3d0731, _0x2c6597, _0x5e8db4) => {
      'use strict';

      _0x5e8db4.r(_0x2c6597);
      _0x5e8db4.d(_0x2c6597, {
        'decodePacket': () => _0x27b6d1
      });
      var _0x4bc947 = _0x5e8db4('./node_modules/engine.io-parser/build/esm/commons.js');
      var _0x2753ff = _0x5e8db4("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
      const _0x5689fc = typeof ArrayBuffer === 'function';
      const _0x27b6d1 = (_0x2b066c, _0x59ed68) => {
        if (typeof _0x2b066c !== "string") {
          return {
            'type': "message",
            'data': _0x2835b6(_0x2b066c, _0x59ed68)
          };
        }
        const _0x201355 = _0x2b066c.charAt(0x0);
        if (_0x201355 === 'b') {
          return {
            'type': "message",
            'data': _0x411f18(_0x2b066c.substring(0x1), _0x59ed68)
          };
        }
        const _0x5e8d02 = _0x4bc947.PACKET_TYPES_REVERSE[_0x201355];
        if (!_0x5e8d02) {
          return _0x4bc947.ERROR_PACKET;
        }
        return _0x2b066c.length > 0x1 ? {
          'type': _0x4bc947.PACKET_TYPES_REVERSE[_0x201355],
          'data': _0x2b066c.substring(0x1)
        } : {
          'type': _0x4bc947.PACKET_TYPES_REVERSE[_0x201355]
        };
      };
      const _0x411f18 = (_0x33503d, _0x206126) => {
        if (_0x5689fc) {
          0x0;
          const _0x10a6a4 = _0x2753ff.decode(_0x33503d);
          return _0x2835b6(_0x10a6a4, _0x206126);
        } else {
          return {
            'base64': true,
            'data': _0x33503d
          };
        }
      };
      const _0x2835b6 = (_0x3315ca, _0x2637de) => {
        switch (_0x2637de) {
          case 'blob':
            return _0x3315ca instanceof Blob ? _0x3315ca : new Blob([_0x3315ca]);
          case "arraybuffer":
          default:
            return _0x3315ca instanceof ArrayBuffer ? _0x3315ca : _0x3315ca.buffer;
        }
      };
    },
    './node_modules/engine.io-parser/build/esm/encodePacket.browser.js': (_0x244781, _0x2d2f1a, _0x5e0b14) => {
      'use strict';

      _0x5e0b14.r(_0x2d2f1a);
      _0x5e0b14.d(_0x2d2f1a, {
        'encodePacket': () => _0x41faae,
        'encodePacketToBinary': () => _0x23031e
      });
      var _0x3d0735 = _0x5e0b14("./node_modules/engine.io-parser/build/esm/commons.js");
      const _0x389dcd = typeof Blob === "function" || typeof Blob !== 'undefined' && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      const _0x49eadc = typeof ArrayBuffer === "function";
      const _0x41faae = ({
        type: _0xbc5d43,
        data: _0x1c7d48
      }, _0x448f48, _0x33d4d2) => {
        if (_0x389dcd && _0x1c7d48 instanceof Blob) {
          return _0x448f48 ? _0x33d4d2(_0x1c7d48) : _0x1f7a0a(_0x1c7d48, _0x33d4d2);
        } else {
          if (_0x49eadc && (_0x1c7d48 instanceof ArrayBuffer || (typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(_0x1c7d48) : _0x1c7d48 && _0x1c7d48.buffer instanceof ArrayBuffer))) {
            return _0x448f48 ? _0x33d4d2(_0x1c7d48) : _0x1f7a0a(new Blob([_0x1c7d48]), _0x33d4d2);
          }
        }
        return _0x33d4d2(_0x3d0735.PACKET_TYPES[_0xbc5d43] + (_0x1c7d48 || ''));
      };
      const _0x1f7a0a = (_0xf1e71e, _0x522b1a) => {
        const _0x1d3a08 = new FileReader();
        _0x1d3a08.onload = function () {
          const _0x49c79b = _0x1d3a08.result.split(',')[0x1];
          _0x522b1a('b' + (_0x49c79b || ''));
        };
        return _0x1d3a08.readAsDataURL(_0xf1e71e);
      };
      function _0x4c6b19(_0x57e9c2) {
        if (_0x57e9c2 instanceof Uint8Array) {
          return _0x57e9c2;
        } else {
          return _0x57e9c2 instanceof ArrayBuffer ? new Uint8Array(_0x57e9c2) : new Uint8Array(_0x57e9c2.buffer, _0x57e9c2.byteOffset, _0x57e9c2.byteLength);
        }
      }
      let _0x3048b9;
      function _0x23031e(_0x20a818, _0x3e5083) {
        if (_0x389dcd && _0x20a818.data instanceof Blob) {
          return _0x20a818.data.arrayBuffer().then(_0x4c6b19).then(_0x3e5083);
        } else {
          if (_0x49eadc && (_0x20a818.data instanceof ArrayBuffer || (typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(_0x20a818.data) : _0x20a818.data && _0x20a818.data.buffer instanceof ArrayBuffer))) {
            return _0x3e5083(_0x4c6b19(_0x20a818.data));
          }
        }
        _0x41faae(_0x20a818, false, _0x15d200 => {
          if (!_0x3048b9) {
            _0x3048b9 = new TextEncoder();
          }
          _0x3e5083(_0x3048b9.encode(_0x15d200));
        });
      }
    },
    './node_modules/engine.io-parser/build/esm/index.js': (_0x3dfbd3, _0x52e8c9, _0x1b6e2d) => {
      'use strict';

      _0x1b6e2d.r(_0x52e8c9);
      _0x1b6e2d.d(_0x52e8c9, {
        'createPacketDecoderStream': () => _0x488119,
        'createPacketEncoderStream': () => _0x18f409,
        'decodePacket': () => _0x4e46e5.decodePacket,
        'decodePayload': () => _0x58a2fd,
        'encodePacket': () => _0x1f073d.encodePacket,
        'encodePayload': () => _0x20c0ca,
        'protocol': () => 0x4
      });
      var _0x1f073d = _0x1b6e2d("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
      var _0x4e46e5 = _0x1b6e2d('./node_modules/engine.io-parser/build/esm/decodePacket.browser.js');
      var _0x5369d2 = _0x1b6e2d('./node_modules/engine.io-parser/build/esm/commons.js');
      const _0x178305 = String.fromCharCode(0x1e);
      const _0x20c0ca = (_0x341d38, _0x16be5f) => {
        const _0x274d5b = _0x341d38.length;
        const _0x3a0f83 = new Array(_0x274d5b);
        let _0x11eecc = 0x0;
        _0x341d38.forEach((_0x2bd184, _0xbf2bfe) => {
          0x0;
          _0x1f073d.encodePacket(_0x2bd184, false, _0x3e4acb => {
            _0x3a0f83[_0xbf2bfe] = _0x3e4acb;
            if (++_0x11eecc === _0x274d5b) {
              _0x16be5f(_0x3a0f83.join(_0x178305));
            }
          });
        });
      };
      const _0x58a2fd = (_0x3e291d, _0x55d174) => {
        const _0x2a8cbe = _0x3e291d.split(_0x178305);
        const _0x281ec1 = [];
        for (let _0x57c25a = 0x0; _0x57c25a < _0x2a8cbe.length; _0x57c25a++) {
          0x0;
          const _0x5666aa = _0x4e46e5.decodePacket(_0x2a8cbe[_0x57c25a], _0x55d174);
          _0x281ec1.push(_0x5666aa);
          if (_0x5666aa.type === "error") {
            break;
          }
        }
        return _0x281ec1;
      };
      function _0x18f409() {
        return new TransformStream({
          'transform'(_0x39393c, _0x5a7191) {
            0x0;
            _0x1f073d.encodePacketToBinary(_0x39393c, _0x55873e => {
              const _0x4a5285 = _0x55873e.length;
              let _0x274eda;
              if (_0x4a5285 < 0x7e) {
                _0x274eda = new Uint8Array(0x1);
                new DataView(_0x274eda.buffer).setUint8(0x0, _0x4a5285);
              } else {
                if (_0x4a5285 < 0x10000) {
                  _0x274eda = new Uint8Array(0x3);
                  const _0x1b248c = new DataView(_0x274eda.buffer);
                  _0x1b248c.setUint8(0x0, 0x7e);
                  _0x1b248c.setUint16(0x1, _0x4a5285);
                } else {
                  _0x274eda = new Uint8Array(0x9);
                  const _0x1e2376 = new DataView(_0x274eda.buffer);
                  _0x1e2376.setUint8(0x0, 0x7f);
                  _0x1e2376.setBigUint64(0x1, BigInt(_0x4a5285));
                }
              }
              if (_0x39393c.data && typeof _0x39393c.data !== 'string') {
                _0x274eda[0x0] |= 0x80;
              }
              _0x5a7191.enqueue(_0x274eda);
              _0x5a7191.enqueue(_0x55873e);
            });
          }
        });
      }
      let _0x541c46;
      function _0x560bc5(_0x2edddc) {
        return _0x2edddc.reduce((_0x488980, _0x2db7a2) => _0x488980 + _0x2db7a2.length, 0x0);
      }
      function _0x30798d(_0x293fa8, _0x395fd9) {
        if (_0x293fa8[0x0].length === _0x395fd9) {
          return _0x293fa8.shift();
        }
        const _0x5e479d = new Uint8Array(_0x395fd9);
        let _0x23f6af = 0x0;
        for (let _0x2de2bf = 0x0; _0x2de2bf < _0x395fd9; _0x2de2bf++) {
          _0x5e479d[_0x2de2bf] = _0x293fa8[0x0][_0x23f6af++];
          if (_0x23f6af === _0x293fa8[0x0].length) {
            _0x293fa8.shift();
            _0x23f6af = 0x0;
          }
        }
        if (_0x293fa8.length && _0x23f6af < _0x293fa8[0x0].length) {
          _0x293fa8[0x0] = _0x293fa8[0x0].slice(_0x23f6af);
        }
        return _0x5e479d;
      }
      function _0x488119(_0x12b9ad, _0x686b8f) {
        if (!_0x541c46) {
          _0x541c46 = new TextDecoder();
        }
        const _0x3693ab = [];
        let _0x4016ed = 0x0;
        let _0xe4396f = -0x1;
        let _0xbd82ac = false;
        return new TransformStream({
          'transform'(_0x4f36ad, _0x386912) {
            _0x3693ab.push(_0x4f36ad);
            while (true) {
              if (_0x4016ed === 0x0) {
                if (_0x560bc5(_0x3693ab) < 0x1) {
                  break;
                }
                const _0x16d270 = _0x30798d(_0x3693ab, 0x1);
                _0xbd82ac = (_0x16d270[0x0] & 0x80) === 0x80;
                _0xe4396f = _0x16d270[0x0] & 0x7f;
                if (_0xe4396f < 0x7e) {
                  _0x4016ed = 0x3;
                } else if (_0xe4396f === 0x7e) {
                  _0x4016ed = 0x1;
                } else {
                  _0x4016ed = 0x2;
                }
              } else {
                if (_0x4016ed === 0x1) {
                  if (_0x560bc5(_0x3693ab) < 0x2) {
                    break;
                  }
                  const _0x117030 = _0x30798d(_0x3693ab, 0x2);
                  _0xe4396f = new DataView(_0x117030.buffer, _0x117030.byteOffset, _0x117030.length).getUint16(0x0);
                  _0x4016ed = 0x3;
                } else {
                  if (_0x4016ed === 0x2) {
                    if (_0x560bc5(_0x3693ab) < 0x8) {
                      break;
                    }
                    const _0x163181 = _0x30798d(_0x3693ab, 0x8);
                    const _0x1140f8 = new DataView(_0x163181.buffer, _0x163181.byteOffset, _0x163181.length);
                    const _0x119ae4 = _0x1140f8.getUint32(0x0);
                    if (_0x119ae4 > Math.pow(0x2, 21) - 0x1) {
                      _0x386912.enqueue(_0x5369d2.ERROR_PACKET);
                      break;
                    }
                    _0xe4396f = _0x119ae4 * Math.pow(0x2, 0x20) + _0x1140f8.getUint32(0x4);
                    _0x4016ed = 0x3;
                  } else {
                    if (_0x560bc5(_0x3693ab) < _0xe4396f) {
                      break;
                    }
                    const _0x208a4a = _0x30798d(_0x3693ab, _0xe4396f);
                    0x0;
                    _0x386912.enqueue(_0x4e46e5.decodePacket(_0xbd82ac ? _0x208a4a : _0x541c46.decode(_0x208a4a), _0x686b8f));
                    _0x4016ed = 0x0;
                  }
                }
              }
              if (_0xe4396f === 0x0 || _0xe4396f > _0x12b9ad) {
                _0x386912.enqueue(_0x5369d2.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
    },
    './node_modules/socket.io-client/build/esm/contrib/backo2.js': (_0x3f625c, _0x3f1a9f, _0x1d6f5f) => {
      'use strict';

      _0x1d6f5f.r(_0x3f1a9f);
      _0x1d6f5f.d(_0x3f1a9f, {
        'Backoff': () => _0x493f54
      });
      function _0x493f54(_0x1f1344) {
        _0x1f1344 = _0x1f1344 || {};
        this.ms = _0x1f1344.min || 0x64;
        this.max = _0x1f1344.max || 0x2710;
        this.factor = _0x1f1344.factor || 0x2;
        this.jitter = _0x1f1344.jitter > 0x0 && _0x1f1344.jitter <= 0x1 ? _0x1f1344.jitter : 0x0;
        this.attempts = 0x0;
      }
      _0x493f54.prototype.duration = function () {
        var _0x1c968e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var _0x18247b = Math.random();
          var _0x524cf9 = Math.floor(_0x18247b * this.jitter * _0x1c968e);
          _0x1c968e = (Math.floor(_0x18247b * 0xa) & 0x1) == 0x0 ? _0x1c968e - _0x524cf9 : _0x1c968e + _0x524cf9;
        }
        return Math.min(_0x1c968e, this.max) | 0x0;
      };
      _0x493f54.prototype.reset = function () {
        this.attempts = 0x0;
      };
      _0x493f54.prototype.setMin = function (_0x1f6d43) {
        this.ms = _0x1f6d43;
      };
      _0x493f54.prototype.setMax = function (_0x4fba81) {
        this.max = _0x4fba81;
      };
      _0x493f54.prototype.setJitter = function (_0x19ace3) {
        this.jitter = _0x19ace3;
      };
    },
    './node_modules/socket.io-client/build/esm/index.js': (_0x287e97, _0x238f5b, _0x3e59d8) => {
      'use strict';

      _0x3e59d8.r(_0x238f5b);
      _0x3e59d8.d(_0x238f5b, {
        'Manager': () => _0x2d048f.Manager,
        'Socket': () => _0x266281.Socket,
        'connect': () => _0x4e0a24,
        'default': () => _0x4e0a24,
        'io': () => _0x4e0a24,
        'protocol': () => _0x33c806.protocol
      });
      var _0x5a8add = _0x3e59d8("./node_modules/socket.io-client/build/esm/url.js");
      var _0x2d048f = _0x3e59d8("./node_modules/socket.io-client/build/esm/manager.js");
      var _0x266281 = _0x3e59d8("./node_modules/socket.io-client/build/esm/socket.js");
      var _0x33c806 = _0x3e59d8("./node_modules/socket.io-parser/build/esm/index.js");
      const _0x8f8843 = {};
      function _0x4e0a24(_0x33c771, _0x35cf95) {
        if (typeof _0x33c771 === "object") {
          _0x35cf95 = _0x33c771;
          _0x33c771 = undefined;
        }
        _0x35cf95 = _0x35cf95 || {};
        0x0;
        const _0x420bc3 = _0x5a8add.url(_0x33c771, _0x35cf95.path || '/socket.io');
        const _0x35965e = _0x420bc3.source;
        const _0xef4ef0 = _0x420bc3.id;
        const _0x233176 = _0x420bc3.path;
        const _0x5320fc = _0x8f8843[_0xef4ef0] && _0x233176 in _0x8f8843[_0xef4ef0].nsps;
        const _0x831335 = _0x35cf95.forceNew || _0x35cf95["force new connection"] || false === _0x35cf95.multiplex || _0x5320fc;
        let _0x11847a;
        if (_0x831335) {
          _0x11847a = new _0x2d048f.Manager(_0x35965e, _0x35cf95);
        } else {
          if (!_0x8f8843[_0xef4ef0]) {
            _0x8f8843[_0xef4ef0] = new _0x2d048f.Manager(_0x35965e, _0x35cf95);
          }
          _0x11847a = _0x8f8843[_0xef4ef0];
        }
        if (_0x420bc3.query && !_0x35cf95.query) {
          _0x35cf95.query = _0x420bc3.queryKey;
        }
        return _0x11847a.socket(_0x420bc3.path, _0x35cf95);
      }
      Object.assign(_0x4e0a24, {
        'Manager': _0x2d048f.Manager,
        'Socket': _0x266281.Socket,
        'io': _0x4e0a24,
        'connect': _0x4e0a24
      });
    },
    './node_modules/socket.io-client/build/esm/manager.js': (_0x1eef84, _0x58bf72, _0x2ea31d) => {
      'use strict';

      _0x2ea31d.r(_0x58bf72);
      _0x2ea31d.d(_0x58bf72, {
        'Manager': () => _0x2b7d37
      });
      var _0x13e4b7 = _0x2ea31d("./node_modules/engine.io-client/build/esm/index.js");
      var _0x48092e = _0x2ea31d("./node_modules/socket.io-client/build/esm/socket.js");
      var _0x38d2aa = _0x2ea31d("./node_modules/socket.io-parser/build/esm/index.js");
      var _0xac3794 = _0x2ea31d("./node_modules/socket.io-client/build/esm/on.js");
      var _0x40512e = _0x2ea31d("./node_modules/socket.io-client/build/esm/contrib/backo2.js");
      var _0x128a32 = _0x2ea31d("./node_modules/@socket.io/component-emitter/index.mjs");
      class _0x2b7d37 extends _0x128a32.Emitter {
        constructor(_0x4e96d4, _0x152196) {
          var _0x425ce6;
          super();
          this.nsps = {};
          this.subs = [];
          if (_0x4e96d4 && 'object' === typeof _0x4e96d4) {
            _0x152196 = _0x4e96d4;
            _0x4e96d4 = undefined;
          }
          _0x152196 = _0x152196 || {};
          _0x152196.path = _0x152196.path || '/socket.io';
          this.opts = _0x152196;
          0x0;
          _0x13e4b7.installTimerFunctions(this, _0x152196);
          this.reconnection(_0x152196.reconnection !== false);
          this.reconnectionAttempts(_0x152196.reconnectionAttempts || Infinity);
          this.reconnectionDelay(_0x152196.reconnectionDelay || 0x3e8);
          this.reconnectionDelayMax(_0x152196.reconnectionDelayMax || 0x1388);
          this.randomizationFactor((_0x425ce6 = _0x152196.randomizationFactor) !== null && _0x425ce6 !== undefined ? _0x425ce6 : 0.5);
          this.backoff = new _0x40512e.Backoff({
            'min': this.reconnectionDelay(),
            'max': this.reconnectionDelayMax(),
            'jitter': this.randomizationFactor()
          });
          this.timeout(null == _0x152196.timeout ? 0x4e20 : _0x152196.timeout);
          this._readyState = "closed";
          this.uri = _0x4e96d4;
          const _0x1abfa4 = _0x152196.parser || _0x38d2aa;
          this.encoder = new _0x1abfa4.Encoder();
          this.decoder = new _0x1abfa4.Decoder();
          this._autoConnect = _0x152196.autoConnect !== false;
          if (this._autoConnect) {
            this.open();
          }
        }
        ["reconnection"](_0x5a5e55) {
          if (!arguments.length) {
            return this._reconnection;
          }
          this._reconnection = !!_0x5a5e55;
          return this;
        }
        ["reconnectionAttempts"](_0x3d2e3c) {
          if (_0x3d2e3c === undefined) {
            return this._reconnectionAttempts;
          }
          this._reconnectionAttempts = _0x3d2e3c;
          return this;
        }
        ['reconnectionDelay'](_0x3a696e) {
          var _0x3aa281;
          if (_0x3a696e === undefined) {
            return this._reconnectionDelay;
          }
          this._reconnectionDelay = _0x3a696e;
          if ((_0x3aa281 = this.backoff) === null || _0x3aa281 === undefined) {
            undefined;
          } else {
            _0x3aa281.setMin(_0x3a696e);
          }
          return this;
        }
        ["randomizationFactor"](_0x3cbb89) {
          var _0x5a1055;
          if (_0x3cbb89 === undefined) {
            return this._randomizationFactor;
          }
          this._randomizationFactor = _0x3cbb89;
          if ((_0x5a1055 = this.backoff) === null || _0x5a1055 === undefined) {
            undefined;
          } else {
            _0x5a1055.setJitter(_0x3cbb89);
          }
          return this;
        }
        ["reconnectionDelayMax"](_0x35174c) {
          var _0x3fca42;
          if (_0x35174c === undefined) {
            return this._reconnectionDelayMax;
          }
          this._reconnectionDelayMax = _0x35174c;
          if ((_0x3fca42 = this.backoff) === null || _0x3fca42 === undefined) {
            undefined;
          } else {
            _0x3fca42.setMax(_0x35174c);
          }
          return this;
        }
        ['timeout'](_0x34709c) {
          if (!arguments.length) {
            return this._timeout;
          }
          this._timeout = _0x34709c;
          return this;
        }
        ["maybeReconnectOnOpen"]() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0x0) {
            this.reconnect();
          }
        }
        ["open"](_0x231a41) {
          if (~this._readyState.indexOf("open")) {
            return this;
          }
          this.engine = new _0x13e4b7.Socket(this.uri, this.opts);
          const _0x3343cd = this.engine;
          const _0x8e5a70 = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          0x0;
          const _0x498ff9 = _0xac3794.on(_0x3343cd, 'open', function () {
            _0x8e5a70.onopen();
            if (_0x231a41) {
              _0x231a41();
            }
          });
          const _0x359e71 = _0x13b991 => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", _0x13b991);
            if (_0x231a41) {
              _0x231a41(_0x13b991);
            } else {
              this.maybeReconnectOnOpen();
            }
          };
          0x0;
          const _0x4e6368 = _0xac3794.on(_0x3343cd, 'error', _0x359e71);
          if (false !== this._timeout) {
            const _0x48f77a = this._timeout;
            const _0x49e08e = this.setTimeoutFn(() => {
              _0x498ff9();
              _0x359e71(new Error("timeout"));
              _0x3343cd.close();
            }, _0x48f77a);
            if (this.opts.autoUnref) {
              _0x49e08e.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(_0x49e08e);
            });
          }
          this.subs.push(_0x498ff9);
          this.subs.push(_0x4e6368);
          return this;
        }
        ["connect"](_0xde205f) {
          return this.open(_0xde205f);
        }
        ["onopen"]() {
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const _0xcb8f28 = this.engine;
          0x0;
          0x0;
          0x0;
          0x0;
          0x0;
          this.subs.push(_0xac3794.on(_0xcb8f28, "ping", this.onping.bind(this)), _0xac3794.on(_0xcb8f28, "data", this.ondata.bind(this)), _0xac3794.on(_0xcb8f28, "error", this.onerror.bind(this)), _0xac3794.on(_0xcb8f28, 'close', this.onclose.bind(this)), _0xac3794.on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        ["onping"]() {
          this.emitReserved('ping');
        }
        ["ondata"](_0x37ba09) {
          try {
            this.decoder.add(_0x37ba09);
          } catch (_0x11b200) {
            this.onclose("parse error", _0x11b200);
          }
        }
        ['ondecoded'](_0x40e76b) {
          0x0;
          _0x13e4b7.nextTick(() => {
            this.emitReserved("packet", _0x40e76b);
          }, this.setTimeoutFn);
        }
        ["onerror"](_0x9b72b6) {
          this.emitReserved('error', _0x9b72b6);
        }
        ["socket"](_0x3870e9, _0x588af4) {
          let _0x1ff866 = this.nsps[_0x3870e9];
          if (!_0x1ff866) {
            _0x1ff866 = new _0x48092e.Socket(this, _0x3870e9, _0x588af4);
            this.nsps[_0x3870e9] = _0x1ff866;
          } else if (this._autoConnect && !_0x1ff866.active) {
            _0x1ff866.connect();
          }
          return _0x1ff866;
        }
        ["_destroy"](_0x4e63f8) {
          const _0x469d85 = Object.keys(this.nsps);
          for (const _0x34c605 of _0x469d85) {
            const _0x2e03fb = this.nsps[_0x34c605];
            if (_0x2e03fb.active) {
              return;
            }
          }
          this._close();
        }
        ['_packet'](_0x2f5a1e) {
          const _0x5338e8 = this.encoder.encode(_0x2f5a1e);
          for (let _0x566707 = 0x0; _0x566707 < _0x5338e8.length; _0x566707++) {
            this.engine.write(_0x5338e8[_0x566707], _0x2f5a1e.options);
          }
        }
        ["cleanup"]() {
          this.subs.forEach(_0x4561b2 => _0x4561b2());
          this.subs.length = 0x0;
          this.decoder.destroy();
        }
        ["_close"]() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
          if (this.engine) {
            this.engine.close();
          }
        }
        ["disconnect"]() {
          return this._close();
        }
        ["onclose"](_0xf717d5, _0x3930fb) {
          this.cleanup();
          this.backoff.reset();
          this._readyState = 'closed';
          this.emitReserved("close", _0xf717d5, _0x3930fb);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        ["reconnect"]() {
          if (this._reconnecting || this.skipReconnect) {
            return this;
          }
          const _0x35dc9b = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved('reconnect_failed');
            this._reconnecting = false;
          } else {
            const _0x52e078 = this.backoff.duration();
            this._reconnecting = true;
            const _0x25e6fd = this.setTimeoutFn(() => {
              if (_0x35dc9b.skipReconnect) {
                return;
              }
              this.emitReserved("reconnect_attempt", _0x35dc9b.backoff.attempts);
              if (_0x35dc9b.skipReconnect) {
                return;
              }
              _0x35dc9b.open(_0x3ed4f3 => {
                if (_0x3ed4f3) {
                  _0x35dc9b._reconnecting = false;
                  _0x35dc9b.reconnect();
                  this.emitReserved("reconnect_error", _0x3ed4f3);
                } else {
                  _0x35dc9b.onreconnect();
                }
              });
            }, _0x52e078);
            if (this.opts.autoUnref) {
              _0x25e6fd.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(_0x25e6fd);
            });
          }
        }
        ["onreconnect"]() {
          const _0x416b0d = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", _0x416b0d);
        }
      }
    },
    './node_modules/socket.io-client/build/esm/on.js': (_0x491489, _0x863ce8, _0x361091) => {
      'use strict';

      _0x361091.r(_0x863ce8);
      _0x361091.d(_0x863ce8, {
        'on': () => _0x3fdf78
      });
      function _0x3fdf78(_0xf61ed5, _0x224a9d, _0x3b50f8) {
        _0xf61ed5.on(_0x224a9d, _0x3b50f8);
        return function _0x498878() {
          _0xf61ed5.off(_0x224a9d, _0x3b50f8);
        };
      }
    },
    './node_modules/socket.io-client/build/esm/socket.js': (_0x4fb84b, _0x1dce7a, _0x3d43a3) => {
      'use strict';

      _0x3d43a3.r(_0x1dce7a);
      _0x3d43a3.d(_0x1dce7a, {
        'Socket': () => _0x22ecd2
      });
      var _0x5bfd2d = _0x3d43a3("./node_modules/socket.io-parser/build/esm/index.js");
      var _0x4c32c5 = _0x3d43a3("./node_modules/socket.io-client/build/esm/on.js");
      var _0x4552c6 = _0x3d43a3('./node_modules/@socket.io/component-emitter/index.mjs');
      const _0x46cfd5 = Object.freeze({
        'connect': 0x1,
        'connect_error': 0x1,
        'disconnect': 0x1,
        'disconnecting': 0x1,
        'newListener': 0x1,
        'removeListener': 0x1
      });
      class _0x22ecd2 extends _0x4552c6.Emitter {
        constructor(_0x55b7b0, _0x3226f9, _0xddd896) {
          super();
          this.connected = false;
          this.recovered = false;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this._queue = [];
          this._queueSeq = 0x0;
          this.ids = 0x0;
          this.acks = {};
          this.flags = {};
          this.io = _0x55b7b0;
          this.nsp = _0x3226f9;
          if (_0xddd896 && _0xddd896.auth) {
            this.auth = _0xddd896.auth;
          }
          this._opts = Object.assign({}, _0xddd896);
          if (this.io._autoConnect) {
            this.open();
          }
        }
        get ["disconnected"]() {
          return !this.connected;
        }
        ["subEvents"]() {
          if (this.subs) {
            return;
          }
          const _0x1e7bb6 = this.io;
          0x0;
          0x0;
          0x0;
          0x0;
          this.subs = [_0x4c32c5.on(_0x1e7bb6, 'open', this.onopen.bind(this)), _0x4c32c5.on(_0x1e7bb6, "packet", this.onpacket.bind(this)), _0x4c32c5.on(_0x1e7bb6, "error", this.onerror.bind(this)), _0x4c32c5.on(_0x1e7bb6, "close", this.onclose.bind(this))];
        }
        get ["active"]() {
          return !!this.subs;
        }
        ["connect"]() {
          if (this.connected) {
            return this;
          }
          this.subEvents();
          if (!this.io._reconnecting) {
            this.io.open();
          }
          if ("open" === this.io._readyState) {
            this.onopen();
          }
          return this;
        }
        ["open"]() {
          return this.connect();
        }
        ['send'](..._0x1aab10) {
          _0x1aab10.unshift('message');
          this.emit.apply(this, _0x1aab10);
          return this;
        }
        ["emit"](_0x2081a0, ..._0x42e032) {
          if (_0x46cfd5.hasOwnProperty(_0x2081a0)) {
            throw new Error("\"" + _0x2081a0.toString() + "\" is a reserved event name");
          }
          _0x42e032.unshift(_0x2081a0);
          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(_0x42e032);
            return this;
          }
          const _0xf43ef1 = {
            'type': _0x5bfd2d.PacketType.EVENT,
            'data': _0x42e032
          };
          _0xf43ef1.options = {};
          _0xf43ef1.options.compress = this.flags.compress !== false;
          if ("function" === typeof _0x42e032[_0x42e032.length - 0x1]) {
            const _0x85014 = this.ids++;
            const _0x50b1d3 = _0x42e032.pop();
            this._registerAckCallback(_0x85014, _0x50b1d3);
            _0xf43ef1.id = _0x85014;
          }
          const _0x47d81f = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          const _0x584de7 = this.flags.volatile && (!_0x47d81f || !this.connected);
          if (_0x584de7) {} else if (this.connected) {
            this.notifyOutgoingListeners(_0xf43ef1);
            this.packet(_0xf43ef1);
          } else {
            this.sendBuffer.push(_0xf43ef1);
          }
          this.flags = {};
          return this;
        }
        ["_registerAckCallback"](_0x1f8f1e, _0x1fe5d6) {
          var _0x2ffd91;
          const _0x332aa4 = (_0x2ffd91 = this.flags.timeout) !== null && _0x2ffd91 !== undefined ? _0x2ffd91 : this._opts.ackTimeout;
          if (_0x332aa4 === undefined) {
            this.acks[_0x1f8f1e] = _0x1fe5d6;
            return;
          }
          const _0x130671 = this.io.setTimeoutFn(() => {
            delete this.acks[_0x1f8f1e];
            for (let _0x1c1961 = 0x0; _0x1c1961 < this.sendBuffer.length; _0x1c1961++) {
              if (this.sendBuffer[_0x1c1961].id === _0x1f8f1e) {
                this.sendBuffer.splice(_0x1c1961, 0x1);
              }
            }
            _0x1fe5d6.call(this, new Error("operation has timed out"));
          }, _0x332aa4);
          this.acks[_0x1f8f1e] = (..._0x8584c1) => {
            this.io.clearTimeoutFn(_0x130671);
            _0x1fe5d6.apply(this, [null, ..._0x8584c1]);
          };
        }
        ["emitWithAck"](_0x350eab, ..._0x2184dc) {
          const _0x41d030 = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
          return new Promise((_0x504c02, _0x1ec794) => {
            _0x2184dc.push((_0x166eb6, _0x128464) => {
              return _0x41d030 ? _0x166eb6 ? _0x1ec794(_0x166eb6) : _0x504c02(_0x128464) : _0x504c02(_0x166eb6);
            });
            this.emit(_0x350eab, ..._0x2184dc);
          });
        }
        ["_addToQueue"](_0x5e26ce) {
          let _0x18b85d;
          if (typeof _0x5e26ce[_0x5e26ce.length - 0x1] === "function") {
            _0x18b85d = _0x5e26ce.pop();
          }
          const _0x4c6f5a = {
            'id': this._queueSeq++,
            'tryCount': 0x0,
            'pending': false,
            'args': _0x5e26ce,
            'flags': Object.assign({
              'fromQueue': true
            }, this.flags)
          };
          _0x5e26ce.push((_0x5d8928, ..._0x709925) => {
            if (_0x4c6f5a !== this._queue[0x0]) {
              return;
            }
            const _0xeb5805 = _0x5d8928 !== null;
            if (_0xeb5805) {
              if (0x0 > this._opts.retries) {
                this._queue.shift();
                if (_0x18b85d) {
                  _0x18b85d(_0x5d8928);
                }
              }
            } else {
              this._queue.shift();
              if (_0x18b85d) {
                _0x18b85d(null, ..._0x709925);
              }
            }
            _0x4c6f5a.pending = false;
            return this._drainQueue();
          });
          this._queue.push(_0x4c6f5a);
          this._drainQueue();
        }
        ["_drainQueue"](_0x339ccf = false) {
          if (!this.connected || this._queue.length === 0x0) {
            return;
          }
          const _0x55c3b5 = this._queue[0x0];
          if (_0x55c3b5.pending && !_0x339ccf) {
            return;
          }
          _0x55c3b5.pending = true;
          _0x55c3b5.tryCount++;
          this.flags = _0x55c3b5.flags;
          this.emit.apply(this, _0x55c3b5.args);
        }
        ['packet'](_0x579a16) {
          _0x579a16.nsp = this.nsp;
          this.io._packet(_0x579a16);
        }
        ["onopen"]() {
          if (typeof this.auth == "function") {
            this.auth(_0xee3339 => {
              this._sendConnectPacket(_0xee3339);
            });
          } else {
            this._sendConnectPacket(this.auth);
          }
        }
        ["_sendConnectPacket"](_0x384a3e) {
          this.packet({
            'type': _0x5bfd2d.PacketType.CONNECT,
            'data': this._pid ? Object.assign({
              'pid': this._pid,
              'offset': this._lastOffset
            }, _0x384a3e) : _0x384a3e
          });
        }
        ["onerror"](_0x2bcb3) {
          if (!this.connected) {
            this.emitReserved("connect_error", _0x2bcb3);
          }
        }
        ['onclose'](_0x27af5d, _0x79ac11) {
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", _0x27af5d, _0x79ac11);
        }
        ["onpacket"](_0x5ef7b4) {
          const _0x1eb0fb = _0x5ef7b4.nsp === this.nsp;
          if (!_0x1eb0fb) {
            return;
          }
          switch (_0x5ef7b4.type) {
            case _0x5bfd2d.PacketType.CONNECT:
              if (_0x5ef7b4.data && _0x5ef7b4.data.sid) {
                this.onconnect(_0x5ef7b4.data.sid, _0x5ef7b4.data.pid);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
              break;
            case _0x5bfd2d.PacketType.EVENT:
            case _0x5bfd2d.PacketType.BINARY_EVENT:
              this.onevent(_0x5ef7b4);
              break;
            case _0x5bfd2d.PacketType.ACK:
            case _0x5bfd2d.PacketType.BINARY_ACK:
              this.onack(_0x5ef7b4);
              break;
            case _0x5bfd2d.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case _0x5bfd2d.PacketType.CONNECT_ERROR:
              this.destroy();
              const _0x4c8263 = new Error(_0x5ef7b4.data.message);
              _0x4c8263.data = _0x5ef7b4.data.data;
              this.emitReserved("connect_error", _0x4c8263);
              break;
          }
        }
        ["onevent"](_0x4e3087) {
          const _0x4006a0 = _0x4e3087.data || [];
          if (null != _0x4e3087.id) {
            _0x4006a0.push(this.ack(_0x4e3087.id));
          }
          if (this.connected) {
            this.emitEvent(_0x4006a0);
          } else {
            this.receiveBuffer.push(Object.freeze(_0x4006a0));
          }
        }
        ['emitEvent'](_0x31d73b) {
          if (this._anyListeners && this._anyListeners.length) {
            const _0x1061bd = this._anyListeners.slice();
            for (const _0x4c9e9e of _0x1061bd) {
              _0x4c9e9e.apply(this, _0x31d73b);
            }
          }
          super.emit.apply(this, _0x31d73b);
          if (this._pid && _0x31d73b.length && typeof _0x31d73b[_0x31d73b.length - 0x1] === "string") {
            this._lastOffset = _0x31d73b[_0x31d73b.length - 0x1];
          }
        }
        ["ack"](_0xf87845) {
          const _0x2987fc = this;
          let _0x213e86 = false;
          return function (..._0x16db91) {
            if (_0x213e86) {
              return;
            }
            _0x213e86 = true;
            _0x2987fc.packet({
              'type': _0x5bfd2d.PacketType.ACK,
              'id': _0xf87845,
              'data': _0x16db91
            });
          };
        }
        ['onack'](_0x54645f) {
          const _0x1a9d90 = this.acks[_0x54645f.id];
          if ("function" === typeof _0x1a9d90) {
            _0x1a9d90.apply(this, _0x54645f.data);
            delete this.acks[_0x54645f.id];
          } else {}
        }
        ['onconnect'](_0x4fa442, _0x3c3509) {
          this.id = _0x4fa442;
          this.recovered = _0x3c3509 && this._pid === _0x3c3509;
          this._pid = _0x3c3509;
          this.connected = true;
          this.emitBuffered();
          this.emitReserved("connect");
          this._drainQueue(true);
        }
        ["emitBuffered"]() {
          this.receiveBuffer.forEach(_0x1b534d => this.emitEvent(_0x1b534d));
          this.receiveBuffer = [];
          this.sendBuffer.forEach(_0x6c4915 => {
            this.notifyOutgoingListeners(_0x6c4915);
            this.packet(_0x6c4915);
          });
          this.sendBuffer = [];
        }
        ["ondisconnect"]() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        ["destroy"]() {
          if (this.subs) {
            this.subs.forEach(_0x5f496b => _0x5f496b());
            this.subs = undefined;
          }
          this.io._destroy(this);
        }
        ["disconnect"]() {
          if (this.connected) {
            this.packet({
              'type': _0x5bfd2d.PacketType.DISCONNECT
            });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        ["close"]() {
          return this.disconnect();
        }
        ["compress"](_0x2c09e6) {
          this.flags.compress = _0x2c09e6;
          return this;
        }
        get ["volatile"]() {
          this.flags.volatile = true;
          return this;
        }
        ["timeout"](_0x19d92d) {
          this.flags.timeout = _0x19d92d;
          return this;
        }
        ["onAny"](_0x1fd084) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(_0x1fd084);
          return this;
        }
        ["prependAny"](_0x142ad3) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(_0x142ad3);
          return this;
        }
        ['offAny'](_0x3f7c0b) {
          if (!this._anyListeners) {
            return this;
          }
          if (_0x3f7c0b) {
            const _0x585f24 = this._anyListeners;
            for (let _0xa75e0 = 0x0; _0xa75e0 < _0x585f24.length; _0xa75e0++) {
              if (_0x3f7c0b === _0x585f24[_0xa75e0]) {
                _0x585f24.splice(_0xa75e0, 0x1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        ["listenersAny"]() {
          return this._anyListeners || [];
        }
        ['onAnyOutgoing'](_0x5e6002) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.push(_0x5e6002);
          return this;
        }
        ["prependAnyOutgoing"](_0xf04a9e) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.unshift(_0xf04a9e);
          return this;
        }
        ["offAnyOutgoing"](_0x457c6a) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
          if (_0x457c6a) {
            const _0xe83128 = this._anyOutgoingListeners;
            for (let _0x239474 = 0x0; _0x239474 < _0xe83128.length; _0x239474++) {
              if (_0x457c6a === _0xe83128[_0x239474]) {
                _0xe83128.splice(_0x239474, 0x1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
          return this;
        }
        ["listenersAnyOutgoing"]() {
          return this._anyOutgoingListeners || [];
        }
        ["notifyOutgoingListeners"](_0x48d50f) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const _0x30f35a = this._anyOutgoingListeners.slice();
            for (const _0xf21280 of _0x30f35a) {
              _0xf21280.apply(this, _0x48d50f.data);
            }
          }
        }
      }
    },
    './node_modules/socket.io-client/build/esm/url.js': (_0x7536c5, _0x55e548, _0x5efdac) => {
      'use strict';

      _0x5efdac.r(_0x55e548);
      _0x5efdac.d(_0x55e548, {
        'url': () => _0xf5d026
      });
      var _0x2534f7 = _0x5efdac("./node_modules/engine.io-client/build/esm/index.js");
      function _0xf5d026(_0x2f06ca, _0x55b36a = '', _0x16180e) {
        let _0x1b57fa = _0x2f06ca;
        _0x16180e = _0x16180e || typeof location !== "undefined" && location;
        if (null == _0x2f06ca) {
          _0x2f06ca = _0x16180e.protocol + '//' + _0x16180e.host;
        }
        if (typeof _0x2f06ca === "string") {
          if ('/' === _0x2f06ca.charAt(0x0)) {
            if ('/' === _0x2f06ca.charAt(0x1)) {
              _0x2f06ca = _0x16180e.protocol + _0x2f06ca;
            } else {
              _0x2f06ca = _0x16180e.host + _0x2f06ca;
            }
          }
          if (!/^(https?|wss?):\/\//.test(_0x2f06ca)) {
            if ('undefined' !== typeof _0x16180e) {
              _0x2f06ca = _0x16180e.protocol + '//' + _0x2f06ca;
            } else {
              _0x2f06ca = "https://" + _0x2f06ca;
            }
          }
          0x0;
          _0x1b57fa = _0x2534f7.parse(_0x2f06ca);
        }
        if (!_0x1b57fa.port) {
          if (/^(http|ws)$/.test(_0x1b57fa.protocol)) {
            _0x1b57fa.port = '80';
          } else if (/^(http|ws)s$/.test(_0x1b57fa.protocol)) {
            _0x1b57fa.port = '443';
          }
        }
        _0x1b57fa.path = _0x1b57fa.path || '/';
        const _0x4e543f = _0x1b57fa.host.indexOf(':') !== -0x1;
        const _0xb8289e = _0x4e543f ? '[' + _0x1b57fa.host + ']' : _0x1b57fa.host;
        _0x1b57fa.id = _0x1b57fa.protocol + "://" + _0xb8289e + ':' + _0x1b57fa.port + _0x55b36a;
        _0x1b57fa.href = _0x1b57fa.protocol + "://" + _0xb8289e + (_0x16180e && _0x16180e.port === _0x1b57fa.port ? '' : ':' + _0x1b57fa.port);
        return _0x1b57fa;
      }
    },
    './node_modules/socket.io-parser/build/esm/binary.js': (_0x3907c6, _0x3827fe, _0x5f46a5) => {
      'use strict';

      _0x5f46a5.r(_0x3827fe);
      _0x5f46a5.d(_0x3827fe, {
        'deconstructPacket': () => _0x10f847,
        'reconstructPacket': () => _0x3a7044
      });
      var _0x2176c3 = _0x5f46a5("./node_modules/socket.io-parser/build/esm/is-binary.js");
      function _0x10f847(_0x6dd98) {
        const _0x144645 = [];
        const _0x5aa123 = _0x6dd98.data;
        _0x6dd98.data = _0x50d4eb(_0x5aa123, _0x144645);
        _0x6dd98.attachments = _0x144645.length;
        return {
          'packet': _0x6dd98,
          'buffers': _0x144645
        };
      }
      function _0x50d4eb(_0x426d9d, _0x5a6ae1) {
        if (!_0x426d9d) {
          return _0x426d9d;
        }
        0x0;
        if (_0x2176c3.isBinary(_0x426d9d)) {
          const _0x93169f = {
            '_placeholder': true,
            'num': _0x5a6ae1.length
          };
          _0x5a6ae1.push(_0x426d9d);
          return _0x93169f;
        } else {
          if (Array.isArray(_0x426d9d)) {
            const _0x45fbd5 = new Array(_0x426d9d.length);
            for (let _0x72bcf = 0x0; _0x72bcf < _0x426d9d.length; _0x72bcf++) {
              _0x45fbd5[_0x72bcf] = _0x50d4eb(_0x426d9d[_0x72bcf], _0x5a6ae1);
            }
            return _0x45fbd5;
          } else {
            if (typeof _0x426d9d === 'object' && !(_0x426d9d instanceof Date)) {
              const _0x23926e = {};
              for (const _0x7553ad in _0x426d9d) {
                if (Object.prototype.hasOwnProperty.call(_0x426d9d, _0x7553ad)) {
                  _0x23926e[_0x7553ad] = _0x50d4eb(_0x426d9d[_0x7553ad], _0x5a6ae1);
                }
              }
              return _0x23926e;
            }
          }
        }
        return _0x426d9d;
      }
      function _0x3a7044(_0x424441, _0x1c9503) {
        _0x424441.data = _0xc7183b(_0x424441.data, _0x1c9503);
        delete _0x424441.attachments;
        return _0x424441;
      }
      function _0xc7183b(_0x4001f5, _0x380833) {
        if (!_0x4001f5) {
          return _0x4001f5;
        }
        if (_0x4001f5 && _0x4001f5._placeholder === true) {
          const _0x1827a4 = typeof _0x4001f5.num === 'number' && _0x4001f5.num >= 0x0 && _0x4001f5.num < _0x380833.length;
          if (_0x1827a4) {
            return _0x380833[_0x4001f5.num];
          } else {
            throw new Error("illegal attachments");
          }
        } else {
          if (Array.isArray(_0x4001f5)) {
            for (let _0x80015b = 0x0; _0x80015b < _0x4001f5.length; _0x80015b++) {
              _0x4001f5[_0x80015b] = _0xc7183b(_0x4001f5[_0x80015b], _0x380833);
            }
          } else {
            if (typeof _0x4001f5 === 'object') {
              for (const _0x44c4e0 in _0x4001f5) {
                if (Object.prototype.hasOwnProperty.call(_0x4001f5, _0x44c4e0)) {
                  _0x4001f5[_0x44c4e0] = _0xc7183b(_0x4001f5[_0x44c4e0], _0x380833);
                }
              }
            }
          }
        }
        return _0x4001f5;
      }
    },
    './node_modules/socket.io-parser/build/esm/index.js': (_0x2b9622, _0x2e80ea, _0xbc8702) => {
      'use strict';

      _0xbc8702.r(_0x2e80ea);
      _0xbc8702.d(_0x2e80ea, {
        'Decoder': () => _0x5f0264,
        'Encoder': () => _0x44133c,
        'PacketType': () => _0x26307c,
        'protocol': () => 0x5
      });
      var _0x5d492b = _0xbc8702("./node_modules/@socket.io/component-emitter/index.mjs");
      var _0x25dc13 = _0xbc8702("./node_modules/socket.io-parser/build/esm/binary.js");
      var _0x6cf245 = _0xbc8702('./node_modules/socket.io-parser/build/esm/is-binary.js');
      const _0x55c3f1 = ["connect", "connect_error", "disconnect", 'disconnecting', 'newListener', "removeListener"];
      var _0x26307c;
      (function (_0x1270c0) {
        _0x1270c0[_0x1270c0.CONNECT = 0x0] = "CONNECT";
        _0x1270c0[_0x1270c0.DISCONNECT = 0x1] = "DISCONNECT";
        _0x1270c0[_0x1270c0.EVENT = 0x2] = "EVENT";
        _0x1270c0[_0x1270c0.ACK = 0x3] = "ACK";
        _0x1270c0[_0x1270c0.CONNECT_ERROR = 0x4] = 'CONNECT_ERROR';
        _0x1270c0[_0x1270c0.BINARY_EVENT = 0x5] = "BINARY_EVENT";
        _0x1270c0[_0x1270c0.BINARY_ACK = 0x6] = 'BINARY_ACK';
      })(_0x26307c || (_0x26307c = {}));
      class _0x44133c {
        constructor(_0x655506) {
          this.replacer = _0x655506;
        }
        ["encode"](_0x5456a8) {
          if (_0x5456a8.type === _0x26307c.EVENT || _0x5456a8.type === _0x26307c.ACK) {
            0x0;
            if (_0x6cf245.hasBinary(_0x5456a8)) {
              return this.encodeAsBinary({
                'type': _0x5456a8.type === _0x26307c.EVENT ? _0x26307c.BINARY_EVENT : _0x26307c.BINARY_ACK,
                'nsp': _0x5456a8.nsp,
                'data': _0x5456a8.data,
                'id': _0x5456a8.id
              });
            }
          }
          return [this.encodeAsString(_0x5456a8)];
        }
        ['encodeAsString'](_0x34d300) {
          let _0x4877b5 = '' + _0x34d300.type;
          if (_0x34d300.type === _0x26307c.BINARY_EVENT || _0x34d300.type === _0x26307c.BINARY_ACK) {
            _0x4877b5 += _0x34d300.attachments + '-';
          }
          if (_0x34d300.nsp && '/' !== _0x34d300.nsp) {
            _0x4877b5 += _0x34d300.nsp + ',';
          }
          if (null != _0x34d300.id) {
            _0x4877b5 += _0x34d300.id;
          }
          if (null != _0x34d300.data) {
            _0x4877b5 += JSON.stringify(_0x34d300.data, this.replacer);
          }
          return _0x4877b5;
        }
        ["encodeAsBinary"](_0xc846a) {
          0x0;
          const _0x2bed02 = _0x25dc13.deconstructPacket(_0xc846a);
          const _0x166992 = this.encodeAsString(_0x2bed02.packet);
          const _0x29bafb = _0x2bed02.buffers;
          _0x29bafb.unshift(_0x166992);
          return _0x29bafb;
        }
      }
      class _0x5f0264 extends _0x5d492b.Emitter {
        constructor(_0x243f1a) {
          super();
          this.reviver = _0x243f1a;
        }
        ["add"](_0x3029f8) {
          let _0x2891f2;
          if (typeof _0x3029f8 === "string") {
            if (this.reconstructor) {
              throw new Error("got plaintext data when reconstructing a packet");
            }
            _0x2891f2 = this.decodeString(_0x3029f8);
            const _0x3f26a8 = _0x2891f2.type === _0x26307c.BINARY_EVENT;
            if (_0x3f26a8 || _0x2891f2.type === _0x26307c.BINARY_ACK) {
              _0x2891f2.type = _0x3f26a8 ? _0x26307c.EVENT : _0x26307c.ACK;
              this.reconstructor = new _0x3ae3c7(_0x2891f2);
              if (_0x2891f2.attachments === 0x0) {
                super.emitReserved("decoded", _0x2891f2);
              }
            } else {
              super.emitReserved('decoded', _0x2891f2);
            }
          } else {
            0x0;
            if (_0x6cf245.isBinary(_0x3029f8) || _0x3029f8.base64) {
              if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
              } else {
                _0x2891f2 = this.reconstructor.takeBinaryData(_0x3029f8);
                if (_0x2891f2) {
                  this.reconstructor = null;
                  super.emitReserved("decoded", _0x2891f2);
                }
              }
            } else {
              throw new Error("Unknown type: " + _0x3029f8);
            }
          }
        }
        ["decodeString"](_0x3cec48) {
          let _0x4470c8 = 0x0;
          const _0x417243 = {
            'type': Number(_0x3cec48.charAt(0x0))
          };
          if (_0x26307c[_0x417243.type] === undefined) {
            throw new Error("unknown packet type " + _0x417243.type);
          }
          if (_0x417243.type === _0x26307c.BINARY_EVENT || _0x417243.type === _0x26307c.BINARY_ACK) {
            const _0x5e20f1 = _0x4470c8 + 0x1;
            while (_0x3cec48.charAt(++_0x4470c8) !== '-' && _0x4470c8 != _0x3cec48.length) {}
            const _0x47db91 = _0x3cec48.substring(_0x5e20f1, _0x4470c8);
            if (_0x47db91 != Number(_0x47db91) || _0x3cec48.charAt(_0x4470c8) !== '-') {
              throw new Error("Illegal attachments");
            }
            _0x417243.attachments = Number(_0x47db91);
          }
          if ('/' === _0x3cec48.charAt(_0x4470c8 + 0x1)) {
            const _0x400147 = _0x4470c8 + 0x1;
            while (++_0x4470c8) {
              const _0x4b6f2f = _0x3cec48.charAt(_0x4470c8);
              if (',' === _0x4b6f2f) {
                break;
              }
              if (_0x4470c8 === _0x3cec48.length) {
                break;
              }
            }
            _0x417243.nsp = _0x3cec48.substring(_0x400147, _0x4470c8);
          } else {
            _0x417243.nsp = '/';
          }
          const _0x171cdd = _0x3cec48.charAt(_0x4470c8 + 0x1);
          if ('' !== _0x171cdd && Number(_0x171cdd) == _0x171cdd) {
            const _0x3c7be0 = _0x4470c8 + 0x1;
            while (++_0x4470c8) {
              const _0x1b90c5 = _0x3cec48.charAt(_0x4470c8);
              if (null == _0x1b90c5 || Number(_0x1b90c5) != _0x1b90c5) {
                --_0x4470c8;
                break;
              }
              if (_0x4470c8 === _0x3cec48.length) {
                break;
              }
            }
            _0x417243.id = Number(_0x3cec48.substring(_0x3c7be0, _0x4470c8 + 0x1));
          }
          if (_0x3cec48.charAt(++_0x4470c8)) {
            const _0x46bef4 = this.tryParse(_0x3cec48.substr(_0x4470c8));
            if (_0x5f0264.isPayloadValid(_0x417243.type, _0x46bef4)) {
              _0x417243.data = _0x46bef4;
            } else {
              throw new Error("invalid payload");
            }
          }
          return _0x417243;
        }
        ["tryParse"](_0x4f33ed) {
          try {
            return JSON.parse(_0x4f33ed, this.reviver);
          } catch (_0x3ca76f) {
            return false;
          }
        }
        static ["isPayloadValid"](_0x886006, _0x2f8ecd) {
          switch (_0x886006) {
            case _0x26307c.CONNECT:
              return Object.prototype.toString.call(_0x2f8ecd) === "[object Object]";
            case _0x26307c.DISCONNECT:
              return _0x2f8ecd === undefined;
            case _0x26307c.CONNECT_ERROR:
              return typeof _0x2f8ecd === "string" || Object.prototype.toString.call(_0x2f8ecd) === "[object Object]";
            case _0x26307c.EVENT:
            case _0x26307c.BINARY_EVENT:
              return Array.isArray(_0x2f8ecd) && (typeof _0x2f8ecd[0x0] === "number" || typeof _0x2f8ecd[0x0] === "string" && _0x55c3f1.indexOf(_0x2f8ecd[0x0]) === -0x1);
            case _0x26307c.ACK:
            case _0x26307c.BINARY_ACK:
              return Array.isArray(_0x2f8ecd);
          }
        }
        ["destroy"]() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
          }
        }
      }
      class _0x3ae3c7 {
        constructor(_0x2394a3) {
          this.packet = _0x2394a3;
          this.buffers = [];
          this.reconPack = _0x2394a3;
        }
        ['takeBinaryData'](_0x2be7ba) {
          this.buffers.push(_0x2be7ba);
          if (this.buffers.length === this.reconPack.attachments) {
            0x0;
            const _0x5a49fb = _0x25dc13.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return _0x5a49fb;
          }
          return null;
        }
        ['finishedReconstruction']() {
          this.reconPack = null;
          this.buffers = [];
        }
      }
    },
    './node_modules/socket.io-parser/build/esm/is-binary.js': (_0x31fb72, _0x27b59a, _0x1a6120) => {
      'use strict';

      _0x1a6120.r(_0x27b59a);
      _0x1a6120.d(_0x27b59a, {
        'hasBinary': () => _0x5de458,
        'isBinary': () => _0x1e4b94
      });
      const _0xde19fa = typeof ArrayBuffer === "function";
      const _0xf15a90 = Object.prototype.toString;
      const _0x492186 = typeof Blob === "function" || typeof Blob !== "undefined" && _0xf15a90.call(Blob) === "[object BlobConstructor]";
      const _0x73f229 = typeof File === "function" || typeof File !== "undefined" && _0xf15a90.call(File) === "[object FileConstructor]";
      function _0x1e4b94(_0x297abf) {
        return _0xde19fa && (_0x297abf instanceof ArrayBuffer || (typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(_0x297abf) : _0x297abf.buffer instanceof ArrayBuffer)) || _0x492186 && _0x297abf instanceof Blob || _0x73f229 && _0x297abf instanceof File;
      }
      function _0x5de458(_0x4c5e81, _0x122c84) {
        if (!_0x4c5e81 || typeof _0x4c5e81 !== "object") {
          return false;
        }
        if (Array.isArray(_0x4c5e81)) {
          let _0x11658a = 0x0;
          for (let _0x1090bd = _0x4c5e81.length; _0x11658a < _0x1090bd; _0x11658a++) {
            if (_0x5de458(_0x4c5e81[_0x11658a])) {
              return true;
            }
          }
          return false;
        }
        if (_0xde19fa && (_0x4c5e81 instanceof ArrayBuffer || (typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(_0x4c5e81) : _0x4c5e81.buffer instanceof ArrayBuffer)) || _0x492186 && _0x4c5e81 instanceof Blob || _0x73f229 && _0x4c5e81 instanceof File) {
          return true;
        }
        if (_0x4c5e81.toJSON && typeof _0x4c5e81.toJSON === "function" && arguments.length === 0x1) {
          return _0x5de458(_0x4c5e81.toJSON(), true);
        }
        for (const _0x3a8b51 in _0x4c5e81) {
          if (Object.prototype.hasOwnProperty.call(_0x4c5e81, _0x3a8b51) && _0x5de458(_0x4c5e81[_0x3a8b51])) {
            return true;
          }
        }
        return false;
      }
    }
  };
  var _0x464307 = {};
  function _0xe2ddad(_0x1539a3) {
    var _0x5b7d83 = _0x464307[_0x1539a3];
    if (_0x5b7d83 !== undefined) {
      return _0x5b7d83.exports;
    }
    var _0x12060c = _0x464307[_0x1539a3] = {
      'id': _0x1539a3,
      'loaded': false,
      'exports': {}
    };
    _0x1dcb31[_0x1539a3](_0x12060c, _0x12060c.exports, _0xe2ddad);
    _0x12060c.loaded = true;
    return _0x12060c.exports;
  }
  (() => {
    _0xe2ddad.amdO = {};
  })();
  (() => {
    _0xe2ddad.n = _0x30646d => {
      var _0x1762b3 = _0x30646d && _0x30646d.__esModule ? () => _0x30646d["default"] : () => _0x30646d;
      _0xe2ddad.d(_0x1762b3, {
        'a': _0x1762b3
      });
      return _0x1762b3;
    };
  })();
  (() => {
    _0xe2ddad.d = (_0x6aa805, _0x2e8e7d) => {
      for (var _0x6d520 in _0x2e8e7d) {
        if (_0xe2ddad.o(_0x2e8e7d, _0x6d520) && !_0xe2ddad.o(_0x6aa805, _0x6d520)) {
          Object.defineProperty(_0x6aa805, _0x6d520, {
            'enumerable': true,
            'get': _0x2e8e7d[_0x6d520]
          });
        }
      }
    };
  })();
  (() => {
    _0xe2ddad.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x223ee4) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    _0xe2ddad.hmd = _0x227103 => {
      _0x227103 = Object.create(_0x227103);
      if (!_0x227103.children) {
        _0x227103.children = [];
      }
      Object.defineProperty(_0x227103, "exports", {
        'enumerable': true,
        'set': () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + _0x227103.id);
        }
      });
      return _0x227103;
    };
  })();
  (() => {
    _0xe2ddad.o = (_0x2c542d, _0x3af1f2) => Object.prototype.hasOwnProperty.call(_0x2c542d, _0x3af1f2);
  })();
  (() => {
    _0xe2ddad.r = _0xa0c1bb => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(_0xa0c1bb, Symbol.toStringTag, {
          'value': 'Module'
        });
      }
      Object.defineProperty(_0xa0c1bb, "__esModule", {
        'value': true
      });
    };
  })();
})();
