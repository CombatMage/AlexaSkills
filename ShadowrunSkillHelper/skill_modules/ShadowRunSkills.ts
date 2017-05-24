class ActionCheck {
    constructor(private _isComplex: boolean, private _attribute: string, private _skill: string, private _limit: string) {}
}

let SKILL_ELECT_WARFARE = 'Elektronische Kriegsführung';

let LO = 'Logik';

let DEV_ATTACK = 'Angriff'

let SKILL_CHECKS: { [skill: string]: ActionCheck} = {
    'Signal Stören': new ActionCheck(true, SKILL_ELECT_WARFARE, LO, DEV_ATTACK),
    'id1': new ActionCheck(true, '', '', '')
}
