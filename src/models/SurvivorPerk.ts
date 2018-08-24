import Perk from "src/models/Perk";

interface SurvivorPerk extends Perk {
    character: string,
    unlock_level: number
}

export default SurvivorPerk;
