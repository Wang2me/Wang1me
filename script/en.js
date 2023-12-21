// // 给语言切换按钮添加点击事件处理函数
// document.getElementById('languageSwitch').addEventListener('click', function(event) {
// // 阻止默认的链接跳转行为
//         event.preventDefault();

// // 在这里调用切换语言的函数
//         switchToEnglish();

// // 执行页面跳转
//         //window.location.href = '/EN.html';
// });


// function switchToEnglish() {
//     var markersToUpdate = [
//         'lion1', 'lion2', 'lion3', 'lion4', 'lion5', 'lion6', 'lion7', 'lion8', 'lion9', 'lion10', 
//             'lion11', 'lion12', 'lion13', 'lion14', 'lion15', 'lion16', 'lion17', 'lion18', 'lion19', 'lion20', 'lion21', 
//             'lion22', 'lion23', 'lion24', 'lion25', 'lion26', 'lion27', 'lion28', 'lion29', 'lion30', 'lion31', 'lion32', 
//             'lion33', 'lion34','lion35','lion36','lion37',
//         'camel1', 'camel2', 'camel3','camel4', 'camel5', 'camel8', 'camel9', 'camel6','camel7','camel10', 
//             'camel11', 'camel12', 'camel13', 'camel14', 'camel15', 'camel16', 'camel17', 'camel18', 'camel19', 'camel20', 
//             'camel21', 'camel22', 'camel23', 'camel24', 'camel25', 'camel26', 'camel27', 'camel28', 'camel29','camel30', 
//             'camel31', 'camel32', 'camel33', 'camel34','camel35', 'camel36', 'camel37', 'camel38', 'camel39', 'camel40', 
//             'camel41',   'camel42', 'camel43', 'camel44', 'camel45', 'camel46','camel47', 'camel48', 'camel49', 'camel50', 
//             'camel51', 'camel52', 'camel53',  'camel54', 'camel55','camel56', 'camel57', 'camel58', 'camel59', 'camel60', 
//             'camel61', 'camel62', 'camel63','camel64','camel65', 'camel66', 'camel67', 'camel68',
//         'horse1', 'horse2', 'horse3', 'horse4', 'horse5', 'horse6','horse7', 'horse8', 'horse9', 'horse10', 
//                 'horse11', 'horse12', 'horse13', 'horse14', 'horse15', 'horse16', 'horse17', 'horse18', 'horse19', 'horse20',
//                 'horse21', 'horse22', 'horse23', 'horse24', 'horse25', 'horse26', 'horse27', 'horse28', 'horse29', 'horse30',
//                 'horse31', 'horse32', 'horse33', 'horse34','horse35', 'horse36', 'horse37', 'horse38', 'horse39', 'horse40', 
//                 'horse41', 'horse42', 'horse43', 'horse44', 'horse45', 'horse46','horse47', 'horse48', 'horse49', 'horse50', 
//                 'horse51', 'horse52', 'horse53', 'horse54', 'horse55','horse56', 'horse57', 'horse58', 'horse59', 'horse60', 
//                 'horse61', 'horse62', 'horse63', 'horse64','horse65', 'horse66', 'horse67', 'horse68','horse69','horse70',
//                    'horse71',
//                 'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 
//                 'cat10', 'cat11', 'cat12', 'cat13', 'cat14', 'cat15', 'cat16', 'cat17', 'cat18', 'cat19',
//                 'cat20', 'cat21', 'cat22', 'cat23', 'cat24', 'cat25', 'cat26', 'cat27', 'cat28','cat29', 
//                 'cat30', 'cat31', 'cat32', 'cat33', 'cat34', 'cat35', 'cat36', 'cat37', 'cat38', 
  
   
//         'dog1', 'dog2', 'dog3', 'dog4', 'dog5', 'dog6', 'dog7', 'dog8', 'dog9', 
//         'dog10','dog11', 'dog12', 'dog13', 'dog14', 'dog15', 'dog16', 'dog17', 'dog18', 'dog19',
//         'dog20', 'dog21', 'dog22', 'dog23', 'dog24', 'dog25', 'dog26', 'dog27', 'dog28','dog29', 
//         'dog30', 'dog31', 'dog32', 'dog33', 'dog34', 'dog35', 'dog36', 'dog37', 'dog38', 'dog39', 
//         'dog40', 'dog41', 'dog42', 'dog43', 'dog44', 'dog45', 'dog46','dog47', 'dog48', 'dog49', 
//         'dog50', 'dog51', 'dog52', 'dog53', 
     
  
//         'rabbit1', 'rabbit2', 'rabbit3',
    
    
//         'yak1', 'yak2', 'yak3', 'yak4', 'yak5', 'yak6', 'yak7', 'yak8',
        
    
//         'leopard1', 'leopard2', 'leopard3', 'leopard4', 'leopard5', 'leopard6', 'leopard7', 'leopard8', 'leopard9', 
//         'leopard10','leopard11', 'leopard12', 'leopard13', 'leopard14', 'leopard15',
    
//      'cheetah1', 'cheetah2', 'cheetah3', 'cheetah4', 'cheetah5', 'cheetah6', 'cheetah7', 'cheetah8', 'cheetah9', 
//     'cheetah10','cheetah11', 'cheetah12'
//         // 其他标记的名称
//     ];

//     for (var i = 0; i < markersToUpdate.length; i++) {
//         var markerName = markersToUpdate[i];
//         if (markers[markerName] && markers[markerName].content) {
//             markers[markerName].content.description = markers[markerName].content.description_en;
//             markers[markerName].content.title = markers[markerName].content.title_en;
//             // 可以在这里处理其他需要变更的属性...
//         }
//     }
        

// }

window.addEventListener('load', function() {
    switchToChinese();  // 切换至中文界面
});
var isEnglish = true;

// 给语言切换按钮添加点击事件处理函数
document.getElementById('languageSwitch').addEventListener('click', function() {
    // 阻止默认的按钮点击行为


    if (isEnglish) {
        // 切换至英文界面
        switchToEnglish();
        console.log('Switching to English');
    } else {
        // 切换回中文界面并恢复原语言状态
        switchToChinese(); // 假设有一个 switchToChinese 函数用于切换回中文界面
        console.log('Switching to Chinese');
    }

    // 更新语言状态
    isEnglish = !isEnglish;
});

// 切换至英文界面
function switchToEnglish() {

    //window.location.href = '/EN.html'; // 执行页面跳转
    console.log('Switching to English');
    switchLanguageTo('en');
}

// 切换回中文界面
function switchToChinese() {

    //window.location.href = '/index.html'; // 执行页面跳转
    console.log('Switching to Chinese');
    switchLanguageTo('cn');
}


// 切换语言的函数
function switchLanguageTo(language) {
    var markersToUpdate = [
                'lion1', 'lion2', 'lion3', 'lion4', 'lion5', 'lion6', 'lion7', 'lion8', 'lion9', 'lion10', 
                    'lion11', 'lion12', 'lion13', 'lion14', 'lion15', 'lion16', 'lion17', 'lion18', 'lion19', 'lion20', 'lion21', 
                    'lion22', 'lion23', 'lion24', 'lion25', 'lion26', 'lion27', 'lion28', 'lion29', 'lion30', 'lion31', 'lion32', 
                    'lion33', 'lion34','lion35','lion36','lion37',
                'camel1', 'camel2', 'camel3','camel4', 'camel5', 'camel8', 'camel9', 'camel6','camel7','camel10', 
                    'camel11', 'camel12', 'camel13', 'camel14', 'camel15', 'camel16', 'camel17', 'camel18', 'camel19', 'camel20', 
                    'camel21', 'camel22', 'camel23', 'camel24', 'camel25', 'camel26', 'camel27', 'camel28', 'camel29','camel30', 
                    'camel31', 'camel32', 'camel33', 'camel34','camel35', 'camel36', 'camel37', 'camel38', 'camel39', 'camel40', 
                    'camel41',   'camel42', 'camel43', 'camel44', 'camel45', 'camel46','camel47', 'camel48', 'camel49', 'camel50', 
                    'camel51', 'camel52', 'camel53',  'camel54', 'camel55','camel56', 'camel57', 'camel58', 'camel59', 'camel60', 
                    'camel61', 'camel62', 'camel63','camel64','camel65', 'camel66', 'camel67', 'camel68',
                'horse1', 'horse2', 'horse3', 'horse4', 'horse5', 'horse6','horse7', 'horse8', 'horse9', 'horse10', 
                        'horse11', 'horse12', 'horse13', 'horse14', 'horse15', 'horse16', 'horse17', 'horse18', 'horse19', 'horse20',
                        'horse21', 'horse22', 'horse23', 'horse24', 'horse25', 'horse26', 'horse27', 'horse28', 'horse29', 'horse30',
                        'horse31', 'horse32', 'horse33', 'horse34','horse35', 'horse36', 'horse37', 'horse38', 'horse39', 'horse40', 
                        'horse41', 'horse42', 'horse43', 'horse44', 'horse45', 'horse46','horse47', 'horse48', 'horse49', 'horse50', 
                        'horse51', 'horse52', 'horse53', 'horse54', 'horse55','horse56', 'horse57', 'horse58', 'horse59', 'horse60', 
                        'horse61', 'horse62', 'horse63', 'horse64','horse65', 'horse66', 'horse67', 'horse68','horse69','horse70',
                           'horse71',
                        'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 
                        'cat10', 'cat11', 'cat12', 'cat13', 'cat14', 'cat15', 'cat16', 'cat17', 'cat18', 'cat19',
                        'cat20', 'cat21', 'cat22', 'cat23', 'cat24', 'cat25', 'cat26', 'cat27', 'cat28','cat29', 
                        'cat30', 'cat31', 'cat32', 'cat33', 'cat34', 'cat35', 'cat36', 'cat37', 'cat38', 
          
           
                'dog1', 'dog2', 'dog3', 'dog4', 'dog5', 'dog6', 'dog7', 'dog8', 'dog9', 
                'dog10','dog11', 'dog12', 'dog13', 'dog14', 'dog15', 'dog16', 'dog17', 'dog18', 'dog19',
                'dog20', 'dog21', 'dog22', 'dog23', 'dog24', 'dog25', 'dog26', 'dog27', 'dog28','dog29', 
                'dog30', 'dog31', 'dog32', 'dog33', 'dog34', 'dog35', 'dog36', 'dog37', 'dog38', 'dog39', 
                'dog40', 'dog41', 'dog42', 'dog43', 'dog44', 'dog45', 'dog46','dog47', 'dog48', 'dog49', 
                'dog50', 'dog51', 'dog52', 'dog53', 
             
          
                'rabbit1', 'rabbit2', 'rabbit3',
            
            
                'yak1', 'yak2', 'yak3', 'yak4', 'yak5', 'yak6', 'yak7', 'yak8',
                
            
                'leopard1', 'leopard2', 'leopard3', 'leopard4', 'leopard5', 'leopard6', 'leopard7', 'leopard8', 'leopard9', 
                'leopard10','leopard11', 'leopard12', 'leopard13', 'leopard14', 'leopard15',
            
             'cheetah1', 'cheetah2', 'cheetah3', 'cheetah4', 'cheetah5', 'cheetah6', 'cheetah7', 'cheetah8', 'cheetah9', 
            'cheetah10','cheetah11', 'cheetah12'
                // 其他标记的名称
            ];

    for (var i = 0; i < markersToUpdate.length; i++) {
        var markerName = markersToUpdate[i];
        if (markers[markerName] && markers[markerName].content) {
            markers[markerName].content.description = markers[markerName].content['description_' + language];
            markers[markerName].content.title = markers[markerName].content['title_' + language];
            // 可以在这里处理其他需要变更的属性...
        }
    }
    console.log('Switching language to: ' + language); // 输出将要切换到的语言

    // 根据传入的语言参数执行相应的语言切换逻辑
    if (language === 'en') {
        // 执行切换至英文的操作
        console.log('Switching to English');
    } else if (language === 'cn') {
        // 执行切换至中文的操作
        console.log('Switching to Chinese');
    } else {
        // 处理其他未知的语言情况
        console.log('Unsupported language: ' + language);
    }
}


