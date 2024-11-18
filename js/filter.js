function filterSelection(category) {
  var items = document.querySelectorAll('.portfolio__item2'); // Отримуємо всі елементи портфоліо

  // Якщо категорія "all" - показуємо всі елементи
  if (category === 'all') {
    items.forEach(item => {
      item.style.display = 'block'; // Показуємо елементи
    });
  } else {
    // Якщо категорія не "all", ховаємо всі елементи, а потім показуємо тільки відповідні
    items.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = 'block'; // Показуємо елементи з відповідною категорією
      } else {
        item.style.display = 'none'; // Ховаємо всі інші елементи
      }
    });
  }
}