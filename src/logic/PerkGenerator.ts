import Perk from "src/models/Perk";
import Perks from "src/resources/perks";

class PerkGenerator {
    public getPerks(): Perk[] {
        const array = new Array;
        while (array.length < 4) {
            const perk = this.get();
            if (!array.includes(perk)) {
                array.push(perk);
            }
        }
        return array;
    }

    public get(): Perk {
        const i = Math.floor(Math.random() * (Perks.general.length + Perks.survivor.length));
        return Perks.general.concat(Perks.survivor)[i] as Perk;
    }
}

export default PerkGenerator;
