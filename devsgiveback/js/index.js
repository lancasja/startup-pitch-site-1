// when the asterisk is hovered over
// the citation changes color

// get the asterisk
var asterisk = document.querySelector('#asterisk');
var citation = document.querySelector('#citation');

console.log(citation);

asterisk.addEventListener('mouseenter', function() {
	citation.style.color = '#fff';
});

asterisk.addEventListener('mouseleave', function() {
	citation.style.color = '#ddd';
});