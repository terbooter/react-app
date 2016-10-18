/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import {Note} from "./Note";

import './NotesGrid.css';
import {NoteData} from "./NoteData";

// import MasonryGrid = Masonry.MasonryGrid;
// import MasonryOptions = Masonry.MasonryOptions;

declare class Masonry implements Masonry.MasonryGrid {
    constructor(selector: any, options?: Masonry.MasonryOptions);
}

class Properties {
    notes: NoteData[];
    onNoteDelete: Function;
}

export class NotesGrid extends React.Component<Properties, any> {

    private masonry: any;

    componentDidMount() {
        var grid = this.refs["grid"];

        this.masonry = new Masonry(grid as any, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            fitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.masonry.reloadItems();
            this.masonry.layout();
        }
    }

    render() {
        var onNoteDelete = this.props.onNoteDelete;

        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
}
