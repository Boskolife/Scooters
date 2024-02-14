export const openPopup = function () {
  const popupList = document.querySelectorAll<HTMLDivElement>('.article_title');
  const popupContentList =
    document.querySelectorAll<HTMLDivElement>('.popUp_content');
  const popupContainer =
    document.querySelector<HTMLDivElement>('.popUp_container');
  const closePopupButtons =
    document.querySelectorAll<HTMLButtonElement>('.close_element');

  const popupContentArray = Array.from(popupContentList);

  const removeActiveClass = () => {
    popupContentArray.forEach((popupContent) => {
      popupContent.classList.remove('popUp_active');
    });
    document.body.classList.remove('body_lock');
    popupContainer?.classList.remove('activeContainer');
  };

  popupList.forEach((item, index) => {
    item.addEventListener('click', () => {
      popupContentArray.forEach((popupContent, contentIndex) => {
        if (index === contentIndex) {
          popupContent.classList.add('popUp_active');
        }
      });
      document.body.classList.add('body_lock');
      popupContainer?.classList.add('activeContainer');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      removeActiveClass();
    }
  });

  closePopupButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeActiveClass();
    });
  });
};
