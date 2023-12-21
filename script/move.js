// buttonContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('timeline-button')) {
//         var buttonValue = event.target.getAttribute('data-value');
//         slider.value = buttonValue;
//         // 触发滑块的input事件，手动更新标记的位置
//         var inputEvent = new Event('input');
//         slider.dispatchEvent(inputEvent);
//         filterMarkers();
//     }

// });
// buttonContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('timeline-button')) {
//         var buttonValue = event.target.getAttribute('data-value');
        
//         // 清除之前选择的复选框
//         $('.category-checkbox[data-category="B"]').prop('checked', false);
        
//         // 根据按钮值选择对应的复选框并设置为选中状态
//         if (buttonValue === '8000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"]').prop('checked', true);
//         }
//         if (buttonValue === '7000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"]').prop('checked', true);
//         }
//         if (buttonValue === '6000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"]').prop('checked', true);
//         }
//         if (buttonValue === '5000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"]').prop('checked', true);
//         }
//         if (buttonValue === '4000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"]').prop('checked', true);
//         }
//         if (buttonValue === '3000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"]').prop('checked', true);
//         }        
//         if (buttonValue === '2000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"]').prop('checked', true);
//         }
//         if (buttonValue === '1000') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"],input[value="明"]').prop('checked', true);
//         }
//         if (buttonValue === '0') {
//             // 选中A类别的1234个复选框
//             $('input[value="史前至夏商周"], input[value="秦漢"], input[value="三國兩晉南北朝"], input[value="隋"],input[value="唐"],input[value="宋"],input[value="元"],input[value="明"],input[value="清"]').prop('checked', true);
//         }
        
