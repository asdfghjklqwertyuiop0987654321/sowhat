var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "최신곡 : Super lady",
state : "`추천곡: 아픈 건 딱 질색이니깐`",
assets : {
large_image : "bigimmoral",
large_text : "선공개곡 WIFE",
small_image : "bigimmoral",
large_text : "선공개곡 WIFE"
},
buttons : [{label : "Super lady 뮤비" , url : "https://youtu.be/6f3RzjXPQwA?si=unFA7yjEC9EY-FTu"},{label : "Super lady 퍼포먼스 ver.",url : "https://youtu.be/IIgWfz6FTSM?si=SmXl4mD5m6E9pRQa"}]
}
})
})
client.login({ clientId : "1198526405550551060" }).catch(console.error);