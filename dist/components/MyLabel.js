"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
/**
 * Primary UI component for user interaction
 */
var MyLabel = function (_a) {
    var label = _a.label, size = _a.size, _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, _c = _a.colorClass, colorClass = _c === void 0 ? 'primary' : _c, color = _a.color, props = __rest(_a, ["label", "size", "allCaps", "colorClass", "color"]);
    var text = function () {
        if (allCaps) {
            return label.toUpperCase();
        }
        return label;
    };
    return (0, jsx_runtime_1.jsx)("span", __assign({ className: "label " + size + " text-" + colorClass, style: { color: color } }, props, { children: text() }), void 0);
};
exports.MyLabel = MyLabel;
