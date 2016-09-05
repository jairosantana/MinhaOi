function addWidgetsfrmSplash() {
    frmSplash.setDefaultUnit(kony.flex.DP);
    var flexSplash = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexSplash",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flexSplash.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "20%",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "oi_logo_1.png",
        "width": "40%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexSplash.add(imgLogo);
    frmSplash.add(flexSplash);
};

function frmSplashGlobals() {
    frmSplash = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSplash,
        "enabledForIdleTimeout": false,
        "id": "frmSplash",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_3a4a7df2907249df8743f106587f4c28,
        "skin": "CopyslForm07f8b346128b345",
        "statusBarHidden": true
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
    frmSplash.info = {
        "kuid": "5d3a0118040143a58e38e9ce0ca43cbe"
    };
};