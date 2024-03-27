export default async function decorate(block) {
  const hello = document.createElement('div');
  hello.className = 'hello';
  hello.innerHTML = block.firstElementChild.innerText;
  block.textContent = '';
  block.append(hello);
}
