<template>
  <div class="wrap" id="wrap">
    <div class="logGet">
      <!-- 头部提示信息 -->
      <div class="logD logDtip">
        <p class="p1">登录</p>
      </div>
      <!-- 输入框 -->
      <div class="lgD">
        <label class="lgD-t">账号</label>

        <input type="text" placeholder="手机号/邮箱/会员名" id="l-input" />
      </div>
      <div class="lgD">
        <label class="lgD-t">密码</label>
        <input type="password" placeholder="请输入登录密码" id="l-input" />
      </div>
      <div class="logC">
        <a>
          <button @click="login">登 录</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      //导航过来 点击存入数据
      sessionStorage.setItem("user", true);

      if (this.$route.query.redirect) {
        //如果登录后需要重定向 通过下面方式重定向
        let redirect_path = this.$route.query.redirect;

        this.$router.push({ path: redirect_path });
      } else {
        //否则直接转到Home页面
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
body {
  /* background-image: url("../assets/logo.png"); */
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

* {
  margin: 0;
  padding: 0;
}

#wrap {
  height: 600px;
  width: 100%;
  background-position: center center;
  position: relative;
}

#head {
  height: 120px;
  width: 100;
  background-color: #66cccc;
  text-align: center;
  position: relative;
}

#wrap .logGet {
  height: 408px;
  width: 368px;
  background-color: #ffffff;
  top: 100px;
  right: 15%;
}

.logC a button {
  width: 100%;
  height: 45px;
  background-color: #68a6fd;
  border: none;
  color: white;
  font-size: 18px;
}

.logGet .logD.logDtip .p1 {
  display: inline-block;
  font-size: 28px;
  margin-top: 30px;
  width: 86%;
}

#wrap .logGet .logD.logDtip {
  width: 86%;
  border-bottom: 1px solid #68a6fd;
  margin-bottom: 60px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
}
.lgD-t {
  position: absolute;
  top: 17px;
  transition: bottom 0.2s;
  font-size: 18px;
}
.logGet .lgD img {
  position: absolute;
  top: 12px;
  left: 8px;
}

.logGet .lgD input {
  width: 100%;
  height: 42px;
  text-indent: 2.5rem;
}

#wrap .logGet .lgD {
  width: 86%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}

#wrap .logGet .logC {
  width: 86%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}

.title {
  font-family: "宋体";
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  font-size: 36px;
  height: 40px;
  width: 30%;
}
.copyright {
  font-family: "宋体";
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  height: 60px;
  width: 40%;
  text-align: center;
}
.lgD {
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
}
#l-input {
  border: none;
  width: 100%;
  display: block;
  padding: 12px 12px 2px 6px;
  font-size: 16px;
  background: none;
  color: #000;
  /* text-indent: 0; */
  border-bottom: 1px solid #e0e0e0;
}
#l-input:focus {
  outline: none;
  border-bottom: 1px solid #2196f3;
}

#l-input:focus {
  bottom: 30px;
  color: #2196f3;
}
</style>