import Http from "./Http";

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
        post2: cc.Label,
    },
    start () {
    },

    onClickGET1() {
        Http.get("http://192.168.24.142:3000/", (content) => {
            cc.log("get1 = ", content);
            this.get1.string = content;
        })
    },

    onClickGET2() {
        Http.get("http://192.168.24.142:3000/admin/", (content) => {
            cc.log("get2 = ", content);
            this.get2.string = content;
        })
    },

    onClickPOST1() {
        Http.post("http://192.168.24.142:3000/", (content) => {
            cc.log("pust1 = ", content);
            this.post1.string = content;
        })
    },

    onClickPOST2() {
        Http.post("http://192.168.24.142:3000/admin/", (content) => {
            cc.log("pust2 = ", content);
            this.post2.string = content;
        })
    },
});
