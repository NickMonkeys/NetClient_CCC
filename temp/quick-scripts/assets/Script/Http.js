(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Http.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a64d5tzGu1Os4jiZY4UGOUN', 'Http', __filename);
// Script/Http.ts

/**
 *  creator: nick li
 *  date: 2019-07-26
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.get = function (url, callback) {
        var _this = this;
        var xhr = this.getXHR();
        xhr.onreadystatechange = function () {
            _this.onreadystatechange(xhr, callback);
        };
        xhr.open(HttpMethod.GET, url, true);
        xhr.send();
    };
    Http.post = function (url, callback) {
        var xhr = this.getXHR();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response) {
                    callback();
                }
            }
        };
        xhr.responseType = "arraybuffer";
        xhr.open(HttpMethod.POST, url, true);
        xhr.send();
    };
    Http.getXHR = function () {
        return new XMLHttpRequest();
    };
    Http.onreadystatechange = function (xhr, callback) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.response) {
                callback(xhr.response);
            }
        }
    };
    return Http;
}());
exports.default = Http;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Http.js.map
        