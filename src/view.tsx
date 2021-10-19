import { ItemView,WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./view/App"
import HabiticaSync from "./main";


export const VIEW_TYPE = "example-view"

export class HabiticaSyncView extends ItemView {
    plugin: HabiticaSync;
    constructor(leaf: WorkspaceLeaf, plugin: HabiticaSync) {
        super(leaf)
        this.plugin = plugin
    }

    getViewType() {
        return VIEW_TYPE
    }

    getDisplayText() {
        return "Habitica Pane"
    }
    getIcon(): string {
        return "popup-open"
    }

    async onOpen() {
        ReactDOM.render(
            <App plugin={this.plugin}/>,
           this.containerEl.children[1]
        )
    }

    async onClose(){
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}