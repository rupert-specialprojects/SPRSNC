window.SITE = {
  name: "Rupert Purchase",
  contact: "rupert.purchase@outlook.com",
  launchDate: null
};

window.VLOG = {
  video: "https://www.youtube.com/watch?v=jXKhnYmLNc8",
  thumbnail: ""
};

/* Flight log. Media paths are relative to the site root (e.g. your GitHub Pages repo).
   Missing files show a "coming soon" placeholder instead of a broken image. */
window.LAUNCHES = {
  brothers: {
    event: "OROC Rocketober",
    place: "Brothers, OR",
    date: "Oct 2026",
    motor: "AeroTech I357",
    maxMach: 0.89,
    apogeeFt: 4320,
    media: {
      photoTall: { src: "Brotherslaunch1.jpg",  alt: "Photo from the Brothers, Oregon launch (portrait)" },
      videoTall: { src: "IMG_5051.mov", alt: "Video of the Brothers, Oregon launch (portrait)", poster: "" },
      photoWide: { src: "Brotherslaunch2.jpg",   alt: "Photo from the Brothers, Oregon launch" },
      photoTall2: { src: "Spindle%20Flight%201%20Stills.png",  alt: "Stills from Spindle's first flight (portrait)" },
    }
  },
  next: { motor: "Cesaroni I540", short: "I540" }
};

window.FLIGHT = {"apogee": 1768.595, "maxVel": 383.291, "maxMach": 1.129, "maxAccel": 406.942, "timeToApogee": 15.53, "groundHitVel": 6.442, "railExitVel": 27.65, "burnout": 1.18, "machWindow": [0.9, 1.42], "altAtMaxMach": 223.9, "tMaxMach": 1.09, "thrustPeak": 626.0};

window.HEAT = {
  petgTg: 80,
  stagC: 81.7,
  components: [
    { name: "Nose tip",  station: 0.00, peakC: 67.8, group: "nose" },
    { name: "Nose cone", station: 0.15, peakC: 53.3, group: "nose" },
    { name: "Body fwd",  station: 0.16, peakC: 43.5, group: "airframe" },
    { name: "Body mid",  station: 0.79, peakC: 38.2, group: "airframe" },
    { name: "Body aft",  station: 1.60, peakC: 36.0, group: "airframe" },
    { name: "Fin edge",  station: 1.45, peakC: 45.2, group: "fin" },
    { name: "Fin epoxy", station: 1.40, peakC: 44.9, group: "fin" }
  ]
};

window.FLUTTER = {
  peakSpeed: 383.3,
  flutterSpeed: 437.1,
  flutterSpeedFull: 618.1,
  safetyFactor: 1.14,
  safetyFactorFull: 1.61,
  required: 1.5,
  knockdown: 0.5,
  shearModulusGPa: 0.38,
  altitudeAslM: 1638
};

window.VELOCITY = {
  N: 500,
  binStart: 1.3638,
  binWidth: 0.0095,
  counts: [3, 0, 1, 4, 7, 9, 17, 17, 27, 30, 24, 31, 39, 40, 31, 39, 31, 40, 33, 14, 18, 11, 11, 10, 4, 2, 3, 0, 2, 2],
  mean: 1.50,
  sd: 0.05
};
