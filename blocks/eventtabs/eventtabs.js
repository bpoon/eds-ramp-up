// eslint-disable-next-line import/no-unresolved
import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {
  // build tablist
  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  // decorate tabs and tabpanels
  const tabs = [...block.children].map((child) => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);

    // decorate tabpanel
    // const tabpanel = block.children[i];
    // tabpanel.className = 'tabs-panel';
    // tabpanel.id = `tabpanel-${id}`;
    // tabpanel.setAttribute('aria-hidden', !!i);
    // tabpanel.setAttribute('aria-labelledby', `tab-${id}`);
    // tabpanel.setAttribute('role', 'tabpanel');
    // if (!hasWrapper(tabpanel.lastElementChild)) {
    //   tabpanel.lastElementChild.innerHTML = `<p>${tabpanel.lastElementChild.innerHTML}</p>`;
    // }

    const eventType = block.children[i].lastElementChild.innerHTML;

    // build tab button
    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.id = `tab-${id}`;
    button.innerHTML = tab.innerHTML;
    button.setAttribute('aria-controls', `tabpanel-${id}`);
    button.setAttribute('aria-selected', !i);
    button.setAttribute('role', 'tab');
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
      document.querySelectorAll('[role=tabpanel]').forEach((panel) => {
        if (eventType !== '0') {
          panel.setAttribute('hidden', true);
        } else {
          panel.removeAttribute('hidden');
        }
        // panel.setAttribute('aria-hidden', true);
      });
      tablist.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('aria-selected', false);
      });
      // tabpanel.setAttribute('aria-hidden', false);
      document.querySelectorAll(`.event-type-${eventType}`).forEach((eventDiv) => {
        eventDiv.removeAttribute('hidden');
      });

      button.setAttribute('aria-selected', true);
    });
    tablist.append(button);
    tab.remove();
  });

  block.textContent = '';
  block.prepend(tablist);
}
