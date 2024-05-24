// document.getElementById('fetch-lore').addEventListener('click', async () => {
//     console.log('Button clicked'); // Debugging statement
//     try {
//         const response = await fetch('/lore');
//         console.log('Request sent'); // Debugging statement
//         const data = await response.json();
//         console.log('Data received:', data); // Debugging statement
//         document.getElementById('lore-text').innerText = data.lore;
//     } catch (error) {
//         console.error('Error fetching lore:', error);
//         document.getElementById('lore-text').innerText = 'Failed to load.';
//     }
// });