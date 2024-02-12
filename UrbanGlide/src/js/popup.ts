export const openPopup = function () {
    const popupList = document.querySelectorAll<HTMLDivElement>('.gallery_item');
    const popupContentList = document.querySelectorAll<HTMLDivElement>('.popUp_content');
    const popupContainer = document.querySelector<HTMLDivElement>('.popUp_container');
    const closePopupButtons = document.querySelectorAll<HTMLButtonElement>('.close_element'); // Изменение на querySelectorAll для получения всех элементов

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

    closePopupButtons.forEach((button) => { 
        button.addEventListener('click', () => {
            removeActiveClass();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            removeActiveClass();
        }
    });
};
