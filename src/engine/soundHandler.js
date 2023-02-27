export function playSound(sound, volume = 1) {
  sound.volume = volume;

  !sound.paused && sound.currentTime > 0
    ? (sound.currentTime = 0)
    : sound.play();
}

export function stopSound(sound) {
  sound.pause();
  sound.currentTime = 0;
}
