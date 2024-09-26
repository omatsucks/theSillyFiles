function getDailyItem(items) {
    const today = new Date().toISOString().split('T')[0]; // Get the current date (YYYY-MM-DD)
    
    // Check if an item is already stored for today
    const storedData = JSON.parse(localStorage.getItem('dailyItem'));

    if (storedData && storedData.date === today) {
        return storedData.item; // Return the item if it's already set for today
    }

    // Choose a random item from the array
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // Store the item and today's date in localStorage
    localStorage.setItem('dailyItem', JSON.stringify({ date: today, item: randomItem }));

    return randomItem;
}

// Example usage:
const items = [
    { text: 'Is Omat really that huge?', link: 'omat' },
    { text: 'The Tragic Tale of Ahmed\'s Brainrot: From King of Comedy to Walking Meme', link: 'Ahmed' },
    { text: 'The Rise and Fall of YoYoM: A Tale of Ego Gone Wild', link: 'yoyo' },
    { text: '"Ahmad, I Got Light!" – The Hilarious Tale of Mischievous and His Shiny New Power', link: 'mischievous' },
    { text: 'Welcome to Sillyville: The Ultimate Playground of Fun and Whimsy!', link: 'sillyville' }
];

const dailyItem = getDailyItem(items);

// Update button content and link
const dailyItemButton = document.getElementById('dailyItem');
dailyItemButton.textContent = dailyItem.text;
dailyItemButton.onclick = function() {
    window.location.href = dailyItem.link; // Redirect to the correct file on click
};
