验证n位的数字：^\d{n}$

验证至少n位数字：^\d{n,}$

验证m-n位的数字：^\d{m,n}$

验证零和非零开头的数字：^(0|[1-9][0-9]*)$

验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$

验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$

验证非零的正整数：^\+?[1-9][0-9]*$

验证非零的负整数：^\-[1-9][0-9]*$

验证非负整数（正整数 + 0） ^\d+$

验证非正整数（负整数 + 0） ^((-\d+)|(0+))$

验证长度为3的字符：^.{3}$

验证由26个英文字母组成的字符串：^[A-Za-z]+$

验证由26个大写英文字母组成的字符串：^[A-Z]+$

验证由26个小写英文字母组成的字符串：^[a-z]+$

验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$

验证由数字、26个英文字母或者下划线组成的字符串：^\w+$

验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。

验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+

验证汉字：^[\u4e00-\u9fa5],{0,}$

验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$

验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$

验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。

验证身份证号（15位或18位数字）：^\d{15}|\d{}18$

验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”

验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。

整数：^-?\d+$

非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$

正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$

非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$

负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$

浮点数 ^(-?\d+)(\.\d+)?$

××××××××××××××××××××××××××××××××××××××

以下未经测试，请验证后使用

1.只能输入数字和英文的： 

<input onkeyup="value=value.replace(/[\W]/g,'') " onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" ID="Text1" NAME="Text1">

2.只能输入数字的： 

<input onkeyup="value=value.replace(/[^\d]/g,'') " onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" ID="Text2" NAME="Text2">

3.只能输入全角的： 

<input onkeyup="value=value.replace(/[^\uFF00-\uFFFF]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\uFF00-\uFFFF]/g,''))" ID="Text3" NAME="Text3">

4.只能输入汉字的： 

<input onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" ID="Text4" NAME="Text4">

5.邮件地址验证：

var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$"

var re = new RegExp(regu);

if (s.search(re) != -1) {

return true;

} else {

window.alert ("请输入有效合法的E-mail地址 ！")

return false;

}

6.身份证：

"^\\d{17}(\\d|x)$"

7.17种正则表达式

"^\\d+$"　　//非负整数（正整数 + 0） 

"^[0-9]*[1-9][0-9]*$"　　//正整数 

"^((-\\d+)|(0+))$"　　//非正整数（负整数 + 0） 

"^-[0-9]*[1-9][0-9]*$"　　//负整数 

"^-?\\d+$"　　　　//整数 

"^\\d+(\\.\\d+)?$"　　//非负浮点数（正浮点数 + 0） 

"^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$"　　//正浮点数 

"^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$"　　//非正浮点数（负浮点数 + 0） 

"^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$"　　//负浮点数 

"^(-?\\d+)(\\.\\d+)?$"　　//浮点数 

"^[A-Za-z]+$"　　//由26个英文字母组成的字符串 

"^[A-Z]+$"　　//由26个英文字母的大写组成的字符串 

"^[a-z]+$"　　//由26个英文字母的小写组成的字符串 

"^[A-Za-z0-9]+$"　　//由数字和26个英文字母组成的字符串 

"^\\w+$"　　//由数字、26个英文字母或者下划线组成的字符串 

"^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$"　　　　//email地址 

"^[a-zA-z]+://(\\w+(-\\w+)*)(\\.(\\w+(-\\w+)*))*(\\?\\S*)?$"　　//url

=============================================

1.取消按钮按下时的虚线框 

　　在input里添加属性值 hideFocus 或者 HideFocus=true 

2.只读文本框内容 

在input里添加属性值 readonly 

3.防止退后清空的TEXT文档(可把style内容做做为类引用) 

　　<INPUT style=behavior:url(#default#savehistory); type=text id=oPersistInput> 

4.ENTER键可以让光标移到下一个输入框 

　　<input onkeydown="if(event.keyCode==13)event.keyCode=9" > 

5.只能为中文(有闪动) 

　　<input onkeyup="value="/value.replace(/[" -~]/g,’’)" onkeydown="if(event.keyCode==13)event.keyCode=9"> 

6.只能为数字(有闪动) 

　　<input onkeyup="value="/value.replace(/["^\d]/g,’’) "onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\d]/g,’’))"> 

7.只能为数字(无闪动) 

　　<input ime-mode:disabled" onkeydown="if(event.keyCode==13)event.keyCode=9" onKeyPress="if ((event.keyCode<48 || event.keyCode>57)) event.returnValue=false"> 

8.只能输入英文和数字(有闪动) 

　　<input onkeyup="value="/value.replace(/[\W]/g,"’’)" onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\d]/g,’’))"> 

9.屏蔽输入法 

　　<input type="text" name="url" ime-mode:disabled" onkeydown="if(event.keyCode==13)event.keyCode=9"> 

10. 只能输入 数字，小数点，减号（-） 字符(无闪动) 

　　<input onKeyPress="if (event.keyCode!=46 && event.keyCode!=45 && (event.keyCode<48 || event.keyCode>57)) event.returnValue=false"> 

11. 只能输入两位小数，三位小数(有闪动) 

　　<input maxlength=9 onkeyup="if(value.match(/^\d{3}$/))value="/value.replace(value,parseInt(value/10))" ;value="/value.replace(/\.\d*\./g,’."’)" onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 && event.keyCode!=45 || value.match(/^\d{3}$/) || /\.\d{3}$/.test(value)) {event.returnValue=false}" id=text_kfxe name=text_kfxe>


去掉首尾的空格可以使用 $.trim();


去掉字符串中的特殊字符，空格，
        function stripscript(s){
            // 去掉所有的 空格 和 特殊字符
            var pattern = new RegExp("[ `~!@#$^&*()=+|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
            var rs = "";
            for (var i = 0; i < s.length; i++) {
                rs = rs+s.substr(i, 1).replace(pattern, '');
            }
            return rs;
        }


// /*只输入数字和一个小数点*/
handleValidate(obj) {
        obj = obj.replace(/[^\d.]/g, "");
        //必须保证第一位为数字而不是.   
        obj = obj.replace(/^\./g, "");
        //保证只有出现一个.而没有多个.   
        obj = obj.replace(/\.{2,}/g, ".");
        //保证 . 只出现一次，而不能出现两次以上   
        obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        return obj;
    }