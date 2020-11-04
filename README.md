# frida-scripts
收集好用的frida脚本

## 1. hook_flag_secure.py 

功能:
    某Activity通过设置this.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);  //禁止截屏  
    hook 掉FLAGS_SECURE 修改其值 达到可以截屏的目的
    
参考资料：  
    [frida 通过自己实现Runnable接口 完成hook FLAG_SECURE  使得可以让运行中的app 可以截屏](https://www.securify.nl/blog/android-frida-hooking-disabling-flagsecure)