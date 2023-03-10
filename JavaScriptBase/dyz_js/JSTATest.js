console.log("JS TATest");

// JS 方法添加属性 ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 格式一
// function ThinkingDataAnalyticsLib() {};
// ThinkingDataAnalyticsLib.prototype.name = "abc";

// var thindyz = new ThinkingDataAnalyticsLib();
// for (const key in thindyz) {
//     console.log("key:" + key + " value:" + thindyz[key]);
// }


// 格式二
// var ThinkingDataAnalyticsLib1 = function ThinkingDataAnalyticsLib() {};
// ThinkingDataAnalyticsLib1.prototype.name = "abc";
// ThinkingDataAnalyticsLib1.age = 22;//错误，必须要加prototype

// var thindyz = new ThinkingDataAnalyticsLib1();
// for (const key in thindyz) {
//     console.log("key:" + key + " value:" + thindyz[key]);
// }

// JS 方法添加属性 ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// JS typeof exports、module、define、this、self ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var aaa = typeof exports;
// console.log(aaa);
// var bbb = typeof module;// typeof 之后返回的 是字符串
// console.log(bbb);
// if (bbb === 'undefined') {
//     console.log("bbb 等于 'undefined'")
// } else {
//     console.log("bbb 不等于 'undefined'")
// }
// if (bbb === undefined) {
//     console.log("bbb 等于 undefined")
// } else {
//     console.log("bbb 不等于 undefined")
// }
// var ccc = typeof define;
// console.log(ccc);
// var ddd = typeof console;//object
// console.log(ddd);
// var eee = typeof Symbol;//function
// console.log(eee);
// var fff = typeof Symbol.iterator;//symbol
// console.log(fff);

// function i() {
//     return console.log.apply(console, arguments);//这里参数必须传arguments，直接传字符串啥的 会报错
//     console.log("return 后面的 代码 会执行吗");
// }
// i("呵呵");
// i("aaaa", "DDD", "HHH");


// console.log(self);
// console.log(this);
// console.log(this || self);


// var obj; // 是undefined 不是 字符串undefined
// console.log(obj);
// if (obj === void 0) {
//     console.log("obj 等于 void 0");
// } else {
//     console.log("obj 不等于 void 0");
// }
// if (obj === undefined) {
//     console.log("obj 等于 undefined");
// } else {
//     console.log("obj 不等于 undefined");
// }
// if (obj === 'undefined') {
//     console.log("obj 等于 'undefined'");
// } else {
//     console.log("obj 不等于 'undefined'");
// }

// JS typeof exports、module、define、this、self ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// forEach、slice.call ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 数组可以forEach
// Array.prototype.slice.call(arguments, 1); 转数组

// function extendDyz(obj) {
//     // console.log(obj);
//     // console.log(arguments);

//     // for (i = 0; i < arguments.length; i++) {
//     //     console.log("key:" + i + " value:" + arguments[i]);
//     //     console.log(arguments[i]);
//     // }

//     // var arrDyz = ["aaa","bbb","ccc"];
//     // arrDyz.array.forEach(element => {
//     //     console.log(element);
//     // }); // 不能添加 array，添加 array 就报错
    
//     // arrDyz.forEach(element => {
//     //     console.log(element);
//     // });

//     // arguments.forEach(element => {
//     //     console.log(element);
//     // });// 报错，因为arguments 不是数组

//     // var arr1 = Array.prototype.slice.call(arrDyz,1);
//     // console.log(arr1);
//     // arr1.forEach(element => {
//     //     console.log(element);
//     // });
//     // arr1.forEach(function(item) {
//     //     console.log(item);
//     // });

//     // console.log(Array.prototype.slice.call(arguments, 1));//转数组，从下标为1的参数开始，下标是从0开始算的

//     eachDyz(Array.prototype.slice.call(arguments, 1), function (source) {
//         console.log("===>>>>:开始2222");
//         console.log(source);
//         for (var prop in source) {
//             console.log("prop: " + prop + " value: " + source[prop]);
//             if (source[prop] !== void 0) {
//                 obj[prop] = source[prop];
//             }
//         }
//         console.log("===>>>>:结束2222");
//     }) // 这里面没有传入context，所以context没用
//     console.log("结束3333");

//     return obj;

// }

// var eachDyz = function (obj, iterator, context) {
//     if (obj.forEach === Array.prototype.forEach) {
//         console.log("===>>>>:开始1111");
//         obj.forEach(iterator, context);
//         console.log("===>>>>:结束1111");
//     }

// }

// var DEFAULT = {
//     appid: "1248961083726hf613531",
//     send_method: "image",
// };

// var param = {
//     name: "dengyazhou",
//     age: 23,
// };

// var objDyz = extendDyz({},DEFAULT, param);
// console.log(objDyz);

