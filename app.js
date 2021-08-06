// target the input element
const input = document.getElementById('action__input_1')
// click handler
const toggleMenu = (event) => {
  // target the menu element
  const menu = document.getElementById('action__menu_1')
  menu.classList.toggle('hidden')
}
// bind the event
input.addEventListener('click', toggleMenu)

// dark mode
// target the switch element
const darkModeToggle = document.getElementById('dark__mode__toggle')
// toggle handler
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
// bind the event
darkModeToggle.addEventListener('change', darkModeToggleHandler)

// render table row
const data = 25
const dataPanel = document.querySelector('.table__body')
function renderTableRows (data) {
  let rawHTML = ' '

  for (let i = 1; i < data; i++) {
    rawHTML += `
      <tr class="table__row table__row__toggle">
        <td class="table__cell table__cell--checkbox">
          <input type="checkbox" />
        </td>
          <td class="table__cell table__cell--id">${i}</td>
          <td class="table__cell table__cell--name">NewYear${i}</td>
          <td class="table__cell table__cell--advertiser">
            <span class="cell__advertiser__line">Food Market</span>
            <span class="cell__advertiser__line cell__advertiser__line--group">
              Kelly
            </span>
          </td>
          <td class="table__cell table__cell--description">holiday night during chr...</td>
          <td class="table__cell table__cell--price">$2000</td>
          <td class="table__cell table__cell--starttime">2020/12/24 ${i}:30</td>
          <td class="table__cell table__cell--endtime">2021/01/02 ${i}:00</td>
          <td class="table__cell table__cell--action">
          <img
            class="cell__action__icon"
            src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg"
            id="action__input_${i}"
            alt="menu"
          />
          <div
            class="action__menu hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="action__input_${i}"
            id="action__menu_${i}"
          >
          <menu class="menu__body">
            <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/duplicate.svg"
                class="menu__item__icon"
              />
              <span>Duplicate</span>
            </menuitem>
            <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/edit.svg"
                class="menu__item__icon"
              />
              <span>Edit</span>
            </menuitem>
            <menuitem class="menu__item">
              <img
                src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/delete.svg"
                class="menu__item__icon"
              />
              <span>Delete</span>
            </menuitem>
          </menu>
        </div>
      </td>
    </tr>
    `
  }
  dataPanel.innerHTML = rawHTML
}
renderTableRows(data)

const tableRowsInput = document.querySelector('.main__table')
const checkedToggleAll = document.querySelectorAll(' .table__row__toggle')

// toggle handler
const checkedToggleHandler = (event) => {
  const targetRow = event.target.parentElement.parentElement
  // click header's checkbox && checkbox 's value is checked
  if (targetRow.classList.contains('table__header') && event.target.checked) {
    checkedToggleAll.forEach((row) => {
      row.classList.add('table__row__checked')
      row.querySelector('input').checked = 'checked'
    })
    // click header's checkbox
  } else if (targetRow.classList.contains('table__header')) {
    checkedToggleAll.forEach((row) => {
      row.classList.remove('table__row__checked')
      row.querySelector('input').checked = ''
    })

    // click single row to toggle checked
  } else {
    targetRow.classList.toggle('table__row__checked')
    targetRow.firstElementChild.firstElementChild.toggleAttribute('checked')
  }
}

// bind the event
tableRowsInput.addEventListener('change', checkedToggleHandler)
