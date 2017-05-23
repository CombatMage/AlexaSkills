class ActionCheck {
    constructor(private _attribute: string, private _skill: string, private _limit: string) {}
}

let SKILL_CHECKS: { [skill: string]: ActionCheck} = {
    'id': new ActionCheck('', '', ''),
    'id1': new ActionCheck('', '', '')
}
