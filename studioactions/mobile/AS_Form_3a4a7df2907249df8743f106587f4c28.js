function AS_Form_3a4a7df2907249df8743f106587f4c28() {
    function MOVE_ACTION____5e066c607dc247d38fc6d2456fc8a0fc_Callback() {
        frmLogin.show();
    }

    function MOVE_ACTION____1e93e62962ab4f5b9916e95645ea686b_Callback() {
        frmSplash["imgLogo"]["src"] = "oi_logo_3.png";
        frmSplash["imgLogo"].animate(kony.ui.createAnimation({
            "100": {
                "centerX": "60%",
                "centerY": "40%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____5e066c607dc247d38fc6d2456fc8a0fc_Callback
        });
    }

    function MOVE_ACTION____366e59345c654e9c91b388fc935e10e9_Callback() {
        frmSplash["imgLogo"]["src"] = "oi_logo_2.png";
        frmSplash["imgLogo"].animate(kony.ui.createAnimation({
            "100": {
                "centerY": "60%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____1e93e62962ab4f5b9916e95645ea686b_Callback
        });
    }
    frmSplash["imgLogo"].animate(kony.ui.createAnimation({
        "100": {
            "centerX": "40%",
            "centerY": "30%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____366e59345c654e9c91b388fc935e10e9_Callback
    });
}