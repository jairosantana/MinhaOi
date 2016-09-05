function addWidgetsfrmTransaction() {
    frmTransaction.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox069efecee218d41",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var imgCalc = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "150%",
        "height": "25%",
        "id": "imgCalc",
        "isVisible": true,
        "skin": "slImage01d6ff50b9d1f4e",
        "src": "calc.png",
        "width": "40%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAjusteTarifa = new kony.ui.Label({
        "centerX": "150%",
        "id": "lblAjusteTarifa",
        "isVisible": true,
        "skin": "CopyslLabel01621a9f4edd149",
        "text": "Transação Efetuada!",
        "top": "60%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgFinancial = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "150%",
        "height": "40%",
        "id": "imgFinancial",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage01d6ff50b9d1f4e",
        "src": "financial.png",
        "top": "323dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMain.add(imgCalc, lblAjusteTarifa, imgFinancial);
    frmTransaction.add(flexMain);
};

function frmTransactionGlobals() {
    frmTransaction = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTransaction,
        "enabledForIdleTimeout": false,
        "id": "frmTransaction",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_f155f35b7aac4b83ab351c218ff051f2,
        "skin": "CopyslForm025c6810b8b3141"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frmTransaction.info = {
        "kuid": "d65a8c55c40f42019ac8825916cdae59"
    };
};