const Texts = [
  'Social Media Management', 'Long Form Video ', 'Short Form Content Repurpose',
  'Animated Subtitles', 'Thumbnails', 'Custom Video Animations',
  'Visual Effects', 'Green Screen Editing',
  'Custom Video Captions', 'Color Grading', 'Sound Design', 'Instagram posts & carousel'
];
var tagCloud = TagCloud('.Sphere', Texts, {
  // Sphere radius in px
  radius: 250,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',
  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,
  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true
});
// Giving color to each text in sphere
var color = '#214b8a';
document.querySelector('.Sphere').style.color = color;