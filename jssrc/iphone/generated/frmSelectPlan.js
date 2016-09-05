function addWidgetsfrmSelectPlan() {
    frmSelectPlan.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var FlexContainerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "FlexContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0209ccf10cf2747",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    FlexContainerHeader.setDefaultUnit(kony.flex.DP);
    var btnHam = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0c23ccb44e93a46",
        "height": "80%",
        "id": "btnHam",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_488d8333d0ae40e4b5719d8304bc40ad,
        "skin": "CopyslButtonGlossBlue0a07e373450ab42",
        "top": "8%",
        "width": "14%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Label0db845629a4de40 = new kony.ui.Label({
        "height": "100%",
        "id": "Label0db845629a4de40",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f85e680e834f47",
        "text": "Planos e Tarifas",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyButton086ee62dae84b40 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed01944949080fc46",
        "height": "80%",
        "id": "CopyButton086ee62dae84b40",
        "isVisible": true,
        "left": "86%",
        "skin": "CopyslButtonGlossBlue0b16c95e2430849",
        "top": "8%",
        "width": "14%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainerHeader.add(btnHam, Label0db845629a4de40, CopyButton086ee62dae84b40);
    var FlexContainer0eaa9495e174240 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "24%",
        "id": "FlexContainer0eaa9495e174240",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": AS_FlexContainer_82a6563683824f728edde341c66f6245,
        "onTouchMove": AS_FlexContainer_b690e8ee436848e99f8a141bb7dd93be,
        "onTouchStart": AS_FlexContainer_1f4762f4bab2449b889aff47adc4b92a,
        "skin": "slFbox",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0eaa9495e174240.setDefaultUnit(kony.flex.DP);
    var Image0409268cd622341 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0409268cd622341",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "oi_bkg3.png",
        "top": "0%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0eaa9495e174240.add(Image0409268cd622341);
    var FlexScrollContainer088778dd0de3945 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "67.03%",
        "horizontalScrollIndicator": false,
        "id": "FlexScrollContainer088778dd0de3945",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox089ade8e463234b",
        "top": "33%",
        "verticalScrollIndicator": false,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer088778dd0de3945.setDefaultUnit(kony.flex.DP);
    var SegPlans = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "Copyseg08fb71d62b9b04b",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnSelect": "Solicitar",
            "lblDesc": "10% dscto.x 12 meses ",
            "lblDiscPrice": "$233,00",
            "lblOriginalPrice": "$259,00",
            "lblPlanDesc": "CUSTO FIXO MENSAL",
            "lblPlanName": "1.5 GB 350 MIN",
            "lblPromo": "Internet Promocional"
        }, {
            "btnSelect": "Solicitar",
            "lblDesc": "10% dscto.x 12 meses ",
            "lblDiscPrice": "$233,00",
            "lblOriginalPrice": "$259,00",
            "lblPlanDesc": "CUSTO FIXO MENSAL",
            "lblPlanName": "1.5 GB 350 MIN",
            "lblPromo": "Internet Promocional"
        }, {
            "btnSelect": "Solicitar",
            "lblDesc": "10% dscto.x 12 meses ",
            "lblDiscPrice": "$233,00",
            "lblOriginalPrice": "$259,00",
            "lblPlanDesc": "CUSTO FIXO MENSAL",
            "lblPlanName": "1.5 GB 350 MIN",
            "lblPromo": "Internet Promocional"
        }, {
            "btnSelect": "Solicitar",
            "lblDesc": "10% dscto.x 12 meses ",
            "lblDiscPrice": "$233,00",
            "lblOriginalPrice": "$259,00",
            "lblPlanDesc": "CUSTO FIXO MENSAL",
            "lblPlanName": "1.5 GB 350 MIN",
            "lblPromo": "Internet Promocional"
        }],
        "groupCells": false,
        "height": "94.59%",
        "id": "SegPlans",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "Copyseg041a0f358efbd4f",
        "rowTemplate": CopyFBox02c402e3701a143,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "dbd8d300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "3%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer03c55cfa0772841": "CopyFlexContainer03c55cfa0772841",
            "FlexContainer0def6dbdcad0048": "FlexContainer0def6dbdcad0048",
            "FlexContainerPlan": "FlexContainerPlan",
            "btnSelect": "btnSelect",
            "lblDesc": "lblDesc",
            "lblDiscPrice": "lblDiscPrice",
            "lblOriginalPrice": "lblOriginalPrice",
            "lblPlanDesc": "lblPlanDesc",
            "lblPlanName": "lblPlanName",
            "lblPromo": "lblPromo"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    FlexScrollContainer088778dd0de3945.add(SegPlans);
    var flexReduzido = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexReduzido",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_8a4cf214b7084a32ad2c8dcddefbe195,
        "skin": "CopyslFbox040a1b737f5034a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flexReduzido.setDefaultUnit(kony.flex.DP);
    flexReduzido.add();
    flexMain.add(FlexContainerHeader, FlexContainer0eaa9495e174240, FlexScrollContainer088778dd0de3945, flexReduzido);
    var imgDash = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDash",
        "isVisible": false,
        "left": "0%",
        "onTouchEnd": AS_Image_0ccc75733abf41ff84154796ac88da6a,
        "skin": "slImage0ec36d92d71104b",
        "src": "screen2.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 8
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxSideMenu = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": false,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxSideMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox007aabc97ac8049",
        "top": "0%",
        "verticalScrollIndicator": false,
        "width": "78%",
        "zIndex": 1
    }, {}, {});
    flxSideMenu.setDefaultUnit(kony.flex.DP);
    var FlexContainer0168cd48a7c1f4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20.04%",
        "id": "FlexContainer0168cd48a7c1f4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "1.02%",
        "width": "100%"
    }, {}, {});
    FlexContainer0168cd48a7c1f4e.setDefaultUnit(kony.flex.DP);
    var Image0736e84314bc444 = new kony.ui.Image2({
        "centerX": "47%",
        "height": "72.77%",
        "id": "Image0736e84314bc444",
        "isVisible": true,
        "left": "22.04%",
        "skin": "slImage",
        "src": "pic.png",
        "top": "0.00%",
        "width": "30.06%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainerUser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "27.27%",
        "id": "FlexContainerUser",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox025843f1dfabc40",
        "top": "72.73%",
        "width": "98.13%",
        "zIndex": 2
    }, {}, {});
    FlexContainerUser.setDefaultUnit(kony.flex.DP);
    var lblUser = new kony.ui.Label({
        "height": "100%",
        "id": "lblUser",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel001a4112874e648",
        "text": "User",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainerUser.add(lblUser);
    FlexContainer0168cd48a7c1f4e.add(Image0736e84314bc444, FlexContainerUser);
    var FlexContainer04159462b26b54a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "FlexContainer04159462b26b54a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": AS_FlexContainer_972ccc5606954bd984fa3d5c156f064a,
        "skin": "slFbox",
        "top": "23%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04159462b26b54a.setDefaultUnit(kony.flex.DP);
    var Button039ea5cbd0e3348 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue060b3a224253c48",
        "height": "80%",
        "id": "Button039ea5cbd0e3348",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue06553944da10048",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Label08abfd434d4644a = new kony.ui.Label({
        "height": "100%",
        "id": "Label08abfd434d4644a",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Consulta de Consumo",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyButton0fb0f304f83c54b = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue00e9ed179d11d44",
        "height": "50%",
        "id": "CopyButton0fb0f304f83c54b",
        "isVisible": true,
        "left": "78.16%",
        "skin": "CopyslButtonGlossBlue00adb959873a642",
        "top": "23%",
        "width": "6%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer04159462b26b54a.add(Button039ea5cbd0e3348, Label08abfd434d4644a, CopyButton0fb0f304f83c54b);
    var CopyFlexContainer0b97ce66abd594a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer0b97ce66abd594a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b97ce66abd594a.setDefaultUnit(kony.flex.DP);
    var CopyButton05449b02cfe5a4a = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue002e5702a41654a",
        "height": "80%",
        "id": "CopyButton05449b02cfe5a4a",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue01a56cd7a79c046",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0ec13daacab0540 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0ec13daacab0540",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Conta",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyButton085f833dd1a144a = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue00e9ed179d11d44",
        "height": "50%",
        "id": "CopyButton085f833dd1a144a",
        "isVisible": true,
        "left": "78.16%",
        "skin": "CopyslButtonGlossBlue00adb959873a642",
        "top": "23%",
        "width": "6%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    CopyFlexContainer0b97ce66abd594a.add(CopyButton05449b02cfe5a4a, CopyLabel0ec13daacab0540, CopyButton085f833dd1a144a);
    var CopyFlexContainer0eeefc66b919046 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer0eeefc66b919046",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "37%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0eeefc66b919046.setDefaultUnit(kony.flex.DP);
    var CopyButton0db8794baaf4c4b = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue02513b35e425546",
        "height": "80%",
        "id": "CopyButton0db8794baaf4c4b",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue0694450ceb13949",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0be0ddc73a1e045 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0be0ddc73a1e045",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Meu Plano",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0eeefc66b919046.add(CopyButton0db8794baaf4c4b, CopyLabel0be0ddc73a1e045);
    var CopyFlexContainer03dd09318934f40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer03dd09318934f40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "44%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer03dd09318934f40.setDefaultUnit(kony.flex.DP);
    var CopyButton060b8bfd76a9843 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue05a02a0c8286946",
        "height": "80%",
        "id": "CopyButton060b8bfd76a9843",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue023410d0d347148",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0c9a60633024c45 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0c9a60633024c45",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Minhas Franquias",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer03dd09318934f40.add(CopyButton060b8bfd76a9843, CopyLabel0c9a60633024c45);
    var CopyFlexContainer04263987e654e44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer04263987e654e44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": AS_FlexContainer_5fc98d2621f643fc971fa2932c1c1ba8,
        "skin": "slFbox",
        "top": "51%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer04263987e654e44.setDefaultUnit(kony.flex.DP);
    var CopyButton0218d9343284546 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue03ad7a753eda849",
        "height": "80%",
        "id": "CopyButton0218d9343284546",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue039e9453dc5ef4d",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0e1fa0b9f98074c = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0e1fa0b9f98074c",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Planos e Tarifas",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyButton0ac1899cf194245 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue00e9ed179d11d44",
        "height": "50%",
        "id": "CopyButton0ac1899cf194245",
        "isVisible": true,
        "left": "78.16%",
        "skin": "CopyslButtonGlossBlue00adb959873a642",
        "top": "23%",
        "width": "6%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    CopyFlexContainer04263987e654e44.add(CopyButton0218d9343284546, CopyLabel0e1fa0b9f98074c, CopyButton0ac1899cf194245);
    var CopyFlexContainer05d9af4f8542b46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer05d9af4f8542b46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "58%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer05d9af4f8542b46.setDefaultUnit(kony.flex.DP);
    var CopyButton03984b55a15944c = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue05c5eaffb3e9448",
        "height": "80%",
        "id": "CopyButton03984b55a15944c",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue0d4aa239c197f4e",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0e0acbae7013540 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0e0acbae7013540",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Ajuda e Suporte",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer05d9af4f8542b46.add(CopyButton03984b55a15944c, CopyLabel0e0acbae7013540);
    var CopyFlexContainer0851d0f3bb0b640 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer0851d0f3bb0b640",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0851d0f3bb0b640.setDefaultUnit(kony.flex.DP);
    var CopyButton089dfef9d0d094d = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0c3eb39c934aa45",
        "height": "80%",
        "id": "CopyButton089dfef9d0d094d",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue066e5166e80bd45",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0daebfcccd7b44f = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0daebfcccd7b44f",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Lojas",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0851d0f3bb0b640.add(CopyButton089dfef9d0d094d, CopyLabel0daebfcccd7b44f);
    var CopyFlexContainer0d8c5c53077fd47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer0d8c5c53077fd47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "77%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d8c5c53077fd47.setDefaultUnit(kony.flex.DP);
    var CopyButton048166d859f6b4d = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0445e351e548940",
        "height": "80%",
        "id": "CopyButton048166d859f6b4d",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue01cea0886159149",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0421eed0131494b = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0421eed0131494b",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Minha Conta",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0d8c5c53077fd47.add(CopyButton048166d859f6b4d, CopyLabel0421eed0131494b);
    var CopyFlexContainer09d98bea3b74146 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "CopyFlexContainer09d98bea3b74146",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": AS_FlexContainer_a98009f4f8c248ccab80ab31a4a0579e,
        "skin": "slFbox",
        "top": "84%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer09d98bea3b74146.setDefaultUnit(kony.flex.DP);
    var CopyButton05461dd31c91843 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue06bcbcb55530643",
        "height": "80%",
        "id": "CopyButton05461dd31c91843",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslButtonGlossBlue093206a93b2dd49",
        "top": "12%",
        "width": "10%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var CopyLabel0810155da26f442 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0810155da26f442",
        "isVisible": true,
        "left": "17%",
        "skin": "CopyslLabel0811dfad723c94d",
        "text": "Sair",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer09d98bea3b74146.add(CopyButton05461dd31c91843, CopyLabel0810155da26f442);
    flxSideMenu.add(FlexContainer0168cd48a7c1f4e, FlexContainer04159462b26b54a, CopyFlexContainer0b97ce66abd594a, CopyFlexContainer0eeefc66b919046, CopyFlexContainer03dd09318934f40, CopyFlexContainer04263987e654e44, CopyFlexContainer05d9af4f8542b46, CopyFlexContainer0851d0f3bb0b640, CopyFlexContainer0d8c5c53077fd47, CopyFlexContainer09d98bea3b74146);
    frmSelectPlan.add(flexMain, imgDash, flxSideMenu);
};

function frmSelectPlanGlobals() {
    frmSelectPlan = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSelectPlan,
        "enabledForIdleTimeout": false,
        "id": "frmSelectPlan",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_0f6e1c71119b41b78f611cf3f3468b47,
        "preShow": AS_Form_7885f3cfcd704b8097d96ff90f72ec6b,
        "skin": "CopyslForm0f2571221be4943",
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
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frmSelectPlan.info = {
        "notesId": "9cb876a3f604423b90064edc3acc8301",
        "kuid": "9cb876a3f604423b90064edc3acc8301"
    };
};