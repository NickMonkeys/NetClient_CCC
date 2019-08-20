__require = function _(e, t, n) {
function i(r, a) {
if (!t[r]) {
if (!e[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
}
var p = t[r] = {
exports: {}
};
e[r][0].call(p.exports, function(_) {
return i(e[r][1][_] || _);
}, p, p.exports, _, e, t, n);
}
return t[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
Http: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "a64d5tzGu1Os4jiZY4UGOUN", "Http");
Object.defineProperty(t, "__esModule", {
value: !0
});
var n;
(function(_) {
_.GET = "GET";
_.PUST = "PUST";
_.PUT = "PUST";
_.DELETE = "DELETE";
})(n || (n = {}));
var i = function() {
function _() {}
_.get = function(_, e) {
var t = this, i = this.getXHR();
i.onreadystatechange = function() {
t.onreadystatechange(i, e);
};
i.open(n.GET, _, !0);
i.send();
};
_.post = function(_, e) {
var t = this.getXHR();
t.onreadystatechange = function() {
4 === t.readyState && 200 === t.status && t.response && e();
};
t.responseType = "arraybuffer";
t.open(n.PUST, _, !0);
t.send();
};
_.getXHR = function() {
return new XMLHttpRequest();
};
_.onreadystatechange = function(_, e) {
4 === _.readyState && 200 === _.status && _.response && e(_.response);
};
return _;
}();
t.default = i;
cc._RF.pop();
}, {} ],
Label: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "8c015kvvDhOaqSD5AxlTaVG", "Label");
var n = _("i18n"), i = cc.Class({
extends: cc.Label,
properties: {
textKey: {
override: !0,
default: "",
multiline: !0,
tooltip: "Enter i18n key here",
notify: function() {
this.string = this.localizedString;
}
},
textValueOption: {
override: !0,
default: "",
multiline: !0,
tooltip: "Enter textValueOption here",
notify: function(_) {
this.string = this.localizedString;
}
},
localizedString: {
override: !0,
tooltip: "Here shows the localized string of Text Key",
get: function() {
var _ = void 0;
if (this.textValueOption && "" != this.textValueOption) try {
_ = JSON.parse(this.textValueOption);
} catch (_) {}
return n.t(this.textKey, _);
},
set: function(_) {
this.textKey = _;
0;
}
}
},
onLoad: function() {
this.localizedString && (this.string = this.localizedString);
cc.sys.isNative;
}
});
cc.ZCLabel = e.exports = i;
cc._RF.pop();
}, {
i18n: "i18n"
} ],
en: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "920c5VLzJxKjYCAoIUwUHym", "en");
e.exports = {
name: "zhang",
info: "age:%{age},sex:%{sex}",
hero_break: "growp",
hero_skill_up: "skill up",
hero_equip_wear: "equip wear"
};
cc._RF.pop();
}, {} ],
i18nCom: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "aec26xjM9NDUpq0lBpLQflZ", "i18nCom");
var n = _("i18n");
cc.Class({
extends: cc.Component,
editor: !1,
properties: {
textKey: {
override: !0,
default: "",
multiline: !0,
tooltip: "Enter i18n key here",
notify: function(_) {
this.localizedString = "";
}
},
extraWord: {
tooltip: "额外的字符串显示",
default: "%s",
notify: function() {
this.localizedString = "";
}
},
textValueOption: {
override: !0,
default: "",
multiline: !0,
tooltip: "Enter textValueOption here"
},
localizedString: {
override: !0,
readonly: !0,
multiline: !0,
tooltip: "Here shows the localized string of Text Key",
get: function() {
!this.string && (this.localizedString = "");
return this.string || "";
},
set: function(_) {
var e = void 0;
if (this.textValueOption && "" != this.textValueOption) try {
e = JSON.parse(this.textValueOption);
} catch (_) {}
this.string = n.t(this.textKey, e);
this.string && (this.string = this.extraWord.replace("%s", this.string));
this.node.getComponent(cc._RendererUnderSG).string = this.string;
}
}
},
onLoad: function() {
this.localizedString && (this.string = this.localizedString);
if (cc.sys.os === cc.sys.OS_OSX) {
this.font = null;
this.isSystemFontUsed = !0;
this.fontFamily = "Arial";
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
i18n: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "93789C/shtIL6entYsZPjee", "i18n");
var n = _("polyglot"), i = "zh";
"zh" !== i && (i = "en");
var o = _(i), r = new n({
phrases: o,
allowMissing: !0
});
e.exports = {
init: function(e) {
o = _(i = e);
r.replace(o);
},
t: function(_, e) {
return r.t(_, e);
}
};
cc._RF.pop();
}, {
polyglot: "polyglot"
} ],
polyglot: [ function(_, e, t) {
(function(_) {
"use strict";
cc._RF.push(e, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(_) {
return typeof _;
} : function(_) {
return _ && "function" == typeof Symbol && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
};
(function(_, i) {
"function" == typeof define && define.amd ? define([], function() {
return i(_);
}) : "object" === ("undefined" == typeof t ? "undefined" : n(t)) ? e.exports = i(_) : _.Polyglot = i(_);
})("undefined" != typeof _ ? _ : void 0, function(_) {
var e = String.prototype.replace;
function t(_) {
_ = _ || {};
this.phrases = {};
this.extend(_.phrases || {});
this.currentLocale = _.locale || "en";
this.allowMissing = !!_.allowMissing;
this.warn = _.warn || p;
}
t.VERSION = "1.0.0";
t.prototype.locale = function(_) {
_ && (this.currentLocale = _);
return this.currentLocale;
};
t.prototype.extend = function(_, e) {
var t;
for (var i in _) if (_.hasOwnProperty(i)) {
t = _[i];
e && (i = e + "." + i);
"object" === ("undefined" == typeof t ? "undefined" : n(t)) ? this.extend(t, i) : this.phrases[i] = t;
}
};
t.prototype.unset = function(_, e) {
var t;
if ("string" == typeof _) delete this.phrases[_]; else for (var i in _) if (_.hasOwnProperty(i)) {
t = _[i];
e && (i = e + "." + i);
"object" === ("undefined" == typeof t ? "undefined" : n(t)) ? this.unset(t, i) : delete this.phrases[i];
}
};
t.prototype.clear = function() {
this.phrases = {};
};
t.prototype.replace = function(_) {
this.clear();
this.extend(_);
};
t.prototype.t = function(_, t) {
var n, p;
"number" == typeof (t = null == t ? {} : t) && (t = {
smart_count: t
});
if ("string" == typeof this.phrases[_]) n = this.phrases[_]; else if ("string" == typeof t._) n = t._; else if (this.allowMissing) n = _; else {
this.warn('Missing translation for key: "' + _ + '"');
p = _;
}
if ("string" == typeof n) {
t = function(_) {
var e = {};
for (var t in _) e[t] = _[t];
return e;
}(t);
p = function(_, t) {
for (var n in t) if ("_" !== n && t.hasOwnProperty(n)) {
var i = t[n];
"string" == typeof i && (i = e.call(t[n], s, l));
_ = e.call(_, new RegExp("%\\{" + n + "\\}", "g"), i);
}
return _;
}(p = function(_, t, n) {
var s, l, p;
if (null != n && _) {
l = _.split(i);
p = l[function(_, e) {
return o[function(_) {
var e = function(_) {
var e, t, n, i = {};
for (e in _) if (_.hasOwnProperty(e)) {
t = _[e];
for (n in t) i[t[n]] = e;
}
return i;
}(r);
return e[_] || e.en;
}(_)](e);
}(t, n)] || l[0];
s = function(_) {
return e.call(_, a, "");
}(p);
} else s = _;
return s;
}(n, this.currentLocale, t.smart_count), t);
}
return p;
};
t.prototype.has = function(_) {
return _ in this.phrases;
};
var i = "||||", o = {
chinese: function(_) {
return 0;
},
german: function(_) {
return 1 !== _ ? 1 : 0;
},
french: function(_) {
return _ > 1 ? 1 : 0;
},
russian: function(_) {
return _ % 10 == 1 && _ % 100 != 11 ? 0 : _ % 10 >= 2 && _ % 10 <= 4 && (_ % 100 < 10 || _ % 100 >= 20) ? 1 : 2;
},
czech: function(_) {
return 1 === _ ? 0 : _ >= 2 && _ <= 4 ? 1 : 2;
},
polish: function(_) {
return 1 === _ ? 0 : _ % 10 >= 2 && _ % 10 <= 4 && (_ % 100 < 10 || _ % 100 >= 20) ? 1 : 2;
},
icelandic: function(_) {
return _ % 10 != 1 || _ % 100 == 11 ? 1 : 0;
}
}, r = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs", "sk" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
var a = /^\s+|\s+$/g;
var s = /\$/g, l = "$$$$";
function p(e) {
_.console && _.console.warn && _.console.warn("WARNING: " + e);
}
return t;
});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
test: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "942a3cCZKhDTLdKV7fLB6Yl", "test");
(function(_) {
_ && _.__esModule;
})(_("./Http"));
cc.Class({
extends: cc.Component,
properties: {
target: cc.Label
},
start: function() {},
onClick: function() {
this.target.fontSize = 80;
}
});
cc._RF.pop();
}, {
"./Http": "Http"
} ],
zh: [ function(_, e, t) {
"use strict";
cc._RF.push(e, "87f1fs0gohHDIfNg4aePXbt", "zh");
e.exports = {
zcsdlk_mobie: "手机",
zcsdk_tip_ok: "我知道了",
zcsdk_tip_warm: "温馨提示",
presentation: "提示",
zcsdk_net_err: "网络连接失败，请稍后重试",
zcsdk_username: "账号",
zcsdk_password: "密码",
zcsdk_login_title: "登入",
zcsdk_login_immediately: "立即登入",
zcsdk_login_visitor: "游客登入",
zcsdk_quick_register: "快速注册",
zcsdk_username_ph: "请输入6-16个字母数字组合",
zcsdk_password_ph: "请输入6-16个字符",
zcsdk_login_tip_1: "请输入账号",
zcsdk_login_tip_2: "请输入密码",
zcsdk_register_title: "账号注册",
zcsdk_register_finish: "完成注册",
zcsdk_register_select: "选择",
zcsdk_register_upgrade_title: "账号升级",
zcsdk_register_upgrade_finish: "账号升级",
zcsdk_register_mobile_register: "手机账号注册",
zcsdk_register_mobile_upgrade: "升级为手机账号",
zcsdk_register_proto: "会员服务条款",
zcsdk_register_show_pwd: "显示密码",
zcsdk_register_mobile_title: "手机注册",
zcsdk_register_mobile_content: "使用手机号注册安全性高且方便记忆",
zcsdk_register_mobile_ph: "用于接收验证码",
zcsdk_register_normal: "普通账号注册",
zcsdk_register_upgrade_normal: "升级为普通账号",
zcsdk_register_mobile_bind_title: "手机绑定",
zcsdk_register_mobile_input: "填写手机",
zcsdk_register_mobile_desc: "该账号绑定了您的手机",
zcsdk_forget_pwd_title: "忘记密码",
zcsdk_forget_account: "忘记账号",
zcsdk_bind_mobile_title: "绑定手机",
zcsdk_bind_mobile_ph: "请输入手机号",
zcsdk_bind_mobile_skip: "下次再说",
zcsdk_bind_mobile_bind: "立即绑定",
zcsdk_bind_mobile_content: "您的账号安全级别很低，建议绑定手机",
zcsdk_bind_mobile_tip_1: "该手机已绑定",
zcsdk_bind_mobile_tip_2: "该手机未绑定账号",
zcsdk_authcode_title: "填写验证码",
zcsdk_authcode_content: "验证码已发送，请填写验证码",
zcsdk_authcode_next: "下一步",
zcsdk_authcode_ph: "请输入验证码",
zcsdk_authcode_resend: "重发",
zcsdk_visitor_title: "游客登入",
zcsdk_visitor_content: "正在使用游客账号登入。\n请尽快绑定账号以免丢失。",
zcsdk_visitor_bind: "绑定",
zcsdk_visitor_login: "登入",
zcsdk_set_password_title: "设置密码",
guide_text1_1: "时来天地皆同力，",
guide_text1_2: "运去英雄不自由！",
guide_text2_1: "桓灵以来，",
guide_text2_2: "生灵涂炭，",
guide_text2_3: "大汉已失天意。",
guide_text3_1: "苍茫大地，",
guide_text3_2: "谁主沉浮。",
guide_text4_1: "天下之鼎，",
guide_text4_2: "何人逐之！",
guide_text_5: "新任幽州刺史，\n请向世人告知您的大名！",
guide_text_6_1: "末将韩当，字义公。",
guide_text_6_2: "闻得大人初至幽州，",
guide_text_6_3: "愿随大人建功立业，",
guide_text_6_4: "还百姓朗朗乾坤。",
guide_text_7: "请主公派我前去挂机，这样主公不在线也可以持续获得收益。",
guide_text_8: "启禀主公，提升英雄的等级可以有效的增强实力，这会让我们战无不胜！",
guide_text_9: "请点击升级，剩余次数 %{times}。",
guide_text_10: "主公，臣的谏言就到这里了，请主公励精图治，将这乱世重归一统。",
guide_text_11: "主公，我们终于占领了第一座城池，城池不单会给我们提供税金，还有大大的宝箱等着我们。",
name: "张",
info: "年龄:%{age},性别:%{sex}",
none: "无",
uiloader_text: "资源加载中...",
confirm_ok: "确定",
confirm_cancel: "取消",
confirm_sure: "保存",
confirm_cost: "花费 ",
confirm_shift: "转换",
confirm_sell_equip: "装备出售",
confirm_frag_sell_equip: "碎片出售",
confirm_add_hero_max_1: "您的英雄格子数量不足。",
confirm_add_hero_max_2: "是否花费%{num}",
confirm_add_hero_max_3: "购买%{num}个英雄数量上限?",
displace_cancle: "确认要取消吗？\n\n（取消后置换出来的英雄将不保留）",
displace_leave: "确认要离开吗？\n\n（离开后置换出来的英雄将不保留）",
displace_no_num: "置换石不足,是否前去购买？",
displace_no_people: "当前没有可置换的英雄~",
put: "放入",
help: "帮助说明",
hero_upstar_help_content1: "1.需要在升星界面放入指定材料英雄对当前英雄\n  进行升星。",
hero_upstar_help_content2: "2.被消耗的材料英雄，将返还其升级等消耗的大\n   部分物资，装备自动卸下。",
hero_upstar_help_content3: "3.英雄升星后，等级不变，整体实力大大增强。",
FORCE: "武力",
BRAIN: "智力",
PHYSICAL: "体力",
ATTACK: "攻击",
BLOOD: "生命",
SPEED: "速度",
DEFENSE: "护甲",
RESISTANCE: "魔抗",
DODGE: "闪避",
RESIST: "抵抗",
VERTIGO_RESIST: "眩晕抵抗",
CRIT: "暴击率",
CRIT_DAMAGE: "暴击伤害",
MORALE: "士气值",
ALL_BASE: "全属性",
AVOIDANCE: "免伤",
PERCENT_BLOOD: "生命",
PERCENT_ATTACK: "攻击",
PERCENT_SPEED: "速度",
HIT: "命中",
CRIT_RESIST: "抗暴",
CUSTOM_DESC_1: "每次普攻降低敌方士气",
CUSTOM_DESC_2: "死后立刻复活，拥有生命",
CUSTOM_DESC_3: "治疗类技能效果",
blood: "血量",
attack: "攻击",
speed: "速度",
armor: "护甲",
armourPenetration: "破甲",
harmReduction: "减伤率",
addHarm: "增加技能伤害",
crit: "暴击",
addCrit: "暴击伤害",
revoltCrit: "抗暴",
accurate: "命中",
withstand: "格挡",
exemptionControl: "免控率",
immune: "免疫率",
trueDamage: "真实伤害",
soul_stone_not_enough: "魂石不足",
jade_not_enough: "玉符不足",
cooper_not_enough: "铜钱不足",
honor_not_enough: "荣耀币不足",
addhero_not_enough: "没有材料英雄",
DATA_COPPER: "元宝",
DATA_JADE: "银币",
DATA_HEART: "好感度",
DATA_EXP: "主公经验",
DATA_COPPER_DESC: "充值兑换的货币。",
DATA_JADE_DESC: "游戏基础货币。",
DATA_HEART_DESC: "用于在酒馆进行友情招募。",
DATA_EXP_DESC: "用于提升主公的等级。",
obtain_get: "领取",
obtain_return: "返还",
obtain_get_item: "获得物品",
obtain_get_hero: "获得英雄",
obtain_confirm: "确认",
obtain_equip_empty_tip: "没有可穿戴的装备",
login_enter: "进入游戏",
login_select_area: "选区",
login_select_server: "选择服务器",
login_try_again: "请重新登录",
login_repair: "系统会尝试修复您损坏的文件，确认要修复吗？",
server_list_my: "我的服务器",
server_list_recommend: "推荐服务器",
server_area: "%{index}区",
server_level: "%{level}级",
announce_title: "公告",
life_buff_title: "加成",
main_main: "主页",
main_hero: "英雄",
main_fight: "战斗",
main_bag: "背包",
main_dungeon: "副本",
main_altar: "祭坛",
main_destiny: "天命",
main_tripod: "九州鼎",
main_mission: "任务",
main_market: "市场",
main_arena: "竞技场",
main_summon: "酒馆",
main_gift: "大熊礼包",
main_new: "新手大礼",
main_limit: "喜乐元宵",
main_race_contest_title: "竞速奖励",
main_race_contest_tip: "48小时之内击败主线-幽州全部据点领取。",
main_race_contest_tip_2: "120小时之内击败主线-冀州全部据点领取。",
fight_round: "回合",
fight_speed_tip: "主公2级开启2倍速度，请努力挂机。",
fight_skip_tip: "是否跳过战斗？",
fight_statistic_info_1: "进攻方",
fight_statistic_info_2: "防守方",
fight_statistic_info_3: "输出",
fight_statistic_info_4: "治疗",
fight_result_info_1: "通过以下途径变得更强",
fight_result_info_2: "英雄升级",
fight_result_info_3: "装备强化",
fight_result_info_4: "英雄召唤",
fight_result_info_5: "获得物品",
fight_result_info_6: "战斗统计",
fight_result_info_7: "获得奖励",
fight_result_info_8: "造成伤害",
fight_result_next: "下一场",
god_hero_tips_1: "请按照顺序依次击败前置关卡,并领取奖励。",
god_hero_tips_2: "已通关,请及时领取奖励。",
god_hero_tips_3: "已通关。",
god_hero_title: "第 %{num} 关",
god_hero_title_2: "关卡 %{num}",
god_hero_id: "%{index}层",
god_hero_rank: "暂无",
god_hero_tips_4: "通关最强神将普通难度开启精英模式",
life_buff_1: "（税金征收每日征收次数",
life_buff_2: "（矿区铜钱产量增幅",
life_buff_3: "（每次决战刑天战斗奖励",
life_buff_4: "（黄金会员卡效果",
life_buff_5: "（酒馆每日高级召唤次数",
life_desp_1: "1.相同的增幅卡效果叠加，期限不叠加",
life_desp_2: "2.所有的体验卡均【次日早8:00生效】",
life_desp_3: "暂无增益加成，望主公努力！",
life_forever: "永久",
life_start_desp: "体验卡生效倒计时:",
life_end_desp: "体验卡剩余时间:",
summon_title_1: "高级召唤",
summon_title_2: "基础召唤",
summon_title_3: "友情召唤",
summon_free: "免费",
summon_times_1: "召唤",
summon_times_10: "召唤 X10",
summon_free_summon: "免费召唤",
summon_info_help_content: "\n1.基础召唤可以召唤出品质较低的英雄（1星、2星、3星、4星），基础召唤需要消耗基础卷轴。\n\n2.高级召唤可以召唤出品质较高的英雄（3星、4星、5星），高级召唤需要消耗玉符或高级召唤卷轴。\n\n3.友情召唤可以召唤出品质一般的英雄（1星、2星、3星、4星、5星），友情召唤需要消耗好感度，玩家可获得的好感度数量上限不超过1000个，超过上限后无法再继续累积。\n\n4.每次高级召唤可获得10点召唤宝箱能量，累计1000点能量即可打开该宝箱，获得任意一名5星英雄。\n    ",
summon_info_help: "概率",
summon_help_content: "\n高级召唤各星卡获得的几率为:\n3星66.89%，4星26.76%，5星6.35%。\n\n基础召唤各星卡获得的几率为:\n1星44.25%，2星44.25%，3星8.85%，4星2.65%。\n\n友情召唤各星卡获得的几率为:\n1星30.02%，2星36.02%，3星24.02%，4星7.2%，5星2.74%。\n    ",
summon_power_help_content: "\n每次高级召唤可获得能量，积攒满后随机获得一名5星英雄。\n    ",
hero_profession_1: "猛将",
hero_profession_2: "谋士",
hero_list_cost: " 购买%{num}个英雄数量上限？",
hero_list_title: "英雄列表",
hero_handbook_title: "英雄图鉴",
hero_break_out: "英雄突破",
hero_info_title: "英雄详情",
hero_equip_title: "装备",
hero_level_title: "等级",
hero_grade_title: "品阶",
hero_upstar_title: "升星",
hero_upstar_sub_title: "英雄升星",
hero_skin_title: "皮肤",
hero_select_title: "选择英雄",
hero_select_full: "材料已满",
hero_select: "选中",
hero_upstar_need_level: "英雄达到%{num}级后开启升星",
hero_break: "突破",
hero_break_desc_1: "等级上限:",
hero_break_desc_2: "生命增加:",
hero_break_desc_3: "攻击增加:",
hero_break_desc_4: "速度增加:",
hero_break_needstar: "突破所需星级:",
hero_break_touch_close: "点击任意位置关闭",
hero_break_unlock_skill: "突破解锁技能",
hero_skill_up: "升级",
hero_skill_up_max: "已升至最高等级",
hero_skill_active: "主动技能:",
hero_skill_pass: "被动技能:",
hero_skill_pass_unlock_level: "品阶%{num}解锁",
hero_uneqiup: "卸下",
hero_equip_unit_1: "武器",
hero_equip_unit_2: "铠甲",
hero_equip_unit_3: "头盔",
hero_equip_unit_4: "靴子",
hero_equip_unit_5: "戒指",
hero_equip_unit_6: "披风",
hero_equip_wear: "装备",
hero_equip_get_off: "脱下",
hero_equip_strength: "强化",
hero_equip_attr_desc: "强化属性:",
hero_equip_attr_max_unlock: "强化满级解锁:",
hero_equip_suit: "%{num}件",
hero_military_symbol: "兵符",
hero_military_symbol_unlock: "解锁",
hero_military_symbol_refresh: "洗炼",
hero_military_symbol_refresh_tip: "洗炼属性：",
hero_military_symbol_lock_tip: "请解锁至少一条属性后重启洗炼",
hero_military_symbol_unlock_tip: "通关最强神将普通难度即可解锁",
hero_military_symbol_forging_confirm_tip: "是否确认洗炼兵符？",
hero_suit: "佩戴",
hero_suit_shift: "替换",
hero_cystal_upgrade: "元神升级",
hero_cystal_shift: "元神转换",
hero_star_attr_1: "武力",
hero_star_attr_2: "体力",
hero_star_attr_3: "智力",
hero_star_attr_4: "潜能",
hero_potency_title: "潜能点",
hero_potency_roll: "已投入点数:",
hero_potency_have: "可用点数:",
hero_potency_cost: " 进行重置？",
hero_potency_free: "本次重置免费，是否进行重置？",
hero_potency_cant_refresh: "无需重置",
hero_potency_learn: "学习",
hero_potency_refresh_tip: "潜能重置成功",
hero_crystal_locked: "锁定现有属性",
hero_locked_1: "该英雄已被锁定",
hero_locked_2: "该英雄在天下枭雄防守阵容中",
hero_locked_3: "该英雄在诸王夺鼎防守阵容中",
hero_unkonw_crystal_icon: "未知元神",
alter_preView: "预览",
alter_reward: "分解奖励",
alter_no_hero: "没有放入分解的英雄",
alter_hasget: "领取成功",
alter_heroCount: "可分解英雄数量:",
alter_shop_buy_tip: "是否确认购买？",
alter_shop_buy_yes: "是",
alter_shop_buy_no: "否",
alter_has_fourstar_hero: "含有四星及以上英雄，是否继续？",
alter_select_full: "列表已满",
bag_title: "背包",
bag_frag: "碎片",
bag_equip_fast_sell: "批量出售",
bag_equip_fast_sell_tip: "请选择要出售的装备",
bag_equip_frag_fast_sell: "出售",
bag_equip_frag_fast_sell_tip: "请选择要出售的装备碎片",
bag_equip_filter: "筛选",
bag_item_info_compose: "合成",
bag_item_info_use: "使用",
bag_item_info_use_sure: "确认使用",
bag_item_info_reward: "可获得",
bag_item_info_detail: "详情",
bag_item_info_sell: "出售",
bag_item_info_tip_cannot_sell: "不可出售",
bag_item_info_gold: "您当前不是黄金会员，是否前去购买？",
bag_empty_tip: "空空如也~",
bag_hero_frag: " 凑齐%{num}个碎片即可招募该英雄。",
bag_equip_frag: " 凑齐%{num}个碎片即可合成该装备。",
bag_mw_frag: "凑齐%{num}个碎片即可合成该法宝",
bag_magic_weapon_frag: "凑齐%{num}个碎片即可合成该法宝",
bag_god_hero_item_1: "使用成功~\n主公的每日税金征收免费次数提升%{num}次！（次日生效）",
bag_god_hero_item_2: "使用成功~\n主公的矿区铜钱产量永久增加%{num}%！",
bag_god_hero_item_3: "使用成功~\n主公每次的决战刑天奖励永久增加%{num}%！",
bag_god_hero_item_4: "使用成功~\n主公的黄金会员卡挂机增幅永久提升%{num}%！",
bag_god_hero_item_5: "使用成功~\n主公的每日高级召唤免费次数提升%{num}次！（次日生效）",
bag_god_hero_item_6: "使用成功~\n2天内主公的每日税金征收免费次数提升%{num}次！（次日生效）",
bag_god_hero_item_7: "使用成功~\n2天内主公的矿区铜钱产量增加%{num}%！（次日生效）",
bag_god_hero_item_8: "使用成功~\n2天内主公每次决战刑天奖励增加%{num}%！（次日生效）",
bag_god_hero_item_9: "使用成功~\n2天内主公的黄金会员卡挂机增幅提升%{num}%！（次日生效）",
bag_equip_sell_tip: "\n    装备出售不可找回，确认出售这些装备吗？\n    出售这些装备将获得以下物品:\n    ",
please_settle_magic_weapon_for_swallow: "请放入要吞噬的法宝",
magic_weapon_upgrade: "法宝升级",
bag_equip_frag_sell_tip: "\n    碎片出售不可找回，确认出售这些碎片吗？\n    出售这些碎片将获得以下物品:\n    ",
shop_help_content: "\n1.英雄分解可以得到英魂、将魂、魂石等材料。\n\n2.英魂可用于提升英雄的等级。\n\n3.将魂可用于英雄突破、升星以及技能提升。\n\n4.魂石可用于在英雄商店购买强大的英雄，商店入口在右上角。\n    ",
destiny_help_content: "\n1.选择一个可合成的英雄，再放入指定材料英雄，满足条件后可合成指定英雄。\n\n2.被消耗的英雄将返还各个功能消耗的大部分铜钱、英魂和将魂。\n\n3.合成的英雄将获得更强的属性和技能效果，英雄等级上限提升，同时6星英雄技能等级上限也会提升。\n    ",
displace_help_content: "\n1.\t消耗置换石，可以将6星、7星、8星英雄置换为同阵营、同星级的其他英雄，分别消耗1颗、2颗、4颗置换石。置换石可在大熊礼包-月礼包中获得。\n\n2.\t对置换结果不满意，可以通过取消保留原英雄，但消耗的置换石不会返还。\n\n3.\t被锁定以及在竞技场防守阵容中的英雄无法进行置换。\n\n4.\t置换成功原英雄的等级、技能等级、装备无损转移至新英雄。\n    ",
tripod_help_content: "\n1.消耗一颗九鼎石进行一次指定阵营的召唤。\n\n2.每次召唤最低获得本阵营的4星英雄，一定概率获得本阵营5星英雄。\n    ",
map_scene_label_1: "第%{num}关",
map_scene_title: "挂机",
map_scene_auto: "累计挂机: ",
map_scene_box: "通关宝箱",
map_scene_status_1: "未开启",
map_scene_status_2: "已占领",
map_scene_status_3: "攻打中",
map_scene_tip_1: "没有可领取的战利品",
map_scene_btn_1: "世界地图",
map_scene_btn_2: "税金征收",
map_scene_btn_3: "通关宝箱",
map_scene_onhook: "挂机中...",
part_reward_title_1: "首杀奖励",
part_reward_title_2: "挂机奖励",
part_reward_btn_1: "战斗",
part_reward_btn_2: "挂机",
part_reward_index: "第%{num}关",
part_reward_tip_1: "请按顺序击败前置关卡",
part_reward_tip_2: "击败本据点全部关卡领取",
part_reward_tip_3: "已经领取该奖励",
part_reward_tip_4: "击败本州全部据点领取",
part_reward_tip_5: "领取成功",
part_reward_box: "据点宝箱",
part_reward_info_1: "税金+%{num}",
part_deploy_tip_1: "所需英雄数量已满",
part_deploy_tip_2: "请选择出战英雄",
part_deploy_title: "英雄出战",
part_deploy_tip_3: "每个回合必须至少上阵一名英雄",
tripod_deploy_team_1: "1V1单挑回合",
tripod_deploy_team_3: "3V3争霸回合",
tripod_deploy_team_6: "6V6称王回合",
tripod_set_team: "设置阵容",
tripod_set_team_view: "显示",
tripod_set_team_no_view: "隐藏",
tripod_main_tips: "距离赛季开始倒计时:",
tripod_main_tips_2: "赛季结束,请期待下个赛季的到来。",
tax_btn_1: "征收",
tax_btn_2: "强征",
tax_btn_3: "强化",
tax_title: "税金征收",
tax_info_1: "攻占据点",
tax_info_2: "税金强化",
tax_info_3: "税金基础值",
tax_info_4: "税金征收值",
tax_info_5: "倒计时",
tax_info_6: "剩余次数: %{num}",
tax_info_7: "+%{num}",
tax_tip_1: "今日收取已达上限",
tax_tip_3: "收取成功",
tax_tip_4: "还未占领任何据点",
tax_force_title: "税金强化",
tax_force_btn_1: "强化",
tax_force_info_1: "注明: 税金强化是永久强化。",
tax_force_info_2: "已升至最高等级",
tax_force_tip_1: "强化成功",
world_tip_1: "请按顺序击败前置据点",
world_tip_2: "此地图暂未开启，请等待后续更新",
world_tip_3: "主公5级开启精英难度。",
world_tab_1: "主线",
world_tab_2: "精英",
world_tab_3: "普通",
view_map_title: "最近通关",
view_map_info: "暂无玩家通关",
deploy_info_1: "前排",
deploy_info_2: "后排",
displace_info_1: "置换",
displace_desp: "请放入想置换的英雄",
camp_info: "上阵英雄均享受以下光环属性",
camp_no_camp: "未激活阵营加成",
friend_list_title: "我的好友",
friend_list_number: "好友数量:",
friend_list_send_heart: "一键领取和赠送",
friend_list_empty_tip: "暂无好友，快去结交一些新朋友吧~",
friend_list_one_key_heart_tip: "没有收到或者可以赠送的好感度",
friend_lookup_find: "查找玩家",
friend_lookup_blacklist: "黑名单",
friend_lookup: "搜索",
friend_lookup_input_id: "输入ID",
friend_lookup_recommend: "推荐好友",
friend_lookup_apply: "申请",
friend_lookup_empty_tip: "未检测到玩家，请输入正确ID",
friend_lookup_suitable_empty_tip: "暂无推荐好友",
friend_lookup_tip: "输入不能为空",
friend_apply_list_title: "申请列表",
friend_apply_list_ignore: "一键忽略",
friend_apply_requests_received: "收到的请求:",
friend_apply_empty_tip: "还没有好友申请~",
friend_apply_success_tip: "申请成功",
friend_info_shield: "屏蔽",
friend_info_private_chat: "私聊",
friend_info_delete_confirm: "确认删除好友？",
friend_be_shield_tip: "对方已将您屏蔽！",
friend_shield_tip: "待屏蔽解除后方可聊天，剩余时间",
friend_delete_success: "删除成功",
friend_online: "在线",
friend_remove: "移除",
friend_minutes: "%{num}分钟前",
friend_hours: "%{num}小时前",
friend_days: "%{num}天前",
friend_weeks: "%{num}周前",
friend_months: "%{num}月前",
friend_years: "%{num}年前",
friend_info_alliance: "国家: ",
friend_defensive_camp: "天下枭雄-防守阵容",
friend_boss_camp: "决战刑天-攻打阵容",
friend_tripod_defensive_camp: "诸王夺鼎-防守阵容",
friend_god_hero_camp: "最强神将-上阵英雄",
mail_title: "邮件",
mail_empty: "暂时没有新邮件",
mail_obtain: "领取",
mail_delete: "删除",
mail_one_key: "一键领取",
mail_delete_tip: "是否确认删除所有已读邮件\n\n（有未领取的邮件不会被删除）",
chat_channel_world: "世界",
chat_channel_alliance: "国家",
chat_channel_private: "私聊",
chat_channel_cross: "诸王夺鼎",
chat_btn_1: "发送",
chat_btn_2: "%{num}秒",
chat_tips_1: "请输入需要发送的内容",
chat_tips_2: "需要加入国家才能发言",
chat_tips_3: "私聊对方不在线，已留言",
chat_tips_4: "倒计时结束后方可发送",
chat_tips_5: "VIP1或主公10级开启世界聊天",
chat_tips_6: "主公等级达到20级开启",
chat_info_1: "最近没有联络的朋友",
chat_info_2: "  %{serverId}区",
headInfo_title: "主公信息",
headInfo_btn_1: "头像",
headInfo_btn_2: "头像框",
headInfo_btn_3: "更换",
headInfo_btn_4: "首次免费",
headInfo_btn_5: "设置",
headInfo_btn_6: "复制",
headInfo_btn_7: "退出登陆",
headInfo_info_1: "ID: ",
headInfo_info_2: "输入你想修改的名字",
headInfo_info_3: "音乐",
headInfo_info_4: "音效",
headInfo_info_5: "服务器:",
headInfo_info_6: "%{serverId}区 %{serverName}",
headInfo_info_7: "隐藏VIP等级",
headInfo_tips_1: "请输入名字",
headInfo_tips_2: "名字为4-14个字",
headInfo_tips_3: "修改成功",
headSelect_info_1: "购买该头像",
headSelect_info_2: "购买该头像框",
headSelect_tips_1: "购买成功",
headSelect_tips_2: "更换成功",
headSelect_tab_1: "头像",
headSelect_tab_2: "头像框",
headSelect_title: "装饰",
role_tip_1: "是否屏蔽该玩家",
role_tip_2: "屏蔽成功",
role_tip_3: "您不能查看自己。",
charge_info_1: "玉符",
charge_info_2: "不足，是否前去购买？",
charge_info_3: "月卡+至尊卡+黄金会员+白金会员可同时生效",
charge_label_1_1: "距离 ",
charge_label_1_2: "VIP%{lv}",
charge_label_1_3: " 还有%{num}经验",
charge_label_2: "vip已达最高等级",
charge_label_3: "加送",
charge_label_4: "￥%{num}",
charge_label_5: "%{num}天",
charge_label_6: "购买",
charge_label_7: "剩余:",
charge_label_8: "已购买",
charge_tab_1: "储值",
charge_tab_2: "月卡",
charge_tab_3: "至尊卡",
charge_tab_4: "黄金会员",
charge_tab_5: "白金会员",
charge_title: "充值",
charge_tip_1: "已购买",
charge_tip_2: "购买成功",
charge_card_1: "月卡",
charge_card_2: "至尊卡",
charge_card_3: "黄金会员",
charge_card_4: "白金会员",
gift_title: "礼包",
gift_tab_1: "日礼包",
gift_tab_2: "周礼包",
gift_tab_3: "月礼包",
gift_tab_4: "vip礼包",
gift_label_1: "结束",
gift_label_2: "VIP 经验",
gift_label_3: "限购:%{num}",
gift_label_4: "解锁",
gift_label_5: "VIP%{num}",
gift_label_6: "购买",
gift_label_7: "限购%{num}次",
gift_label_8: "VIP %{num}",
gift_tip_1: "请等待礼包CD结束后再来选购",
gift_tip_2: "请提高VIP等级后再来选购",
gift_tip_3: "是否购买该VIP礼包",
giftnew_btn: "立即充值",
giftnew_info_1: "(可合成两个五星英雄)",
giftnew_info_2: "(可随机开出一个六星英雄)",
giftnew_limit: "限购数量: %{num}",
giftnew_tip: "已购买",
giftnew_tab_0: "筑基礼包",
giftnew_tab_1: "爆发礼包",
giftnew_tab_2: "超越礼包",
pvp_shop: "荣耀商店",
pvp_rank: "排行",
god_hero_rank_desp: "全服排行榜",
pvp_war_report: "战报",
pvp_defensive_camp: "防守阵容",
pvp_season_left_time: "赛季剩余时间:",
pvp_before_season_open: "距离赛季开启",
pvp_fight: "战斗",
pvp_buy: "购买",
pvp_buy_success: "购买成功",
pvp_settlement_tip: "下一赛季将于周一8:00开启。",
pvp_refresh: "换一批",
pvp_ranking: "排名: ",
pvp_ranking_1: "排名",
pvp_rank_title_1: "排行榜",
pvp_rank_title_2: "每日奖励",
pvp_rank_title_3: "赛季奖励",
pvp_power: "战力:",
pvp_enter_tip: "主公3级开启天下枭雄。",
pvp_info1: "1.每日20:00根据排名发放阶段性奖励。",
pvp_info2: "2.每周日20:00赛季结束并根据排名发放赛季奖励。",
pvp_info3: "您的当前排名 %{str} ，保持排名可以获得",
pvp_info4: "每天20点发放奖励，根据每日排名结算时的排名获得奖励，奖励列表如下:",
pvp_info5: "您的当前排名 %{str} \n赛季结束根据排名获得奖励，奖励列表如下:",
pvp_info6: "您的当前排名 %{str} ，进入前1000名才能获得奖励。",
pvp_log_nothing: "暂无战报哦~",
pvp_ran_nothing: "一览众山小~",
tripod_rank_info_1: "我的排名  %{no}",
tripod_rank_info_2: "排名奖励",
pvp_enter_tip_2: "主公20级开启诸王夺鼎。",
pvp_server: "%{num}区",
pvp_info7: "1.每日21:00根据排名发放阶段性奖励。",
pvp_info8: "2.每周日21:00赛季结束并根据排名发放赛季奖励。",
pvp_info9: "每天21点发放奖励，根据每日排名结算时的排名获得奖励，奖励列表如下:",
tripod_rank_scene_0: "第一场",
tripod_rank_scene_1: "第二场",
tripod_rank_scene_2: "第三场",
dungeon_main_tips_1: "暂未开启",
dungeon_main_tips_2: "主公4级开启决战刑天。",
dungeon_main_tips_3: "副本未开启",
dungeon_main_tips_4: "主公6级开启矿区争霸。",
dungeon_main_tips_5: "主公10级开启最强神将。",
dungeon_main_info_1: "开启倒计时:",
dungeon_main_info_2: "赛季剩余时间:",
dungeon_main_info_3: "奖励领取剩余时间:",
dungeon_main_label_1: "开始挑战",
dungeon_main_label_2: "挑战",
dungeon_main_label_3: "剩余次数: %{num}次",
dungeon_main_btn_1: "伤害排行",
dungeon_main_btn_2: "奖励",
dungeon_boss_label_1: "\n    说明1: 周一到周六每晚20:30根据排名发放阶段性奖励。\n    说明2: 每周日20:30赛季结束并根据排名发放赛季奖励。\n    ",
dungeon_boss_label_2: "赛季剩余时间:",
dungeon_boss_tips_1: "赛季已结束",
dungeon_reward_tab_1: "每日奖励",
dungeon_reward_tab_2: "赛季奖励",
dungeon_reward_help: "\n1.主公4级开启刑天副本，战斗回合数达到11、21回合，奖励会有明显提升。\n\n2.活动每周一早8:00开始，每天3次免费挑战机会，可用玉符购买挑战次数。\n\n3.当己方全部阵亡，或者战斗回合数超过30回合，战斗结束。\n\n4.奖励分为每日奖励和赛季奖励，具体请查看【奖励】按钮。\n    ",
dungeon_rank_label_1: "未上榜",
dungeon_rank_label_2: "还没人打过boss~",
dungeon_reward_label_1: "您的当前排名 %{str} ",
dungeon_reward_label_2: "您还未攻打过boss",
dungeon_reward_label_3: "赛季结束根据排名获得奖励，奖励列表如下:",
dungeon_reward_label_4: "您的当前排名 %{str} ，保持排名可以获得",
dungeon_reward_label_5: "每天20:30发放奖励，根据每日排名结算时的排名获得奖励，奖励列表如下:",
dungeon_reward_label_6: "您还未攻打过boss，快去大战一场吧~",
quit_not_save_confirm: "退出将不保存转换结果，是否退出？",
location_is_full: "位置已满",
bubble_arena_msg_1: "报告主公，您在",
bubble_arena_msg_6: "被",
bubble_arena_msg_2: "玩家",
bubble_arena_msg_3: "攻击",
bubble_arena_msg_4: "排名从第%{oldNum}名下降至第%{newNum}名。",
bubble_arena_msg_5: "排名第%{num}名保持不变。",
bubble_btn_next_msg: "下一封",
bubble_btn_over: "朕已阅",
bubble_type_1: "天下枭雄",
bubble_type_2: "矿区争霸",
bubble_type_3: "诸王夺鼎",
bubble_mine_msg: "损失了大部分收益，望主公振作啊！",
mine_output: "产量:       %{num}/秒",
mine_subordinate: "当前所属:",
mine_first_kill: "该矿脉由%{str}首次击败",
mine_first_kill_reward: "首次击败奖励:",
mine_already_get: "已经采集: %{num}",
mine_left_time: "剩余时间: ",
mine_attack: "攻占",
mine_captured: "已占领",
mine_gain: "收获",
mine_free_count: "剩余免费攻占次数: ",
mine_cost_count: "剩余限购攻占次数: ",
mine_guard: "矿区守卫",
mine_friend_tip: "该玩家是您的好友，不可见利忘义！",
mine_msg: "消息",
mine_report_list: "战报",
mine_enemy_list: "仇人列表",
mine_enemy_tip: "四海之内皆兄弟~",
mine_left_occupy_time: "首杀冷却时间",
makret_refresh: "刷新",
makret_force_refresh: "强制刷新",
makret_fifty_off: "使用半价卡购买",
mission_get: "领取",
mission_go: "前往",
mission_done: "已完成",
mission_time_info: "重置时间",
mission_contest_tip: "完成当日所有任务领取",
mission_month_contest_tip: "完成当月所有任务领取",
mission_week_contest_tip: "完成当周所有任务领取",
mission_level_tip: "主公5级开启任务。",
mission_tab_day: "每日",
mission_tab_month: "每月",
mission_tab_week: "每周",
limit_name: "春节活动",
limit_stauts_tip: "您已经领取过该礼包。",
limit_mask_tip: "该礼包还不能领取",
league_join_tab_0: "排行",
league_join_tab_1: "建国",
league_join_tab_2: "申请",
league_join_info_1: "请输入国号",
league_join_info_2: "国君诏书",
league_join_info_3: "选择",
league_join_info_4: "建国",
league_join_info_5: "已申请",
league_join_info_6: "搜索",
league_join_create_tip: "是否花费%{num}玉符建立国家？",
league_info_1: "等  级",
league_info_2: "成  员",
league_info_3: "国家ID",
league_info_4: "国  君",
league_info_5: "排  名",
league_main_tab_0: "成员",
league_main_tab_1: "排行",
league_main_tab_2: "日志",
league_main_tab_3: "审核",
league_main_exit: "退出公会",
league_main_exit_tip: "【%{name}】待你不薄，是否抛弃往日恩惠，坚定的叛国？",
league_main_apply_tip: "您官职过低，仅君主、丞相拥有审批权限。",
bag_resours: "资源",
bag_equip: "装备",
bag_magic: "法宝",
play_info: "玩家信息",
play_nickname: "昵称",
play_serialLb: "编号",
play_emt: "仅接受互相关注玩家的邮件",
play_changename: "更名",
play_replyh: "更换",
play_set: "个性设置",
play_newname: "输入新的名字",
user_infos: "个人信息",
user_care: "关注",
user_fans: "粉丝",
user_sendEmail: "发送邮件",
user_receiveEmail: "收件人:",
mail_system: "系统",
mail_person: "个人",
herobag_pic: "图鉴",
bounty_scroll: "卷轴使用",
bounty_scrollnot: "悬赏卷轴不足",
bounty_scrollnor: "普通",
bounty_scrollsen: "高级",
hero_handbook: "英雄碎片",
main_challenge: "挑战首领",
main_nextchallenge: "下一关",
main_nextmap: "前往新地图",
main_quickHangup: "快速挂机",
main_hangupfree: "免费使用",
can_bind_equip_above: "可合成的装备如下",
crafting: "打造",
black_smith: "铁匠铺",
equip_com: "装备合成",
magic_pic: "法宝图鉴",
hero_stove: "乾坤炉",
hero_selHro: "已选择要分解的英雄",
hero_quickIn: "快速放入",
hero_resolve: "分解",
hero_upstar: "升星台",
upstarhero_level_not_enough: "英雄品阶满阶后才能继续升星",
advanced_dan_not_enough: "进阶丹不足",
upstarhero_material_not_enough: "英雄升星材料不足",
hero_replace: "请选择置换的英雄",
hero_replace_title: "英雄置换",
hero_recruit_title: "英雄召唤",
hero_recruit_select: "定向召唤",
bounty_hero: "皇宫悬赏",
bounty_dispatch: "派遣",
bounty_selectHero: "快速选择",
bounty_start: "开始",
bounty_reward: "悬赏奖励",
bounty_done: "完成",
bounty_refresh: "确认花费%{num}元宝刷新任务？",
bounty_adviceWork: "确认花费%{num}元宝提前完成任务？",
test_title: "日常挑战",
test_play: "播放",
test_gift_list: "奖励列表",
test_reset_time: "重置倒计时",
wish_refreshDia: "确认花费%{num}元宝刷新?",
shop_buy: "商店购买",
shop_grocery: "杂货铺",
shop_hero: "乾坤炉商店",
shop_honor: "竞技场商店",
shop_heavenly: "大转盘商店",
shop_secret: "不周山商店",
shop_countdown_free: "距离免费时间",
heroCion_buy: "卷轴购买",
wishCion_buy: "许愿币购买",
wish_time: "%{num}次",
wish_notEnough: "转盘卷轴不足",
notEnough_diamond: "元宝不足",
notEnough_coin: "银币不足",
result_touch_continue: "点击任意位置继续",
result_lose_upgrade: "提升英雄",
result_lose_compound: "合成高阶英雄",
result_lost_change: "调整整容",
result_data_recode: "数据统计",
free_refresh: "免费刷新",
vip_shop_shop: "商店",
vip_shop_privilege: "特权",
vip_shop_to_vip_level: "到达贵族%{num}",
vip_shop_to_max_vip: "恭喜您，已到达最高贵族等级",
vip_shop_huode: "获得：",
vip_shop_nobility_gift: "贵族%{num}奖励",
vip_shop_nobility_privilege: "贵族%{num}特权",
vip_shop_to_level_huode: "到达该贵族等级，可在成就中领取：",
vip_shop_buy_month: "激活至尊月卡，每日额外获得：",
vip_limit_hero_count: "英雄携带数量上限：",
vip_limit_hangup_huode_1: "挂机额外银币、经验丹产出：",
vip_limit_hangup_huode_2: "挂机额外玩家经验产出：",
vip_limit_high_level_summon: "解锁高级召唤能量宝箱",
vip_limit_wishing_well_10: "开启大转盘十连抽模式",
vip_limit_fast_hangup_count: "每日快速挂机次数",
vip_limit_new_task_count: "悬赏任务每日新增任务数量",
vip_limit_days_challenge: "日常挑战每日购买次数",
vip_limit_activity_count: "月活动手动重置次数",
vip_limit_battle_quicken: "解锁战斗加速",
arena_log: "战斗记录",
chat: "聊天",
tower_top: "轮回塔榜",
tower_mypop: "我的排名",
tower_enemy: "本层敌人",
tower_getReward: "可领取",
tower_alReward: "已领取",
tower_notdone: "未完成",
tower_allServerRe: "本服任意一名玩家轮回塔达到%{num}层",
tower_noPass: "虚位以待",
tower_noPlayer: "暂无玩家达成条件",
tower_fivePop: "前5名达成玩家",
buzhou_title: "不周山试炼",
pass_MissonRew: "通关福利",
pass_MissonNum: "通过关卡%{num}",
pass_MainNum: "轮回塔通过第%{num}层",
NotPas_Mission: "未达成",
Fight_Ready: "战斗准备",
Go_Fight: "开战",
Camp_Hurt: "阵营克制将额外造成%{num}%伤害",
HaloCamp: "上阵英雄满足以下条件可获得强大属性加成",
dail: "日常",
achievement: "成就",
nobility_exp: "贵族经验+%{num}",
only_first_buy: "仅限首充购买",
first_buy_double: "首充翻倍",
Pass_nextMap: "前一地图挑战完成后开放",
lock_hero: "该英雄已锁定",
lock_arenafight: "该英雄在竞技场防守阵容中",
curr_not_open: "暂未开放，敬请期待！",
ream_lig: "阵营光环"
};
cc._RF.pop();
}, {} ]
}, {}, [ "Label", "en", "zh", "i18n", "polyglot", "i18nCom", "Http", "test" ]);