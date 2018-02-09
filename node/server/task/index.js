/**
 * Created by gaopanfeng on 2018/1/2.
 */

const HushangcaifuTask = require('./HushangcaifuTask');
const schedule = require('node-schedule');
const moment = require('moment');
const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';

function run(name,rule,task){
    schedule.scheduleJob(rule, async function(){
        console.log(moment().format(DATE_FORMATE));
        console.log(`[${name}]start`);
        let error = 0;
        try{
            let ret = await task();
        }catch(e){
            console.error(e);
            console.log(`[${name}]error`,e);
            error = 1;
        }
        console.log(`[${name}]end,error=${error}`);
    });
}

run('HushangcaifuTask','0 * * * * *',HushangcaifuTask);
// HushangcaifuTask().then(ret=>{
//     console.log(ret);
// }).catch(err=>{
//     console.log(err);
// })
// StatSmsTask().then(ret=>{
//     console.log(ret);
// }).catch(err=>{
//     console.log(err);
// })

