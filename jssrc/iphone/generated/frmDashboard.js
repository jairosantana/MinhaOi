function addWidgetsfrmDashboard() {
    frmDashboard.setDefaultUnit(kony.flex.DP);
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
        "onTouchEnd": AS_FlexContainer_2ac34cd930774c8e91ff1439419e3017,
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
        "onTouchEnd": AS_FlexContainer_e576f0aa372d4971a1276654f4d70a6f,
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
        "onTouchEnd": AS_FlexContainer_0cc03a385710486f8a59e9f9a802f973,
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
    var imgDash = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDash",
        "isVisible": false,
        "left": "0%",
        "onTouchEnd": AS_Image_0ccc75733abf41ff84154796ac88da6a,
        "skin": "slImage0ec36d92d71104b",
        "src": "screen1.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 8
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox05e0558625dd341",
        "top": "0%",
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerHeader.setDefaultUnit(kony.flex.DP);
    var btnHam = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0c23ccb44e93a46",
        "height": "80%",
        "id": "btnHam",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_1fd5389c901a4f57b47ae61bd6df8419,
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
    var lblHEader = new kony.ui.Label({
        "height": "100%",
        "id": "lblHEader",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f85e680e834f47",
        "text": "Consumo",
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
    var btnUser = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed01944949080fc46",
        "height": "80%",
        "id": "btnUser",
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
    FlexContainerHeader.add(btnHam, lblHEader, btnUser);
    var FlexContainerGraph = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "46%",
        "id": "FlexContainerGraph",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0518a6a8899344c",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerGraph.setDefaultUnit(kony.flex.DP);
    var flexOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flexOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchEnd": AS_FlexContainer_0bf21079ef044ecfb50a2e3cfca8acde,
        "skin": "CopyslFbox046a73d085ba745",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    flexOne.setDefaultUnit(kony.flex.DP);
    var btnOne = new kony.ui.Button({
        "focusSkin": "btnFcs",
        "height": "100%",
        "id": "btnOne",
        "isVisible": true,
        "left": "0%",
        "skin": "btnNorm",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgOne = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "70%",
        "id": "imgOne",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "circlered1.png",
        "top": "0%",
        "width": "70%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label07b4e57b5dfd64e = new kony.ui.Label({
        "height": "20%",
        "id": "Label07b4e57b5dfd64e",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel071a7081e776644",
        "text": "VOZ",
        "top": "77%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblVoiceCall = new kony.ui.Label({
        "height": "60%",
        "id": "lblVoiceCall",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel019f8a81259854b",
        "text": "21",
        "top": "4%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblVoiceCallUnit = new kony.ui.Label({
        "height": "15%",
        "id": "lblVoiceCallUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c180ada9781b45",
        "text": "MINUTOS",
        "top": "45%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexOne.add(btnOne, imgOne, Label07b4e57b5dfd64e, lblVoiceCall, lblVoiceCallUnit);
    var flexTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flexTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "onTouchEnd": AS_FlexContainer_d2629ed3f7ff43f3b8a58047332b2913,
        "skin": "CopyslFbox0096a4543f27b46",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    flexTwo.setDefaultUnit(kony.flex.DP);
    var btnTwo = new kony.ui.Button({
        "focusSkin": "btnFcs",
        "height": "100%",
        "id": "btnTwo",
        "isVisible": true,
        "left": "0%",
        "skin": "btnNorm",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgTwo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "70%",
        "id": "imgTwo",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "circlered2.png",
        "top": "0%",
        "width": "70%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel04cba0146f80a41 = new kony.ui.Label({
        "height": "20%",
        "id": "CopyLabel04cba0146f80a41",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel071a7081e776644",
        "text": "MENSAGENS",
        "top": "77%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMessages = new kony.ui.Label({
        "height": "60%",
        "id": "lblMessages",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel019f8a81259854b",
        "text": "6",
        "top": "4%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMessageUnit = new kony.ui.Label({
        "height": "15%",
        "id": "lblMessageUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c180ada9781b45",
        "text": "QTD",
        "top": "45%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexTwo.add(btnTwo, imgTwo, CopyLabel04cba0146f80a41, lblMessages, lblMessageUnit);
    var flexFour = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flexFour",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "onTouchEnd": AS_FlexContainer_317f89e7ba3c4437a59fc7850e3b167f,
        "skin": "CopyslFbox05fecc89df04c43",
        "top": "50%",
        "width": "50%"
    }, {}, {});
    flexFour.setDefaultUnit(kony.flex.DP);
    var btnFour = new kony.ui.Button({
        "focusSkin": "btnFcs",
        "height": "100%",
        "id": "btnFour",
        "isVisible": true,
        "left": "0%",
        "skin": "btnNorm",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgFour = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "70%",
        "id": "imgFour",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "graphcircle.png",
        "top": "0%",
        "width": "70%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0ea34a4ceb7b747 = new kony.ui.Label({
        "bottom": "1%",
        "height": "20%",
        "id": "CopyLabel0ea34a4ceb7b747",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel071a7081e776644",
        "text": "COMPARTILHADOS",
        "top": "77%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSharedData = new kony.ui.Label({
        "height": "60%",
        "id": "lblSharedData",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel019f8a81259854b",
        "text": "0",
        "top": "4%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSharedDataUnit = new kony.ui.Label({
        "height": "15%",
        "id": "lblSharedDataUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c180ada9781b45",
        "text": "GB",
        "top": "45%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexFour.add(btnFour, imgFour, CopyLabel0ea34a4ceb7b747, lblSharedData, lblSharedDataUnit);
    var flexThree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flexThree",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchEnd": AS_FlexContainer_32ec9fd4b5c042c5982e83b51486ebc2,
        "skin": "CopyslFbox0a0407cffbfb447",
        "top": "50%",
        "width": "50%"
    }, {}, {});
    flexThree.setDefaultUnit(kony.flex.DP);
    var btnThree = new kony.ui.Button({
        "focusSkin": "btnFcs",
        "height": "100%",
        "id": "btnThree",
        "isVisible": true,
        "left": "0%",
        "skin": "btnNorm",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgThree = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "70%",
        "id": "imgThree",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "circlered3.png",
        "top": "0%",
        "width": "70%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel03d30d1b234ec47 = new kony.ui.Label({
        "height": "20%",
        "id": "CopyLabel03d30d1b234ec47",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel071a7081e776644",
        "text": "DADOS",
        "top": "77%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDataUsed = new kony.ui.Label({
        "height": "60%",
        "id": "lblDataUsed",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel019f8a81259854b",
        "text": "0.11",
        "top": "4%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDataUsedUnit = new kony.ui.Label({
        "height": "15%",
        "id": "lblDataUsedUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c180ada9781b45",
        "text": "GB",
        "top": "45%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexThree.add(btnThree, imgThree, CopyLabel03d30d1b234ec47, lblDataUsed, lblDataUsedUnit);
    FlexContainerGraph.add(flexOne, flexTwo, flexFour, flexThree);
    var FlexContainer0cee90e6d8f5d47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0cee90e6d8f5d47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "55%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cee90e6d8f5d47.setDefaultUnit(kony.flex.DP);
    var lblType = new kony.ui.Label({
        "height": "81.82%",
        "id": "lblType",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel06fea537dffd94f",
        "text": "VOZ",
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
    var lblUnit = new kony.ui.Label({
        "height": "50%",
        "id": "lblUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel06ef95895d0e846",
        "text": "MINUTOS UTILIZADOS",
        "top": "50%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0cee90e6d8f5d47.add(lblType, lblUnit);
    var CopyFlexContainer098ac1ed7610547 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyFlexContainer098ac1ed7610547",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0271cf8d3bf3344",
        "top": "65%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer098ac1ed7610547.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer098ac1ed7610547.add();
    var FlexContainerData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "19.02%",
        "id": "FlexContainerData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "64.98%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerData.setDefaultUnit(kony.flex.DP);
    var FlexContainer046410dbe3c5648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer046410dbe3c5648",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    FlexContainer046410dbe3c5648.setDefaultUnit(kony.flex.DP);
    var Label08a6af5585b584c = new kony.ui.Label({
        "height": "24%",
        "id": "Label08a6af5585b584c",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0cc1b7236a3b84a",
        "text": "TOTAL USADO",
        "top": "6%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPlanUsedVal = new kony.ui.Label({
        "height": "50%",
        "id": "lblPlanUsedVal",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0108bef754b8e48",
        "text": "21",
        "top": "17%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPlanUnit = new kony.ui.Label({
        "height": "24%",
        "id": "lblPlanUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0e218fd1b8b7d45",
        "text": "MINUTOS",
        "top": "54%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer046410dbe3c5648.add(Label08a6af5585b584c, lblPlanUsedVal, lblPlanUnit);
    var CopyFlexContainer0aea59873708c4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0aea59873708c4c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    CopyFlexContainer0aea59873708c4c.setDefaultUnit(kony.flex.DP);
    var CopyLabel050c89e7976f141 = new kony.ui.Label({
        "height": "24%",
        "id": "CopyLabel050c89e7976f141",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0cc1b7236a3b84a",
        "text": "TOTAL PLANO",
        "top": "6%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTotalPlan = new kony.ui.Label({
        "height": "50%",
        "id": "lblTotalPlan",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0108bef754b8e48",
        "text": "300",
        "top": "17%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTotalPlanUnit = new kony.ui.Label({
        "height": "24%",
        "id": "lblTotalPlanUnit",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0e218fd1b8b7d45",
        "text": "MINUTOS",
        "top": "54%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0aea59873708c4c.add(CopyLabel050c89e7976f141, lblTotalPlan, lblTotalPlanUnit);
    FlexContainerData.add(FlexContainer046410dbe3c5648, CopyFlexContainer0aea59873708c4c);
    var CopyFlexContainer0f07452027f3b44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyFlexContainer0f07452027f3b44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0271cf8d3bf3344",
        "top": "82%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f07452027f3b44.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0f07452027f3b44.add();
    var lblPlanName = new kony.ui.Label({
        "height": "7.05%",
        "id": "lblPlanName",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Label_c045c84434294232ab37b0d1dfa68a6c,
        "onTouchMove": AS_Label_aac50aa1b17c4cfd85880954e198c72f,
        "onTouchStart": AS_Label_5a2accfd58114d1fa0044ce88d12fca7,
        "skin": "CopyslLabel067becd26573c40",
        "text": "Plano atual",
        "top": "83%",
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
    var Button08aa38c51bf0a4f = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue00f3543c22eaf42",
        "height": "7%",
        "id": "Button08aa38c51bf0a4f",
        "isVisible": true,
        "onClick": AS_Button_8c257080aeed4fa2a856af153fdbfd72,
        "skin": "CopyslButtonGlossBlue078573af6b41043",
        "text": "UPGRADE DO PLANO",
        "top": "90%",
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
    var FlexContainerSharedData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "19.02%",
        "id": "FlexContainerSharedData",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "64.98%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainerSharedData.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0e2909975e4ef4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0e2909975e4ef4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    CopyFlexContainer0e2909975e4ef4a.setDefaultUnit(kony.flex.DP);
    var CopyLabel0484ec6f34e5447 = new kony.ui.Label({
        "height": "24%",
        "id": "CopyLabel0484ec6f34e5447",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0cc1b7236a3b84a",
        "text": "TOTAL USED",
        "top": "6%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblPlanUsedVal0e0b2700e473042 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblPlanUsedVal0e0b2700e473042",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0108bef754b8e48",
        "text": "0",
        "top": "17%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblPlanUnit0006f6b5117b64d = new kony.ui.Label({
        "height": "24%",
        "id": "CopylblPlanUnit0006f6b5117b64d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0e218fd1b8b7d45",
        "text": "GB",
        "top": "54%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer0e2909975e4ef4a.add(CopyLabel0484ec6f34e5447, CopylblPlanUsedVal0e0b2700e473042, CopylblPlanUnit0006f6b5117b64d);
    var CopyFlexContainer02c09e9750e5947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer02c09e9750e5947",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "slFbox",
        "top": "0%",
        "width": "50%"
    }, {}, {});
    CopyFlexContainer02c09e9750e5947.setDefaultUnit(kony.flex.DP);
    var CopyLabel07db16cb896454f = new kony.ui.Label({
        "height": "24%",
        "id": "CopyLabel07db16cb896454f",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0cc1b7236a3b84a",
        "text": "TOTAL PLAN",
        "top": "6%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblTotalPlan052d77319d3ff4c = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblTotalPlan052d77319d3ff4c",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0108bef754b8e48",
        "text": "0",
        "top": "17%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblTotalPlanUnit0ca7cd9abcf0448 = new kony.ui.Label({
        "height": "24%",
        "id": "CopylblTotalPlanUnit0ca7cd9abcf0448",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0e218fd1b8b7d45",
        "text": "GB",
        "top": "54%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexContainer02c09e9750e5947.add(CopyLabel07db16cb896454f, CopylblTotalPlan052d77319d3ff4c, CopylblTotalPlanUnit0ca7cd9abcf0448);
    FlexContainerSharedData.add(CopyFlexContainer0e2909975e4ef4a, CopyFlexContainer02c09e9750e5947);
    var flexReduzido = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexReduzido",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_08480ae3d29649ebb073c4b6dd056f6d,
        "skin": "CopyslFbox0d7c8182034c941",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexReduzido.setDefaultUnit(kony.flex.DP);
    flexReduzido.add();
    flexMain.add(FlexContainerHeader, FlexContainerGraph, FlexContainer0cee90e6d8f5d47, CopyFlexContainer098ac1ed7610547, FlexContainerData, CopyFlexContainer0f07452027f3b44, lblPlanName, Button08aa38c51bf0a4f, FlexContainerSharedData, flexReduzido);
    frmDashboard.add(flxSideMenu, imgDash, flexMain);
};

function frmDashboardGlobals() {
    frmDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboard,
        "enabledForIdleTimeout": false,
        "id": "frmDashboard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_6169ae349da54745b9699f2d0208eb7c,
        "preShow": AS_Form_17d3fd7f9d924fdbafd3ca1b0ffcf433,
        "skin": "CopyslForm074722a9e227f40",
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
    frmDashboard.info = {
        "notesId": "bff7a68618b84f2fb2e0c9c093be985d",
        "kuid": "bff7a68618b84f2fb2e0c9c093be985d"
    };
};