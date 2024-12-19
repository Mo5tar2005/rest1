
// إضافة أكلة للـ Favorites
function addToFavorites(recipeName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeName)) {
        favorites.push(recipeName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('تم إضافة الأكلة للمفضلة!');
    } else {
        alert('الأكلة دي موجودة بالفعل في المفضلة!');
    }
}

// جلب الفافوريت للعرض
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favContainer = document.getElementById('favContainer');
    favContainer.innerHTML = '';
    favorites.forEach(recipe => {
        favContainer.innerHTML += <div>${recipe}</div>;
    });
}