//         // 触发change事件，更新地图标记
//         $('.category-checkbox').trigger('change');
//     }
// });
function handleToggleMarkers(currentValue) {
    const lionMarkers = [lion1, lion2, lion3, lion4, lion5, lion6, lion7, lion8, lion9, lion10, 
        lion11, lion12, lion13, lion14, lion15, lion16, lion17, lion18, lion19, lion20, lion21, 
        lion22, lion23, lion24, lion25, lion26, lion27, lion28, lion29, lion30, lion31, lion32, 
        lion33, lion34,lion35,lion36,lion37];
    const camelMarkers = [camel1, camel2, camel3,camel4, camel5 , camel8, camel9, camel6,camel7,camel10, 
        camel11, camel12, camel13, camel14, camel15, camel16, camel17, camel18, camel19, camel20, 
        camel21, camel22, camel23, camel24, camel25, camel26, camel27, camel28, camel29,camel30, 
        camel31, camel32, camel33, camel34,camel35, camel36, camel37, camel38, camel39, camel40, 
        camel41,   camel42, camel43, camel44, camel45, camel46,camel47, camel48, camel49, camel50, 
        camel51, camel52, camel53,  camel54, camel55,camel56, camel57, camel58, camel59, camel60, 
        camel61, camel62, camel63,camel64,camel65, camel66, camel67, camel68];
    const horseMarkers=[horse1, horse2, horse3, horse4, horse5, horse6,horse7, horse8, horse9, horse10, 
            horse11, horse12, horse13, horse14, horse15, horse16, horse17, horse18, horse19, horse20,
            horse21, horse22, horse23, horse24, horse25, horse26, horse27, horse28, horse29, horse30,
            horse31, horse32, horse33, horse34,horse35, horse36, horse37, horse38, horse39, horse40, 
            horse41, horse42, horse43, horse44, horse45, horse46,horse47, horse48, horse49, horse50, 
            horse51, horse52, horse53, horse54, horse55,horse56, horse57, horse58, horse59, horse60, 
            horse61, horse62, horse63, horse64,horse65, horse66, horse67, horse68,horse69,horse70,
               horse71];
    const catMarkers = [
            cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, 
            cat10, cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19,
            cat20, cat21, cat22, cat23, cat24, cat25, cat26, cat27, cat28,cat29, 
            cat30, cat31, cat32, cat33, cat34, cat35, cat36, cat37, cat38, 
];
const dogMarkers = [
    dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, 
    dog10,dog11, dog12, dog13, dog14, dog15, dog16, dog17, dog18, dog19,
    dog20, dog21, dog22, dog23, dog24, dog25, dog26, dog27, dog28,dog29, 
    dog30, dog31, dog32, dog33, dog34, dog35, dog36, dog37, dog38, dog39, 
    dog40, dog41, dog42, dog43, dog44, dog45, dog46,dog47, dog48, dog49, 
    dog50, dog51, dog52, dog53, 
   ];
const rabbitMarkers = [
    rabbit1, rabbit2, rabbit3];

const yakMarkers = [
    yak1, yak2, yak3, yak4, yak5, yak6, yak7, yak8 ]; 
    
const leopardMarkers = [
    leopard1, leopard2, leopard3, leopard4, leopard5, leopard6, leopard7, leopard8, leopard9, 
    leopard10,leopard11, leopard12, leopard13, leopard14, leopard15
];
const cheetahMarkers =[ cheetah1, cheetah2, cheetah3, cheetah4, cheetah5, cheetah6, cheetah7, cheetah8, cheetah9, 
cheetah10,cheetah11, cheetah12];
  if (currentValue <= 0 ) {
        toggleMarkers(lionMarkers.slice(0,37), lionMarkers.slice(37));
        toggleMarkers(camelMarkers.slice(0,68), camelMarkers.slice(68));
        toggleMarkers(horseMarkers.slice(0,71), horseMarkers.slice(71));
        toggleMarkers(catMarkers.slice(0,38), catMarkers.slice(38));
        toggleMarkers(dogMarkers.slice(0,53), dogMarkers.slice(53));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,8), yakMarkers.slice(8));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));


} 
   if (currentValue > 0 && currentValue < 1000) {
        toggleMarkers(lionMarkers.slice(0, 3), lionMarkers.slice(3));
        toggleMarkers(camelMarkers.slice(0, 7), camelMarkers.slice(7));
        toggleMarkers(horseMarkers.slice(0, 5), horseMarkers.slice(5));
        toggleMarkers(catMarkers.slice(0,8), catMarkers.slice(8));
        toggleMarkers(dogMarkers.slice(0,8), dogMarkers.slice(8));
        toggleMarkers(rabbitMarkers.slice(0,1), rabbitMarkers.slice(1));
        toggleMarkers(yakMarkers.slice(0,1), yakMarkers.slice(1));
        toggleMarkers(leopardMarkers.slice(0,4), leopardMarkers.slice(4));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));

    } if (currentValue >= 1000 && currentValue < 2000) {
        toggleMarkers(lionMarkers.slice(0, 6), lionMarkers.slice(6));
        toggleMarkers(camelMarkers.slice(0, 19), camelMarkers.slice(19));
        toggleMarkers(horseMarkers.slice(0, 23), horseMarkers.slice(23));
        toggleMarkers(catMarkers.slice(0,14), catMarkers.slice(14));
        toggleMarkers(dogMarkers.slice(0,14), dogMarkers.slice(14));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,2), yakMarkers.slice(2));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));

    } if (currentValue >= 2000 && currentValue < 3000) {
        toggleMarkers(lionMarkers.slice(0, 11), lionMarkers.slice(11));
        toggleMarkers(camelMarkers.slice(0, 29), camelMarkers.slice(29));
        toggleMarkers(horseMarkers.slice(0, 30), horseMarkers.slice(30));
        toggleMarkers(catMarkers.slice(0,15), catMarkers.slice(15));
        toggleMarkers(dogMarkers.slice(0,21), dogMarkers.slice(21));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,3), yakMarkers.slice(3));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));

    } if (currentValue >= 3000 && currentValue < 4000) {
        toggleMarkers(lionMarkers.slice(0, 11), lionMarkers.slice(11));
        toggleMarkers(camelMarkers.slice(0, 32), camelMarkers.slice(32));
        toggleMarkers(horseMarkers.slice(0, 32), horseMarkers.slice(32));
        toggleMarkers(catMarkers.slice(0,15), catMarkers.slice(15));
        toggleMarkers(dogMarkers.slice(0,22), dogMarkers.slice(22));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,4), yakMarkers.slice(4));
        toggleMarkers(leopardMarkers.slice(0,8), leopardMarkers.slice(8));
        toggleMarkers(cheetahMarkers.slice(0), cheetahMarkers.slice(0,12));
        
    } if (currentValue >= 4000 && currentValue < 5000) {
        toggleMarkers(lionMarkers.slice(0, 19), lionMarkers.slice(19));
        toggleMarkers(camelMarkers.slice(0, 41), camelMarkers.slice(41));
        toggleMarkers(horseMarkers.slice(0, 45), horseMarkers.slice(45));
        toggleMarkers(catMarkers.slice(0,18), catMarkers.slice(18));
        toggleMarkers(dogMarkers.slice(0,30), dogMarkers.slice(30));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,10), leopardMarkers.slice(10));
        toggleMarkers(cheetahMarkers.slice(0,6), cheetahMarkers.slice(6));

    }if (currentValue >= 5000 && currentValue < 6000) {  
        toggleMarkers(lionMarkers.slice(0, 22), lionMarkers.slice(22));
        toggleMarkers(camelMarkers.slice(0, 51), camelMarkers.slice(51));
        toggleMarkers(horseMarkers.slice(0, 53), horseMarkers.slice(53));
        toggleMarkers(catMarkers.slice(0,25), catMarkers.slice(25));
        toggleMarkers(dogMarkers.slice(0,39), dogMarkers.slice(39));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,10), leopardMarkers.slice(10));
        toggleMarkers(cheetahMarkers.slice(0,7), cheetahMarkers.slice(7));
        
    }if (currentValue >= 6000 && currentValue < 7000) {
        toggleMarkers(lionMarkers.slice(0, 24), lionMarkers.slice(24));
        toggleMarkers(camelMarkers.slice(0, 53), camelMarkers.slice(53));
        toggleMarkers(horseMarkers.slice(0, 57), horseMarkers.slice(57));
        toggleMarkers(catMarkers.slice(0,28), catMarkers.slice(28));
        toggleMarkers(dogMarkers.slice(0,43), dogMarkers.slice(43));
        toggleMarkers(rabbitMarkers.slice(0,2), rabbitMarkers.slice(2));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,12), leopardMarkers.slice(12));
        toggleMarkers(cheetahMarkers.slice(0,11), cheetahMarkers.slice(11));


    }if (currentValue >= 7000 && currentValue < 8000) {
        toggleMarkers(lionMarkers.slice(0, 36), lionMarkers.slice(36));
        toggleMarkers(camelMarkers.slice(0, 63), camelMarkers.slice(63));
        toggleMarkers(horseMarkers.slice(0, 67), horseMarkers.slice(67));
        toggleMarkers(catMarkers.slice(0,32), catMarkers.slice(32));
        toggleMarkers(dogMarkers.slice(0,48), dogMarkers.slice(48));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,7), yakMarkers.slice(7));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));

    }
    if (currentValue >= 8000 && currentValue < 9000) {
        toggleMarkers(lionMarkers.slice(0, 37), lionMarkers.slice(37));
        toggleMarkers(camelMarkers.slice(0, 68), camelMarkers.slice(68));
        toggleMarkers(horseMarkers.slice(0, 71), horseMarkers.slice(71));
        toggleMarkers(catMarkers.slice(0,38), catMarkers.slice(38));
        toggleMarkers(dogMarkers.slice(0,53), dogMarkers.slice(53));
        toggleMarkers(rabbitMarkers.slice(0,3), rabbitMarkers.slice(3));
        toggleMarkers(yakMarkers.slice(0,8), yakMarkers.slice(8));
        toggleMarkers(leopardMarkers.slice(0,15), leopardMarkers.slice(15));
        toggleMarkers(cheetahMarkers.slice(0,12), cheetahMarkers.slice(12));

    }

    
    
}
                        
