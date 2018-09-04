---
layout: post
title:  "Deploying WordPress to OpenShift on Windows 10"
date:   2018-09-02 00:01:57 +0800
categories: wordpress openshift
---
![openshift-site](/assets/openshift-site.png)
## Install Container Development Kit

Before you start, you need to register a OpenShift account. Then Download [Red Hat Container Development Kit](https://developers.redhat.com/products/cdk/overview/).Please follow the install instructions:
https://developers.redhat.com/products/cdk/hello-world/#fndtn-windows

Now I had downloaded cdk-3.5.0-1-minishift-windows-amd64.exe. Spin up the console and type the command:
```
cdk-3.5.0-1-minishift-windows-amd64.exe setup-cdk
```
Setting VirtualBox as the default hypervisor with the following command:
```
cdk-3.5.0-1-minishift-windows-amd64 config set vm-driver virtualbox
```
Check the setting with:
```
cdk-3.5.0-1-minishift-windows-amd64 config get vm-driver
```
### Permanently set Red Hat Developer username and password
```
setx MINISHIFT_USERNAME [username]
setx MINISHIFT_PASSWORD [password]
```

This command will start a Red Hat Linux VM:
```
cdk-3.5.0-1-minishift-windows-amd64 start
```
## Troubleshooting
Start a Red Hat Linux VM error
```
cdk-3.5.0-1-minishift-windows-amd64 start
-- Starting profile 'minishift'
-- Check if deprecated options are used ... OK
-- Checking if https://mirror.openshift.com is reachable ... OK
-- Checking if requested OpenShift version 'v3.9.31' is valid ... OK
-- Checking if requested OpenShift version 'v3.9.31' is supported ... OK
-- Checking if requested hypervisor 'virtualbox' is supported on this platform ... OK
-- Checking if VirtualBox is installed ... OK
-- Checking the ISO URL ... OK
-- Checking if provided oc flags are supported ... OK
-- Starting local OpenShift cluster using 'virtualbox' hypervisor ...
-- Starting Minishift VM .... FAIL E0831 11:22:03.001322    9692 start.go:419] Error starting the VM: Error getting the state for host: machine does not exist. Retrying.
Error starting the VM: Error getting the state for host: machine does not exist
```
Start a Red Hat Linux VM error with log
```
cdk-3.5.0-1-minishift-windows-amd64 start  --vm-driver virtualbox --show-libmachine-logs -v5
```






----
c:\Users\user\Downloads>cdk-3.5.0-1-minishift-windows-amd64 start
-- Starting profile 'minishift'
-- Check if deprecated options are used ... OK
-- Checking if https://mirror.openshift.com is reachable ... OK
-- Checking if requested OpenShift version 'v3.9.31' is valid ... OK
-- Checking if requested OpenShift version 'v3.9.31' is supported ... OK
-- Checking if requested hypervisor 'virtualbox' is supported on this platform ... OK
-- Checking if VirtualBox is installed ... OK
-- Checking the ISO URL ... OK
-- Checking if provided oc flags are supported ... OK
-- Starting local OpenShift cluster using 'virtualbox' hypervisor ...
-- Starting Minishift VM ......... FAIL E0831 14:06:44.070663   94704 start.go:419] Error starting the VM: Error starting stopped host: Error setting up host only network on machine start: C:\Program Files\Oracle\VirtualBox\VBoxManage.exe modifyvm minishift --nic2 hostonly --nictype2 82540EM --nicpromisc2 deny --hostonlyadapter2 VirtualBox Host-Only Ethernet Adapter #3 --cableconnected2 on failed:
VBoxManage.exe: error: Code E_FAIL (0x80004005) - Unspecified error (extended info not available)
VBoxManage.exe: error: Context: "LockMachine(a->session, LockType_Write)" at line 523 of file VBoxManageModifyVM.cpp
. Retrying.
Error starting the VM: Error starting stopped host: Error setting up host only network on machine start: C:\Program Files\Oracle\VirtualBox\VBoxManage.exe modifyvm minishift --nic2 hostonly --nictype2 82540EM --nicpromisc2 deny --hostonlyadapter2 VirtualBox Host-Only Ethernet Adapter #3 --cableconnected2 on failed:
VBoxManage.exe: error: Code E_FAIL (0x80004005) - Unspecified error (extended info not available)
VBoxManage.exe: error: Context: "LockMachine(a->session, LockType_Write)" at line 523 of file VBoxManageModifyVM.cpp

## Reference
* [How to you deploy WordPress on OpenShift](https://www.quora.com/How-do-you-deploy-WordPress-on-OpenShift-3)
* [cdk hello world](https://developers.redhat.com/products/cdk/hello-world/#fndtn-windows)
