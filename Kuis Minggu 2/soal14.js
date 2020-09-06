const volume = (...args) => {
  let vol = args[0]*args[1]*args[2];
  if (vol){
    console.log(`Volume balok/kubus dengan 3 angka pertama adalah ${vol}`);
  } else {
    console.log('kurang informasi');
  }
}

volume(5);
volume(5,5);
volume(5,5,5);
volume(5,5,5,5);