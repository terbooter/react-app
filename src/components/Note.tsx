/// <reference path="../../typings/index.d.ts" />

import * as React from "react";

import './Note.css';

export class Propertires {
    onDelete: any;
    color: string;
}

export class Note extends React.Component<Propertires, any> {
    render() {
        var style = {backgroundColor: this.props.color};

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
}
