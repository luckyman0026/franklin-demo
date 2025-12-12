export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('hero-row');
  });
}
