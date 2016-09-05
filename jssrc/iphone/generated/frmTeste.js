function addWidgetsfrmTeste() {
    frmTeste.setDefaultUnit(kony.flex.DP);
    var Button0e98c67e3e20246 = new kony.ui.Button({
        "bottom": "10%",
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "8%",
        "id": "Button0e98c67e3e20246",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue0965f4cf16d114d",
        "text": "Login",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Image04d4e725b208a45 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "20%",
        "id": "Image04d4e725b208a45",
        "isVisible": true,
        "skin": "slImage",
        "src": "oi_logo_1.png",
        "top": "5%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0275174e1abdc46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0275174e1abdc46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox04532a8a75a4146",
        "top": "215dp",
        "width": "65%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0275174e1abdc46.setDefaultUnit(kony.flex.DP);
    var TextField095d2a24a3e9f40 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextField095d2a24a3e9f40",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Usuário",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "26dp",
        "width": "90%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextField0f6592be2c73846 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.13%",
        "height": "40dp",
        "id": "CopyTextField0f6592be2c73846",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Senha",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "85dp",
        "width": "90%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainer0275174e1abdc46.add(TextField095d2a24a3e9f40, CopyTextField0f6592be2c73846);
    frmTeste.add(Button0e98c67e3e20246, Image04d4e725b208a45, FlexContainer0275174e1abdc46);
};

function frmTesteGlobals() {
    frmTeste = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTeste,
        "enabledForIdleTimeout": false,
        "id": "frmTeste",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm068b20662ae6a45"
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
    frmTeste.info = {
        "kuid": "7efdaf5620414b8fb50eb4f6c19f2a7c"
    };
};