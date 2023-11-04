document.addEventListener('alpine:init', () => {
  Alpine.store('notifications', {
    items: [],

    notify(message) {
      this.items.push(message);
    },
  });

  Alpine.store('site', {
    title: 'AAAA',
    colors: [
      { id: 1, label: 'Red' },
      { id: 2, label: 'Orange' },
      { id: 3, label: 'Yellow' },
    ],
  });
});
