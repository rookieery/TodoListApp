
const checkAll = (state:any) => {
  let flag = true;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(state.emailAddress)) {
      document.getElementById('emailAddress').innerText = '输入邮箱格式错误！（正常邮箱格式）';
      flag = false;
    } else {
      document.getElementById('emailAddress').innerText = '';
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

export default checkAll;