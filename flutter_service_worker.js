'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "97f5353783d93bdf39fe983d5025cf08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "20d16fc8bcc972114f1e460c0920fb32",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "70fadf7afc2fecfdab0ead7455ac1cc6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "805f585bb44bbb5bd15e21579456beb0",
".git/logs/refs/heads/main": "805f585bb44bbb5bd15e21579456beb0",
".git/logs/refs/remotes/origin/main": "e62e0e6e4ed383975d719aa7999a235a",
".git/objects/0b/2e7654621bd12774aff09d5b556ae743f66e96": "433b36e7fe23e0b0e205b1359d3ef141",
".git/objects/0d/aa6ed4b3131df9f57a86dc667c4c12214bd486": "ba2874e372fe5ddd86554df3d98fea65",
".git/objects/0d/cfa7190dedc54200758f5f74dfb243636d9958": "837602602a45b7e87545b63fbbfac1f1",
".git/objects/0e/8788802166e4bb4bd86de0d606320024902b56": "ed2a862d877c9989b9a709fe87e04dfd",
".git/objects/1a/26ca5c7ad0e1442cef3e463fcba51a2dfa99ee": "b6b056f7d3c44860d7c4b3e981690bc3",
".git/objects/24/172a5ef7a97c380672e93945ed5165e510b9bb": "f6f70a8e67bb97200e57f508aac9c1f5",
".git/objects/24/391e36b7f4ed6806d3dcedfb54e816db2522f1": "102023afa896be597a732e246cf98620",
".git/objects/28/6dbb99e655804e4e61234f21a57eb312dc4d5a": "950404250a85b5dd627a993588f56332",
".git/objects/2d/6019eded0c690147193b6d857c8bd367a3c711": "74671fd1f68cd839ede12e6314f44129",
".git/objects/2d/f2230ac6eacd5efd420ea541c086e70015918b": "cdce957e339563b40509bf8b6dc09e27",
".git/objects/32/bec87b305cd6e7ba745148cb51c7875a6ce3d8": "58b73959c285ecedefc0ce0005f30d38",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/67bd11450e6282b1ca210c02aa15b154981448": "3c03a3551405ce729b0e1159a4fe49db",
".git/objects/3b/06898305b79bed578312e5d7c1855ea44b911c": "4a1e8daecfc11fad6064134c4ef83745",
".git/objects/3d/c33c9080590fa7695246159865d4bedb8ebd4a": "f4c304a158b5409a87738909cafcc40c",
".git/objects/3f/37a3f5450cb30a3253857b0af1e0398db9f612": "c9d39a58c279e4e391cabefed0da5cca",
".git/objects/40/61177a416c9cb99d34a95712786e23ddfb845b": "a36f2582df533b7ce702eea35b07a0e2",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/00f46972e4b43f7bcc4544c0ed5882595a31ba": "8f565757a76a9c0e963b6bce29de115e",
".git/objects/44/19c88b32aa1b3f80da3b0575ab793f26a84e76": "2e61312d248c2b3d50c2b6a3ac16eab5",
".git/objects/45/a7210706b380803ae428cc602ad69d793bcf62": "2602fb5476636a020bc17ad8f003b807",
".git/objects/4b/72b27ac62b24a9abeba61757872421a4d6703e": "72a8aa26d122be8dcb2054260a176ef8",
".git/objects/4f/fd828bc976980b40db042ed793871671ed95a6": "f9c184a1da96dca387d17ca952cdbc28",
".git/objects/4f/ffaa9965c859bdb4550f5c9a69ff12c7891d71": "cf3a9082cbd06b123afba5699c95b9fe",
".git/objects/50/4152770b5978458f746b55202ee206d3cad3ff": "bbb64fe49af19b6e4223ffe62b9e7e93",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/7fbb99f244eefe8512cbb8277214933280bfbc": "a56034dc7ccb80da7846ab95e9635d5b",
".git/objects/57/d2361e5d54e393a30452b4b22e92994347301b": "d8ab598dba633e71c0d85bb576a56cf3",
".git/objects/59/9ba5e1323c30330c86ad11d7a2d1068259c26f": "163eaa729d44b33f64468df73142ec92",
".git/objects/59/aecaea9cfa33ee5e5e7d9323507b9e56251b61": "41a4fa23b715d947836c05b67fc2faad",
".git/objects/5d/d9c286024f6f99e5f3b27c126204466ad84adb": "a3d7ae128604d3cba6d9e2fd84a16b05",
".git/objects/5e/081575c3e68336adf91e7a414dc7397f379e97": "4a0a9903b97a9627e160a6fd8b2f6ca5",
".git/objects/5f/94f523be5fbfe183606ff2bcfeaaab391481f9": "2f291dc8bb02ca160d1139518835e8ba",
".git/objects/61/25d75b1a30f7461f40ef98b5f40d6da5358ad5": "bb663b6cef76d4613ad6ef0afbe0b0d6",
".git/objects/64/72ce5820786c9e5e38eb8ebc8a5dd39cccc396": "499d87edb58427359f26ecc5dcdef42f",
".git/objects/66/5ab25288fe9ede476010f080355ec45c44c436": "c50cc474a4b220742e771b0645c320d6",
".git/objects/68/00cb63b428bc7e9049faaf64b81cf297312b7c": "d0f548fc477e8ca8a9049ef493603597",
".git/objects/68/64eb249111a2a6b06f5f52d0d91400bb8b34a5": "5b80fc4c24d21df800b3ae761df8fad2",
".git/objects/6e/8a169615ca4f4cfbe9ca580f33dd46f2714c78": "b44910b96b905e74c68a3ea4520a0e4d",
".git/objects/72/057714be48be14462c4dfd316b332ae906a03c": "6e95fb99c5e066b07cdf2c72890f4327",
".git/objects/73/67a3fdc38ec644716fafd58ddadd59db39091d": "715ad689932efab50abd9beda2770aa3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/5281b4071fb9c5c00684aa2d281849749b79d4": "c1337741229a4da2dcf50f7790ed08e1",
".git/objects/83/8acde85adab547fbddef7c086314136594bf3c": "2e0cf8b9dbc779dbae1cd90fc8fba4ee",
".git/objects/84/24020510548dcd1585ff15757e1ab07e0a244e": "8244915402c90055bcfbbee58c3036ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/1ea5ac02f9a2d9b15e60f58e4b1799eb4a6f2c": "3aa01a69007ffebdcfbd7f6e0182d4e8",
".git/objects/8b/f9e6135602536a7d5ea4b9c2f92de3491c43d2": "ec97f431238c0765eb6065cfd94c7ea8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/4eebf20665d5ae746c622a2bd42274b54d2bf1": "1af37619c66ce985101983d9c8fa0fe3",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/8f/9ad9cb9f157b6ffdf4d843075d7cf69e7800d4": "8504c0239231af71ca3c6494e6c1d01b",
".git/objects/91/af0bbcddca4b3bef8f76eede9bf4a70c6adc80": "608fb1bb88d2096bb220d22f55034fb8",
".git/objects/92/d6a8aae50f86192d3eb75b97357a1676be45f5": "913d4b143b4565a4d79c0eb3ac29c54e",
".git/objects/94/543170a51cc5e0c876a8bd55399af2450230ee": "2bce8423edabd9b32df9cbc1ae6e5773",
".git/objects/97/5d20fd0854932bcb6849375692e8376d6cb285": "d6b8211b572a6b59d6339101790bb615",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/d72dc42745020f0198cbc5e861e9e40dce61ac": "8696f319b8f3376c7fc71c0aef738afc",
".git/objects/aa/709a47b9ec9deb60075b1552e782bd523240cb": "01d7dea02180d4a1fea79aa6b01d6c74",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/fb840405bf1a1e9884341a9e0250e74f5a1eba": "8c8a51e0a71cecf658b9f0fd65c43aab",
".git/objects/b0/44856db3447479f63b69b29acead724ab23a44": "3c47cd54557f38def2a20497fdb2d382",
".git/objects/b4/a731f450b38083c1767a46b1ca7faf8a50766b": "4508ca255e27d4bc336469cd29202c57",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b6/ae1052100f255bf21fc85cb3de69885fc90e6b": "e44605fbae844cefbcd8b4c2c3db85c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/364db1ae44b5be6293119b0c5bf36bd454010e": "ba9738f63c96829989e79c2c28002a55",
".git/objects/b9/dfdcc5d785799df027a6d161f528d236b0eedc": "f0ceb2143a95309e3f4a95d9d629c264",
".git/objects/bb/6c55e11ad1091aa50bce3972f7deefaad19ed6": "f132f06ed23a012f4c36e428028afead",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/3e87b23926bdc665fe55a3bc02ecb9360aa4d2": "5986e6c5d960a74a2373e03b8ba2e69c",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/008acfdaba5f0114b2bc99ac298f336c305672": "7feb67a8bb9bdc78360245f94df302d0",
".git/objects/c9/c28eb5855c3ddf90ce0aa690cfb7f3d3345c24": "d1fb7e1ba359ca10a1e94ce3446b6de4",
".git/objects/d0/8cce1919f67a0f6f64b2d5cae00d9f4f583000": "9cae01d9bfa42c383c3ee2d456137ab7",
".git/objects/d2/5878357ecf6a03572a4a8da5580a061c3920c4": "3d149a374348116ba06f2060dc5213d0",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/3c0f27d3fefcb75f573edeae24e9574bbaaded": "fcff5d151dd570a76baccd4657c6a288",
".git/objects/de/9eb882a487aed61309b0a3edf93f9d8e5c8c30": "bd369610a10c7920a383a9d4fd2e990b",
".git/objects/de/f05a0aea394e5f3ce5e1703b8275830817dbd5": "5ea9690186e689688c30a3b442f5c952",
".git/objects/df/41fb80e5edcaf9104cf13a752c4ea5072fbfb9": "a99703fc9f4492dd79114b7916c02b80",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/c036986ecabad563d65c9f9c4bac2340e013a0": "a46af4a0335db09a025a29c96e5d3689",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/9a4cd149acc201bda6c237dd3bad3878ff545a": "7a7ac3d39dc61ce34f3f3503144deb8f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/bd9ab4c9bc7b9863fa38e41a3b451f1e6e1917": "bbd7ab2d472eaa8e3230015bec32dd20",
".git/objects/f1/4b0f2481616b5667dfec47f1391ab4b8557fd1": "01f9ed097cc76f5ae39ba4e8fbd3d929",
".git/objects/f1/a74e4bb489abf846d99e057c364ed402c8dbae": "fa5c2c930c36bf4962f8c52e22cac0b0",
".git/objects/f2/b9449dd5b44ee49329a071959dfd578b5ed169": "68b4008747d4a091c897693df6276d98",
".git/objects/f4/3b26cd8866052a3408d4ce1207b5313f996939": "8896965afeaf410fb4e791633bc8187c",
".git/objects/f5/76750fb50b98c7312f367175b2c9d58e1b3cf4": "2b5cb1508f478c293e000d0065d4c8c9",
".git/objects/f5/fe5549e58ba3c5bfbc4265d06aff870d0c2d66": "60c7d6b7ba9f7d89288badfd3c33427e",
".git/objects/fa/7a5e6839949984e589e3237c3d48cb75ce7ac9": "2486944ce37eab4a1f5a1df7e1a52091",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/f2005a774ca9fedc3c41470096441f5e631906": "6e09b6ff64ea08b610e05519265c790c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/77f8ec4bb178aaa4df544efbbcc8b85da43138": "a96bcff1d2905c800ee65dab0751098a",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "3e89103241b2e8c0c7ac2a46e902337b",
".git/refs/heads/main": "6ca73258ffef4f40277c68459f2e50d5",
".git/refs/remotes/origin/main": "6ca73258ffef4f40277c68459f2e50d5",
".git/sourcetreeconfig.json": "a0923a147d98a5b9d83799caa3e3ad08",
"assets/AssetManifest.bin": "4c618c1556308d28f4603af5375e1ab0",
"assets/AssetManifest.json": "475f0ae07db1ffe8eb52e4322801106e",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/images/device.png": "9f91477fec44d29efc05903d2b90b2df",
"assets/assets/images/device_off.png": "700f3a4199b2b45b7e9fa09f68e388fe",
"assets/assets/images/face.png": "73231f5bcbf3a10b7e06699e5784505c",
"assets/assets/images/ic_add.png": "520352687d01bc2f317f88145089973e",
"assets/assets/images/ic_calendar.png": "60fb8aa9e1b9eae42e1ca009863829b5",
"assets/assets/images/ic_cancel_red.png": "0a4f14af6c5469460b8e0844d67315b4",
"assets/assets/images/ic_checked.png": "62a4ff36b4d3f6964a1e8b99d97046be",
"assets/assets/images/ic_clock.svg": "95896149139ce8bf2a72a7583e9f00ec",
"assets/assets/images/ic_dashboard.svg": "98180f3e2c5036ed31dafbcf7be0405f",
"assets/assets/images/ic_detail.png": "55bb2886b67cb45d1371f9366a6c036c",
"assets/assets/images/ic_devices.svg": "aa04e15d5b3718fcfddc6bde426625c4",
"assets/assets/images/ic_download.png": "75727c6bf34b6c88fcbce0fc8d86c695",
"assets/assets/images/ic_face.svg": "05e1337d89dcf379d537b4a817a5e5f0",
"assets/assets/images/ic_filter.png": "d1fdbe7044ba59bc337ef085ebb33300",
"assets/assets/images/ic_gender.png": "570d8ce5c6dc2b31227587e34e6f4c10",
"assets/assets/images/ic_group.png": "b777983c513bee19a714b2115aae3baf",
"assets/assets/images/ic_info.png": "d79e3676f1e134351135ede97345c2d4",
"assets/assets/images/ic_info_black.png": "c145365db9cc46d10cd12ae6708baee0",
"assets/assets/images/ic_location.png": "f3173dcf40a22c65010599348f87a2ef",
"assets/assets/images/ic_logo.svg": "dfadd2f288d6ba08f36f13bfcf6bbc76",
"assets/assets/images/ic_notification.png": "dbab32ee22d5530f37c4a9773855269e",
"assets/assets/images/ic_ok.png": "38e429a1a34a9ca085bc5b7ccd31682e",
"assets/assets/images/ic_refresh.png": "4f5ab2f483fceece5e7447ba91aaa14b",
"assets/assets/images/ic_save.png": "a5b7d7991f8d770e9d320ceefb237dde",
"assets/assets/images/ic_search.png": "a700985042c4ba3022a42205af9ee464",
"assets/assets/images/ic_setting.svg": "3124007ed6b646f2e092dccf28d6a119",
"assets/assets/images/ic_time.png": "8d9797945a3314d297ddcbbe70503850",
"assets/assets/images/ic_trash.png": "661c38b22a588799c1be7d943deb4bc0",
"assets/assets/images/ic_uncheck.png": "40da85d6aa2531e48b6e78ebf123d2e7",
"assets/assets/images/ic_user.svg": "aa04e15d5b3718fcfddc6bde426625c4",
"assets/assets/images/ic_vector.png": "03ddb7d8d1da970b2da3ec80ed946992",
"assets/assets/images/ic_wifi.png": "7b84f1d4d07d702f4c0418f280207e85",
"assets/assets/images/ic_wifi_off.png": "ffa74e029cda226d76a4e63de3c7b48f",
"assets/assets/images/ic_x.png": "073650f448b1abdabeb377bb13d477f4",
"assets/assets/images/logo.png": "c7db34bcfc80abe6415bdd19a35a3c3b",
"assets/assets/images/security.png": "79d466404c4bf684341e5e8ad4bfb51d",
"assets/assets/images/security_blue.png": "912ee72cb0e5f37fadf5821ce53caee8",
"assets/assets/images/user.png": "bc4164b1dc29571a958fe4b922be6696",
"assets/assets/json/address/district.json": "feb1286988812dfdda6a0f933a4795cf",
"assets/assets/json/address/province.json": "1c1ac0219538687cc43115dc127c3eb7",
"assets/assets/json/address/ward.json": "7e6b349b353b172f4a2f3f654330e39f",
"assets/FontManifest.json": "c62481f66e9380a2039f138636fbe3dc",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "177911f94f3aa493a69c043fe958dc65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d681f8f26ece12cc7d3e0a3bc017e357",
"/": "d681f8f26ece12cc7d3e0a3bc017e357",
"main.dart.js": "683ccd143fcdbcfb5ca4980b4f7c1fe4",
"manifest.json": "afa4ccf16c2b0d3a69f5459835833a1f",
"version.json": "351383e386f88dbc1e474271c98c8c7c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
