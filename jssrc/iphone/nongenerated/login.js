function timerAfterSplash() {
    kony.timer.schedule("timer2", navigateAfterSplash, 3, false);
}

function navigateAfterSplash() {
    kony.timer.cancel("timer2")
    frmLogin.show()
}

function callBackSelectPlan() {
    frmDashboard.show();
}