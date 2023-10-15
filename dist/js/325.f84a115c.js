"use strict";(self["webpackChunk_06_gjw_mobile"]=self["webpackChunk_06_gjw_mobile"]||[]).push([[325],{8325:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"tel"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"4",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"246810",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(" "+t._s(t.second===t.totalSecond?"获取验证码":`${t.second}秒后重新发送`))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],a=i(4471);const n=()=>a.Z.get("/captcha/image"),c=(t,e,i)=>a.Z.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:i}}),r=(t,e)=>a.Z.post("/passport/login",{form:{isParty:!1,partyData:{},mobile:t,smsCode:e}});var l={name:"LoginIndex",data(){return{mobile:"",picCode:"",picKey:"",picUrl:"",msgCode:"",totalSecond:6,second:6,timer:null}},created(){this.getPicCode()},destroyed(){clearInterval(this.timer)},methods:{async getPicCode(){const t=await n();this.picUrl=t.data.base64,this.picKey=t.data.key},validFn(){return/^1[3-9]\d{9}$/.test(this.mobile)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入4位的图形验证码"),!1):(this.$toast("请输入正确的手机号"),!1)},async getCode(){this.timer||this.totalSecond===this.second&&this.validFn()&&(await c(this.picCode,this.picKey,this.mobile),this.$toast("已发送,请注意查收"),this.second--,this.timer=setInterval((()=>{this.second--,this.second<=0&&(clearInterval(this.timer),this.timer=null,this.second=this.totalSecond)}),1e3))},async login(){if(!this.validFn())return this.$toast("请输入正确的手机号");if(!/^\d{6}$/.test(this.msgCode))return this.$toast("请输入6位的短信验证码");const t=await r(this.mobile,this.msgCode);this.$toast("登录成功"),this.$store.commit("user/setUserInfo",t.data),setTimeout((()=>{const t=this.$route.query.backUrl;t?this.$router.replace(t):this.$router.replace("/")}),2e3)}}},d=l,m=i(1001),p=(0,m.Z)(d,s,o,!1,null,"3b3735e3",null),h=p.exports}}]);
//# sourceMappingURL=325.f84a115c.js.map