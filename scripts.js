
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mainContent").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainContent").style.marginLeft = "0";
}
function showPage(pageId) {
  document.querySelectorAll('.home, .trackz').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}
function updateCharacterLimit() {
  const input = document.getElementById('userName').value;
  document.getElementById('characterLimit').innerText = `${input.length} / 20`;
}
function submitName() {
  const name = document.getElementById('userName').value;
  if (name) {
    document.getElementById('namePopup').style.display = 'none';
    document.getElementById('homeContent').innerHTML = `<h2>Welcome, ${name}!</h2>`;
  }
}
window.onload = () => {
  document.body.classList.add('loaded');
  document.getElementById('namePopup').style.display = 'block';
};
