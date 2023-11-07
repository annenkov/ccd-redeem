const CONTRACT_NAME = 'ccd_redeem';

const REDEEM_ENTRYPOINT = 'redeem'

const REDEEM_ENTRYPOINT_FULL = `${CONTRACT_NAME}.${REDEEM_ENTRYPOINT}`;

const VIEW_COIN_ENTRYPOINT = 'viewCoin';

const VIEW_COIN_ENTRYPOINT_FULL = `${CONTRACT_NAME}.${VIEW_COIN_ENTRYPOINT}`

const MAX_COST = 30000n;

const CONTRACT_ADDRESS = {
    index: 7211n,
    // TBD: index of a demo contract.
    subindex: 0n,
};

const SCHEMAS = {
    contractName: 'ccd_redeem',
    entrypoints: {
        issue: {
            error: 'FQ0AAAALAAAAUGFyc2VQYXJhbXMCDAAAAENvaW5Ob3RGb3VuZAITAAAAQ29pbkFscmVhZHlSZWRlZW1lZAIRAAAAQ29pbkFscmVhZHlFeGlzdHMCDgAAAEludm9rZVRyYW5zZmVyAhEAAABJbnZhbGlkU2lnbmF0dXJlcwINAAAATm90QXV0aG9yaXplZAINAAAAV3JvbmdDb250cmFjdAIPAAAAV3JvbmdFbnRyeVBvaW50Ag0AAABOb25jZU1pc21hdGNoAgcAAABFeHBpcmVkAg4AAABNaXNzaW5nQWNjb3VudAIWAAAATWFsZm9ybWVkU2lnbmF0dXJlRGF0YQI=',
            parameter: 'FAABAAAABQAAAGNvaW5zEAIPHiAAAAAK',
        },
        permit: {
            parameter:
                'FAADAAAACQAAAHNpZ25hdHVyZRIAAhIAAhUBAAAABwAAAEVkMjU1MTkBAQAAAB5AAAAABgAAAHNpZ25lcgsHAAAAbWVzc2FnZRQABQAAABAAAABjb250cmFjdF9hZGRyZXNzDAUAAABub25jZQUJAAAAdGltZXN0YW1wDQsAAABlbnRyeV9wb2ludBYBBwAAAHBheWxvYWQQAQI=',
        },
        redeem: {
            error: 'FQ0AAAALAAAAUGFyc2VQYXJhbXMCDAAAAENvaW5Ob3RGb3VuZAITAAAAQ29pbkFscmVhZHlSZWRlZW1lZAIRAAAAQ29pbkFscmVhZHlFeGlzdHMCDgAAAEludm9rZVRyYW5zZmVyAhEAAABJbnZhbGlkU2lnbmF0dXJlcwINAAAATm90QXV0aG9yaXplZAINAAAAV3JvbmdDb250cmFjdAIPAAAAV3JvbmdFbnRyeVBvaW50Ag0AAABOb25jZU1pc21hdGNoAgcAAABFeHBpcmVkAg4AAABNaXNzaW5nQWNjb3VudAIWAAAATWFsZm9ybWVkU2lnbmF0dXJlRGF0YQI=',
            parameter: 'FAADAAAACgAAAHB1YmxpY19rZXkeIAAAAAkAAABzaWduYXR1cmUeQAAAAAcAAABhY2NvdW50Cw==',
        },
        setAdmin: {
            error: 'FQ0AAAALAAAAUGFyc2VQYXJhbXMCDAAAAENvaW5Ob3RGb3VuZAITAAAAQ29pbkFscmVhZHlSZWRlZW1lZAIRAAAAQ29pbkFscmVhZHlFeGlzdHMCDgAAAEludm9rZVRyYW5zZmVyAhEAAABJbnZhbGlkU2lnbmF0dXJlcwINAAAATm90QXV0aG9yaXplZAINAAAAV3JvbmdDb250cmFjdAIPAAAAV3JvbmdFbnRyeVBvaW50Ag0AAABOb25jZU1pc21hdGNoAgcAAABFeHBpcmVkAg4AAABNaXNzaW5nQWNjb3VudAIWAAAATWFsZm9ybWVkU2lnbmF0dXJlRGF0YQI=',
            parameter: 'Cw==',
        },
        supportsPermit: {
            error: 'FQ0AAAALAAAAUGFyc2VQYXJhbXMCDAAAAENvaW5Ob3RGb3VuZAITAAAAQ29pbkFscmVhZHlSZWRlZW1lZAIRAAAAQ29pbkFscmVhZHlFeGlzdHMCDgAAAEludm9rZVRyYW5zZmVyAhEAAABJbnZhbGlkU2lnbmF0dXJlcwINAAAATm90QXV0aG9yaXplZAINAAAAV3JvbmdDb250cmFjdAIPAAAAV3JvbmdFbnRyeVBvaW50Ag0AAABOb25jZU1pc21hdGNoAgcAAABFeHBpcmVkAg4AAABNaXNzaW5nQWNjb3VudAIWAAAATWFsZm9ybWVkU2lnbmF0dXJlRGF0YQI=',
            parameter: 'FAABAAAABwAAAHF1ZXJpZXMQARYB',
            returnValue: 'EAEVAwAAAAkAAABOb1N1cHBvcnQCBwAAAFN1cHBvcnQCCQAAAFN1cHBvcnRCeQEBAAAAEAAM',
        },
        view: {
            returnValue: 'FAACAAAABQAAAGNvaW5zEAIPHiAAAAAUAAIAAAAGAAAAYW1vdW50CgsAAABpc19yZWRlZW1lZAEFAAAAYWRtaW4L',
        },
        "viewCoin": {
            "parameter": "HiAAAAA=",
            "returnValue": "FAACAAAABgAAAGFtb3VudAoLAAAAaXNfcmVkZWVtZWQB"
        },
        viewMessageHash: {
            "parameter": "FAADAAAACQAAAHNpZ25hdHVyZRIAAhIAAhUBAAAABwAAAEVkMjU1MTkBAQAAAB5AAAAABgAAAHNpZ25lcgsHAAAAbWVzc2FnZRQABQAAABAAAABjb250cmFjdF9hZGRyZXNzDAUAAABub25jZQUJAAAAdGltZXN0YW1wDQsAAABlbnRyeV9wb2ludBYBBwAAAHBheWxvYWQQAQI=",
            "returnValue": "EyAAAAAC"
        }
    },
    init: {
        "parameter": "FAABAAAABQAAAGNvaW5zEAIPHiAAAAAK"
    }
};

export default { SCHEMAS, CONTRACT_NAME, REDEEM_ENTRYPOINT, REDEEM_ENTRYPOINT_FULL, VIEW_COIN_ENTRYPOINT, VIEW_COIN_ENTRYPOINT_FULL, CONTRACT_ADDRESS, MAX_COST };