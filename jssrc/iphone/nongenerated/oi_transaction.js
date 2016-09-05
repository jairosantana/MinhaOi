function transaction(eventobject) {
    function MOVE_ACTION____e82c177373404030aedde5c049e7ccf2_Callback() {
        frmDashboard.show();
        frmTransaction.destroy();
    }

    function MOVE_ACTION____c1492aa280ae47b5921c913d8d0e75e0_Callback() {
        frmTransaction["imgCalc"].animate(kony.ui.createAnimation({
            "100": {
                "centerY": "10%",
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
            "animationEnd": MOVE_ACTION____cabcec72dff5417db923cb137229b97a_Callback
        });
        frmTransaction["lblAjusteTarifa"].animate(kony.ui.createAnimation({
            "100": {
                "top": "20%",
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
            "animationEnd": MOVE_ACTION____e82c177373404030aedde5c049e7ccf2_Callback
        });
    }

    function MOVE_ACTION____cabcec72dff5417db923cb137229b97a_Callback() {}

    function MOVE_ACTION____9b45ff7fdd9a4bc796d83282d8ad98e8_Callback() {
        frmTransaction["imgCalc"].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "20%",
                "height": "10%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": SCALE_ACTION____439ac58324f54c23b4f0e3987daba60f_Callback
        });
        frmTransaction["lblAjusteTarifa"].animate(kony.ui.createAnimation({
            "100": {
                "centerX": "50%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": MOVE_ACTION____c1492aa280ae47b5921c913d8d0e75e0_Callback
        });
    }

    function SCALE_ACTION____439ac58324f54c23b4f0e3987daba60f_Callback() {}
    frmTransaction["imgCalc"].animate(kony.ui.createAnimation({
        "100": {
            "centerY": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": MOVE_ACTION____9b45ff7fdd9a4bc796d83282d8ad98e8_Callback
    });
}