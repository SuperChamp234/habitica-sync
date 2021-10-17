import { ItemView,WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactView from "./ReactView";
import HabiticaSync from "main";


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

    async onOpen() {
        ReactDOM.render(
            <ReactView userID = {this.plugin.settings.userID} tokenAPI = {this.plugin.settings.apiToken} plugin={this.plugin}/>,
           this.containerEl.children[1]
        )
    }

    async onClose(){
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}