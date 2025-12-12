export default function decorate(block) {
  const quote = block.querySelector('blockquote');
  const attribution = block.querySelector('p');

  block.innerHTML = `
    <div class="testimonial-wrapper">
      <blockquote>${quote?.textContent || ''}</blockquote>
      <p class="attribution">${attribution?.textContent || ''}</p>
    </div>
  `;
}
