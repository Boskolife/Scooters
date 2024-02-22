export const openModal = function () {
    const button: HTMLElement | null = document.querySelector('.topics');
    const modal: HTMLElement | null = document.querySelector('.topics_list');
    const closeElem: HTMLElement | null = document.querySelector('.close_element');
  
    const closeModal = () => {
      if (modal) {
        modal.classList.remove('topic_active');
      }
      document.body.classList.remove('body_lock');
    }
  
    if (closeElem) {
      closeElem.addEventListener('click', () => {
        closeModal();
      });
    }
  
    if (button && modal) {
      button.addEventListener('click', () => {
        modal.classList.add('topic_active');
        document.body.classList.add('body_lock');
      });
    }

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
  };
  