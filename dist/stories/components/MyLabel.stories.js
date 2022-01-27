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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customcolor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'Example/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: 'color' },
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'prueba',
    size: 'normal'
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'prueba',
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'prueba',
    size: 'normal',
    colorClass: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'prueba',
    size: 'normal',
    colorClass: 'tertiary'
};
exports.Customcolor = Template.bind({});
exports.Customcolor.args = {
    label: 'prueba',
    size: 'h1',
    color: ''
};
