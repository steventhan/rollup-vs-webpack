import React$1, { useState, useEffect } from 'react';
import { slicedToArray as _slicedToArray, asyncToGenerator as _asyncToGenerator } from '../_virtual/_rollupPluginBabelHelpers.js';
import axios$1 from 'axios';
import DogBreed$1 from './DogBreed.js';

function DogBreedWithHook() {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dogBreeds = _useState2[0],
      setDogBreeds = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return axios$1.get("https://dog.ceo/api/breeds/list/all");

            case 4:
              res = _context.sent;
              setDogBreeds(Object.keys(res.data.message));
              setLoading(false);
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);
              setLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  }, []);
  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("ul", null, dogBreeds.map(function (breed) {
    return /*#__PURE__*/React$1.createElement(DogBreed$1, {
      key: breed,
      breed: breed
    });
  })));
}
DogBreedWithHook.displayName = "DogBreedWithHook";

export default DogBreedWithHook;
//# sourceMappingURL=DogBreedListWithHook.js.map
