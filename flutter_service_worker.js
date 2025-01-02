'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bd1e9794a21772691ecb3b8eed1b86d7",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"/": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"main.dart.js": "325729305b1ee2a6a294abcc46f6a6a8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "870edaf9cb6f1fabcbcaa0e0b4715944",
".git/objects/3e/ca285bebf90d52b20346f38a0cea87b8daae5e": "86c744becb27bf2fc91a162b42d149af",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/052a528068a6b26786d3f408f316ab6c2543ab": "d7eed6c18befc12ad0d89eac2583fbe8",
".git/objects/04/c1fad149e37e023fe3538addd2fafa3b262afd": "55c325c3ce57423dd7f8e3699be120e0",
".git/objects/32/33cf79038a58e1de4159e620706864b1e43d43": "3a6209d9ae0a4ac185d19aab313f3b25",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/32/78a29bd7d9898e5500808129535568e25f3d2e": "411cfc2c903176c30802b9c0bf33b195",
".git/objects/56/c39266316e5c7b5b1d23518962569f73173e83": "7401333306e6c069b603b56019972c4c",
".git/objects/58/dfbbd5c18beffc0fd606f6ded1a753a33e7566": "a0295c5c16083b2219f9cd1e3adbdd34",
".git/objects/93/4f1681c39649eb94ce637a490525bcb41e0408": "6745a845183d667d4e7521f771015c95",
".git/objects/93/a18e5e79b9f98f54cb7ec0cd7f43e3e44aeb54": "9561b8e5195eaeddc7bf76a96aef0dff",
".git/objects/34/3d678279219180955bbdc12cc2fa52ceb98e1c": "9cf60ed8a45ac67544c05104475ca44e",
".git/objects/9d/9de34fc270ea8f0fb06d90da564cbfc05ac366": "ef372a085bf9f9ddc908a00a87bc3096",
".git/objects/a3/64a46571f6bf97fa1e2462a26c917163c36a2f": "7490321eeda8f3b3417b841de2aa793a",
".git/objects/ac/d4d5a5a9623ec7da49e2636ab046b28f636803": "3421b01a3135702b912bc170b7987402",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/a2/4dc04972a8b5d40b4e941a386ed1b78d2fc878": "dbf75d3839799ef190f82539991338ea",
".git/objects/bd/e0e77f651b4afab1c53e577e395a5c959f3921": "f5ec4b4616ca15bb49fbbb31cf5c6ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/31457279a3a1a6e41bd7adb9a7a0d0416a7821": "175dde7fb08aeb194752836a07144c25",
".git/objects/ab/1b0a95e189dc69f2bdb9810f3ddb9174b8884a": "9c654ee9a5dd90fbf240c4777019a693",
".git/objects/e5/0aa43a332558161e0932038b29b08829ead475": "c3bc27e61e4a26e808f2a49ed2371bb3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0c89b75e63ce40600e7b3139041c2f73fc82a9": "6aea1a304e29ed6275389dfd7d9f960d",
".git/objects/e4/dfd02a943b6ecd93cd675eab80c08a83999ca0": "e6de960bf6851506d1b3eb1ec47012a1",
".git/objects/fb/62515a7a1e376c37b254673b3c74877c806b67": "45ca17d0762c6771f3aa60653b14ac8c",
".git/objects/c6/ef5c1d780e0f018811b08e5c949aefb51ca539": "9dad3fe6c01384f120dfd0718de12790",
".git/objects/20/9834ba6b24aae4809d401abd3ef709376ad5ad": "7c650a32e43fffdd77a2fd802b6fb118",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/16/938782cfe86eeee3ec5db238462ec627aec2ef": "d0a9a73949949f45ef1f10acb444e5e4",
".git/objects/42/2d65da51500de25cd628f450773e6dd4928b31": "3e6f472ad2434cdfc2c6e3fc16c73443",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/80/476cd76a5896de51aff1a5ff4fc2e8f102883f": "d2b5e1859d9d83661a3f360855b72d26",
".git/objects/28/e4ec7274785216157c40970c454abe8b50f87d": "0c0efa65603333002d4bdca3db4149a4",
".git/objects/8a/9def0d52cc118f4df93bfe482f0855192e0c74": "88166587d9f293e4b14b089b6f43648d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/764401863700c768f5d308bdcd008c3ce90087": "8aa654337f73e2ca36c8033ec6c9f1e8",
".git/objects/75/9a2fa4769357e11599f9dffcbce1e8722d7e14": "cd7a37cf8e3fb9fd2214cf1dccb79735",
".git/objects/72/05993d84d279d8c339a39fdd3b5407474f29b4": "5a67ca860375fc65d078da78cc3b77c2",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/6b/6d12c1fa57dfcfa2281b39c05debe4f8621241": "4d6e3b35e617548b5e252877e3f6d90d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/297a874f1390948d8a2e5623b45b69b240e932": "853342f5c7dcf856515484b9186a7f3e",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/99/73bd6d551c0b5c758857b4296deba8baec6769": "a651be4d1af47b5bd8dc18ab17171f4a",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/9f4d86742207e1f0adbe994f7b3172bfd120de": "3dfede394a93ca6e08f090fba9bcc923",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d3ab1fed40ac5f7e0f7a50948a8ec3faf2a346": "d87f4cfd278490fb7bbac93013b68de3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/cafdefeaf1170b064ef7aff622218a1aa53748": "11c328aeacf0b03c9df8d77d190947a7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/a0a0398300b667b14bfb1242c637d11c3251d3": "bf0f25ec5c22891199bfb5b3ced26746",
".git/objects/dc/fca1fb45760f9f6d97dd77426792e63cacf469": "9836b7fdd67cf10c8194f80238d17f61",
".git/objects/dc/57319b3e4f32fd0452d9b49d971cc3c4c16cdf": "a285fabe06ee15f6476963c94303dd50",
".git/objects/dc/cd778e47690b93615adfe5357df1d6700fd9d5": "0a9eb8f70eff8c2b6c3d936f503bf77d",
".git/objects/a9/0fc4022770efe7a7753dd38a69381b46e4caa9": "e9b49fbaef450ff4cf8a7acfde150530",
".git/objects/af/381d09eb89b35f2428b3439f41a645ccf690a1": "67d7c5cfac934536b3f8b315f1160bb9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a8/3fb860521baf5148100f952032f90d4f42fb25": "f9785ff0e6322d9408953d113bc892dd",
".git/objects/a6/fe5d6a2c028769e43b59821009c68a3c5299e1": "73c208a89e68a3ee4f6bf682b41f2b3e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/d2e713df21958f3583418d495c4e3bdca574fa": "e47e6ec31a98bd57cf8790acd7e932f4",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/697b3ed08c4ffd11b292e895d792abf9668f10": "dcb06d7db32e21d399b88c4e488cd0d7",
".git/objects/a1/7a2cdbfebea270bf53f615702f38cbd327fddd": "de0536fcdbaa8246dbe5cf1f0cef9c21",
".git/objects/cd/f34b4909b16729423549c71f53c39f3a10f66f": "477bd3f3f9265f738658a2aec18e78d3",
".git/objects/fa/0da7e6890b3ecd7c0c6f15a8d4382fe9a5558a": "e65e04333c83795075dc68350ee88f1c",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/cb/d9b3fb581b603c0cccdfdd6547308c64efa170": "5393c7d3cf40296135e83668cf0497d9",
".git/objects/e0/9c526783dd7cd2125ae1310091a312706e1071": "7701d891a418bdfec9519ac78959814d",
".git/objects/46/dd676ca316af01c6077d46ca9a1d4b9255c9bf": "b9e80b5b7488fd799f429ce79ac8b2f8",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/072ba885d0e78370b306d73deb47a518740508": "c59435a10f5fafbda7ccab3711ec99bd",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/3e0401884f782d9620e0e030a5933faf21bdc5": "8295b12c8efddada1ce988feeb541db1",
".git/objects/8c/02ba45f541c95b9a050e9e5376566065f9a15e": "5df34c0d2338016330f89f8b4fdd51ed",
".git/objects/49/ee0656293b223264b9bd0b75b84475a20adc22": "b88c39e75c7e520ca96fde2a5a59d370",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/40a03e0a14e71ae5d7f606fa128242799f153a": "7f4c5f9279a9a9a5c16549627bd58763",
".git/objects/2b/5b75f15c84a711682661baf9392c00367f5e0c": "277719c39ef8aea52352d3dc3d35d46b",
".git/objects/2b/24774c3d28e378ef2917a20bb9fdf88779af63": "b58cc8f556e410f5e9beeb8e06273045",
".git/objects/14/a0012a27f05dcabc4ce36caf73e7ac9528c2b9": "0eedea10b5bfba02724f130f659328fc",
".git/objects/8e/ea7dcfe81ab8a7449d34c79de8c56d7c7811b7": "eb1026db5d766317161c36b19bb2a445",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ff93ac1aa2348bbf767e2f17bc3cd83",
".git/logs/refs/heads/main": "35ca8434d33d2f1ea7df4e204b4f44e8",
".git/logs/refs/remotes/origin/main": "2a57d1904462d27092288712fe94072b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc77c0ab40ff28cfbeb4735ff9a3e4bd",
".git/refs/remotes/origin/main": "bc77c0ab40ff28cfbeb4735ff9a3e4bd",
".git/index": "c28db95fb75552799270b014a0dbd87f",
".git/COMMIT_EDITMSG": "e49e7573de827d2a7e0a7f731d040443",
"assets/AssetManifest.json": "8397342f237180dd4cf1228f943cef50",
"assets/NOTICES": "6937d5ceace86264f3c206fa0ed31201",
"assets/FontManifest.json": "158490315554d991fee4814a46477d3e",
"assets/AssetManifest.bin.json": "151eb91602ff5bc23e2b8654c712f06d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2e372eb7eba278403c6be15037aa2760",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e58db2c8e514d0ddf74fe9193586ae12",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bf1b75fdc8645c7fda526de866a44eda",
"assets/fonts/MaterialIcons-Regular.otf": "04b115ae8666564645bb76d22fdc359c",
"assets/assets/images/c%2523_logo.png": "a2ac4142b22beebab6ab6db956f66f5d",
"assets/assets/images/winforms-logo.png": "fd08e38f3ebbd56c5e71f89d086c850b",
"assets/assets/images/ezgif-3-7162fb7e6d.gif": "769e343cec3de9f638911859aa679fca",
"assets/assets/images/flutterimg.png": "05ad3ca19a2f2666f9368eee460aea0b",
"assets/assets/images/flutter.png": "bb75a8da0b85488d87e59a2e522115c0",
"assets/assets/images/applogo.png": "d16aa23585ca56426b78a0f1696b951f",
"assets/assets/images/api-interface.png": "7fbf522543b89a958fa310aaec76d74d",
"assets/assets/images/githublogo.png": "3d5e73d93eb444d2b38f3ac2caf53c05",
"assets/assets/images/sql.png": "0eebb1788ad1e46530a84cee76aa27c1",
"assets/assets/images/firebase.png": "978bd80e3cdf987dbaddb44a9c9b8434",
"assets/assets/images/java.png": "3239d13f6545753a92b8daa6ed29053c",
"assets/assets/images/sqlserver_logo.png": "3620c268adf3c72a2d9959519b92d9ac",
"assets/assets/images/figma.png": "16feaa6fbde1aeb849cd3a4d99ccb801",
"assets/assets/images/logo.png": "2c5e577d3a911cda7a79171924aaeade",
"assets/assets/images/weather_api_logo.jpg": "567ed81b604748b156c0946742f425a1",
"assets/assets/images/postman-icon.png": "872de4667c364065586a18df922bdf31",
"assets/assets/images/android_logo.png": "6225755a721ff7757ce35fb0031c5aa2",
"assets/assets/images/php.png": "d220f28a1d60d04530bb2c81c41e3683",
"assets/assets/images/hand_weaving.gif": "5a555338873b1e27a5bdfff52d1e28bf",
"assets/assets/images/dart.png": "6e9cdfb3178b7d68e392fa8399630f0c",
"assets/assets/images/profile-pic.png": "b295292ba39210ce2a999b053e89a933",
"assets/assets/images/sqlite_logo.png": "4189991610dc7769f7063dd566c8bbe8",
"assets/assets/project_banners/news_app_logo.png": "a78fc7eae387bc544ee5929ba7cd66c9",
"assets/assets/project_banners/tetris_logo.png": "9d83f0fce1fc05452e8a7a3179e3d359",
"assets/assets/project_banners/tetris_banner_1.png": "c173ab62e4d2a9eda4f635db00c8a3a0",
"assets/assets/project_banners/imagify_banner_2.png": "ba80b6403ea736276ccc87bdcf1c3c3e",
"assets/assets/project_banners/tetris_banner_2.jpg": "e9f3b1cfca558f01d803a39d9ee0773e",
"assets/assets/project_banners/imagify_banner_1.png": "280ae7a3655681b6ecfa9cd351140ff1",
"assets/assets/project_banners/hamroclz_banner_2.jpg": "302f54fc7bbace022e95967cf7c1588b",
"assets/assets/project_banners/hamroclz_banner_1.png": "15e7df4811b6b7ec49d42b2727edafdd",
"assets/assets/project_banners/hamroclz_logo.png": "83ebaa325b7d4930b660999693c28bbe",
"assets/assets/project_banners/imagify_logo.png": "2165917735c358ba1d28b2ebcc0bd137",
"assets/assets/project_banners/newspulse_banner_1.png": "d95fc0b4b7dd83a0109a36a389531a49",
"assets/assets/project_banners/newspulse_banner_2.png": "de0bea8b929791317edfbe3557bcf69a",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
