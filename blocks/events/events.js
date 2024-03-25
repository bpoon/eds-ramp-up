export default async function decorate(block) {
  const eventslist = document.createElement('div');
  eventslist.className = 'events-list';
  eventslist.setAttribute('role', 'eventlist');
  const events = [...block.children];
  events.forEach((event) => {
    const title = event.firstElementChild;
    const type = event.lastElementChild.innerHTML;
    const eventdiv = document.createElement('div');
    eventdiv.className = `event-type-${type}`;
    eventdiv.setAttribute('role', 'tabpanel');
    eventdiv.innerHTML = title.innerHTML;
    eventslist.append(eventdiv);
  });
  block.textContent = '';
  block.append(eventslist);
}
