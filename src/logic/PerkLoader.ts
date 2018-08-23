import Perk from "src/models/Perk";
import Perks from "src/resources/perks";

class PerkLoader {
    public perks: Perk[];

    constructor() {
        this.perks = Perks.perks;
    }
}

export default PerkLoader;
