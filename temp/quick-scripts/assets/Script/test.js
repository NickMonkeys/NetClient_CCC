(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/test.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '942a3cCZKhDTLdKV7fLB6Yl', 'test', __filename);
// Script/test.js

"use strict";

var _Http = require("./Http");

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  creator: nick li
 *  date: 
 */

cc.Class({
    extends: cc.Component,

    properties: {
        get1: cc.Label,
        get2: cc.Label,
        post1: cc.Label,
        post2: cc.Label
    },
    start: function start() {},
    onClickGET1: function onClickGET1() {
        var _this = this;

        _Http2.default.get("http://192.168.24.142:3000/", function (content) {
            cc.log("get1 = ", content);
            _this.get1.string = content;
        });
    },
    onClickGET2: function onClickGET2() {
        var _this2 = this;

        _Http2.default.get("http://192.168.24.142:3000/admin/", function (content) {
            cc.log("get2 = ", content);
            _this2.get2.string = content;
        });
    },
    onClickPOST1: function onClickPOST1() {
        var _this3 = this;

        _Http2.default.post("http://192.168.24.142:3000/", function (content) {
            cc.log("pust1 = ", content);
            _this3.post1.string = content;
        });
    },
    onClickPOST2: function onClickPOST2() {
        var _this4 = this;

        _Http2.default.post("http://192.168.24.142:3000/admin/", function (content) {
            cc.log("pust2 = ", content);
            _this4.post2.string = content;
        });
    }
});

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
        //# sourceMappingURL=test.js.map
        