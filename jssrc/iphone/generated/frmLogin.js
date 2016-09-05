function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer025b7599b12dc44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16.30%",
        "id": "FlexContainer025b7599b12dc44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "12%",
        "width": "100%"
    }, {}, {});
    FlexContainer025b7599b12dc44.setDefaultUnit(kony.flex.DP);
    var Image0c8d93bbbb8e44a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100%",
        "id": "Image0c8d93bbbb8e44a",
        "isVisible": true,
        "left": "21.189999999999998%",
        "skin": "slImage",
        "src": "oi_logo.png",
        "top": "0%",
        "width": "57.81%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer025b7599b12dc44.add(Image0c8d93bbbb8e44a);
    var FlexContainer0ec01104a62ff45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "32%",
        "id": "FlexContainer0ec01104a62ff45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "skin": "slFbox",
        "top": "33%",
        "width": "92%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ec01104a62ff45.setDefaultUnit(kony.flex.DP);
    var txtRUT = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox0eb6e13d1a4c643",
        "height": "20%",
        "id": "txtRUT",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "maxTextLength": 9,
        "placeholder": "CPF ou usuario",
        "secureTextEntry": false,
        "skin": "CopyslTextBox02b06b021f4a144",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "showClearButton": false,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPhone = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox08235ca7e2f9443",
        "height": "20%",
        "id": "txtPhone",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "maxTextLength": 8,
        "placeholder": "Senha",
        "secureTextEntry": false,
        "skin": "CopyslTextBox013e5d19adc9747",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "52dp",
        "width": "100%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "showClearButton": false,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainer0ec01104a62ff45.add(txtRUT, txtPhone);
    var Button08aa38c51bf0a4f1234 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue00f3543c22eaf42",
        "height": "7%",
        "id": "Button08aa38c51bf0a4f1234",
        "isVisible": true,
        "onClick": AS_Button_33d6e7f86d344dc98aec57dc8e3e1c1f,
        "skin": "CopyslButtonGlossBlue078573af6b41043",
        "text": "Oi",
        "top": "65%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var FlexContainer0ffa8f90d662240 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5.43%",
        "id": "FlexContainer0ffa8f90d662240",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "skin": "slFbox",
        "top": "77%",
        "width": "92%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ffa8f90d662240.setDefaultUnit(kony.flex.DP);
    var Label03f1607debf0145 = new kony.ui.Label({
        "height": "100%",
        "id": "Label03f1607debf0145",
        "isVisible": true,
        "left": "0%",
        "skin": "lblGreySmall",
        "text": "Esqueceu sua senha?",
        "top": "0%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0190ff35287be40 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0190ff35287be40",
        "isVisible": true,
        "left": "50%",
        "skin": "lblGreySmall",
        "text": "Cadastre-se agora!",
        "top": "0%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0ffa8f90d662240.add(Label03f1607debf0145, CopyLabel0190ff35287be40);
    frmLogin.add(FlexContainer025b7599b12dc44, FlexContainer0ec01104a62ff45, Button08aa38c51bf0a4f1234, FlexContainer0ffa8f90d662240);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0f7b99c57eec049",
        "statusBarHidden": false
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
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frmLogin.info = {
        "notesId": "da7a7ea66cea42aa976fdddd0bc32bbe",
        "kuid": "da7a7ea66cea42aa976fdddd0bc32bbe"
    };
};