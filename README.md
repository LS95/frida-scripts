# frida-scripts
收集好用的frida脚本

## 1. hook_flag_secure.py 

功能:
    某Activity通过设置this.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);  //禁止截屏  
    hook 掉FLAGS_SECURE 修改其值 达到可以截屏的目的
    

## 2. android_pass_root.py 

功能:
    绕过一些root检查的功能
 
参考资料：  
    [Android antiroot checks bypass](https://codeshare.frida.re/@dzonerzy/fridantiroot/)