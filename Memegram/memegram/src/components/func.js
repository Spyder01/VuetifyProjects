import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

async function SetObjects(Objkey, data) {
    await Storage.set({
        key: Objkey,
        value: JSON.stringify(data)
    });
    console.log(data)

}

async function GetObject(Objkey) {
    const ret = await Storage.get({ key: Objkey });
    const data = JSON.parse(ret.value);
    console.log(data)
    return data;
}



const func = {
    SetObjects: SetObjects,
    GetObject: GetObject
}

export default func