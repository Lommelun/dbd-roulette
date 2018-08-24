import Perk from "src/models/Perk";
import Perks from "src/resources/perks";

class PerkGenerator {
    public getPerks(): Perk[] {
        const array = new Array;
        while (array.length < 4) {
            array.push(this.get());
        }
        return array;
    }

    public get(): Perk {
        const i = Math.floor(Math.random() * Perks.general.length);
        return Perks.general[i] as Perk;
    }

    public getPerksAsString(): string {
        let perks: string = "";
        this.getPerks().forEach(e => perks = "[" + e.name + "] " + perks);
        return perks;
    }
}

export default PerkGenerator;