//     2	Between 3000 BCE and 2500 BCE, the early domestic dromedaries were presented in the coastal regions of the southern Arabian peninsula, probably with the main purpose of milking. The method of domestication is now unknown, and historians suspect that the wild dromedaries may be lured by food. Today people in the area still retain the unique custom of feeding camels with dried sharks and sardines.
// 3	"The Land of Frankincense is a site in Oman. It was declared a UNESCO World Heritage Site in 2000, showing the prosperity of the ancient incense trade route. The dromedary camels were important transport on this ancient trade route.
// Egypt was one of the main consumers of Arabian Frankincense. The dromedary camels were introduced in Egypt as the burden beast, and further spread through Egypt to other places such as Tunisia in North Africa. "
// 4	Around 2000 BCE, camel caravans transported frankincense to Syria via trade routes in the western Arabian Peninsula. Therefor, the local nomadic peoples began raising dromedary camels to participate in the frankincense trade. Around the 12th century BCE, the South Arabian saddle was invented by Arabian nomadic people for riding and packing purposes. This style of saddle sets the rider’s seat behind the hump, while the loads are carried in bags on both sides of the seat.
// 5	The Assyrian Empire was an ancient kingdom that originated in Mesopotamia (roughly present-day Syria and Iraq). About 900 BCE, the Assyrian Empire flourished, conducting several military expansions to the west. In 853 BCE, Shalmaneser III and the coalition of eleven kings led by Hadadezer fought in Qarqar (now Qarqur, Syria). In this campaign, the Arab king Gindibu sent 1,000 camel riders to fight against the Assyrians. This may be the earliest literary record of dromedaries participating in the war in human history.
// 6	The North Arabian saddle appeared around the 5th century BCE. This kind of camel saddle can be placed directly on the hump, which can carry more loads, and improve the stability and maneuverability of the rider on the other hand. Camel riders could therefore use not only bows but also swords and spears. At the Battle of Magnesia in 190 BCE, the Romans fought for the first time against the Arabian camel cavalries of Antiochus III, who wielded long swords. Historians believe the Romans learned and spread this military use of dromedary to North Africa.
// 7	The hybrids of dromedary and bactrian camels were larger and thus able to carry more load. Historians speculate that this interbreeding originated in the Tigris-Euphrates valley in the 1st century BCE. This was the period of the opening of the Continental Silk Road. The Parthian Empire, which straddled Central and West Asia, became the transport hub linking the Eastern Han Dynasty 東漢 with the Roman Empire. Historians have predicted that the Parthian Empire used a large number of hybrid camels to carry goods during the Western Silk Road.
// 8	From the opinion of ancient Chinese people, Camels were livestock from the north. There are records of camels appearing in north mountains, as early as the pre-Qin 先秦 literature Shanhai Jing 山海經 (Classic of Mountains and Seas). Modern archaeological discoveries also support this recognition. In the Zhukaigou 朱開溝 Site in Eerduosi 鄂爾多斯, archaeologists discovered a Bactrian camel molar from the 17th century BCE. This is the earliest camel remains unearthed in China so far. Archaeologists define it as a wild Bactrian camel because its skeleton is incomplete and it is impossible to judge its degree of domestication. Although the domestication process of Bactrian camels in China cannot be restored, Chinese scholars still believe that Bactrian camels were domesticated by nomadic peoples in northern China in ancient times, and the time is speculated from the late Xia Dynasty 夏朝 to the early Shang Dynasty 商朝. According to the pre-Qin classic Yi Zhou Shu 逸周書 (Lost Book of Zhou), Shang Tang 商湯 ordered Yi Yin 伊尹 to be responsible for managing the tributes from the surrounding barbarians. There were camels, wild horses, and other livestock in the tributes from north Daxia 大夏, Xiongnu 匈奴, Yuezhi 月氏. Probably camels were first introduced in ancient China in the form of tributes.
// 9	According to the Shi Ji 史記(Records of Grand Historian), the Yan State 燕國 and Dai State 代國 were well-known for owning camels. This evidence shows that camels from the northern grasslands had been regarded as important strategic resources and were managed by official organizations as early as the Warring States Period 戰國時期.
// 10	In the early period of the Western Han Dynasty 西漢, the Xiongnu 匈奴, located in the northern steppe of China, gradually emerged and threatened the rule of the Central Plain are. As the Han Dynasty was still weak and could not solve the Xiongnu problem by war, the rulers used the method of "heqin 和親" (marriage alliance) to reduce the invasion from Xiongny. In the interaction with the Xiongnu, camels were introduced to China as tributes. For example,  in 176 BCE, the Modu Chanyu 冒頓單于 wrote a letter requesting a marriage. The Emperor Wen of the Han Dynasty 漢文帝 had to accept the request of Modu Chanyu. Among the  tribute carried by the Xiongnu envoys were camels, horses and carriages.
// 11	Another way for the Han Dynasty 漢朝 to obtain camels was through trade. The Chinese people only needed to export textiles in exchange for valuable livestock such as donkeys, mules, and camels. Sang Hongyang 桑弘羊, the finance minister of Emperor Wu of the Han Dynasty 漢武帝, extremely supported this silk-livestock trade. He believed that this kind of trade could not only gain benefits, but also deplete the combat effectiveness of nomadic peoples.
// 12	With the introduction of a large number of camels, the Han Dynasty 漢朝 set up institutions dedicated to the management of camels, such Tuoquan 橐泉 and Mutuo 牧橐. Because camels were important beasts of burden in ancient military affairs, these institutions were subordinate to the central military institution Taipusi 太僕寺 and were headed by military officials.
// 13	"The Shanglin Garden 上林苑 was a royal garden built during the reign of Emperor Wu of the Han Dynasty 漢武帝. A lot of exotic animals were kept in the Shanglin Garden for the Emperor's viewing and entertainment. According to an article written by Sima Xiangru 司馬相如, a literateur of the Western Han Dynasty 西漢, there were camels, wild horses, rhinos, elephants raised in the Shanglin Garden.
// Archaeologists discovered the bones of 33 camels in the burial pit of the Pingling Mausoleum 平陵 of Emperor Jing of the Han Dynasty 漢景帝 in Xianyang 咸陽, Shaanxi 陝西. The preservation of these bones is very complete, and it can be speculated that they were ornamental animals owned by Emperor Jing of the Han Dynasty during his lifetime. "
// 14	The Xuanquan Zhi 懸泉置 was a post station established during the Western Han Dynasty 西漢, located in Dunhuang 敦煌, Gansu 甘肅, and served as a transportation hub connecting the Central Plain with the Western Regions. The main duties of the station included providing food and lodging for officials, delivering official documents and letters, and transporting living goods.A large number of Han bamboo slips discovered at the site record many camel tributes from envoys from the Western Regions. For example, one of them, named by archaeologists as the " Envoys of the Kangju King 康居王使者冊", records an incident in which the envoys from Kangju (present-day Samarkand, Uzbekistan) offered camels to the Han Dynasty for tribute, but had a conflict with the local officials in Jiuquan 酒泉 about the value of the camels.
// 15	The Juyan Site 居延遺址, located in the present-day Ejinnaqi 額濟納旗 of Nei Menggu 內蒙古, is a Han Dynasty 漢朝 border beacon site group. Archaeologists have discovered a large number of Han bamboo slips at the site.One of the bamboo slips records an economic dispute between two men over horses and wild camels. This record shows that, on the one hand, the border areas of the Han Dynasty had mastered the method of domesticating wild camels, on the other hand, the economic value of camels was still not comparable to that of horses.
// 16	In 1979, a portrait brick of the Eastern Han Dynasty 東漢 was unearthed in Chengdu 成都, Sichuan Province 四川省, depicting a Bactrian camel carrying a drummer.  Some scholars believe that the excavation of this cultural relic means that the Southern Silk Road and the Northwest Silk Road were connected in the Han Dynasty, and camels also participated in the trade of the Southern Silk Road as a carrying tool.
// 17	The Xiongnu 匈奴 were very dissatisfied with the alliance between the Han Dynasty 漢朝 and the Wusun 烏孫, so they united with the Cheshi 車師 (present-day Tulufan 吐魯番, Xinjiang 新疆) to attack the Wusun. Wusun prayed for military assistance from the Western Han 西漢 court. In 71 BCE, the Western Han Dynasty sent Chang Hui 常惠 to lead the army of Wusun to fight against the Xiongnu and win the battle, capturing more than 700,000 livestock such as horses, cattle, sheep, camels, etc.  After this battle, the Wusun became the most powerful state in the Western Regions instead of the Xiongnu, and the influence of the Han Dynasty in the Western Regions was further expanded.
// 18	In the early Eastern Han Dynasty 東漢, the Xiongnu 匈奴 tribes fell into civil war and eventually divided into the Southern Xiongnu 南匈奴 and the Northern Xiongnu 北匈奴. The Chanyu 單于 of Southern Xiongnu surrendered to the Eastern Han Dynasty, and Emperor Guangwu of the Han Dynasty 漢光武帝 allowed his tribe to live in Yunzhong County 雲中郡 (present-day Tuoketuo County 托克托縣, Nei Menggu 內蒙古). In 50, Chanyu of the Southern Xiongnu sent two camels and ten horses with patterned fur to the Han Dynasty as tribute. As a reward, the Eastern Han Dynasty gave oranges, longan, and lychees to the Southern Xiongnu.
// 19	After the Southern Xiongnu 南匈奴 joined the Eastern Han Dynasty 東漢, they still retained some customs of the nomadic people. They would engage in recreational activities such as horse racing and camel fighting during their sacrificial ceremonies.
// 20	During the period of the Three Kingdoms 南北朝, Eastern and Western Jin Dynasties 兩晉, and Southern and Northern Dynasties 南北朝, many government select Luoyang 洛陽 as their capitals, such as Cao Wei 曹魏, Western Jin 西晉, and Northern Wei 北魏. During the reign of Emperor Ming of Wei 魏明帝, two bronze camels were set up outside the south gate of Luoyang Imperial Palace, and the street was also named “Tongtuo 銅駝 (bronze camel) Street”. The bronze camel became a symbol of imperial power after the Han Dynasty.
// 21	Helian Bobo 赫連勃勃 founded the Xiongnu 匈奴 authority named Hu Xia 胡夏. In 413, he built the captical at Tongwancheng 統萬城 (present-day Jingbian 靖邊, Shaanxi 陝西), and imitated the Han people to build palaces and set up bronze camels.
// 22	"After the Han Dynasty 漢朝, people had already realised the irreplaceable value of camels in the desert environment of the northwestern region, and rised them extensively on the way to the Western Regions.
// Dunhuang 敦煌 was an important port for travelling to the Western Regions. In Western Jin 西晉 literature, there were vast deserts between Dunhuang and foreign countries, and camels could detect underground water in the desert. Once the camels found a water source, they would stop and alert people by stamping on the ground with all four feet.
// In Northern Wei 北魏 texts, the Qiemo 且末 (present-day Qiemo County 且末縣, Xinjiang 新疆) was surrounded by desert, and sandstorms were common in the summer. When the camels carried by the merchants predicted the sandstorms, they would gather together and bury their mouths and noses in the sand. At this time, people will also be with the camels, imitating the camels with blankets to cover their noses and mouths, waiting for the sandstorm to stop, otherwise, it would be life-threatening."
// 23	In 427, Tuoba Tao 拓跋燾, the Emperor Taiwu of the Northern Wei 北魏太武帝, captured the Tongwancheng 統萬城 (present-day Jingbian 靖邊, Shaanxi 陝西)and destroyed the Hu Xia Dynasty 胡夏. He later set up an official ranch here, recording two million horses and one million camels at its peak.
// 24	In 445, Wan Dugui 萬度歸, a general of the Northern Wei Dynasty 北魏, led 5,000 cavalry to attack the Western Regions by crossing the desert from Liangzhou 涼州 (present-day Wuwei, Gansu). He defeated Karasahr (present-day Yanqi 焉耆, Xinjiang 新疆) and Kucha (present-day Kuche 庫車, Xinjiang) and seized tens of thousands of livestock such as horses and camels. After this battle, the Northern Wei Dynasty completely dominated the eastern section of the Continental Silk Road.
// 25	Kucha (presen-day Kuche 庫車, Xinjiang 新疆) once sent 70 “mingtuo 明駝” (bright camels) as tributes to Northern Wei 北魏. The “bright camel’ may describe the situation that the light passing between the legs when camel kneeling. 
// 26	In 451, Maimargh (probably located in present-day Samarkand, Uzbekistan.) sent one black camel as tribute to Northern Wei 北魏. 
// 27	The Sassanid Empire, also known as the Second Persian Empire, ruled West Asia for four centuries. The Sassanid Empire had a close relationship with the Northern Wei Dynasty 北魏, and their horses and camels were very famous in the Northern Wei Dynasty. In the historical records, wealthy Persian merchants usually owned thousands of horses and camels.
// 28	In 488, the capital of Northern Wei 北魏 suffered a severe drought and cattle epidemic. Farmers used camels for cultivating instead cattles.
// 29	In 551, Hou Jing 侯景, a minister of the Southern Liang 南朝梁, usurped the throne. At the ceremony of his enthronement, he made camels carry sacrifices to heaven and earth.
// 30	The Byzantine Empire, also known as the Eastern Roman Empire, was named "Da Qin 大秦" or "Fulin 拂菻" in ancient Chinese texts. Archaeologists found a pottery camel in a Sui Dynasty 隋朝 tomb in Xi'an 西安, with the motif depicting Dionysius, the god of wine in ancient Hellenistic mythology. The discovery proves that cultural exchanges between China and the West during the Sui and Tang Dynasties reached as far as the Mediterranean region of Europe.
// 31	In 588, the Turkic Khaganate sent 10000 horses, 20000 sheep, 500 cattles and 500 camels to Sui Dynasty 隋朝 as tributes. The purpose of this tribute by the Turkic peoples was to open up trade with the Sui Dynasty, and this request was approved by the Emperor Wen of the Sui Dynasty 隋文帝.
// 32	The Sui Dynasy 隋朝 set up Honglusi 鴻臚寺, a diplomatic department in charge of tributes. During the period of Emperor Yang of the Sui Dynasty 隋煬帝, Sifangguan 四方館, the subordinate department of Honglusi, was established in Luoyang 洛陽, mainly responsible for receiving envoys from different regions and managing their horses, camels, and vehicles. In addition, the Sifangguan was also responsible for the supervision of the international trade.
// 33	The Tang Dynasty 唐朝 inherited the official system of the Sui Dynasty 隋朝, and the tribute affairs still were managed by the Honglusi 鴻臚寺. The horses and camels in the tributes would be assessed by Honglusi and Taipusi 太僕寺 together, and selected the best for review on the court.It was also responsible for managing the trade of foreign livestock in the Chang'an City 長安城 (present-day Xi'an 西安, Shaanxi 陝西). The main livestock imported by the Tang Dynasty were horses, camels, cattle, and sheep. During the reign of Emperor Gaozong of the Tang Dynasty 唐高宗, the places for exotic livestock trade were located in Anshan Fang 安善坊 and Daye Fang 大業坊. These two places were located in the south of Chang'an City, and later the livestock trade was moved to the East Market of Chang'an City due to the problem of transportation.
// 34	"The Tang Dynasty 唐朝 established official pastures on the Longyou 隴右 areas (present-day Gansu Province 甘肅省). In 754, the total number of cattle, horses, sheep, camels and other livestock under the management of Longyou Pastures exceeded 600,000, including 325,792 horses and 563 camels.
// Edward Hetzel Schafer, a famous American sinologist, argues that a large number of nomadic peoples immigrated to China during the Tang Dynasty, including the Turkic peoples, the Tuyuhuns, and the Sogdians. It is probable that these immigrants were employed by the official pastures in large numbers for herding work."
// 35	In the early Tang Dynasty 唐朝, the Turkic Khaganate was the most important threat from the north. There were times of peace and war between the Tang Dynasty and the Turkic tribes. During the period of Emperor Taizong of the Tang Dynasty 唐太宗, the Xueyantuo 薛延陀 tribe once offered 50,000 horses, 10,000 cattle and camels, and 100,000 sheep as tribute, to ask for "heqin 和親" (marriage alliance).
// 36	Kucha, located in present-day Kuche 庫車, Xinjiang 新疆, was one of the ancient kingdoms in Western Regions. Kucha has a seven-day celebration in the New Year. During this period, there were bulls, horses, and camels fightings, and the results will be used to predict the animal husbandry situation in the next year.
// 37	Khotan, located in present-day Hetian 和田, Xinjiang 新疆, was one of the ancient kingdoms in Western Regions. During the period of Emperor Xuanzong of the Tang Dynasty 唐玄宗, the Khotan once sent horses and camels as tributes to the Tang Dynasty.
// 38	Emperor Gaozong of the Tang Dynasty 唐高宗moved 28,200 local families into China after the conquest of Goguryeo, along with 2,900 horses and 60 camels.
// 39	"The use of camels in the Tang Dynasty 唐朝 was mainly concentrated in the north, and people living in the south at that time had few opportunities to see camels.
// Huangfu Duan 皇甫端 once recorded such a story: In 877, Liu Bingren 劉秉仁 was appointed governor of Jiangzhou 江州 (present-day Jiujiang 九江, Jiangxi 江西), and set off from the capital with a camel. When he reached the Mountain Lushan 廬山, he lost the camel because strong wind. The camel was killed by local people who thought it was a monster, as they had never seen such a creature before. They handed the body over to local authorities, and Liu Bingren recognized the body was his lost camel. He was very sad and asked people buried the camel near the river."
// 40	Tang Dynasty 唐朝 literature records a general named Qu Lianghan 曲良翰 who was very good at making roasted camel's hump. It is evident that camels were once a common source of meat for Tang Dynasty troops on the borders.
// 41	During the reign of Emperor Xuanzong of Tang Dynasty 唐玄宗, An Lushan 安祿山 and Shi Siming 史思明 revolted in Fanyang 范陽 (present day Zhuozhou 涿州, Hebei 河北). This event is known as the "An Lushan Rebellion". The rebellion, which lasted for eight years, was a turning point for the Tang Dynasty and the Eastern Continental Silk Road. After capturing the two capitals of Chang'an 長安 (present-day Xi'an 西安, Shaanxi 陝西) and Luoyang 洛陽, the rebels transported the treasures of the imperial palace to Fanyang by camels.
// 42	After the fall of the Tang Dynasty 唐朝, Chinese history once again entered a short period of division known as the "Five Dynasties and Ten Kingdoms 五代十國". At this time, the Khitan people in the north grew up and established the Liao Dynasty 遼朝. In 945, Emperor Taizong of the Liao Dynasty 遼太宗 led his army southward to attack Later Jin 後晉, fighting at Yangcheng 陽城 (present-day Baoding 保定, Hebei 河北). At the crucial moment, a storm burst out and the wind was against the Khitan army. The generals of the Later Jin took the opportunity to lead their knights to charge the Liao's encirclement. As a result, the Liao army was defeated and Emperor Taizong of the Liao Dynasty escaped by riding a white camel.
// 43	After the fall of the Tang Dynasty 唐朝, some Uighurs established political power in Ganzhou 甘州 (present-day Zhangye 張掖, Gansu 甘肅). During the Northern Song Dynasty 北宋, a large number of Uighur merchants in Ganzhou carried goods on camels to trade between the Central Plains and the Western Regions. After the rise of Tangut people and the establishment of the Western Xia Dynasty 西夏, they often robbed the Uighur merchants, therefore the trade along the Eastern Continental Silk Road was severely affected.
// 44	After the fall of the Tang Dynasty 唐朝, some Uighurs moved to the Western Regions and founded the Qocho Kingdom in Gaochang 高昌 (present-day Tulufan 吐魯番, Xinjiang 新疆). During the Northern Song Dynasty 北宋, the Qocho paid tribute for many times. According to historical records, the Qocho sent good horses, dromedary camels and no-hump camels to the Northern Song Dynasty in 1001.
// 45	Kucha, located in present-day Kuche 庫車, Xinjiang 新疆, was one of the ancient kingdoms in Western Regions. According to the historical records, Kucha contributed good horses, dromedary camels, and various kinds of jade to the Song Dynasty 宋朝.
// 46	After receiving the tribute, the Chinese emperor should reward the envoys in return. This behavior is also known as “huici 回賜”.  In 1063, the envoys from Khotan (present-day Hetian 和田, Xinjiang 新疆) asked for the return of the dromedary camel in the tribute because they disliked the lack of “huici”. Therefore, Emperor Yingzong of the Song Dynasty 宋英宗 issued an edict to add more “huici”.
// 47	In 1081, the Byzantine Empire paid tribute to the Song Dynasty 宋朝 with horses, swords, and jewellery. The envoys reported the Emperor that the local specialties were dromedary camels and grapes.
// 48	After the Chanyuan Treaty 澶淵之盟, the Northern Song 北宋 and Liao 遼 established “quechang 榷場” in Xiongzhou 雄州 (present-day Xiongxian 雄縣, Hebei 河北) for trading. The Northern Song Dynasty exported textiles and medicines, and imported cattle, sheep, horses, camels and fur from the Khitan.
// 49	In 1004, the Northern Song 北宋 and the Tangut people set up “quechang 榷場” for trading in Baoanjun 保安軍 (present-day Zhidan 志丹, Shaanxi 陝西). The Northern Song Dynasty used silk and other textiles to trade cattle, sheep, horses and camels.
// 50	The Tangut army was equipped with a large number of horses and camels. They even installed small trebuchets on the camel saddles, and formed a special camel troop.
// 51	"Camels were still rare in southern China during the Northern Song Dynasty 北宋.
// Cai Tao 蔡絛 once recorded such a story: A family from the north arrived in Bobai 博白 with their camels, and was welcomed by the locals. They exhibited the camels and charged gold as a fee. The family made a fortune through the camel show in the coast region. In the end, the camel died from the miasma, and the family grieved like their parents dead."
// 52	"The emperor’s guard of honour in the Yuan Dynasty 元朝 included six elephants setting lotus form seats and nine camels decorated with colour flags. When the emperor was traveling, the camel riders would beat the drums to make their presence felt. Therefore, these camels were also called “tuogu 駝鼓”(camel drums).
// The ""Scroll Painting of Yuan Dynasty Ancestor Go Hunting"" was painted in 1280 by the court painter Liu Guandao 劉貫道. This painting shows the Kublai Khan on his hunting trip with his empress and a group of servants. In the upper part of the painting, we can see a troop of camels carrying supplies for the emperor."
// 53	The Salar people are one of the minority ethnic groups that believe in Islam and mainly live in Xunhua County 循化縣 of Qinghai Province 青海省. Historians speculate that the Salar people may have migrated to China during the Yuan Dynasty 元朝. According to their Islamic legend, two brothers led 18 tribesmen, carrying a white camel and a Quran, who migrated eastward from Samarkand. When they arrived in Qinghai, the white camel was lost. The camel had turned into stone beside a spring when they finally found it. They decided to settle here and named the place "Camel Spring".
// 54	The Ming Dynasty 明朝 established a detailed tribute system. The camels in tributes would be assessed by Huitongguan 會同館 and Dianmusuo 典牧所. The best camels were selected to be displayed to the emperor in the court.  During the Wanli 萬曆 period, the review on court was cancelled, and the camels were directly received by different departments. Usually, the “huici 回賜” for camels were coloured silk and satin.
// 55	Oirat was the Mongol group that emerged from the western part of Mongolia. In 1438, the Ming Dynasty 明朝 opened the horse market in Datong 大同, and traded with Oiratr to import horses and camels.
// 56	Emperor Taizu of the Ming Dynasty 明太祖 once sent envoys to Samarkand several times. It wasn't until 1387 that the Mongols, who ruled the Samarkand, first paid tribute to the Ming Dynasty 明朝. The tribute included fifteen horses and two camels.
// 57	Hami 哈密 was located on the main traffic route connecting Western Regions and the Ming Dynasty 明朝. The other countries in Western Regions would pass through Hami to pay tribute to the Ming. Hami paid tribute to the Ming Dynasty every three to five years, mainly offering jade, horses, and camels.
// 58	Khotan was located in present-day Hetian 和田, Xinjiang 新疆. Khotan merchants often pretended to be tribute envoys and brought a large number of horses, camels, jade, and other goods into China. The travel expenses along the way were reimbursed by the Ming government, and they often sold goods to residents on their way back. The Hongxi Emperor learned that situation later and ordered officials to reprimand these Khotan merchants. After that, the tribute from Khotan gradually declined.
// 59	Zheng He 鄭和 once reached Malacca Sultanate on his ocean voyages. Therefore, the Malacca Sultanate became a tributary of the Ming Dynasty 明朝 and maintained a close relationship for a long time. The ruler of this country paid tribute to the Ming Dynasty with horses and camels several times.
// 60	Mecca is the birthplace of Islam. In 1525, Mecca sent horses and camels to the Ming Dynasty 明朝 as tribute.
// 61	Zheng He 鄭和 once recorded that the people in Mogadishu feed camels with dried fish. This custom even continues today, and historians speculate that this may be the oldest way humans domesticated dromedary camel.
// 62	Barawa, a small country border on Mogadishu, once paid tribute to Ming Dynasty 明朝 several times. In historical records, this country produced Eastern Africian oryx, zebras, rhinos, elephants, camels, and spices.
// 63	Lasa is located in the present-day Mukalla, which is a harbor in Yemen. In historical records of the Ming Dynasty 明朝, there was a species of camel with good stamina in this place. Lasa once paid tribute to the Ming Dynasty four times until the Xuande 宣德 period.
// 64	During the Qing Dynasty 清朝, the Beijing 北京 area mainly relied on coal for heating in winter, and the fuel was mainly transported by camels. These "coal camels" are herded in the Western Mountain of Beijing in summer, and going to the city every day to sell coal in winter. Beijing's "coal camels" could reach 1800 at their peak.
// 65	Many camels in Qing Dynasty 清朝 came from different Mongolian tribes as tribute. In 1638, the Khalka Mongolians paid tribute to Huang Taiji 皇太極 with “jiubai 九白” (nine white), which means one white camel and eight white horses. Since then, the "jiubai" became the tribute standard from Mengolians in Qing Dynasty.
// 66	In 1690, the war between the Qing Dynasty 清朝 and the Galdan was broke out. In the battle of Ulan Butong (present-day Keshiketengqi 克什克騰旗, Nei Menggu 內蒙古), The Galdan army laid a large number of camels together to resist the firepower of the Qing army. Tong Guogang 佟國綱, a general of the Qing Dynast, led troops to charge the Galdan’s camel phalanx but was killed by the shot.
// 67	The Chaidamu Basin 柴達木盆地 in Qinghai 青海 has an arid climate and many deserts. Local herdsmen must rely on camels to travel. The local lakes are mostly salty water, which is suitable for feeding camels. As a result, Qinghai camels became the most famous species during the Qing Dynasty 清朝.
// 68	Wulanchabu 烏蘭察布 was the main trading place between Mongolian caravans and Han people. Mongolian caravans bought cloth and tea bricks from Han people, and mainly sold cattle, sheep, horses, camels, and furs.
// 1	In a site about 4,000 years ago in Yongjing Country 永靖縣, Gansu 甘肅, archaeologists discovered three mandibles of domestic horses. These skeletons are the earliest domestic horse fossils found in China, but there is still a gap of 1,500 years between the earliest known domestic horse fossils. Archaeologists therefore speculate that the technology of raising domestic horses may have been introduced from areas outside China.
// 2	The Yinxu 殷墟 is the site of the royal capital of the late Shang Dynasty 商朝 and can date back 3,300 years ago, located in present-day Anyang 安陽, Henan. A large number of remains of horses and some carriages were unearthed from the Site of Yinxu. After investigation, archaeologists found that horses were mainly used for pulling carts rather than riding. One cart in the Shang Dynasty was usually pulled by two horses. Archaeological results from the Yinxu indicate that the ancient Chinese began to raise horses on a large scale for transportation in the late Shang Dynasty.
// 3	The establishment of Qin State 秦國 was closely related to horses. During the Western Zhou Dynasty 西周, there was a man named Feizi 非子 in Quanqiu 犬丘 (present-day Tianshui 天水, Gansu 甘肅). He loved livestock and was particularly good at raising horses. After King Xiao of Zhou Dynasty 周孝王 learned about it, he ordered Feizi to be in charge of horses in the Weihe River 渭河 Basin. After Feizi's breeding, the number of horses increased a lot. Feizi was rewarded by King Xiao of Zhou Dynasty and became the founder of Qin State.
// 4	During the Zhou Dynasty 周朝, horses had been widely used in warfare, and their main use was to pull chariots in fighting. During the Warring States Period 戰國時期, the Zhao State 趙國 in the north was at war with the surrounding nomadic peoples for a long time. The nomadic people's cavalry were good at horse riding and archery, which left a deep impression on King Wuling of Zhao State 趙武靈王. Therefore, Zhao State implemented military reforms. Under the promotion of King Wuling of Zhao State, Zhao State's cavalry began to imitate the nomads, wear light clothing and practice mounted archery. As a result, the combat effectiveness of Zhao's army was greatly improved, and they quickly defeated the surrounding ethnic minority tribes and expanded Zhao's territory.
// 5	In the site of the Mawangdui Tomb 3 馬王堆三號墓 in Changsha 長沙, Hunan 湖南,  archaeologists discovered a copy of the lost "Xiangma Jing 相馬經" (Standard of Judging Horses). After preliminary research, archaeologists believe that the "Xiangma Jing" may have been written by people from the Chu State 楚國 during the Warring States Period 戰國時期. The excavation of this cultural relic shows that the ancient Chinese already had considerable experience in raising and selecting horses as early as the Eastern Zhou Dynasty 東周. The latest research believes that the "Xiangma Jing" was probably created during the reign of King Xiang of Chu State 楚襄王.
// 6	Qin Shi Huang 秦始皇 was the founder of Qin Dynasty 秦朝 and also was the first emperor in Chinese history. After he accomplished national unification, he promoted the standardization of measurement units across the country. He stipulated that the emperor's vehicle should be drawn by six horses.
// 7	The Shanglin Garden 上林苑 was a royal garden built during the reign of Emperor Wu of the Han Dynasty 漢武帝. A lot of exotic animals were kept in the Shanglin Garden for the Emperor's viewing and entertainment. According to an article written by Sima Xiangru 司馬相如, a literateur of the Western Han Dynasty 西漢, there was a kind of horse named "taotu 騊駼" in the Shanglin Garden. Joseph Lee, a famous British historian, considered that it was probably an untamed wild horse from northern China. 
// 8	Horses were a very important military resource in ancient China. The Western Han Dynasty 西漢 attached great importance to the management of horses and set up several departments responsible for the raising, training and use of horses. These departments were all subordinate to the Taipu Si 太僕寺, the central military organization of the Western Han Dynasty.
// 9	"Huo Qubing 霍去病 was a famous military general of the Western Han Dynasty 西漢. He defeated the Xiongnu 匈奴 six times and made a great contribution to the military expansion of Emperor Wu of the Han Dynasty 漢武帝. As a result of his military victories, the Western Han Dynasty gained control of the Hexi Corridor 河西走廊, laying the foundation for the opening of the Continental Silk Road. In 117 BCE, Huo Qubing died at the age of 24 due to an illness. Huo Qubing Tomb is located in the present-day Xingping 興平, Shaanxi, within one kilometer of the Maoling Mausoleum 茂陵 where Emperor Wu of Han was buried.
// Archaeologists have excavated more than 5,000 cultural relics from the Huo Qubing Tomb, the most iconic of which is the ""Gilded Bronze Horse"". The horse, 76 centimeters long, 62 centimeters high, and weighing 26 kilograms, was modeled after the sweat-blood horse from Dayuan 大宛. It demonstrates the important role of the horses, which were introduced to China from Central Asia, in ancient military affairs."
// 10	Foreign trade was an important way of introducing good horses during the Han Dynasty 漢朝. The Central Plains exported textiles such as silk and hemp in exchange for valuable livestock such as horses and camels. Sang Hongyang 桑弘羊, the finance minister of Emperor Wu of the Han Dynasty 漢武帝, believed that this trade could gain economic benefits and weaken the fighting power of the nomadic peoples (especially the Xiongnu 匈奴). In the process of foreign trade, merchants in the border areas of the Han Dynasty played an important role. For example, there was a merchant named Qiao Tao 橋桃, who brought in livestock such as horses, cattle, and sheep through trade and raised them in Liangzhou 涼州 (present-day Wuwei 武威, Gansu 甘肅). According to historical records, he owned more than 1,000 horses, 2,000 cattle, and 10,000 sheep at the most, which largely contributed to the development of animal husbandry in the northwestern region of the Han Dynasty.
// 11	During the Western Han Dynasty 西漢, the records of horses often had a mythological filter. There was a legend story recorded that Emperor Wu of the Han Dynasty 漢武帝 gained a sacred horse at Wowashui 渥洼水 (located in present-day Dunhuang 敦煌, Gansu 甘肅), and he was so excited that he called the horse "Heavenly Horse". In addition, he wrote a poem to commemorate the event. This poem was recorded in the Shiji 史記 (Records of the Grand Historian) written by Sima Qian 司馬遷. The Han dynasty even believed that horses and dragons were related in some way. Recent historical research suggests that this recognition may have been introduced into China by the primitive beliefs of nomadic peoples in Central Asia via the Continental Silk Road.
// 12	The Xuanquan Zhi 懸泉置 was a post station established during the Western Han Dynasty 西漢, located in Dunhuang 敦煌, Gansu 甘肅, and served as a transportation hub connecting the Han Dynasty with the Western Regions. The main duties of the station included providing food and lodging for officials, delivering official documents and letters, and transporting living goods. Horses played an important role in these tasks. A large number of bamboo slips have been unearthed from the site of Xuanquan Zhi, and the contents have helped us to restore the daily life of horses at the station to a large extent. For example, researchers found a list of horses at the Xuanquan Zhi. This list contains information on more than ten horses, including their names, hair color, sex, age, height, breeder, and manager. In addition, there are many other bamboo slips that contain information on horse breeding standards, medical records, purchase and sale records, and so on. Through these various records, it can be seen that the importance of horses during the Han Dynasty.
// 13	The origin of polo is still debated, but it is undeniable that polo was played in many of the ancient civilizations through the Continental Silk Road, such as Persia, India, and China. In an ancient tomb of the Eastern Han Dynasty 東漢 in Suining 睢寧, Jiangsu 江蘇, six portrait bricks were unearthed depicting riders driving horses while hitting a ball with a club. These bricks are the earliest archaeological evidence of polo ever found, proving that polo was a popular entertainment in China as early as the late 1st and early 2nd centuries.
// 14	The Xiongnu 匈奴 were an ancient nomadic people located on the Mongolian Plateau. Horses were one of the main livestock of the Xiongnu. According to historical records, different Xiongnu tribes even possessed horses with different colors, including white, grey, black, red, and so on. The borders of the Han Dynasty 漢朝 were under great threat with the rise of the Xiongnu. Since the country was still weak, the early Han emperors relied heavily on "heqin 和親" (marriage alliance) to maintain the fragile peace with the Xiongnu. In the interaction with the Xiongnu, horses were introduced to China as tributes. For example,  in 176 BCE, the Modu Chanyu 冒頓單于 wrote a letter requesting a marriage. The Emperor Wen of the Han Dynasty 漢文帝 had to accept the request of Modu Chanyu. Among the  tribute carried by the Xiongnu envoys were camels, horses and carriages.
// 15	In order to defeat the Xiongnu 匈奴, Emperor Wu of the Han Dynasty 漢武帝 focused on the development of the cavalry army. With the popularity of saddles and early stirrups in the Han army, the strength of the Han riders increased dramatically. In 119 BCE, Emperor Wu ordered Wei Qing 衛青 and Huo Qubing 霍去病 to lead 50,000 knights each into the northern Gobi desert to fight against the main force of the Xiongnu. This was the famous "Battle of Mobei 漠北之戰" in Chinese history. The Xiongnu's main army was annihilated and lost control of the Mongolian steppe region since then the Xiongnu gradually declined. Although the Han army won a complete victory, the losses of the Han army were also huge. For this campaign, the Western Han 西漢 invested 140,000 horses, and most of them were lost in the battle. Because of the reduction in the number of warhorses, the Western Han stopped waging war against the Xiongnu for a long period.
// 16	In 119 BCE, Zhang Qian 張騫 visited the Western Regions for a second time and established stable diplomatic relations with many states there. Wusun 烏孫 was one of the states established by nomadic people in the Western Regions at that time. Its territory was roughly located in the border area between the present western part of Xinjiang 新疆, China, as well as Kyrgyzstan and Kazakhstan. In order to establish a marriage alliance with the Western Han Dynasty 西漢, the Wusun offered thousands of fine horses as tribute to the Western Han Dynasty. At first, the Han people called these horses as "Heavenly Horses". Later, when the Han Dynasty obtained better horses from Dayuan 大宛, they changed the name of the Wusun horses to "Horses from the Far West".
// 17	"Dayuan 大宛 was a Hellenistic kingdom in the Western Regions, roughly located in present-day Uzbekistan. The ""Ferghana horse"", also known as the ""Blood Sweating Horse"", was the specialty of this country. Zhang Qian's 張騫 twice journeys to the Western Regions brought back information about Ferghana horses and also introduced medicago, which was the food of Ferghana horse. In order to obtain the Ferghana horses, Emperor Wu of the Han Dynasty 漢武帝 sent Li Guangli 李廣利 to conquer Dayuan. Li Guangli's first expedition failed because of the long distance and the difficulty in supplying, and he led his army back to Dunhuang 敦煌 to recuperate. In the next year, Emperor Wu increased the troops by 60,000 soldiers and the Han army continued to attack Dayuan from Dunhuang. In this military operation, the Han army carried 100,000 cattle, 30,000 horses, and tens of thousands of donkeys and camels to protect their logistics. In the end, the Han army conquered the capital of Dayuan and returned to Dunhuang with 3,000 good horses.
// In 2011, archaeologists discovered the Mingtepe site in the Ferghana Valley. Since 2012, a joint Chinese-Uzbekistani archaeological team has been excavating the site. Through the traces of horses kept on the site, the researchers hypothesized that the site was probably the capital of the Dayuan Kingdom."
// 18	The Xiongnu 匈奴 were very dissatisfied with the alliance between the Han Dynasty 漢朝 and the Wusun 烏孫, so they united with the Cheshi 車師 (present-day Tulufan 吐魯番, Xinjiang 新疆) to attack the Wusun. Wusun prayed for military assistance from the Western Han 西漢 court. In 71 BCE, the Western Han Dynasty sent Chang Hui 常惠 to lead the army of Wusun to fight against the Xiongnu and win the battle, capturing more than 700,000 livestock such as horses, cattle, sheep, camels, etc.  After this battle, the Wusun became the most powerful state in the Western Regions instead of the Xiongnu, and the influence of the Han Dynasty in the Western Regions was further expanded.
// 19	In the early Eastern Han Dynasty 東漢, the Xiongnu 匈奴 tribes fell into civil war and eventually divided into the Southern Xiongnu 南匈奴 and the Northern Xiongnu 北匈奴. The Chanyu 單于 of Southern Xiongnu surrendered to the Eastern Han Dynasty, and Emperor Guangwu of the Han Dynasty 漢光武帝 allowed his tribe to live in Yunzhong County 雲中郡 (present-day Tuoketuo County 托克托縣, Nei Menggu 內蒙古). In 50, Chanyu of the Southern Xiongnu sent two camels and ten horses with patterned fur to the Han Dynasty as tribute. As a reward, the Eastern Han Dynasty gave oranges, longan, and lychees to the Southern Xiongnu.
// 20	After the Southern Xiongnu 南匈奴 joined the Eastern Han Dynasty 東漢, they still retained some customs of the nomadic people. They would engage in recreational activities such as horse racing and camel fighting during their sacrificial ceremonies.
// 21	The Wuhuan 烏桓 were an ancient nomadic people located in northeastern China. In 49, more than 900 members of the Wuhuan Tribe from the Liaoxi 遼西 region (present-day Chaoyang 朝陽, Liaoning 遼寧) joined the Eastern Han Dynasty 東漢. Hao Dan 郝旦, the leader of the tribe, contributed cattle, horses and leopard skins to Emperor Guangwu of the Han Dynasty 漢光武帝.
// 22	The Okjeo was one of the tribes located in the Korean Peninsula during the Han Dynasty 漢朝. In the Hou Hanshu 後漢書 (Book of Later Han), it is recorded that the northern Okjeo had contributed leopards and ponies to the Eastern Han Dynasty 東漢.
// 23	The White Horse Temple, located in Luoyang 洛陽, Henan 河南, is the first Buddhist temple in China. The legend has it that Emperor Ming of the Han Dynasty 漢明帝 had a dream about Buddha and therefore sent envoys to India to seek Buddhist teachings. The envoys of Eastern Han 東漢 met two monks in the Greater Yuezhi Kingdom 大月氏國 (present-day Afghanistan) and saw the Buddhist scriptures and Buddha statues. In  67, these two monks were invited to Luoyang, the capital of the Eastern Han Dynasty, and began to spread Buddhism in China. The following year, Emperor Ming of the Han Dynasty built a Buddhist temple in Luoyang, namely the White Horse Temple. The name of the temple is believed to commemorate the white horse that carried the Buddhist scriptures and statues into China.
// 24	Liangzhou 涼州 (present-day Wuwei 武威, Gansu 甘肅) is located in the Hexi Corridor 河西走廊, which had an important role in the transportation of the Continental Silk Road. During the Wei and Jin Dynasties 魏晉時期, envoys from the Western Regions had to pass through this area to pay tribute to China. Due to its advantageous location, foreign trade flourished in Liangzhou. The merchants from Western Regions often traded with the Han people here, exchanging horses and dogs for silk in China.
// 25	The Former Qin 前秦 was one of the states in the Sixteen Kingdoms period established by Di 氐 people. In 383, Lü Guang 呂光, a general of Former Qin, led an army to conquer Western Regions. He successfully captured Kucha (present-day Kuche 庫車, Xinjiang 新疆) and seized more than 10,000 horses. At this time, the Former Qin Dynasty was in internal turmoil due to the failure of the Battle of Fei River 淝水之戰. Upon his return, Lü Guang established a regime in Liangzhou 涼州 (present-day Wuwei 武威, Gansu 甘肅), also known as Later Liang 後涼.
// 26	In 427, Tuoba Tao 拓跋燾, the Emperor Taiwu of the Northern Wei 北魏太武帝, captured the Tongwancheng 統萬城 (present-day Jingbian 靖邊, Shaanxi 陝西)and destroyed the Hu Xia Dynasty 胡夏. He later set up an official ranch here, recording two million horses and one million camels at its peak.
// 27	In 445, Wan Dugui 萬度歸, a general of the Northern Wei Dynasty 北魏, led 5,000 cavalry to attack the Western Regions by crossing the desert from Liangzhou 涼州 (present-day Wuwei, Gansu). He defeated Karasahr (present-day Yanqi 焉耆, Xinjiang 新疆) and Kucha (present-day Kuche 庫車, Xinjiang) and seized tens of thousands of livestock such as horses and camels. After this battle, the Northern Wei Dynasty completely dominated the eastern section of the Continental Silk Road.
// 28	The Tuyuhun 吐谷渾, a branch of the Xianbei 鮮卑 tribe, migrated from northeastern China to the Qing-Zang Plateau 青藏高原 during the Western Jin Dynasty 西晉. During the Northern and Southern Dynasties 南北朝, the Tuyuhun introduced Persian horses from the Sassanid Empire, which were pastured in the steppe area between the Qinghai Lake 青海湖 and the Qilian Mountains 祁連山.
// 29	During the Northern and Southern Dynasties 南北朝, there were many nomadic tribes in northeastern China, such as the Kumo Xi 庫莫奚 and the Khitan. Both the Kumo Xi and the Khitans contributed horses and furs to the Northern Wei Dynasty 北魏 and traded with the Northern Wei Dynasty for a long time.
// 30	Goguryeo was an ancient kingdom located in the Korean Peninsula, which produced a kind of pony. In order to pay tribute to the Northern Wei Dynasty 北魏, Goguryeo's envoys once spent a large amount of gold and silver to purchase ponies.
// 31	Qimin Khagan 啟民可汗 was the leader of the Eastern Turkic Khaganate. In 607, Qimin Khagan met with Emperor Yang of the Sui Dynasty 隋煬帝 in Yulin County 榆林郡 (present-day Tuoketuo County 托克托縣, Nei Menggu) and offered 3000 horses as his tribute.
// 32	The Sui Dynasy 隋朝 set up Honglusi 鴻臚寺, a diplomatic department in charge of tributes. During the period of Emperor Yang of the Sui Dynasty 隋煬帝, Sifangguan 四方館, the subordinate department of Honglusi, was established in Luoyang 洛陽, mainly responsible for receiving envoys from different regions and managing their horses, camels, and vehicles. In addition, the Sifangguan was also responsible for the supervision of the international trade.
// 33	The Tang Dynasty 唐朝 inherited the official system of the Sui Dynasty 隋朝, and the tribute affairs still were managed by the Honglusi 鴻臚寺. The horses and camels in the tributes would be assessed by Honglusi and Taipusi 太僕寺 together, and selected the best for review on the court.It was also responsible for managing the trade of foreign livestock in the Chang'an City 長安城 (present-day Xi'an 西安, Shaanxi 陝西). The main livestock imported by the Tang Dynasty were horses, camels, cattle, and sheep. During the reign of Emperor Gaozong of the Tang Dynasty 唐高宗, the places for exotic livestock trade were located in Anshan Fang 安善坊 and Daye Fang 大業坊. These two places were located in the south of Chang'an City, and later the livestock trade was moved to the East Market of Chang'an City due to the problem of transportation.
// 34	"The Tang Dynasty 唐朝 established official pastures on the Longyou 隴右 areas (present-day Gansu Province 甘肅省). In 754, the total number of cattle, horses, sheep, camels and other livestock under the management of Longyou Pastures exceeded 600,000, including 325,792 horses and 563 camels.
// Edward Hetzel Schafer, a famous American sinologist, argues that a large number of nomadic peoples immigrated to China during the Tang Dynasty, including the Turkic peoples, the Tuyuhuns, and the Sogdians. It is probable that these immigrants were employed by the official pastures in large numbers for herding work."
// 35	"It was the most popular period of polo in Chinese history during the Tang Dynasty 唐朝. Many of the Tang emperors were polo advocates, and there was a polo ground in the palace of Chang'an City 長安城 (present-day Xi'an 西安, Shaanxi 陝西). In addition to the nobility and the military, the common people of the Tang Dynasty, even women, had the opportunity to participate in this sport. In the collection of the Tang West Market Museum in Xi'an, there is a Bronze Mirror with Polo Pattern from the Tang Dynasty, the main motif of which is a scene of four horsemen playing polo.
// In 1958, archaeologists found a stele in Fuzhou 福州 from the Tang Dynasty. The content of the stele recorded that Pei Ciyuan 裴次元 promoted urban development and the building of a polo ground in Fuzhou. This stele is the representation and evidence of the prosperity of polo culture in the Tang Dynasty."
// 36	In the early Tang Dynasty 唐朝, the Turkic Khaganate was the most important threat from the north. There were times of peace and war between the Tang Dynasty and the Turkic tribes. During the period of Emperor Taizong of the Tang Dynasty 唐太宗, the Xueyantuo 薛延陀 tribe once offered 50,000 horses, 10,000 cattle and camels, and 100,000 sheep as tribute, to ask for "heqin 和親" (marriage alliance).
// 37	Tibetan Empire was an ancient regime located on the Qing-Zang Plateau 青藏高原 during the Tang Dynasty 唐朝. At the beginning of the Tang Dynasty, Tibetan Empire maintained friendly relations with the Tang Dynasty through marriage alliance. During the reign of Emperor Gaozong of the Tang Dynasty 唐高宗, Tibetan Empire once contributed hundreds of horses.
// 38	The Uyghur Khaganate was a nomadic nation that emerged from the northern steppe in the middle of the Tang Dynasty 唐朝. After the An Lushan Rebellion 安史之亂, the Tang Dynasty was weakened and Uyghur Khaganate achieved independence in fact. During the later Tang Dynasty, they sent 10,000 horses to the Tang every year in exchange for large quantities of silk. Because they had helped the Tang Dynasty to pacify the An Lushan Rebellion, this tribute was actually a kind of coercive trade, which put an extreme financial burden on the Tang Dynasty.
// 39	Shule 疏勒 was an ancient kingdom in Western Regions, located in present-day Kash 喀什, Xinjiang 新疆. In 635, Shule envoys paid tribute to the Tang Dynasty 唐朝 with horses. Since then, Shule and the Tang Dynasty maintained stable diplomatic relations.
// 40	Kucha, located in present-day Kuche 庫車, Xinjiang 新疆, was one of the ancient kingdoms in Western Regions. At the beginning of the Tang Dynasty 唐朝, Kucha paid tribute to Tang with horses twice.
// 41	Kangju 康居, located in present-day Samarkand, Uzbekistan, was one of the kingdoms in ancient Western Regions. In 627, the king of Kangju sent his first tribute to the Tang Dynasty 唐朝, which was a good horse from Central Asia. Since then, Kangju and the Tang Dynasty maintained friendly diplomatic relations.
// 42	In 651, the Abbasid Caliphate sent envoys to pay tribute to Chang'an 長安 (presentt-day Xi'an 西安, Shaanxi 陝西), and the two countries had close contacts thereafter. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, the Abbasid Caliphate once contributed horses to the Tang Dynasty.
// 43	Baekje was one of the ancient kingdoms located in the Korean Peninsula. In 621, the King of Baekje sent some ponies to the Tang Dynasty 唐朝 as tribute.
// 44	Silla was an ancient kingdom located in the southern and central parts of the Korean Peninsula. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, the Silla sent an envoy to China to pay tribute to three ponies and two puppies. This envoy eventually stayed in the Tang Dynasty 唐朝 and became an official who managed the tribute.
// 45	The Kurykans were a branch of the Tiele 鐵勒 tribe, which was located on the southern shores of Lake Baikal. During the reign of Emperor Taizong of the Tang Dynasty 唐太宗, the Kurykans contributed ten excellent horses to the Tang Dynasty 唐朝. Emperor Taizong loved these ten horses so much that he named each of them and asked officials to write articles to commemorate the event.
// 46	The "Trade between Tea and Horses" was an ancient trade system in which nomadic peoples used horses to exchange tea with the Han people, and it appeared from the Tang Dynasty 唐朝. During the Song Dynasty 宋朝, it became one of the main ways of importing horses for the Chinese regime. The Song Dynasty exported tea produced in the Sichuan 四川 area and imported horses from nomadic peoples in Yuanzhou 原州 (present-day Guyuan 固原, Ningxia 寧夏) and Weizhou 渭州 (present-day Pingliang 平涼, Gansu 甘肅). The trading sites were set up in the area of Yazhou 雅州 (present-day Ya'an 雅安, Sichuan 四川).
// 47	In 937, the Dali Kingdom 大理國 was established, with the core area of its rule located in present-day Yunnan Province 雲南省.The Song Dynasty 宋朝 had long maintained political and economic relations with the Dali Kingdom. In 1117, Dali paid tribute of 380 horses to the Northern Song Dynasty through Guangxi 廣西. During the Southern Song Dynasty 南宋, Dali also repeatedly asked for horse tribute or horse trade in Guangxi.
// 48	Horses were an important military resource of the Tangut regime. It was recorded that each Tangut soldier could be equipped with one warhorse. In 1004, the Northern Song 北宋 and the Tangut people set up “quechang 榷場” for trading in Baoanjun 保安軍 (present-day Zhidan 志丹, Shaanxi 陝西). The Northern Song Dynasty used silk and other textiles to trade cattle, sheep, horses, and camels.
// 49	The Liao Dynasty 遼朝 was a regime established by the Khitan people, and horses were an important military resource for the Liao. It was recorded that each Khitan soldier was equipped with three warhorses. After the Chanyuan Treaty 澶淵之盟, the Northern Song 北宋 and Liao established “quechang 榷場” in Xiongzhou 雄州 (present-day Xiongxian 雄縣, Hebei 河北) for trading. The Northern Song Dynasty exported textiles and medicines, and imported cattle, sheep, horses, camels and fur from the Khitan.
// 50	The Liao 遼 and Jin 金 Dynasties herded the horses, cattle, sheep, and other livestock by the officials or wealthy families. The people in charge of the herd are also called “qunzi 群子”. The Jin government would assess the “qunzi” according to the number of livestock raised every three years.
// 51	After the fall of the Tang Dynasty 唐朝, some Uighurs moved to the Western Regions and founded the Qocho Kingdom in Gaochang 高昌 (present-day Tulufan 吐魯番, Xinjiang 新疆). During the Northern Song Dynasty 北宋, the Qocho paid tribute for many times. According to historical records, the Qocho sent good horses, dromedary camels and no-hump camels to the Northern Song Dynasty in 1001.
// 52	Kucha, located in present-day Kuche 庫車, Xinjiang 新疆, was one of the ancient kingdoms in Western Regions. According to the historical records, Kucha contributed good horses, dromedary camels, and various kinds of jade to the Song Dynasty 宋朝.
// 53	In 1081, the Byzantine Empire paid tribute to the Song Dynasty 宋朝 with horses, swords, and jewellery. The envoys reported the Emperor that the local specialties were dromedary camels and grapes.
// 54	The Yuan Dynasty 元朝 was a unified Dynasty established by the Mongols. Horses were significant to the Yuan Dynasty. The Yuan Dynasty promoted horse husbandry throughout the nation and set up 14 official horse ranches. The most special one was the Luzhou 廬州 Horse Ranch, which was located in present-day Hefei 合肥, Anhui 安徽. This was the first large-scale horse ranch in the southern region of Chinese history. The horses produced here were mainly for military use in the region of Huai River 淮河.
// 55	The Yuan Dynasty 元朝 set up a large number of posts around the nation, and their responsibilities mainly included transportation of goods, mailing official documents and letters, etc. The most common type of post was the horse station, which was equipped with a large number of horses for transportation.  In the Yuan Dynasty, it was the Liaoyang province 遼陽行省, located in present-day northeastern China, that had the most number of burden horses, with a total of 6,515 horses in its possession.
// 56	The Yuan Dynasty 元朝 set up a large number of posts around the nation, and their responsibilities mainly included transportation of goods, mailing official documents and letters, etc. The horse was still the main livestock for transportation, although in the southern region. During the Yuan Dynasty, the Jiangzhe Province 浙江行省 ruled over the present-day provinces of Jiangsu 江蘇, Zhejiang 浙江, and Fujian 福建. According to historical records, there were 134 horse stations in the province, holding 5,123 burden horses.
// 57	In the 13th century, the European countries felt greatly threatened by the Mongol invasions. In order to maintain peace with the Mongols, the Roman Pope decided to send Italian Franciscan missionaries to the Yuan Dynasty 元朝 for diplomatic purposes. At the end of the 13th century, Franciscan missionaries first visited Beijing and built the first Catholic church in Beijing during the Chinese history. In the mid-14th century, Franciscan missionaries made their last visit to the Yuan Dynasty. They traveled from Assisi, Italy, landed in Quanzhou 泉州, Fujian 福建, and finally arrived in Beijing in 1342. They presented the Emperor Shun of the Yuan Dynasty 元順帝 with an exceptionally large horse as a gift. In Chinese records, the horse was black but had only two white hind legs. The emperor adored the horse and ordered the painter Zhou Lang 周朗 to do a drawing of the horse and himself.
// 58	The Liaodong Horse Market 遼東馬市 was established in present-day Kaiyuan County 開原縣, Liaoning 遼寧, and its main target traders were the Mongolian tribes of the northeastern region. The Ming Dynasty 明朝 mainly exported textiles such as silk and linen in exchange for horses from the Mongolian tribes. These horses were mainly for military use in the Liaodong region 遼東地區. The Liaodong Horse Market was established at the beginning of the Ming Dynasty and has been one of the main ways to introduce horses during the Ming Dynasty.
// 59	The Tea and Horse Trade was one of the main ways to introduce horses in the Ming Dynasty 明朝. Through monopolizing the tea trade, the Ming Dynasty imported horses from the surrounding nomadic peoples. This huge commercial network covered Gansu 甘肅, Shaanxi 陝西, Sichuan 四川, and even Xizang 西藏. The Ming Dynasty established the Chamasi 茶馬司 (Department of Tea and Horse Trade) in Qinzhou 秦州 (present-day Tianshui 天水, Gansu 甘肅), Taozhou 洮州 (present-day Lintan 臨潭, Gansu 甘肅), Hezhou 河州 (present-day Linxia 臨夏, Gansu 甘肅), and Yazhou 雅州 (present-day Ya'an 雅安, Sichuan 四川) to specialize in the management of the Tea and Horse Trade. The Ming Dynasty imported thousands of horses each year, mainly for military use in Sichuan and Shaanxi.
// 60	Oirat was the Mongol group that emerged from the western part of Mongolia. In 1438, the Ming Dynasty 明朝 opened the horse market in Datong 大同, and traded with Oiratr to import horses and camels.
// 61	Emperor Taizu of the Ming Dynasty 明太祖 once sent envoys to Samarkand several times. It wasn't until 1387 that the Mongols, who ruled the Samarkand, first paid tribute to the Ming Dynasty 明朝. The tribute included fifteen horses and two camels.
// 62	Hami 哈密 was located on the main traffic route connecting Western Regions and the Ming Dynasty 明朝. The other countries in Western Regions would pass through Hami to pay tribute to the Ming. Hami paid tribute to the Ming Dynasty every three to five years, mainly offering jade, horses, and camels.
// 63	Khotan was located in present-day Hetian 和田, Xinjiang 新疆. Khotan merchants often pretended to be tribute envoys and brought a large number of horses, camels, jade, and other goods into China. The travel expenses along the way were reimbursed by the Ming government, and they often sold goods to residents on their way back. The Hongxi Emperor learned that situation later and ordered officials to reprimand these Khotan merchants. After that, the tribute from Khotan gradually declined.
// 64	The Joseon was the last ancient dynasty in the Korean Peninsula. It was a tributary of the Ming Dynasty 明朝, and it maintained a good relationship with Ming. Joseon sent thousands of horses to the Ming Dynasty every year for silk. These horses were mainly for military use in the Liaodong region 遼東地區.
// 65	Zheng He 鄭和 once reached Malacca Sultanate on his ocean voyages. Therefore, the Malacca Sultanate became a tributary of the Ming Dynasty 明朝 and maintained a close relationship for a long time. The ruler of this country paid tribute to the Ming Dynasty with horses and camels several times.
// 66	Mecca is the birthplace of Islam. In 1525, Mecca sent horses and camels to the Ming Dynasty 明朝 as tribute.
// 67	Hormuz, the present-day Minab in Iran, was located on the essential route into the Persian Gulf. Zheng He 鄭和 visited this place on several occasions. In 1414, the King of Hormuz visited Beijing 北京 with Zheng He and offered horses to Yongle Emperor 永樂皇帝 as tribute. In addition, lions and giraffes were often the tributes from Hormuz.
// 68	The emperors of the Qing Dynasty 清朝 loved hunting, and the Imperial hunts of the Qing Dynasty were usually held in autumn. The famous missionary Giuseppe Castiglione created a painting called "Qianlong Emperor Hunting Hare", which shows the scene of Emperor Qianlong 乾隆皇帝 hunting wild rabbits through riding. The painting was created in 1755 and is now housed in the Palace Museum in Beijing 北京.
// 69	Many horses in Qing Dynasty 清朝 came from different Mongolian tribes as tribute. In 1638, the Khalka Mongolians paid tribute to Huang Taiji 皇太極 with “jiubai 九白” (nine white), which means one white camel and eight white horses. Since then, the "jiubai" became the tribute standard from Mengolians in Qing Dynasty.
// 70	Wulanchabu 烏蘭察布 was the main trading place between Mongolian caravans and Han people. Mongolian caravans bought cloth and tea bricks from Han people, and mainly sold cattle, sheep, horses, camels, and furs.
// 71	Yili 伊犁 in Xinjiang 新疆 was also an important horse production area in the Qing Dynasty 清朝. Local herdsmen mainly grazed in the foothills of the Tian Shan 天山 to the Barkol Lake area, with an annual production of more than 50,000 horses. The horsehide products from Xinjiang were exported to Russia, Britain, and other European countries.
// 1	1
// 2	In 2004, archaeologists discovered the skeletal remains of a human and a cat in a 9,500-year-old grave on the island of Cyprus. This is the earliest human-cat burial tomb ever discovered. Although there is no way to determine the degree of domestication of the cat, the fact that the cat was properly buried leads researchers to believe that there was a special relationship between the cat and the tomb owner. Perhaps it was the earliest pet cat in human history.
// 3	In the pyramid complex in southern Cairo, archaeologists have discovered a relief with a hieroglyphic label that means "Lord of Cats' City". There are three crouching cats and a standing figure of a male deity on the relief. This piece proves that ancient Egyptians kept domestic cats in large numbers at least 4000 years ago.
// 4	Cats developed into sacred creatures and were worshipped in ancient Egypt. For example, Bastet, the goddess of fertility and the family in ancient Egyptian mythology, was an image of a cat-headed.
// 5	Cats were loved and honored by the ancient Egyptians for catching rats. It was forbidden to export cats for a long time in Ancient Egypt, and any harm to cats would be punished. Ancient Egyptian nobles kept a lot of pet cats. In their tombs, cats were frequently the motif of murals. For example, in the tomb frescoes of Ipuy, a member of the Egyptian royal family, there are two cats, one of which is a kitten playing on Ipuy's lap, while the other is sitting under the seat of Ipuy's wife.
// 6	"In 2013, a Chinese paleontological research team excavated the skeletons of two cats from the Quanhu Village Site 泉護村遺址 in Shaanxi 陝西. Through the investigation of isotopic data, the researchers found that the diet of these two cats included a large amount of millet-based amyloid, which led to the inference that these cats were fed by humans for a long time. The skeletons of these two cats are about 5,300 years old and are also the earliest archaeological evidence of human-cat symbiosis ever found. However, the research team also said that it was uncertain whether this feeding was an exception or a common phenomenon at the time.
// Later, a French research team conducted a skeletal morphological analysis of the skeletons of these two cats and concluded that they were leopard cats. The researchers believe that the leopard cats were once independently domesticated by the Neolithic Chinese, but that they were replaced by the domestic cats that were introduced later."
// 7	In ancient China, written records of cats date back to the Zhou Dynasty 周朝. According to the Liji  禮記 (Book of Rites), a collection of texts describing the social forms, administration, and ceremonial rites of the Zhou Dynasty, people held ritual ceremonies in winter to welcome cats, since they protected agriculture by hunting rats. These cats were probably wildcats. 
// 8	In the pre-Qin period 先秦時期, the "Mao 貓" (cat in Chinese) was more commonly known as "Li 狸" in China. Some scholars believe that "Li" refers specifically to wildcats. During the Warring States period 戰國時期, people attempted to domesticate the local wildcats for deratization.
// 9	Rats were a very serious safety hazard on ancient ocean voyages for stealing food and chewing on the holds. As a result, ancient sailors often carried cats on board. By the 1st century BCE, with the maritime trade and military expansion of the Roman Empire, the cat crossed the Mediterranean Sea to Greece and Rome and continued to spread to other parts of Europe.
// 10	In 2017, a French research team examined the DNA data of a 2,000-year-old cat mummy and extracted genetic fragments of Indian wildcats from it. The researchers speculated that due to the flourishing maritime trade between Rome and India at the time, Egyptian domestic cats spread to India and gave birth to offspring with local Indian wild cats.
// 11	In 2002, Chinese archaeologists discovered a cat skeleton at the site of Han Chang'an City 漢長安城遺址 (present-day Xi'an 西安, Shaanxi 陝西).  The large size of the bone suggests that the cat was well-fed by humans.  Along with the cat skeleton, the skeletons of eleven other animal species were unearthed.  Archaeologists speculate that these animal bones may have been discarded outside the city walls as kitchen garbage.
// 12	The Shuo Yuan 說苑 (Garden of Stories), a collection of stories and anecdotes written by Liu Xiang 劉向 in the Western Han Dynasty 西漢, records that the Han court raised cats for hunting mice. In 1974, the Dabaotai Han tomb 大葆台漢墓 in Beijing 北京 was excavated and later identified as the tomb of Liu Jian 劉建 (73 BCE-45 BCE), an imperial member of the Western Han Dynasty. Archaeologists found a clay jar containing the cat bones in the tomb. The discovery confirmed the custom of keeping cats in the Western Han court.
// 13	The Site of Mawangdui Han Tomb 馬王堆漢墓 is an important discovery in Chinese archaeological history, unearthing numerous burial objects of research value. In Mawangdui Tomb 1, researchers found a painted lacquer dish with cats and turtle patterns, which also be written "Jun Xing Shi 君幸食" which means the blessing of "enjoy your meal". The pattern on this lacquer dish is also the earliest known painting of cats in China.
// 14	The Site of Mozuizi 磨嘴子遺址, located in Wuwei 武威, Gansu 甘肅, was a public tomb group in the Han Dynasty 漢朝. Archeologists found a wooden cat with a simple shape and black strip. The wooden cat is 19 cm in length and 6 cm in height.  Since Wuwei was located in the Hexi Corridor 河西走廊, which was the necessary route between the Central Plains and the Western Regions, some historians believe that this wooden cat may prove that domestic cats were introduced to China through the Continental Silk Road and replaced the native Chinese wildcats.
// 15	During the Southern and Northern Dynasties 南北朝, cats became common domestic animals in northern China. According to the Qimin Yaoshu 齊民要術 (Essential Techniques for the Welfare of the People), an ancient Chinese agricultural text written by Jia Sixie 賈思勰 in the Northern Wei Dynasty 北魏, farmers in northern China carefully cleaned their alcohol cellars before making alcohol and placed cats in the cellars for several days for ridding the rats.
// 16	"Wu Zetian was the only female emperor in Chinese history. Before she became emperor, she was favored by Emperor Gaozong of the Tang Dynasty and expelled and killed Empress Wang and Consort Xiao in a harem struggle. According to historical records, before she was killed, Consort Xiao cursed Wu Zetian to become a mouse in the next life and herself to become a cat, so that she could take revenge on Wu Zetian. As a result, Wu Zetian forbade the keeping of cats in the harem.
// However, perhaps because she loved cats so much, Wu Zetian lifted the ban on keeping cats after she became emperor. She once displayed her cat and parrot in the court, and the cat suddenly went berserk and bit the parrot to death in front of many officials. This incident was also interpreted by later scholars as a harbinger of the end of Wu Zetian's reign.
// These accounts indicate that cats were very popular with the royals of the Tang Dynasty and that keeping pet cats was very common in the Tang court."
// 17	Cat breeding was also popular among the public in the Tang Dynasty 唐朝, and people also bred local species. For example, the Chuzhou cat 楚州貓 (located in present-day Huai'an 淮安, Jiangsu 江蘇) was a well-known species with brown stripes. Merchants in the Tang Dynasty also had the custom of keeping cats, and it was said that cats could attract customers by washing their faces. This legend may have been the prototype of the later "lucky cat".
// 18	In the Tang Dynasty 唐朝, both cats and dogs were popular domestic animals, and the relationship between cats and dogs was gradually gaining attention. During the Tang Dynasty, there were records of female cats and female dogs nursing each other's kids, and the emperor of the Tang Dynasty considered this situation to be a sign of the owner's noble virtue. For example, the dog in Li Jiongxiu's 李迥秀 family nursed his neighbor's kitten. The Tang emperor believed that this was due to Li's filial piety and awarded him with a silk banner of honor.
// 19	"With the development of the commodity economy in the Song Dynasty 宋朝, the pet market was also very prosperous. Every month in Bianjing 汴京 (present-day Kaifeng 開封, Henan 河南), the capital of the Northern Song Dynasty 北宋, there were markets devoted to the sale of animals, including cats, dogs, and other pets. Song people were extremely fond of cats and were required to prepare ""gifts"" to purchase or adopt cats. The famous poet Huang Tingjian 黃庭堅 once wrote a poem to record his adoption of a newborn kitty from a friend, and his ""gifts"" for his friend were some fish.
// The Xuanhe Huapu 宣和畫譜 (Xuanhe Catalogue of Paintings), a palace catalog of paintings in the Northern Song Dynasty, records a number of painters who were good at drawing cats, including Li Aizhi 李靄之, Wang Ning 王凝, and He Zunshi 何尊師. Emperor Huizong of the Song Dynasty 宋徽宗 himself was an expert cat painter, and his painting ""Album of Cats and Butterflies"" is now in the National Palace Museum in Taipei. ""Cats and butterflies"" was a common theme in ancient Chinese paintings, representing the wish of Chinese people for longevity."
// 20	The close relationship between people and cats in the Song Dynasty 宋朝 is also reflected in the funerary culture. Cats appear on many of the murals in Song tombs, mostly showing the daily lives of people and cats. It is evidence that the "Serving Tea Picture" was excavated from the Song tomb in Xingyang 滎陽, Henan 河南.
// 21	"In Lin'an 臨安 (present-day Hangzhou 杭州, Zhejiang 浙江), the capital of the Southern Song Dynasty 南宋, the pet industry was more prosperous and the goods for pets were more varied. In addition to the multiple food and houses for pets, some merchants also offered haircutting services for dogs and cats. 
// The officials and merchants in Lin'an were particularly fond of an exotic species called the ""lion cat"". ""Lion cats"" have long and dense fur, white or yellow in color, and cannot hunt mice. It is presumed to be an early species of Persian cat that was introduced to China through the maritime trade."
// 22	During the Southern Song Dynasty 南宋, the unique pet custom has been developed in Lin'an 臨安 (present-day Hangzhou 杭州, Zhejiang 浙江). On the 6th day of the 6th lunar month, people took their cats and dogs to the river to bathe. On the twenty-fifth day of the twelfth lunar month, people make worshiped the Kitchen God and share red bean porridge with cats and dogs.
// 23	Lu You 陸遊, a famous poet of the Southern Song Dynasty 南宋, was particularly fond of cats and wrote a large number of poems about them while he was an official in Sichuan 四川. Lu You used salt as the "gifts" for cats purchased and the custom of using salt continued until the Ming and Qing Dynasties 明清時期. It is believed that the "salt" may represent the fated relationship between the owner and the cat.
// 24	During the Southern Song Dynasty 南宋, Haizhou 海州 (present-day Lianyungang 連雲港, Jiangsu 江蘇) was well known for breeding cats. The species was recorded in Southern Song literature as the "Haizhou Cat".
// 25	In the Fuzhou 福州 area of the Southern Song Dynasty 南宋, there was a wild cat called the "Fragrant Beaver", which was longer than a domestic cat and left a fragrant scent when it walked in the jungle. They were perhaps the "civet", the wild animals in Southern China.
// 26	The Huihui 回回 people were Muslims who migrated to China from Arabia or Persia during the Yuan Dynasty 元朝. The Mongol rulers granted many privileges to the Huihui merchants, especially the management of foreign trading venues. The Huihui women in the Yuan Dynasty frequently mashed up garden balsams to colour their cats and dogs, which was recorded by the scholars of Hangzhou.
// 27	In the Yuan Dynasty 元朝, people were required to prepare a "Na Mao Qi 納貓契" (Cat Contract) when buying or adopting a cat, which means that a contract was made between humans and cats. The contract included the name and portrait of the cat and the prayer that the cat would not run away from home under the witness of the gods. This custom may started from the Southern Song Dynasty 南宋 and became very popular during the Yuan Dynasty.
// 28	The almanac was already very popular in the Yuan Dynasty 元朝, and it was necessary to check the auspicious days in the almanac before buying or adopting a cat. The almanac also recorded the method of selecting cats: Yuan people believed that cats with long bodies and tails were good at catching mice, and thought that solid-colored cats were better than cats with patterns. Not only that, there were also a few tips on how to raise cats in the almanac. For example, the cat would use the mound as a toilet if you insert the chopsticks with cat excrement on the mound, similar to the modern cat litter. Also, in order for cats and dogs to live in harmony, the owner should lead the cat and dog to sacrifice to the Kitchen God on the first day the cat arrives home.
// 29	The majority of Thais believe in Buddhism. In their beliefs, the body of a cat was a temporary resting place for the soul, so cats were well-treated in Thailand. The Tamra Maeo (Cat-Book Poems), was written in Thailand between the 13th century and 17 century. It records 17 “auspicious” breeds of cats and 6 “inauspicious”. The drawings in this book indicate that Siamese cats were already being raised in Thailand at this time.
// 30	After the discovery of the New World by Columbus, there were increased ocean voyages between Europe and the Americas. Cats became important animals on these voyages due to their ability to catch mice. Around the 16th century, domestic cats arrived in the Americas on the cargo ships of European colonizers.
// 31	"During the Ming Dynasty 明朝, there was a cat house in the imperial palace, which was responsible for raising cats and feeding them up to 720 jins 斤 of meat each year. The cats favored by the emperor were also given official positions, and these cats were the ancestors of the ""Forbidden City cats"" we can see today.
// A lot of Ming emperors were famous cat lovers. Xuande Emperor 宣德皇帝 painted many cat paintings, several of which are now in the National Palace Museum in Taipei, such as the painting ""Cats Below Flowers"", created in 1426. The favorite cat of the Jiajing Emperor 嘉靖皇帝 was a lion cat, which often accompanied him quietly. Jiajing Emperor was very sorrowful when the cat died and asked his officials to write eulogies for the cat. Yuan Wei 袁煒 was appreciated by Jiajing because his eulogy included the phrase ""the lion cat became a dragon after its death"". Therefore, the tomb of the lion cat was named the ""Dragon Tomb"".
// Influenced by this trend, it was also popular for Ming eunuchs to keep cats, especially the large Persian cats."
// 32	The king of Aden greatly respected the Ming Dynasty 明朝 and traded with Zheng He 鄭和 for a large number of treasures. Zheng He's fleet brought back giraffes, lions, leopards, spotted cats, ostriches and other animals from Aden. Among them, the spotted cat may be the serval in Africa.
// 33	The Qing Dynasty 清朝 continued the tradition of keeping cats in the palace during the Ming Dynasty 明朝, and the main species raised was the lion cat. In 1851, a eunuch named Bai Sanxi 白三喜 and his nephew conspired to steal lion cats from the imperial palace and were sentenced to heavy imprisonment. This event was published in the gazette at the time.
// 34	After being introduced into China in the Song Dynasty 宋朝, the lion cat (Persian cat) has become a specialty in North China in the Ming and Qing Dynasties 明清時期 after many years of breeding. The Hui people 回民 in the Linqing 臨清 area of Shandong 山東 also mixed the lion cat with the local leopard cat to breed a bew species, the well-known Linqing lion cat 臨清獅貓.
// 35	During the Qing Dynasty 清朝, there were the four-eared cats in Jianzhou 簡州, Sichuan 四川. These cats had overlapping auricles that looked like four ears. In fact, this was an accessory auricle caused by abnormal development. These cats were loved by officials in Qing Dynasty for their ability to catch mice.
// 36	The Japanese Bobtail is a special breed of domestic cat with an unusually short tail. Because its tail is extremely short and cannot catch mice, it has become a favorite pet of the Japanese. During the Qing Dynasty 清朝, the Japanese Bobtail was introduced to Guangdong 廣東 from the Ryukyu. 
// 37	Snake soup once was very popular in Guangdong 廣東. During the Qing Dynasty 清朝, people in Guangdong stewed snake meat and cat meat together in a soup, called "dragon and tiger dish".
// 38	In the 19th century, in order to reduce the trade deficit with China, British merchants dumped opium in China. A large number of Chinese people abused opium, which became a serious social problem in the late Qing Dynasty 清朝. There were even records of pet cats being addicted to opium following their owners.
// 1	Dog collars probably appeared shortly after dogs were domesticated. A golden pendant of a dog with a collar was found at a site of Uruk dated to 3300 BCE. This discovery was regarded as evidence that the Sumerians invented and used dog collars.
// 2	The ancient Egyptian domestic dog was probably introduced from Mesopotamia and was used as a pet by the ancient Egyptian nobility at the time of its introduction. Some owners would mummify their beloved dogs after they died.
// 3	In ancient Greece, dogs were more often used for hunting or guarding the home, as evidenced by ancient Greek mythology. The Artemis kept hunting dogs since she was the goddess of the moon and hunting. The Cerberus was the figure of a three-headed dog who guarded the gate of Hades. 
// 4	In 2009, a team of Chinese and Swedish researchers studied the mitochondrial DNA data of 1,543 dogs and concluded that today's domestic dogs around the world were domesticated from East Asian wolves. This domestication process began 16,300 years ago south of the lower Yangtze River and may have developed in parallel with the origin of rice agriculture.
// 5	Dogs as burial sacrifices were very popular in the funeral customs of the Late Shang Dynasty 商朝. Archaeologists studying dog skeletons excavated from the site of Yinxu in Anyang, Henan Province, found that most of the 84 individuals whose ages could be detected were less than one year old. This finding illustrates the Shang people's preference for using young dogs as burial sacrifices.
// 6	The ritual system of the Zhou Dynasty 周朝 had strict rules for the daily life of different classes of nobles. For example, a dog kept by a noble could not be discarded at will after death but should be wrapped in a carriage cover and buried. It is said that after the death of Confucius' dog, Confucius had to bury his dog with a roll of straw mat because he was too poor to have a carriage.
// 7	The domestication of dogs by nomadic peoples in northern China was common during the Neolithic period, probably originally for food purposes. Some historians believe that the Quanrong 犬戎 people was named for their dog breeding. During the Warring States period 戰國時期, Xunzi 荀子 recorded that the people of the Central Plains introduced dogs for breeding from the north.
// 8	During the Warring States period 戰國時期, the people of the Qin State 秦國 would hang the bodies of dogs outside the four gates of the capital city of Yong 雍城 in the summer. This custom began during the reign of Duke De of Qin 秦德公, as the Qin people believed that dead dogs could help them get rid of diseases in the summer.
// 9	The ancient Romans kept large dogs as military dogs or guards, especially large black dogs because they believed that black dogs could frighten intruders. Decorative paintings of black dogs are also common in Roman sites, for example, the Pompeii guard dog mosaic.
// 10	Dogs were adored by the royal family as pets during the Han Dynasty 漢朝. There was a Dog Palace in the Shanglin Garden 上林苑, the royal garden of Emperor Wu of the Han Dynasty 漢武帝, which was supposed to be a place where dogs were kept for the emperor's entertainment.
// 11	Emperor Ling of the Han Dynasty 漢靈帝 was also a well-known dog lover. According to historical records, he dressed his dogs in top hats and ribbons, the same as the ministers' costumes. These may be the earliest pet dog clothes in history.
// 12	Although the natural enemy of rats is now commonly thought to be cats, dogs were the main force responsible for catching rats during the Han Dynasty 漢朝, when domestic cats were not yet common in China. A portrait brick unearthed in a Han Dynasty tomb in the Sichuan 四川 depicts a strong dog biting a rat. Archaeologists believe that the discovery of this brick near the tomb's door may have meant that the dog was expected to guard the peace of the tomb.
// 13	Wuhuan 烏桓 was one of the ancient nomadic peoples of northern China. According to the funeral customs of the Wuhuan people, a dog should be selected to be cremated with the deceased. The Wuhuan believed that the dog could lead the soul of the deceased back to the Chishan 赤山 (Red Mountain).
// 14	Jibin 罽賓 was an ancient kingdom in Western Regions, probably located in todays valley of the Kabul River. During the second journey to the Western Regions, Zhang Qian 張騫 sent envoys to this place, and since then, the Jibin merchants participated in the commercial network of the Continental Silk Road. It is recorded that a large dog was produced in Jibin, which may be the ancestor of today's Tibetan Mastiff.
// 15	During the Western Jin Dynasty 西晉, many dogs from Western Regions were introduced to China as tributes. Fu Xuan 傅玄, a literary scholar of the early Jin Dynasty, wrote an ode to praise the excellent  body of tribute dogs, which is "Zougou Fu 走狗賦" (Ode of Running Dogs). At that time, the envoys had to travel through Liangzhou 涼州 (present-day Wuwei 武威, Gansu 甘肅) to arrive in the Central Plains. Due to its advantageous location, foreign trade flourished in Liangzhou. The merchants from Western Regions often traded with the Han people here, exchanging horses and dogs for silk in China.
// 16	Lu Ji 陸機 was a famous literatus of the Western Jin Dynasty 西晉. A legend says that when he was an official in Luoyang 洛陽, he had a yellow dog named "Huang Er 黃耳" (Yellow Ear). The Huang Er traveled between Luoyang and Wujun (present-day Suzhou, Jiangsu) many times to deliver letters for him. Therefore, the phrase "yellow dog" became an allusion in the Chinese language, meaning family letters.
// 17	During the Southern and Northern Dynasties 南北朝, dogs became  common domestic animals in northern China. According to the Qimin Yaoshu 齊民要術 (Essential Techniques for the Welfare of the People), an ancient Chinese agricultural text written by Jia Sixie 賈思勰 in the Northern Wei Dynasty 北魏, farmers in northern China made a kind of meat sauce with dog meat, wheat, and liquor as ingredients.
// 18	"The ""Persian dog"" was first recorded in the Southern and Northern Dynasties 南北朝, and was a large, aggressive hunting dog. Historians speculate that the Persian dog may be the Saluki dog from the Middle East, which was introduced to China by the Sogdians through the Continental Silk Road.
// Persian dogs were adored by the nobility of Northern Qi 北齊. Gao Chuo 高綽, a member of the royal family of Northern Qi, was a famous Persian dog lover in history. He kept many Persian dogs in Jin Yang 晉陽 (present-day Taiyuan 太原, Shanxi 山西) when he was a teenager, and his greatest hobby was watching his Persian dogs bite living people. He was eventually executed by the Emperor of Northern Qi for his cruelty."
// 19	"In 1971, archaeologists discovered nine lithographs in a Northern Qi 北齊 tomb in Qingzhou 青州, Shandong 山東, in which the bird and dog motifs of the Zoroastrian tradition appeared. Zoroastrianism was the religion followed by the Sogdians, and dogs played an important role in the funeral traditions of Zoroastrianism. The Sogdians believed that dogs could help the souls of the dead to pass the judgment and to ascend to heaven. The deceased must undergo a ceremony of ""Sagdid"" (glance of dog) before they can be buried.
// However, archaeologists are still unable to confirm the identity of the tomb owner. Some scholars have speculated that the tomb owner was not a Sogdian, but a Xianbei 鮮卑 or Han 漢 person, as shown on the stone carvings. If this is true, it would suggest that with the migration of a large number of Sogdian merchants to China during the Southern and Northern Dynasties, their culture had an impact on the funeral customs of the Han people in Northern China."
// 20	"In 2004, a tomb of Sodians was unearthed in Xi'an 西安, namely the famous Shi Jun Tomb in Northern Zhou 北周史君墓. Through the inscriptions and carvings in the tomb, we can reconstruct the life of this Shi Jun: The Sogdians were known for their tradition of trade, males were required to leave home when they grew up to do business, and Shi Jun was no exception. He led a group of camels to China for trade, and on the way he met his love, Kang Shi 康氏, who was also a Sogdian. After they got married, they arrived at Liangzhou 涼州 (present-day Wuwei 武威, Gansu 甘肅) together. In Liangzhou, Shi Jun became an official of the Northern Zhou Dynasty 北周 by gaining the appreciation of the emperor. Later, Shi's family moved to Chang'an 長安 (now Xi'an 西安, Shaanxi 陝西). Shi Jun died at the age of 86, and his wife died a few months later. Their three sons decided to bury them together in what is now Shi Jun Tomb.
// On the stone carving in the tomb, we can see a scene of dogs, oxen, and other animals guiding a carriage across a bridge. Actually, this is a representation of the funeral customs of the Zoroastrian tradition. The Sogdians believed that dogs could help the souls of the dead to pass the judgment and to ascend to heaven. The deceased must undergo a ceremony of ""Sagdid"" (glance of dog) before they can be buried."
// 21	After the Northern Zhou Dynasty 北周 annexed the Northern Qi Dynasty 北齊, the musicians created a dance song called "An Yue 安樂" (Peace Music) to celebrate. Eighty dancers were allowed to wear dog-head masks and leather hats, the image of the dancers was an imitation of the nomads of the time.
// 22	"Emperor Yang of the Sui Dynasty 隋煬帝 sent Wei Jie 韋節 and Du Xingman 杜行滿 as envoys to the Western Regions. After Wei Jie returned, he wrote a book called Xi Fan Ji 西藩記 (Records of Western Foreigns), in which he recorded a funeral custom in the State of Kang 康國  (present-day Samarkand, Uzbekistan). The State of Kang has a special yard for the disposal of dead bodies. The family of the deceased would bring in the body, and after the dogs in the yard had chewed it up, the remaining bones would be brought back to the family for burial.
// Some historians believe that this description is different from the Zoroastrian ritual of ""sagdid"" but closer to the Buddhist ritual of ""sky burial"", which was probably a misunderstanding of Wei Jie. However, some other scholars believe that this was the funeral tradition in Persia."
// 23	In 619, a pair of small, long-haired dogs from the Hrom was sent to the Tang Dynasty 唐朝 as tributes from the Gaochang Kingdom 高昌國 (present-day Tutufan 吐魯番, Xinjiang 新疆). The Hrom was the name used by the ancient Chinese to refer to the Byzantine Empire. The "dog of Hrom" or "Rome dog" became the pet of the Tang court once it was introduced to China. The scene of the dog playing with the palace ladies can be seen in the painting "Court Ladies Adorning Their Hair with Flowers" by the Tang Dynasty painter Zhou Fang 周昉.
// 24	The State of Kang 康國  (present-day Samarkand, Uzbekistan) also frequently paid tribute to the Tang Dynasty 唐朝 for small, long-haired dogs, which might have been a type of "Rome dog". The "Kang dogs" were kept as pets in the Tang court, for example, Imperial Consort Yang 楊貴妃 was particularly in love with "Kang dogs". It is said that Emperor Xuanzong of the Tang Dynasty 唐玄宗 once played Go with his younger brother, and when Emperor Xuanzong was going to lose, Yang put a "Kang dog" on the Go board. The dog messed up the game and relieved the embarrassment of the Emperor's defeat.
// 25	The Sassanid Empire, also known as the Second Persian Empire, ruled West Asia for four centuries. According to historical records in Tang Dynasty 唐朝, Persia produced a kind of dog called the "golden dog", which is the "Persian dog" that was introduced to China during the Northern and Southern Dynasties 南北朝.
// 26	The State of An 安國 was one of the states in  ancient Western Regions, located in present-day Bukhara, Uzbekistan. During the period of Wu Zetian 武則天, the State of An paid tribute to China with a two-headed dog.
// 27	Tashkent (meaning "stone city" in Turkic) was one of the states in ancient Western Regions, which is the capital of present-day Uzbekistan. Emperor Xuanzong of the Tang Dynasty once sent envoys to Tashkent to buy dogs and other animals.
// 28	Silla was an ancient kingdom located in the southern and central parts of the Korean Peninsula. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, the Silla sent an envoy to China to pay tribute to three ponies and two puppies. This envoy eventually stayed in the Tang Dynasty 唐朝 and became an official who managed the tribute.
// 29	The Shiwei 室韋 people were ancient Mongolian tribes that originated from the Daxinganling 大興安嶺 region and had close relations with the Khitan people. According to the records of the Tang Dynasty 唐朝, the Shiwei people raised dogs and pigs as a source of meat and used the skins of dogs and pigs as raw materials for their clothing.
// 30	Taiyuan 太原 has been inhabited by monks since the Southern and Northern Dynasties 南北朝, and the monks there transported the bodies to the countryside to feed the wild animals according to the custom of "sky burial". In the long term, a large number of wild dogs were attracted to the countryside of Taiyuan, posing a great threat to local security. In order to solve this problem, the Tang Dynasty 唐朝 deployed its army to hunt wild dogs and banned "sky burials" for Taiyuan monks.
// 31	In the Tang Dynasty 唐朝, both cats and dogs were popular domestic animals, and the relationship between cats and dogs was gradually gaining attention. During the Tang Dynasty, there were records of female cats and female dogs nursing each other's kids, and the emperor of the Tang Dynasty considered this situation to be a sign of the owner's noble virtue. For example, the dog in Li Jiongxiu's 李迥秀 family nursed his neighbor's kitten. The Tang emperor believed that this was due to Li's filial piety and awarded him with a silk banner of honor.
// 32	"With the development of the commodity economy in the Song Dynasty 宋朝, the pet market was also very prosperous. Every month in Bianjing 汴京 (present-day Kaifeng 開封, Henan 河南), the capital of the Northern Song Dynasty 北宋, there were markets devoted to the sale of animals, including cats, dogs, and other pets.
// While the dogs raised by the royal family in the Song Dynasty were mainly hunting dogs. Historical records show that Emperor Taizu of the Song Dynasty 宋太祖 used to hunt wild rabbits with his dogs many times."
// 33	In Lin'an 臨安 (present-day Hangzhou 杭州, Zhejiang 浙江), the capital of the Southern Song Dynasty 南宋, the pet industry was more prosperous and the goods for pets were more varied. In addition to the multiple food and houses for pets, some merchants also offered haircutting services for dogs and cats. 
// 34	During the Southern Song Dynasty 南宋, the unique pet custom has been developed in Lin'an 臨安 (present-day Hangzhou 杭州, Zhejiang 浙江). On the 6th day of the 6th lunar month, people took their cats and dogs to the river to bathe. On the twenty-fifth day of the twelfth lunar month, people make worshiped the Kitchen God and share red bean porridge with cats and dogs.
// 35	During the Southern Song Dynasty 南宋, Caozhou 曹州 (present-day Heze 菏澤, Shandong 山東) was well known for breeding cdogs. The species was recorded in Southern Song literature as the "Caozhou Dog".
// 36	Cave 17 of the Mogao Caves at Dunhuang 敦煌莫高窟, is also known as the Library Cave. Archaeologists found a copy of the "Book of Funerals" in the cave, which illustrates funeral customs from the Five Dynasties 五代 to the Northern Song Dynasty 北宋. It is written that the chicken has the function of timing, and the dog has the function of warning, which can make the soul of the tomb owner peaceful.
// 37	The Song Dynasty 宋朝 was threatened by nomadic regimes in the north, such as the Liao Dynasty 遼朝 established by the Khitan and the Jin Dynasty 金朝 established by the Jurchen. Both the Liao and Jin armies had a large number of military dogs, which were responsible for guarding the barracks at night so that the Song army had no chance to sneak up on the Liao and Jin armies.
// 38	Uriankhai was the collective name for the tribes of the northern forests, located in the present-day Siberian region. Uriankhai once paid a dog as a tribute to the Liao Dynasty 遼朝.
// 39	Sheepdogs have been good helpers for human herding since ancient times. In The Aberdeen Bestiary, now housed in the library of the University of Aberdeen, there is already a picture of dogs helping people manage sheep, indicating that the use of sheepdogs was widespread in Scotland in the 13th century.
// 40	The Mongols, rulers of the Yuan Dynasty 元朝, retained many of the customs of the nomadic peoples of the north. In the Dadu 大都 (present-day Beijing 北京), there was an annual winter event of "shooting grass dog". Grass Dog was a dog-shaped arrow target made of dry grass. Members of the royal family and nobility shot arrows at the grass dog until it was damaged. After that, Mongolian witches perform rituals to pray for the removal of diseases and calamities.
// 41	Hunting was a common entertainment activity for Mongolian nobles, and dogs were essential for hunting activities. The people in Yuan Dynasty 元朝 had extensive experience in using hunting dogs, for example, they could not use hunting dogs to hunt foxes because the stench of foxes would damage the dogs' sense of smell and eyesight.
// 42	The Daxinganling 大興安嶺 region was under the jurisdiction of Liaoyang Province 遼陽行省 during the Yuan Dynasty 元朝. The climate was freezing and the roads were covered with snow for most of the year, so the local traffic relied heavily on sled dogs. The Yuan Dynasty developed a special kind of post: the dog station. The dog station provided a sled pulled by four dogs to safely and efficiently transport official documents, letters, and household goods across the snowy plains. According to historical records, there were 15 dog stations in the Liaoyang province, where 3,000 dogs were kept.
// 43	The Huihui 回回 people were Muslims who migrated to China from Arabia or Persia during the Yuan Dynasty 元朝. The Mongol rulers granted many privileges to the Huihui merchants, especially the management of foreign trading venues. The Huihui women in the Yuan Dynasty frequently mashed up garden balsams to colour their cats and dogs, which was recorded by the scholars of Hangzhou.
// 44	The "Rome dog" was introduced to China from Europe during the Tang Dynasty 唐朝, and after centuries of cultivation, it became the specialty of the Beijing 北京 area during the Ming Dynasty. It's said that the pugs were bred from the "Rome dog". Eunuchs in the Ming Dynasty 明朝 were extremely fond of keeping these puppies and even carried them in their sleeves.
// 45	Hami 哈密 was located on the main traffic route connecting Western Regions and the Ming Dynasty 明朝. The other countries in Western Regions would pass through Hami to pay tribute to the Ming. In 1524, envoys from the Western Regions paid dogs as tributes to Ming Dynasty via Hami.
// 46	During the Jiajing 嘉靖 and Wanli 萬曆 periods, the Ottoman Empire paid tribute to the Ming Dynasty 明朝 on several occasions with animals such as dogs, lions, and rhinos.
// 47	According to texts in Ming Dynasty 明朝, dogs from the British Isles were so aggressive that they were capable of hunting lions and tigers.
// 48	Small dogs are one of the favorite subjects of European painters, and we can see the close relationship between small dogs as pets and humans in a large number of paintings. For example, a Bruxelles Grimfern dog is shown in the oil painting "The Arnolfini Portrait" by Dutch painter Jan van Eyck. This puppy may symbolize the loyalty of the Bruges merchant Arnolfini and his wife to their marriage.
// 49	"The Yongzheng Emperor 雍正 was the most well-known dog lover among the Qing Dynasty 清朝 emperors. He had two pet dogs, and there were more than a dozen orders in the Qing Palace records to make clothes for the two dogs.
// Empress Dowager Cixi 慈禧太后 loved to keep pugs, and it is said that she often exchanged dog-keeping experiences with the wives of foreign ambassadors."
// 50	The emperors of the Qing Dynasty 清朝 loved hunting, and the Imperial hunts of the Qing Dynasty were usually held in autumn. Therefore, the hound was also a large number of animals kept in the Qing palace. The famous missionaries Giuseppe Castiglione and Ignatius Sichelbart have each created paintings of the ten hunting dogs of the Qianlong Emperor 乾隆, namely the "Ten Prized Dogs". These two editions of the "Ten Prized Dogs" are in the collections of the National Palace Museum in Taipei and the Palace Museum in Beijing 北京. According to the text, most of Qianlong's dogs were tributes from Xizang 西藏, Mongolia, and Europe.
// 51	Hongs 行 were companies licensed to trade with Western merchants in the Qing Dynasty 清朝. During the Tongzhi 同治 period, a hong in Ningbo 寧波 imported a large Western dog that loved to catch mice and could catch dozens of them every day.
// 52	Mongolian herdsmen in Qing Dynasty 清朝 treasured their livestock, and dogs are the most valuable of them all. Mongolian herding dogs were strong and fierce to drive cattle and sheep on the one hand, and to protect them from thieves on the other hand.
// 53	During Qing Dynasty, export porcelains were very popular in Europe and America. European and American merchants would even come to Guangzhou 廣州 to order the porcelain patterns they wanted. Hounds were one of the subjects of export porcelain in the Qing Dynasty, and related collections are still very popular at international auctions.
// 1	In China, there are many kinds of native hares. Ancient Chinese people started hunting rabbits for food at a very early stage. There were poems about hunting rabbits and cooking rabbit meat in the Shijing 詩經 (Classic of Poetry), a pre-Qin 先秦 classical text.
// 2	Ancient Chinese believed that white rabbits and toads were living on the moon. Therefore, the "white rabbit" is a symbol of the moon in Chinese culture. For example, the images of rabbits and toads in two T-shaped silk paintings of the Han Dynasty 漢朝 excavated from the Mawangdui Han Tombs 馬王堆漢墓 in Changsha 長沙 are representations of the moon.
// 3	Although there are native distributions of hares in China, the domestic rabbit was not domesticated by the ancient Chinese. Modern biological evidence shows that the domestic rabbit was domesticated from the European rabbit in the Mediterranean. Historians generally agree that French monks first tamed rabbits for food. By the 16th century, the domestication of rabbits in Europe was accomplished. At that time, Portuguese merchants smuggled rabbits to the Fujian 福建 area of the Ming Dynasty 明朝 through the maritime trade.
// 1	The yaks are unique creatures of the Qing-Zang Plateau 青藏高原 and the Himalayas. Today's biologists have not yet recovered the process of domestication. Some scholars suggest that the domestication of yak originated in the eastern part of the Qing-Zang Plateau 7,300 years ago.
// 2	The Ze people 筰人, one of the minority ethnic groups in the southwestern region of China during the Qin 秦 and Han Dynasties 漢朝, whose main area of activity was in the present-day Yalong River 雅礱江 valley, were recorded in the Han Dynasty historical literature for raising yaks.
// 3	The Tuyuhun 吐谷渾, a branch of the Xianbei 鮮卑 tribe, migrated from northeastern China to the Qing-Zang Plateau 青藏高原 during the Western Jin Dynasty 西晉. During the Southern and Northern  Dynasties, the steppe area between Qinghai Lake 青海湖 and Qilian Mountains 祁連山 was the main nomadic area of the Tuyukhun. In the historical records of the Northern Wei Dynasty 北魏, the yaks were one of the main livestock of the Tuyuhun.
// 4	Nüguo 女國 (Female Country) was an ancient matrilineal nomadic tribe that existed on the Qiangtang Plateau 羌塘高原 in the 6th century. The tribe raises yaks and regularly crosses the Himalayas into Ancient India for trade.
// 5	The Tang Dynasty 唐朝 established official pastures in the Longyou 隴右 areas (present-day Gansu Province 甘肅省). In 754, the total number of cattle, horses, sheep, camels, and other livestock under the management of Longyou Pastures exceeded 600,000, including 143 yaks.
// 6	Tibetan Empire was an ancient regime located on the Qing-Zang Plateau 青藏高原 during the Tang Dynasty 唐朝. According to the historical records of the Tang Dynasty, in the custom of the Tibetan Empire, the yak meat was a delicacy for the guests who came from abroad, but before the feast, the guests had to shoot the yak meat with arrows on their own.
// 7	Tibetan Empire was an ancient regime located on the Qing-Zang Plateau 青藏高原 during the Tang Dynasty 唐朝. At the beginning of the Tang Dynasty, Tibetan Empire maintained friendly relations with the Tang Dynasty through marriage alliance. In 824, the Tibetan Empire paid yaks as tribute to the Tang Dynasty. In addition, some historians believe that the Tibetan Empire also bred hybrid cattle, which crossed the yaks and the common cattle, and contributed them to the Tang Dynasty.
// 8	Xinjiang 新疆 has been the main source of jade in China since ancient times. During the Qing Dynasty 清朝, Mierdai 密爾岱, located in Yecheng County 葉城縣, was the area of the largest amount of jade. Therefore, Mierdai was also known as Jade Mountain. As the snow in the area never melted, the local people had to rely on yaks to transport the jade.
// 1	The lions with wings were the typical images of the ancient world of West Asia and North Africa, and the Sphinx in ancient Egyptian mythology was one such creature. The Sphinx has a pair of wings, the body of a lion, and the head of a man. The Great Sphinx of Giza may be the most famous Sphinx statue since it was considered one of the Seven Wonders of the World.
// 2	Heracles was a divine hero in Greek mythology. The most popular stories of Heracles were about the Twelves Labours, and the first Labour was about slaying the Nemean Lion. In the Peloponnese, Hercules killed the lion and obtained its hide. Therefore, "Heracles and the Nemean Lion" became a typical image in European culture to praise the force of heroes.
// 3	The lion has a divine meaning in Buddhist culture. It is said that one of the incarnations of the Buddha was a lion. In the third century BCE, Ashoka, the third Mauryan Emperor in India, revered Buddhism. He built many stone pillars carved with lions to symbolize the spread of Buddhism in Sarnath, a sacred Buddhist site.
// 4	The lion is not a native species of China, and its introduction was based on the contributions of the states of Western Regions. In 87, the envoys from the Parthian Empire sent lions as tributes to the Eastern Han Dynasty 東漢, which was the first specific record of lion tributes in Chinese historical documents. Later, in 101, the Parthian Empire paid lion and ostrich to the Eastern Han again.
// 5	In 133, the Shule 疏勒 (present-day Kashi 喀什, Xinjiang 新疆) paid lions and zebus as tributes to the Eastern Han Dynasty 東漢.
// 6	In 87, the Greater Yuezhi 大月氏 (present-day Afghanistan) paid lions as tributes to the Eastern Han Dynasty 東漢.
// 7	"In the Western Jin Dynasty 西晉, Zhang Hua's 張華 Bowuzhi 博物志 (Records of Diverse Matters) documented a story about Cao Cao's 曹操 hunting of a lion, which roughly goes as follows: Cao Cao led an army to invade the Wuhuan 烏桓, and was attacked by a lion in the Bailang Mountain 白狼山. Cao Cao led hundreds of soldiers to kill the lion and brought it back to Luoyang 洛陽.
// However, there were no native lions in China. One historian suggests that this record may not be real, but was compiled by Zhang Hua, who adapted it from Persian culture in order to publicize the authority of the Cao Wei 曹魏 regime."
// 8	With the spread of Buddhism, the image of the lion gradually became popular in ancient China. The Cave 272 of the Mogao Caves at Dunhuang 敦煌莫高窟 was built during the Sixteen Kingdoms Period 十六國時期. One of the murals depicts the Buddha giving a sermon, with two crouching lions on either side of the Buddha's seat. This is the earliest image of a lion in a Dunhuang mural.
// 9	With the spread of Buddhism in the Northern Wei Dynasty 北魏, the Buddhist temples in Luoyang 洛陽 gradually flourished. The monks held annual processions in the city and showed the Buddha's portrait to the residents of Luoyang. The lion, as the divine animal of Buddhism, would be at the front of the procession to lead the way.
// 10	The Sassanid Empire, also known as the Second Persian Empire, ruled West Asia for four centuries. The Sassanian Empire contributed a lion to the Northern Wei Dynasty 北魏, and it was kept in the royal gardens of Emperor Xiaozhuang of the Northern Wei Dynasty 北魏孝莊帝. The "Shizi Fang 師子坊" (Lion Square) in Luoyang 洛陽 was named for this tribute lion.
// 11	Champa was an ancient kingdom located in the central region of Vietnam. During the Song of Southern Dynasties 南朝宋, Tan Hezhi 檀和之 and Zong Que 宗愨 were deployed to invade Champa. Champa resisted with armored elephants. Zong Que thought that the lions were the kings of the beasts and ordered soldiers to make a large number of models of lions. These elephants were frightened and dispersed, and the capital of Champa was conquered.
// 12	Manjushri riding on a green lion is a typical image in Chinese Buddhist art. This image did not originate in India, but was created by Chinese people during the Tang Dynasty 唐朝. For example, the lion is the mount of Manjushri in the mural painting of Cave 25 of the Yulin Caves 榆林窟. Archaeologists believe that the combination of the two is meant to symbolize the Bodhisattva's wisdom with the lion's strength.
// 13	During the Sui Dynasty 隋朝, the Turkic Khaganate split into Eastern Turkic and Western Turkic. During the reign of Emperor Gaozu of the Tang Dynasty 唐高祖, the leader of Western Turkic, Shekui Kaghan 射匱可汗, contributed ostrich eggs and lion skins to the Tang Dynasty 唐朝 several times in the hope of joining forces with the Tang Dynasty to attack the Eastern Turkic. 
// 14	There was a kind of "Lion Dance" in the Tang Dynasty 唐朝 court, which is said to have originated from Kucha (present-day Kuche 庫車, Xinjiang 新疆). According to records, each lion was played by twelve dancers, who were also called " Lion Boys". This palace music may be the origin of the current Chinese traditional lion dance.
// 15	In 635, the State of Kang 康國 (present-day Samarkand, Uzbekistan) contributed a lion to the Tang Dynasty 唐朝. Emperor Taizong of the  Tang Dynasty 唐太宗 ordered the calligrapher Yu Shinan 虞世南 to write an article to honor the event. 
// 16	In 651, the Arab Empire sent envoys to pay tribute to Chang'an 長安 (present-day Xi'an 西安, Shaanxi 陝西), and the two countries had close contacts thereafter. During the reign of Wu Zetian 武則天, envoys from the Arabian Empire contributed a lion. Minister Yao Shu 姚璹 suggested rejecting the lion because it cost a great deal of money to keep it. Wu Zetian then issued a decree asking the envoys of the Arabian Empire not to contribute lions again.
// 17	Tabaristan, located on the southern coast of the Caspian Sea, originally belonged to the Sassanian Empire. After the Sasanian Empire was conquered by the Arabian Empire, Tabaristan maintained its independence and continued to pay tribute to the Tang Dynasty 唐朝 in the name of the Persian King. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, Tabaristan once contributed lions.
// 18	In 719, the Byzantine Empire contributed two lions and two oryxes to the Tang Dynasty 唐朝. 
// 19	Xiajiasi 黠戛斯, also known as the Yenisei Kyrgyz Khaganate, was located in Siberia and was the ancestor of the present-day Kyrgyz. According to the historical records, The Xiajiasi people had a kind of lion show, which was probably a kind of entertainment activity to tame the lions for animal performance. 
// 20	"According to the Dongjing Menghualu 東京夢華錄 (Dreams of Splendor of the Eastern Capital), there was a ""Lion Dance and Leopard Dance"" in the Xiqu 戲曲 (Chinese opera) performances of the Lantern Festival. This proves that the lion dance had already become a popular festive activity in Chinese culture during the Song Dynasty 宋朝.
// ""One Hundred Children Playing in the Spring"", painted by the Song Dynasty court painter Su Hanchen 蘇漢臣, shows a scene of children entertaining during the Spring Festival. There are two children dressed as a lion, with green manes and blue skin, and the image is very close to that of the present-day lion dance."
// 21	The concept of the lion as the mount of Manjushri was deeply rooted in the Song Dynasty 宋朝. During the Chung Yeung Festival, temples in Bianliang 汴梁 (present-day Kaifeng 開封, Henan 河南), the capital of the Northern Song Dynasty 北宋, would hold religious ceremonies. Some of the monks rode on the lions to preach, attracting visitors to watch.
// 22	Champa was an ancient kingdom located in the central region of Vietnam. In 1011, the Champa sent a lion as a tribute to Nothern Song Dynasty 北宋. Emperor Zhenzong of the Song Dynasty 宋真宗 ordered that the envoys be rewarded richly and that the lion be kept in the royal garden.
// 23	After the death of Möngke Khan in 1259 during his attack on the Southern Song Dynasty 南宋, the Mongol Empire was plunged into civil war and eventually split into the Yuan Dynasty 元朝 and the Four Khanates. The Four Khanates were actually independent, but they nominally paid tribute to the Yuan Emperor as their representative leader. The Ilkhanate, located in Central Asia, was recorded as having contributed lions and leopards to the Yuan Dynasty.
// 24	The Huihui 回回 people were Muslims who migrated to China from Arabia or Persia during the Yuan Dynasty 元朝. The Mongol rulers granted many privileges to the Huihui merchants, especially the management of foreign trading venues. Many Huihui merchants purchased large quantities of lions, leopards, eagles, and other animals in Central and West Asia in the name of the Yuan Dynasty royal family, and then transported these animals to China by maritime routes. It was recorded that the stage station in Hangzhou 杭州 even received more than 1,200 merchants in a month, offering as much as 1,300 jins 斤 of meat to people and animals of all kinds.
// 25	Mandarin square, a square embroidery on official uniforms during the Ming 明 and Qing Dynasties 清朝, is used to indicate official rank. According to the ritual system of the Ming Dynasty, the lion was the motif on the mandarin square that could be used by military officials of the first and second rank. In the mid-to-late Ming Dynasty, the lion motif was abused, and the lion mandarin square could be used on the official uniforms of low-ranking military officials.
// 26	The Ming Dynasty 明朝 established a detailed tribute system. The lions as tribute were first evaluated by the Huitongguan 會同館, and then bred and trained by the Jinyiwei 錦衣衛 (Embroidered Uniform Guard). These lions may have joined the guard of honour of the Ming Emperor or performed at important ceremoniess.
// 27	During the Hongzhi 弘治 period of the Ming Dynasty 明朝, the Eastern Chaghatai Khanate contributed lions to the Ming Dynasty on several occasions, and its regular route of tributary was the Continental Silk Road. However, in the fall of 1490, envoys from the Eastern Chagatai Khanate attempted to send lions by maritime route. They reached Guangzhou 廣州 through the Strait of Malacca. The Ming Dynasty rejected this tribute on the grounds that the maritime route was not the route prescribed by the Eastern Chagatai Khanate.
// 28	
// 29	Herat in Afghanistan, was known as Halie 哈烈 or Heilou 黑婁 during the Ming Dynasty 明朝. The Herat had repeatedly contributed lions to the Ming Dynasty. According to Ming documents, the local people would steal newborn lion cubs and tame them.
// 30	"Chinese Lions", painted by the Ming Dynasty 明朝 artist Zhou Quan 周全, is now housed in the Tokyo National Museum. Some scholars have speculated that the lions in the painting may be tributes from the Samarkand in 1483. The lions in this painting are very realistic, suggesting that Zhou Quan, as an official of the Jinyiwei 錦衣衛 (Embroidered Uniform Guard), had the opportunity to see and sketch the lions himself.
// 31	Zheng He 鄭和 visited Thailand and traded there several times during his voyages. His entourage recorded that there were white elephants, lions, and other exotic animals in Thailand.
// 32	The king of Aden greatly respected the Ming Dynasty 明朝 and traded with Zheng He 鄭和 for a large number of treasures. Zheng He's fleet brought back giraffes, lions, leopards, spotted cats, ostriches and other animals from Aden.
// 33	Hormuz, the present-day Minab in Iran, was located on the essential route into the Persian Gulf. Zheng He 鄭和 visited this place on several occasions. In 1414, the King of Hormuz visited Beijing 北京 with Zheng He and offered horses to Yongle Emperor 永樂皇帝 as tribute. In addition, lions and giraffes were often the tributes from Hormuz.
// 34	Mecca is the birthplace of Islam. Zheng He 鄭和 once sent seven envoys to Mecca, bringing back giraffes, lions, ostriches and other animals.
// 35	During the Jiajing 嘉靖 and Wanli 萬曆 periods, the Ottoman Empire paid tribute to the Ming Dynasty 明朝 on several occasions with animals such as dogs, lions, and rhinos.
// 36	The Jubaland of Somalia, which was visited by Zheng He's 鄭和 fleet, was recorded as producing lions, leopards, ostriches and other animals. During the Yongle 永樂 period, Jubaland once paid tribute to the Ming Dynasty 明朝.
// 37	In order to seek free trade in the Guangdong 廣東 region, Portugal planned to offer gifts to the Kangxi Emperor 康熙皇帝. In 1672, the Portuguese Governor-General in India ordered Portuguese troops stationed in Mozambique, East Africa, to capture two lions, a male and a female, and transport them by the ocean to Goa, India. The male lion died shortly afterward, while the female was transported to Macao 澳門. To gain the attention of the Qing Dynasty 清朝, the Macao authorities forged a letter of credence from King Alfonso VI to the Kangxi Emperor. After remaining in Macao for two years, the Portuguese mission was allowed to enter Beijing 北京 to present the lions in August 1978. In 1680, the Kangxi Emperor ordered the opening of the land trade route from Xiangshan 香山 to Macao, which became one of the most important routes for trade between the Qing court and the European countries at that time. This was the first time that the Qing Dynasty received a lion from a foreign country, and also the last time in Chinese history.
// 1	Mafdet, meaning the runner, was an ancient Egyptian goddess with a leopard's head. The worship of Mafdet has a long history, dating back to 3000 BCE during the First Dynasty of Ancient Egypt. It was later replaced by the cat-headed goddess Bastet.
// 2	Dionysus was the God of Wine in Greek Mythology. Panther (Leopard) was one of the sacred animals of Dionysus. Therefore, the image of Dionysius riding a panther was widely seen in Ancient Greek art.
// 3	The leopard was once widely distributed in the forested areas of China and was favored by the ancient Chinese as a precious wild animal. During the Zhou Dynasty 周朝, the Central Plains people often obtained leopards or leopard hides through the nomadic peoples in the north. For example, the Shijing 詩經 (Classic of Poetry) records that during the Western Zhou Dynasty 西周, the State of Han 韓國 contributed leopard hides to the King Xuan of the Zhou Dynasty 周宣王, which were obtained from the Mo 貊族 tribe in the north.
// 4	Leopard hides were extremely valuable during the Zhou Dynasty 周朝, and were a popular clothing material among the nobles. Guan Zhong 管仲 suggested Duke Huan of Qi 齊桓公 to give the leopard hide as a gift to other small vassal states. In this way, Duke Huan of Qi gained the support of a large number of small vassal states.
// 5	Liu An 劉安 was a prince of the Western Han Dynasty 西漢 and was named King of Huainan 淮南王. There was a record of keeping tigers and leopards in captivity in the Huainanzi 淮南子, which was edited by him. There was also a record in the Hanshu 漢書 (Book of Han) that tamed tigers and leopards could obey human commands. These records show that leopards as ornamental animals kept in the royal gardens were very popular in the Han Dynasty 漢朝.
// 6	According to the ritual system of the Han Dynasty 漢朝, the emperor's fleet consisted of 81 carriages, the last of which was decorated with a leopard's tail.
// 7	The Wuhuan 烏桓 were an ancient nomadic people located in northeastern China. In 46, Wuhuan took advantage of the outbreak of the locust plague in Xiongnu 匈奴 and successfully defeated them. In 49, Wuhuan surrendered to the Eastern Han Dynasty 東漢 and sent leopard hides as tributes to Emperor Guangwu of the Han Dynasty 漢光武帝.
// 8	The Okjeo was one of the tribes located in the Korean Peninsula during the Han Dynasty 漢朝. In the Hou Hanshu 後漢書 (Book of Later Han), it is recorded that the northern Okjeo had contributed leopards and ponies to the Eastern Han Dynasty 東漢.
// 9	The State of An 安國 was one of the states in  ancient Western Regions, located in present-day Bukhara, Uzbekistan. In 726, the State of An paid tribute to the Tang Dynasty 唐朝 with a male leopard and a female leopard.
// 10	In 720, Southern India offered leopards and parrots as tributes to the Tang Dynasty.
// 11	The Huihui 回回 people were Muslims who migrated to China from Arabia or Persia during the Yuan Dynasty 元朝. The Mongol rulers granted many privileges to the Huihui merchants, especially the management of foreign trading venues. Many Huihui merchants purchased large quantities of lions, leopards, eagles, and other animals in Central and West Asia in the name of the Yuan Dynasty royal family, and then transported these animals to China by maritime routes. It was recorded that the stage station in Hangzhou 杭州 even received more than 1,200 merchants in a month, offering as much as 1,300 jins 斤 of meat to people and animals of all kinds.
// 12	In 1327, Java paid tribute to the Yuan Dynasty 元朝 with a Java leopard and a white parrot.
// 13	"In the Ming Dynasty 明朝, most of the leopards kept in the court were ornamental animals, but there were also a few cheetahs for hunting. Among the Ming emperors, the most favorite leopard is Zhu Houzhao 朱厚照, the Emperor Wuzong of the Ming Dynasty 明武宗. In 1507, Emperor Wuzong built the ""Leopard House"" at the Celestial Lake (present-day Central-South Lake and North Lake) to keep leopards, which was further extended five years later. After that, he frequently stayed there and eventually died in Leopard House.
// There is a ""Bronze Warrior Plate in Leopard House"" in the collection of the National Museum of China. There's a leopard cast on one side of the bronze plate, and on the other side was cast “This plate is to be carried by a government warrior who keeps leopards; one who fails to carry the plate will be held guilty, so will be one who lends or borrows the plate.” It can be assumed that the bronze plate was the ""staff card"" of a soldier who served in the Leopard House, and whose duties may have included protecting the emperor's security and helping him to keep the leopards."
// 14	The king of Aden greatly respected the Ming Dynasty 明朝 and traded with Zheng He 鄭和 for a large number of treasures. Zheng He's fleet brought back giraffes, lions, leopards, spotted cats, ostriches and other animals from Aden.
// 15	The Jubaland of Somalia, which was visited by Zheng He's 鄭和 fleet, was recorded as producing lions, leopards, ostriches and other animals. During the Yongle 永樂 period, Jubaland once paid tribute to the Ming Dynasty 明朝.
// 1	"Cheetahs, once widespread in West Asia and Africa, are the fastest animals on land with speeds of over 100 kilometers per hour. Since its excellent ability to high-speed running, cheetahs were adopted by the ancient people for hunting. This custom was introduced to China through the Continental Silk Road and was very popular during the Tang Dynasty 唐朝.
// There is a mural from the Tomb of Prince Zhanghuai 章懷太子墓 in which a cheetah sits on the back of a horse, showing the cheetah's participation in the imperial hunting activities of the Tang Dynasty."
// 2	Located in present-day Samarkand, Uzbekistan, the State of Kang 康國 was an important place on the Continental Silk Road transportation. During the reign of Emperor Xuanzong of the Tang Dynasty 唐玄宗, the State of Kang contributed pygmies, dancing girls, and cheetahs to the Tang Dynasty 唐朝 many times.
// 3	Kish was one of the states of the ancient Western Regions, located in present-day Shahrisabz, Uzbekistan. In 729, Kish paid tribute to the Tang Dynasty 唐朝 with dancing girls and cheetahs.
// 4	Principality of Farghana, located in the Fergana Valley in the eastern part of present-day Uzbekistan. In 751, the Principality of Farghana contributed a cheetah and other animals to the Tang Dynasty 唐朝.
// 5	In 651, the Arab Empire sent envoys to pay tribute to Chang'an 長安 (present-day Xi'an 西安, Shaanxi 陝西), and the two countries had close contacts thereafter. In 747, the Arabian Empire sent envoys to the Tang Dynasty to pay tribute to the six cheetahs.
// 6	Tabaristan, located on the southern coast of the Caspian Sea, originally belonged to the Sassanian Empire. After the Sasanian Empire was conquered by the Arabian Empire, Tabaristan maintained its independence and continued to pay tribute to the Tang Dynasty 唐朝 in the name of the Persian King. In 747, Tabaristan sent four cheetahs to the Tang Dynasty as tributes.
// 7	The Khitans were a nomadic people of ancient northern China who founded the Liao Dynasty 遼朝. The custom of "cheetah hunting" was also preserved in Khitan culture. The cheetahs of the Liao Dynasty came from tributes from the Western Regions. For example, in 1052, the Qocho Kingdom contributed horses and cheetahs to the Liao.
// 8	The Yuan Dynasty 元朝, founded by the Mongols, was the first unified dynasty in Chinese history founded by nomadic peoples. Hunting was a popular entertainment in Mongolian culture. Compared with other dynasties, "cheetah hunting" was especially prevalent in the Yuan Dynasty. The "Scroll Painting of Yuan Dynasty Ancestor Go Hunting", painted by the court painter Liu Guandao 劉貫道, is evidence of this. This painting, dating from 1280, shows the Kublai Khan on his hunting trip with his empress and a group of servants. There are a variety of animals for hunting in the painting, including horses, dogs, eagles, and a cheetah. In the lower half of the painting, the muzzled cheetah sits behind a rider.
// 9	The other Mongol khanates also had the custom of "cheetah hunting", and they would send cheetahs to the Yuan Dynasty 元朝 as tribute. The Ilkhanate, located in Central Asia, was recorded as having contributed cheetahs to the Yuan Dynasty.
// 10	The other Mongol khanates also had the custom of "cheetah hunting", and they would send cheetahs to the Yuan Dynasty 元朝 as tribute. In the Yuanshi 元史 (History of Yuan), the Chaghatai Khanate in Central Asia contributed cheetahs to the Yuan Dynasty on four occasions.
// 11	The other Mongol khanates also had the custom of "cheetah hunting", and they would send cheetahs to the Yuan Dynast 元朝y as tribute. In 1326, the Golden Horde in Eastern Europe sent cheetahs to the Yuan Dynasty.
// 12	Shiraz in Iran was ruled by the Timurid Empire during the Ming Dynasty. In the Yongle 永樂 period, the Timurid empire paid tribute to the Ming Dynasty 明朝 several times for the cheetahs. The Cleveland Museum of Art collects an illustration from the Timurid period of a royal banquet in Shiraz in 1444. The guests at this banquet were three Chinese officials who were probably envoys from the Ming Dynasty to the Timurid Empire. Beside them were two cheetahs, an eagle, and a horse, which may have been the tribute they would bring back to the Ming Dynasty.
	
	
// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
