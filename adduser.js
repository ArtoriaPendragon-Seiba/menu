var axios = require('axios');
var fs = require('fs');
var iconv = require('iconv-lite');
data = fs.readFileSync('D:\\Github\\React\\test-app\\name.csv');
var buffer = iconv.decode(data, 'UTF-8'); //从gbk解码
var string = buffer.toString();
var line_list = string.split('\r\n');
var male_name = [];
var female_name = [];
var last_name = [];
var email = ['gmail', '163', 'qq', 'yahoo', 'sohu', 'sina', 'baidu']
for (var i in line_list) {
    var item_list = line_list[i].split(',');
    male_name[i] = item_list[0];
    female_name[i] = item_list[1];
    last_name[i] = item_list[2]
}
console.log(last_name)
console.log(female_name)
console.log(male_name)
for (var i = 0; i < 200; i++) {
    var fn = Math.floor(Math.random() * 101);
    var ln = Math.floor(Math.random() * 101);
    var em = Math.floor(Math.random() * 7);
    var age = Math.floor(Math.random() * 70);
    var user = {};
    if (i % 2 == 0) {
        user = {
            firstName: male_name[fn],
            lastName: last_name[ln],
            gender: 'male',
            age: age,
            email: `${male_name[fn]}.${last_name[ln]}@${email[em].com}`,
            username: `$${male_name[fn]}.${last_name[ln]}${age}`,
            password: `$${male_name[fn]}.${last_name[ln]}${age}`,
        }
    }
    else {
        user = {
            firstName: female_name[fn],
            lastName: last_name[ln],
            gender: 'female',
            age: age,
            email: `${male_name[fn]}.${last_name[ln]}@${email[em].com}`,
            username: `$${male_name[fn]}.${last_name[ln]}${age}`,
            password: `$${male_name[fn]}.${last_name[ln]}${age}`,
        }
    }
    axios.post('/user', user).then(res => console.log(res)).catch(err => console.log(err));
}