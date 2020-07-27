
const checkAll = (state:any) => {
  let flag = true;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(state.emailAddress)) {
      document.getElementById('emailAddress').innerText = '输入邮箱格式错误！（正常邮箱格式）';
      flag = false;
    } else {
      document.getElementById('emailAddress').innerText = '';
    }
    if (checkDate(state.expiredTime)) {
      document.getElementById('expiredTime').innerText = '输入日期格式或信息错误！（按照yyyy-MM-dd hh:mm:ss格式）';
      flag = false;
    } else {
      document.getElementById('expiredTime').innerText = '';
    }
    if (state.title === '') {
      document.getElementById('title').innerText = '标题不能为空！';
      flag = false;
    } else {
      document.getElementById('title').innerText = '';
    }
    if (state.text === '') {
      document.getElementById('text').innerText = '文本内容不能为空！';
      flag = false;
    } else {
      document.getElementById('text').innerText = '';
    }
    return flag;
}

const checkDate = (date:String) => {
  const result = date.match(/((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/);
  return result === null;
}

export default checkAll;