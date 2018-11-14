---
layout: post
title:  "Create BeeGo web application"
date:   2018-11-08 00:01:57 +0800
categories: golang beego
---
## Environment
* Windows 10

## Steps
1. Create work folder
```
mkdir D:\Go_workspace
```
2. The env variable GOROOT is Go installed directory. The env variable GOPATH is your workspace directory.
3. Get BeeGo
```
cd D:\Go_workspace
D:\Go_workspace> go get github.com/astaxie/beego
```
4. Edit hello.go
```go
package main
import (
    "github.com/astaxie/beego"
)
type MainController struct {
    beego.Controller
}
func (this *MainController) Get() {
    this.Ctx.WriteString("hello world")
}
func main() {
    beego.Router("/", &MainController{})
    beego.Run()
}
```
5. Build it and run it.
```
D:\Go_workspace> go build hello.go
D:\Go_workspace> hello.exe
```
6. Go to **http://127.0.0.1:8080** in the browser.
7. Get bee tool. Update it use the command **go get -u github.com/beego/bee**
```
D:\Go_workspace> go get github.com/beego/bee
```
8. Use bee tool to create my first project
```
D:\Go_workspace> bin\bee new myproject
D:\Go_workspace>cd src\myproject
```
9. Run my project
```
D:\Go_workspace\src\myproject>..\..\bin\bee run
```
6. Go to **http://127.0.0.1:8080** in the browser.
![welcome to beego](\assets\welcome to beego.PNG)
7. Compress all project into a simgle file.
```
D:\Go_workspace\src\myproject>..\..\bin\bee pack
```

## Support SSLl
1. [Download XCA tool](https://www.hohnstaedt.de/xca/index.php/download)
2. Open xca-portable-2.1.2\xce.exe
3. Select menu item **File|New Database**. Specify where you want to save the database and enter a password.
4. Select tab **Certificates**. Clicking **New Certificate** button.
1. [Download openssl for win](http://gnuwin32.sourceforge.net/packages/openssl.htm)
2. Install openssl-0.9.8h-1-setup.exe
3. Edit file C:\Program Files (x86)\GnuWin32\share\openssl.cnf
```
uncomment line: # req_extensions = v3_req
add this line to section v3_req: subjectAltName=@alt_names
add below section before the section v3_req:
[ alt_names ]
DNS.1 = localhost
IP.1 = 127.0.0.1
```
4. Change directory
```
>cd C:\Program Files (x86)\GnuWin32\bin
>openssl genrsa -des3 -out googleapis.key 2048
```
5. Create csr
```
openssl req -new -sha256 -key googleapis.key -out googleapis.csr
----
Country Name:TW
State or Province Name:Taiwan
Locality Name:Taipei
```
6. Then it will show the following message
```
14032:error:0D0BA041:asn1 encoding routines:ASN1_STRING_set:malloc failure:./crypto/asn1/asn1_lib.c:381:
14032:error:0B08A041:x509 certificate routines:X509_ATTRIBUTE_set1_data:malloc failure:./crypto/x509/x509_att.c:317:
problems making Certificate Request
```
7. [Download and install Win64 OpenSSL v1.1.1](https://slproweb.com/products/Win32OpenSSL.html)
8. Open a console with administrator
9. Run  command
```
cd C:\Program Files\OpenSSL-Win64\bin
openssl genrsa -des3 -out googleapis.key 2048
```
10. Run command
```
openssl req -new -sha256 -key googleapis.key -out googleapis.csr
```
10. Run command
```
copy googleapis.key googleapis.key.old
```
10. Remove password from key file
```
openssl rsa -in googleapis.key.old -out googleapis.key
```
11. Export
```
openssl x509 -req -days 3650 -in googleapis.csr -signkey googleapis.key -out googleapis.cer -extensions v3_req -extfile "C:\Program Files\OpenSSL-Win64\bin\cnf\openssl.cnf"
```
11. Install googleapis.cer to system using default settings.
12. Copy googleapis.key and googleapis.cer to the directory **D:\Go_workspace\src\myproject**
12. Edit D:\Go_workspace\src\myproject\conf\app.conf
```go
appname = myproject
runmode = prod
[dev]
httpaddr = "127.0.0.1"
HTTPPort = 9100
[prod]
EnableHTTP = false
HTTPSPort = 9099
httpsaddr = "127.0.0.1"
EnableHTTPS = true
EnableHttpTLS = true
HTTPSCertFile = "googleapis.cer"
HTTPSKeyFile = "googleapis.key"  
[test]
HTTPSPort = 9099
```
13. Restart ```bee run```. If you receive the following messages, it means that you have to set EnableHTTP as false. **Only one of EnableHTTP and EnableHTTPS can be set to true**. [Reference this link](https://stackoverflow.com/questions/53219095/how-to-support-https-in-beego/53221085#53221085)
```
2018/11/09 10:07:56.251 [I] [asm_amd64.s:2361]  http server Running on http://127.0.0.1:8080
2018/11/09 10:07:56.253 [I] [asm_amd64.s:2361]  https server Running on https://127.0.0.1:9099
2018/11/09 10:07:56.293 [C] [asm_amd64.s:2361]  ListenAndServeTLS:  listen tcp 127.0.0.1:9099: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.
```

## Error
* When I execute the command **go get github.com/astaxie/beego**, I get following error message.
```
package github.com/astaxie/beego: cannot download, $GOPATH must not be set to $GOROOT. For more details see: 'go help gopath'
```
```
You have to set the correct variable GOROOT and GOPATH.
```

## Change GOPATH
If you want to move the project to another folder, you need to set the GOPATH variable.
1. I want to move myproject to Google Drive.
2. Make folder 
```
mkdir D:\Google Drive\Work\GoWorkspace
```
3. Go to **Advanced system settings**. Set the GOPATH variable as **D:\Google Drive\Work\GoWorkspace**. You can set  the GOPATH variable as multiple path. Like **path1;path2**.
4. Make the source folder
```
mkdir D:\Google Drive\Work\GoWorkspace\src
```
5. Move myproject to src folder
```
move C:\myproject D:\Google Drive\Work\GoWorkspace\src
```
6. Install package to the new GOPATH. It will create a pkg folder in D:\Google Drive\Work\GoWorkspace.
```
go get github.com/astaxie/beego
```
7. Let's run beego
```
D:\Google Drive\Work\GoWorkspace\src\myproject>bee run
```

## Reference
* [Introduction to bee tool](https://beego.me/docs/install/bee.md)
* [The architecture of Beego](https://beego.me/docs/intro/)
* [BeeGo quick start](https://beego.me/quickstart)
* [Get an SSL certificate for your domain](https://support.google.com/domains/answer/7630973?hl=en)
