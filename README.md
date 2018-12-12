# JavaScript-regex

常用的正则表达式总结

### 验证数字
```
    var reg = /^[0-9]*$/;<br>
    var texts = "12132";<br>
    if(reg.test(texts)){
      console.log("验证数字");
    }
```
 
