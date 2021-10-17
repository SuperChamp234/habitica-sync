import HabiticaSync from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class HabiticaSyncSettingsTab extends PluginSettingTab {
    plugin: HabiticaSync;

    constructor(app: App, plugin: HabiticaSync) {
        super(app, plugin)
        this.plugin = plugin
    }

    display(): void {
        let { containerEl } = this;
        containerEl.empty();

        new Setting(containerEl)
        .setName("Habitica User ID")
        .setDesc("Can be found in Settings > API")
        .addText((text) => 
            text
                .setPlaceholder("User ID")
                .setValue(this.plugin.settings.userID)
                .onChange(async (value) => {
                    this.plugin.settings.userID = value;
                    await this.plugin.saveSettings();
                })
        );

        new Setting(containerEl)
        .setName("Habitica API Token")
        .setDesc("Can be found in Settings > API")
        .addText((text) => 
            text
                .setPlaceholder("API Token")
                .setValue(this.plugin.settings.apiToken)
                .onChange(async (value) => {
                    this.plugin.settings.apiToken = value;
                    await this.plugin.saveSettings();
                })
        );
    }
}