import dateFormat from './formatDate';

const isExpired = (expiredTime: string) => {
  const expiredTimes = expiredTime.split('-');
  const currentTimes = (dateFormat(new Date()).split(' '))[0].split('-');
  for (let i = 0; i < 3; i++) {
    if (Number(expiredTimes[i]) < Number(currentTimes[i])) {
      return true;
    } else if(Number(expiredTimes[i]) > Number(currentTimes[i])) {
      return false;
    }
  }
  return true;
}

export default isExpired;