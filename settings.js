/*
› Create By @Jaka
› Base Ori @Jaka
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6283817161861','6283817161861','6283817161861'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6283817161861'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6283817161861' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'rizki' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'ikybot-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ikybot' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UC4nKoTls09OfD-GUTKt-6OA'
global.ig = 'https://instagram.com/ikykunnnn'
global.mygc = 'https://chat.whatsapp.com/KcMIbBUddqjIoNmGCrRU5m'
global.myweb = 'https://s.id/RiyAPIs'
global.email = 'rizkiku683@gmail.com'
global.region = 'jepang'

//—————「 Set Wm 」—————//
global.packname = '© ikybot-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'rizki' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/14e6e405397e283dac8ec.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Udh tod._',
admin: '_Lu admin tod?!_',
botAdmin: '_Jadi in admin dulu bot nya tod_',
owner: '_Fitur Khusus Jaka tersayang_',
group: '_Fitur Hanya bisa di grup tod!_',
private: '_Fitur Hanya bisa di pribadi cjat tod!_',
bot: '_Fitur Khusus Penguna Bot Ya Tod_',
wait: '_Loanjing..._',
error: '_Error ajg, kalo ga mo error donasi!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
