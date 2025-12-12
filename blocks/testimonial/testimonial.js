export default function decorate(block){
    const quote = block.querySelector('p:first-of-type').textContent;
    const author = block.querySelector('p:last-of-type').textContent;

    block.innerHTML =`
    <div class = "testimonial-card">
        <blockquote>${quote}</blockquote>
        <span class = "author">${author}</span>
    </div>
    `;  
}