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

const Playable = <T extends new (...args: any[]) => {}>(Base: T) =>
	class extends Base {
		private _duration?: number = undefined;
		private _currentTime?: number = undefined;

		play() {
			console.log(`Playing ${Base.name}`);
		}

		pause() {
			console.log(`Pausing ${Base.name}`);
		}

		stop() {
			console.log(`Stopping ${Base.name}`);
		}

		get duration(): number | undefined {
			return this._duration;
		}

		set duration(newDuration: number) {
			this._duration = newDuration;
		}

		get currentTime(): number | undefined {
			return this._currentTime;
		}

		set currentTime(newTime: number) {
			this._currentTime = newTime;
		}
	};

class Video {
	constructor(public title: string, public url: string) {}
}

class RegularVideo extends Video {}

class PremiumVideo extends Video {}

class LiveVideo extends Video {}

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

	if (i !== videos.length - 1) console.log();
});
