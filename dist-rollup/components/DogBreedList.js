import React$1, { Component } from 'react';
import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, classCallCheck as _classCallCheck, asyncToGenerator as _asyncToGenerator } from '../_virtual/_rollupPluginBabelHelpers.js';
import axios$1 from 'axios';
import DogBreed$1 from './DogBreed.js';

var DogBreedList = /*#__PURE__*/function (_Component) {
  _inherits(DogBreedList, _Component);

  var _super = _createSuper(DogBreedList);

  function DogBreedList() {
    var _this;

    _classCallCheck(this, DogBreedList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      loading: false,
      dogBreeds: [],
      error: null
    };
    _this.componentDidMount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                loading: true
              });

              _context.next = 4;
              return axios$1.get("https://dog.ceo/api/breeds/list/all");

            case 4:
              res = _context.sent;

              _this.setState({
                loading: false,
                dogBreeds: Object.keys(res.data.message)
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              _this.setState({
                loading: false,
                error: _context.t0
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _this;
  }

  _createClass(DogBreedList, [{
    key: "render",
    value: function render() {
      var dogBreeds = this.state.dogBreeds;
      return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("ul", null, dogBreeds.map(function (breed) {
        return /*#__PURE__*/React$1.createElement(DogBreed$1, {
          key: breed,
          breed: breed
        });
      })));
    }
  }]);

  return DogBreedList;
}(Component);

DogBreedList.displayName = "DogBreedList";

export default DogBreedList;
//# sourceMappingURL=DogBreedList.js.map
