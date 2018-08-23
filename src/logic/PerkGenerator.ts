import Perk from "src/models/Perk";
import PerkLoader from "./PerkLoader";

class PerkGenerator {
    private loader: PerkLoader;
    constructor() {
        this.loader = new PerkLoader();
    }

    public getPerks(): Set<Perk> {
        const set = new Set;
        while (set.size < 4) {
            set.add(this.get());
        }
        return set;
    }

    public get(): Perk {
        const i = Math.floor(Math.random() * this.loader.perks.length);
        return this.loader.perks[i] as Perk;
    }

    public getPerksAsString(): string {
        let perks: string = "";
        this.getPerks().forEach(e => perks =  "[" + e.name + "] " + perks);
        return perks;
    }
}

export default PerkGenerator;
