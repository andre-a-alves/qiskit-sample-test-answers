function toggleVisibility(elementId, level) {
    const toggleElement = document.getElementById(elementId);
    const levelElements = document.getElementsByClassName(level)
    if (toggleElement.classList.contains('hidden')) {
        toggleElement.classList.remove('hidden');
    } else {
        toggleElement.classList.add('hidden');
    }
    console.log(toggleElement)
    console.log(levelElements[0])
    for (const element of levelElements) {
        if (element !== toggleElement) {
            element.classList.add('hidden');
        }
    }
}

function toggleActive(button) {
    if (button.classList.contains("pure-button-active")) {
        button.classList.remove("pure-button-active")
    } else {
        button.classList.add("pure-button-active");
    }
}