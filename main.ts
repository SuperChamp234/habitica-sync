import { Plugin } from "obsidian";
import { ExampleSettingsTab } from "./settings";
import { ExampleView, VIEW_TYPE_EXAMPLE} from "./view"

interface ExamplePluginSettings {
    dateFormat: string
    userID: string
    apiToken: string
}
const DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {
    dateFormat: "YYYY-MM-DD",
    userID: "",
    apiToken: ""
}
export default class ExamplePlugin extends Plugin {
    settings: ExamplePluginSettings;
    view: ExampleView;

    async onload() {
        await this.loadSettings();
        this.addSettingTab(new ExampleSettingsTab(this.app, this));
        this.registerView(
            VIEW_TYPE_EXAMPLE,
            (leaf) => (this.view = new ExampleView(leaf))
          );
        this.addRibbonIcon("dice", "Activate view", () => {  //activate view
            this.activateView();
        });
    }
    async loadSettings() {
        this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData())
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }
    async onunload() {
        await this.view.onClose();

        this.app.workspace
            .getLeavesOfType(VIEW_TYPE_EXAMPLE)
            .forEach((leaf) => leaf.detach());
    }
    async activateView() {
        this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
    
        await this.app.workspace.getRightLeaf(false).setViewState({
          type: VIEW_TYPE_EXAMPLE,
          active: true,
        });
    
        this.app.workspace.revealLeaf(
          this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
        );
      }
    
}
