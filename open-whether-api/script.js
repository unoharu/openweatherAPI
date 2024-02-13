//自分のAPIキーを取得
var apiKey = '3d16d41775c6b95c410b5b1e4bb8e322';
var lat = 35.6905
var lon = 139.6995
//東京の天気情報を取得するためのAPIエンドポイント
//https://openweathermap.org/api/one-call-3
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ja&units=metric&appid=${apiKey}`;
fetch(apiUrl)

//.then():非同期操作の成功時に実行されるコードブロックを定義する
//HTTPリクエストから受け取ったレスポンスデータをJSON形式からJavaScriptオブジェクトに変換
.then(response => response.json())

//data:非同期操作から返されたデータが格納される
.then(data => {

// 天気情報をコンソールに表示
console.log(data);

//現在の天気を表示
var weather = data.weather[0].description;
document.querySelector('#weather').textContent = weather;
console.log(weather)
var temp = Math.round(data.main.temp);
document.querySelector('#temperature').textContent = temp
var maxTemp = Math.round(data.main.temp_max);
document.querySelector('#temperatureMax').textContent = maxTemp
var minTemp = Math.round(data.main.temp_min);
document.querySelector('#temperatureMin').textContent = minTemp
var humidity = Math.round(data.main.humidity);
document.querySelector('#humidity').textContent = humidity
var feels_like = Math.round(data.main.feels_like);
document.querySelector('#feels_like').textContent = feels_like
var pressure = Math.round(data.main.pressure);
document.querySelector('#pressure').textContent = pressure
var speed = Math.round(data.wind.speed);
document.querySelector('#speed').textContent = speed
var clouds = Math.round(data.clouds.all);
document.querySelector('#clouds').textContent = clouds
var deg = Math.round(data.wind.deg);
document.querySelector('#deg').textContent = deg
var sunrise = data.sys.sunrise;
document.querySelector('#sunrise').textContent = unixToUtc(sunrise);
var sunset = data.sys.sunset;
document.querySelector('#sunset').textContent = unixToUtc(sunset);

function unixToUtc(unix) {
  var date = new Date(unix * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
}
//アイコン画像のURLを作成
var iconId = data.weather[0].icon;
var iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
console.log(iconId)
//アイコン画像を表示
var iconImg = document.createElement('img');
// imgのsrcを設定
iconImg.src = iconUrl;
//気温をhtmlに表示
var weatherIcon = document.querySelector('#weatherIcon').appendChild(iconImg);
})
.catch(error => {
console.error('エラー:', error);
});

var json = {
  marker:[
    {pref:"北海道",url:"http://www.pref.hokkaido.lg.jp/",addr:"北海道",lat:43.064301,lng:141.346874},
    {pref:"青森県",url:"http://www.pref.aomori.lg.jp/",addr:"青森",lat:40.824622,lng:140.740598},
    {pref:"岩手県",url:"http://www.pref.iwate.jp/",addr:"岩手",lat:39.7036,lng:141.152709},
    {pref:"宮城県",url:"http://www.pref.miyagi.jp/",addr:"宮城",lat:38.268812,lng:140.872082},
    {pref:"秋田県",url:"http://www.pref.akita.lg.jp/",addr:"秋田",lat:39.718611,lng:140.102401},
    {pref:"山形県",url:"http://www.pref.yamagata.jp/",addr:"山形",lat:38.240422,lng:140.363592},
    {pref:"福島県",url:"http://www.pref.fukushima.jp/",addr:"福島",lat:37.750301,lng:140.467522},
    {pref:"茨城県",url:"http://www.pref.ibaraki.jp/",addr:"茨城",lat:36.341793,lng:140.446802},
    {pref:"栃木県",url:"http://www.pref.tochigi.jp/",addr:"栃木",lat:36.566672,lng:139.883093},
    {pref:"群馬県",url:"http://www.pref.gunma.jp/",addr:"群馬",lat:36.390698,lng:139.060451},
    {pref:"埼玉県",url:"http://www.pref.saitama.lg.jp/",addr:"埼玉",lat:35.857431,lng:139.648901},
    {pref:"千葉県",url:"http://www.pref.chiba.jp/",addr:"千葉",lat:35.605045,lng:140.123325},
    {pref:"東京都",url:"http://www.metro.tokyo.jp/",addr:"東京",lat:35.689753,lng:139.691731},
    {pref:"神奈川県",url:"http://www.pref.kanagawa.jp/",addr:"神奈川",lat:35.447495,lng:139.6424},
    {pref:"新潟県",url:"http://www.pref.niigata.jp/",addr:"新潟",lat:37.902419,lng:139.023225},
    {pref:"富山県",url:"http://www.pref.toyama.jp/",addr:"富山",lat:36.695275,lng:137.211342},
    {pref:"石川県",url:"http://www.pref.ishikawa.jp/",addr:"石川",lat:36.59473,lng:136.625582},
    {pref:"福井県",url:"http://www.pref.fukui.jp/",addr:"福井",lat:36.065219,lng:136.221682},
    {pref:"山梨県",url:"http://www.pref.yamanashi.jp/pref/",addr:"山梨",lat:35.664161,lng:138.568459},
    {pref:"長野県",url:"http://www.pref.nagano.jp/",addr:"長野",lat:36.651296,lng:138.181239},
    {pref:"岐阜県",url:"http://www.pref.gifu.lg.jp/",addr:"岐阜",lat:35.391228,lng:136.722311},
    {pref:"静岡県",url:"http://www.pref.shizuoka.jp/",addr:"静岡",lat:34.976944,lng:138.383009},
    {pref:"愛知県",url:"http://www.pref.aichi.jp/",addr:"愛知",lat:35.180344,lng:136.906632},
    {pref:"三重県",url:"http://www.pref.mie.jp/",addr:"三重",lat:34.730272,lng:136.508598},
    {pref:"滋賀県",url:"http://www.pref.shiga.jp/",addr:"滋賀",lat:35.004528,lng:135.868607},
    {pref:"京都府",url:"http://www.pref.kyoto.jp/",addr:"京都",lat:35.021393,lng:135.755439},
    {pref:"大阪府",url:"http://www.pref.osaka.jp/",addr:"大阪",lat:34.686555,lng:135.519474},
    {pref:"兵庫県",url:"http://web.pref.hyogo.jp/",addr:"兵庫",lat:34.691287,lng:135.183061},
    {pref:"奈良県",url:"http://www.pref.nara.jp/",addr:"奈良",lat:34.685326,lng:135.832751},
    {pref:"和歌山県",url:"http://www.pref.wakayama.lg.jp/",addr:"和歌山",lat:34.226041,lng:135.167504},
    {pref:"鳥取県",url:"http://www.pref.tottori.lg.jp/",addr:"鳥取",lat:35.503867,lng:134.237716},
    {pref:"島根県",url:"http://www.pref.shimane.lg.jp/",addr:"島根",lat:35.472324,lng:133.05052},
    {pref:"岡山県",url:"http://www.pref.okayama.jp/",addr:"岡山",lat:34.661759,lng:133.934399},
    {pref:"広島県",url:"http://www.pref.hiroshima.lg.jp/",addr:"広島",lat:34.396603,lng:132.459621},
    {pref:"山口県",url:"http://www.pref.yamaguchi.jp/",addr:"山口",lat:34.18613,lng:131.470497},
    {pref:"徳島県",url:"http://www.pref.tokushima.jp/",addr:"徳島",lat:34.065756,lng:134.559297},
    {pref:"香川県",url:"http://www.pref.kagawa.jp/",addr:"香川",lat:34.340045,lng:134.043369},
    {pref:"愛媛県",url:"http://www.pref.ehime.jp/",addr:"愛媛",lat:33.841669,lng:132.765371},
    {pref:"高知県",url:"http://www.pref.kochi.jp/",addr:"高知",lat:33.5597,lng:133.531096},
    {pref:"福岡県",url:"http://www.pref.fukuoka.lg.jp/",addr:"福岡",lat:33.606781,lng:130.418307},
    {pref:"佐賀県",url:"http://www.pref.saga.lg.jp/web/",addr:"佐賀",lat:33.24957,lng:130.299804},
    {pref:"長崎県",url:"http://www.pref.nagasaki.jp/",addr:"長崎",lat:32.744814,lng:129.8737},
    {pref:"熊本県",url:"http://www.pref.kumamoto.jp/",addr:"熊本",lat:32.789816,lng:130.74169},
    {pref:"大分県",url:"http://www.pref.oita.jp/",addr:"大分",lat:33.238205,lng:131.612625},
    {pref:"宮崎県",url:"http://www.pref.miyazaki.lg.jp/",addr:"宮崎",lat:31.911058,lng:131.423883},
    {pref:"鹿児島県",url:"http://www.pref.kagoshima.jp/",addr:"鹿児島",lat:31.560166,lng:130.557994},
    {pref:"沖縄県",url:"http://www.pref.okinawa.jp/",addr:"沖縄",lat:26.212418,lng:127.680895},
  ]
}

var d = new jpmap.japanMap(document.getElementById("my-map"), {
    areas: [
    {code : 1, name: "北海道", color: "#7cdc92", hoverColor: "#b3b2ee"},
    {code : 2, name: "青森", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 3, name: "岩手", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 4, name: "宮城", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 5, name: "秋田", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 6, name: "山形", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 7, name: "福島", color: "#7cdc92", hoverColor: "#98b9ff"},
    {code : 8, name: "茨城", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 9, name: "栃木", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 10, name: "群馬", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 11, name: "埼玉", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 12, name: "千葉", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 13, name: "東京", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 14, name: "神奈川", color: "#7cdc92", hoverColor: "#b7e5f4"},
    {code : 15, name: "新潟", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 16, name: "富山", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 17, name: "石川", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 18, name: "福井", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 19, name: "山梨", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 20, name: "長野", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 21, name: "岐阜", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 22, name: "静岡", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 23, name: "愛知", color: "#7cdc92", hoverColor: "#aceebb"},
    {code : 24, name: "三重", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 25, name: "滋賀", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 26, name: "京都", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 27, name: "大阪", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 28, name: "兵庫", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 29, name: "奈良", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 30, name: "和歌山", color: "#7cdc92", hoverColor: "#fff19c"},
    {code : 31, name: "鳥取", color: "#7cdc92", hoverColor: "#ffe0a3"},
    {code : 32, name: "島根", color: "#7cdc92", hoverColor: "#ffe0a3"},
    {code : 33, name: "岡山", color: "#7cdc92", hoverColor: "#ffe0a3"},
    {code : 34, name: "広島", color: "#7cdc92", hoverColor: "#ffe0a3"},
    {code : 35, name: "山口", color: "#7cdc92", hoverColor: "#ffe0a3"},
    {code : 36, name: "徳島", color: "#7cdc92", hoverColor: "#ffbb9c"},
    {code : 37, name: "香川", color: "#7cdc92", hoverColor: "#ffbb9c"},
    {code : 38, name: "愛媛", color: "#7cdc92", hoverColor: "#ffbb9c"},
    {code : 39, name: "高知", color: "#7cdc92", hoverColor: "#ffbb9c"},
    {code : 40, name: "福岡", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 41, name: "佐賀", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 42, name: "長崎", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 43, name: "熊本", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 44, name: "大分", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 45, name: "宮崎", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 46, name: "鹿児島", color: "#7cdc92", hoverColor: "#ffbdbd"},
    {code : 47, name: "沖縄", color: "#7cdc92", hoverColor: "#f5c9ff"},
  ],

  showsPrefectureName: false,
  width: 700,
  movesIslands: true,
//   borderLineColor: "#000000",
  drawsBoxLine:false,
  lineColor : "#ffffff",
  lineWidth : 0.5,
  borderLineColor : "#ffffff",
  borderLineWidth : 2,
  lang: 'ja',
  onSelect: function(jsonData){
    var selectedAreaName = jsonData.name
    var selectedMarker = json.marker.find(marker => marker.pref === selectedAreaName);

    // 一致する場合、latとlngを取得
    if (selectedMarker) {
      var selectedLat = selectedMarker.lat;
      var selectedLon = selectedMarker.lng;
      var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedLat}&lon=${selectedLon}&lang=ja&units=metric&appid=${apiKey}`;
      // HTTPリクエストを送信
      fetch(apiUrl)
  
      //.then():非同期操作の成功時に実行されるコードブロックを定義する
      //HTTPリクエストから受け取ったレスポンスデータをJSON形式からJavaScriptオブジェクトに変換
      .then(response => response.json())
  
      //data:非同期操作から返されたデータが格納される
      .then(data => {
      function unixToUtc(unix) {
        var date = new Date(unix * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
      }
      // 天気情報をコンソールに表示
      console.log(data);
      
      //現在の天気を表示
      document.querySelector('#name').textContent = selectedAreaName;
      var weather = data.weather[0].description;
      document.querySelector('#weather').textContent = weather;
      var temp = Math.round(data.main.temp);
      document.querySelector('#temperature').textContent = temp
      var maxTemp = Math.round(data.main.temp_max);
      document.querySelector('#temperatureMax').textContent = maxTemp
      var minTemp = Math.round(data.main.temp_min);
      document.querySelector('#temperatureMin').textContent = minTemp
      var humidity = Math.round(data.main.humidity);
      document.querySelector('#humidity').textContent = humidity
      var feels_like = Math.round(data.main.feels_like);
      document.querySelector('#feels_like').textContent = feels_like
      var pressure = Math.round(data.main.pressure);
      document.querySelector('#pressure').textContent = pressure
      var speed = Math.round(data.wind.speed);
      document.querySelector('#speed').textContent = speed
      var clouds = Math.round(data.clouds.all);
      document.querySelector('#clouds').textContent = clouds
      var deg = Math.round(data.wind.deg);
      document.querySelector('#deg').textContent = deg
      var sunrise = data.sys.sunrise;
      document.querySelector('#sunrise').textContent = unixToUtc(sunrise);
      var sunset = data.sys.sunset;
      document.querySelector('#sunset').textContent = unixToUtc(sunset);
      //アイコン画像のURLを作成
      var iconId = data.weather[0].icon;
      var iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      //アイコン画像を表示
      var iconImg = document.createElement('img');
      // imgのsrcを設定
      iconImg.src = iconUrl;
      //気温をhtmlに表示
      var weatherIcon = document.querySelector('#weatherIcon');
      weatherIcon.innerHTML = '';
      var iconImg = document.createElement('img');
      iconImg.src = iconUrl;
      weatherIcon.appendChild(iconImg) 
      })
      .catch(error => {
      console.error('エラー:', error);
      });
    } else {
      console.log("選択された地域の情報が見つかりませんでした。");
    }
  }
});
  
function updateClock() {
  var nowTime = new Date();
  var nowHour = nowTime.getHours();
  var nowMin = nowTime.getMinutes();
  var msg = nowHour + ":" + (nowMin < 10 ? '0' : '') + nowMin;

  document.getElementById("RealtimeClockArea").innerHTML = msg;
}

// 最初に1回呼び出して初期化
updateClock();

// 1分ごとにupdateClock関数を呼び出す
setInterval(updateClock, 60000); // 60000ミリ秒 = 1分