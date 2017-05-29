class ActionCheck {
    constructor(
        private isComplex: boolean,
        private attribute: string,
        private skill: string,
        private limit: string,
        private notes: string = "",
    ) {}
}

const SKILL_ELECT_WARFARE = "Elektronische Kriegsführung";

const LO = "Logik";

const DEV_ATTACK = "Angriff";

const SKILL_CHECKS: { [skill: string]: ActionCheck} = {
    

    "Signal Stören": new ActionCheck(true, SKILL_ELECT_WARFARE, LO, DEV_ATTACK),
    "id1": new ActionCheck(true, "", "", ""),
};

