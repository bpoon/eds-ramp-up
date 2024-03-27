export default async function decorate(block) {
  const hello = document.createElement('div');
  hello.className = 'hello';
  hello.innerHTML = block.innerHTML;
  block.textContent = '';
  block.append(hello);
}
