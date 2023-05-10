async function sendShare5() {

const result = await liff.openWindow({
        url: "https://www.youtube.com/watch?v=6ofPK8fQ3W8",
        external: true
    });
}
async function sendShare6() {

const result = await liff.openWindow({
        url: "https://youtu.be/WNIslxreB2o",
        external: true
    });
}

async function sendShare() {
  const result = await liff.shareTargetPicker([
   {
            type: "text",
            text: "這是111咖啡計畫內容，以及相關影片，給你參考看看喔！"
          },
 {
   type: "flex",
      altText: "雙鶴111咖啡計畫",
      contents:
{"type":"bubble","size":"giga","header":{"type":"box","layout":"vertical","contents":[{"type":"text","align":"center","contents":[{"type":"span","text":"111咖啡計畫2023","size":"xl","color":"#e9e0d6","weight":"bold"}]}],"paddingAll":"0px","backgroundColor":"#e60a47ac"},"hero":{"type":"video","url":"https://drive.google.com/uc?id=1sj70fftGAqY8iIcftd9BOglu0L5QqRp2","previewUrl":"https://i.imgur.com/LisRoSG.jpg","altContent":{"type":"image","size":"full","aspectRatio":"16:9","aspectMode":"cover","url":"https://i.imgur.com/LisRoSG.jpg"},"aspectRatio":"16:9"},"body":{"type":"box","layout":"vertical","contents":[{"type":"text","text":"咖啡計畫真的好喝又簡單\n\n大家一起喝咖啡、分享咖啡、請人喝幸福加分","weight":"bold","size":"md","wrap":true,"color":"#111111","margin":"md"},{"type":"box","layout":"vertical","margin":"sm","spacing":"sm","contents":[{"type":"text","wrap":true,"color":"#111111","size":"sm","margin":"sm","contents":[{"type":"span","text":"\n『111咖啡計畫內容』\n\n","color":"#110a47ac","size":"md","weight":"bold"}]},{"type":"text","wrap":true,"color":"#111111","size":"sm","margin":"sm","contents":[{"type":"span","text":"1.每個月喝一盒咖啡460元\n\n2.每個月分享一個朋友一起喝一起經營\n\n3.持續運作一年後獎金達94,765/月\n","color":"#111111","size":"md"}]}],"paddingAll":"0px"}],"paddingTop":"3px","paddingStart":"3px","paddingEnd":"3px"},"footer":{"type":"box","layout":"horizontal","spacing":"2px","contents":[{"type":"box","layout":"vertical","contents":[{"type":"box","layout":"horizontal","spacing":"2px","contents":[{"type":"button","style":"secondary","height":"sm","action":{"type":"uri","label":"咖啡好處","uri":"https://youtu.be/L3dH6yRM7EU"},"flex":1,"color":"#ffffff"},{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"雙鶴優勢","uri":"https://youtu.be/w1LWxlA0QMk"},"flex":1,"color":"#f1e265ac"},{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"很好分享","uri":"https://youtu.be/Y1S-E6tnwMI"},"flex":1,"color":"#14a9c9"}],"flex":0,"paddingAll":"3px","paddingTop":"1px","paddingBottom":"3px"},{"type":"box","layout":"horizontal","spacing":"2px","contents":[{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"十項第一","uri":"https://youtu.be/urV3NXbLmas"},"flex":1,"color":"#9f124f"},{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"雙鶴生態鏈","uri":"https://youtu.be/kmUaoTK81R4"},"flex":1,"color":"#31e265ac"},{"type":"button","style":"secondary","height":"sm","action":{"type":"uri","label":"三個問題","uri":"https://youtu.be/fXkiNayxePo"},"flex":1,"color":"#fff9c9"}],"flex":0,"paddingAll":"3px","paddingTop":"1px","paddingBottom":"3px"},{"type":"box","layout":"horizontal","spacing":"2px","contents":[{"type":"button","style":"secondary","height":"sm","action":{"type":"uri","label":"雙鶴投資","uri":"https://youtu.be/Ovbltz94Xto"},"flex":1,"color":"#e3ec1f"},{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"海外旅遊","uri":"https://youtu.be/E5lCkNl9gtQ"},"flex":1,"color":"#ac1fe5ac"},{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"分享給朋友","uri":"https://liff.line.me/1657618390-jrgeQQmg"},"flex":1,"color":"#84a9c9"}],"flex":0,"paddingAll":"3px","paddingTop":"1px","paddingBottom":"3px"},{"type":"box","layout":"horizontal","spacing":"2px","contents":[{"type":"text","text":"---點擊收看影片---","gravity":"center","align":"center","size":"xs"}],"flex":0,"paddingAll":"3px","paddingTop":"1px","paddingBottom":"3px","backgroundColor":"#ffffff","height":"20px"}],"margin":"none","paddingTop":"3px"}],"flex":0,"backgroundColor":"#e60a478c","paddingAll":"3px","paddingTop":"1px","paddingBottom":"3px"},"styles":{"body":{"backgroundColor":"#e60a473c"}}}

      //到這邊json
    }
  ]);
  if (result) {
    alert(`[${result.status}] 訊息送出`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
}

//一則結束-0414
async function sendShare2() {
  const result = await liff.shareTargetPicker([
    {
      type: "flex",
      altText: "早安安～今天一定是個美好的一天",
      contents:
{"type":"bubble","size":"giga","body":{"type":"box","layout":"vertical","contents":[{"type":"image","url":"https://images.pexels.com/photos/533881/pexels-photo-533881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","size":"full","aspectMode":"cover","gravity":"top","aspectRatio":"1.2:1"},{"type":"box","layout":"horizontal","contents":[{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons-png.flaticon.com/512/1/1225.png","offsetStart":"-10px"},{"type":"text","text":"耗時4年打造的CEO咖啡","color":"#ffffff","flex":0,"offsetStart":"-3px","size":"xs","offsetTop":"-4px"},{"type":"filler"}],"spacing":"sm"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"none","height":"25px","action":{"type":"uri","label":"action","uri":"https://youtu.be/WNIslxreB2o"},"width":"50%","maxWidth":"50%"},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://i.imgur.com/EN16r5b.png","offsetStart":"-8px"},{"type":"text","text":"分享給好友","color":"#ffffff","flex":0,"offsetTop":"-4px","offsetStart":"-10px","size":"sm"},{"type":"filler"}],"spacing":"md"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"none","height":"25px","action":{"type":"uri","label":"action","uri":"https://liff.line.me/1657003061-84p3V3xM"},"width":"49%","offsetStart":"3px"}],"position":"relative","backgroundColor":"#9C8E7Edc","paddingTop":"4px","paddingBottom":"4px"},{"type":"box","layout":"vertical","contents":[{"type":"text","text":"5 / 1 9  週 四 早 安","color":"#ffffff","align":"center","size":"sm","offsetTop":"3px"}],"position":"absolute","cornerRadius":"5px","backgroundColor":"#5B8E555c","height":"25px","width":"130px","offsetTop":"5px","offsetStart":"-3px"},{"type":"box","layout":"vertical","contents":[{"type":"text","text":"Yosemite | 美國","color":"#ffffff","align":"start","size":"xxs","wrap":true}],"position":"absolute","cornerRadius":"5px","backgroundColor":"#9B8E55cc","paddingStart":"5px","paddingTop":"1px","paddingBottom":"1px","paddingEnd":"5px","offsetTop":"35px","offsetStart":"-3px"},{"type":"box","layout":"vertical","contents":[{"type":"text","text":"把你的臉迎向陽光，那就不會有陰影","color":"#ffffff","align":"start","size":"xs","wrap":true}],"position":"absolute","cornerRadius":"5px","backgroundColor":"#3f4E55dc","offsetStart":"-3px","offsetBottom":"35px","paddingStart":"12px","paddingTop":"2px","paddingBottom":"2px","paddingEnd":"11px"}],"paddingAll":"0px"}}
      //到這邊json
    }
  ]);
  if (result) {
    alert(`[${result.status}] 訊息送出`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
}


//一則結束-0414
async function sendShare3() {
  const result = await liff.shareTargetPicker([
    {
      type: "flex",
      altText: "想請你喝杯咖啡！",
      contents:
{"type":"bubble","size":"giga","body":{"type":"box","layout":"vertical","contents":[{"type":"image","url":"https://i.imgur.com/ceK4gbv.jpg","size":"full","aspectMode":"cover","gravity":"top","aspectRatio":"1:1"},{"type":"box","layout":"vertical","contents":[{"type":"box","layout":"vertical","contents":[{"type":"text","text":"↘ ↘ 一杯超越防彈咖啡的極品咖啡  ↙ ↙","color":"#ebebeb","size":"sm","flex":0,"align":"center"}],"spacing":"none"},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons-png.flaticon.com/512/1/1225.png","offsetStart":"-10px"},{"type":"text","text":"認識CEO靈芝咖啡（總裁咖啡）","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-3px"},{"type":"filler"}],"spacing":"sm"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"40px","action":{"type":"uri","label":"action","uri":"https://youtu.be/WNIslxreB2o"}},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://i.imgur.com/EN16r5b.png","offsetStart":"-8px"},{"type":"text","text":"分享","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-10px"},{"type":"filler"}],"spacing":"md"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"40px","action":{"type":"uri","label":"action","uri":"https://liff.line.me/1657003061-84p3V3xM"}}],"position":"relative","backgroundColor":"#9C8E7Edc","paddingAll":"5px"},{"type":"box","layout":"vertical","contents":[{"type":"text","text":"咖啡之旅","color":"#ffffff","align":"center","size":"xs","offsetTop":"3px"}],"position":"absolute","cornerRadius":"33px","backgroundColor":"#EB8E558c","height":"25px","width":"80px","offsetEnd":"11px","offsetTop":"11px"}],"paddingAll":"0px"}}
      //到這邊json
    }
  ]);
  if (result) {
    alert(`[${result.status}] 訊息送出`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
}

//一則結束
async function sendShare4() {
  const result = await liff.shareTargetPicker([
    {
      type: "flex",
      altText: "分享一個重要新聞",
      contents:
{"type":"carousel","contents":[{"type":"bubble","size":"kilo","body":{"type":"box","layout":"vertical","contents":[{"type":"image","url":"https://i.imgur.com/4vjSzOR.jpg","size":"full","aspectMode":"cover","aspectRatio":"2:3","gravity":"top"},{"type":"box","layout":"vertical","contents":[{"type":"box","layout":"vertical","contents":[{"type":"text","text":"靈芝與covid-19相關研究\n共2500篇","color":"#ebebeb","size":"md","flex":0,"align":"center","offsetTop":"0px","offsetBottom":"10px","wrap":true}],"spacing":"none"},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons-png.flaticon.com/512/1/1225.png","offsetStart":"-10px"},{"type":"text","text":"點擊收看新聞","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-10px"},{"type":"filler"}],"spacing":"sm"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"30px","action":{"type":"uri","label":"action","uri":"http://tny.im/s0t?openExternalBrowser=1"}}],"position":"absolute","offsetBottom":"0px","offsetStart":"0px","offsetEnd":"0px","backgroundColor":"#9C8E7Ecc","paddingAll":"10px","paddingTop":"10px"}],"paddingAll":"0px"}},{"type":"bubble","size":"kilo","body":{"type":"box","layout":"vertical","contents":[{"type":"image","url":"https://i.imgur.com/ffk49JP.png","size":"full","aspectMode":"cover","aspectRatio":"2:3.5","gravity":"top"},{"type":"box","layout":"vertical","contents":[{"type":"box","layout":"vertical","contents":[{"type":"text","text":"成功大學研究選用『雙鶴特級靈芝』","color":"#ebebeb","size":"sm","flex":0,"align":"center","offsetTop":"0px","offsetBottom":"10px","wrap":true}],"spacing":"none"},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons-png.flaticon.com/512/1/1225.png","offsetStart":"-10px"},{"type":"text","text":"點擊收看新聞","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-10px"},{"type":"filler"}],"spacing":"sm"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"30px","action":{"type":"uri","label":"action","uri":"http://tny.im/rZ-?openExternalBrowser=1"}}],"position":"absolute","offsetBottom":"0px","offsetStart":"0px","offsetEnd":"0px","backgroundColor":"#9C8E7Eec","paddingAll":"10px","paddingTop":"10px"}],"paddingAll":"0px"}},{"type":"bubble","size":"kilo","body":{"type":"box","layout":"vertical","contents":[{"type":"image","url":"https://i.imgur.com/EVap4pM.jpg","size":"full","aspectMode":"cover","aspectRatio":"2:3","gravity":"top"},{"type":"box","layout":"vertical","contents":[{"type":"box","layout":"vertical","contents":[{"type":"text","text":"111咖啡計畫，是一個絕佳的低成本賺錢機會","color":"#ebebeb","size":"xxs","flex":0,"align":"center"}],"spacing":"none"},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons-png.flaticon.com/512/1/1225.png","offsetStart":"-10px"},{"type":"text","text":"認識111咖啡計畫","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-10px"},{"type":"filler"}],"spacing":"sm"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"30px","action":{"type":"uri","label":"action","uri":"https://111.doublecrane.com.tw/"}},{"type":"box","layout":"vertical","contents":[{"type":"filler"},{"type":"box","layout":"baseline","contents":[{"type":"filler"},{"type":"icon","url":"https://cdn-icons.flaticon.com/png/512/2028/premium/2028323.png?token=exp=1649770457~hmac=128a9ed773067ba9571cdc638c7494da","offsetStart":"-6px"},{"type":"text","text":"分享","color":"#ffffff","flex":0,"offsetTop":"-2px","offsetStart":"-10px"},{"type":"filler"}],"spacing":"md"},{"type":"filler"}],"borderWidth":"1px","cornerRadius":"4px","spacing":"sm","borderColor":"#ffffff","margin":"sm","height":"30px","action":{"type":"uri","label":"action","uri":"https://liff.line.me/1657003061-84p3V3xM"}}],"position":"absolute","offsetBottom":"0px","offsetStart":"0px","offsetEnd":"0px","backgroundColor":"#9C8E7Ecc","paddingAll":"10px","paddingTop":"10px"},{"type":"box","layout":"vertical","contents":[{"type":"text","text":"有聽過111咖啡計畫嗎？","color":"#ffffff","align":"center","size":"xxs","offsetTop":"3px"}],"position":"absolute","cornerRadius":"33px","offsetTop":"11px","backgroundColor":"#EB8E55ac","offsetStart":"11px","height":"22px","width":"150px"}],"paddingAll":"0px"}}]}
      //到這邊json
    }
  ]);
  if (result) {
    alert(`[${result.status}] 新聞送出`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
}

//一則結束

async function sendShare1() {
  const result = await liff.shareTargetPicker([
    {
      type: "flex",
      altText: "111咖啡計畫正式邀請！",
      contents:
{"type":"bubble","hero":{"type":"image","url":"https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","size":"full","aspectMode":"cover"},"body":{"type":"box","layout":"vertical","contents":[{"type":"text","text":"111咖啡計畫＋限時贈送會員","weight":"bold","size":"lg"},{"type":"box","layout":"baseline","margin":"md","contents":[{"type":"icon","size":"sm","url":"https://cdn-icons-png.flaticon.com/128/818/818217.png"},{"type":"icon","size":"sm","url":"https://cdn-icons.flaticon.com/png/128/3219/premium/3219333.png?token=exp=1649733743~hmac=3d336b883dfa84390481ea59e55152a3","margin":"xs"},{"type":"icon","size":"sm","url":"https://cdn-icons-png.flaticon.com/128/2935/2935307.png","margin":"xs"},{"type":"icon","size":"sm","url":"https://cdn-icons-png.flaticon.com/128/590/590749.png","margin":"xs"},{"type":"icon","size":"sm","url":"https://cdn-icons.flaticon.com/png/128/1079/premium/1079108.png?token=exp=1649733743~hmac=9113fd54c2fa7c9fb45ca8668b2b660e","margin":"xs"},{"type":"text","text":"不需投入大筆資金","size":"sm","color":"#999999","margin":"md","flex":0}]},{"type":"box","layout":"vertical","margin":"lg","spacing":"sm","contents":[{"type":"box","layout":"baseline","spacing":"xs","contents":[{"type":"text","text":"費用","color":"#aaaaaa","size":"sm","flex":1},{"type":"text","text":"460元一盒咖啡/月，就能開啟這份事業的經營，完全沒有壓力，讓你喝咖啡、分享咖啡，每天累積健康與分享健康，每天分享咖啡累積財富！","wrap":true,"color":"#666666","size":"sm","flex":5,"margin":"xs","lineSpacing":"5px"}],"margin":"xs","borderWidth":"none","cornerRadius":"none"},{"type":"box","layout":"baseline","spacing":"sm","contents":[{"type":"text","text":"贈送","color":"#aaaaaa","size":"sm","flex":1},{"type":"text","text":"雲端經營工具，圓夢自動小助理、跟進系統、早安工具、彈性貼文、開發台詞系統","wrap":true,"color":"#666666","size":"sm","flex":5,"lineSpacing":"5px"}]}]}],"backgroundColor":"#FF61031a"},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","style":"primary","height":"sm","action":{"type":"uri","label":"收看111咖啡計畫網站","uri":"http://tny.im/rSZ"},"color":"#FF6103"},{"type":"button","style":"primary","action":{"type":"uri","label":"分享","uri":"https://liff.line.me/1657003061-84p3V3xM"},"color":"#FF6103ac","margin":"xs","height":"sm","offsetTop":"4px"},{"type":"box","layout":"vertical","contents":[],"margin":"sm"}],"flex":0,"backgroundColor":"#FF610311"},"styles":{"header":{"separatorColor":"#FF610311","backgroundColor":"#FF610311"},"footer":{"separatorColor":"#FF6103"}}}
      //到這邊json
    }
  ]);
  if (result) {
    alert(`[${result.status}] 訊息送出`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
}
function logOut() {
  liff.closeWindow();
}
async function main() {
  await liff.init({ liffId: "1657618390-jrgeQQmg" });
  //0
  document
    .getElementById("sendmessagebutton0")
    .addEventListener("click", function () {
      liff
        .sendMessages([

        {
            type: "text",
            text:
              "看起來感覺不錯，我要加入，麻煩幫我辦理加入手續，謝謝！"
          }
        ])
        .then(function () {
          window.alert("訊息已送出");
        })
        .catch(function (error) {
          window.alert("Error sending message: " + error);
        });
    });

//9
  if (liff.isLoggedIn()) {
    document.getElementById("btnShare").style.display = "block";
    if (!liff.isInClient()) {
      document.getElementById("btnLogOut").style.display = "block";
    }
  } else {
    document.getElementById("btnLogin").style.display = "block";
  }
}

main();
