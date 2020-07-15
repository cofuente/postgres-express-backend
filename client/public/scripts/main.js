/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = JSEncrypt;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "\"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqE/zAyk02fRNq8PU9cQh\nUTkVnIJ2ldDHW2xjLIyq8lVBpYTtIa4jnuI/AY8PUS0QePGMrRXrVLSp7yRDNy2q\nwcwVLp+iKspJH4TxsTZqgYsBpvZy/XblMRsIXutua9cxtmvRoDqzBRDeKZu6nd8C\nkTeZIa7lG6Rl2DgbZemMERsqi9Ux2rg2SAiNrAfry56axW6F7xDHnUC3wlf+53X7\nHZDc/lwtytyU2AecA9inV97rjprO+sQUg9+wOJQizwlL9sjAw32JhSB9WV46g5bX\npsFEEdbnr8TAr+S6sELD21NIeYS+w0zdDUHZL8FB/TivujvhVFAvG2l3RtSk3g2X\nmwIDAQAB\n-----END PUBLIC KEY-----\"\n"

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsencrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var PUBLIC_KEY_FILE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var PUBLIC_KEY_FILE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(PUBLIC_KEY_FILE__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(3);
__webpack_require__(4);

function encryptFormResponse(res, passedData) {
  var crypto = window.crypto || window.msCrypto;
  var initVector = window.crypto.getRandomValues(new Uint32Array(8));
  var jsEncrypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_0___default.a();
  jsEncrypt.setPublicKey(PUBLIC_KEY_FILE__WEBPACK_IMPORTED_MODULE_1___default.a);
  // https://www.w3.org/2012/webcrypto/draft-irtf-cfrg-webcrypto-algorithms-00#sctn-intro
  // https://github.com/diafygi/webcrypto-examples
  var genKey = crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt']);
  var genCipher = genKey.then(function(key) {
    var encoder = new TextEncoder();
    var { buffer } = encoder.encode(JSON.stringify(res));
    return crypto.subtle.encrypt({
      name: 'AES-GCM',
      iv: initVector,
    },
    key,
    buffer);
  }).then(function(cipherTextBuffer) {
    var typedBuffer = new Uint8Array(cipherTextBuffer);
    var binary = '';
    // syntax: using greater-than to avoid inline html parsing issues
    for (var i = 0; typedBuffer.byteLength > i; i += 1) {
      binary += String.fromCharCode(typedBuffer[i]);
    }
    return btoa(binary);
  });
  var genEncryptedKey = genKey
    .then(
      function(key) { return crypto.subtle.exportKey('raw', key)}
    ).then(
      function(serializedKey) {
        var view = new Uint8Array(serializedKey);
        var stringifiedView = [];
        view.forEach(function(point) {
          stringifiedView.push(point.toString());
        });
        return btoa(jsEncrypt.encrypt(JSON.stringify(stringifiedView)));
      }
    );
  return Promise.all([genEncryptedKey,
                      genCipher,
                      Promise.resolve(btoa(initVector.toString())),
                      Promise.resolve(passedData)]);
}

function sendXhr(valuesDict, successCallback, errCallback, baseUrl) {
  var url = baseUrl || "https://script.google.com/macros/s/AKfycbwe7OLOLtxAN_smlnNFyQWDqbjVVk9Vq76QwA0Cj8yiX4_SDS7Z/exec"
  var urlArgs = []
  for (var a in valuesDict) {
    urlArgs.push(a + '=' + encodeURIComponent(valuesDict[a]))
  }
  var queryString = urlArgs.join('&')

  var x = new XMLHttpRequest();
  var method = 'POST'
  if (method === 'POST') {
    x.open(method, url, true);
  } else if (method === 'GET') {
    x.open(method, url + '?' + queryString, true);
  }
  var ranCallback = false
  if (successCallback) {
    x.onreadystatechange = function(b) {
      if (!ranCallback && x.readyState >= 2) {
        ranCallback = true
        successCallback(x)
      }
    }
  }
  if (errCallback) {
    x.onerror = function(err){ errCallback(err, x) }
  }
  if (method === 'POST') {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    x.send(queryString)
  } else if (method === 'GET') {
    x.setRequestHeader('Content-Type', 'text/plain')
    x.send();
  }
  return x
}

function generateEnrollmentCode() {
  var char32 = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  var getChar = function() { return char32[parseInt(Math.random() * 32, 0)] }
  return getChar() + getChar() + getChar() + getChar() + getChar() + getChar()
}

function fakeFill() {
  Array.from(document.forms.customer).forEach(function(ele) {
    if (ele.tagName.toLowerCase() === 'select') {
      // random option
      var options = ele.getElementsByTagName('option')
      for (var i=0, l=options.length; l>i; i++) {
        if (options[i].value) {
          options[i].selected = true
          break
        }
      }
    } else if (ele.type === 'checkbox') {
      // ignore
    } else if (ele.type === 'radio') {
      ele.checked = true // will end up selecting last one for all
    } else if (ele.type === 'date') {
      ele.value = String(1950 + parseInt( Math.random() * 60 )) + '-01-01'
    } else if (ele.tagName.toLowerCase() == 'input' && ele.type != 'submit') {
      if (ele.pattern) {
        // hopefully zipcode
        ele.value = '11111'
      } else {
        ele.value = generateEnrollmentCode()
      }
    }
  })
}

function sendFormResponse([encryptedKey, cipherText, initVector, passedData]) {
  var url = "https://script.google.com/macros/s/AKfycbwe7OLOLtxAN_smlnNFyQWDqbjVVk9Vq76QwA0Cj8yiX4_SDS7Z/exec"

  return sendXhr({ key: encryptedKey,
                   fielddata: cipherText,
                   initVector: initVector,
                   gitHash: "effa2ae9f9cb348cab49e7efe9ed5a167c6c34ca",
                 },
                 function(retval) {
                   if (passedData && passedData.success) {
                     passedData.success(passedData, retval)
                   }
                 },
                 function(err) {
                   console.log('request failed', err)
                   if (passedData && passedData.error) {
                     passedData.error(passedData, err)
                   }
                 })
}
window.encryptDestination = { sendFormResponse: sendFormResponse,
                              fakeFill: fakeFill }
function main() {
  var frm = document.forms.customer;
  function clearForm(passedData) {
    var enrollmentCode = (passedData && passedData.enrollmentCode)
    frm.reset();
    if (typeof window.formComplete == 'function') {
      window.formComplete(enrollmentCode)
    }
  }
  function isSet(ele) {
    if (!ele.name) {
      return false;
    }
    if (ele.type === 'radio' || ele.type === 'checkbox') {
      return ele.checked;
    }
    if (String(ele.tagName).toLowerCase() === 'select') {
      // this is a lie, but we resolve it in setValue
      return true
    }
    return ele.value !== '';
  }
  function setValue(ele, res) {
    if (ele.type === 'checkbox') {
      if (ele.name) {
        res[ele.name] = ele.checked ? ele.value : ''
      } else {
        var category = (ele.closest('fieldset') || {}).id
        console.log('checkbox category', category, ele.value, res[category])
        if (category && res[category]) {
          res[category].push(ele.value);
        } else {
          res[category] = [ele.value];
        }
      }
    } else if (String(ele.tagName).toLowerCase() === 'select') {
      if (ele.value) {
        res[ele.name] = ele.value
        return
      }
      var options = ele.getElementsByTagName('option')
      for (var i=0,l=options.length; l > i; i++) {
        if (options[i].selected && options[i].value) {
          res[ele.name] = options[i].value
        }
      }
    } else {
      res[ele.name] = ele.value;
    }
  }
  if (frm) {
    frm.onsubmit = function() {
      var res = {};
      Array.from(frm.elements).forEach(function(ele) {
        if (ele && isSet(ele)) {
          setValue(ele, res);
        }
      });
      res['Submitted At'] = (new Date()).toISOString().substring(0, 10)
      res['Enrollment Code'] = 'E-' + generateEnrollmentCode()
      encryptFormResponse(res, {
        enrollmentCode: res['Enrollment Code'],
        success: clearForm,
        error: function(passedData, err) {
          alert('Your form submission failed. Please return to the form later and try again.')
        }
      })
        .then(encryptDestination.sendFormResponse)
    };
  }
}
main()


/***/ }),
/* 3 */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Polyfill https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
/* eslint-disable */
if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 2) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
            } else if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array!=="undefined") return new Uint8Array(resArr.buffer.slice(0, resPos+1));
        else return resArr.length === resPos+1 ? resArr : resArr.slice(0, resPos+1); // IE 6-9
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}


/***/ })
/******/ ]);