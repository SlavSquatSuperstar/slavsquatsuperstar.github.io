var applicationForm = document.getElementById("applicationForm")
var name
var position

function submitApplication() {
	name = document.getElementById("name").value
	position = document.getElementById("position").value
	window.alert(`Thank you, ${name}. You have submitted your application for ${position}.`)
}

function showApplicationForm() {
	applicationForm.style.display = "block"
}
