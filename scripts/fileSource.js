if (window.location.hostname == "localhost") {
  root = "~/jbdouz@gmail.com - Google Drive/My Drive/UmelbCourses/extracurLearning/frontend/learn_enough_html_css_layout_to_be_dangerous/ch2_CSS/css_example/"
} else {
  root = "https://jbdouz/github.io/css_example/"
}

document.getElementById("homepage").href = root

document.getElementById("css-reset").href = root + "css/reset.css"
document.getElementById("css-style").href = root + "css/style.css"

document.getElementById("logo-image").src = root + "images/logo.png"
document.getElementById("bio-box-header-image").src = root + "images/DSCF0095.jpg"

