$(function () {

    initView();

    $("#loginBtn").click(function () {
        if ($("#rememberMe").is(":checked")) {
            setCookie("cookie_id_username", $("#id_username").val());
            setCookie("cookie_password", $("#id_password").val());
            setCookie("rememberMe", true);
        } else {
            delCookie("cookie_id_username");
            delCookie("cookie_password");
            delCookie("rememberMe");
        }


        window.location.reload()
    });
});

function initView() {
    if (getCookie("cookie_id_username")) {
        $("#id_username").val(getCookie("cookie_id_username"));
    }
    if (getCookie("cookie_password")) {
        $("#id_password").val(getCookie("cookie_password"));
    }
    if (getCookie("rememberMe")) {
        $("#rememberMe").attr("checked", getCookie("rememberMe"));
    }
    $("#id_username").focus(function () {
        this.select();
    });
    $("#id_password").focus(function () {
        this.select();
    });
}

/**
 * 写入cookie
 * @param name  cookie 名
 * @param value  cookie 值
 */
function setCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * 删除cookie
 * @param name
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/**
 * 读取cookie
 * @param name
 * @returns
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
 
