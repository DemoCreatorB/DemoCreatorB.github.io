---
layout: post
title: Chocolatey:The most Ideal Method to Get Apps for Windows
categories: Windows Chocolatey
tags: Windows Chocolatey
---

# What is Chocolatey?
Chocolatey is a Windows package manager that automates the installation, update, and uninstallation of software applications. It uses the NuGet packaging infrastructure and PowerShell to simplify the process, providing a centralized repository of software packages that users can easily search and install with a single command. Chocolatey also offers enterprise-level features, such as custom software package creation, multi-machine deployment management, and integration with existing IT infrastructure, making it a valuable tool for simplifying software management on Windows machines.

# How to Install Chocolatey?
1. Open PowerShell as an Administrator.  
(You can do this by typing "PowerShell" into the Start menu, right-clicking on "Windows PowerShell," and selecting "Run as Administrator.")

2. Once PowerShell is open, run the following command:  
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

3. Wait for the installation to complete. This may take a few minutes, depending on your system.
4. Once the installation is complete, you can verify that Chocolatey is installed by running the following command:
```shell
choco -v
```

# How to install programs using Chocolatey 
1. Open PowerShell as an Administrator.

2. Use the choco search command to find the program you want to install. For example, if you want to install Google Chrome, you can run the following command:  
```shell
choco search googlechrome
```
3. This will display a list of packages related to Google Chrome, including the official package for Google Chrome.

4. Use the choco install command to install the program. For example, to install Google Chrome, you can run the following command:
```shell
choco install googlechrome
```
5. This will download and install the latest version of Google Chrome on your system.

6. Wait for the installation to complete. This may take a few minutes, depending on the size of the program.

[Visit here to search packages](https://community.chocolatey.org/packages)

# Check the list of installed packages
1. Open PowerShell as an Administrator.

2. Run following commands to check the list.
```shell
choco list -lo
```


# My Settings(2023.03.15. updated)
## Browser
- [Google Chrome](https://community.chocolatey.org/packages/GoogleChrome)
## Chats|Meetings
- [KakaoTalk](https://community.chocolatey.org/packages/kakaotalk)
- [Discord](https://community.chocolatey.org/packages/discord)
- [Slack](https://community.chocolatey.org/packages/slack)
- [zoom](https://community.chocolatey.org/packages/zoom)

## Software Development
- [git](https://community.chocolatey.org/packages/git)
- [vim](https://community.chocolatey.org/packages/vim)
- [vscode](https://community.chocolatey.org/packages/vscode)
- [python3](https://community.chocolatey.org/packages/python3/3.11.0)
- [Unity Hub](https://community.chocolatey.org/packages/unity-hub)
## Cad/Ecad
- [Kicad](https://community.chocolatey.org/packages/kicad)
## Utils
- [7-Zip](https://community.chocolatey.org/packages/7zip.install)
- [everything](https://community.chocolatey.org/packages/Everything)
- [Treesize](https://community.chocolatey.org/packages/treesizefree)
- [Putty](https://community.chocolatey.org/packages/putty.install)
- [Power Toys](https://community.chocolatey.org/packages/powertoys)
# Total command
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install googlechrome
choco install kakaotalk
choco install discord
choco install slack
choco install zoom
choco install git
choco install vscode
choco install vim
choco install python3 
choco install unity-hub
choco install kicad
choco install 7zip.install
choco install everything
choco install treesizefree
choco install putty.install
choco install powertoys
```
