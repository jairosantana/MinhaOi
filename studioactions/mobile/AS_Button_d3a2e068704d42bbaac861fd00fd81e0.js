function AS_Button_d3a2e068704d42bbaac861fd00fd81e0(eventobject) {
    function INVOKE_ASYNC_SERVICE__cafa777790ce47cb9a52e063f691795e_Callback(status, getRecords) {
        var tempCollection3684 = [];
        var tempData6792 = getRecords["records"];
        for (var each in tempData6792) {
            tempCollection3684.push({
                "label1": {
                    "text": tempData6792[each]["id"]
                },
                "label2": {
                    "text": tempData6792[each]["name"]
                },
            });
        }
        frmTeste2.segLista.setData(tempCollection3684);
        frmTeste2.show();
    }
    if (getRecords_inputparam == undefined) {
        var getRecords_inputparam = {};
    }
    getRecords_inputparam["serviceID"] = "User$getRecords";
    var getRecords_httpheaders = {};
    getRecords_inputparam["httpheaders"] = getRecords_httpheaders;
    var getRecords_httpconfigs = {};
    getRecords_inputparam["httpconfig"] = getRecords_httpconfigs;
    User$getRecords = mfintegrationsecureinvokerasync(getRecords_inputparam, "User", "getRecords", INVOKE_ASYNC_SERVICE__cafa777790ce47cb9a52e063f691795e_Callback);
}