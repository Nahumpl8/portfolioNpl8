const workItem = document.querySelectorAll('.item_developer_work');
const visitSite = document.querySelectorAll('.mostrar_site')

workItem.forEach(item => {
    item.addEventListener('mouseover', () => 
    {
        visitSite.forEach(site => {site.classList.toggle('mostrar_site')})
    })
})

console.log('hola')