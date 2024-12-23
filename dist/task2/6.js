// // 6. Create a mixin that will add the ability to play, pause, and stop a video, as well as to show its duration and current playback time.
// /*
//   -Create a TypeScript mixin named Playable that will add the functionality to a video class:
//     -duration
//     -currentTime
//     -play()
//     -pause()
//     -stop()
//     -getDuration()
//     -getCurrentTime()
//   -Create instances of each video class and test their Playable functionality by calling the methods and displaying their properties.
const Playable = (Base) => class extends Base {
    _duration = undefined;
    _currentTime = undefined;
    play() {
        console.log(`Playing ${Base.name}`);
    }
    pause() {
        console.log(`Pausing ${Base.name}`);
    }
    stop() {
        console.log(`Stopping ${Base.name}`);
    }
    get duration() {
        return this._duration;
    }
    set duration(newDuration) {
        this._duration = newDuration;
    }
    get currentTime() {
        return this._currentTime;
    }
    set currentTime(newTime) {
        this._currentTime = newTime;
    }
};
class Video {
    title;
    url;
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}
class RegularVideo extends Video {
}
class PremiumVideo extends Video {
}
class LiveVideo extends Video {
}
const [PlayableRegularVideo, PlayablePremiumVideo, PlayableLiveVideo] = [
    Playable(RegularVideo),
    Playable(PremiumVideo),
    Playable(LiveVideo),
];
const videos = [
    new PlayableRegularVideo('Regular Vid', 'reg-vid.com'),
    new PlayablePremiumVideo('Premium Vid', 'prem-vid.com'),
    new PlayableLiveVideo('Live Vid', 'live-vid.com'),
];
videos.forEach((vid, i) => {
    const { title, url, play, pause, stop } = vid;
    vid.duration = (i + 1) * 2;
    vid.currentTime = i + 1;
    console.log(`Title: ${title}\nUrl: ${url}\nDuration:`, vid.duration, '\nCurrentTime:', vid.currentTime);
    play();
    pause();
    stop();
    if (i !== videos.length - 1)
        console.log();
});
export {};
