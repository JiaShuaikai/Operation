(function () {
    document.querySelector("body").remove()
    document.querySelector("head").remove()

    document.querySelector("html").append(document.createElement("head"))
    document.querySelector("html").append(document.createElement("body"))


    document.querySelector("head").innerHTML = `
      <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>注册表单</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .container {
      width: 1024px;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0010pxrgba (0, 0, 0, 0.1);
    }

    fieldset {
      border: 2px solid #3cb1c3;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
    }

    legend {
      text-align: center;
      font-size: 1em;
      font-weight: bold;
      color: black;
    }

    .form-group {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .form-grouplabel {
      width: 100px;
      font-size: 14px;
      color: #555;
    }

    .form-groupinput[type="text"],
    .form-groupinput[type="password"],
    .form-groupinput[type="file"],
    .form-groupselect,
    .form-grouptextarea {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .form-groupinput[type="radio"] {
      margin: 05px00;
    }

    .hint-text {
      font-size: 12px;
      color: #888;
      margin-left: 10px;
      max-width: 200px;
    }

    .button-group {
      text-align: center;
      margin-top: 20px;
    }

    .button-groupbutton {
      padding: 8px16px;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      color: #fff;
      background-color: #1e90ff;
      cursor: pointer;
      margin: 010px;
    }

    .button-groupbutton.reset {
      background-color: #888;
    }
  </style>
   `

    document.querySelector("body").innerHTML = `
      <div class="container">
    <form>
      <fieldset>
        <legend>登录信息资料</legend>
        <div class="form-group">
          <label for="login-name">登陆名称：</label>
          <input type="text" id="login-name" placeholder="请输入登录用户名" />
          <div class="hint-text">
            注意：请填写登录用用户名不得少于5位，一旦注册不能修改。
          </div>
        </div>
        <div class="form-group">
          <label for="password">登陆密码：</label>
          <input type="password" id="password" placeholder="请输入密码" />
          <div class="hint-text">
            注意：请填写密码作为登录凭证，不得少于6位。
          </div>
        </div>
        <div class="form-group">
          <label for="confirm-password">确认密码：</label>
          <input type="password" id="confirm-password" placeholder="再次输入密码" />
          <div class="hint-text">
            注意：请填写确认密码，两次密码输入要一致。
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>登录信息资料</legend>
        <div class="form-group">
          <label for="nickname">用户昵称：</label>
          <input type="text" id="nickname" placeholder="请输入用户昵称" />
          <div class="hint-text">
            注意：请填写你的昵称，注册后可以在个人中心更改。
          </div>
        </div>
        <div class="form-group">
          <label>用户性别：</label>
          <input type="radio" name="gender" value="male" /> 男
          <input type="radio" name="gender" value="female" /> 女
          <input type="radio" name="gender" value="secret" /> 保密
          <div class="hint-text">注意：请选择您的性别信息。</div>
        </div>
        <div class="form-group">
          <label for="city">所在城市：</label>
          <select id="city">
            <option value="">-- 选择城市 --</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
          </select>
          <div class="hint-text">注意：请填写所在城市。</div>
        </div>
        <div class="form-group">
          <label>个人爱好：</label>
          <label><input type="checkbox" value="shopping" /> 上网购物</label>
          <label><input type="checkbox" value="gaming" /> 网络游戏</label>
          <label><input type="checkbox" value="food" /> 品尝美食</label>
          <label><input type="checkbox" value="outing" /> 户外运动</label>
          <label><input type="checkbox" value="other" /> 其他</label>
          <div class="hint-text">注意：请选择您的个人爱好。</div>
        </div>
        <div class="form-group">
          <label for="avatar">个人头像：</label>
          <input type="file" id="avatar" />
          <div class="hint-text">注意：请上传您的个人头像。</div>
        </div>
        <div class="form-group">
          <label for="signature">个性签名：</label>
          <textarea id="signature" rows="3" placeholder="请输入个性签名"></textarea>
          <div class="hint-text">注意：请填写您的个性签名。</div>
        </div>
        <div class="form-group">
          <label for="captcha">验证码：</label>
          <input type="text" id="captcha" placeholder="请输入验证码" />
          <div class="hint-text">注意：请输入验证码。</div>
        </div>
      </fieldset>

      <fieldset>
        <legend>注册条款</legend>
        <div class="form-group">
          <textarea style="width: 100%" rows="4" readonly>
注册前请仔细阅读，您只有无条件接受以下所有服务条款，才能继续申请；
如果用户提供的资料不准确，不真实，不合法有效，
本站保留结束用户使用本站各项服务的权利。
</textarea>
        </div>
        <div class="form-group">
          <input type="checkbox" id="agreement" />
          <label for="agreement">已经仔细阅读并同意服务条款。</label>
        </div>
      </fieldset>

      <div class="button-group">
        <button type="submit">立即注册</button>
        <button type="reset" class="reset">重新填写</button>
      </div>
    </form>
  </div>
    `

  
})();
