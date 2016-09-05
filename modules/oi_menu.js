var menuDash=false;
var menuPlan=false;

function menuDashBoard(){
  
  if (!menuDash){
    menuDash=true;
    frmDashboard.flexReduzido.isVisible=true;
	minimizeMenu(frmDashboard["flexMain"]);
  }else{
    menuDash=false;
   	frmDashboard.flexReduzido.isVisible=false;
	maximizeMenu(frmDashboard["flexMain"]);
  }
  
}

function menuSelectPlan(){
  
  if (!menuPlan){
    menuPlan=true;
    frmSelectPlan.flexReduzido.isVisible=true;
	minimizeMenu(frmSelectPlan["flexMain"]);
  }else{
    menuPlan=false;
   	frmSelectPlan.flexReduzido.isVisible=false;
	maximizeMenu(frmSelectPlan["flexMain"]);
  }
  
}


function minimizeMenu(flexMain){
  
    function TRANSFORM_ACTION_NEW____c940863f297a44eb9e1def1137b1cf96_Callback() {}
    function MOVE_ACTION____2692d68c33dc43778097e3939290284c_Callback() {}
//    frmDashboard["flexMain"].animate(
    flexMain.animate(
  
    kony.ui.createAnimation({
        "100": {
            "centerX": "85%",
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
        "animationEnd": MOVE_ACTION____2692d68c33dc43778097e3939290284c_Callback
    });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(0.3, 0.3);
//    frmDashboard["flexMain"].animate(
  	flexMain.animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____c940863f297a44eb9e1def1137b1cf96_Callback
    });

  
}



function maximizeMenu(flexMain) {
    function TRANSFORM_ACTION_NEW____d2ccf51e854844f2b4a8be7f889ac8d5_Callback() {}
    function MOVE_ACTION____83076b4cdca4465cb104dff8111aaaf5_Callback() {}
//    frmDashboard["flexMain"].animate(
  	flexMain.animate(
    kony.ui.createAnimation({
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
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____83076b4cdca4465cb104dff8111aaaf5_Callback
    });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(1, 1);
    //frmDashboard["flexMain"].animate(
  	flexMain.animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____d2ccf51e854844f2b4a8be7f889ac8d5_Callback
    });
}
