# INNOVAULT GETTING STARTED

INNOVAULT INFORMATION
-----------------
InnoVault creates a `/data` and a `/innovaultleveldb` folder for storing your data and local databases. InnoVault data is encrypted using a randomly generated secret key upon the first launch of InnoVault.

InnoVault Data Directory for Linux/macOS `~/InnoVault/DATA` or Windows `C:/Users/<user>/AppData/Roaming/InnoVault/DATA`

If you wish to start fresh with InnoVault and get back to the selection screen, delete the `/data` and `/innovaultleveldb` folders after shutting down InnoVault. InnoVault logs are stored in the InnoVault Data Directory `~/InnoVault/DATA/innovault.log` or `C:/Users/<user>/AppData/Roaming/InnoVault/DATA/innovault.log`

Helpful Commands
-----------------
`nohup npm run headless &` To run InnoVault in a headless mode on your LAN (typically ran from Raspberry Pi) (Outputs log to nohup.out)
`node -r esm ./bin/innovault` Alternative command to the `npm run headless` command, no log output
`npm run innovault` To run InnoVault in app mode with Electron, also outputs LAN server (can be ran from OS of choice with GUI)

INNOVAULT BASH INSTALLER SCRIPT
-----------------
Simply run the single command below in your Terminal or via SSH, then choose one of the options if you want to Install InnoVault with or without Innova chaindata or if you want to just update!:

```bash
wget -qO- https://raw.githubusercontent.com/innova-foundation/innovault/master/installinnovault.sh | bash
```
or
```bash
curl -o- https://raw.githubusercontent.com/innova-foundation/innovault/master/installinnovault.sh | bash
```

You can choose an option 1-3 from the installer script above to either install InnoVault, install InnoVault with Innova chaindata, or Update InnoVault!

RUN INNOVAULT HEADLESS MODE (Raspberry Pi, etc.):
-----------------
Install NodeJS v12.x via NodeSource or Installer from https://nodejs.org

```
# Using Ubuntu
sudo apt install -y curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
apt install -y curl
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```
Run `sudo apt-get install -y nodejs` to install Node.js 12.x and npm

You may also need development tools to build native addons:
`sudo apt-get install gcc g++ make`

To install the Yarn package manager, run:
```
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn
```

Install and Run InnoVault
```
sudo apt install build-essential gcc g++ make

sudo mkdir -p ~/InnoVault/DATA/storage

sudo mkdir -p ~/InnoVault/DATA/innovaultleveldb

git clone https://github.com/innova-foundation/innovault.git

cd innovault

sudo su

npm install -g electron electron-forge electron-rebuild node-gyp

npm install

nohup npm run headless &
```


RUNNING THE INNOVAULT ELECTRON APP (Windows, macOS, etc.):
-----------------
Install NodeJS v12.16.3 via NVM or Installer from https://nodejs.org
```
git clone https://github.com/innova-foundation/innovault.git

cd innovault

npm install -g electron electron-forge electron-rebuild electron-builder node-gyp windows-build-tools

npm install

npm run innovault
```

BUILDING THE INNOVAULT ELECTRON APP (If you want to build your own binaries):
-----------------
Install NodeJS v12.16.3 via NVM or Installer from https://nodejs.org
```
git clone https://github.com/innova-foundation/innovault.git

cd innovault

npm install -g electron electron-forge electron-rebuild electron-builder node-gyp windows-build-tools

npm install

npm run buildwin
```