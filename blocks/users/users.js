export default async function decorate(block) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    block.innerHTML = '';
    users.forEach(user=>{
        const row = document.createElement('div');
        row.className = 'user-row';
        row.textContent = `${user.name} - ${user.email}`;
        block.append(row);
    });
}