"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[76],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={sidebar_label:"BNB Smart Chain Fast Node",hide_table_of_contents:!1,sidebar_position:2},l="How to Run A Fast Node on BNB Smart Chain",c={unversionedId:"BSC-fast-node",id:"BSC-fast-node",isDocsHomePage:!1,title:"How to Run A Fast Node on BNB Smart Chain",description:"Fast Node Functions",source:"@site/docs/BSC-fast-node.md",sourceDirName:".",slug:"/BSC-fast-node",permalink:"/docs/BSC-fast-node",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BSC-fast-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Fast Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Smart Chain Verify Node",permalink:"/docs/BSC-verify-node"},next:{title:"Using ChainIDE",permalink:"/docs/chainide"}},d=[{value:"Fast Node Functions",id:"fast-node-functions",children:[],level:2},{value:"Suggested Requirements for Fast Node",id:"suggested-requirements-for-fast-node",children:[],level:2},{value:"Settings",id:"settings",children:[],level:2},{value:"Steps to Run a Fast Node",id:"steps-to-run-a-fast-node",children:[{value:"Sync From Snapshot (Recommended)",id:"sync-from-snapshot-recommended",children:[],level:3},{value:"Sync From Genesis Block (Not Recommended)",id:"sync-from-genesis-block-not-recommended",children:[],level:3}],level:2},{value:"Start Fast Node Without Snapshot Verification",id:"start-fast-node-without-snapshot-verification",children:[],level:2},{value:"Start Fast Node With Snapshot Verification",id:"start-fast-node-with-snapshot-verification",children:[],level:2},{value:"Node Maintainence",id:"node-maintainence",children:[{value:"Peer Discovery",id:"peer-discovery",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3}],level:2},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-run-a-fast-node-on-bnb-smart-chain"},"How to Run A Fast Node on BNB Smart Chain"),(0,r.kt)("h2",{id:"fast-node-functions"},"Fast Node Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,r.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,r.kt)("li",{parentName:"ul"},"Verifies the states of every accounts.")),(0,r.kt)("h2",{id:"suggested-requirements-for-fast-node"},"Suggested Requirements for Fast Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IMPORTANT")," 1T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms. (if start with snap/fast sync, it will need NVMe SSD)"),(0,r.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 gigabytes of memory (RAM)."),(0,r.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud."),(0,r.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 5 megabyte per second")),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("h2",{id:"steps-to-run-a-fast-node"},"Steps to Run a Fast Node"),(0,r.kt)("h3",{id:"sync-from-snapshot-recommended"},"Sync From Snapshot (Recommended)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the pre-build binaries from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download the config files")),(0,r.kt)("p",null,"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Download snapshot")),(0,r.kt)("p",null,"Download latest snapshot from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"Download site"),"\nFollow the guide to structure the files."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Prune all trie data")),(0,r.kt)("p",null,"Fast node does not need trie data anymore, prune the trie data by the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"geth snapshot insecure-prune-all --datadir ./node ./config.toml\n")),(0,r.kt)("h3",{id:"sync-from-genesis-block-not-recommended"},"Sync From Genesis Block (Not Recommended)"),(0,r.kt)("p",null,"1.Build from source code"),(0,r.kt)("p",null,"Make sure that you have installed ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go 1.13+")," and have added ",(0,r.kt)("inlineCode",{parentName:"p"},"GOPATH")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/bsc\n# Enter the folder bsc was cloned into\ncd bsc\n# Compile and install bsc\nmake geth\n")),(0,r.kt)("p",null,"or you can download the pre-build binaries from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,r.kt)("p",null,"2.Download the config files"),(0,r.kt)("p",null,"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n\n## testnet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,r.kt)("p",null,"3.Write genesis state locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth --datadir node init genesis.json\n")),(0,r.kt)("p",null,"You could see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.498] Writing custom genesis block\nINFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc\u2026fb0d1e\nINFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.524] Writing custom genesis block\nINFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc\u2026fb0d1e\n")),(0,r.kt)("h2",{id:"start-fast-node-without-snapshot-verification"},"Start Fast Node Without Snapshot Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start your fast node without snapshot verification by verify nodes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\ngeth --tries-verify-mode none --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,r.kt)("h2",{id:"start-fast-node-with-snapshot-verification"},"Start Fast Node With Snapshot Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add verifyNodes peers in config.toml.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[Node.P2P]\nMaxPeers = 1350\nNoDiscovery = false\nBootstrapNodes = ["enode://...", "enode://...", ...]\nVerifyNodes = ["enode://...", "enode://...", ...]\nStaticNodes = ["enode://...", "enode://...", ...]\nListenAddr = ":30311"\nEnableMsgEvents = false\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start your fast node with snapshot verification by verify nodes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## start a fast node\ngeth --tries-verify-mode full --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,r.kt)("h2",{id:"node-maintainence"},"Node Maintainence"),(0,r.kt)("h3",{id:"peer-discovery"},"Peer Discovery"),(0,r.kt)("p",null,"The bootstrap nodes will be enhanced in the short future. So far, a discovery http service will provide some stable public p2p peers for syncing. Please visit ",(0,r.kt)("a",{parentName:"p",href:"https://api.binance.org/v1/discovery/peers"},"https://api.binance.org/v1/discovery/peers")," to get dynamic peer info. You can append the peer info to the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticNodes")," in the config.toml to enhance the networking of the full nodes. To avoid crowded networking, the discovery service will change the peer info from time to time, try fetch new ones if the connected peers of full node are too few."),(0,r.kt)("h3",{id:"binary"},"Binary"),(0,r.kt)("p",null,"All the clients are suggested to upgrade to the latest release. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"latest version")," is supposed to be more stable and get better performance."),(0,r.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,r.kt)("p",null,"Please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/upgrade-fullnode"},"this guide")))}u.isMDXComponent=!0}}]);