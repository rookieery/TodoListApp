const isExpired = (expiredTime: string, createTime: string) => {
  const expiredTimes = expiredTime.split('-');
  const createTimes = (createTime.split(' '))[0].split('-');
  for (let i = 0; i < 3; i++) {
    if (Number(expiredTimes[i]) < Number(createTimes[i])) {
      return true;
    } else if(Number(expiredTimes[i]) > Number(createTimes[i])) {
      return false;
    }
  }
  return false;
}

export default isExpired;