var hotkeysType = [true, true],
    fscreen = true,
    muteAll = false;

chrome.storage.sync.get(["hotkeysType", "fscreen", "muteAll", "lastDay"], function (items) {
    console.log(items);
    if (!chrome.runtime.error) {
        if (items["hotkeysType"] && items["hotkeysType"].length == 2)
            document.querySelector("#keysType1").checked = items.hotkeysType[0];
        document.querySelector("#keysType2").checked = items.hotkeysType[1];
        if (items["fscreen"])
            document.querySelector("#fscreen").checked = items.fscreen;
        if (items["muteAll"])
            document.querySelector("#muteAll").checked = items.muteAll;
    }
});

function save() {
    chrome.runtime.sendMessage(
        'kakeffogmhndegdafnbobknemagiikak',
        {
            how: "set",
            what: {
                "hotkeysType": [
                    document.querySelector("#keysType1").checked,
                    document.querySelector("#keysType2").checked
                ],
                "fscreen": document.querySelector("#fscreen").checked,
                "muteAll": document.querySelector("#muteAll").checked
            }
        }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#save").addEventListener('click', save);
});