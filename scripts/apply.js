var applicationForm = document.getElementById("applicationForm")
var name
var position

function submitApplication() {
	name = document.getElementById("name").value
	position = document.getElementById("position").value
	window.alert(`You have submitted your application for ${position}, ${name}.`)
}

function showApplicationForm() {
	applicationForm.style.display = "block"
}
