/**
 * Created by gaopanfeng on 2017/12/25.
 */
const axios = require('axios')
const _ = require('lodash');
const config = require('../config');

async function sendSms (mobiles,content) {
    try {

        const params = {
            number:15210265936,
            // number: mobiles.join(','),
            appid: config.sms.appid,
            type: 'json',
            encode:'utf8',
            desc: content
        }

        //console.log(JSON.stringify(params));

        let ret = await axios.get(config.sms.url, {
            params: params
        });
        if(ret.status===200){
            return {mobiles,res:ret.data}
        }else{
            return {error:ret}
        }
    }catch(e){
        console.log(e);
        return {error:e}
    }
}
// 15210280169
// sendSms([15210265936],'搜狗').then(ret=>{
//     console.log(ret);
// })

exports.sendSms = async function (mobiles,content) {
    if(mobiles.length===0){
        throw new Error('手机号为空')
    }
    if(mobiles.length<=100){
        let ret = await sendSms(mobiles,content);
        return [ret];
    }
    let group = [];
    let arr = mobiles.slice();
    while(arr.length>100){
        group.push(arr.splice(0,100));
    }
    return await Promise.all(group.map(it=>{
        return sendSms(it,content);
    }));
}
