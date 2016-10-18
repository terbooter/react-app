"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('./NotesApp.css');
var NoteEditor_1 = require("./NoteEditor");
var NotesGrid_1 = require("./NotesGrid");
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
var NotesApp = (function (_super) {
    __extends(NotesApp, _super);
    function NotesApp(props) {
        _super.call(this, props);
        this.state = { notes: [] };
    }
    NotesApp.prototype.componentDidMount = function () {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    };
    NotesApp.prototype.componentDidUpdate = function () {
        this.updateLocalStorage();
    };
    NotesApp.prototype.handleNoteDelete = function (note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    };
    NotesApp.prototype.handleNoteAdd = function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    };
    NotesApp.prototype.render = function () {
        return (React.createElement("div", {className: "notes-app"}, React.createElement("h2", {className: "app-header"}, "NotesApp"), React.createElement(NoteEditor_1.NoteEditor, {onNoteAdd: this.handleNoteAdd.bind(this)}), React.createElement(NotesGrid_1.NotesGrid, {notes: this.state.notes, onNoteDelete: this.handleNoteDelete.bind(this)})));
    };
    NotesApp.prototype.updateLocalStorage = function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    };
    return NotesApp;
}(React.Component));
exports.NotesApp = NotesApp;
//# sourceMappingURL=NotesApp.js.map