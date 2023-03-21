const inputWithArrow = document.querySelector('.order-certificate__date-picker-input')

let dp = new AirDatepicker('#airdatepicker', {
  autoClose: true,
  minDate: new Date(),
  // visible: true,
  classes: "order-certificate__calendar",
  navTitles: {
    days: '<i>MMMM</i> yyyy',
  },
  prevHtml: '<svg><path d="M0 5.5L5.25 0.73686L5.25 10.2631L0 5.5Z"/></svg>',
  nextHtml: '<svg><path d="M6 5.5L0.75 10.2631L0.75 0.73686L6 5.5Z"/></svg>',
  onShow() {
    inputWithArrow.classList.add('order-certificate__date-picker-input_open')
  },
  onHide() {
    inputWithArrow.classList.remove('order-certificate__date-picker-input_open')
  }
})