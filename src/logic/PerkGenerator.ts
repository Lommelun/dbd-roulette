import * as _ from 'lodash';
import Perk from "src/models/Perk";
import Perks from "src/resources/perks";

class PerkGenerator {
    public generate() {
        const list = _.shuffle([...Perks.general, ...Perks.survivor] as Perk []);
        list.reduce((accumulator, current) => {
            const length = accumulator.length;
            if (current.flags === []) { return; }
        }, [] as Perk[])
    }

    public get(): Perk {
        const i = Math.floor(Math.random() * (Perks.general.length + Perks.survivor.length));
        return Perks.general.concat(Perks.survivor)[i] as Perk;
    }
}

export default PerkGenerator;
