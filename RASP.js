Java.perform(function () {
 var System = Java.use("java.lang.System");
 System.exit.implementation = function (code) {
 console.log("[*] Intercepted System.exit(" + code + ")");
 };
 console.log("[*] Frida script loaded. Intercepting System.exit calls.");
});
