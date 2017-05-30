class ActionCheck {
    constructor(
        private isComplex: boolean,
        private attribute: string,
        private skill: string,
        private limit: string,
        private notes: string = "",
    ) {}
}
const SKILL_WICH = "Hexerei";
const SKILL_CONJURE = "Beschwörung";

const SKILL_ELECT_WARFARE = "Elektronische Kriegsführung";

const LO = "Logik";
const MAG = "Logik";

const MAG_POWER = "Kraftstufe";

const DEV_ATTACK = "Angriff";
const SKILL_CHECKS: { [skill: string]: ActionCheck} = {
    // kampf
    "Nahkampf": new ActionCheck(true, SKILL_ELECT_WARFARE, LO, DEV_ATTACK),

    // magie
    "Spruchzauberei": new ActionCheck(true, SKILL_WICH, MAG, MAG_POWER),
    "Beschwörung": new ActionCheck(true, SKILL_CONJURE, MAG, MAG_POWER),

    // matrix
    "Signal Stören": new ActionCheck(true, SKILL_ELECT_WARFARE, LO, DEV_ATTACK),
};

