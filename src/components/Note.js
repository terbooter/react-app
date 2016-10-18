/// <reference path="../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require('./Note.css');
var Propertires = (function () {
    function Propertires() {
    }
    return Propertires;
}());
exports.Propertires = Propertires;
var Note = (function (_super) {
    __extends(Note, _super);
    function Note() {
        _super.apply(this, arguments);
    }
    Note.prototype.render = function () {
        var style = { backgroundColor: this.props.color };
        return (React.createElement("div", {className: "note", style: style}, React.createElement("span", {className: "delete-note", onClick: this.props.onDelete}, " × "), this.props.children));
    };
    return Note;
}(React.Component));
exports.Note = Note;
//# sourceMappingURL=Note.js.map