// forEach、slice.call ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Object.prototype.hasOwnProperty ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// hasOwnProperty 是否有相应的属性
// var obj = {
//     name: "dengyazhou",
//     age: 23,
// };
// for (var key in obj) {
//     console.log(key);
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         console.log("==== yes: " + key);
//     } else {
//         console.log("==== no: " + key);
//     }
// }

// Object.prototype.hasOwnProperty ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// 函数名调用 call ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function testCall(key1, key2, key3) {
//     console.log("key1: " + key1 + " key2: " + key2 + " key3: " + key3);
// }

// var ret1 = testCall.call("AA","BB","CC","DD"); // key1: BB key2: CC key3: DD
// console.log(ret1);
// var ret2 = testCall("AA","BB","CC","DD"); // key1: AA key2: BB key3: CC
// console.log(ret2);
// 函数名调用 call ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// || ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var person = {
//     name: "嘿嘿",
//     age: 23,
// }

// var person;

// var p = person || {}; // 如果person没有定义，那么就返回 {},都则返回 person
// console.log(p);

// || ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// cookie 存 和 取 ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 存
// document.cookie = "car=凯迪拉克";
// document.cookie = "city=SH";

// 取
// 遍历 然后 对比
// var ca = document.cookie.split(';');
// console.log(ca);
// var nameEQ = 'city=';
// for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     console.log(c);
//     while (c.charAt(0) === ' ') {// 这里换成 if 好像也可以
//         c = c.substring(1, c.length);//去掉前面的空格
//         console.log(c);
//     }
//     if (c.indexOf(nameEQ) === 0) {
//         var retStr = c.substring(nameEQ.length, c.length);
//         console.log(retStr);
//     }
// }

// cookie 存 和 取 ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// TA Log ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function _defineProperties(target, props) {
//     console.log("====>>>>:target");
//     console.log(target);
//     for (var i = 0; i < props.length; i++) {
//         var descriptor = props[i];
//         descriptor.enumerable = descriptor.enumerable || false;
//         descriptor.configurable = true;
//         if ("value" in descriptor) descriptor.writable = true;
//         console.log(descriptor);
//         Object.defineProperty(target, descriptor.key, descriptor);
//     }
//     // console.log(target.i);
//     // target.i()
// }


// function _classCallCheck(instance, Constructor) {
//     if (!(instance instanceof Constructor)) {
//         console.log("instance 不是 Constructor 类型");
//     } else {
//         console.log("instance 是 Constructor 类型");
//     }
// }

// function _createClass(Constructor, protoProps, staticProps) {
//     console.log("_createClass");
//     if (protoProps) _defineProperties(Constructor.prototype, protoProps);// new 出来的对象 才可以调用哦
//     if (staticProps) _defineProperties(Constructor, staticProps);// 直接类名或方法名 就可以调用
//     return Constructor;
// }


// var Log = 
// function () {
//     function Log(){
//         _classCallCheck(this, Log);
//     }
//     // _createClass(Log, null, [{
//     //     key: "i",
//     //     value: function i() {
//     //         console.log("iiiiiiiiii");
//     //         if (this.showLog == true) {
//     //             console.log("this.showLog == true");
//     //         } else {
//     //             console.log("this.showLog !== true")
//     //         }
//     //     }
//     // },{
//     //     key: "w",
//     //     value: function w() {
//     //         console.log("wwwwwwwww");
//     //     }
//     // }]);
    
//     return Log;
// }();

// var aa = new Log(); // instance 是 Constructor 类型
// var bb = Log(); // instance 不是 Constructor 类型

// console.log(Log);
// Log.showLog = true;
// Log.i();


// var PageLifeCycle = function () {
//     function PageLifeCycle(taLib, config) {
//         console.log(taLib);
//         console.log(config);
//     }

//     _createClass(PageLifeCycle,[{
//         key: "i",
//         value: function i() {
//             console.log("iiiiiiiii");
//         }
//     },{
//         key: "w",
//         value: function w() {
//             console.log("iiiiiiiii");
//         }
//     }]);
//     return PageLifeCycle;
// }();

// var page = new PageLifeCycle("AAA", "BBB");
// // console.log(page.i);
// page.i();


// TA Log ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// TA test  ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 字符串 中 是否包含 
// 加i和不加i 好像没啥区别

// function os() {
//     var a = navigator.userAgent;
//     console.log(a);
//     if (/Windows/i.test(a)) {
//         if(/Phone/.test(a) || /WPDesktop/.test(a)) {
//             return 'Windows Phone';
//         }
//         return 'Windows';
//     } else if (/(iPhone|iPad|iPod)/.test(a)) {
//         return 'iOS';
//     } else if (/Android/.test(a)) {
//         return 'Android';
//     } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
//         return 'BlackBerry';
//     } else if (/Mac/i.test(a)) {
//         return 'Mac OS X';
//     } else if (/Linux/.test(a)) {
//         return 'Linux';
//     } else if (/CrOS/.test(a)) {
//         return 'Chrome OS';
//     } else {
//         return '';
//     }
// }

// console.log(os());

// TA test  ==========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

