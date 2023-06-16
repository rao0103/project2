import jQuery from 'jquery';
import _ from 'lodash'; 
import { a } from '@/script/app'  
import  '@/style/index.less'  
import  '@/index.css'  
console.log(a);
console.log(a);
jQuery(function(){
    console.log(123);
})
jQuery.ajax({
    url: 'http://127.0.0.1:3000/api/abc',
})

jQuery.ajax({
    url:'http://127.0.0.1:3000/api1/abc1',
})
console.log(_);
console.log('process.env.NODE_ENV:',process.env.NODE_ENV);

// 20:07
// 21:19分 验证gitee ——> github同步功能