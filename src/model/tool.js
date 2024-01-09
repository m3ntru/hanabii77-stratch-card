export const createPrime = () => {
  const q = [30, 900, 4000, 10000];
  const e = ["ur", "ssr", "sr", "r"];
  let r = "";
  let i,j;
  for (j = 0; j < 4; j++) {
    if (Math.random() * 10000 < q[j]) {
      r = e[j];
      break;
    }
  }
  const rand = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  let arr = [];
  let random = rand(11, 30);
  for (i = 1; i <= 11; i++) {
    arr.push(random);
    while (arr.includes(random)) {
      random = rand(11, 30);
    }
  }
  let temp;
  let luck = [];
  let pool = [];

  temp = arr.pop();
  luck.push(temp);
  pool.push([temp, r]);

  for (i = 1; i <= 2; i++) {
    temp = arr.pop();
    luck.push(temp);
  }

  for (i = 1; i <= 8; i++) {
    temp = arr.pop();
    pool.push([temp, e[Math.floor(Math.random() * 4)]]);
  }
  const shuffleArray = (inputArray) => {
    inputArray.sort(() => Math.random() - 0.5);
  };
  shuffleArray(luck);
  shuffleArray(pool);
  const qq = [100, 200, 10000];
  const ee = ["mrm", "mk", "n"];
  let img = "";
  for (j = 0; j < 3; j++) {
    if (Math.random() * 10000 < qq[j]) {
      img = ee[j];
      break;
    }
  }
  console.log(r);
  console.log({luck, pool, img});
  return {luck, pool, img};
};

export const createFree = () => {
  const q = [30, 150, 1000, 10000];
  const e = ["ssr", "sr", "r", "n"];
  let j;
  let r = "";
  for (j = 0; j < 4; j++) {
    if (Math.random() * 10000 < q[j]) {
      r = e[j];
      break;
    }
  }
  let result = [];
  let time = 5;
  if (r !== "n") {
    time = 4;
    const b = Math.floor(Math.random() * 85) + 11;
    const a = b + (Math.floor(Math.random() * 2) + 1);
    result.push([a, b, r]);
  }

  const ee = ["ssr", "sr", "r"];
  for (j = 0; j < time; j++) {
    const b = Math.floor(Math.random() * 83) + 13;
    const a = b - (Math.floor(Math.random() * 3) + 1);
    result.push([a, b, ee[Math.floor(Math.random() * 3)]]);
  }

  const shuffleArray = (inputArray) => {
    inputArray.sort(() => Math.random() - 0.5);
  };
  shuffleArray(result);
  console.log(r);
  console.log(result);
  return result;
};
