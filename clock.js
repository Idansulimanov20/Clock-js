function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

   
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}


setInterval(updateClock, 1000);
updateClock(); 
