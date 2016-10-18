"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/index.d.ts" />
var React = require("react");
var Note_1 = require("./Note");
require('./NotesGrid.css');
var Properties = (function () {
    function Properties() {
    }
    return Properties;
}());
var NotesGrid = (function (_super) {
    __extends(NotesGrid, _super);
    function NotesGrid() {
        _super.apply(this, arguments);
    }
    NotesGrid.prototype.componentDidMount = function () {
        var grid = this.refs["grid"];
        this.masonry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            fitWidth: true
        });
    };
    NotesGrid.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.masonry.reloadItems();
            this.masonry.layout();
        }
    };
    NotesGrid.prototype.render = function () {
        var onNoteDelete = this.props.onNoteDelete;
        return (React.createElement("div", {className: "notes-grid", ref: "grid"}, this.props.notes.map(function (note) {
            return (React.createElement(Note_1.Note, {key: note.id, onDelete: onNoteDelete.bind(null, note), color: note.color}, note.text));
        })));
    };
    return NotesGrid;
}(React.Component));
exports.NotesGrid = NotesGrid;
//# sourceMappingURL=NotesGrid.js.map