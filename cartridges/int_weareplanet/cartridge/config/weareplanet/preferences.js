"use strict";

exports.getPreferences = void 0;
function getPreferences() {
    try {
        var customPreferences = dw.object.CustomObjectMgr.getCustomObject("WeArePlanet_Common", "weareplanet_common");
        return {
            spaceId: customPreferences.custom.spaceId,
            serviceName: "int_weareplanet.http.rest.payment.weareplanet",
            macVersion: 1,
            userId: customPreferences.custom.userId,
            apiSecret: customPreferences.custom.apiSecret
        };
    }
    catch (e) {
        var errorMessage = "Site \"" + dw.system.Site.getCurrent().getName() + "\" is not configured. You must update settings in BM > Merchant Tools > Site Preferences > WeArePlanet";
        dw.system.Logger.error(errorMessage);
        throw new Error(errorMessage + " : " + JSON.stringify({
            message: e.message,
            fileName: e.fileName,
            lineNumber: e.lineNumber
        }));
    }
}
exports.getPreferences = getPreferences;
module.exports = getPreferences();
