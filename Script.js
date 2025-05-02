function changeContent() {
    const text = document.getElementById('dynamic-text');
    text.textContent = "The content has been updated with JavaScript!";
    text.style.color = "green";
    text.style.fontWeight = "bold";
  }
  
  function addElement() {
    const container = document.getElementById('element-container');
    const newDiv = document.createElement('div');
    newDiv.textContent = "I was added dynamically!";
    newDiv.className = "dynamic-box";
    container.appendChild(newDiv);
  }
  
  function removeElement() {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }