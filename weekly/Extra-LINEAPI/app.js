// 引用linebot SDK
var linebot = require('linebot');
var checkParking = require('./parkingservice.js')

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1622635628',
  channelSecret: 'acc33c180a93ee2da5617d14a2011bc8',
  channelAccessToken: 'OmWxcyl4vFtym+HYM4jOY/qUQctx+pFRuCxm0EodQyp52Iuipq0Z8NxORlqLcuPxLH4ex9WvuiSn+LaajQV+n/LeBqyIDvOFgz5e93IRPcIcZq16T4clArk9UeRzuatkVzkJTiFJklSfgSE4u1iXOgdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  console.log(event.message)
  if (event.message.text === 'FUCK'){
      checkParking().then(function(res){
        event.reply(`油麻地停車場的地址是：${res}`)
      }).catch(function(err){
        event.reply(`出錯了！原因是${err}`)
      });
  } else {
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
      }).catch(function (error) {
        console.log(error)
        // 當訊息回傳失敗後的處理
      });
  }
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});