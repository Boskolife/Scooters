export function burger() {
  const btnBurger: HTMLElement | null =
    document.querySelector('.burger_menu');
  if (!btnBurger) {
    return;
  }
  const menuBurger: HTMLElement | null = document.querySelector('.menu');

  document.addEventListener('click', function (event: MouseEvent) {
    if (btnBurger.contains(event.target as Node)) {
      menuBurger?.classList.toggle('menu_active');
      btnBurger.classList.toggle('burger_active');
      document.body.classList.toggle('body_lock');
      return;
    }
    if (!menuBurger?.contains(event.target as Node)) {
      menuBurger?.classList.remove('menu_active');
      btnBurger.classList.remove('burger_active');
      document.body.classList.remove('body_lock');
    }
  });
}
