var voicePlan = 0;
var smsPlan = 0;
var dataPlan = 0;
var sharedPlan = 0;

function onClickVoice() {
    frmDashboard.FlexContainerData.setVisibility(true)
    frmDashboard.FlexContainerSharedData.setVisibility(false)
    frmDashboard.lblPlanUsedVal.text = frmDashboard.lblVoiceCall.text;
    frmDashboard.lblPlanUnit.text = "MINUTOS";
    frmDashboard.lblTotalPlan.text = 300;
    frmDashboard.lblTotalPlanUnit.text = "MINUTOS";
    frmDashboard.btnOne.skin = "btnFcs";
    frmDashboard.btnTwo.skin = "btnNorm";
    frmDashboard.btnThree.skin = "btnNorm";
    frmDashboard.btnFour.skin = "btnNorm";
    frmDashboard.lblType.text = "VOZ";
    frmDashboard.lblUnit.text = "MINUTOS UTILIZADOS";
}

function onClickMessages() {
    frmDashboard.FlexContainerData.setVisibility(true)
    frmDashboard.FlexContainerSharedData.setVisibility(false)
    frmDashboard.lblPlanUsedVal.text = frmDashboard.lblMessages.text;
    frmDashboard.lblPlanUnit.text = "MENSAGENS";
    frmDashboard.lblTotalPlan.text = 200;
    frmDashboard.lblTotalPlanUnit.text = "MENSAGENS";
    frmDashboard.btnOne.skin = "btnNorm";
    frmDashboard.btnTwo.skin = "btnFcs";
    frmDashboard.btnThree.skin = "btnNorm";
    frmDashboard.btnFour.skin = "btnNorm";
    frmDashboard.lblType.text = "MENSAGENS";
    frmDashboard.lblUnit.text = "UTILIZADOS";
}

function onClickDatos() {
    frmDashboard.FlexContainerData.setVisibility(true)
    frmDashboard.FlexContainerSharedData.setVisibility(false)
    frmDashboard.lblPlanUsedVal.text = frmDashboard.lblDataUsed.text;
    frmDashboard.lblPlanUnit.text = "GB";
    frmDashboard.lblTotalPlan.text = 3;
    frmDashboard.lblTotalPlanUnit.text = "GB";
    frmDashboard.btnOne.skin = "btnNorm";
    frmDashboard.btnTwo.skin = "btnNorm";
    frmDashboard.btnThree.skin = "btnFcs";
    frmDashboard.btnFour.skin = "btnNorm";
    frmDashboard.lblType.text = "DADOS";
    frmDashboard.lblUnit.text = "UTILIZADOS";
}

function onClickShared() {
    var deviceName = kony.os.deviceInfo().name
    frmDashboard.FlexContainerData.setVisibility(false)
    frmDashboard.FlexContainerSharedData.setVisibility(true)
    frmDashboard.btnOne.skin = "btnNorm";
    frmDashboard.btnTwo.skin = "btnNorm";
    frmDashboard.btnThree.skin = "btnNorm";
    frmDashboard.btnFour.skin = "btnFcs";
    frmDashboard.lblType.text = "DADOS";
    frmDashboard.lblUnit.text = "UTILIZADOS";
}