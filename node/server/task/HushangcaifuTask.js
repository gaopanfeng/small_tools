/**
 * Created by gaopanfeng on 2018/1/2.
 */
let axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const Sms = require('../util/Sms')

const instance = axios.create();
//chrome useragent
instance.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3298.4 Safari/537.36";
axios = instance;

const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';
let lastTime;
async function task(){
    //let ret = await axios.get('http://mingyi.sogou.com/sf/wm/backend/index.html');
    let ret = await axios.get('https://www.hushangcaifu.com/index/list?page=1&time=5');
    if(ret.status===200){
        const $ = cheerio.load(ret.data);
        let $list = $('.list-bord-mid');

        let timeStr = $list.eq(0).find('.list-td-f').html();
        if(lastTime === timeStr){
            return;
        }
        lastTime = timeStr;

        let time = moment(timeStr);
        if(time.diff(moment())>=-120000){
            await Sms.sendSms([15210265936],'warn HS time:'+timeStr);
        }
    }
}

module.exports = task;

