import { Plugin } from "obsidian";
import { HabiticaSyncSettingsTab } from "./settings";
import { HabiticaSyncView, VIEW_TYPE} from "./view"

interface HabiticaSyncSettings {
    userID: string
    apiToken: string
}
const DEFAULT_SETTINGS: Partial<HabiticaSyncSettings> = {
    userID: "",
    apiToken: ""
}
export default class HabiticaSync extends Plugin {
    settings: HabiticaSyncSettings;
    view: HabiticaSyncView;

    async onload() {
        // console.log("load plugin: habitica-sync")
        await this.loadSettings();
        this.addSettingTab(new HabiticaSyncSettingsTab(this.app, this));
        this.registerView(
            VIEW_TYPE,
            (leaf) => (new HabiticaSyncView(leaf, this))
          );
        this.addRibbonIcon("popup-open", "Open Habitica Pane", () => {  //activate view
            this.activateView();
        });
        this.addCommand({
            id: "habitica-view-open",
            name: "Open Pane",
            hotkeys: [{ modifiers: ["Mod", "Shift"], key: "h"}],
            callback: () => {
                this.activateView();
            }
        });
        this.activateView();
        
    }
    async loadSettings() {
        this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData())
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }

    async onunload() {
        // await this.view.onClose();
    
        this.app.workspace
            .getLeavesOfType(VIEW_TYPE)
            .forEach((leaf) => leaf.detach());
    }
    async activateView() {
        this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    
        await this.app.workspace.getRightLeaf(false).setViewState({
          type: VIEW_TYPE,
          active: true,
        });
    
        this.app.workspace.revealLeaf(
          this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]
        );
      }
    
}
