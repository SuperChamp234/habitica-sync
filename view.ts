import { ItemView,WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactView } from "./ReactView";


export const VIEW_TYPE_EXAMPLE = "example-view"

export class ExampleView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf)
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE
    }

    getDisplayText() {
        return "Example View"
    }

    async onOpen() {
        ReactDOM.render(
            React.createElement(ReactView),
            this.containerEl.children[1]
        )
    }

    async onClose(){
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}