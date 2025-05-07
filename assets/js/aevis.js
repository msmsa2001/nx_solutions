const APP_ID = "novelnex-i32o8k";
window.AevisSettings = {
  app_id: APP_ID,
  user_id: "anonymous",
  user_hash: "9fa1a7d7061945500d1c2bc74219d4da7bce32b71d9af0674599a81b2b14a3be",
};

!function(){var w=window,t=w.Aevis&&w.Aevis.init;if("function"==typeof t)t();else{var n=document,f=function(){var e=n.createElement("script");e.type="text/javascript",e.defer=!0,e.src="https://codenet.aevis.io/copilot/?app_id="+APP_ID,e.onload=function(){"undefined"!=typeof Aevis&&Aevis.init()};var t=n.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)};"complete"===n.readyState?f():w.attachEvent?w.attachEvent("onload",f):w.addEventListener("load",f,!1)}}();
