"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("./NoteEditor.css");
var Properties = (function () {
    function Properties() {
    }
    return Properties;
}());
var State = (function () {
    function State() {
    }
    return State;
}());
var NoteEditor = (function (_super) {
    __extends(NoteEditor, _super);
    function NoteEditor(props) {
        _super.call(this, props);
        this.state = { text: '' };
    }
    NoteEditor.prototype.handleTextChange = function (event) {
        this.setState({ text: event.target.value });
    };
    NoteEditor.prototype.handleNoteAdd = function () {
        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    };
    NoteEditor.prototype.render = function () {
        return (React.createElement("div", {className: "note-editor"}, React.createElement("textarea", {placeholder: "Enter your note here... 123", rows: 5, className: "textarea", value: this.state.text, onChange: this.handleTextChange.bind(this)}), React.createElement("button", {className: "add-button", onClick: this.handleNoteAdd.bind(this)}, "Add")));
    };
    return NoteEditor;
}(React.Component));
exports.NoteEditor = NoteEditor;
//# sourceMappingURL=NoteEditor.js.map