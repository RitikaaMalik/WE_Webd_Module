document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('table-of-contents');
    const sections = document.querySelectorAll('h2, h3');

    if (toc) {
        const tocList = document.createElement('ul');

        sections.forEach(section => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = section.textContent;
            link.href = `#${section.id}`;
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        toc.appendChild(tocList);
    }
});
