/*
功能: android下绕过 通过FLAG_SECURE实现截屏的功能 
参考: https://bhamza.me/2019/11/03/Android-Frida-hooking-disabling-FLAG-SECURE.html
*/

Java.perform(function() {
            // https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE
            var FLAG_SECURE = 0x2000;

            var Runnable = Java.use("java.lang.Runnable");
            var DisableSecureRunnable = Java.registerClass({
                name: "me.xxx.DisableSecureRunnable",
                implements: [Runnable],
                fields: {
                    activity: "android.app.Activity",
                },
                methods: {
                    $init: [{
                        returnType: "void",
                        argumentTypes: ["android.app.Activity"],
                        implementation: function (activity) {
                            this.activity.value = activity;
                        }
                    }],
                    run: function() {
                        var flags = this.activity.value.getWindow().getAttributes().flags.value; // get current value
                        flags &= ~FLAG_SECURE; // toggle it
                        this.activity.value.getWindow().setFlags(flags, FLAG_SECURE); // disable it!
                        send("Done disabling SECURE flag...");
                    }
                }
            });
            //修改为自己的Activity
            Java.choose("com.XXXX.packageName.FirstActivity", {
                "onMatch": function (instance) {
                    var runnable = DisableSecureRunnable.$new(instance);
                    instance.runOnUiThread(runnable);
                },
                "onComplete": function () {}
            });
});