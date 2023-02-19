import Command from "../Command.js";
import FontRenderer from "../../render/gui/FontRenderer.js";

export default class HelpCommand extends Command {

    constructor() {
        super("guy", "", "Show love to guy hamatok")
    }

    execute(minecraft, args) {
        minecraft.addMessageToChat(FontRenderer.COLOR_PREFIX + "guy hamatook!!!");
        });
        return true;
    }

}